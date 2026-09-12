import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import tailwind from "../../../tailwind.config.js";

/**
 * Guarda estática: ninguna clase de color semántico inventada.
 *
 * Los tokens (`text-ink-muted`, `bg-critical-soft`, …) se resuelven a variables
 * CSS que cambian con el tema. Una variante que no existe —`text-ink-soft`,
 * `bg-danger-soft`— NO produce error: Tailwind simplemente no genera nada y el
 * elemento se queda sin color, heredando el del padre. En el tema claro suele
 * pasar desapercibido y en alto contraste deja texto ilegible.
 *
 * Esta prueba lee las familias del propio `tailwind.config.js`, así que añadir
 * un token nuevo la actualiza sola.
 */

const FAMILIAS = Object.entries(tailwind.theme.extend.colors)
  .filter(([, valor]) => valor && typeof valor === "object")
  .reduce((acc, [familia, valor]) => {
    acc[familia] = new Set(Object.keys(valor).filter((k) => k !== "DEFAULT"));
    return acc;
  }, {});

// Prefijos de Tailwind que aceptan un color.
const PREFIJOS = [
  "text", "bg", "border", "ring", "divide", "fill", "stroke", "from", "to",
  "via", "shadow", "outline", "accent", "caret", "decoration", "placeholder",
];

const PATRON = new RegExp(
  `\\b(?:${PREFIJOS.join("|")})-(${Object.keys(FAMILIAS).join("|")})-([a-zA-Z]+)`,
  "g",
);

/**
 * Solo código de la aplicación. Las carpetas `__tests__` quedan fuera porque no
 * pintan nada en producción y porque esta misma prueba nombra clases inválidas
 * como ejemplo en su documentación: se acusaría a sí misma.
 */
function archivosDeFuente(dir, acc = []) {
  for (const nombre of readdirSync(dir)) {
    if (nombre === "__tests__") continue;
    const ruta = join(dir, nombre);
    if (statSync(ruta).isDirectory()) archivosDeFuente(ruta, acc);
    else if (/\.(jsx?|css)$/.test(nombre)) acc.push(ruta);
  }
  return acc;
}

describe("tokens semánticos de color", () => {
  it("el config declara las familias que la app usa", () => {
    for (const familia of ["ink", "surface", "line", "brand", "critical", "warning", "ok", "info"]) {
      expect(Object.keys(FAMILIAS)).toContain(familia);
    }
    // Si alguien renombra una variante, esto lo dice antes que la pantalla.
    expect([...FAMILIAS.ink].sort()).toEqual(["inverse", "muted", "subtle"]);
    expect([...FAMILIAS.critical].sort()).toEqual(["fg", "soft"]);
  });

  it("ningún archivo usa una variante que no existe", () => {
    const hallazgos = [];
    for (const ruta of archivosDeFuente("src")) {
      const contenido = readFileSync(ruta, "utf8");
      PATRON.lastIndex = 0;
      let m;
      while ((m = PATRON.exec(contenido))) {
        const [clase, familia, variante] = m;
        if (!FAMILIAS[familia].has(variante)) hallazgos.push(`${ruta}: ${clase}`);
      }
    }
    expect(hallazgos).toEqual([]);
  });
});
