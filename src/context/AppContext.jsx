import { createContext, useCallback, useContext, useEffect, useMemo, useReducer, useRef, useState } from "react";
import { baseFuncionarios } from "../data/seedFuncionarios.js";
import { baseActividadesPlan } from "../data/seedActividades.js";
import { baseReposiciones } from "../data/seedReposiciones.js";
import { baseRoleData } from "../data/seedRoles.js";
import {
  loadState,
  loadStateAsync,
  saveState,
  clearState,
  getLastSavedAt,
  getBackendInfo,
  getBackendInfoAsync,
  SCHEMA_VERSION,
} from "../lib/storage.js";
import { REGLAS_DEFAULT, mergeReglas } from "../config/reglas.js";
import { toLocalISODate } from "../domain/fechas.js";

const AppContext = createContext(null);

const fechaInicial = new Date();
const fechaInicialIso = toLocalISODate(fechaInicial);

// Nombre de la migración única de limpieza de datos legados (ver
// mergePersistedWithSeed). Un install nuevo arranca con la migración ya
// marcada como aplicada: no hay nada legado que limpiar.
const MIGRACION_LIMPIEZA_2026 = "limpiezaEnzoYSetDic2026";

// Estado por defecto (datos semilla) cuando no hay nada persistido.
const seedState = {
  view: "dia",
  personas: baseFuncionarios,
  month: fechaInicial.getMonth(),
  year: fechaInicial.getFullYear(),
  compact: false,
  roleData: baseRoleData,
  actividadesPlan: baseActividadesPlan,
  reposiciones: baseReposiciones,
  diaVista: fechaInicialIso,
  reglas: { ...REGLAS_DEFAULT },
  migraciones: { [MIGRACION_LIMPIEZA_2026]: true },
};

// El dashboard quedó fuera de la navegación. Normalizamos snapshots o
// llamadas antiguas para que siempre aterricen en la nueva vista principal.
function vistaActiva(view) {
  return view === "dashboard" ? "dia" : view;
}

// Incorpora datos semilla nuevos a instalaciones existentes sin borrar
// información del usuario: las fichas y celdas ya persistidas tienen
// prioridad sobre lo importado desde la fuente institucional.
//
// IMPORTANTE — historia de un bug de pérdida de datos ya corregido:
// Esta función solía filtrar SIEMPRE (en cada carga) a "Enzo Martini" y
// cualquier clave de roleData de setiembre-diciembre 2026, con la
// intención de limpiar una persona que salió del puesto y un período sin
// datos de la fuente institucional. El problema: al ejecutarse en CADA
// carga (no solo una vez), esos filtros borraban silenciosamente
// cualquier edición posterior del usuario para esos meses — cada vez más
// grave desde que la vista de Roles pasó a un calendario continuo que
// permite editar libremente más allá de agosto 2026. Ahora la limpieza es
// una migración única e idempotente, marcada en `state.migraciones`: se
// aplica solo si el estado persistido es "legado" (no tiene la marca
// todavía) y nunca se repite una vez aplicada, así que las ediciones que
// el usuario haga en esos meses a partir de ahora se conservan.
function mergePersistedWithSeed(stored) {
  const migracionesAplicadas = stored?.migraciones || {};
  const limpiezaYaAplicada = !!migracionesAplicadas[MIGRACION_LIMPIEZA_2026];

  const storedPersonasRaw = (Array.isArray(stored?.personas) ? stored.personas : []).filter(Boolean);
  const storedPersonas = limpiezaYaAplicada
    ? storedPersonasRaw
    : storedPersonasRaw.filter((persona) => persona.nombre !== "Enzo Martini");

  const storedByName = new Map(storedPersonas.map((persona) => [persona.nombre, persona]));
  const seedNames = new Set(baseFuncionarios.map((persona) => persona.nombre));

  const storedRoleDataRaw = stored?.roleData || {};
  const storedRoleData = limpiezaYaAplicada
    ? storedRoleDataRaw
    : Object.fromEntries(
        Object.entries(storedRoleDataRaw).filter(
          ([key]) => !/^2026-(?:9|10|11|12)-/.test(key) && !key.includes("-Enzo Martini-"),
        ),
      );

  const personas = [
    ...baseFuncionarios.map((persona) => ({ ...persona, ...(storedByName.get(persona.nombre) || {}) })),
    ...storedPersonas.filter((persona) => persona.nombre && !seedNames.has(persona.nombre)),
  ];

  // Defensa adicional a la sanitización de importación (sanitize.js): un
  // snapshot corrupto en storage (no solo uno importado) podría traer
  // entradas `null`/no-objeto en estos arreglos. `indexarReposiciones()`
  // y los listados de actividades asumen forma de objeto en cada elemento.
  const actividadesPlan = Array.isArray(stored?.actividadesPlan)
    ? stored.actividadesPlan.filter((a) => a && typeof a === "object")
    : seedState.actividadesPlan;
  const reposiciones = Array.isArray(stored?.reposiciones)
    ? stored.reposiciones.filter((r) => r && typeof r === "object" && r.funcionario && r.fecha)
    : seedState.reposiciones;

  return {
    ...seedState,
    ...stored,
    view: vistaActiva(stored?.view ?? seedState.view),
    personas,
    actividadesPlan,
    reposiciones,
    roleData: { ...baseRoleData, ...storedRoleData },
    reglas: mergeReglas(stored?.reglas),
    migraciones: { ...migracionesAplicadas, [MIGRACION_LIMPIEZA_2026]: true },
  };
}

