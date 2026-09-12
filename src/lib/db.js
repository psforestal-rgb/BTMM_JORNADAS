/**
 * IndexedDB con Dexie. Fase 5 paso 1 del plan.
 *
 * Diseño:
 *  - Un solo store `state` con clave fija (`SNAPSHOT_ID`) que contiene
 *    el snapshot completo del estado (personas, actividadesPlan, roleData,
 *    reglas). Este patrón "single-document store" mantiene la semántica
 *    actual (snapshot atómico) y facilita la migración futura a stores
 *    por entidad sin romper compatibilidad de API.
 *  - Un store `auditoria` con índice por fecha; preparado para Fase 5
 *    paso 2 (registro de quién hizo qué). Hoy se crea pero no se usa.
 *  - Un store `pendientes` con cola de cambios offline; preparado para
 *    futuro sync con backend SINAC.
 *  - Un store `respaldos` con los respaldos automáticos de migración (A2):
 *    ver «Respaldo automático en migraciones» más abajo.
 *
 * Optimización de bundle:
 *  - Dexie se carga DINÁMICAMENTE con `import("dexie")` la primera vez
 *    que algún consumidor pide la base. Esto deja Dexie fuera del bundle
 *    inicial (~30 KB gzip), permitiendo arranques rápidos sin perder
 *    persistencia durable.
 *
 * Migración:
 *  - Si IndexedDB está vacío y hay localStorage de Fase 5 paso 0,
 *    `migrateFromLocalStorageIfNeeded()` copia el snapshot.
 *  - El localStorage existente se conserva como caché sincrónico para
 *    arranques rápidos (loadState() sigue siendo síncrono).
 *
 * Respaldo automático en migraciones (A2):
 *  - Hay DOS versiones distintas en juego y conviene no confundirlas. La
 *    versión de la BASE de Dexie (`db.version(n)`) describe qué stores e
 *    índices existen; `SCHEMA_VERSION` describe la forma del PAYLOAD que se
 *    guarda dentro de `state`. Un cambio en cualquiera de las dos puede dejar
 *    ilegible lo que ya estaba guardado.
 *  - Antes de que un cambio de esquema toque nada, el snapshot anterior se
 *    copia al store `respaldos`. Se cubren los dos caminos:
 *      · sube la versión de la base  → el callback `.upgrade()` copia `state`
 *        DENTRO de la transacción de migración, antes de que el código nuevo
 *        pueda escribir encima;
 *      · sube `SCHEMA_VERSION`       → `loadFromDexieWithMeta()` encuentra un
 *        snapshot de otra versión, lo copia y solo entonces lo descarta. Sin
 *        esto, el primer `saveToDexie()` posterior lo sobrescribía con un
 *        `put` sobre la misma clave y no quedaba rastro.
 *  - También se rescatan las copias que `loadStateWithMeta()` deja en
 *    localStorage (`pnlq:backup:v*`), que hasta ahora se escribían y nadie
 *    volvía a leer jamás.
 *  - Los respaldos NO se borran con «Reiniciar datos semilla»: son justo la
 *    red que esa operación necesita. Se podan al llegar a `RESPALDOS_MAX` y
 *    se pueden descargar o eliminar a mano desde «Datos · respaldo».
 */

import { SCHEMA_VERSION } from "./schemaVersion.js";

export { SCHEMA_VERSION };
export const SNAPSHOT_ID = "current";
const LS_STATE_KEY = "pnlq:state";
const LS_LAST_SAVED_KEY = "pnlq:lastSavedAt";
// Prefijo de las copias que `loadStateWithMeta()` (storage.js) deja en
// localStorage al apartar un snapshot de otra versión. Vive aquí, y no en
// storage.js, porque quien las rescata es este módulo: storage.js lo importa
// desde aquí, nunca al revés (eso crearía un ciclo).
export const LS_BACKUP_PREFIX = "pnlq:backup:v";

/** Cuántos respaldos automáticos se conservan; se poda el más antiguo. */
export const RESPALDOS_MAX = 5;

