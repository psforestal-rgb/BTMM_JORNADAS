import { describe, expect, it } from "vitest";
import {
  agregarPuesto,
  moverPuesto,
  normalizarTag,
  personasEnPuesto,
  planificarImportacionPuestos,
  quitarPuesto,
  reemplazarPuesto,
  renombrarPuesto,
  validarPuesto,
} from "../puestos.js";

const lista = [
  { nombre: "Puesto Orosi", tag: "OR", color: "x" },
  { nombre: "Puesto Quetzales", tag: "QZ", color: "y" },
];

describe("puestos.normalizarTag", () => {
  it("pone el código en mayúsculas y sin bordes", () => {
    expect(normalizarTag("  or ")).toBe("OR");
    expect(normalizarTag(null)).toBe("");
  });
});

describe("puestos.validarPuesto", () => {
  it("acepta un puesto nuevo con nombre y código libres", () => {
    expect(validarPuesto({ nombre: "Puesto Nuevo", tag: "PN" }, lista)).toEqual([]);
  });

  it("exige nombre y código", () => {
    const errores = validarPuesto({ nombre: "  ", tag: "" }, lista);
    expect(errores).toHaveLength(2);
    expect(errores[0]).toMatch(/nombre/i);
    expect(errores[1]).toMatch(/código/i);
  });

  it("rechaza un nombre repetido, sin distinguir mayúsculas ni espacios", () => {
    expect(validarPuesto({ nombre: "  puesto orosi ", tag: "ZZ" }, lista)[0]).toMatch(/Ya existe/);
  });

  it("rechaza un código repetido, sin distinguir mayúsculas", () => {
    expect(validarPuesto({ nombre: "Otro", tag: "or" }, lista)[0]).toMatch(/ya está en uso/);
  });

  it("al editar, el propio puesto no cuenta como duplicado de sí mismo", () => {
    const editado = { nombre: "Puesto Orosi", tag: "OR" };
    expect(validarPuesto(editado, lista, "Puesto Orosi")).toEqual([]);
  });

  it("al editar sí detecta choque con OTRO puesto", () => {
    const editado = { nombre: "Puesto Quetzales", tag: "OR" };
    expect(validarPuesto(editado, lista, "Puesto Orosi")[0]).toMatch(/Ya existe/);
  });
});

describe("puestos — alta, edición y baja", () => {
  it("agregar normaliza el código y conserva el orden", () => {
    const r = agregarPuesto(lista, { nombre: " Puesto Nuevo ", tag: " pn " });
    expect(r).toHaveLength(3);
    expect(r[2]).toMatchObject({ nombre: "Puesto Nuevo", tag: "PN" });
  });

  it("reemplazar conserva la posición del puesto editado", () => {
    const r = reemplazarPuesto(lista, "Puesto Orosi", { nombre: "Orosi Alto", tag: "oa" });
    expect(r.map((p) => p.nombre)).toEqual(["Orosi Alto", "Puesto Quetzales"]);
    expect(r[0].tag).toBe("OA");
    expect(r[0].color).toBe("x");
  });

  it("quitar elimina solo el indicado", () => {
    expect(quitarPuesto(lista, "puesto orosi").map((p) => p.nombre)).toEqual(["Puesto Quetzales"]);
  });

  it("todas toleran una lista que no es un arreglo", () => {
    expect(agregarPuesto(null, { nombre: "A", tag: "A" })).toHaveLength(1);
    expect(quitarPuesto(undefined, "A")).toEqual([]);
    expect(reemplazarPuesto(null, "A", { nombre: "B", tag: "B" })).toEqual([]);
  });
});

