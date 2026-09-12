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
    expect(parseAppHash("#/no-existe").view).toBe("dia");
  });

  it("genera enlaces profundos estables", () => {
    expect(hashForState({ view: "planificacion", year: 2027, month: 0, diaVista: "2027-01-02" }))
      .toBe("#/planificacion/2027/01");
  });
});

describe("ruta de la ficha individual (VF1)", () => {
  it("lleva el nombre de la persona en la ruta, ida y vuelta", () => {
    const hash = hashForState({ view: "funcionario", funcionarioVista: "Ana Rojas" });
    expect(hash).toBe("#/funcionario/Ana%20Rojas");
    expect(parseAppHash(hash)).toEqual({ view: "funcionario", funcionarioVista: "Ana Rojas" });
  });

  it("no parte la ruta cuando el nombre trae barras o acentos", () => {
    const nombre = "María Pérez/Solís";
    const hash = hashForState({ view: "funcionario", funcionarioVista: nombre });
    expect(hash.split("/").length).toBe(3); // «#», «funcionario», nombre
    expect(parseAppHash(hash).funcionarioVista).toBe(nombre);
  });

  it("sin nombre devuelve a la lista en vez de dejar una vista en blanco", () => {
    expect(hashForState({ view: "funcionario", funcionarioVista: "" })).toBe("#/funcionarios");
    expect(hashForState({ view: "funcionario", funcionarioVista: "   " })).toBe("#/funcionarios");
    expect(parseAppHash("#/funcionario")).toEqual({ view: "funcionarios" });
    expect(parseAppHash("#/funcionario/")).toEqual({ view: "funcionarios" });
  });

  it("una secuencia de escape rota no rompe la aplicación", () => {
    expect(parseAppHash("#/funcionario/%E0%A4%A")).toEqual({ view: "funcionarios" });
  });

  it("la ficha no es una entrada más de la barra: la lista sigue siendo otra vista", () => {
    expect(parseAppHash("#/funcionarios")).toEqual({ view: "funcionarios" });
    expect(hashForState({ view: "funcionarios" })).toBe("#/funcionarios");
  });
});
