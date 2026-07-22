import { describe, it, expect } from "vitest";
import {
  rolKey,
  rolCfgKey,
  parseModalidad,
  generarValorPatron,
  esRolActivo,
  etiquetaRol,
  categoriaDe,
  formatearCategoria,
  renumerarFila,
  posCicloDeCodigo,
  codigoDePosCiclo,
  generarPatronRangoContinuo,
  ultimoDiaProgramado,
} from "../roles.js";

describe("roles.rolKey / rolCfgKey", () => {
  it("genera claves estables", () => {
    expect(rolKey(2026, 4, "Puesto Orosi", "Errol", 12)).toBe("2026-5-Puesto Orosi-Errol-12");
    expect(rolCfgKey(2026, 4, "Puesto Orosi", "Errol")).toBe("CFG-2026-5-Puesto Orosi-Errol");
  });
});

describe("roles.parseModalidad", () => {
  it("administrativo L-V", () => {
    expect(parseModalidad("Horario administrativo L-V")).toEqual({ trabajo: 5, libre: 2, administrativo: true });
  });
  it("turnos NxM", () => {
    expect(parseModalidad("10x5")).toEqual({ trabajo: 10, libre: 5, administrativo: false });
    expect(parseModalidad("16x8")).toEqual({ trabajo: 16, libre: 8, administrativo: false });
    expect(parseModalidad("20x10")).toEqual({ trabajo: 20, libre: 10, administrativo: false });
  });
  it("fallback con datos inválidos", () => {
    expect(parseModalidad(null)).toEqual({ trabajo: 10, libre: 5, administrativo: false });
    expect(parseModalidad("")).toEqual({ trabajo: 10, libre: 5, administrativo: false });
  });
});

describe("roles.generarValorPatron — administrativo", () => {
  it("L–V devuelve T1..T5, S=L1, D=L2", () => {
    // Mayo 2026: 1 viernes (T5), 2 sábado (L1), 3 domingo (L2), 4 lunes (T1)
    expect(generarValorPatron("Horario administrativo L-V", 1, 1, 2026, 4)).toBe("T5");
    expect(generarValorPatron("Horario administrativo L-V", 2, 1, 2026, 4)).toBe("L1");
    expect(generarValorPatron("Horario administrativo L-V", 3, 1, 2026, 4)).toBe("L2");
    expect(generarValorPatron("Horario administrativo L-V", 4, 1, 2026, 4)).toBe("T1");
  });
});

describe("roles.generarValorPatron — 10x5", () => {
  it("ciclo correcto desde el primer día laboral", () => {
    expect(generarValorPatron("10x5", 1, 1, 2026, 4)).toBe("T1");
    expect(generarValorPatron("10x5", 10, 1, 2026, 4)).toBe("T10");
    expect(generarValorPatron("10x5", 11, 1, 2026, 4)).toBe("L1");
    expect(generarValorPatron("10x5", 15, 1, 2026, 4)).toBe("L5");
    expect(generarValorPatron("10x5", 16, 1, 2026, 4)).toBe("T1");
  });
});

describe("roles.esRolActivo", () => {
  it("solo T es activo", () => {
    expect(esRolActivo("T1")).toBe(true);
    expect(esRolActivo("T10")).toBe(true);
    expect(esRolActivo("L1")).toBe(false);
    expect(esRolActivo("V1")).toBe(false);
    expect(esRolActivo("I1")).toBe(false);
    expect(esRolActivo("O1")).toBe(false);
    expect(esRolActivo("")).toBe(false);
    expect(esRolActivo(null)).toBe(false);
  });
});

describe("roles.etiquetaRol", () => {
  it("mapea código a etiqueta legible", () => {
    expect(etiquetaRol("T3")).toBe("Turno");
    expect(etiquetaRol("L2")).toBe("Libre");
    expect(etiquetaRol("V1")).toBe("Vacaciones");
    expect(etiquetaRol("I1")).toBe("Incapacidad");
    expect(etiquetaRol("O5")).toBe("Otro");
    expect(etiquetaRol("")).toBe("Sin marcar");
  });
});

