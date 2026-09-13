import { describe, expect, it } from "vitest";
import {
  baseRoleData,
  reconciliarRoleDataConFuente,
  ROLES_FUENTE_DESDE,
  ROLES_FUENTE_HASTA,
  ROLES_FUENTE_VERSION,
  ROLES_REIMPOSICION_DESDE,
} from "../seedRoles.js";

describe("seedRoles — Rol Bloque (revisión 11/09/2026)", () => {
  it("carga los códigos diarios normalizados de la fuente", () => {
    expect(baseRoleData["2026-5-Puesto Orosi-Errol Salazar-1"]).toBe("T10");
    expect(baseRoleData["2026-6-Puesto Quetzales-Pablo Sánchez-1"]).toBe("T1");
    expect(baseRoleData["2026-7-Puesto Quetzales-Diana Tencio-13"]).toBe("V1");
    expect(baseRoleData["2026-8-Puesto Orosi-Mayra Espinoza-3"]).toBe("V1");
    expect(baseRoleData["2026-12-Puesto Orosi-Errol Salazar-1"]).toBe("T7");
  });

  it("recoge la revisión de setiembre: el rol de ese mes cambió respecto al libro de agosto", () => {
    // El libro del 13/08 daba "T2" el 1 de setiembre a Errol Salazar; el del
    // 11/09 da "L5". Son 603 celdas replanificadas entre agosto y octubre.
    expect(baseRoleData["2026-9-Puesto Orosi-Errol Salazar-1"]).toBe("L5");
    expect(baseRoleData["2026-9-Puesto Orosi-Errol Salazar-15"]).toBe("L4");
  });

  it("cubre diciembre de 2025, el mes con el que arranca el libro", () => {
    expect(ROLES_FUENTE_DESDE).toBe("2025-12-01");
    expect(ROLES_FUENTE_HASTA).toBe("2026-12-31");
    expect(baseRoleData["2025-12-Puesto Orosi-Errol Salazar-1"]).toBe("O-F");
    // Carlos Cordero estuvo en Villa Mills hasta marzo: su rol de diciembre se
    // archiva ahí, no en La Esperanza, que es donde está desde abril.
    expect(baseRoleData["2025-12-Puesto Villa Mills-Carlos Cordero-1"]).toBe("O-F");
    expect(baseRoleData["2026-4-Puesto Esperanza-Carlos Cordero-1"]).toBeTruthy();
    const meses = new Set(
      Object.keys(baseRoleData).map((k) => k.match(/^(\d{4})-(\d+)-/).slice(1, 3).join("-")),
    );
    expect(meses.size).toBe(13);
  });

  it("expone una versión de fuente no vacía", () => {
    expect(typeof ROLES_FUENTE_VERSION).toBe("string");
    expect(ROLES_FUENTE_VERSION.length).toBeGreaterThan(0);
  });

  it("conserva las categorías especiales dentro del modelo de la app", () => {
    expect(baseRoleData["2026-1-Puesto Orosi-Errol Salazar-1"]).toBe("O-F");
    expect(baseRoleData["2026-4-Puesto Orosi-Kenneth Mena-1"]).toBe("IN");
  });

  it("todo valor cae en una categoría que el dominio entiende", () => {
    const valores = new Set(Object.values(baseRoleData).filter(Boolean));
    // T/L/V/I/O son las categorías de `categoriaDe()`; ninguna otra inicial
    // debe aparecer, o la celda se pintaría como turno sin serlo.
    for (const v of valores) expect(v[0]).toMatch(/^[TLVIO]$/);
    // Los códigos sin significado documentado viajan enteros dentro de «O-».
    expect(valores.has("O-F")).toBe(true);
    expect(valores.has("O-FA")).toBe(true);
    expect(valores.has("O-G")).toBe(true);
    expect(valores.has("O-CM")).toBe(true);
  });

  it("al reconciliar impone del mes de sincronización en adelante, sin tocar el pasado ni las claves CFG", () => {
    const setiembre = "2026-9-Puesto Orosi-Errol Salazar-1";
    const agosto = "2026-8-Puesto Orosi-Errol Salazar-1";
    const julio = "2026-7-Puesto Quetzales-Diana Tencio-13";
    const cfg = "CFG-2026-9-Puesto Orosi-Errol Salazar";
    const resultado = reconciliarRoleDataConFuente({
      [setiembre]: "T99",
      [agosto]: "T99",
      [julio]: "T99",
      [cfg]: "12x6",
      "2026-9-Puesto Personal-Persona local-1": "T1",
    });

    expect(ROLES_REIMPOSICION_DESDE).toBe("2026-09");
    // De setiembre en adelante manda el libro.
    expect(resultado[setiembre]).toBe("L5");
    // Agosto ya es pasado: manda lo que tenga el aparato.
    expect(resultado[agosto]).toBe("T99");
    expect(resultado[julio]).toBe("T99");
    expect(resultado[cfg]).toBe("12x6");
    expect(resultado["2026-9-Puesto Personal-Persona local-1"]).toBe("T1");
  });

  it("el libro corrige y agrega, pero NUNCA vacía una celda ya guardada", () => {
    // El libro del 11/09 dejó de traer a Kenneth Mena de setiembre en adelante.
    // Sin esta regla, su rol guardado se habría borrado solo.
    const clave = "2026-9-Puesto Orosi-Kenneth Mena-1";
    expect(baseRoleData[clave]).toBe("");
    const resultado = reconciliarRoleDataConFuente({ [clave]: "T3" });
    expect(resultado[clave]).toBe("T3");
  });

  it("no incluye personas que no están en la lista de funcionarios de la app", () => {
    expect(baseRoleData["2026-8-Puesto Orosi-Enzo Martini-1"]).toBeUndefined();
    expect(baseRoleData["2026-9-Puesto Orosi-Diego Salazar-1"]).toBeUndefined();
  });
});
