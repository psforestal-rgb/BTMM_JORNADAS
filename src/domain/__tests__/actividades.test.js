import { describe, it, expect } from "vitest";
import {
  actividadesDeFuncionario,
  actividadesEnDia,
  conteoActividadesPorTiempo,
  esActividadPasada,
  esAtencionRutinaria,
  filtrarActividadesPorTiempo,
  finDeActividad,
  FILTROS_TIEMPO,
  indexarActividadesPorPersonaDia,
  tieneActividadEse,
  tieneVisitEse,
} from "../actividades.js";

const plan = [
  { id: "a1", titulo: "Atención rutinaria de visitantes", inicio: "2026-05-06", fin: "2026-05-06", funcionarios: [] },
  { id: "a2", titulo: "Gira", inicio: "2026-05-12", fin: "2026-05-13", funcionarios: [] },
  { id: "a3", titulo: "Otro", inicio: "2026-05-10", fin: "2026-05-10", funcionarios: [] },
];

describe("actividades.actividadesEnDia", () => {
  it("filtra por rango inclusivo", () => {
    expect(actividadesEnDia(plan, "2026-05-06").map((a) => a.id)).toEqual(["a1"]);
    expect(actividadesEnDia(plan, "2026-05-12").map((a) => a.id)).toEqual(["a2"]);
    expect(actividadesEnDia(plan, "2026-05-13").map((a) => a.id)).toEqual(["a2"]);
    expect(actividadesEnDia(plan, "2026-05-15").map((a) => a.id)).toEqual([]);
  });
});

describe("actividades.esAtencionRutinaria", () => {
  it("reconoce atención rutinaria (case-insensitive, trim)", () => {
    expect(esAtencionRutinaria({ titulo: "Atención rutinaria de visitantes" })).toBe(true);
    expect(esAtencionRutinaria({ titulo: "  ATENCIÓN RUTINARIA DE VISITANTES  " })).toBe(true);
    expect(esAtencionRutinaria({ titulo: "Gira" })).toBe(false);
    expect(esAtencionRutinaria({})).toBe(false);
    expect(esAtencionRutinaria(null)).toBe(false);
  });
});

describe("actividades de una persona y filtro de tiempo (VF4 y VF7)", () => {
  const PLAN = [
    { id: "a1", titulo: "Patrullaje", inicio: "2026-07-01", fin: "2026-07-02", funcionarios: ["Ana Rojas"] },
    { id: "a2", titulo: "Capacitación", inicio: "2026-07-09", fin: "2026-07-11", funcionarios: ["Ana Rojas", "Beto Mora"] },
    { id: "a3", titulo: "Censo", inicio: "2026-07-20", funcionarios: ["Ana Rojas"] },
    { id: "a4", titulo: "Solo de Beto", inicio: "2026-07-21", funcionarios: ["Beto Mora"] },
    { id: "a5", titulo: "Sin fecha", funcionarios: ["Ana Rojas"] },
  ];
  const HOY = "2026-07-10";

  it("toma solo las actividades de la persona, ordenadas y con fecha", () => {
    const mias = actividadesDeFuncionario(PLAN, "Ana Rojas");
    expect(mias.map((a) => a.id)).toEqual(["a1", "a2", "a3"]);
  });

  it("una actividad en curso cuenta como próxima, no como pasada", () => {
    // a2 empezó el 9 y termina el 11: el 10 sigue viva.
    expect(esActividadPasada(PLAN[1], HOY)).toBe(false);
    expect(esActividadPasada(PLAN[0], HOY)).toBe(true);
  });

  it("filtra próximas, pasadas y todas sin perder ninguna", () => {
    const mias = actividadesDeFuncionario(PLAN, "Ana Rojas");
    expect(filtrarActividadesPorTiempo(mias, HOY, "proximas").map((a) => a.id)).toEqual(["a2", "a3"]);
    expect(filtrarActividadesPorTiempo(mias, HOY, "pasadas").map((a) => a.id)).toEqual(["a1"]);
    expect(filtrarActividadesPorTiempo(mias, HOY, "todas").map((a) => a.id)).toEqual(["a1", "a2", "a3"]);
  });

  it("los contadores de las pestañas cuadran con el filtro", () => {
    const mias = actividadesDeFuncionario(PLAN, "Ana Rojas");
    const conteo = conteoActividadesPorTiempo(mias, HOY);
    expect(conteo).toEqual({ proximas: 2, pasadas: 1, todas: 3 });
    for (const clave of FILTROS_TIEMPO) {
      expect(filtrarActividadesPorTiempo(mias, HOY, clave).length).toBe(conteo[clave]);
    }
  });

  it("el fin efectivo de una actividad de un día es su propio inicio", () => {
    expect(finDeActividad(PLAN[2])).toBe("2026-07-20");
    expect(finDeActividad(PLAN[1])).toBe("2026-07-11");
    expect(finDeActividad(undefined)).toBe("");
  });

  it("sin nombre no devuelve nada, en vez de devolver el plan entero", () => {
    expect(actividadesDeFuncionario(PLAN, "")).toEqual([]);
    expect(actividadesDeFuncionario(PLAN, undefined)).toEqual([]);
  });
});