describe("roles.categoriaDe", () => {
  it("extrae la letra inicial", () => {
    expect(categoriaDe("T7")).toBe("T");
    expect(categoriaDe("L1")).toBe("L");
    expect(categoriaDe("")).toBe("");
    expect(categoriaDe(null)).toBe("");
  });
});

describe("roles.formatearCategoria", () => {
  it("turno respeta ciclo de modalidad", () => {
    expect(formatearCategoria("T", 1, "10x5")).toBe("T1");
    expect(formatearCategoria("T", 10, "10x5")).toBe("T10");
    expect(formatearCategoria("T", 11, "10x5")).toBe("T1");
  });
  it("libre respeta ciclo de modalidad", () => {
    expect(formatearCategoria("L", 1, "10x5")).toBe("L1");
    expect(formatearCategoria("L", 5, "10x5")).toBe("L5");
    expect(formatearCategoria("L", 6, "10x5")).toBe("L1");
  });
  it("V/I/O usa consecutivo crudo", () => {
    expect(formatearCategoria("V", 7, "10x5")).toBe("V7");
    expect(formatearCategoria("I", 3, "10x5")).toBe("I3");
    expect(formatearCategoria("O", 12, "10x5")).toBe("O12");
  });
});

describe("roles.renumerarFila", () => {
  it("renumera consecutivos al cambiar una celda", () => {
    const days = [1, 2, 3, 4, 5, 6, 7];
    // Estado original: T T T T T L L (modalidad 10x5)
    const categorias = { 1: "T", 2: "T", 3: "T", 4: "T", 5: "T", 6: "L", 7: "L" };
    const resultado = renumerarFila({ days, categorias, modalidad: "10x5" });
    expect(resultado[1]).toBe("T1");
    expect(resultado[2]).toBe("T2");
    expect(resultado[5]).toBe("T5");
    expect(resultado[6]).toBe("L1");
    expect(resultado[7]).toBe("L2");
  });
  it("cambio de categoría reinicia el contador", () => {
    const days = [1, 2, 3, 4];
    const categorias = { 1: "T", 2: "L", 3: "T", 4: "T" };
    const resultado = renumerarFila({ days, categorias, modalidad: "10x5" });
    expect(resultado[1]).toBe("T1");
    expect(resultado[2]).toBe("L1");
    expect(resultado[3]).toBe("T1");
    expect(resultado[4]).toBe("T2");
  });
  it("celdas vacías cortan la serie", () => {
    const days = [1, 2, 3, 4];
    const categorias = { 1: "T", 2: "", 3: "T", 4: "T" };
    const resultado = renumerarFila({ days, categorias, modalidad: "10x5" });
    expect(resultado[1]).toBe("T1");
    expect(resultado[2]).toBe("");
    expect(resultado[3]).toBe("T1");
    expect(resultado[4]).toBe("T2");
  });
});

describe("roles.posCicloDeCodigo / codigoDePosCiclo", () => {
  it("son inversas dentro del ciclo (10x5)", () => {
    expect(posCicloDeCodigo("T1", "10x5")).toBe(0);
    expect(posCicloDeCodigo("T10", "10x5")).toBe(9);
    expect(posCicloDeCodigo("L1", "10x5")).toBe(10);
    expect(posCicloDeCodigo("L5", "10x5")).toBe(14);
    expect(codigoDePosCiclo(0, "10x5")).toBe("T1");
    expect(codigoDePosCiclo(9, "10x5")).toBe("T10");
    expect(codigoDePosCiclo(10, "10x5")).toBe("L1");
    expect(codigoDePosCiclo(14, "10x5")).toBe("L5");
  });
  it("codigoDePosCiclo envuelve posiciones fuera del ciclo", () => {
    expect(codigoDePosCiclo(15, "10x5")).toBe("T1");
    expect(codigoDePosCiclo(-1, "10x5")).toBe("L5");
  });
  it("posCicloDeCodigo devuelve null para códigos no T/L o fuera de rango", () => {
    expect(posCicloDeCodigo("V1", "10x5")).toBeNull();
    expect(posCicloDeCodigo("", "10x5")).toBeNull();
    expect(posCicloDeCodigo("T11", "10x5")).toBeNull(); // fuera del rango de trabajo
    expect(posCicloDeCodigo("L6", "10x5")).toBeNull(); // fuera del rango libre
    expect(posCicloDeCodigo("T1", "Horario administrativo L-V")).toBeNull(); // sin ciclo
  });
});

