/**
 * Persistencia local del estado de la aplicación.
 *
 * Fase 5 paso 0: localStorage con `schemaVersion`.
 * Fase 5 paso 1: dual-write con IndexedDB vía Dexie (src/lib/db.js).
 * Fase 5 paso 2: `revision` monotónica + comparación determinista entre
 * backends, guardado async con resultado real de ambos, y flush explícito.
 *
 * Estrategia:
 *  - `loadState()` SIGUE SIENDO SÍNCRONO y lee de localStorage. Esto
 *    permite arranque inmediato sin esperar a IndexedDB.
 *  - `loadStateAsync()` lee AMBOS backends y devuelve el que tenga la
 *    `revision` más alta (desempate por `savedAt`, y si también empatan,
 *    localStorage gana por ser el backend síncrono). Es lo que el
 *    AppContext usa para hidratar tras el primer render.
 *  - `saveState()` es asíncrona: escribe en localStorage (rápido) y
 *    espera la escritura a IndexedDB (durable) antes de resolver, para
 *    poder informar el resultado REAL de ambos backends. Nunca se debe
 *    reportar "guardado" si el backend durable falló.
 *  - `clearState()` también es asíncrona y coordina el borrado de ambos
 *    backends antes de resolver.
 *
 * Migración: la primera vez que se llame a `loadStateAsync()`, si
 * IndexedDB está vacío y localStorage tiene datos, se copia
 * automáticamente. Idempotente.
 *
 * Si la versión persistida no coincide con `SCHEMA_VERSION`, se crea
 * un backup automático (`pnlq:backup:vN`) y se descarta el estado
 * obsoleto para evitar leer estructuras incompatibles.
 */

import {
  loadFromDexieWithMeta,
  saveToDexie,
  clearDexie,
  migrateFromLocalStorageIfNeeded,
  getLastSavedFromDexie,
  wipeDexie,
  getDb,
} from "./db.js";
import { SCHEMA_VERSION } from "./schemaVersion.js";
import { sanitizeImportedState } from "./sanitize.js";

export { SCHEMA_VERSION };
export const STORAGE_KEY = "pnlq:state";
export const LAST_SAVED_KEY = "pnlq:lastSavedAt";

const BACKUP_PREFIX = "pnlq:backup:v";

