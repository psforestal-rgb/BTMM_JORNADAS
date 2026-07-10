import { describe, expect, it } from "vitest";
import { baseRoleData, ROLES_FUENTE_HASTA } from "../seedRoles.js";

describe("seedRoles — Rol Bloque 2026", () => {
  it("carga los códigos diarios normalizados de la fuente", () => {
    expect(baseRoleData["2026-5-Puesto Orosi-Errol Salazar-1"]).toBe("T10");
    expect(baseRoleData["2026-6-Puesto Quetzales-Pablo Sánchez-1"]).toBe("T1");
    expect(baseRoleData["2026-8-Puesto Orosi-Monserrath Navarro-1"]).toBe("T6");
  });

  it("conserva las categorías especiales dentro del modelo de la app", () => {
    expect(baseRoleData["2026-1-Puesto Orosi-Errol Salazar-1"]).toBe("O-F");
    expect(baseRoleData["2026-4-Puesto Orosi-Kenneth Mena-1"]).toBe("IN");
  });

  it("deja en blanco los meses aún no incluidos en la fuente", () => {
    expect(ROLES_FUENTE_HASTA).toBe("2026-08-31");
    expect(baseRoleData["2026-9-Puesto Quetzales-Pablo Sánchez-1"]).toBe("");
  });

  it("no incluye personas que no son funcionarias", () => {
    expect(baseRoleData["2026-8-Puesto Orosi-Enzo Martini-1"]).toBeUndefined();
  });
});
