import { describe, expect, it } from "vitest";
import {
  baseRoleData,
  reconciliarRoleDataConFuente,
  ROLES_FUENTE_HASTA,
  ROLES_FUENTE_VERSION,
} from "../seedRoles.js";

describe("seedRoles — Rol Bloque 2026", () => {
  it("carga los códigos diarios normalizados de la fuente", () => {
    expect(baseRoleData["2026-5-Puesto Orosi-Errol Salazar-1"]).toBe("T10");
    expect(baseRoleData["2026-6-Puesto Quetzales-Pablo Sánchez-1"]).toBe("T1");
    expect(baseRoleData["2026-7-Puesto Quetzales-Diana Tencio-13"]).toBe("V1");
    expect(baseRoleData["2026-7-Puesto Quetzales-Juan Pablo Granados-31"]).toBe("LA");
    expect(baseRoleData["2026-8-Puesto Orosi-Monserrath Navarro-1"]).toBe("T1");
    expect(baseRoleData["2026-8-Puesto Orosi-Mayra Espinoza-3"]).toBe("V1");
  });

  it("conserva las categorías especiales dentro del modelo de la app", () => {
    expect(baseRoleData["2026-1-Puesto Orosi-Errol Salazar-1"]).toBe("O-F");
    expect(baseRoleData["2026-4-Puesto Orosi-Kenneth Mena-1"]).toBe("IN");
  });

  it("deja en blanco los meses aún no incluidos en la fuente", () => {
    expect(ROLES_FUENTE_HASTA).toBe("2026-08-31");
    expect(ROLES_FUENTE_VERSION).toBe("2026-07-21T20:19:49.675Z");
    expect(baseRoleData["2026-9-Puesto Quetzales-Pablo Sánchez-1"]).toBe("");
  });

  it("refleja celdas retiradas y personas incorporadas en la revisión julio-agosto", () => {
    expect(baseRoleData["2026-7-Puesto Orosi-Monserrath Navarro-15"]).toBe("");
    expect(baseRoleData["2026-8-Puesto Orosi-Kenneth Mena-1"]).toBe("L1");
  });

  it("al reconciliar impone julio-agosto sin tocar otros meses ni claves CFG", () => {
    const septiembre = "2026-9-Puesto Orosi-Errol Salazar-1";
    const julio = "2026-7-Puesto Quetzales-Diana Tencio-13";
    const julioBlanco = "2026-7-Puesto Orosi-Monserrath Navarro-15";
    const cfg = "CFG-2026-7-Puesto Orosi-Errol Salazar";
    const resultado = reconciliarRoleDataConFuente({
      [septiembre]: "V3",
      [julio]: "T99",
      [julioBlanco]: "T1",
      [cfg]: "12x6",
      "2026-7-Puesto Personal-Persona local-1": "T1",
    });

    expect(resultado[julio]).toBe("V1");
    expect(resultado[julioBlanco]).toBe("");
    expect(resultado[septiembre]).toBe("V3");
    expect(resultado[cfg]).toBe("12x6");
    expect(resultado["2026-7-Puesto Personal-Persona local-1"]).toBe("T1");
  });

  it("no incluye personas que no son funcionarias", () => {
    expect(baseRoleData["2026-8-Puesto Orosi-Enzo Martini-1"]).toBeUndefined();
  });
});
