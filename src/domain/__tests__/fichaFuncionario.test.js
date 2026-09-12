import { describe, expect, it } from "vitest";
import {
  bancoDeTiempo,
  CATEGORIAS_RESUMEN,
  etiquetaCategoria,
  resumenRolesMes,
  resumenTeletrabajoActividad,
  rolDelDia,
} from "../fichaFuncionario.js";
import {
  historialPorFuncionario,
  resumenReposiciones,
  saldoFuncionario,
} from "../reposicion.js";
import { rolKey } from "../roles.js";

const HJ = 8;

const PERSONAS = [
  { id: "p1", nombre: "Ana Rojas", puestoOperativo: "Puesto Quetzales", modalidad: "10x5" },
  { id: "p2", nombre: "Beto Mora", puestoOperativo: "Puesto Quetzales", modalidad: "10x5" },
];

const REPOSICIONES = [
  // Ana: un día entero sin reponer (8 h de saldo).
  { id: "r1", folio: "REP-001", funcionario: "Ana Rojas", fecha: "2026-07-04", tipoDia: "Día libre", motivo: "Incendio forestal", magnitud: "diaEntero", horas: 0, cuotas: [] },
  // Ana: medio día trabajado, ya repuesto entero (saldo 0).
  { id: "r2", folio: "REP-002", funcionario: "Ana Rojas", fecha: "2026-07-11", tipoDia: "Feriado", motivo: "Emergencia", magnitud: "medioDia", horas: 0, cuotas: [{ id: "c1", fecha: "2026-07-20", magnitud: "medioDia", horas: 0 }] },
  // Ana: 6 h trabajadas con 2 h repuestas (saldo 4 h, estado Parcial).
  { id: "r3", folio: "REP-003", funcionario: "Ana Rojas", fecha: "2026-07-18", tipoDia: "Fuera de turno", motivo: "Operativo de control", magnitud: "horas", horas: 6, cuotas: [{ id: "c2", fecha: "2026-07-25", magnitud: "horas", horas: 2 }] },
  // De otra persona: no debe contaminar el banco de Ana.
  { id: "r4", folio: "REP-004", funcionario: "Beto Mora", fecha: "2026-07-05", tipoDia: "Día libre", motivo: "Emergencia", magnitud: "diaEntero", horas: 0, cuotas: [] },
];

describe("banco de tiempo de la ficha (VF3)", () => {
  it("no calcula el saldo por su cuenta: coincide con `saldoFuncionario`", () => {
    const banco = bancoDeTiempo(REPOSICIONES, "Ana Rojas", HJ);
    expect(banco.saldoHoras).toBe(saldoFuncionario(REPOSICIONES, "Ana Rojas", HJ));
    expect(banco.saldoHoras).toBe(12); // 8 h + 0 h + 4 h
  });

  it("coincide también con el resumen general y con el historial por funcionario", () => {
    const banco = bancoDeTiempo(REPOSICIONES, "Ana Rojas", HJ);
    const propios = REPOSICIONES.filter((r) => r.funcionario === "Ana Rojas");
    const resumen = resumenReposiciones(propios, HJ);
    expect(banco.total).toBe(resumen.total);
    expect(banco.pendientes).toBe(resumen.pendientes);
    expect(banco.parciales).toBe(resumen.parciales);
    expect(banco.repuestos).toBe(resumen.repuestos);
    expect(banco.saldoHoras).toBe(resumen.saldoHoras);

    const fila = historialPorFuncionario(REPOSICIONES, HJ).find((x) => x.funcionario === "Ana Rojas");
    expect(banco.saldoHoras).toBe(fila.saldoHoras);
    expect(banco.total).toBe(fila.total);
  });

  it("aísla a la persona y ordena lo pendiente de lo más antiguo a lo más nuevo", () => {
    const banco = bancoDeTiempo(REPOSICIONES, "Ana Rojas", HJ);
    expect(banco.registros.map((r) => r.folio)).toEqual(["REP-003", "REP-002", "REP-001"]);
    expect(banco.conSaldo.map((r) => r.folio)).toEqual(["REP-001", "REP-003"]);
    expect(banco.registros.some((r) => r.funcionario === "Beto Mora")).toBe(false);
  });

  it("devuelve un banco vacío coherente para quien no tiene registros", () => {
    const banco = bancoDeTiempo(REPOSICIONES, "Sin Registros", HJ);
    expect(banco).toMatchObject({ saldoHoras: 0, total: 0, pendientes: 0, repuestos: 0 });
    expect(banco.registros).toEqual([]);
    expect(banco.conSaldo).toEqual([]);
  });
});

