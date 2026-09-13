import { describe, expect, it } from "vitest";
import { baseFuncionarios } from "../seedFuncionarios.js";
import { baseRoleData } from "../seedRoles.js";
import { puestos, opcionesPuestoOperativo } from "../puestos.js";
import { HISTORIAL_PUESTOS_2026 } from "../historialPuestos2026.js";
import {
  estabaEnMes,
  puestoEnFecha,
  puestoEnMes,
  validarHistorial,
} from "../../domain/historialPuestos.js";

const porNombre = (nombre) => baseFuncionarios.find((f) => f.nombre === nombre);

describe("historial de puestos sembrado desde el rol institucional", () => {
  it("todas las fichas traen un historial válido", () => {
    expect(baseFuncionarios).toHaveLength(19);
    for (const f of baseFuncionarios) {
      expect(Array.isArray(f.historialPuestos)).toBe(true);
      expect(f.historialPuestos.length).toBeGreaterThan(0);
      expect(validarHistorial(f)).toEqual([]);
    }
  });

  it("el puestoOperativo de cada ficha es el último tramo de su historial", () => {
    for (const f of baseFuncionarios) {
      const ultimo = f.historialPuestos[f.historialPuestos.length - 1];
      expect(f.puestoOperativo).toBe(ultimo.puesto);
    }
  });

  it("todo puesto citado por un historial existe en la lista de puestos", () => {
    const conocidos = new Set(puestos.map((p) => p.nombre));
    for (const tramos of Object.values(HISTORIAL_PUESTOS_2026)) {
      for (const t of tramos) expect(conocidos.has(t.puesto)).toBe(true);
    }
  });

  it("Villa Mills se conserva como puesto histórico, no asignable", () => {
    const vm = puestos.find((p) => p.nombre === "Puesto Villa Mills");
    expect(vm).toBeTruthy();
    expect(vm.vigente).toBe(false);
    expect(opcionesPuestoOperativo).not.toContain("Puesto Villa Mills");
    // Y sigue teniendo rol: el de Carlos Cordero hasta marzo.
    expect(baseRoleData["2025-12-Puesto Villa Mills-Carlos Cordero-1"]).toBeTruthy();
  });

  it("Carlos Cordero pasa de Villa Mills a La Esperanza el 1 de abril", () => {
    const f = porNombre("Carlos Cordero");
    expect(puestoEnMes(f, 2026, 3)).toBe("Puesto Villa Mills");
    expect(puestoEnMes(f, 2026, 4)).toBe("Puesto Esperanza");
    expect(f.puestoOperativo).toBe("Puesto Esperanza");
  });

  it("el traslado de Yolanda Elizondo cae a mitad de marzo y no parte su rol", () => {
    const f = porNombre("Yolanda Elizondo");
    expect(puestoEnFecha(f, "2026-03-17")).toBe("Puesto Orosi");
    expect(puestoEnFecha(f, "2026-03-18")).toBe("Puesto Esperanza");
    // Los 31 días de marzo tienen valor, repartidos entre los dos puestos.
    for (let d = 1; d <= 17; d += 1) {
      expect(baseRoleData[`2026-3-Puesto Orosi-Yolanda Elizondo-${d}`]).toBeTruthy();
    }
    for (let d = 18; d <= 31; d += 1) {
      expect(baseRoleData[`2026-3-Puesto Esperanza-Yolanda Elizondo-${d}`]).toBeTruthy();
    }
  });

  it("las estancias en Orosi de la gente de Quetzales van y vuelven", () => {
    const karen = porNombre("Karen Valle");
    expect(puestoEnMes(karen, 2026, 1)).toBe("Puesto Quetzales");
    expect(puestoEnMes(karen, 2026, 3)).toBe("Puesto Orosi");
    expect(puestoEnMes(karen, 2026, 9)).toBe("Puesto Quetzales");

    for (const nombre of ["Laura Valverde", "Jetzelly Villalobos"]) {
      const f = porNombre(nombre);
      expect(puestoEnMes(f, 2026, 6)).toBe("Puesto Quetzales");
      expect(puestoEnMes(f, 2026, 7)).toBe("Puesto Orosi");
      expect(f.puestoOperativo).toBe("Puesto Orosi");
    }
  });

  it("Kenneth Mena sale del bloque el 31 de agosto y deja de aparecer después", () => {
    const f = porNombre("Kenneth Mena");
    expect(f.estado).toBe("Inactivo");
    expect(estabaEnMes(f, 2026, 8)).toBe(true);
    expect(estabaEnMes(f, 2026, 9)).toBe(false);
    expect(f.historialPuestos[0].hasta).toBe("2026-08-31");
    expect(f.historialPuestos[0].motivo).toMatch(/Área de Conservación/);
    // Su rol hasta agosto sigue ahí: salir no borra lo que trabajó.
    expect(baseRoleData["2026-8-Puesto Orosi-Kenneth Mena-1"]).toBeTruthy();
  });

  it("Diego Salazar entra en setiembre, destacado en Los Quetzales", () => {
    const f = porNombre("Diego Salazar");
    expect(f).toBeTruthy();
    expect(f.puestoOperativo).toBe("Puesto Quetzales");
    expect(estabaEnMes(f, 2026, 8)).toBe(false);
    expect(estabaEnMes(f, 2026, 9)).toBe(true);
    // El libro lo archiva bajo el bloque de Orosi; su rol se carga igual, bajo
    // el puesto donde la administración lo sitúa.
    expect(baseRoleData["2026-9-Puesto Quetzales-Diego Salazar-1"]).toBeTruthy();
    expect(baseRoleData["2026-10-Puesto Quetzales-Diego Salazar-31"]).toBeTruthy();
  });

  it("quienes no son funcionarios del ACC no entran en la semilla", () => {
    const nombres = baseFuncionarios.map((f) => f.nombre);
    // Villa Mills pasó a otra Área de Conservación con su personal…
    expect(nombres).not.toContain("Mauricio Hernandez");
    expect(nombres).not.toContain("Mariali Salazar");
    // …y Enzo Martini es voluntario, no funcionario.
    expect(nombres).not.toContain("Enzo Martini");
  });

  it("ninguna clave de rol apunta a un puesto que no exista", () => {
    const conocidos = new Set(puestos.map((p) => p.nombre));
    const nombres = new Set(baseFuncionarios.map((f) => f.nombre));
    for (const clave of Object.keys(baseRoleData)) {
      const m = clave.match(/^(\d{4})-(\d+)-(.+)-(\d+)$/);
      expect(m).toBeTruthy();
      const medio = m[3];
      const puesto = [...conocidos].find((p) => medio.startsWith(`${p}-`));
      expect(puesto).toBeTruthy();
      expect(nombres.has(medio.slice(puesto.length + 1))).toBe(true);
    }
  });
});