// Inicializador perezoso: intenta cargar desde storage, cae al seed.
function initialState() {
  const stored = loadState();
  if (!stored) return seedState;
  // Mezcla defensiva: si el shape persistido no tiene todos los campos,
  // completamos con seed para evitar `undefined`. Las reglas se mezclan
  // con los defaults para garantizar que campos nuevos (futuras versiones)
  // siempre tengan un valor.
  return mergePersistedWithSeed(stored);
}

function resolveUpdater(value, current) {
  return typeof value === "function" ? value(current) : value;
}

function reducer(state, action) {
  switch (action.type) {
    case "SET_VIEW":
      return { ...state, view: vistaActiva(action.payload) };
    case "SET_MONTH":
      return { ...state, month: resolveUpdater(action.payload, state.month) };
    case "SET_YEAR":
      return { ...state, year: resolveUpdater(action.payload, state.year) };
    case "SET_PERIODO":
      return { ...state, month: action.month, year: action.year };
    case "SET_COMPACT":
      return { ...state, compact: resolveUpdater(action.payload, state.compact) };
    case "SET_DIA_VISTA":
      return { ...state, diaVista: resolveUpdater(action.payload, state.diaVista) };
    case "SET_PERSONAS":
      return { ...state, personas: resolveUpdater(action.payload, state.personas) };
    case "SET_ACTIVIDADES_PLAN":
      return { ...state, actividadesPlan: resolveUpdater(action.payload, state.actividadesPlan) };
    case "SET_REPOSICIONES":
      return { ...state, reposiciones: resolveUpdater(action.payload, state.reposiciones) };
    case "SET_ROLE_DATA":
      return { ...state, roleData: resolveUpdater(action.payload, state.roleData) };
    case "SET_REGLAS": {
      const next = resolveUpdater(action.payload, state.reglas);
      return { ...state, reglas: mergeReglas(next) };
    }
    case "REPLACE_STATE":
      // Reemplaza completamente el estado persistido (import JSON o reset).
      return {
        ...seedState,
        ...action.payload,
        view: vistaActiva(action.payload?.view ?? seedState.view),
        reglas: mergeReglas(action.payload?.reglas),
      };
    default:
      return state;
  }
}

// Campos del estado que NO se persisten (UI ephemera).
const EPHEMERAL_KEYS = new Set(["view", "compact", "diaVista", "month", "year"]);

function pickPersistable(state) {
  const out = {};
  for (const k of Object.keys(state)) {
    if (!EPHEMERAL_KEYS.has(k)) out[k] = state[k];
  }
  return out;
}