/** Por qué se creó un respaldo automático. */
export const MOTIVO_RESPALDO = Object.freeze({
  /** Subió la versión de la base de Dexie (cambio de stores/índices). */
  CAMBIO_DE_ESQUEMA: "cambioDeEsquema",
  /** El snapshot guardado es de otra `SCHEMA_VERSION` que la aplicación ya no lee. */
  ESQUEMA_INCOMPATIBLE: "esquemaIncompatible",
  /** Rescatado de una clave `pnlq:backup:v*` que quedó suelta en localStorage. */
  LOCAL_STORAGE: "localStorage",
});

let dbInstance = null;
let dbLoadPromise = null;

// Cola de escrituras: encadena cada saveToDexie/clearDexie sobre la promesa
// de la escritura anterior, para que dos guardados disparados en rápida
// sucesión (fire-and-forget) no puedan completarse fuera de orden y dejar
// en IndexedDB el payload MÁS VIEJO por encima del más nuevo. getDb() ya
// memoiza la carga de Dexie, pero sin esta cola dos llamadas casi
// simultáneas podrían encolar sus transacciones en cualquier orden.
let writeQueue = Promise.resolve();
function encolarEscritura(tarea) {
  const siguiente = writeQueue.then(tarea, tarea);
  // Si `tarea` rechaza, no queremos que la cola quede rota para las
  // siguientes escrituras — solo propagamos el resultado a quien llamó.
  writeQueue = siguiente.catch(() => {});
  return siguiente;
}

/**
 * Devuelve la instancia singleton de Dexie. La primera invocación carga
 * el módulo de forma dinámica (lazy) para mantener el bundle inicial
 * pequeño. Llamadas posteriores son síncronas a través de `dbInstance`.
 */
export async function getDb() {
  if (dbInstance) return dbInstance;
  if (typeof indexedDB === "undefined") return null;
  if (dbLoadPromise) return dbLoadPromise;
  dbLoadPromise = (async () => {
    try {
      const { default: Dexie } = await import("dexie");
      const db = new Dexie("pnlq");
      db.version(1).stores({
        state: "id",
        auditoria: "++id, fecha, accion",
        pendientes: "++id, creadoEn, tipo",
      });
      // v2 solo AÑADE el store de respaldos; Dexie conserva los stores
      // declarados en versiones anteriores sin repetirlos. El `.upgrade()` no
      // corre en una instalación nueva (solo al subir desde una v1 existente),
      // que es justo lo que se quiere: no hay nada que respaldar.
      db.version(2)
        .stores({ respaldos: "++id, creadoEn, motivo, huella" })
        .upgrade(async (tx) => {
          try {
            const filas = await tx.table("state").toArray();
            const tabla = tx.table("respaldos");
            for (const fila of filas) {
              await insertarRespaldo(tabla, {
                motivo: MOTIVO_RESPALDO.CAMBIO_DE_ESQUEMA,
                origen: "indexeddb",
                schemaVersion: fila?.schemaVersion ?? null,
                savedAt: fila?.savedAt ?? null,
                payload: fila?.payload,
              });
            }
          } catch {
            // Un respaldo que falla NUNCA debe impedir que la base abra: si
            // esta función lanza, Dexie aborta la migración y la aplicación
            // se queda sin almacenamiento durable.
          }
        });
      dbInstance = db;
      return db;
    } catch {
      return null;
    } finally {
      dbLoadPromise = null;
    }
  })();
  return dbLoadPromise;
}

/**
 * Lee el snapshot completo (payload + metadatos de recencia) desde
 * IndexedDB. Devuelve null si IndexedDB no está disponible, el snapshot
 * no existe todavía, o la schemaVersion guardada no coincide con la
 * actual. `revision` es el contador monotónico usado para decidir qué
 * backend (LS o IDB) tiene el dato más reciente sin depender solo del
 * reloj del dispositivo (ver storage.js).
 */
