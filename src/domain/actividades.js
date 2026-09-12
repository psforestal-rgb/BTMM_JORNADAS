import { actividadRutinariaVisitantes } from "../data/opciones.js";
import { codigoRolFuncionario, esTeletrabajo } from "./roles.js";

export function actividadesEnDia(actividadesPlan, iso) {
  return actividadesPlan.filter((a) => iso >= a.inicio && iso <= (a.fin || a.inicio));
}

export function esAtencionRutinaria(a) {
  return String(a?.titulo || "").trim().toLowerCase() === actividadRutinariaVisitantes.toLowerCase();
}

/**
 * Quiénes de la actividad están en teletrabajo ese día (RT2/RT7).
 *
 * **El teletrabajo NO es un campo de la actividad, se DERIVA del rol del día.**
 * Es la decisión de RT2, registrada en `_relevo/SEGUIMIENTO.md`: guardar además
 * un `esTeletrabajo` en la actividad crearía una segunda fuente de verdad que
 * puede contradecir al rol —una actividad marcada como teletrabajo en un día de
 * turno presencial— y además no podría representar una actividad de tres días
 * en la que la persona teletrabaja solo el primero.
 */
export function teletrabajoDeActividad(
  actividad,
  dia,
  year,
  month,
  personas,
  roleData,
  feriados = null,
) {
  return (actividad?.funcionarios || []).filter((nombre) =>
    esTeletrabajo(codigoRolFuncionario(personas, roleData, year, month, nombre, dia, feriados)),
  );
}
