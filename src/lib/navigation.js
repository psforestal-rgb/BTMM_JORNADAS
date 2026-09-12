import { pad2 } from "../domain/fechas.js";

export const VISTAS_VALIDAS = new Set([
  "dia", "roles", "planificacion", "funcionarios", "alertas", "adelantos",
  "reposicion", "disponibilidad", "planFuncionario", "datos", "configuracion",
  "funcionario",
]);

const CON_PERIODO = new Set(["roles", "planificacion", "planFuncionario"]);

/**
 * Vistas que llevan el nombre de un funcionario en la ruta.
 *
 * `funcionario` (singular) es la ficha individual (VF1). No aparece en la
 * barra de navegación a propósito: se entra desde la lista de Funcionarios o
 * desde la cuadrícula de Roles, y el enlace es profundo para poder compartirlo.
 */
const CON_FUNCIONARIO = new Set(["funcionario"]);

export function normalizarVista(view) {
  if (view === "dashboard") return "dia";
  return VISTAS_VALIDAS.has(view) ? view : "dia";
}

function periodoValido(year, monthOneBased) {
  const y = Number(year);
  const m = Number(monthOneBased);
  return Number.isInteger(y) && y >= 2000 && y <= 2200 && Number.isInteger(m) && m >= 1 && m <= 12
    ? { year: y, month: m - 1 }
    : null;
}

/**
 * Decodifica el segmento del nombre. `decodeURIComponent` lanza con secuencias
 * truncadas («%E0%A4%A»), y un hash escrito a mano puede traerlas: una ruta
 * corrupta debe devolver a la lista, no romper la aplicación entera.
 */
function nombreDeSegmento(segmento) {
  if (!segmento) return "";
  try {
    return decodeURIComponent(segmento).trim();
  } catch {
    return "";
  }
}

export function parseAppHash(hash = "") {
  const clean = String(hash).replace(/^#\/?/, "");
  const [rawView, a, b] = clean.split("/");
  const view = normalizarVista(rawView || "dia");
  const parsed = { view };
  if (view === "dia" && /^\d{4}-\d{2}-\d{2}$/.test(a || "")) parsed.diaVista = a;
  if (CON_PERIODO.has(view)) Object.assign(parsed, periodoValido(a, b) || {});
  if (CON_FUNCIONARIO.has(view)) {
    const nombre = nombreDeSegmento(a);
    // Sin nombre no hay ficha que enseñar: se cae a la lista en vez de dejar
    // una vista en blanco.
    if (nombre) parsed.funcionarioVista = nombre;
    else parsed.view = "funcionarios";
  }
  return parsed;
}

export function hashForState({ view, year, month, diaVista, funcionarioVista }) {
  const safeView = normalizarVista(view);
  if (safeView === "dia") return `#/dia/${diaVista}`;
  if (CON_PERIODO.has(safeView)) return `#/${safeView}/${year}/${pad2(month + 1)}`;
  if (CON_FUNCIONARIO.has(safeView)) {
    const nombre = String(funcionarioVista || "").trim();
    // `encodeURIComponent` también escapa la barra, así que un nombre con «/»
    // no parte la ruta en dos segmentos.
    return nombre ? `#/funcionario/${encodeURIComponent(nombre)}` : "#/funcionarios";
  }
  return `#/${safeView}`;
}
