import { describe, it, expect } from "vitest";
import {
  coberturaVisitantesDelDia,
  puestosEnCoberturaCritica,
puestoRequiereAtencionRutinaria,
} from "../cobertura.js";
import { rolKey } from "../roles.js";

describe("cobertura.puestoRequiereAtencionRutinaria", () => {
  it("Orosi y Quetzales requieren Visit. diario", () => {
    expect(puestoRequiereAtencionRutinaria("Puesto Orosi")).toBe(true);
    expect(puestoRequiereAtencionRutinaria("Puesto Quetzales")).toBe(true);
  });
  it("Esperanza no requiere", () => {
    expect(puestoRequiereAtencionRutinaria("Puesto Esperanza")).toBe(false);
  });
  it("Otros puestos no requieren", () => {
    expect(puestoRequiereAtencionRutinaria("Otro")).toBe(false);
    expect(puestoRequiereAtencionRutinaria("")).toBe(false);
  });
});

describe("cobertura de visitantes del día", () => {
  const YEAR = 2026;
  const MONTH = 6;
  const DIA = 8;
  const ISO = "2026-07-08";
  const PUESTOS = ["Puesto Orosi", "Puesto Quetzales", "Puesto Esperanza"];

  const PERSONAS = [
    { id: "p1", nombre: "Ana Rojas", puestoOperativo: "Puesto Orosi", modalidad: "10x5" },
    { id: "p2", nombre: "Beto Mora", puestoOperativo: "Puesto Orosi", modalidad: "10x5" },
    { id: "p3", nombre: "Carla Ruiz", puestoOperativo: "Puesto Quetzales", modalidad: "10x5" },
    { id: "p4", nombre: "Dani Soto", puestoOperativo: "Puesto Esperanza", modalidad: "10x5" },
  ];

  const k = (nombre, puesto) => rolKey(YEAR, MONTH, puesto, nombre, DIA);

  function visit(funcionarios) {
    return [{ id: "v1", titulo: "Atención rutinaria de visitantes", inicio: ISO, fin: ISO, funcionarios }];
  }

  function calcular(actividadesPlan, roleData) {
    return coberturaVisitantesDelDia({
      actividadesPlan, iso: ISO, personas: PERSONAS, roleData,
      year: YEAR, month: MONTH, dia: DIA, puestos: PUESTOS,
    });
  }

  it("un puesto obligado sin nadie asignado está en cobertura crítica", () => {
    const cobertura = calcular([], {});
    const criticos = puestosEnCoberturaCritica(cobertura);
    expect(criticos).toEqual(["Puesto Orosi", "Puesto Quetzales"]);
    // Esperanza no exige atención diaria: no tenerla no es un incumplimiento.
    expect(cobertura.find((c) => c.puesto === "Puesto Esperanza").critico).toBe(false);
  });

  it("queda cubierto con una persona presente asignada a la atención", () => {
    const roleData = { [k("Ana Rojas", "Puesto Orosi")]: "T3" };
    const cobertura = calcular(visit(["Ana Rojas"]), roleData);
    const orosi = cobertura.find((c) => c.puesto === "Puesto Orosi");
    expect(orosi.critico).toBe(false);
    expect(orosi.presentes).toEqual(["Ana Rojas"]);
  });

  it("el teletrabajo NO cubre: desde casa no se atiende a nadie", () => {
    const roleData = { [k("Ana Rojas", "Puesto Orosi")]: "E1" };
    const cobertura = calcular(visit(["Ana Rojas"]), roleData);
    const orosi = cobertura.find((c) => c.puesto === "Puesto Orosi");
    expect(orosi.asignados).toEqual(["Ana Rojas"]);
    expect(orosi.presentes).toEqual([]);
    expect(orosi.critico).toBe(true);
    // Y se distingue de no tener a nadie asignado, porque se arregla distinto.
    expect(orosi.soloRemoto).toBe(true);
  });

  it("un día libre tampoco cubre aunque figure en la actividad", () => {
    const roleData = { [k("Ana Rojas", "Puesto Orosi")]: "L2" };
    const cobertura = calcular(visit(["Ana Rojas"]), roleData);
    expect(cobertura.find((c) => c.puesto === "Puesto Orosi").critico).toBe(true);
  });

  it("basta con que una de las personas asignadas esté presente", () => {
    const roleData = {
      [k("Ana Rojas", "Puesto Orosi")]: "E1",
      [k("Beto Mora", "Puesto Orosi")]: "T4",
    };
    const cobertura = calcular(visit(["Ana Rojas", "Beto Mora"]), roleData);
    const orosi = cobertura.find((c) => c.puesto === "Puesto Orosi");
    expect(orosi.presentes).toEqual(["Beto Mora"]);
    expect(orosi.critico).toBe(false);
    expect(orosi.soloRemoto).toBe(false);
  });

  it("la cobertura se atribuye al puesto de quien la hace, no a los demás", () => {
    const roleData = { [k("Ana Rojas", "Puesto Orosi")]: "T3" };
    const cobertura = calcular(visit(["Ana Rojas"]), roleData);
    expect(cobertura.find((c) => c.puesto === "Puesto Quetzales").critico).toBe(true);
  });

  it("una actividad que no es la atención rutinaria no cubre nada", () => {
    const roleData = { [k("Ana Rojas", "Puesto Orosi")]: "T3" };
    const otra = [{ id: "x", titulo: "Patrullaje", inicio: ISO, fin: ISO, funcionarios: ["Ana Rojas"] }];
    expect(calcular(otra, roleData).find((c) => c.puesto === "Puesto Orosi").critico).toBe(true);
  });

  it("una actividad de otro día no cubre este", () => {
    const roleData = { [k("Ana Rojas", "Puesto Orosi")]: "T3" };
    const otroDia = [{ id: "v", titulo: "Atención rutinaria de visitantes", inicio: "2026-07-09", fin: "2026-07-09", funcionarios: ["Ana Rojas"] }];
    expect(calcular(otroDia, roleData).find((c) => c.puesto === "Puesto Orosi").critico).toBe(true);
  });

  it("respeta la lista de puestos obligados que venga de la configuración", () => {
    const cobertura = coberturaVisitantesDelDia({
      actividadesPlan: [], iso: ISO, personas: PERSONAS, roleData: {},
      year: YEAR, month: MONTH, dia: DIA, puestos: PUESTOS,
      puestosRequieren: ["Puesto Esperanza"],
    });
    expect(puestosEnCoberturaCritica(cobertura)).toEqual(["Puesto Esperanza"]);
  });
});