export async function loadFromDexieWithMeta() {
  const db = await getDb();
  if (!db) return null;
  try {
    const row = await db.state.get(SNAPSHOT_ID);
    if (!row) return null;
    if (row.schemaVersion !== SCHEMA_VERSION) {
      // El snapshot es de otra versión del payload: se aparta ANTES de
      // descartarlo, porque el primer `saveToDexie()` posterior lo
      // sobrescribirá con un `put` sobre esta misma clave (A2).
      await guardarRespaldoDeMigracion({
        motivo: MOTIVO_RESPALDO.ESQUEMA_INCOMPATIBLE,
        origen: "indexeddb",
        schemaVersion: row.schemaVersion ?? null,
        savedAt: row.savedAt ?? null,
        payload: row.payload,
      });
      return null;
    }
    return { state: row.payload ?? null, revision: row.revision ?? 0, savedAt: row.savedAt ?? null };
  } catch {
    return null;
  }
}

/** Compatibilidad: devuelve solo el payload (sin metadatos de recencia). */
export async function loadFromDexie() {
  const meta = await loadFromDexieWithMeta();
  return meta ? meta.state : null;
}

/**
 * Persiste el snapshot en IndexedDB. Retorna `true` si el guardado fue
 * exitoso, `false` si falló (no propaga excepciones). `revision` debe ser
 * el mismo contador monotónico escrito en localStorage para ese guardado,
 * así ambos backends quedan comparables sin ambigüedad de reloj.
 *
 * Encolada (ver `encolarEscritura`): si dos guardados se disparan en
 * rápida sucesión, esta escritura espera a que la anterior termine antes
 * de correr, para que nunca complete fuera de orden y deje un payload
 * viejo por encima de uno nuevo.
 */
export async function saveToDexie(payload, revision = 0) {
  const db = await getDb();
  if (!db) return false;
  return encolarEscritura(async () => {
    try {
      await db.state.put({
        id: SNAPSHOT_ID,
        schemaVersion: SCHEMA_VERSION,
        savedAt: new Date().toISOString(),
        revision,
        payload,
      });
      return true;
    } catch {
      return false;
    }
  });
}

/** Borra el snapshot. Encolada junto con saveToDexie (ver arriba). */
export async function clearDexie() {
  const db = await getDb();
  if (!db) return false;
  return encolarEscritura(async () => {
    try {
      await db.state.delete(SNAPSHOT_ID);
      return true;
    } catch {
      return false;
    }
  });
}

/**
 * Si IndexedDB está vacío y existe un snapshot en localStorage (Fase 5
 * paso 0), lo copia a IndexedDB. Sin efecto si IndexedDB ya tiene datos
 * o si localStorage no tiene nada. Idempotente.
 *
 * Valida que el `schemaVersion` del snapshot de localStorage coincida con
 * el de Dexie ANTES de copiarlo. Si no coincide (versiones antiguas o
 * payload corrupto), el snapshot se descarta para evitar que Dexie quede
 * con datos incompatibles que luego serían leídos como current schema.
 *
 * Devuelve `{ migrated: boolean, source: 'localStorage' | null }`.
 */
export async function migrateFromLocalStorageIfNeeded() {
  const db = await getDb();
  if (!db) return { migrated: false, source: null };
  try {
    const existing = await db.state.get(SNAPSHOT_ID);
    if (existing) return { migrated: false, source: null };
    if (typeof window === "undefined" || !window.localStorage) return { migrated: false, source: null };
    const raw = window.localStorage.getItem(LS_STATE_KEY);
    if (!raw) return { migrated: false, source: null };
    const parsed = JSON.parse(raw);
    if (!parsed?.state) return { migrated: false, source: null };
    // Guard de schemaVersion: NO migrar payloads incompatibles. Si la
    // versión es distinta o ausente, se ignora silenciosamente; loadState()
    // ya creará un backup la próxima vez que se invoque.
    if (parsed.schemaVersion !== SCHEMA_VERSION) {
      return { migrated: false, source: null };
    }
    await db.state.put({
      id: SNAPSHOT_ID,
      schemaVersion: SCHEMA_VERSION,
      savedAt: parsed.savedAt || new Date().toISOString(),
      revision: parsed.revision ?? 0,
      payload: parsed.state,
      migradoDeLocalStorage: true,
    });
    return { migrated: true, source: "localStorage" };
  } catch {
    return { migrated: false, source: null };
  }
}