describe("puestos.renombrarPuesto — cascada", () => {
  const personas = [
    { id: "f1", nombre: "Ana", puestoOperativo: "Puesto Orosi" },
    { id: "f2", nombre: "Bruno", puestoOperativo: "Puesto Quetzales" },
  ];
  const reglas = { puestosRequierenVisitantesDiario: ["Puesto Orosi", "Puesto Quetzales"] };

  it("arrastra el nombre a las fichas y a la regla de cobertura", () => {
    const r = renombrarPuesto({ puestos: lista, personas, reglas, antes: "Puesto Orosi", despues: "Orosi Alto" });
    expect(r.puestos[0].nombre).toBe("Orosi Alto");
    expect(r.personas[0].puestoOperativo).toBe("Orosi Alto");
    expect(r.reglas.puestosRequierenVisitantesDiario).toEqual(["Orosi Alto", "Puesto Quetzales"]);
    expect(r.afectados).toBe(1);
  });

  it("no toca a quien está en otro puesto", () => {
    const r = renombrarPuesto({ puestos: lista, personas, reglas, antes: "Puesto Orosi", despues: "Orosi Alto" });
    expect(r.personas[1].puestoOperativo).toBe("Puesto Quetzales");
  });

  it("renombrar al mismo nombre no cambia nada", () => {
    const r = renombrarPuesto({ puestos: lista, personas, reglas, antes: "Puesto Orosi", despues: "puesto orosi" });
    expect(r.puestos).toBe(lista);
    expect(r.personas).toBe(personas);
    expect(r.afectados).toBe(0);
  });

  it("un nombre vacío no aplica nada", () => {
    const r = renombrarPuesto({ puestos: lista, personas, reglas, antes: "Puesto Orosi", despues: "   " });
    expect(r.puestos).toBe(lista);
  });

  it("tolera unas reglas sin la lista de cobertura", () => {
    const r = renombrarPuesto({ puestos: lista, personas, reglas: {}, antes: "Puesto Orosi", despues: "Orosi Alto" });
    expect(r.reglas.puestosRequierenVisitantesDiario).toEqual([]);
  });

  it("no muta las listas originales", () => {
    renombrarPuesto({ puestos: lista, personas, reglas, antes: "Puesto Orosi", despues: "Orosi Alto" });
    expect(lista[0].nombre).toBe("Puesto Orosi");
    expect(personas[0].puestoOperativo).toBe("Puesto Orosi");
  });
});

describe("puestos.personasEnPuesto", () => {
  it("cuenta a quién dejaría huérfano una baja", () => {
    const personas = [
      { nombre: "Ana", puestoOperativo: "Puesto Orosi" },
      { nombre: "Bruno", puestoOperativo: "Puesto Quetzales" },
      { nombre: "Carla", puestoOperativo: "puesto orosi" },
    ];
    expect(personasEnPuesto(personas, "Puesto Orosi").map((p) => p.nombre)).toEqual(["Ana", "Carla"]);
  });

  it("tolera una lista ausente", () => {
    expect(personasEnPuesto(null, "X")).toEqual([]);
  });
});

describe("puestos.moverPuesto", () => {
  const tres = [
    { nombre: "A", tag: "A" },
    { nombre: "B", tag: "B" },
    { nombre: "C", tag: "C" },
  ];
  const nombres = (l) => l.map((p) => p.nombre);

  it("sube un puesto una posición", () => {
    expect(nombres(moverPuesto(tres, "B", -1))).toEqual(["B", "A", "C"]);
  });

  it("baja un puesto una posición", () => {
    expect(nombres(moverPuesto(tres, "B", 1))).toEqual(["A", "C", "B"]);
  });

  it("en los extremos devuelve la lista intacta, sin que el llamador compruebe", () => {
    expect(moverPuesto(tres, "A", -1)).toBe(tres);
    expect(moverPuesto(tres, "C", 1)).toBe(tres);
  });

  it("un nombre inexistente no cambia nada", () => {
    expect(moverPuesto(tres, "Z", 1)).toBe(tres);
  });

  it("no muta la lista original", () => {
    moverPuesto(tres, "B", -1);
    expect(nombres(tres)).toEqual(["A", "B", "C"]);
  });

  it("tolera una lista que no es un arreglo", () => {
    expect(moverPuesto(null, "A", 1)).toEqual([]);
  });
});

