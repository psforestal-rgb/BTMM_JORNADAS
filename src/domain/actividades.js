import { actividadRutinariaVisitantes } from "../data/opciones.js";
import { codigoRolFuncionario, esTeletrabajo } from "./roles.js";
import { toLocalISODate } from "./fechas.js";

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

/**
 * Tope de días recorridos por actividad al indexar. Una actividad
 * institucional no dura un año; el tope solo evita que un `fin` corrupto
 * congele el hilo principal.
 */
const MAX_DIAS_INDEXADOS = 366;

/**
 * Índice `"nombre|iso"` de quién tiene actividad cada día.
 *
 * Sustituye a preguntar `actividadesEnDia(plan, iso).some(...)` una vez por
 * celda: la cuadrícula de Roles pinta una fila por funcionario y una columna
 * por día, así que esa consulta recorría el plan entero
 * `funcionarios × días` veces y además creaba un arreglo nuevo cada vez. El
 * índice se construye una sola vez por plan.
 *
 * Reproduce exactamente el criterio de `actividadesEnDia`, incluido el caso
 * del rango imposible (`fin` anterior a `inicio`), que no cubre ningún día.
 * Asume fechas ISO válidas, que es lo único que genera `isoFecha`.
 */
export function indexarActividadesPorPersonaDia(actividadesPlan = []) {
  const indice = new Set();
  for (const a of actividadesPlan || []) {
    if (!a?.inicio) continue;
    const nombres = a.funcionarios || [];
    if (nombres.length === 0) continue;
    const fin = a.fin || a.inicio;
    if (fin < a.inicio) continue;
    const cursor = new Date(`${a.inicio}T00:00:00`);
    const limite = new Date(`${fin}T00:00:00`);
    if (Number.isNaN(cursor.getTime()) || Number.isNaN(limite.getTime())) continue;
    let dias = 0;
    while (cursor <= limite && dias < MAX_DIAS_INDEXADOS) {
      const iso = toLocalISODate(cursor);
      for (const nombre of nombres) indice.add(`${nombre}|${iso}`);
      cursor.setDate(cursor.getDate() + 1);
      dias += 1;
    }
  }
  return indice;
}

/** ¿Esa persona tiene actividad ese día, según el índice? */
export function tieneActividadEse(indice, nombre, iso) {
  return Boolean(indice) && indice.has(`${nombre}|${iso}`);
}
