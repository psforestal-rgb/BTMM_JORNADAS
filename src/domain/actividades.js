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

/** Fin efectivo de una actividad: las de un solo día no traen `fin`. */
export function finDeActividad(a) {
  return a?.fin || a?.inicio || "";
}

/** Actividades en las que participa una persona, de la más antigua a la más nueva. */
export function actividadesDeFuncionario(actividadesPlan = [], nombre) {
  if (!nombre) return [];
  return actividadesPlan
    .filter((a) => a?.inicio && (a.funcionarios || []).includes(nombre))
    .sort((a, b) => String(a.inicio).localeCompare(String(b.inicio)));
}

/** Filtros de tiempo de la ficha individual (VF7). */
export const FILTROS_TIEMPO = ["proximas", "pasadas", "todas"];

/**
 * Una actividad es «pasada» solo cuando YA TERMINÓ.
 *
 * Una actividad de tres días que empezó ayer sigue en curso, así que cuenta
 * como próxima: el filtro sirve para saber qué queda por delante, y esconder
 * lo que está ocurriendo hoy sería justo lo contrario.
 */
export function esActividadPasada(a, isoHoy) {
  return finDeActividad(a) < String(isoHoy || "");
}

export function filtrarActividadesPorTiempo(items = [], isoHoy, filtro = "proximas") {
  if (filtro === "todas") return [...items];
  const pasadas = filtro === "pasadas";
  return items.filter((a) => esActividadPasada(a, isoHoy) === pasadas);
}

/**
 * Cuenta cuántas actividades caen en cada filtro, para poder rotular las
 * pestañas sin recorrer la lista tres veces en la vista.
 */
export function conteoActividadesPorTiempo(items = [], isoHoy) {
  let pasadas = 0;
  for (const a of items) if (esActividadPasada(a, isoHoy)) pasadas += 1;
  return { proximas: items.length - pasadas, pasadas, todas: items.length };
}
