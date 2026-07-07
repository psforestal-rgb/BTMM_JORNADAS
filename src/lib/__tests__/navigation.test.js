import { describe, expect, it } from "vitest";
import { hashForState, parseAppHash } from "../navigation.js";

describe("navegación por hash", () => {
  it("interpreta vistas con periodo", () => {
    expect(parseAppHash("#/roles/2026/07")).toEqual({ view: "roles", year: 2026, month: 6 });
  });

  it("interpreta detalle de día", () => {
    expect(parseAppHash("#/dia/2026-07-07")).toEqual({ view: "dia", diaVista: "2026-07-07" });
  });

  it("migra dashboard y protege rutas inválidas", () => {
    expect(parseAppHash("#dashboard").view).toBe("dia");
    expect(parseAppHash("#/no-existe").view).toBe("roles");
  });

  it("genera enlaces profundos estables", () => {
    expect(hashForState({ view: "planificacion", year: 2027, month: 0, diaVista: "2027-01-02" }))
      .toBe("#/planificacion/2027/01");
  });
});
