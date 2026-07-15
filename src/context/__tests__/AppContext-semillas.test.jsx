/**
 * @vitest-environment jsdom
 *
 * Migración de semillas de actividades (julio 2026): un estado persistido
 * anterior a v1.14.13 tiene su propio `actividadesPlan` y, sin migración,
 * las actividades de ejemplo nuevas jamás aparecerían (el arreglo
 * almacenado gana por completo sobre el seed).
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
    const ctx = useApp();
    observado = ctx;
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

describe("AppContext — migración de actividades de ejemplo (julio 2026)", () => {
  it("agrega las semillas nuevas a un estado persistido que no las tiene, sin tocar lo del usuario", async () => {
    persistir({
      personas: [],
      actividadesPlan: [actividadUsuario],
      reposiciones: [],
      roleData: {},
      reglas: {},
      migraciones: { limpiezaEnzoYSetDic2026: true },
    });

    const ctx = await leerContexto();
    const ids = ctx.actividadesPlan.map((a) => a.id);
    expect(ids).toContain(actividadUsuario.id);
    expect(ids).toContain("a36");
    expect(ids).toContain("a46");
    expect(ctx.migraciones.actividadesEjemploJul2026).toBe(true);
  });

  it("con la migración ya marcada NO resucita semillas borradas por el usuario", async () => {
    persistir({
      personas: [],
      actividadesPlan: [actividadUsuario],
      reposiciones: [],
      roleData: {},
      reglas: {},
      migraciones: { limpiezaEnzoYSetDic2026: true, actividadesEjemploJul2026: true },
    });

    const ctx = await leerContexto();
    const ids = ctx.actividadesPlan.map((a) => a.id);
    expect(ids).toEqual([actividadUsuario.id]);
  });

  it("una instalación nueva (sin estado persistido) arranca con la migración marcada y las semillas completas", async () => {
    const ctx = await leerContexto();
    const ids = ctx.actividadesPlan.map((a) => a.id);
    expect(ids).toContain("a46");
    expect(ctx.migraciones.actividadesEjemploJul2026).toBe(true);
  });
});
