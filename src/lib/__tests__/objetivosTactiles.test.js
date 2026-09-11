import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

/**
 * Guarda estática del tamaño mínimo de los controles táctiles.
 *
 * La app se usa en campo, con guantes y bajo sol: un botón de 26 px se falla.
 * `min-h-touch` vale 48 px (ver tailwind.config.js). Este test recorre el JSX
 * y exige que cada `<button>` declare un tamaño suficiente, para que un botón
 * nuevo no vuelva a nacer diminuto.
 */

const RAIZ = fileURLToPath(new URL("../../..", import.meta.url));
const SRC = join(RAIZ, "src");

/** Alto mínimo aceptado, en px. 44 es el objetivo AAA de WCAG 2.5.5. */
const MINIMO_PX = 44;

/** Señales literales que ya garantizan un objetivo suficiente. */
const SENALES = [
  "min-h-touch", // 48 px, el token de la app (tailwind.config.js)
  "min-w-touch", // controles cuadrados de solo icono
  "p-4", // 32 px de relleno + una línea de texto
  "py-4",
  "py-3", // 24 px de relleno + texto ≈ 44 px
];

/** Alturas explícitas: `h-14`, `min-h-12` (escala ×4 px) y `min-h-[56px]`. */
const ESCALA = /\b(?:min-)?h-(\d+)(?![\w[-])/g;
const ARBITRARIA = /\b(?:min-)?h-\[(\d+)px\]/g;

function alturaSuficiente(plano) {
  for (const m of plano.matchAll(ESCALA)) {
    if (Number(m[1]) * 4 >= MINIMO_PX) return true;
  }
  for (const m of plano.matchAll(ARBITRARIA)) {
    if (Number(m[1]) >= MINIMO_PX) return true;
  }
  return false;
}

/**
 * Excepciones deliberadas, cada una justificada y comentada en su archivo.
 * Se identifican por un fragmento estable del `className`, no por número de
 * línea: mover el código no debe invalidar la excepción ni ocultarla.
 */
const EXCEPCIONES = [
  {
    archivo: "src/features/roles/RolesMensualGrid.jsx",
    fragmento: "min-h-10",
    motivo: "cuadrícula de roles densa a propósito: 40 px por fila, sobre el mínimo de 24 px de WCAG 2.5.8",
  },
  {
    archivo: "src/features/planificacion/Planificacion.jsx",
    fragmento: "w-full rounded-lg px-2 py-1.5 text-left transition",
    motivo: "tarjeta de actividad en la cuadrícula mensual: a 48 px solo cabrían dos por día",
  },
];

/** Etiquetas `<button ...>` de apertura, respetando llaves JSX y cadenas. */
function etiquetasBoton(src) {
  const out = [];
  let i = 0;
  for (;;) {
    i = src.indexOf("<button", i);
    if (i < 0) break;
    let j = i + "<button".length;
    let depth = 0;
    let quote = null;
    while (j < src.length) {
      const c = src[j];
      if (quote) {
        if (c === "\\") {
          j += 2;
          continue;
        }
        if (c === quote) quote = null;
        j += 1;
        continue;
      }
      if (c === '"' || c === "'" || c === "`") {
        quote = c;
        j += 1;
        continue;
      }
      if (c === "{") depth += 1;
      else if (c === "}") depth -= 1;
      else if (c === ">" && depth === 0) break;
      j += 1;
    }
    out.push({ linea: src.slice(0, i).split("\n").length, tag: src.slice(i, j + 1) });
    i = j + 1;
  }
  return out;
}

function archivosJsx(dir) {
  const salida = [];
  for (const entrada of readdirSync(dir)) {
    const ruta = join(dir, entrada);
    if (statSync(ruta).isDirectory()) {
      if (entrada === "__tests__") continue;
      salida.push(...archivosJsx(ruta));
    } else if (entrada.endsWith(".jsx")) {
      salida.push(ruta);
    }
  }
  return salida;
}

describe("objetivos táctiles — todo <button> alcanza el tamaño mínimo", () => {
  it("no hay botones por debajo del mínimo sin una excepción registrada", () => {
    const infractores = [];
    for (const ruta of archivosJsx(SRC)) {
      const rel = relative(RAIZ, ruta).split("\\").join("/");
      const src = readFileSync(ruta, "utf8");
      for (const { linea, tag } of etiquetasBoton(src)) {
        const plano = tag.split(/\s+/).join(" ");
        if (SENALES.some((s) => plano.includes(s))) continue;
        if (alturaSuficiente(plano)) continue;
        const exenta = EXCEPCIONES.some((e) => e.archivo === rel && plano.includes(e.fragmento));
        if (exenta) continue;
        infractores.push(`${rel}:${linea} → ${plano.slice(0, 140)}`);
      }
    }
    expect(infractores).toEqual([]);
  });

  it("toda excepción registrada sigue existiendo en el código", () => {
    // Una excepción huérfana es ruido que esconde el criterio real.
    const huerfanas = EXCEPCIONES.filter(
      (e) => !readFileSync(join(RAIZ, e.archivo), "utf8").includes(e.fragmento),
    ).map((e) => `${e.archivo} → ${e.fragmento}`);
    expect(huerfanas).toEqual([]);
  });

  it("el token `touch` de Tailwind sigue valiendo 48 px", () => {
    const config = readFileSync(join(RAIZ, "tailwind.config.js"), "utf8");
    expect(config).toMatch(/minHeight:\s*\{\s*touch:\s*['"]48px['"]/);
    expect(config).toMatch(/minWidth:\s*\{\s*touch:\s*['"]48px['"]/);
  });
});