const SAVE_DEBOUNCE_MS = 500;

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, undefined, initialState);
  const [lastSavedAt, setLastSavedAt] = useState(() => getLastSavedAt());
  const [pendingChanges, setPendingChanges] = useState(0);
  const [storageBackend, setStorageBackend] = useState(() => getBackendInfo());
  const [migracionLs, setMigracionLs] = useState(false);
  // Resultado del último intento de guardado, con detalle por backend.
  // `durableSaveFailed` es la señal que la UI usa para mostrar una
  // advertencia recuperable en vez de un simple "guardado" cuando
  // localStorage (rápido) funcionó pero IndexedDB (durable) falló.
  const [lastSaveResult, setLastSaveResult] = useState(null);
  const saveTimerRef = useRef(null);
  const firstRunRef = useRef(true);
  const hydratedFromIDBRef = useRef(false);
  // Evita disparar dos guardados en simultáneo (debounce + flush por
  // pagehide/visibilitychange casi al mismo tiempo).
  const guardandoRef = useRef(false);
  const pendingSaveRef = useRef(false);

  // Corrige `storageBackend` con una apertura REAL de IndexedDB (getBackendInfo
  // síncrono solo comprueba que la API exista, no que la base abra de verdad
  // — modo privado estricto o cuota agotada pueden hacer que "exista" pero
  // nunca abra).
  useEffect(() => {
    let cancelado = false;
    getBackendInfoAsync().then((info) => {
      if (!cancelado) setStorageBackend(info);
    });
    return () => {
      cancelado = true;
    };
  }, []);

  // Ref al estado actual para que el effect async pueda compararlo en el
  // momento del resolve (no en el momento del mount). Se actualiza en cada
  // render con el nuevo state.
  const currentStateRef = useRef(state);
  useEffect(() => {
    currentStateRef.current = state;
  });

  // Firma del estado inicial (post-localStorage), capturada UNA vez al
  // montar. Si la hidratación async tarda y el usuario edita algo en el
  // medio, el state actual ya no coincidirá con esta firma y se respetará
  // la edición sin sobrescribirla con el snapshot de Dexie.
  const initialSignatureRef = useRef(JSON.stringify(pickPersistable(state)));

  // Hidratación asíncrona desde IndexedDB tras el primer render. Si Dexie
  // tiene datos distintos o más nuevos que los de localStorage, los aplica
  // con REPLACE_STATE — pero SOLO si el usuario no editó nada en el
  // intervalo entre el mount y el resolve. Si editó, su cambio gana.
  useEffect(() => {
    let cancelado = false;
    (async () => {
      const { state: dbState, source, migrated } = await loadStateAsync();
      if (cancelado) return;
      if (migrated) setMigracionLs(true);
      if (dbState && source === "indexeddb") {
        const hydratedState = mergePersistedWithSeed(dbState);
        const dbSerialized = JSON.stringify(pickPersistable(hydratedState));
        const initialSerialized = initialSignatureRef.current;
        const currentSerialized = JSON.stringify(pickPersistable(currentStateRef.current));

        // Si el estado actual cambió respecto al inicial, hubo edición
        // del usuario durante la hidratación: NO sobrescribir.
        if (currentSerialized !== initialSerialized) {
          hydratedFromIDBRef.current = true;
          return;
        }
        // Si LS y Dexie ya coinciden, no hace falta despachar (evita
        // render extra en el caso normal del segundo arranque).
        if (initialSerialized !== dbSerialized) {
          dispatch({ type: "REPLACE_STATE", payload: hydratedState });
        }
      }
      hydratedFromIDBRef.current = true;
    })();
    return () => {
      cancelado = true;
    };
    // Solo se ejecuta una vez al montar.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Función de guardado real, reasignada en cada render para leer siempre
  // `currentStateRef.current` al vuelo (evita cerrar sobre un `state`
  // viejo cuando se dispara desde un listener registrado una sola vez,
  // como pagehide/visibilitychange más abajo). `guardandoRef` evita dos
  // guardados en simultáneo (debounce + flush casi al mismo tiempo);
  // `pendingSaveRef` asegura que, si llegó un cambio nuevo mientras un
  // guardado estaba en curso, se encadene otro guardado al terminar en
  // vez de perderlo silenciosamente.
  const flushSaveRef = useRef(null);
  flushSaveRef.current = async function flushSave() {
    if (guardandoRef.current) {
      pendingSaveRef.current = true;
      return;
    }
    guardandoRef.current = true;
    pendingSaveRef.current = false;
    try {
      const resultado = await saveState(pickPersistable(currentStateRef.current));
      setLastSaveResult(resultado);
      // Solo se considera "guardado" (limpia el contador de pendientes)
      // si AL MENOS UN backend lo confirmó. Si localStorage funcionó pero
      // IndexedDB (el backend durable) falló, lastSaveResult.idb queda en
      // false y la UI puede mostrar una advertencia recuperable en vez de
      // un simple check verde (ver Datos.jsx / SyncStatus.jsx).
      if (resultado.ls) setLastSavedAt(new Date().toISOString());
      if (resultado.ok) setPendingChanges(0);
    } finally {
      guardandoRef.current = false;
      if (pendingSaveRef.current) {
        pendingSaveRef.current = false;
        flushSaveRef.current();
      }
    }
  };

  // Persistencia con debounce. El primer render no dispara guardado para no
  // sobrescribir storage con el seed si la app cargó sin datos.
  useEffect(() => {
    if (firstRunRef.current) {
      firstRunRef.current = false;
      return undefined;
    }
    setPendingChanges((n) => n + 1);
    if (saveTimerRef.current) window.clearTimeout(saveTimerRef.current);
    saveTimerRef.current = window.setTimeout(() => {
      saveTimerRef.current = null;
      flushSaveRef.current();
    }, SAVE_DEBOUNCE_MS);
    return () => {
      if (saveTimerRef.current) window.clearTimeout(saveTimerRef.current);
    };
  }, [state]);

  // Flush inmediato si el usuario oculta la pestaña o cierra/navega fuera
  // con un guardado debounced todavía pendiente — de lo contrario el
  // timeout de 500ms podría no llegar a dispararse y el último cambio se
  // perdería silenciosamente.
  useEffect(() => {
    const flushSiHayPendiente = () => {
      if (saveTimerRef.current) {
        window.clearTimeout(saveTimerRef.current);
        saveTimerRef.current = null;
        flushSaveRef.current();
      }
    };
    const onVisibilityChange = () => {
      if (document.visibilityState === "hidden") flushSiHayPendiente();
    };
    window.addEventListener("pagehide", flushSiHayPendiente);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      window.removeEventListener("pagehide", flushSiHayPendiente);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  const setView = useCallback((v) => dispatch({ type: "SET_VIEW", payload: v }), []);
  const setMonth = useCallback((v) => dispatch({ type: "SET_MONTH", payload: v }), []);
  const setYear = useCallback((v) => dispatch({ type: "SET_YEAR", payload: v }), []);
  const setCompact = useCallback((v) => dispatch({ type: "SET_COMPACT", payload: v }), []);
  const setDiaVista = useCallback((v) => dispatch({ type: "SET_DIA_VISTA", payload: v }), []);
  const setPersonas = useCallback((v) => dispatch({ type: "SET_PERSONAS", payload: v }), []);
  const setActividadesPlan = useCallback((v) => dispatch({ type: "SET_ACTIVIDADES_PLAN", payload: v }), []);
  const setReposiciones = useCallback((v) => dispatch({ type: "SET_REPOSICIONES", payload: v }), []);
  const setRoleData = useCallback((v) => dispatch({ type: "SET_ROLE_DATA", payload: v }), []);
  const setReglas = useCallback((v) => dispatch({ type: "SET_REGLAS", payload: v }), []);

  const replaceState = useCallback((next) => {
    dispatch({ type: "REPLACE_STATE", payload: next });
  }, []);

  const resetReglas = useCallback(() => {
    dispatch({ type: "SET_REGLAS", payload: { ...REGLAS_DEFAULT } });
  }, []);

  // Async y coordinada: espera el resultado real de ambos backends antes
  // de reemplazar el estado, en vez de asumir éxito inmediato mientras el
  // borrado durable (IndexedDB) todavía está en curso.
  const resetToSeed = useCallback(async () => {
    if (saveTimerRef.current) {
      window.clearTimeout(saveTimerRef.current);
      saveTimerRef.current = null;
    }
    const resultado = await clearState();
    dispatch({ type: "REPLACE_STATE", payload: seedState });
    setLastSavedAt(null);
    setLastSaveResult(null);
    setPendingChanges(0);
    return resultado;
  }, []);

  const value = useMemo(
    () => ({
      ...state,
      setView,
      setMonth,
      setYear,
      setCompact,
      setDiaVista,
      setPersonas,
      setActividadesPlan,
      setReposiciones,
      setRoleData,
      setReglas,
      resetReglas,
      replaceState,
      resetToSeed,
      lastSavedAt,
      pendingChanges,
      lastSaveResult,
      durableSaveFailed: lastSaveResult ? !lastSaveResult.idb : false,
      schemaVersion: SCHEMA_VERSION,
      storageBackend,
      migracionLs,
      dispatch,
    }),
    [
      state,
      setView,
      setMonth,
      setYear,
      setCompact,
      setDiaVista,
      setPersonas,
      setActividadesPlan,
      setReposiciones,
      setRoleData,
      setReglas,
      resetReglas,
      replaceState,
      resetToSeed,
      lastSavedAt,
      pendingChanges,
      lastSaveResult,
      storageBackend,
      migracionLs,
    ]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within an <AppProvider>");
  return ctx;
}
