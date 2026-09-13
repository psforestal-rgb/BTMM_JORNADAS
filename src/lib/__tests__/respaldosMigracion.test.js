/**
 * @vitest-environment jsdom
 */
import "fake-indexeddb/auto";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import Dexie from "dexie";
import {
  getDb,
  saveToDexie,
  loadFromDexie,
  loadFromDexieWithMeta,
  wipeDexie,
  listarRespaldosDeMigracion,
  obtenerRespaldoDeMigracion,
  eliminarRespaldoDeMigracion,
  restaurarRespaldoDeMigracion,
  guardarRespaldoDeMigracion,
  rescatarRespaldosDeLocalStorage,
  MOTIVO_RESPALDO,
  RESPALDOS_MAX,
  LS_BACKUP_PREFIX,
  SNAPSHOT_ID,
  __INTERNALS__,
} from "../db.js";
import { SCHEMA_VERSION } from "../schemaVersion.js";
import { loadStateAsync, STORAGE_KEY, __resetRevisionParaTests } from "../storage.js";
import { archivoDeRespaldoDeMigracion } from "../respaldo.js";

/**
 * A2 — respaldo automático en migraciones.
 *
 * Lo que se prueba aquí es el caso que no puede fallar: que un snapshot quede
 * a salvo ANTES de que un cambio de formato lo deje ilegible o lo sobrescriba.
 */

beforeEach(async () => {
  __INTERNALS__.resetSingleton();
  try {
    const db = await getDb();
    if (db) await db.delete();
  } catch { /* ignorar */ }
  __INTERNALS__.resetSingleton();
  __resetRevisionParaTests();
  localStorage.clear();
});

afterEach(() => {
  localStorage.clear();
});

const PAYLOAD = { personas: [{ id: "f1", nombre: "Ana Mora" }], puestos: [{ nombre: "Puesto Orosi" }] };

describe("A2 — snapshot de otra SCHEMA_VERSION", () => {
  it("se aparta antes de descartarse, en vez de perderse en el siguiente guardado", async () => {
    const db = await getDb();
    await db.state.put({
      id: SNAPSHOT_ID,
      schemaVersion: SCHEMA_VERSION + 1,
      savedAt: "2026-01-02T03:04:05.000Z",
      revision: 9,
      payload: PAYLOAD,
    });

    // La lectura lo rechaza por incompatible…
    expect(await loadFromDexieWithMeta()).toBeNull();

    // …pero antes lo dejó a salvo.
    const respaldos = await listarRespaldosDeMigracion();
    expect(respaldos).toHaveLength(1);
    expect(respaldos[0].motivo).toBe(MOTIVO_RESPALDO.ESQUEMA_INCOMPATIBLE);
    expect(respaldos[0].schemaVersion).toBe(SCHEMA_VERSION + 1);
    expect(respaldos[0].savedAt).toBe("2026-01-02T03:04:05.000Z");
    expect(respaldos[0].bytes).toBeGreaterThan(0);
    // La lista no arrastra el payload: la vista solo necesita los metadatos.
    expect(respaldos[0].payload).toBeUndefined();

    // Y el respaldo conserva el contenido íntegro.
    const completo = await obtenerRespaldoDeMigracion(respaldos[0].id);
    expect(completo.payload).toEqual(PAYLOAD);

    // El guardado normal sobrescribe el snapshot incompatible: sin el respaldo
    // previo, aquí ya no quedaría rastro de los datos viejos.
    await saveToDexie({ personas: [] }, 10);
    expect((await db.state.get(SNAPSHOT_ID)).payload).toEqual({ personas: [] });
    expect(await listarRespaldosDeMigracion()).toHaveLength(1);
  });

  it("no duplica el respaldo si la incompatibilidad persiste entre arranques", async () => {
    const db = await getDb();
    await db.state.put({
      id: SNAPSHOT_ID,
      schemaVersion: SCHEMA_VERSION + 1,
      savedAt: "2026-01-02T03:04:05.000Z",
      payload: PAYLOAD,
    });
    await loadFromDexieWithMeta();
    await loadFromDexieWithMeta();
    await loadFromDexieWithMeta();
    expect(await listarRespaldosDeMigracion()).toHaveLength(1);
  });
});

