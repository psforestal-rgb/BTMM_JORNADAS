import { toLocalFileTimestamp } from "../domain/fechas.js";
import { exportSnapshot } from "./storage.js";

/**
 * Respaldo completo del estado, listo para descargar.
 *
 * Vive aparte porque lo necesitan dos sitios: el respaldo manual de la vista
 * «Datos» y el respaldo automático que se descarga ANTES de una importación
 * masiva (RF8). Es el mismo formato que acepta «Datos → Restaurar respaldo»,
 * así que una importación que salga mal siempre se puede revertir por ahí.
 */
export function crearRespaldo(ctx, prefijo = "pnlq-snapshot") {
  // Esta lista se elige a mano, no se copia el estado entero, para dejar fuera
  // la efímera de interfaz (vista actual, mes, día). Cada clave NUEVA del
  // estado que deba sobrevivir a un respaldo hay que añadirla aquí: si se
  // olvida, el respaldo parece completo y no lo es.
  const snapshot = exportSnapshot({
    personas: ctx.personas,
    actividadesPlan: ctx.actividadesPlan,
    reposiciones: ctx.reposiciones,
    roleData: ctx.roleData,
    reglas: ctx.reglas,
    migraciones: ctx.migraciones,
    puestos: ctx.puestos,
    historial: ctx.historial,
  });
  return {
    snapshot,
    name: `${prefijo}-${toLocalFileTimestamp()}.json`,
    text: JSON.stringify(snapshot, null, 2),
  };
}

/**
 * Convierte un respaldo automático de migración (fila del store `respaldos`,
 * ver db.js) en un archivo descargable con el MISMO formato que acepta
 * «Datos → Restaurar respaldo».
 *
 * La `schemaVersion` que se escribe es la del RESPALDO, no la actual: un
 * snapshot apartado porque su formato ya no se entiende tiene que presentarse
 * como lo que es. Así `parseSnapshot()` lo rechaza con un motivo claro en vez
 * de cargar una estructura incompatible como si fuera buena. Cuando el
 * respaldo no registró su versión, se escribe `null` y el rechazo dice
 * «encontrada v?».
 */
export function archivoDeRespaldoDeMigracion(fila, prefijo = "pnlq-respaldo-automatico") {
  if (!fila || fila.payload === null || fila.payload === undefined) return null;
  const snapshot = {
    ...exportSnapshot(fila.payload),
    schemaVersion: fila.schemaVersion ?? null,
    exportadoEn: fila.savedAt || fila.creadoEn || new Date().toISOString(),
    respaldoAutomatico: {
      motivo: fila.motivo ?? null,
      origen: fila.origen ?? null,
      apartadoEn: fila.creadoEn ?? null,
    },
  };
  // Una fecha ilegible daría un nombre de archivo con "NaN-NaN-NaN": mejor la
  // hora actual, que al menos ordena bien en la carpeta de descargas.
  const creado = fila.creadoEn ? new Date(fila.creadoEn) : null;
  const marca = toLocalFileTimestamp(creado && !Number.isNaN(creado.getTime()) ? creado : undefined);
  return {
    snapshot,
    name: `${prefijo}-${marca}.json`,
    text: JSON.stringify(snapshot, null, 2),
  };
}