/** Devuelve la marca de tiempo del último snapshot guardado en Dexie. */
export async function getLastSavedFromDexie() {
  const db = await getDb();
  if (!db) return null;
  try {
    const row = await db.state.get(SNAPSHOT_ID);
    return row?.savedAt || null;
  } catch {
    return null;
  }
}

/**
 * Encola un cambio para sincronizar con el backend SINAC en el futuro.
 * Hoy es un campo informativo; cuando exista la API REST se procesará.
 */
export async function encolarCambio({ tipo, datos }) {
  const db = await getDb();
  if (!db) return null;
  try {
    return await db.pendientes.add({
      tipo,
      datos,
      creadoEn: new Date().toISOString(),
    });
  } catch {
    return null;
  }
}

/** Cuenta cuántos cambios hay sin sincronizar (placeholder Fase 5 paso 2). */
export async function contarPendientes() {
  const db = await getDb();
  if (!db) return 0;
  try {
    return await db.pendientes.count();
  } catch {
    return 0;
  }
}

/**
 * Limpia toda la base. Usado por "Reiniciar datos semilla".
 *
 * `respaldos` queda FUERA a propósito: es la red de la que depende justamente
 * esta operación, y borrarla junto con el estado dejaría a quien reinicia sin
 * nada a lo que volver. Se eliminan a mano desde «Datos · respaldo».
 */
export async function wipeDexie() {
  const db = await getDb();
  if (!db) return false;
  return encolarEscritura(async () => {
    try {
      await Promise.all([
        db.state.clear(),
        db.pendientes.clear(),
        db.auditoria.clear(),
      ]);
      return true;
    } catch {
      return false;
    }
  });
}

// ---------------------------------------------------------------------
// Respaldos automáticos de migración (A2)
// ---------------------------------------------------------------------

/** Tamaño real en bytes UTF-8; cae a la longitud del texto si no hay TextEncoder. */
function medirBytes(texto) {
  try {
    return new TextEncoder().encode(texto).length;
  } catch {
    return texto.length;
  }
}

/**
 * Inserta un respaldo en la tabla dada y poda los más antiguos.
 *
 * Recibe la TABLA y no la base para poder usarse también dentro de la
 * transacción de `.upgrade()`, donde la instancia todavía no está publicada.
 * Devuelve el id insertado, o `null` si no había nada que guardar o si ese
 * mismo respaldo ya estaba (evita duplicar el snapshot en cada arranque
 * mientras la incompatibilidad persista).
 */
async function insertarRespaldo(tabla, { motivo, origen, schemaVersion, savedAt, payload }) {
  if (payload === null || payload === undefined) return null;
  let texto;
  try {
    texto = JSON.stringify(payload);
  } catch {
    return null;
  }
  if (!texto || texto === "null") return null;

  const bytes = medirBytes(texto);
  // La huella identifica el CONTENIDO respaldado, no el momento de la copia:
  // dos arranques seguidos con el mismo snapshot incompatible no deben crear
  // dos filas y expulsar respaldos buenos al podar.
  const huella = `${motivo}:${schemaVersion ?? "?"}:${savedAt ?? "?"}:${bytes}`;
  if ((await tabla.where("huella").equals(huella).count()) > 0) return null;

  const id = await tabla.add({
    creadoEn: new Date().toISOString(),
    motivo,
    origen,
    schemaVersion: schemaVersion ?? null,
    savedAt: savedAt ?? null,
    bytes,
    huella,
    payload,
  });

  // Poda: `primaryKeys()` recorre el índice sin cargar los payloads.
  const ids = await tabla.orderBy("creadoEn").primaryKeys();
  if (ids.length > RESPALDOS_MAX) {
    await tabla.bulkDelete(ids.slice(0, ids.length - RESPALDOS_MAX));
  }
  return id;
}

/**
 * Guarda un respaldo automático. Nunca lanza ni propaga: un respaldo que
 * falla no puede impedir que la aplicación cargue.
 */
