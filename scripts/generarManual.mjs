#!/usr/bin/env node
/**
 * Genera `docs/MANUAL.md` desde `src/data/manual.js`.
 *
 * El manual vive DENTRO de la aplicación, que es donde hace falta: en el puesto
 * y sin señal. Este archivo existe para que además se pueda leer en GitHub e
 * imprimir, sin que las dos copias acaben diciendo cosas distintas —que es
 * exactamente lo que había pasado antes—.
 *
 *   npm run manual
 *
 * `manual.test.js` comprueba que el archivo del repositorio coincida con lo que
 * este generador produce, así que un cambio en el manual que no se regenere
 * rompe la suite en vez de pasar desapercibido.
 */
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

import { ETIQUETA_PUBLICO, MANUAL } from "../src/data/manual.js";

/** Escapa las barras verticales, que partirían una celda de tabla en dos. */
function celda(texto) {
  return String(texto).replace(/\|/g, "\\|");
}

function bloqueAMarkdown(bloque) {
  if (bloque.tipo === "parrafo") return `${bloque.texto}\n`;
  if (bloque.tipo === "lista") return `${bloque.items.map((x) => `- ${x}`).join("\n")}\n`;
  if (bloque.tipo === "pasos") return `${bloque.items.map((x, i) => `${i + 1}. ${x}`).join("\n")}\n`;
  if (bloque.tipo === "aviso") return `> ${bloque.texto}\n`;
  if (bloque.tipo === "tabla") {
    const cab = `| ${bloque.columnas.map(celda).join(" | ")} |`;
    const sep = `|${bloque.columnas.map(() => "---").join("|")}|`;
    const filas = bloque.filas.map((f) => `| ${f.map(celda).join(" | ")} |`);
    return [cab, sep, ...filas].join("\n") + "\n";
  }
  throw new Error(`Bloque de tipo desconocido: ${bloque.tipo}`);
}

export function generarMarkdown() {
  const partes = [
    `# ${MANUAL.titulo}`,
    "",
    MANUAL.subtitulo,
    "",
    "> Este archivo se GENERA desde `src/data/manual.js` con `npm run manual`.",
    "> No lo edite a mano: el manual que vale es el que vive dentro de la",
    "> aplicación, en «Manual», donde se puede leer sin señal.",
    "",
    `> **Regla dura.** ${MANUAL.reglaDura}`,
    "",
  ];

  let publicoActual = null;
  for (const seccion of MANUAL.secciones) {
    if (seccion.publico !== publicoActual) {
      publicoActual = seccion.publico;
      partes.push("---", "", `## ${ETIQUETA_PUBLICO[publicoActual]}`, "");
    }
    partes.push(`### ${seccion.titulo}`, "");
    for (const bloque of seccion.bloques) {
      partes.push(bloqueAMarkdown(bloque));
    }
  }

  return `${partes.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd()}\n`;
}

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), "..");
export const RUTA_MANUAL = join(RAIZ, "docs", "MANUAL.md");

// Solo escribe cuando se ejecuta directamente; al importarlo desde el test
// se usa `generarMarkdown()` sin tocar el disco.
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  writeFileSync(RUTA_MANUAL, generarMarkdown(), "utf8");
  console.log(`docs/MANUAL.md regenerado desde src/data/manual.js`);
}
