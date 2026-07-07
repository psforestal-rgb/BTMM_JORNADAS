import { pad2 } from "../domain/fechas.js";

export const VISTAS_VALIDAS = new Set([
  "dia", "roles", "planificacion", "funcionarios", "alertas", "adelantos",
  "reposicion", "disponibilidad", "planFuncionario", "datos", "configuracion",
]);

const CON_PERIODO = new Set(["roles", "planificacion", "planFuncionario"]);

export function normalizarVista(view) {
  if (view === "dashboard") return "dia";
  return VISTAS_VALIDAS.has(view) ? view : "roles";
}

function periodoValido(year, monthOneBased) {
  const y = Number(year);
  const m = Number(monthOneBased);
  return Number.isInteger(y) && y >= 2000 && y <= 2200 && Number.isInteger(m) && m >= 1 && m <= 12
    ? { year: y, month: m - 1 }
    : null;
}

export function parseAppHash(hash = "") {
  const clean = String(hash).replace(/^#\/?/, "");
  const [rawView, a, b] = clean.split("/");
  const view = normalizarVista(rawView || "roles");
  const parsed = { view };
  if (view === "dia" && /^\d{4}-\d{2}-\d{2}$/.test(a || "")) parsed.diaVista = a;
  if (CON_PERIODO.has(view)) Object.assign(parsed, periodoValido(a, b) || {});
  return parsed;
}

export function hashForState({ view, year, month, diaVista }) {
  const safeView = normalizarVista(view);
  if (safeView === "dia") return `#/dia/${diaVista}`;
  if (CON_PERIODO.has(safeView)) return `#/${safeView}/${year}/${pad2(month + 1)}`;
  return `#/${safeView}`;
}