export async function guardarRespaldoDeMigracion(datos) {
  const db = await getDb();
  if (!db) return null;
  try {
    return await insertarRespaldo(db.respaldos, datos);
  } catch {
    return null;
  }
}

/**
 * Lista los respaldos automáticos, del más reciente al más antiguo, SIN el
 * payload: la vista solo necesita saber qué hay y cuánto pesa.
 */
export async function listarRespaldosDeMigracion() {
  const db = await getDb();
  if (!db) return [];
  try {
    const filas = await db.respaldos.orderBy("creadoEn").reverse().toArray();
    return filas.map(({ payload, huella, ...meta }) => meta);
  } catch {
    return [];
  }
}

/** Devuelve un respaldo completo (con payload) para descargarlo. */
export async function obtenerRespaldoDeMigracion(id) {
  const db = await getDb();
  if (!db) return null;
  try {
    return (await db.respaldos.get(id)) ?? null;
  } catch {
    return null;
  }
}

/**
 * Reinserta un respaldo eliminado, conservando su id original. Es la mitad
 * «Deshacer» del borrado de la vista: mismo patrón idempotente que
 * `reinsertarEn()` en undo.js, de modo que pulsar dos veces no duplica nada.
 */
export async function restaurarRespaldoDeMigracion(fila) {
  const db = await getDb();
  if (!db || !fila || fila.id === undefined || fila.id === null) return null;
  try {
    const existente = await db.respaldos.get(fila.id);
    if (existente) return fila.id;
    return await db.respaldos.add(fila);
  } catch {
    return null;
  }
}

/** Elimina un respaldo automático. Devuelve `true` si la operación corrió. */
export async function eliminarRespaldoDeMigracion(id) {
  const db = await getDb();
  if (!db) return false;
  try {
    await db.respaldos.delete(id);
    return true;
  } catch {
    return false;
  }
}

/**
 * Rescata las copias que `loadStateWithMeta()` (storage.js) deja en
 * localStorage bajo `pnlq:backup:v*` cuando encuentra un snapshot de otra
 * versión. Hasta A2 esas claves se escribían y nadie volvía a leerlas: ocupaban
 * el localStorage —que es pequeño y compartido con el estado vivo— sin que
 * hubiera forma de recuperarlas.
 *
 * La clave de localStorage solo se borra si la copia a IndexedDB salió bien, o
 * si su contenido no es recuperable (JSON roto o sin `state`): en ese caso no
 * hay nada que rescatar y dejarla ahí solo gasta espacio.
 *
 * Devuelve `{ rescatados, descartados }`.
 */
export async function rescatarRespaldosDeLocalStorage() {
  const resultado = { rescatados: 0, descartados: 0 };
  const db = await getDb();
  if (!db) return resultado;
  if (typeof window === "undefined" || !window.localStorage) return resultado;

  let claves;
  try {
    claves = Object.keys(window.localStorage).filter((k) => k.startsWith(LS_BACKUP_PREFIX));
  } catch {
    return resultado;
  }

  for (const clave of claves) {
    try {
      const raw = window.localStorage.getItem(clave);
      let parsed = null;
      try {
        parsed = raw ? JSON.parse(raw) : null;
      } catch {
        parsed = null;
      }
      if (!parsed?.state) {
        window.localStorage.removeItem(clave);
        resultado.descartados += 1;
        continue;
      }
      await insertarRespaldo(db.respaldos, {
        motivo: MOTIVO_RESPALDO.LOCAL_STORAGE,
        origen: "localStorage",
        schemaVersion: parsed.schemaVersion ?? null,
        savedAt: parsed.savedAt ?? null,
        payload: parsed.state,
      });
      window.localStorage.removeItem(clave);
      resultado.rescatados += 1;
    } catch {
      // Esta clave se queda donde está; se reintentará en el próximo arranque.
    }
  }
  return resultado;
}

// Exports auxiliares usados por tests (no romper si Dexie no inicia).
export const __INTERNALS__ = {
  LS_STATE_KEY,
  LS_LAST_SAVED_KEY,
  resetSingleton() { dbInstance = null; },
  resetWriteQueue() { writeQueue = Promise.resolve(); },
};
