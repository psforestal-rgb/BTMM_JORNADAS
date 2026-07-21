/**
 * @vitest-environment jsdom
 *
 * Las actividades ficticias fueron retiradas. AppContext debe conservar los
 * registros persistidos del usuario y dejar una instalación nueva sin
 * actividades hasta que el importador institucional 2026 complete la carga.
 */
import "fake-indexeddb/auto";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { act, render } from "@testing-library/react";
import { AppProvider, useApp } from "../AppContext.jsx";
import { STORAGE_KEY, SCHEMA_VERSION } from "../../lib/storage.js";
import { __INTERNALS__, getDb } from "../../lib/db.js";

async function resetAll() {
  __INTERNALS__.resetSingleton();
  try {
    const db = await getDb();
    if (db) await db.delete();
  } catch { /* ignorar */ }
  __INTERNALS__.resetSingleton();
  localStorage.clear();
}

beforeEach(resetAll);
afterEach(resetAll);

const actividadUsuario = {
  id: "a1752500000000",
  titulo: "Actividad creada por el usuario",
  inicio: "2026-07-05",
  fin: "2026-07-05",
  unDia: true,
  funcionarios: [],
  lugar: "",
  observaciones: "",
  viatico: false,
};

function persistir(estado) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ schemaVersion: SCHEMA_VERSION, state: estado, revision: 1 }),
  );
}

async function leerContexto() {
  let observado = null;
  function Probe() {
    observado = useApp();
    return null;
  }
  await act(async () => {
    render(
      <AppProvider>
        <Probe />
      </AppProvider>,
    );
  });
  return observado;
}

describe("AppContext — actividades semilla retiradas", () => {
  it("conserva las actividades persistidas sin resucitar ejemplos eliminados", async () => {
    persistir({
      personas: [],
      actividadesPlan: [actividadUsuario],
      reposiciones: [],
      roleData: {},
      reglas: {},
      migraciones: { limpiezaEnzoYSetDic2026: true },
    });

    const ctx = await leerContexto();
    expect(ctx.actividadesPlan.map((a) => a.id)).toEqual([actividadUsuario.id]);
    expect(ctx.migraciones.actividadesEjemploJul2026).toBe(true);
  });

  it("con la migración histórica marcada mantiene intactos los registros del usuario", async () => {
    persistir({
      personas: [],
      actividadesPlan: [actividadUsuario],
      reposiciones: [],
      roleData: {},
      reglas: {},
      migraciones: { limpiezaEnzoYSetDic2026: true, actividadesEjemploJul2026: true },
    });

    const ctx = await leerContexto();
    expect(ctx.actividadesPlan.map((a) => a.id)).toEqual([actividadUsuario.id]);
  });

  it("una instalación nueva arranca sin actividades ficticias", async () => {
    const ctx = await leerContexto();
    expect(ctx.actividadesPlan).toEqual([]);
    expect(ctx.migraciones.actividadesEjemploJul2026).toBe(true);
  });
});
