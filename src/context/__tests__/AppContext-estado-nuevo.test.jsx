/**
 * @vitest-environment jsdom
 *
 * RF9 y RP1–RP8 añaden claves nuevas al estado (`historial`, `puestos`). Lo que
 * estas pruebas protegen es que añadir una clave NO obligue a subir
 * `SCHEMA_VERSION`: un snapshot guardado antes no la trae, y debe seguir
 * cargando con el valor por defecto en vez de ser rechazado por incompatible.
 *
 * Es la garantía que permite seguir ampliando el estado sin migraciones, así
 * que conviene añadir aquí cada clave nueva que se incorpore.
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

describe("AppContext — puestos operativos en el estado (RP1–RP8)", () => {
  it("una instalación nueva arranca con los puestos de la semilla", async () => {
    const { ctx } = await leerContexto();
    expect(ctx().puestos.length).toBeGreaterThan(0);
    expect(ctx().puestos.map((p) => p.nombre)).toContain("Puesto Orosi");
    // La forma de la semilla se limpia: `funcionarios` es solo dato de ejemplo.
    expect(ctx().puestos[0]).not.toHaveProperty("funcionarios");
  });

  it("un snapshot anterior a RP-PUESTOS carga con la semilla, sin migrar nada", async () => {
    persistir(ESTADO_ANTERIOR_A_RF9);
    const { ctx } = await leerContexto();
    expect(ctx().puestos.map((p) => p.nombre)).toContain("Puesto Quetzales");
  });

  it("los puestos editados por el usuario se recuperan tal cual", async () => {
    persistir({ ...ESTADO_ANTERIOR_A_RF9, puestos: [{ nombre: "Puesto Nuevo", tag: "PN", color: "x" }] });
    const { ctx } = await leerContexto();
    expect(ctx().puestos).toEqual([{ nombre: "Puesto Nuevo", tag: "PN", color: "x" }]);
  });

  it("una lista vacía o corrupta cae a la semilla en vez de dejar la app sin puestos", async () => {
    persistir({ ...ESTADO_ANTERIOR_A_RF9, puestos: [] });
    const { ctx } = await leerContexto();
    expect(ctx().puestos.length).toBeGreaterThan(0);
  });

  it("descarta las entradas sin nombre, que romperían el agrupado de Roles", async () => {
    persistir({
      ...ESTADO_ANTERIOR_A_RF9,
      puestos: [{ nombre: "Bueno", tag: "B" }, null, { tag: "SIN" }],
    });
    const { ctx } = await leerContexto();
    expect(ctx().puestos).toEqual([{ nombre: "Bueno", tag: "B" }]);
  });

  it("setPuestos actualiza la lista viva", async () => {
    const { ctx } = await leerContexto();
    await act(async () => {
      ctx().setPuestos([{ nombre: "Único", tag: "UN", color: "x" }]);
    });
    expect(ctx().puestos).toEqual([{ nombre: "Único", tag: "UN", color: "x" }]);
  });
});