function safeStorage() {
  try {
    if (typeof window === "undefined" || !window.localStorage) return null;
    const k = "__pnlq_probe__";
    window.localStorage.setItem(k, "1");
    window.localStorage.removeItem(k);
    return window.localStorage;
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------
// Revisión monotónica
// ---------------------------------------------------------------------
// Se usa para decidir sin ambigüedad qué backend (localStorage o
// IndexedDB) tiene el snapshot más reciente cuando ambos existen y
// difieren: la revisión más alta gana. Solo se recurre al reloj
// (`savedAt`) como desempate si las revisiones coinciden (p. ej. datos
// legados sin revisión, ambos en 0).
let revisionConocida = null;

function leerRevisionCrudaLS() {
  const ls = safeStorage();
  if (!ls) return 0;
  try {
    const raw = ls.getItem(STORAGE_KEY);
    if (!raw) return 0;
    const parsed = JSON.parse(raw);
    return typeof parsed?.revision === "number" ? parsed.revision : 0;
  } catch {
    return 0;
  }
}

function asegurarRevisionInicial() {
  if (revisionConocida === null) revisionConocida = leerRevisionCrudaLS();
  return revisionConocida;
}

/** Registra que se vio una revisión (de cualquier backend); nunca retrocede. */
function notarRevision(rev) {
  asegurarRevisionInicial();
  if (typeof rev === "number" && rev > revisionConocida) revisionConocida = rev;
}

function siguienteRevision() {
  asegurarRevisionInicial();
  revisionConocida += 1;
  return revisionConocida;
}

/** Solo para tests: reinicia el contador de revisión en memoria. */
export function __resetRevisionParaTests() {
  revisionConocida = null;
}

/**
 * Carga el estado persistido desde localStorage (síncrono). Devuelve
 * null si no hay nada, si el JSON está corrupto o si la versión de
 * esquema no coincide.
 */
export function loadState() {
  const meta = loadStateWithMeta();
  return meta ? meta.state : null;
}

/** Igual que loadState() pero incluye `revision` y `savedAt`. */
export function loadStateWithMeta() {
  const ls = safeStorage();
  if (!ls) return null;
  const raw = ls.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return null;
    if (parsed.schemaVersion !== SCHEMA_VERSION) {
      const backupKey = `${BACKUP_PREFIX}${parsed.schemaVersion ?? "unknown"}-${Date.now()}`;
      try { ls.setItem(backupKey, raw); } catch { /* sin espacio: ignorar */ }
      return null;
    }
    asegurarRevisionInicial();
    return {
      state: parsed.state ?? null,
      revision: typeof parsed.revision === "number" ? parsed.revision : 0,
      savedAt: parsed.savedAt ?? null,
    };
  } catch {
    return null;
  }
}

/**
 * Compara dos snapshots con metadatos `{state, revision, savedAt}` (de
 * localStorage e IndexedDB) y devuelve cuál es más reciente. La revisión
 * monotónica decide primero; el reloj (`savedAt`) solo desempata si las
 * revisiones son iguales; si también empata o falta, localStorage gana
 * (es el backend síncrono, más probable de estar al día que una
 * escritura "fire-and-forget" a Dexie que pudo quedar rezagada).
 */
function elegirMasReciente(ls, idb) {
  if (!ls && !idb) return null;
  if (!ls) return { ...idb, source: "indexeddb" };
  if (!idb) return { ...ls, source: "localStorage" };
  const revLs = ls.revision ?? 0;
  const revIdb = idb.revision ?? 0;
  if (revLs !== revIdb) {
    return revLs > revIdb ? { ...ls, source: "localStorage" } : { ...idb, source: "indexeddb" };
  }
  const tLs = ls.savedAt ? Date.parse(ls.savedAt) : NaN;
  const tIdb = idb.savedAt ? Date.parse(idb.savedAt) : NaN;
  if (!Number.isNaN(tLs) && !Number.isNaN(tIdb) && tLs !== tIdb) {
    return tLs > tIdb ? { ...ls, source: "localStorage" } : { ...idb, source: "indexeddb" };
  }
  return { ...ls, source: "localStorage" };
}

/**
 * Carga el estado comparando AMBOS backends (asíncrono). Si IndexedDB
 * está vacío y localStorage tiene datos, los migra automáticamente antes
 * de comparar.
 *
 * Devuelve `{ state, source, migrated }` donde `source` indica de dónde
 * provino el snapshot ganador (`indexeddb` | `localStorage` | `null`).
 */
export async function loadStateAsync() {
  // Migración automática (idempotente): copia LS → Dexie si Dexie vacío.
  const mig = await migrateFromLocalStorageIfNeeded();

  const fromDexie = await loadFromDexieWithMeta();
  const fromLs = loadStateWithMeta();
  const ganador = elegirMasReciente(fromLs, fromDexie);
  if (!ganador) return { state: null, source: null, migrated: mig.migrated };

  // El próximo saveState() debe continuar contando desde la revisión más
  // alta vista hasta ahora, sin importar de qué backend vino.
  notarRevision(fromLs?.revision ?? 0);
  notarRevision(fromDexie?.revision ?? 0);

  return { state: ganador.state, source: ganador.source, migrated: mig.migrated };
}

/**
 * Persiste el estado en AMBOS backends y espera el resultado real de
 * cada uno antes de resolver — nunca reporta éxito solo porque
 * localStorage (el rápido) funcionó. Ambos backends reciben la MISMA
 * `revision`, generada una sola vez por guardado, para que queden
 * comparables sin ambigüedad.
 *
 * Devuelve `{ ok, ls, idb, revision }`. `ok` es `ls || idb`: el dato
 * sobrevive si AL MENOS UN backend lo guardó; `ls`/`idb` indican cada
 * resultado por separado para que la UI pueda mostrar una advertencia
 * recuperable si el backend durable falló aunque el caché rápido sí
 * haya funcionado.
 */
export async function saveState(state) {
  const revision = siguienteRevision();
  const savedAtIso = new Date().toISOString();

  const ls = safeStorage();
  let okLs = false;
  if (ls) {
    try {
      const payload = JSON.stringify({
        schemaVersion: SCHEMA_VERSION,
        savedAt: savedAtIso,
        revision,
        state,
      });
      ls.setItem(STORAGE_KEY, payload);
      ls.setItem(LAST_SAVED_KEY, savedAtIso);
      okLs = true;
    } catch {
      okLs = false;
    }
  }

  const okIdb = await saveToDexie(state, revision);

  return { ok: okLs || okIdb, ls: okLs, idb: okIdb, revision };
}

/**
 * Borra el estado de ambos backends de forma coordinada: espera el
 * resultado real de IndexedDB antes de resolver, en vez de reportar
 * éxito de inmediato con el borrado durable todavía en curso.
 */
export async function clearState() {
  const ls = safeStorage();
  let okLs = false;
  if (ls) {
    try {
      ls.removeItem(STORAGE_KEY);
      ls.removeItem(LAST_SAVED_KEY);
      okLs = true;
    } catch { /* ignorar */ }
  }
  const okIdb = await clearDexie().catch(() => false);
  const okWipe = await wipeDexie().catch(() => false);
  revisionConocida = null;
  return { ok: okLs && (okIdb || okWipe), ls: okLs, idb: okIdb || okWipe };
}

export function getLastSavedAt() {
  const ls = safeStorage();
  if (!ls) return null;
  try {
    return ls.getItem(LAST_SAVED_KEY);
  } catch {
    return null;
  }
}

/**
 * Igual que `getLastSavedAt` pero consulta IndexedDB; útil para
 * mostrar al usuario cuándo se guardó en el backend durable.
 */
export async function getLastSavedAtAsync() {
  return await getLastSavedFromDexie();
}

/** Devuelve un objeto exportable (snapshot) con metadatos. */
export function exportSnapshot(state) {
  return {
    schemaVersion: SCHEMA_VERSION,
    appName: "PNLQ — Gestión de Jornadas",
    unidad: "PNLQ-BTMM",
    areaConservacion: "ACC",
    exportadoEn: new Date().toISOString(),
    state,
  };
}

/**
 * Valida que un snapshot importado sea compatible con la versión actual.
 * No mezcla con el estado existente: la decisión queda en el llamador.
 *
 * Retorna { ok, reason, state }.
 */
export function parseSnapshot(text) {
  try {
    const parsed = JSON.parse(text);
    if (!parsed || typeof parsed !== "object") return { ok: false, reason: "JSON inválido" };
    if (parsed.schemaVersion !== SCHEMA_VERSION) {
      return { ok: false, reason: `Versión de esquema incompatible: encontrada v${parsed.schemaVersion ?? "?"} esperada v${SCHEMA_VERSION}` };
    }
    if (!parsed.state || typeof parsed.state !== "object") return { ok: false, reason: "Snapshot sin estado" };
    return { ok: true, state: sanitizeImportedState(parsed.state), exportadoEn: parsed.exportadoEn };
  } catch (e) {
    return { ok: false, reason: `JSON malformado: ${e.message}` };
  }
}

/**
 * Indica qué backend de almacenamiento durable está activo en este
 * entorno. A diferencia de una versión anterior que solo comprobaba
 * `typeof indexedDB !== "undefined"` (la API puede EXISTIR sin que la
 * base realmente abra — modo privado estricto en algunos navegadores,
 * cuota agotada, etc.), esta versión hace una apertura real de la base
 * antes de anunciar `indexeddb` como backend activo.
 *
 * Devuelve `{ kind, hasIDB, hasLS }` donde `kind` es
 * `'indexeddb'` (Dexie abrió y pudo escribir/leer),
 * `'localStorage'` (Dexie no disponible pero LS sí), o
 * `'none'` (modo privado estricto sin almacenamiento alguno).
 */
export async function getBackendInfoAsync() {
  const hasLS = !!safeStorage();
  let hasIDB = false;
  if (typeof indexedDB !== "undefined") {
    try {
      const db = await getDb();
      hasIDB = !!db;
    } catch {
      hasIDB = false;
    }
  }
  if (hasIDB) return { kind: "indexeddb", hasIDB, hasLS };
  if (hasLS) return { kind: "localStorage", hasIDB: false, hasLS: true };
  return { kind: "none", hasIDB: false, hasLS: false };
}

/**
 * Variante síncrona best-effort para el primer render (antes de poder
 * esperar la apertura real de IndexedDB). Solo declara `indexeddb` si la
 * API existe; `getBackendInfoAsync()` la corrige poco después si la
 * apertura real falla. Mantenida por compatibilidad con el nombre usado
 * en versiones previas.
 */
export function getBackendInfo() {
  const hasIDB = typeof indexedDB !== "undefined";
  const hasLS = !!safeStorage();
  if (hasIDB) return { kind: "indexeddb", hasIDB, hasLS, verificado: false };
  if (hasLS) return { kind: "localStorage", hasIDB: false, hasLS: true, verificado: true };
  return { kind: "none", hasIDB: false, hasLS: false, verificado: true };
}
