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
  const snapshot = exportSnapshot({
    personas: ctx.personas,
    actividadesPlan: ctx.actividadesPlan,
    reposiciones: ctx.reposiciones,
    roleData: ctx.roleData,
    reglas: ctx.reglas,
    migraciones: ctx.migraciones,
  });
  return {
    snapshot,
    name: `${prefijo}-${toLocalFileTimestamp()}.json`,
    text: JSON.stringify(snapshot, null, 2),
  };
}
