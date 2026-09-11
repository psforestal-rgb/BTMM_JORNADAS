import { describe, expect, it } from "vitest";
import { BOM_UTF8, csvDescargable, escaparCampo, serializarCSV, valorACelda } from "../csv.js";

const COLS = [
  { clave: "nombre", titulo: "Nombre" },
  { clave: "cedula", titulo: "Cédula" },
  { clave: "disponibilidad", titulo: "Disponibilidad" },
];

describe("csv.valorACelda", () => {
  it("null e undefined quedan como celda vacía, no como el texto 'null'", () => {
    expect(valorACelda(null)).toBe("");
    expect(valorACelda(undefined)).toBe("");
  });

  it("los booleanos se leen en español, no como true/false", () => {
    expect(valorACelda(true)).toBe("Sí");
    expect(valorACelda(false)).toBe("No");
  });

  it("los números se convierten a texto", () => {
    expect(valorACelda(0)).toBe("0");
    expect(valorACelda(42)).toBe("42");
  });
});

describe("csv.escaparCampo", () => {
  it("no entrecomilla lo que no lo necesita", () => {
    expect(escaparCampo("Ana Pérez")).toBe("Ana Pérez");
  });

  it("entrecomilla si hay coma", () => {
    expect(escaparCampo("Pérez, Ana")).toBe('"Pérez, Ana"');
  });

  it("duplica las comillas internas", () => {
    expect(escaparCampo('Le dicen "Nano"')).toBe('"Le dicen ""Nano"""');
  });

  it("entrecomilla si hay saltos de línea", () => {
    expect(escaparCampo("linea1\nlinea2")).toBe('"linea1\nlinea2"');
    expect(escaparCampo("linea1\r\nlinea2")).toBe('"linea1\r\nlinea2"');
  });

  it("entrecomilla si hay espacios al borde, que si no se perderían", () => {
    expect(escaparCampo("  con espacios  ")).toBe('"  con espacios  "');
  });
});

describe("csv.serializarCSV", () => {
  it("escribe la cabecera con los títulos, en el orden de las columnas", () => {
    expect(serializarCSV([], COLS)).toBe("Nombre,Cédula,Disponibilidad");
  });

  it("separa las filas con CRLF, como espera Excel", () => {
    const csv = serializarCSV(
      [{ nombre: "Ana", cedula: "1-0000-0001", disponibilidad: true }],
      COLS,
    );
    expect(csv).toBe("Nombre,Cédula,Disponibilidad\r\nAna,1-0000-0001,Sí");
  });

  it("respeta el orden de las columnas aunque el objeto lo traiga distinto", () => {
    const csv = serializarCSV([{ disponibilidad: false, cedula: "9", nombre: "Z" }], COLS);
    expect(csv.split("\r\n")[1]).toBe("Z,9,No");
  });

  it("los campos que faltan salen vacíos y no rompen la fila", () => {
    const csv = serializarCSV([{ nombre: "Ana" }], COLS);
    expect(csv.split("\r\n")[1]).toBe("Ana,,");
  });

  it("una fila con comas mantiene el número de columnas", () => {
    const csv = serializarCSV([{ nombre: "Pérez, Ana", cedula: "1", disponibilidad: true }], COLS);
    expect(csv.split("\r\n")[1]).toBe('"Pérez, Ana",1,Sí');
  });

  it("tolera una lista vacía o ausente", () => {
    expect(serializarCSV(null, COLS)).toBe("Nombre,Cédula,Disponibilidad");
    expect(serializarCSV(undefined, COLS)).toBe("Nombre,Cédula,Disponibilidad");
  });
});

describe("csv.csvDescargable", () => {
  it("antepone el BOM para que Excel en español no rompa las tildes", () => {
    const texto = csvDescargable([{ nombre: "Pérez" }], [{ clave: "nombre", titulo: "Nombre" }]);
    expect(texto.startsWith(BOM_UTF8)).toBe(true);
    expect(texto.slice(1)).toBe("Nombre\r\nPérez");
  });
});
