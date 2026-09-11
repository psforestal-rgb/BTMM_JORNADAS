import { beforeEach, describe, expect, it } from "vitest";
import {
  agregarEntrada,
  crearEntrada,
  diferencias,
  entradaDeEdicion,
  MAX_ENTRADAS,
  TIPO,
  _resetHistorialId,
} from "../historial.js";

beforeEach(_resetHistorialId);

const ana = { id: "f1", nombre: "Ana Pérez", cedula: "1-0000-0001", estado: "Activo", ong: false };

describe("historial.diferencias", () => {
  it("lista solo los campos que cambian, con su valor anterior y el nuevo", () => {
    expect(diferencias(ana, { ...ana, estado: "Inactivo" })).toEqual([
      { campo: "estado", antes: "Activo", despues: "Inactivo" },
    ]);
  });

  it("ignora el id, que es referencia interna y no un dato editable", () => {
    expect(diferencias(ana, { ...ana, id: "otro" })).toEqual([]);
  });

  it("detecta un campo que aparece y uno que desaparece", () => {
    const cambios = diferencias({ id: "f1", a: "1" }, { id: "f1", b: "2" });
    expect(cambios).toEqual([
      { campo: "a", antes: "1", despues: "" },
      { campo: "b", antes: "", despues: "2" },
    ]);
  });

  it("null, undefined y cadena vacía cuentan como lo mismo", () => {
    expect(diferencias({ obs: null }, { obs: "" })).toEqual([]);
    expect(diferencias({ obs: undefined }, {})).toEqual([]);
  });

  it("distingue los booleanos de los textos que se les parecen", () => {
    expect(diferencias({ ong: false }, { ong: true })).toEqual([
      { campo: "ong", antes: false, despues: true },
    ]);
  });

  it("el orden es estable, no depende del orden de las claves", () => {
    const uno = diferencias({ z: "1", a: "1" }, { z: "2", a: "2" });
    const otro = diferencias({ a: "1", z: "1" }, { a: "2", z: "2" });
    expect(uno).toEqual(otro);
    expect(uno.map((c) => c.campo)).toEqual(["a", "z"]);
  });

  it("tolera entradas que no son objetos", () => {
    expect(diferencias(null, null)).toEqual([]);
    expect(diferencias(undefined, ana).length).toBeGreaterThan(0);
  });
});

describe("historial.crearEntrada", () => {
  it("registra a quién afecta, con nombre y cédula", () => {
    const e = crearEntrada({ tipo: TIPO.ALTA, funcionario: ana });
    expect(e.tipo).toBe("alta");
    expect(e.funcionario).toEqual({ nombre: "Ana Pérez", cedula: "1-0000-0001" });
    expect(e.fecha).toMatch(/^\d{4}-\d{2}-\d{2}T/);
    expect(e.id).toBeTruthy();
  });

  it("una edición sin cambios no genera entrada, para no ensuciar el rastro", () => {
    expect(crearEntrada({ tipo: TIPO.EDICION, funcionario: ana, cambios: [] })).toBeNull();
  });

  it("un tipo desconocido no genera entrada", () => {
    expect(crearEntrada({ tipo: "inventado", funcionario: ana })).toBeNull();
    expect(crearEntrada({})).toBeNull();
  });

  it("dos entradas seguidas no comparten id", () => {
    const a = crearEntrada({ tipo: TIPO.ALTA, funcionario: ana });
    const b = crearEntrada({ tipo: TIPO.ALTA, funcionario: ana });
    expect(a.id).not.toBe(b.id);
  });

  it("admite un detalle libre, para el resumen de una importación", () => {
    const e = crearEntrada({ tipo: TIPO.IMPORTACION, detalle: { altas: 2, cambios: 3 } });
    expect(e.detalle).toEqual({ altas: 2, cambios: 3 });
  });
});

describe("historial.entradaDeEdicion", () => {
  it("calcula la diferencia y la guarda en la entrada", () => {
    const e = entradaDeEdicion(ana, { ...ana, estado: "Inactivo" });
    expect(e.tipo).toBe("edicion");
    expect(e.cambios).toEqual([{ campo: "estado", antes: "Activo", despues: "Inactivo" }]);
  });

  it("guardar sin cambiar nada no deja rastro", () => {
    expect(entradaDeEdicion(ana, { ...ana })).toBeNull();
  });
});

describe("historial.agregarEntrada", () => {
  const entrada = (n) => crearEntrada({ tipo: TIPO.ALTA, funcionario: { nombre: `P${n}` } });

  it("la entrada más nueva queda primero", () => {
    const h = agregarEntrada(agregarEntrada([], entrada(1)), entrada(2));
    expect(h.map((e) => e.funcionario.nombre)).toEqual(["P2", "P1"]);
  });

  it("descarta las más antiguas al pasar del tope", () => {
    let h = [];
    for (let i = 1; i <= 5; i += 1) h = agregarEntrada(h, entrada(i), 3);
    expect(h).toHaveLength(3);
    expect(h.map((e) => e.funcionario.nombre)).toEqual(["P5", "P4", "P3"]);
  });

  it("una entrada nula no toca el rastro", () => {
    const h = [entrada(1)];
    expect(agregarEntrada(h, null)).toBe(h);
  });

  it("el tope por defecto es el declarado", () => {
    let h = [];
    for (let i = 0; i < MAX_ENTRADAS + 10; i += 1) h = agregarEntrada(h, entrada(i));
    expect(h).toHaveLength(MAX_ENTRADAS);
  });

  it("un tope inválido cae al valor por defecto en vez de vaciar el rastro", () => {
    const h = agregarEntrada([entrada(1)], entrada(2), 0);
    expect(h).toHaveLength(2);
  });

  it("tolera un historial que no es un arreglo", () => {
    expect(agregarEntrada(null, entrada(1))).toHaveLength(1);
  });

  it("no muta el arreglo original", () => {
    const original = [entrada(1)];
    agregarEntrada(original, entrada(2));
    expect(original).toHaveLength(1);
  });
});
