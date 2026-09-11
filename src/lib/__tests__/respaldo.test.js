import { describe, expect, it } from "vitest";
import { crearRespaldo } from "../respaldo.js";
import { SCHEMA_VERSION } from "../storage.js";

/**
 * El respaldo elige a mano qué claves guarda. Estas pruebas son la red que
 * avisa cuando se añade una clave al estado y se olvida incluirla: el síntoma
 * en producción sería un respaldo que parece completo y no lo es.
 */
const CLAVES_QUE_DEBEN_VIAJAR = [
  "personas",
  "actividadesPlan",
  "reposiciones",
  "roleData",
  "reglas",
  "migraciones",
  "puestos",
  "historial",
];

const ctx = {
  personas: [{ id: "f1", nombre: "Ana" }],
  actividadesPlan: [{ id: "a1", titulo: "Patrullaje" }],
  reposiciones: [{ id: "r1", folio: "REP-001" }],
  roleData: { "2026-0|Ana|1": "T1" },
  reglas: { diaCorteViaticos: 15 },
  migraciones: { algo: true },
  puestos: [{ nombre: "Puesto Orosi", tag: "OR", color: "bg-a" }],
  historial: [{ id: "h1", tipo: "alta", funcionario: { nombre: "Ana" } }],
  // Efímera de interfaz: NO debe viajar.
  view: "roles",
  month: 8,
  year: 2026,
  diaVista: "2026-09-11",
  compact: true,
};

describe("crearRespaldo", () => {
  it("guarda todas las claves que deben sobrevivir a un respaldo", () => {
    const { snapshot } = crearRespaldo(ctx);
    for (const clave of CLAVES_QUE_DEBEN_VIAJAR) {
      expect(snapshot.state, `falta «${clave}» en el respaldo`).toHaveProperty(clave);
      expect(snapshot.state[clave]).toEqual(ctx[clave]);
    }
  });

  it("los puestos editables viajan: sin ellos, restaurar los perdería", () => {
    expect(crearRespaldo(ctx).snapshot.state.puestos).toEqual(ctx.puestos);
  });

  it("el historial viaja, como promete la propia vista al usuario", () => {
    expect(crearRespaldo(ctx).snapshot.state.historial).toEqual(ctx.historial);
  });

  it("deja fuera la efímera de interfaz", () => {
    const { snapshot } = crearRespaldo(ctx);
    for (const clave of ["view", "month", "year", "diaVista", "compact"]) {
      expect(snapshot.state).not.toHaveProperty(clave);
    }
  });

  it("marca la versión de esquema, que es lo que valida al restaurar", () => {
    expect(crearRespaldo(ctx).snapshot.schemaVersion).toBe(SCHEMA_VERSION);
  });

  it("el nombre del archivo admite un prefijo propio", () => {
    expect(crearRespaldo(ctx).name).toMatch(/^pnlq-snapshot-.*\.json$/);
    expect(crearRespaldo(ctx, "antes-de-importar-puestos").name).toMatch(
      /^antes-de-importar-puestos-.*\.json$/,
    );
  });

  it("el texto es el JSON del snapshot, listo para descargar", () => {
    const { snapshot, text } = crearRespaldo(ctx);
    expect(JSON.parse(text)).toEqual(snapshot);
  });

  it("tolera un contexto incompleto sin lanzar", () => {
    expect(() => crearRespaldo({})).not.toThrow();
    expect(crearRespaldo({}).snapshot.state.puestos).toBeUndefined();
  });
});
