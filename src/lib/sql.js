/**
 * Volcado SQL de un conjunto de tablas (ver `src/domain/esquemaRelacional.js`).
 *
 * Produce un archivo `.sql` que se ejecuta de arriba abajo en una base vacía:
 * primero los `CREATE TABLE` en orden de dependencia, después los `INSERT`.
 * Es el camino más directo entre la herramienta y una base de datos: no hace
 * falta ningún conversor intermedio, basta con
 *
 *     sqlite3 jornadas.db < jornadas.sql
 *     psql -d jornadas -f jornadas.sql
 *
 * Dos dialectos porque los tipos y los booleanos no se escriben igual. No se
 * pretende cubrir todos los motores: SQLite es lo que alguien abre en su
 * computadora sin instalar nada, y PostgreSQL es lo que usaría un servidor
 * institucional.
 */

import { TIPOS } from "../domain/esquemaRelacional.js";

export const DIALECTOS = Object.freeze({ SQLITE: "sqlite", POSTGRESQL: "postgresql" });

/** Cuántas filas por sentencia INSERT. SQLite admite 500 por defecto; 200 deja margen. */
const FILAS_POR_INSERT = 200;

const TIPOS_SQL = {
  [DIALECTOS.SQLITE]: {
    [TIPOS.TEXTO]: "TEXT",
    [TIPOS.ENTERO]: "INTEGER",
    [TIPOS.DECIMAL]: "REAL",
    [TIPOS.BOOLEANO]: "INTEGER",
    [TIPOS.FECHA]: "TEXT",
  },
  [DIALECTOS.POSTGRESQL]: {
    [TIPOS.TEXTO]: "TEXT",
    [TIPOS.ENTERO]: "INTEGER",
    [TIPOS.DECIMAL]: "DOUBLE PRECISION",
    [TIPOS.BOOLEANO]: "BOOLEAN",
    [TIPOS.FECHA]: "DATE",
  },
};

/** Identificador entrecomillado. Las comillas dobles internas se duplican. */
export function identificador(nombre) {
  return `"${String(nombre).replace(/"/g, '""')}"`;
}

/**
 * Literal SQL de un valor.
 *
 * Reglas, todas por una razón concreta:
 *  - Una comilla simple se duplica; es el único escape que el estándar exige.
 *  - Un campo de fecha VACÍO se escribe `NULL`, no `''`: PostgreSQL rechaza la
 *    cadena vacía como DATE, y «no se sabe» es justo lo que NULL significa.
 *  - Un booleano sale `0`/`1` en SQLite y `TRUE`/`FALSE` en PostgreSQL.
 *  - Un número no finito (NaN, Infinity) sale `NULL` en vez de romper el
 *    archivo con un literal que ningún motor acepta.
 */
export function literal(valor, tipo, dialecto) {
  if (valor === null || valor === undefined) return "NULL";

  if (tipo === TIPOS.BOOLEANO) {
    const v = valor === true || valor === 1 || valor === "1";
    if (dialecto === DIALECTOS.POSTGRESQL) return v ? "TRUE" : "FALSE";
    return v ? "1" : "0";
  }

  if (tipo === TIPOS.ENTERO || tipo === TIPOS.DECIMAL) {
    const n = Number(valor);
    if (!Number.isFinite(n)) return "NULL";
    return String(n);
  }

  const texto = String(valor);
  if (tipo === TIPOS.FECHA && texto.trim() === "") return "NULL";
  return `'${texto.replace(/'/g, "''")}'`;
}

function createTable(tabla, dialecto) {
  const tipos = TIPOS_SQL[dialecto] || TIPOS_SQL[DIALECTOS.SQLITE];
  const lineas = tabla.columnas.map((c) => `  ${identificador(c.nombre)} ${tipos[c.tipo] || "TEXT"}`);
  if (tabla.clavePrimaria?.length) {
    lineas.push(`  PRIMARY KEY (${tabla.clavePrimaria.map(identificador).join(", ")})`);
  }
  for (const fk of tabla.foraneas || []) {
    lineas.push(
      `  FOREIGN KEY (${fk.columnas.map(identificador).join(", ")}) ` +
        `REFERENCES ${identificador(fk.tabla)} (${fk.referencia.map(identificador).join(", ")})`,
    );
  }
  const comentario = tabla.descripcion ? `-- ${tabla.descripcion}\n` : "";
  return `${comentario}CREATE TABLE IF NOT EXISTS ${identificador(tabla.nombre)} (\n${lineas.join(",\n")}\n);`;
}

function inserts(tabla, filas, dialecto) {
  if (!filas.length) return [`-- ${tabla.nombre}: sin filas`];
  const columnas = tabla.columnas.map((c) => c.nombre);
  const cabecera = `INSERT INTO ${identificador(tabla.nombre)} (${columnas.map(identificador).join(", ")}) VALUES`;
  const salida = [];
  for (let i = 0; i < filas.length; i += FILAS_POR_INSERT) {
    const lote = filas.slice(i, i + FILAS_POR_INSERT).map((fila) => {
      const valores = tabla.columnas.map((c) => literal(fila[c.nombre], c.tipo, dialecto));
      return `  (${valores.join(", ")})`;
    });
    salida.push(`${cabecera}\n${lote.join(",\n")};`);
  }
  return salida;
}

/**
 * Genera el volcado completo.
 *
 * `definiciones` es el arreglo de tablas y `datos` un objeto
 * `{ nombreDeTabla: filas[] }`. Una tabla sin filas se declara igual: un
 * esquema completo vale más que uno con huecos según lo que hubiera ese día.
 */
export function volcadoSQL(definiciones, datos, { dialecto = DIALECTOS.SQLITE, cabecera = "" } = {}) {
  const partes = [];
  if (cabecera) partes.push(cabecera.split("\n").map((l) => `-- ${l}`.trimEnd()).join("\n"));
  partes.push(`-- Dialecto: ${dialecto}`);
  partes.push("");

  if (dialecto === DIALECTOS.SQLITE) {
    partes.push("PRAGMA foreign_keys = ON;");
    partes.push("BEGIN TRANSACTION;");
  } else {
    partes.push("BEGIN;");
  }
  partes.push("");

  for (const tabla of definiciones) partes.push(createTable(tabla, dialecto), "");
  for (const tabla of definiciones) {
    partes.push(...inserts(tabla, datos?.[tabla.nombre] || [], dialecto), "");
  }

  partes.push(dialecto === DIALECTOS.SQLITE ? "COMMIT;" : "COMMIT;");
  return `${partes.join("\n")}\n`;
}
