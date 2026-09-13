import { describe, expect, it } from "vitest";
import { DIALECTOS, identificador, literal, volcadoSQL } from "../sql.js";
import { TIPOS } from "../../domain/esquemaRelacional.js";

const TABLAS_PRUEBA = [
  {
    nombre: "puestos",
    descripcion: "Puestos.",
    clavePrimaria: ["nombre"],
    columnas: [{ nombre: "nombre", tipo: TIPOS.TEXTO }],
  },
  {
    nombre: "personas",
    clavePrimaria: ["id"],
    foraneas: [{ columnas: ["puesto"], tabla: "puestos", referencia: ["nombre"] }],
    columnas: [
      { nombre: "id", tipo: TIPOS.TEXTO },
      { nombre: "nombre", tipo: TIPOS.TEXTO },
      { nombre: "puesto", tipo: TIPOS.TEXTO },
      { nombre: "dias", tipo: TIPOS.ENTERO },
      { nombre: "horas", tipo: TIPOS.DECIMAL },
      { nombre: "activa", tipo: TIPOS.BOOLEANO },
      { nombre: "ingreso", tipo: TIPOS.FECHA },
    ],
  },
];

const DATOS = {
  puestos: [{ nombre: "Puesto Orosi" }],
  personas: [
    {
      id: "f1",
      nombre: "O'Brien de la Peña",
      puesto: "Puesto Orosi",
      dias: 12,
      horas: 7.5,
      activa: true,
      ingreso: "2020-01-15",
    },
    {
      id: "f2",
      nombre: 'Comillas "dobles"',
      puesto: "Puesto Orosi",
      dias: null,
      horas: Number.NaN,
      activa: false,
      ingreso: "",
    },
  ],
};

describe("literal", () => {
  it("duplica la comilla simple, que es el único escape que el estándar exige", () => {
    expect(literal("O'Brien", TIPOS.TEXTO, DIALECTOS.SQLITE)).toBe("'O''Brien'");
  });

  it("deja las comillas dobles en paz dentro de un texto", () => {
    expect(literal('dice "hola"', TIPOS.TEXTO, DIALECTOS.SQLITE)).toBe("'dice \"hola\"'");
  });

  it("escribe NULL ante ausencia de valor", () => {
    expect(literal(null, TIPOS.TEXTO, DIALECTOS.SQLITE)).toBe("NULL");
    expect(literal(undefined, TIPOS.ENTERO, DIALECTOS.SQLITE)).toBe("NULL");
  });

  it("una fecha vacía es NULL, no cadena vacía: PostgreSQL rechaza '' como DATE", () => {
    expect(literal("", TIPOS.FECHA, DIALECTOS.POSTGRESQL)).toBe("NULL");
    expect(literal("   ", TIPOS.FECHA, DIALECTOS.SQLITE)).toBe("NULL");
    expect(literal("2026-09-12", TIPOS.FECHA, DIALECTOS.POSTGRESQL)).toBe("'2026-09-12'");
  });

  it("un texto vacío sí es cadena vacía, no NULL", () => {
    expect(literal("", TIPOS.TEXTO, DIALECTOS.SQLITE)).toBe("''");
  });

  it("los booleanos se escriben como cada motor los entiende", () => {
    expect(literal(true, TIPOS.BOOLEANO, DIALECTOS.SQLITE)).toBe("1");
    expect(literal(false, TIPOS.BOOLEANO, DIALECTOS.SQLITE)).toBe("0");
    expect(literal(true, TIPOS.BOOLEANO, DIALECTOS.POSTGRESQL)).toBe("TRUE");
    expect(literal(false, TIPOS.BOOLEANO, DIALECTOS.POSTGRESQL)).toBe("FALSE");
  });

  it("un número no finito sale NULL en vez de romper el archivo", () => {
    expect(literal(Number.NaN, TIPOS.DECIMAL, DIALECTOS.SQLITE)).toBe("NULL");
    expect(literal(Number.POSITIVE_INFINITY, TIPOS.DECIMAL, DIALECTOS.SQLITE)).toBe("NULL");
    expect(literal(7.5, TIPOS.DECIMAL, DIALECTOS.SQLITE)).toBe("7.5");
  });
});

describe("identificador", () => {
  it("entrecomilla y duplica las comillas dobles internas", () => {
    expect(identificador("rol_dias")).toBe('"rol_dias"');
    expect(identificador('raro"nombre')).toBe('"raro""nombre"');
  });
});

describe("volcadoSQL", () => {
  const sqlite = volcadoSQL(TABLAS_PRUEBA, DATOS, { dialecto: DIALECTOS.SQLITE, cabecera: "Prueba" });
  const postgres = volcadoSQL(TABLAS_PRUEBA, DATOS, { dialecto: DIALECTOS.POSTGRESQL });

  it("crea las tablas antes de insertar, y en orden de dependencia", () => {
    const posCreatePuestos = sqlite.indexOf('CREATE TABLE IF NOT EXISTS "puestos"');
    const posCreatePersonas = sqlite.indexOf('CREATE TABLE IF NOT EXISTS "personas"');
    const posInsert = sqlite.indexOf("INSERT INTO");
    expect(posCreatePuestos).toBeGreaterThan(-1);
    expect(posCreatePuestos).toBeLessThan(posCreatePersonas);
    expect(posCreatePersonas).toBeLessThan(posInsert);
  });

  it("declara clave primaria y claves foráneas", () => {
    expect(sqlite).toContain('PRIMARY KEY ("id")');
    expect(sqlite).toContain('FOREIGN KEY ("puesto") REFERENCES "puestos" ("nombre")');
  });

  it("envuelve todo en una transacción", () => {
    expect(sqlite).toContain("BEGIN TRANSACTION;");
    expect(sqlite.trimEnd().endsWith("COMMIT;")).toBe(true);
    expect(postgres).toContain("BEGIN;");
  });

  it("activa la comprobación de claves foráneas en SQLite, que viene apagada", () => {
    expect(sqlite).toContain("PRAGMA foreign_keys = ON;");
  });

  it("usa los tipos de cada dialecto", () => {
    expect(sqlite).toContain('"horas" REAL');
    expect(sqlite).toContain('"activa" INTEGER');
    expect(sqlite).toContain('"ingreso" TEXT');
    expect(postgres).toContain('"horas" DOUBLE PRECISION');
    expect(postgres).toContain('"activa" BOOLEAN');
    expect(postgres).toContain('"ingreso" DATE');
  });

  it("escapa los valores de las filas", () => {
    expect(sqlite).toContain("'O''Brien de la Peña'");
    expect(sqlite).toContain("'Comillas \"dobles\"'");
  });

  it("una tabla sin filas se declara igual y se anota", () => {
    const vacio = volcadoSQL(TABLAS_PRUEBA, { puestos: [], personas: [] });
    expect(vacio).toContain('CREATE TABLE IF NOT EXISTS "personas"');
    expect(vacio).toContain("-- personas: sin filas");
  });

  it("lleva la cabecera como comentario, sin romper el SQL", () => {
    expect(sqlite).toContain("-- Prueba");
    expect(sqlite).toContain("-- Dialecto: sqlite");
  });

  it("parte los INSERT en lotes para no pasarse del límite de SQLite", () => {
    const muchas = Array.from({ length: 450 }, (_, i) => ({ nombre: `Puesto ${i}` }));
    const salida = volcadoSQL([TABLAS_PRUEBA[0]], { puestos: muchas });
    const sentencias = salida.match(/INSERT INTO "puestos"/g) || [];
    // 450 filas en lotes de 200 → tres sentencias.
    expect(sentencias).toHaveLength(3);
  });
});
