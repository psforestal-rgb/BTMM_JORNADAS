/**
 * Sanitización de `state` importado desde un snapshot JSON (ver
 * `parseSnapshot()` en storage.js). `parseSnapshot()` ya valida la FORMA
 * del JSON (schemaVersion, presencia de `state`), pero no el CONTENIDO de
 * los campos. Un archivo .json manipulado podría inyectar strings largos,
 * tags HTML o valores de tipo incorrecto en campos que terminan
 * renderizados en el DOM (nombre, obs, etc.) o interpretados por la lógica
 * de negocio (roleData, reglas).
 *
 * Filosofía: nunca rechazar el registro completo por un campo inválido —
 * solo ese campo se reemplaza (por el valor del funcionario semilla
 * correspondiente si existe, o por un default seguro). `sanitizeImportedState`
 * nunca lanza: cualquier error interno se traga y se devuelve el mejor
 * resultado parcial disponible.
 */

import { baseFuncionarios } from "../data/seedFuncionarios.js";
import { mergeReglas } from "../config/reglas.js";
import { TIPOS_DIA, MOTIVOS, MAGNITUDES } from "../domain/reposicion.js";

const ESTADOS_VALIDOS = ["Activo", "Incapacitado", "De vacaciones", "Inactivo"];

// Límites de tamaño/cantidad. Un archivo importado manipulado o corrupto
// (fechas patológicas, arreglos gigantes) no debe poder crear millones de
// objetos en memoria ni una línea temporal desproporcionada — ver
// `RolesMensualGrid.jsx` (MAX_MESES) y `indexarReposiciones()`, que
// recorren estos arreglos en cada render.
const MAX_PERSONAS = 1000;
const MAX_ACTIVIDADES = 20000;
const MAX_REPOSICIONES = 20000;
const MAX_ROLEDATA_KEYS = 300000;
const MAX_ROLEDATA_KEY_LEN = 200;

const seedById = new Map(baseFuncionarios.map((f) => [f.id, f]));

function isPlainObject(v) {
  return !!v && typeof v === "object" && !Array.isArray(v);
}

function stripHtml(v) {
  return v.replace(/<[^>]*>/g, "");
}

/** Campo de texto libre: si no es string, usa el fallback; si lo es, se limpia (sin rechazar). */
function sanitizeFreeText(value, max, fallback) {
  if (typeof value !== "string") return fallback;
  return stripHtml(value).trim().slice(0, max);
}

/** Campo estructurado: si no cumple el patrón/formato, se descarta entero (usa el fallback). */
function sanitizeStructured(value, max, pattern, fallback) {
  if (typeof value !== "string") return fallback;
  const v = value.trim().slice(0, max);
  return pattern.test(v) ? v : fallback;
}

function sanitizeBoolean(value, fallback) {
  return typeof value === "boolean" ? value : fallback;
}

/** Número finito dentro de un rango razonable; si no, usa el fallback. */
function sanitizeNumeroFinito(value, fallback, { min = 0, max = 10000 } = {}) {
  const n = Number(value);
  if (!Number.isFinite(n)) return fallback;
  return Math.min(max, Math.max(min, n));
}

/** Fecha ISO simple (YYYY-MM-DD) con año dentro de un rango razonable de
 * calendario (protege contra fechas patológicas tipo año 9999 o negativo
 * que inflarían cualquier línea temporal derivada). */
function sanitizeFechaIso(value, fallback) {
  if (typeof value !== "string") return fallback;
  const m = value.trim().match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!m) return fallback;
  const anio = Number(m[1]);
  if (anio < 2000 || anio > 2100) return fallback;
  const mes = Number(m[2]);
  const dia = Number(m[3]);
  if (mes < 1 || mes > 12 || dia < 1 || dia > 31) return fallback;
  return m[0];
}

