/**
 * Serialización CSV (RF5, y base del import de RF4).
 *
 * Decisiones, porque en CSV «lo obvio» suele abrirse mal:
 *  - Separador coma y comillas dobles según RFC 4180. Un campo se entrecomilla
 *    solo si lo necesita (coma, comilla, salto de línea o espacios al borde), y
 *    las comillas internas se duplican.
 *  - Fin de línea CRLF, también por RFC 4180: es lo que espera Excel.
 *  - BOM UTF-8 al principio. Sin él, Excel en español abre «Pérez» como
 *    «PÃ©rez»; es el fallo que más se ve en la práctica.
 */

export const BOM_UTF8 = "﻿";
export const TIPO_CSV = "text/csv;charset=utf-8";

/** Convierte un valor suelto al texto que va dentro de la celda. */
export function valorACelda(valor) {
  if (valor === null || valor === undefined) return "";
  // Los booleanos se escriben en el idioma de la herramienta: quien abre el
  // archivo lee «Sí»/«No», no «true»/«false».
  if (typeof valor === "boolean") return valor ? "Sí" : "No";
  return String(valor);
}

/** Entrecomilla un campo solo cuando hace falta. */
export function escaparCampo(valor) {
  const texto = valorACelda(valor);
  const necesita = /[",\r\n]/.test(texto) || texto !== texto.trim();
  return necesita ? `"${texto.replace(/"/g, '""')}"` : texto;
}

/**
 * Serializa `filas` según `columnas`, una lista de `{ clave, titulo }`.
 * El orden de `columnas` manda: es el orden en que se leerá el archivo.
 */
export function serializarCSV(filas, columnas) {
  const cabecera = columnas.map((c) => escaparCampo(c.titulo)).join(",");
  const cuerpo = (filas || []).map((fila) =>
    columnas.map((c) => escaparCampo(fila?.[c.clave])).join(","),
  );
  return [cabecera, ...cuerpo].join("\r\n");
}

/** Texto listo para descargar: BOM + contenido. */
export function csvDescargable(filas, columnas) {
  return BOM_UTF8 + serializarCSV(filas, columnas);
}
