/**
 * Exportación de TODO el contenido de la herramienta a un formato que una base
 * de datos entienda.
 *
 * El respaldo de «Datos» (`respaldo.js`) guarda el estado tal como la
 * aplicación lo usa: un documento JSON pensado para volver a entrar aquí. Sirve
 * para no perder información y para pasarla de un aparato a otro, pero no para
 * que otro sistema la consulte: nadie puede preguntarle «cuántos días de turno
 * tuvo cada persona en setiembre» a un objeto con claves como
 * `"2026-9-Puesto Orosi-Errol Salazar-15"`.
 *
 * Esto es lo otro: el mismo contenido, descompuesto en tablas con clave
 * primaria y claves foráneas (`src/domain/esquemaRelacional.js`), en dos
 * formatos complementarios:
 *
 *  - **JSON relacional** — las tablas y, dentro del mismo archivo, la
 *    definición del esquema. Se puede leer desde cualquier lenguaje sin saber
 *    nada de esta aplicación, porque el archivo se explica a sí mismo.
 *  - **SQL** — un volcado ejecutable, en dialecto SQLite o PostgreSQL, que
 *    crea las tablas y las llena. Es literalmente `sqlite3 base.db < archivo`.
 *
 * Los dos salen de la MISMA función de dominio, así que no pueden discrepar.
 */

import { toLocalFileTimestamp } from "../domain/fechas.js";
import { TABLAS, tablasDesdeEstado, conteoDeTablas } from "../domain/esquemaRelacional.js";
import { volcadoSQL, DIALECTOS } from "./sql.js";
import { esActividadOficial, PLANIFICACION_VERSION } from "../data/planificacion2026.js";
import { ROLES_FUENTE_VERSION } from "../data/seedRoles.js";
import { APP_VERSION } from "./appVersion.js";
import { SCHEMA_VERSION } from "./schemaVersion.js";

export { DIALECTOS };

const PREFIJO = "btmm-jornadas";

/** Estado mínimo que hay que pasarle; se toma del contexto de la aplicación. */
function estadoDe(ctx) {
  return {
    puestos: ctx?.puestos,
    personas: ctx?.personas,
    roleData: ctx?.roleData,
    actividadesPlan: ctx?.actividadesPlan,
    reposiciones: ctx?.reposiciones,
    historial: ctx?.historial,
    reglas: ctx?.reglas,
  };
}

/**
 * Construye las tablas y los metadatos una sola vez. Quien quiera JSON o SQL
 * parte de aquí, para que los dos archivos describan exactamente lo mismo.
 */
export function prepararExportacion(ctx, ahora = new Date()) {
  const tablas = tablasDesdeEstado(estadoDe(ctx), { esActividadOficial });
  const conteos = conteoDeTablas(tablas);
  const meta = {
    aplicacion: "BTMM Jornadas — Gestión de jornadas laborales",
    unidad: "PNLQ-BTMM",
    areaConservacion: "ACC",
    versionAplicacion: APP_VERSION,
    versionEsquemaInterno: SCHEMA_VERSION,
    fuentePlanificacion: PLANIFICACION_VERSION,
    fuenteRol: ROLES_FUENTE_VERSION,
    generadoEn: ahora.toISOString(),
    filasPorTabla: conteos,
    filasTotales: Object.values(conteos).reduce((a, b) => a + b, 0),
  };
  return { meta, tablas, conteos };
}

function cabeceraLegible(meta) {
  return [
    `${meta.aplicacion}`,
    `Unidad ${meta.unidad} · Área de Conservación ${meta.areaConservacion}`,
    `Generado el ${meta.generadoEn} con la versión ${meta.versionAplicacion}`,
    `Planificación: ${meta.fuentePlanificacion} · Rol institucional: ${meta.fuenteRol}`,
    `${meta.filasTotales} filas en ${Object.keys(meta.filasPorTabla).length} tablas`,
  ].join("\n");
}

/**
 * Archivo JSON relacional, con el esquema incluido.
 *
 * Llevar la definición dentro no es redundancia: sin ella, quien reciba el
 * archivo tiene que adivinar cuál es la clave primaria de cada tabla y qué
 * columna apunta a cuál. Con ella, generar el `CREATE TABLE` en cualquier otro
 * motor es mecánico.
 */
export function archivoJSON(ctx, ahora = new Date()) {
  const { meta, tablas } = prepararExportacion(ctx, ahora);
  const contenido = {
    formato: "btmm-jornadas/relacional",
    version: 1,
    meta,
    esquema: TABLAS,
    tablas,
  };
  return {
    name: `${PREFIJO}-${toLocalFileTimestamp(ahora)}.json`,
    tipo: "application/json",
    text: JSON.stringify(contenido, null, 2),
    meta,
  };
}

/** Volcado SQL ejecutable. `dialecto` es `sqlite` o `postgresql`. */
export function archivoSQL(ctx, { dialecto = DIALECTOS.SQLITE, ahora = new Date() } = {}) {
  const { meta, tablas } = prepararExportacion(ctx, ahora);
  return {
    name: `${PREFIJO}-${toLocalFileTimestamp(ahora)}.${dialecto}.sql`,
    tipo: "application/sql",
    text: volcadoSQL(TABLAS, tablas, { dialecto, cabecera: cabeceraLegible(meta) }),
    meta,
  };
}