function sanitizePersona(persona) {
  if (!isPlainObject(persona)) return persona;
  const seed = typeof persona.id === "string" ? seedById.get(persona.id) : undefined;
  const out = { ...persona };

  if ("id" in out) out.id = sanitizeStructured(out.id, 20, /^[A-Za-z0-9-]+$/, "");
  if ("nombre" in out) out.nombre = sanitizeFreeText(out.nombre, 120, seed?.nombre ?? "");
  if ("cedula" in out) out.cedula = sanitizeStructured(out.cedula, 20, /^[0-9-]+$/, seed?.cedula ?? "");
  if ("email" in out) {
    out.email = sanitizeStructured(out.email, 120, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, seed?.email ?? "");
  }
  for (const campo of ["puesto", "puestoOperativo", "condicion", "jornada", "modalidad"]) {
    if (campo in out) out[campo] = sanitizeFreeText(out[campo], 80, seed?.[campo] ?? "");
  }
  if ("obs" in out) out.obs = sanitizeFreeText(out.obs, 500, seed?.obs ?? "");
  if ("estado" in out) {
    const fallbackEstado = seed && ESTADOS_VALIDOS.includes(seed.estado) ? seed.estado : "Activo";
    out.estado = ESTADOS_VALIDOS.includes(out.estado) ? out.estado : fallbackEstado;
  }
  for (const campo of ["disponibilidad", "policia", "brigada", "ong"]) {
    if (campo in out) out[campo] = sanitizeBoolean(out[campo], seed?.[campo] ?? false);
  }
  // `jefe` no se transforma si ya es un string válido (solo se verifica el tipo).
  if ("jefe" in out) out.jefe = typeof out.jefe === "string" ? out.jefe : seed?.jefe ?? "";

  return out;
}

function sanitizeActividad(actividad) {
  if (!isPlainObject(actividad)) return actividad;
  const out = { ...actividad };
  if ("id" in out) out.id = sanitizeFreeText(out.id, 40, "");
  for (const [campo, valor] of Object.entries(out)) {
    if (campo === "id") continue;
    if (typeof valor === "string") out[campo] = sanitizeFreeText(valor, 200, "");
  }
  // Fechas de actividad: si son patológicas (año fuera de rango, formato
  // inválido), se descartan en vez de dejar pasar un valor que infle la
  // línea temporal o rompa el parseo de fechas del dominio.
  for (const campo of ["fecha", "fechaInicio", "fechaFin"]) {
    if (campo in out) out[campo] = sanitizeFechaIso(out[campo], "");
  }
  return out;
}

/**
 * Cuota individual de reposición (ver `domain/reposicion.js`). Se aplica
 * la misma filosofía: campo inválido se reemplaza, no se rechaza la cuota
 * completa salvo que no tenga forma de objeto.
 */
function sanitizeCuota(cuota) {
  if (!isPlainObject(cuota)) return null;
  const out = { ...cuota };
  if ("id" in out) out.id = sanitizeFreeText(out.id, 40, "");
  if ("fecha" in out) out.fecha = sanitizeFechaIso(out.fecha, "");
  if ("magnitud" in out) {
    out.magnitud = MAGNITUDES.includes(out.magnitud) ? out.magnitud : "diaEntero";
  }
  if ("horas" in out) out.horas = sanitizeNumeroFinito(out.horas, 0, { min: 0, max: 24 });
  return out;
}

/**
 * Registro de reposición. `funcionario` y `fecha` son las claves que
 * `indexarReposiciones()` usa para indexar por celda — si faltan o no son
 * string, el registro entero se descarta en `sanitizeImportedState` (a
 * diferencia de otros campos, aquí SÍ hace falta rechazar el registro:
 * un registro sin identidad no es reparable y `indexarReposiciones()`
 * revienta con `null`/`undefined` en ese campo).
 */
