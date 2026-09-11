import { describe, it, expect } from "vitest";
import { reinsertarEn } from "../undo.js";

describe("reinsertarEn", () => {
  const a = { id: "a" };
  const b = { id: "b" };
  const c = { id: "c" };

  it("inserta en el índice original", () => {
    expect(reinsertarEn([a, c], b, 1)).toEqual([a, b, c]);
  });

  it("no duplica si el id ya está", () => {
    expect(reinsertarEn([a, b, c], b, 0)).toEqual([a, b, c]);
  });

  it("agrega al final si el índice se omite", () => {
    expect(reinsertarEn([a, b], c)).toEqual([a, b, c]);
  });

  it("acota índices fuera de rango", () => {
    expect(reinsertarEn([a], b, -4)).toEqual([b, a]);
    expect(reinsertarEn([a], b, 99)).toEqual([a, b]);
  });

  it("tolera lista o ítem inválidos", () => {
    expect(reinsertarEn(null, a, 0)).toBe(null);
    expect(reinsertarEn([a], null, 0)).toEqual([a]);
    expect(reinsertarEn([a], {}, 0)).toEqual([a]);
  });
});