describe("A2 — rescate de las copias de localStorage", () => {
  it("mueve la clave pnlq:backup:v* al store y libera el localStorage", async () => {
    const raw = JSON.stringify({
      schemaVersion: SCHEMA_VERSION + 3,
      savedAt: "2025-12-31T23:59:00.000Z",
      revision: 4,
      state: PAYLOAD,
    });
    localStorage.setItem(`${LS_BACKUP_PREFIX}${SCHEMA_VERSION + 3}-1700000000000`, raw);

    const r = await rescatarRespaldosDeLocalStorage();
    expect(r.rescatados).toBe(1);
    expect(Object.keys(localStorage).filter((k) => k.startsWith(LS_BACKUP_PREFIX))).toHaveLength(0);

    const [fila] = await listarRespaldosDeMigracion();
    expect(fila.motivo).toBe(MOTIVO_RESPALDO.LOCAL_STORAGE);
    expect(fila.schemaVersion).toBe(SCHEMA_VERSION + 3);
    const completo = await obtenerRespaldoDeMigracion(fila.id);
    expect(completo.payload).toEqual(PAYLOAD);
  });

  it("descarta la clave irrecuperable en vez de dejarla ocupando espacio", async () => {
    localStorage.setItem(`${LS_BACKUP_PREFIX}0-1`, "{no es json");
    localStorage.setItem(`${LS_BACKUP_PREFIX}0-2`, JSON.stringify({ sinEstado: true }));
    const r = await rescatarRespaldosDeLocalStorage();
    expect(r.descartados).toBe(2);
    expect(r.rescatados).toBe(0);
    expect(Object.keys(localStorage).filter((k) => k.startsWith(LS_BACKUP_PREFIX))).toHaveLength(0);
    expect(await listarRespaldosDeMigracion()).toHaveLength(0);
  });

  it("loadStateAsync rescata la copia que acaba de crear, sin esperar al siguiente arranque", async () => {
    // Estado persistido con una versión que esta app ya no entiende:
    // `loadStateWithMeta()` lo aparta en localStorage al leerlo.
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ schemaVersion: SCHEMA_VERSION + 5, savedAt: "2026-02-02T00:00:00.000Z", state: PAYLOAD }),
    );

    await loadStateAsync();

    const filas = await listarRespaldosDeMigracion();
    expect(filas).toHaveLength(1);
    expect(filas[0].motivo).toBe(MOTIVO_RESPALDO.LOCAL_STORAGE);
    expect(Object.keys(localStorage).filter((k) => k.startsWith(LS_BACKUP_PREFIX))).toHaveLength(0);
  });
});

describe("A2 — gestión de la lista", () => {
  async function sembrar(n) {
    for (let i = 0; i < n; i += 1) {
      await guardarRespaldoDeMigracion({
        motivo: MOTIVO_RESPALDO.ESQUEMA_INCOMPATIBLE,
        origen: "indexeddb",
        schemaVersion: i + 10,
        savedAt: `2026-01-0${(i % 9) + 1}T00:00:00.000Z`,
        payload: { i },
      });
    }
  }

  it("poda los más antiguos al pasar del tope", async () => {
    await sembrar(RESPALDOS_MAX + 3);
    const filas = await listarRespaldosDeMigracion();
    expect(filas).toHaveLength(RESPALDOS_MAX);
    // Sobreviven los últimos sembrados, no los primeros.
    expect(filas.map((f) => f.schemaVersion).sort((a, b) => a - b)).toEqual([13, 14, 15, 16, 17]);
  });

  it("«Reiniciar datos semilla» NO borra los respaldos: son su red", async () => {
    await sembrar(2);
    await wipeDexie();
    expect(await listarRespaldosDeMigracion()).toHaveLength(2);
  });

  it("eliminar y deshacer devuelven el respaldo con su id, sin duplicar", async () => {
    await sembrar(1);
    const [fila] = await listarRespaldosDeMigracion();
    const completo = await obtenerRespaldoDeMigracion(fila.id);

    expect(await eliminarRespaldoDeMigracion(fila.id)).toBe(true);
    expect(await listarRespaldosDeMigracion()).toHaveLength(0);

    await restaurarRespaldoDeMigracion(completo);
    await restaurarRespaldoDeMigracion(completo); // deshacer dos veces
    const vueltas = await listarRespaldosDeMigracion();
    expect(vueltas).toHaveLength(1);
    expect(vueltas[0].id).toBe(fila.id);
  });

  it("no guarda un respaldo sin contenido", async () => {
    await guardarRespaldoDeMigracion({
      motivo: MOTIVO_RESPALDO.ESQUEMA_INCOMPATIBLE,
      origen: "indexeddb",
      schemaVersion: 1,
      savedAt: null,
      payload: null,
    });
    expect(await listarRespaldosDeMigracion()).toHaveLength(0);
  });
});