describe("resumen de roles del mes (VF5)", () => {
  const year = 2026;
  const month = 6; // julio

  it("cuenta los días de cada categoría y suma exactamente los días del mes", () => {
    const roleData = {};
    const resumen = resumenRolesMes({ personas: PERSONAS, roleData, year, month, nombre: "Ana Rojas" });
    expect(resumen.totalDias).toBe(31);
    const suma = CATEGORIAS_RESUMEN.reduce((acc, c) => acc + resumen.porCategoria[c], 0);
    expect(suma + resumen.sinMarcar).toBe(31);
  });

  it("separa trabajar de estar presente: el teletrabajo cuenta como activo, no como presencial", () => {
    const roleData = {};
    for (let d = 1; d <= 3; d += 1) roleData[rolKey(year, month, "Puesto Quetzales", "Ana Rojas", d)] = `T${d}`;
    roleData[rolKey(year, month, "Puesto Quetzales", "Ana Rojas", 4)] = "E1";
    roleData[rolKey(year, month, "Puesto Quetzales", "Ana Rojas", 5)] = "V1";
    const resumen = resumenRolesMes({ personas: PERSONAS, roleData, year, month, nombre: "Ana Rojas" });
    expect(resumen.porCategoria.E).toBeGreaterThanOrEqual(1);
    expect(resumen.diasPorCategoria.E).toContain(4);
    expect(resumen.diasPorCategoria.V).toContain(5);
    expect(resumen.activos).toBeGreaterThan(resumen.presenciales);
  });

  it("no inventa categoría para quien no tiene a nadie que lo describa", () => {
    const resumen = resumenRolesMes({ personas: [], roleData: {}, year, month, nombre: "Fantasma" });
    expect(resumen.sinMarcar).toBe(31);
    expect(resumen.activos).toBe(0);
  });

  it("etiqueta las categorías con el mismo vocabulario que la cuadrícula", () => {
    expect(etiquetaCategoria("T")).toBe("Turno");
    expect(etiquetaCategoria("E")).toBe("Teletrabajo");
    expect(etiquetaCategoria("L")).toBe("Libre");
  });
});

describe("rol de un día concreto", () => {
  it("describe código, categoría y si es presencial", () => {
    const roleData = { [rolKey(2026, 6, "Puesto Quetzales", "Ana Rojas", 9)]: "E2" };
    const r = rolDelDia({ personas: PERSONAS, roleData, year: 2026, month: 6, dia: 9, nombre: "Ana Rojas" });
    expect(r).toMatchObject({ iso: "2026-07-09", codigo: "E2", categoria: "E", activo: true, presencial: false });
    expect(r.etiqueta).toBe("Teletrabajo");
  });
});

describe("teletrabajo por actividad (VF4 sobre RT2)", () => {
  const year = 2026;
  const month = 6;
  const k = (dia) => rolKey(year, month, "Puesto Quetzales", "Ana Rojas", dia);

  it("cuenta día a día: una actividad de tres días puede ser teletrabajo solo el primero", () => {
    const roleData = { [k(6)]: "E1", [k(7)]: "T1", [k(8)]: "T2" };
    const r = resumenTeletrabajoActividad({
      actividad: { id: "a1", inicio: "2026-07-06", fin: "2026-07-08" },
      nombre: "Ana Rojas",
      personas: PERSONAS,
      roleData,
    });
    expect(r).toEqual({ dias: 3, teletrabajo: 1 });
  });

  it("marca la actividad entera cuando todos sus días son teletrabajo", () => {
    const roleData = { [k(6)]: "E1", [k(7)]: "E2" };
    const r = resumenTeletrabajoActividad({
      actividad: { id: "a2", inicio: "2026-07-06", fin: "2026-07-07" },
      nombre: "Ana Rojas",
      personas: PERSONAS,
      roleData,
    });
    expect(r).toEqual({ dias: 2, teletrabajo: 2 });
  });

  it("trata la actividad de un solo día y la que no trae `fin`", () => {
    const roleData = { [k(6)]: "E1" };
    const sinFin = resumenTeletrabajoActividad({
      actividad: { id: "a3", inicio: "2026-07-06" },
      nombre: "Ana Rojas", personas: PERSONAS, roleData,
    });
    expect(sinFin).toEqual({ dias: 1, teletrabajo: 1 });
  });

  it("no se cuelga ni cuenta nada con datos corruptos", () => {
    expect(resumenTeletrabajoActividad({ actividad: {}, nombre: "Ana Rojas", personas: PERSONAS, roleData: {} }))
      .toEqual({ dias: 0, teletrabajo: 0 });
    // `fin` anterior al inicio: se trata como actividad de un día, no como un
    // rango vacío ni como un bucle infinito.
    const r = resumenTeletrabajoActividad({
      actividad: { id: "a4", inicio: "2026-07-06", fin: "2026-07-01" },
      nombre: "Ana Rojas", personas: PERSONAS, roleData: {},
    });
    expect(r.dias).toBe(1);
  });

  it("cruza el cambio de mes y de año usando los feriados del año correcto", () => {
    const vistos = [];
    const r = resumenTeletrabajoActividad({
      actividad: { id: "a5", inicio: "2026-12-30", fin: "2027-01-02" },
      nombre: "Ana Rojas",
      personas: PERSONAS,
      roleData: {},
      feriadosDe: (anio) => {
        vistos.push(anio);
        return null;
      },
    });
    expect(r.dias).toBe(4);
    expect(new Set(vistos)).toEqual(new Set([2026, 2027]));
  });
});
