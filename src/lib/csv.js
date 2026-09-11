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

/* ─────────────────────────── Lectura (RF4) ──────────────────────────────
   El parser vive en el MISMO módulo que la serialización a propósito: son un
   contrato de ida y vuelta y separarlos es la forma más fácil de que se
   desincronicen. La prueba que más vale del archivo es precisamente la de
   ida y vuelta. */

/**
 * Convierte texto CSV en una matriz de celdas.
 *
 * Aguanta lo que genera esta app y lo que sueltan Excel y LibreOffice:
 * BOM inicial, finales de línea CRLF, LF o CR sueltos, y campos
 * entrecomillados que contienen comas, saltos de línea o comillas dobladas.
 * No interpreta nada: eso es trabajo de `filasAObjetos`.
 */
export function parsearCSV(texto) {
  const src = String(texto ?? "").replace(/^\ufeff/, "");
  const filas = [];
  let fila = [];
  let campo = "";
  // Distingue «línea vacía al final del archivo» de «última línea sin salto».
  let abierta = false;
  let entreComillas = false;
  let i = 0;

  const cerrarCampo = () => {
    fila.push(campo);
    campo = "";
  };
  const cerrarFila = () => {
    cerrarCampo();
    filas.push(fila);
    fila = [];
    abierta = false;
  };

  while (i < src.length) {
    const c = src[i];
    if (entreComillas) {
      if (c === '"') {
        // Una comilla doblada dentro del campo es una comilla literal.
        if (src[i + 1] === '"') {
          campo += '"';
          i += 2;
          continue;
        }
        entreComillas = false;
        i += 1;
        continue;
      }
      campo += c;
      i += 1;
      continue;
    }
    if (c === '"') {
      entreComillas = true;
      abierta = true;
      i += 1;
      continue;
    }
    if (c === ",") {
      cerrarCampo();
      abierta = true;
      i += 1;
      continue;
    }
    if (c === "\r" || c === "\n") {
      if (c === "\r" && src[i + 1] === "\n") i += 1;
      cerrarFila();
      i += 1;
      continue;
    }
    campo += c;
    abierta = true;
    i += 1;
  }
  // Última línea sin salto final. Si el archivo terminó en salto, no se
  // inventa una fila vacía de más.
  if (abierta || campo !== "" || fila.length > 0) cerrarFila();
  return filas;
}

/** Normaliza un encabezado para compararlo: sin tildes, sin mayúsculas, sin bordes. */
export function normalizarEncabezado(texto) {
  return String(texto ?? "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

const VERDADEROS = new Set(["si", "sí", "s", "true", "verdadero", "1", "x"]);
const FALSOS = new Set(["no", "n", "false", "falso", "0", ""]);

/** Interpreta una celda como booleano. Devuelve `null` si no lo parece. */
export function celdaABooleano(valor) {
  const v = normalizarEncabezado(valor);
  if (VERDADEROS.has(v)) return true;
  if (FALSOS.has(v)) return false;
  return null;
}

/**
 * Convierte la matriz de `parsearCSV` en objetos, guiándose por la cabecera.
 *
 * Empareja por TÍTULO y no por posición: así un archivo con las columnas
 * reordenadas, o al que le falte alguna, sigue entrando bien. Las columnas
 * marcadas `tipo: "bool"` se convierten con `celdaABooleano`.
 *
 * Devuelve también qué columnas esperadas faltaban y cuáles llegaron de más,
 * para poder enseñarlo en la vista previa antes de aplicar nada.
 */
export function filasAObjetos(filas, columnas) {
  if (!Array.isArray(filas) || filas.length === 0) {
    return { objetos: [], faltantes: columnas.map((c) => c.titulo), desconocidas: [], filasVacias: 0 };
  }
  const [cabecera, ...cuerpo] = filas;
  const indicePorClave = new Map();
  const usados = new Set();
  for (const col of columnas) {
    const i = cabecera.findIndex((h) => normalizarEncabezado(h) === normalizarEncabezado(col.titulo));
    if (i >= 0) {
      indicePorClave.set(col.clave, i);
      usados.add(i);
    }
  }
  const faltantes = columnas.filter((c) => !indicePorClave.has(c.clave)).map((c) => c.titulo);
  const desconocidas = cabecera
    .map((h, i) => (usados.has(i) || normalizarEncabezado(h) === "" ? null : String(h).trim()))
    .filter(Boolean);

  let filasVacias = 0;
  const objetos = [];
  for (const fila of cuerpo) {
    if (fila.every((celda) => String(celda ?? "").trim() === "")) {
      filasVacias += 1;
      continue;
    }
    const obj = {};
    for (const col of columnas) {
      const i = indicePorClave.get(col.clave);
      if (i === undefined) continue;
      const bruto = fila[i] ?? "";
      if (col.tipo === "bool") {
        const b = celdaABooleano(bruto);
        if (b !== null) obj[col.clave] = b;
        continue;
      }
      obj[col.clave] = String(bruto).trim();
    }
    objetos.push(obj);
  }
  return { objetos, faltantes, desconocidas, filasVacias };
}
