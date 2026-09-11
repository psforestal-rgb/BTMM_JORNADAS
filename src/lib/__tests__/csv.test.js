import { describe, expect, it } from "vitest";
import {
  BOM_UTF8,
  celdaABooleano,
  csvDescargable,
  escaparCampo,
  filasAObjetos,
  normalizarEncabezado,
  parsearCSV,
  serializarCSV,
  valorACelda,
} from "../csv.js";

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

describe("csv.parsearCSV", () => {
  it("separa celdas y filas", () => {
    expect(parsearCSV("a,b\r\n1,2")).toEqual([["a", "b"], ["1", "2"]]);
  });

  it("acepta CRLF, LF y CR sueltos", () => {
    expect(parsearCSV("a\r\nb")).toEqual([["a"], ["b"]]);
    expect(parsearCSV("a\nb")).toEqual([["a"], ["b"]]);
    expect(parsearCSV("a\rb")).toEqual([["a"], ["b"]]);
  });

  it("se traga el BOM que escribe la propia app", () => {
    expect(parsearCSV(`${BOM_UTF8}Nombre\r\nAna`)).toEqual([["Nombre"], ["Ana"]]);
  });

  it("un salto de línea final no inventa una fila vacía", () => {
    expect(parsearCSV("a\r\nb\r\n")).toEqual([["a"], ["b"]]);
    expect(parsearCSV("a\nb\n")).toEqual([["a"], ["b"]]);
  });

  it("respeta la coma dentro de un campo entrecomillado", () => {
    expect(parsearCSV('"Pérez, Ana",1')).toEqual([["Pérez, Ana", "1"]]);
  });

  it("convierte las comillas dobladas en una sola", () => {
    expect(parsearCSV('"Le dicen ""Nano""",x')).toEqual([['Le dicen "Nano"', "x"]]);
  });

  it("admite saltos de línea dentro de un campo entrecomillado", () => {
    expect(parsearCSV('"linea1\nlinea2",b')).toEqual([["linea1\nlinea2", "b"]]);
  });

  it("conserva los campos vacíos, incluido el último", () => {
    expect(parsearCSV("a,,c")).toEqual([["a", "", "c"]]);
    expect(parsearCSV("a,b,")).toEqual([["a", "b", ""]]);
  });

  it("un campo entrecomillado vacío no se pierde", () => {
    expect(parsearCSV('"",b')).toEqual([["", "b"]]);
  });

  it("texto vacío devuelve cero filas", () => {
    expect(parsearCSV("")).toEqual([]);
    expect(parsearCSV(null)).toEqual([]);
  });
});

describe("csv — ida y vuelta", () => {
  const COLS_RT = [
    { clave: "nombre", titulo: "Nombre" },
    { clave: "obs", titulo: "Observaciones" },
    { clave: "ong", titulo: "ONG-Invest-Volunt", tipo: "bool" },
  ];

  it("serializar y volver a parsear devuelve exactamente lo mismo", () => {
    const original = [
      { nombre: "Pérez, Ana", obs: 'dijo "hola"\nen dos líneas', ong: true },
      { nombre: "Bruno Salas", obs: "", ong: false },
    ];
    const { objetos } = filasAObjetos(parsearCSV(csvDescargable(original, COLS_RT)), COLS_RT);
    expect(objetos).toEqual(original);
  });
});

describe("csv.filasAObjetos", () => {
  const COLS = [
    { clave: "nombre", titulo: "Nombre" },
    { clave: "cedula", titulo: "Cédula" },
    { clave: "ong", titulo: "ONG-Invest-Volunt", tipo: "bool" },
  ];

  it("empareja por título, no por posición", () => {
    const filas = [["Cédula", "Nombre"], ["1-0000-0001", "Ana"]];
    expect(filasAObjetos(filas, COLS).objetos).toEqual([{ nombre: "Ana", cedula: "1-0000-0001" }]);
  });

  it("el emparejado ignora tildes, mayúsculas y espacios de los encabezados", () => {
    const filas = [["  nombre ", "CEDULA"], ["Ana", "1"]];
    expect(filasAObjetos(filas, COLS).objetos).toEqual([{ nombre: "Ana", cedula: "1" }]);
  });

  it("informa de las columnas esperadas que faltan", () => {
    const { faltantes } = filasAObjetos([["Nombre"], ["Ana"]], COLS);
    expect(faltantes).toEqual(["Cédula", "ONG-Invest-Volunt"]);
  });

  it("informa de las columnas de más que trae el archivo", () => {
    const { desconocidas } = filasAObjetos([["Nombre", "Sueldo"], ["Ana", "1"]], COLS);
    expect(desconocidas).toEqual(["Sueldo"]);
  });

  it("interpreta Sí/No y sus variantes como booleano", () => {
    const filas = [["Nombre", "ONG-Invest-Volunt"], ["A", "Sí"], ["B", "no"], ["C", "X"], ["D", "1"]];
    expect(filasAObjetos(filas, COLS).objetos.map((o) => o.ong)).toEqual([true, false, true, true]);
  });

  it("una celda booleana ininteligible se deja fuera en vez de inventar un valor", () => {
    const filas = [["Nombre", "ONG-Invest-Volunt"], ["A", "quizá"]];
    expect(filasAObjetos(filas, COLS).objetos[0]).not.toHaveProperty("ong");
  });

  it("salta las filas totalmente vacías y las cuenta", () => {
    const filas = [["Nombre"], ["Ana"], [""], ["   "], ["Bruno"]];
    const r = filasAObjetos(filas, COLS);
    expect(r.objetos).toHaveLength(2);
    expect(r.filasVacias).toBe(2);
  });

  it("un archivo sin filas no rompe y declara todo faltante", () => {
    const r = filasAObjetos([], COLS);
    expect(r.objetos).toEqual([]);
    expect(r.faltantes).toHaveLength(3);
  });
});