describe("puestos.planificarImportacionPuestos (RP6)", () => {
  const COLORES = [
    { id: "a", clases: "bg-a" },
    { id: "b", clases: "bg-b" },
  ];
  const base = [
    { nombre: "Puesto Orosi", tag: "OR", color: "bg-a" },
    { nombre: "Puesto Quetzales", tag: "QZ", color: "bg-b" },
  ];
  const plan = (filas, puestos = base) => planificarImportacionPuestos(puestos, filas, COLORES);

  it("NUNCA elimina: un archivo incompleto no vacía la lista", () => {
    const r = plan([{ nombre: "Puesto Orosi", tag: "OR" }]);
    expect(r.resultado.map((p) => p.nombre)).toEqual(["Puesto Orosi", "Puesto Quetzales"]);
  });

  it("da de alta un puesto que no existía", () => {
    const r = plan([{ nombre: "Puesto Cerro", tag: "CE", color: "bg-b" }]);
    expect(r.nuevos).toHaveLength(1);
    expect(r.resultado.at(-1)).toEqual({ nombre: "Puesto Cerro", tag: "CE", color: "bg-b" });
  });

  it("actualiza por nombre, conservando la posición", () => {
    const r = plan([{ nombre: "Puesto Orosi", tag: "ORO", color: "bg-b" }]);
    expect(r.actualizados).toHaveLength(1);
    expect(r.resultado[0]).toMatchObject({ nombre: "Puesto Orosi", tag: "ORO", color: "bg-b" });
    expect(r.resultado.map((p) => p.nombre)).toEqual(["Puesto Orosi", "Puesto Quetzales"]);
  });

  it("una columna ausente no borra el valor que ya tenía", () => {
    const r = plan([{ nombre: "Puesto Orosi" }]);
    expect(r.resultado[0]).toEqual({ nombre: "Puesto Orosi", tag: "OR", color: "bg-a" });
  });

  it("informa de qué campos cambian", () => {
    const r = plan([{ nombre: "Puesto Orosi", tag: "ORO" }]);
    expect(r.actualizados[0].cambios).toEqual(["tag"]);
  });

  it("omite la fila cuyo código ya usa OTRO puesto, en vez de pisarlo o inventar uno", () => {
    const r = plan([{ nombre: "Puesto Cerro", tag: "OR" }]);
    expect(r.omitidos).toEqual([{ fila: 2, motivo: "codigoOcupado", nombre: "Puesto Cerro", tag: "OR" }]);
    expect(r.resultado).toEqual(base);
  });

  it("conservar su propio código no cuenta como choque", () => {
    const r = plan([{ nombre: "Puesto Orosi", tag: "OR", color: "bg-b" }]);
    expect(r.omitidos).toEqual([]);
    expect(r.actualizados).toHaveLength(1);
  });

  it("omite las filas sin nombre y dice cuáles eran", () => {
    const r = plan([{ nombre: "   ", tag: "ZZ" }, { nombre: "Puesto Cerro", tag: "CE" }]);
    expect(r.omitidos).toEqual([{ fila: 2, motivo: "sinNombre" }]);
    expect(r.nuevos).toHaveLength(1);
  });

  it("un color desconocido cae al primero de la paleta, sin perder el puesto", () => {
    const r = plan([{ nombre: "Puesto Cerro", tag: "CE", color: "bg-inventado" }]);
    expect(r.resultado.at(-1).color).toBe("bg-a");
  });

  it("un color desconocido al actualizar deja el que ya tenía", () => {
    const r = plan([{ nombre: "Puesto Orosi", tag: "OR", color: "bg-inventado" }]);
    expect(r.resultado[0].color).toBe("bg-a");
  });

  it("numera las filas como las ve una hoja de cálculo: la 1 es la cabecera", () => {
    const r = plan([{ nombre: "Uno", tag: "U1" }, { nombre: "Dos", tag: "D2" }], []);
    expect(r.nuevos.map((n) => n.fila)).toEqual([2, 3]);
  });

  it("si el archivo repite un nombre gana la última fila, y se informa", () => {
    const r = plan(
      [
        { nombre: "Puesto Cerro", tag: "CE", color: "bg-a" },
        { nombre: "puesto cerro", tag: "CE", color: "bg-b" },
      ],
      [],
    );
    expect(r.resultado).toHaveLength(1);
    expect(r.resultado[0].color).toBe("bg-b");
    expect(r.duplicados).toEqual([{ fila: 3, anterior: 2 }]);
  });

  it("no muta la lista original", () => {
    const original = [{ nombre: "Puesto Orosi", tag: "OR", color: "bg-a" }];
    plan([{ nombre: "Puesto Orosi", tag: "ORO" }], original);
    expect(original[0].tag).toBe("OR");
  });

  it("tolera entradas no válidas sin lanzar", () => {
    expect(planificarImportacionPuestos(null, null).resultado).toEqual([]);
    expect(planificarImportacionPuestos(undefined, undefined).nuevos).toEqual([]);
  });
});
