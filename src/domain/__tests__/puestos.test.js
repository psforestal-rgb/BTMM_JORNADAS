import { describe, expect, it } from "vitest";
import {
  agregarPuesto,
  normalizarTag,
  personasEnPuesto,
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