describe("índice de actividad por persona y día", () => {
  it("dice lo mismo que preguntar día por día con `actividadesEnDia`", () => {
    const plan = [
      { id: "a1", titulo: "Gira", inicio: "2026-05-12", fin: "2026-05-14", funcionarios: ["Ana", "Beto"] },
      { id: "a2", titulo: "Censo", inicio: "2026-05-20", funcionarios: ["Ana"] },
      { id: "a3", titulo: "Cruza mes", inicio: "2026-05-30", fin: "2026-06-02", funcionarios: ["Beto"] },
    ];
    const indice = indexarActividadesPorPersonaDia(plan);
    const dias = [];
    for (let d = 10; d <= 30; d += 1) dias.push(`2026-05-${String(d).padStart(2, "0")}`);
    for (let d = 1; d <= 5; d += 1) dias.push(`2026-06-0${d}`);
    for (const nombre of ["Ana", "Beto", "Carla"]) {
      for (const iso of dias) {
        const referencia = actividadesEnDia(plan, iso).some((a) => (a.funcionarios || []).includes(nombre));
        expect(tieneActividadEse(indice, nombre, iso)).toBe(referencia);
      }
    }
  });

  it("cruza el cambio de mes sin saltarse días", () => {
    const indice = indexarActividadesPorPersonaDia([
      { id: "a", inicio: "2026-05-30", fin: "2026-06-02", funcionarios: ["Beto"] },
    ]);
    expect(tieneActividadEse(indice, "Beto", "2026-05-31")).toBe(true);
    expect(tieneActividadEse(indice, "Beto", "2026-06-01")).toBe(true);
    expect(tieneActividadEse(indice, "Beto", "2026-06-03")).toBe(false);
  });

  it("un rango imposible no cubre ningún día, igual que `actividadesEnDia`", () => {
    const plan = [{ id: "a", inicio: "2026-05-20", fin: "2026-05-10", funcionarios: ["Ana"] }];
    const indice = indexarActividadesPorPersonaDia(plan);
    for (let d = 10; d <= 20; d += 1) {
      const iso = `2026-05-${d}`;
      expect(tieneActividadEse(indice, "Ana", iso)).toBe(actividadesEnDia(plan, iso).some((a) => a.funcionarios.includes("Ana")));
    }
  });

  it("ignora lo que no puede indexar sin inventar nada", () => {
    const indice = indexarActividadesPorPersonaDia([
      { id: "a", titulo: "Sin fecha", funcionarios: ["Ana"] },
      { id: "b", inicio: "2026-05-01", funcionarios: [] },
      null,
    ]);
    expect(indice.size).toBe(0);
    expect(tieneActividadEse(null, "Ana", "2026-05-01")).toBe(false);
  });
});

describe("el índice distingue la atención de visitantes", () => {
  const plan = [
    { id: "v", titulo: "Atención rutinaria de visitantes", inicio: "2026-05-12", fin: "2026-05-13", funcionarios: ["Ana"] },
    { id: "p", titulo: "Patrullaje", inicio: "2026-05-12", fin: "2026-05-12", funcionarios: ["Beto"] },
  ];
  const indice = indexarActividadesPorPersonaDia(plan);

  it("marca los días de quien atiende visitantes", () => {
    expect(tieneVisitEse(indice, "Ana", "2026-05-12")).toBe(true);
    expect(tieneVisitEse(indice, "Ana", "2026-05-13")).toBe(true);
  });

  it("no marca otras actividades ni otros días", () => {
    expect(tieneActividadEse(indice, "Beto", "2026-05-12")).toBe(true);
    expect(tieneVisitEse(indice, "Beto", "2026-05-12")).toBe(false);
    expect(tieneVisitEse(indice, "Ana", "2026-05-14")).toBe(false);
  });

  it("un día con varias actividades queda marcado si UNA es la atención", () => {
    const mixto = indexarActividadesPorPersonaDia([
      { id: "x", titulo: "Patrullaje", inicio: "2026-05-12", funcionarios: ["Ana"] },
      { id: "y", titulo: "Atención rutinaria de visitantes", inicio: "2026-05-12", funcionarios: ["Ana"] },
    ]);
    expect(tieneVisitEse(mixto, "Ana", "2026-05-12")).toBe(true);
  });

  it("aguanta que le pregunten sin índice", () => {
    expect(tieneVisitEse(null, "Ana", "2026-05-12")).toBe(false);
  });
});