describe("A2 — el archivo descargable", () => {
  it("declara la versión del RESPALDO, no la actual, para que no se restaure por error", async () => {
    const fila = {
      id: 1,
      creadoEn: "2026-03-04T05:06:07.000Z",
      motivo: MOTIVO_RESPALDO.ESQUEMA_INCOMPATIBLE,
      origen: "indexeddb",
      schemaVersion: SCHEMA_VERSION + 7,
      savedAt: "2026-03-01T00:00:00.000Z",
      payload: PAYLOAD,
    };
    const archivo = archivoDeRespaldoDeMigracion(fila);
    expect(archivo.snapshot.schemaVersion).toBe(SCHEMA_VERSION + 7);
    expect(archivo.snapshot.state).toEqual(PAYLOAD);
    expect(archivo.snapshot.exportadoEn).toBe("2026-03-01T00:00:00.000Z");
    expect(archivo.snapshot.respaldoAutomatico.motivo).toBe(MOTIVO_RESPALDO.ESQUEMA_INCOMPATIBLE);
    expect(archivo.name).toMatch(/^pnlq-respaldo-automatico-\d{4}-\d{2}-\d{2}_\d{2}-\d{2}-\d{2}\.json$/);
    expect(JSON.parse(archivo.text)).toEqual(archivo.snapshot);
  });

  it("una fecha ilegible no produce un nombre de archivo con NaN", () => {
    const archivo = archivoDeRespaldoDeMigracion({ id: 1, creadoEn: "cuando sea", payload: PAYLOAD });
    expect(archivo.name).not.toContain("NaN");
  });

  it("devuelve null si el respaldo no tiene contenido", () => {
    expect(archivoDeRespaldoDeMigracion(null)).toBeNull();
    expect(archivoDeRespaldoDeMigracion({ id: 1, payload: undefined })).toBeNull();
  });
});

describe("A2 — cambio de versión de la base (v1 → v2)", () => {
  it("el snapshot anterior queda respaldado dentro de la propia transacción de migración", async () => {
    // 1. La base tal como era antes de A2: tres stores, sin `respaldos`.
    const vieja = new Dexie("pnlq");
    vieja.version(1).stores({
      state: "id",
      auditoria: "++id, fecha, accion",
      pendientes: "++id, creadoEn, tipo",
    });
    await vieja.open();
    expect(vieja.verno).toBe(1);
    await vieja.table("state").put({
      id: SNAPSHOT_ID,
      schemaVersion: SCHEMA_VERSION,
      savedAt: "2026-04-05T06:07:08.000Z",
      revision: 3,
      payload: PAYLOAD,
    });
    vieja.close();

    // 2. Se abre con el código actual: Dexie sube a v2 y dispara `.upgrade()`.
    __INTERNALS__.resetSingleton();
    const filas = await listarRespaldosDeMigracion();

    expect(filas).toHaveLength(1);
    expect(filas[0].motivo).toBe(MOTIVO_RESPALDO.CAMBIO_DE_ESQUEMA);
    expect(filas[0].origen).toBe("indexeddb");
    expect(filas[0].savedAt).toBe("2026-04-05T06:07:08.000Z");
    const completo = await obtenerRespaldoDeMigracion(filas[0].id);
    expect(completo.payload).toEqual(PAYLOAD);

    // 3. Y la migración no toca el estado vivo: sigue siendo legible.
    expect(await loadFromDexie()).toEqual(PAYLOAD);
  });

  it("una instalación nueva no crea respaldos: no hay nada que respaldar", async () => {
    await saveToDexie(PAYLOAD, 1);
    expect(await listarRespaldosDeMigracion()).toHaveLength(0);
  });
});
