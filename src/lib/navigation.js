import { pad2 } from "../domain/fechas.js";

export const VISTAS_VALIDAS = new Set([
  "dia", "roles", "planificacion", "funcionarios", "alertas", "adelantos",
  "reposicion", "disponibilidad", "planFuncionario", "datos", "configuracion",
  "funcionario", "manual",
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

/**
 * Lee los filtros de la ruta («?filtro=guardas&orden=puesto»).
 *
 * Devuelve `null` —y no un objeto vacío— cuando la ruta no trae consulta, para
 * poder distinguir «esta ruta no dice nada de los filtros» de «esta ruta pide
 * explícitamente que no haya ninguno». Sin esa distinción, abrir un enlace
 * limpio borraría los filtros que la persona tenía puestos.
 */
function filtrosDeConsulta(consulta) {
  if (!consulta) return null;
  try {
    const params = new URLSearchParams(consulta);
    const salida = {};
    for (const [clave, valor] of params.entries()) {
      if (valor !== "") salida[clave] = valor;
    }
    return Object.keys(salida).length ? salida : null;
  } catch {
    return null;
  }
}

/** Serializa los filtros en orden alfabético: el mismo estado, el mismo enlace. */
function consultaDeFiltros(filtros) {
  if (!filtros) return "";
  const params = new URLSearchParams();
  for (const clave of Object.keys(filtros).sort()) {
    const valor = filtros[clave];
    if (valor === undefined || valor === null || valor === "") continue;
    params.set(clave, String(valor));
  }
  const texto = params.toString();
  return texto ? `?${texto}` : "";
}

export function parseAppHash(hash = "") {
  const [ruta, consulta] = String(hash).split("?");
  const clean = String(ruta).replace(/^#\/?/, "");
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
  const filtros = filtrosDeConsulta(consulta);
  if (filtros) parsed.filtros = filtros;
  return parsed;
}

export function hashForState({ view, year, month, diaVista, funcionarioVista, filtros }) {
  const safeView = normalizarVista(view);
  const consulta = consultaDeFiltros(filtros);
  if (safeView === "dia") return `#/dia/${diaVista}${consulta}`;
  if (CON_PERIODO.has(safeView)) return `#/${safeView}/${year}/${pad2(month + 1)}${consulta}`;
  if (CON_FUNCIONARIO.has(safeView)) {
    const nombre = String(funcionarioVista || "").trim();
    // `encodeURIComponent` también escapa la barra, así que un nombre con «/»
    // no parte la ruta en dos segmentos.
    return nombre ? `#/funcionario/${encodeURIComponent(nombre)}${consulta}` : "#/funcionarios";
  }
  return `#/${safeView}${consulta}`;
}