describe("roles.generarPatronRangoContinuo", () => {
  it("llena un ciclo 10x5 empezando en T1 (posInicial 0)", () => {
    // 5 → 20 de mayo de 2026 (16 días): T1..T10, L1..L5, T1
    const filas = generarPatronRangoContinuo({
      modalidad: "10x5",
      desde: { year: 2026, month: 4, day: 5 },
      hasta: { year: 2026, month: 4, day: 20 },
      posInicial: 0,
    });
    expect(filas).toHaveLength(16);
    expect(filas[0]).toEqual({ year: 2026, month: 4, day: 5, valor: "T1" });
    expect(filas[9].valor).toBe("T10");
    expect(filas[10].valor).toBe("L1");
    expect(filas[14].valor).toBe("L5");
    expect(filas[15].valor).toBe("T1");
  });

  it("no reinicia el ciclo al cruzar el cambio de mes", () => {
    // Empieza el 30 abr 2026 en T9 (posInicial 8) y sigue continuo a mayo.
    const filas = generarPatronRangoContinuo({
      modalidad: "10x5",
      desde: { year: 2026, month: 3, day: 30 },
      hasta: { year: 2026, month: 4, day: 3 },
      posInicial: 8,
    });
    expect(filas.map((f) => f.valor)).toEqual(["T9", "T10", "L1", "L2"]);
    // Cruce de mes correcto (abril → mayo) sin reiniciar en T1.
    expect(filas[0]).toEqual({ year: 2026, month: 3, day: 30, valor: "T9" });
    expect(filas[1]).toEqual({ year: 2026, month: 4, day: 1, valor: "T10" });
    expect(filas[2]).toEqual({ year: 2026, month: 4, day: 2, valor: "L1" });
  });

  it("administrativo se llena por día de la semana e ignora posInicial", () => {
    // 1 mayo 2026 = viernes; 2 = sábado; 3 = domingo; 4 = lunes.
    const filas = generarPatronRangoContinuo({
      modalidad: "Horario administrativo L-V",
      desde: { year: 2026, month: 4, day: 1 },
      hasta: { year: 2026, month: 4, day: 4 },
      posInicial: 7,
    });
    expect(filas.map((f) => f.valor)).toEqual(["T5", "L1", "L2", "T1"]);
  });

  it("devuelve vacío si el rango está invertido", () => {
    const filas = generarPatronRangoContinuo({
      modalidad: "10x5",
      desde: { year: 2026, month: 4, day: 10 },
      hasta: { year: 2026, month: 4, day: 5 },
      posInicial: 0,
    });
    expect(filas).toEqual([]);
  });
});

describe("roles.ultimoDiaProgramado", () => {
  const puesto = "Puesto Orosi";
  const persona = "Errol Salazar";
  it("encuentra la fecha máxima con override no vacío", () => {
    const roleData = {
      [rolKey(2026, 6, puesto, persona, 5)]: "T1",
      [rolKey(2026, 6, puesto, persona, 20)]: "T10",
      [rolKey(2026, 7, puesto, persona, 3)]: "L2", // agosto: mayor
      [rolCfgKey(2026, 6, puesto, persona)]: "10x5", // no cuenta (config)
    };
    expect(ultimoDiaProgramado(roleData, puesto, persona)).toEqual({ year: 2026, month: 7, day: 3 });
  });
  it("ignora overrides vacíos y de otras personas", () => {
    const roleData = {
      [rolKey(2026, 6, puesto, persona, 5)]: "T1",
      [rolKey(2026, 6, puesto, persona, 28)]: "", // vacío: no cuenta
      [rolKey(2026, 6, puesto, "Otra Persona", 30)]: "T1", // otra persona
    };
    expect(ultimoDiaProgramado(roleData, puesto, persona)).toEqual({ year: 2026, month: 6, day: 5 });
  });
  it("devuelve null si no hay días programados", () => {
    expect(ultimoDiaProgramado({}, puesto, persona)).toBeNull();
    expect(ultimoDiaProgramado(null, puesto, persona)).toBeNull();
  });
});
