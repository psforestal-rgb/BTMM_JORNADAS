/**
 * @vitest-environment jsdom
 *
 * RF9 añade la clave `historial` al estado. Lo que estas pruebas protegen es
 * que ese añadido NO obligue a subir `SCHEMA_VERSION`: un snapshot guardado
 * antes de RF9 no la trae, y debe seguir cargando con el rastro vacío en vez
 * de ser rechazado por incompatible.
 */
import "fake-indexeddb/auto";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { act, render } from "@testing-library/react";
import { AppProvider, useApp } from "../AppContext.jsx";
import { STORAGE_KEY, SCHEMA_VERSION } from "../../lib/storage.js";
import { __INTERNALS__, getDb } from "../../lib/db.js";
import { crearEntrada, MAX_ENTRADAS, TIPO } from "../../domain/historial.js";

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
  return { ctx: () => observado };
}

const ESTADO_ANTERIOR_A_RF9 = {
  personas: [],
  actividadesPlan: [],
  reposiciones: [],
  roleData: {},
  reglas: {},
};

describe("AppContext — historial de cambios (RF9)", () => {
  it("una instalación nueva arranca con el rastro vacío", async () => {
    const { ctx } = await leerContexto();
    expect(ctx().historial).toEqual([]);
  });

  it("un snapshot anterior a RF9 carga igual, con el rastro vacío", async () => {
    const actividadDelUsuario = {
      id: "a-usuario",
      titulo: "Patrullaje guardado antes de RF9",
      inicio: "2026-07-05",
      fin: "2026-07-05",
      unDia: true,
      funcionarios: [],
    };
    persistir({ ...ESTADO_ANTERIOR_A_RF9, actividadesPlan: [actividadDelUsuario] });
    const { ctx } = await leerContexto();
    expect(ctx().historial).toEqual([]);
    // El resto del estado sobrevive: la carga no se cayó al seed por
    // considerar el snapshot incompatible, que es justo lo que se teme al
    // añadir una clave nueva.
    expect(ctx().actividadesPlan.some((a) => a.id === "a-usuario")).toBe(true);
  });

  it("un historial corrupto no tumba la carga: se descarta", async () => {
    persistir({ ...ESTADO_ANTERIOR_A_RF9, historial: "esto no es un arreglo" });
    const { ctx } = await leerContexto();
    expect(ctx().historial).toEqual([]);
  });

  it("un historial persistido se recupera tal cual", async () => {
    const entrada = crearEntrada({ tipo: TIPO.ALTA, funcionario: { nombre: "Ana Pérez" } });
    persistir({ ...ESTADO_ANTERIOR_A_RF9, historial: [entrada] });
    const { ctx } = await leerContexto();
    expect(ctx().historial).toEqual([entrada]);
  });

  it("registrarCambio añade al principio", async () => {
    const { ctx } = await leerContexto();
    await act(async () => {
      ctx().registrarCambio(crearEntrada({ tipo: TIPO.ALTA, funcionario: { nombre: "Primera" } }));
    });
    await act(async () => {
      ctx().registrarCambio(crearEntrada({ tipo: TIPO.BAJA, funcionario: { nombre: "Segunda" } }));
    });
    expect(ctx().historial.map((e) => e.funcionario.nombre)).toEqual(["Segunda", "Primera"]);
  });

  it("una entrada nula no toca el rastro", async () => {
    const { ctx } = await leerContexto();
    await act(async () => {
      ctx().registrarCambio(null);
    });
    expect(ctx().historial).toEqual([]);
  });

  it("el tope se aplica en el reducer, no en quien llama", async () => {
    const desbordado = Array.from({ length: MAX_ENTRADAS + 5 }, (_, i) =>
      crearEntrada({ tipo: TIPO.ALTA, funcionario: { nombre: `P${i}` } }),
    );
    persistir({ ...ESTADO_ANTERIOR_A_RF9, historial: desbordado });
    const { ctx } = await leerContexto();
    await act(async () => {
      ctx().registrarCambio(crearEntrada({ tipo: TIPO.ALTA, funcionario: { nombre: "Nueva" } }));
    });
    expect(ctx().historial).toHaveLength(MAX_ENTRADAS);
    expect(ctx().historial[0].funcionario.nombre).toBe("Nueva");
  });
});
