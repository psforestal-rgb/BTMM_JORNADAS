import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { VISTAS_VALIDAS } from "../lib/navigation.js";

/**
 * Guarda estática: toda vista que la navegación acepta tiene que estar montada
 * en `App.jsx`.
 *
 * Esto ha fallado DOS veces en este proyecto, y las dos de la misma forma: la
 * vista existía, sus tests aislados pasaban, y en la aplicación real no salía
 * nada porque nadie la renderizaba. Un test de componente no prueba que la
 * vista esté enchufada; este sí.
 *
 * Se lee el archivo como texto a propósito. Importar `App.jsx` arrastraría el
 * árbol entero de vistas, sus contextos y IndexedDB para comprobar algo que
 * está escrito en una línea.
 */

const APP = readFileSync(fileURLToPath(new URL("../App.jsx", import.meta.url)), "utf8");

/**
 * Formas válidas de montar una vista. `vistaDeSeccion` existe porque la ficha
 * individual sigue marcando «Funcionarios» como sección activa, así que esa
 * vista se pinta comparando contra esa variable y no contra `view`.
 */
const COMPARADORES = ["view", "vistaDeSeccion"];

/**
 * Vistas que NO se montan desde `App.jsx` por el nombre de su id, con la razón.
 * Cada excepción se justifica aquí o el test la reclama.
 */
const EXCEPCIONES = new Map([
  [
    "funcionario",
    "La ficha individual se monta como <FichaFuncionario>, no con un id igual al de la vista.",
  ],
]);

describe("App — toda vista navegable está montada", () => {
  it("no hay ninguna vista que la navegación acepte y la aplicación no pinte", () => {
    const sinMontar = [];
    for (const vista of VISTAS_VALIDAS) {
      if (EXCEPCIONES.has(vista)) continue;
      const montada = COMPARADORES.some((c) => APP.includes(`${c} === "${vista}"`));
      if (!montada) sinMontar.push(vista);
    }
    expect(sinMontar).toEqual([]);
  });

  it("la ficha individual sigue montándose, aunque sea por otro nombre", () => {
    expect(VISTAS_VALIDAS.has("funcionario")).toBe(true);
    expect(APP).toContain("FichaFuncionario");
  });

  it("cada excepción registrada sigue siendo una vista real", () => {
    for (const vista of EXCEPCIONES.keys()) {
      expect(VISTAS_VALIDAS.has(vista)).toBe(true);
    }
  });
});
