import { describe, expect, it } from "vitest";
import { reinsertarEn } from "../undo.js";

const lista = [{ id: "a" }, { id: "b" }, { id: "c" }];

describe("reinsertarEn", () => {
  it("devuelve el elemento a su posición original", () => {
    const sinB = [{ id: "a" }, { id: "c" }];
    expect(reinsertarEn(sinB, { id: "b" }, 1).map((x) => x.id)).toEqual(["a", "b", "c"]);
  });

  it("reinserta al inicio cuando el índice era 0", () => {
    const sinA = [{ id: "b" }, { id: "c" }];
    expect(reinsertarEn(sinA, { id: "a" }, 0).map((x) => x.id)).toEqual(["a", "b", "c"]);
  });

  it("reinserta al final cuando el índice era el último", () => {
    const sinC = [{ id: "a" }, { id: "b" }];
    expect(reinsertarEn(sinC, { id: "c" }, 2).map((x) => x.id)).toEqual(["a", "b", "c"]);
  });

  it("es idempotente: no duplica si el id ya está presente", () => {
    expect(reinsertarEn(lista, { id: "b" }, 1)).toBe(lista);
  });

  it("acota un índice mayor que la lista actual", () => {
    const corta = [{ id: "a" }];
    expect(reinsertarEn(corta, { id: "z" }, 99).map((x) => x.id)).toEqual(["a", "z"]);
  });

  it("acota un índice negativo al inicio", () => {
    expect(reinsertarEn([{ id: "a" }], { id: "z" }, -5).map((x) => x.id)).toEqual(["z", "a"]);
  });

  it("un índice no entero manda el elemento al final", () => {
    expect(reinsertarEn([{ id: "a" }], { id: "z" }, undefined).map((x) => x.id)).toEqual(["a", "z"]);
    expect(reinsertarEn([{ id: "a" }], { id: "z" }, 1.5).map((x) => x.id)).toEqual(["a", "z"]);
  });

  it("no muta la lista original", () => {
    const original = [{ id: "a" }];
    const copia = reinsertarEn(original, { id: "z" }, 0);
    expect(original).toHaveLength(1);
    expect(copia).toHaveLength(2);
  });

  it("sin item devuelve la lista tal cual", () => {
    expect(reinsertarEn(lista, null, 0)).toBe(lista);
  });

  it("tolera una lista no válida", () => {
    expect(reinsertarEn(undefined, { id: "a" }, 0).map((x) => x.id)).toEqual(["a"]);
  });
});