function sanitizeReposicion(reposicion) {
  if (!isPlainObject(reposicion)) return null;
  const out = { ...reposicion };
  if (typeof out.funcionario !== "string" || !out.funcionario.trim()) return null;
  out.funcionario = sanitizeFreeText(out.funcionario, 120, "");
  if (typeof out.fecha !== "string") return null;
  const fecha = sanitizeFechaIso(out.fecha, "");
  if (!fecha) return null;
  out.fecha = fecha;

  if ("id" in out) out.id = sanitizeFreeText(out.id, 40, "");
  if ("folio" in out) out.folio = sanitizeFreeText(out.folio, 20, "");
  if ("tipoDia" in out) out.tipoDia = TIPOS_DIA.includes(out.tipoDia) ? out.tipoDia : TIPOS_DIA[TIPOS_DIA.length - 1];
  if ("motivo" in out) out.motivo = MOTIVOS.includes(out.motivo) ? out.motivo : MOTIVOS[MOTIVOS.length - 1];
  if ("motivoDetalle" in out) out.motivoDetalle = sanitizeFreeText(out.motivoDetalle, 300, "");
  if ("observaciones" in out) out.observaciones = sanitizeFreeText(out.observaciones, 300, "");
  if ("magnitud" in out) out.magnitud = MAGNITUDES.includes(out.magnitud) ? out.magnitud : "diaEntero";
  if ("horas" in out) out.horas = sanitizeNumeroFinito(out.horas, 0, { min: 0, max: 24 });
  if ("fechaReposicion" in out) out.fechaReposicion = sanitizeFechaIso(out.fechaReposicion, "");
  if (Array.isArray(out.cuotas)) {
    out.cuotas = out.cuotas.map(sanitizeCuota).filter(Boolean).slice(0, 500);
  }
  return out;
}

function sanitizeRoleData(roleData) {
  const out = {};
  let count = 0;
  for (const [key, valor] of Object.entries(roleData)) {
    if (count >= MAX_ROLEDATA_KEYS) break;
    if (typeof key !== "string" || key.length === 0 || key.length > MAX_ROLEDATA_KEY_LEN) continue;
    out[key] = typeof valor === "string" && valor.length <= 10 ? valor : "";
    count += 1;
  }
  return out;
}

/**
 * Sanitiza el contenido de un `state` importado (personas, actividadesPlan,
 * roleData, reglas). No cambia la forma general del objeto ni rechaza
 * registros completos por un campo inválido. Es seguro llamarla con
 * cualquier entrada (incluida `null`/`undefined`/tipos primitivos): nunca
 * lanza y, si `state` no es un objeto sanitizable, lo devuelve tal cual.
 */
export function sanitizeImportedState(state) {
  try {
    if (!isPlainObject(state)) return state;
    const out = { ...state };

    if (Array.isArray(out.personas)) {
      // Las entradas que no son objetos (null, strings sueltos, etc.) se
      // descartan: AppContext.jsx/reducer asumen que cada elemento tiene
      // forma de ficha (persona.nombre, persona.id) y un `null` en el
      // arreglo rompería esa asunción más adelante.
      out.personas = out.personas
        .filter(isPlainObject)
        .map((p) => {
          try {
            return sanitizePersona(p);
          } catch {
            return p;
          }
        })
        .slice(0, MAX_PERSONAS);
    }

    if (Array.isArray(out.actividadesPlan)) {
      out.actividadesPlan = out.actividadesPlan
        .filter(isPlainObject)
        .map((a) => {
          try {
            return sanitizeActividad(a);
          } catch {
            return a;
          }
        })
        .slice(0, MAX_ACTIVIDADES);
    }

    if (Array.isArray(out.reposiciones)) {
      // A diferencia de personas/actividades, un registro de reposición
      // sin `funcionario`/`fecha` válidos no es reparable: indexarReposiciones()
      // indexa por esa clave y revienta con un valor `null`/`undefined`.
      // sanitizeReposicion() ya descarta esos casos devolviendo `null`.
      out.reposiciones = out.reposiciones
        .map((r) => {
          try {
            return sanitizeReposicion(r);
          } catch {
            return null;
          }
        })
        .filter(Boolean)
        .slice(0, MAX_REPOSICIONES);
    }

    if (isPlainObject(out.roleData)) {
      try {
        out.roleData = sanitizeRoleData(out.roleData);
      } catch {
        /* deja roleData sin tocar si algo inesperado ocurre */
      }
    }

    if ("reglas" in out) {
      try {
        out.reglas = mergeReglas(isPlainObject(out.reglas) ? out.reglas : {});
      } catch {
        /* deja reglas sin tocar si mergeReglas fallara */
      }
    }

    return out;
  } catch {
    return state;
  }
}
