import { describe, expect, it } from "vitest";
import { reinsertarEn } from "../undo.js";

const a = { id: "a" };
const b = { id: "b" };
const c = { id: "c" };
const lista = [a, b, c];

describe("reinsertarEn", () => {
  it("devuelve el elemento a su posición original", () => {
    expect(reinsertarEn([a, c], b, 1)).toEqual([a, b, c]);
  });

  it("reinserta al inicio cuando el índice era 0", () => {
    expect(reinsertarEn([b, c], a, 0)).toEqual([a, b, c]);
  });

  it("reinserta al final cuando el índice era el último", () => {
    expect(reinsertarEn([a, b], c, 2)).toEqual([a, b, c]);
  });

  it("es idempotente: no duplica si el id ya está presente", () => {
    expect(reinsertarEn(lista, b, 0)).toBe(lista);
  });

  it("acota índices fuera de rango", () => {
    expect(reinsertarEn([a], b, -4)).toEqual([b, a]);
    expect(reinsertarEn([a], b, 99)).toEqual([a, b]);
  });

  it("un índice omitido o no entero manda el elemento al final", () => {
    expect(reinsertarEn([a, b], c)).toEqual([a, b, c]);
    expect(reinsertarEn([a, b], c, 1.5)).toEqual([a, b, c]);
  });

  it("no muta la lista original", () => {
    const original = [a];
    const copia = reinsertarEn(original, b, 0);
    expect(original).toHaveLength(1);
    expect(copia).toHaveLength(2);
  });

  // Guardas defensivas: mejor no hacer nada que corromper la lista base.
  it("una lista que no es un array se devuelve sin tocar", () => {
    expect(reinsertarEn(null, a, 0)).toBe(null);
    expect(reinsertarEn(undefined, a, 0)).toBe(undefined);
  });

  it("rechaza un ítem sin id, que rompería el borrado y las claves de React", () => {
    expect(reinsertarEn([a], null, 0)).toEqual([a]);
    expect(reinsertarEn([a], {}, 0)).toEqual([a]);
    expect(reinsertarEn([a], { nombre: "sin id" }, 0)).toEqual([a]);
  });
});
