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

const ESTADOS_VALIDOS = ["Activo", "Incapacitado", "De vacaciones", "Inactivo"];

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
  return out;
}

function sanitizeRoleData(roleData) {
  const out = {};
  for (const [key, valor] of Object.entries(roleData)) {
    out[key] = typeof valor === "string" && valor.length <= 10 ? valor : "";
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
      out.personas = out.personas.map((p) => {
        try {
          return sanitizePersona(p);
        } catch {
          return p;
        }
      });
    }

    if (Array.isArray(out.actividadesPlan)) {
      out.actividadesPlan = out.actividadesPlan.map((a) => {
        try {
          return sanitizeActividad(a);
        } catch {
          return a;
        }
      });
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
