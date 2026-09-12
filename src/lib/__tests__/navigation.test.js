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

describe("filtros en la ruta", () => {
  it("los escribe en orden alfabético: el mismo estado, el mismo enlace", () => {
    const a = hashForState({ view: "funcionarios", filtros: { orden: "puesto", filtro: "guardas" } });
    const b = hashForState({ view: "funcionarios", filtros: { filtro: "guardas", orden: "puesto" } });
    expect(a).toBe("#/funcionarios?filtro=guardas&orden=puesto");
    expect(a).toBe(b);
  });

  it("no escribe los vacíos: una vista sin filtrar tiene enlace limpio", () => {
    expect(hashForState({ view: "funcionarios", filtros: { q: "", filtro: null, orden: undefined } }))
      .toBe("#/funcionarios");
    expect(hashForState({ view: "funcionarios", filtros: {} })).toBe("#/funcionarios");
    expect(hashForState({ view: "funcionarios" })).toBe("#/funcionarios");
  });

  it("convive con el periodo y con el nombre de la ficha", () => {
    expect(hashForState({ view: "planificacion", year: 2026, month: 6, filtros: { viatico: "si" } }))
      .toBe("#/planificacion/2026/07?viatico=si");
    expect(parseAppHash("#/planificacion/2026/07?viatico=si"))
      .toEqual({ view: "planificacion", year: 2026, month: 6, filtros: { viatico: "si" } });
  });

  it("una ruta sin consulta NO dice nada de los filtros", () => {
    // La diferencia importa: si dijera «sin filtros», abrir un enlace limpio
    // borraría los que la persona tuviera puestos.
    expect(parseAppHash("#/funcionarios").filtros).toBeUndefined();
    expect(parseAppHash("#/funcionarios?").filtros).toBeUndefined();
    expect(parseAppHash("#/funcionarios?filtro=").filtros).toBeUndefined();
  });

  it("respeta acentos y espacios en los valores", () => {
    const hash = hashForState({ view: "planificacion", year: 2026, month: 0, filtros: { persona: "María Pérez" } });
    expect(parseAppHash(hash).filtros).toEqual({ persona: "María Pérez" });
  });

  it("la ida y vuelta es estable", () => {
    const filtros = { filtro: "acum", orden: "estado", q: "ana" };
    const hash = hashForState({ view: "funcionarios", filtros });
    expect(hashForState({ view: "funcionarios", filtros: parseAppHash(hash).filtros })).toBe(hash);
  });
});
