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
 *
 * La excepción son los campos que son IDENTIDAD del registro (el `inicio` de
 * una actividad, el `funcionario`/`fecha` de una reposición, el `nombre` de un
 * puesto, el `tipo` de una entrada del rastro): ahí no hay default honesto al
 * que caer y el registro entero se descarta.
 *
 * Cubre todo lo que viaja en un respaldo (ver `crearRespaldo` en respaldo.js):
 * personas, actividadesPlan, reposiciones, roleData, reglas, puestos e
 * historial. **Cada clave nueva que se añada al respaldo hay que añadirla
 * también aquí**, o entrará al estado sin revisar.
 */

import { baseFuncionarios } from "../data/seedFuncionarios.js";
import { mergeReglas } from "../config/reglas.js";
import { TIPOS_DIA, MOTIVOS, MAGNITUDES } from "../domain/reposicion.js";
import { coloresPuesto } from "../data/opciones.js";
import { normalizarTag } from "../domain/puestos.js";
import { MAX_ENTRADAS, TIPO } from "../domain/historial.js";

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
const MAX_PUESTOS = 200;
const MAX_TRAMOS_PUESTO = 200;
const MAX_CAMBIOS_POR_ENTRADA = 60;

// Paleta CERRADA (ver `coloresPuesto` en data/opciones.js): la cuadrícula de
// Roles aplica estas clases tal cual, así que un valor libre saldría sin estilo
// o con un contraste ilegible bajo el sol.
const CLASES_COLOR_PUESTO = coloresPuesto.map((c) => c.clases);
const COLOR_PUESTO_POR_DEFECTO = CLASES_COLOR_PUESTO[0] ?? "";

const TIPOS_HISTORIAL = new Set(Object.values(TIPO));

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

  if ("historialPuestos" in out) out.historialPuestos = sanitizeHistorialPuestos(out.historialPuestos);

  return out;
}

/**
 * Historial de puestos de una ficha (ver `domain/historialPuestos.js`).
 *
 * Un tramo sin puesto no es reparable —el puesto es el dato entero del tramo—
 * así que se descarta. Las fechas que no son ISO se vacían, que es lo que el
 * dominio entiende como «extremo abierto»; `normalizarHistorial()` termina de
 * ordenarlo al cargar el estado.
 */
function sanitizeHistorialPuestos(historial) {
  if (!Array.isArray(historial)) return [];
  return historial
    .filter(isPlainObject)
    .map((tramo) => {
      const puesto = sanitizeFreeText(tramo.puesto, 80, "");
      if (!puesto) return null;
      const salida = {
        puesto,
        desde: sanitizeFechaIso(tramo.desde, ""),
        hasta: sanitizeFechaIso(tramo.hasta, "") || null,
      };
      const motivo = sanitizeFreeText(tramo.motivo, 200, "");
      if (motivo) salida.motivo = motivo;
      return salida;
    })
    .filter(Boolean)
    .slice(0, MAX_TRAMOS_PUESTO);
}

/**
 * `actividadesEnDia()` (domain/actividades.js) compara
 * `iso >= a.inicio && iso <= (a.fin || a.inicio)` — un `inicio` corrupto
 * (ej. "0000-01-01") o ausente hace que la actividad "cubra" prácticamente
 * cualquier día renderizado, y no es reparable con un default seguro (a
 * diferencia de una persona, una actividad importada no tiene un registro
 * semilla equivalente al que volver). Se descarta la actividad entera si
 * `inicio` no es una fecha ISO válida, igual que `sanitizeReposicion()`
 * descarta un registro sin `funcionario`/`fecha`. Un `fin` inválido, en
 * cambio, colapsa a `inicio` (evento de un día) en vez de descartar todo
 * el registro.
 */
function sanitizeActividad(actividad) {
  if (!isPlainObject(actividad)) return null;
  const out = { ...actividad };
  if ("id" in out) out.id = sanitizeFreeText(out.id, 40, "");
  for (const [campo, valor] of Object.entries(out)) {
    if (campo === "id" || campo === "inicio" || campo === "fin") continue;
    if (typeof valor === "string") out[campo] = sanitizeFreeText(valor, 200, "");
  }
  if (typeof out.inicio !== "string") return null;
  const inicio = sanitizeFechaIso(out.inicio, "");
  if (!inicio) return null;
  out.inicio = inicio;
  if ("fin" in out) out.fin = sanitizeFechaIso(out.fin, inicio);
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

/**
 * Puesto operativo tal como vive en el estado: `{ nombre, tag, color }`.
 *
 * El `nombre` es la IDENTIDAD del puesto —`funcionario.puestoOperativo` y
 * `reglas.puestosRequierenVisitantesDiario` lo referencian así, no por un id—,
 * de modo que un puesto sin nombre no es reparable y se descarta, igual que una
 * reposición sin `funcionario`. El `color` cae al primero de la paleta si no
 * pertenece a la lista cerrada, que es la misma regla que ya aplica la
 * importación CSV (`planificarImportacionPuestos`).
 */
function sanitizePuesto(puesto) {
  if (!isPlainObject(puesto)) return null;
  const out = { ...puesto };
  const nombre = sanitizeFreeText(out.nombre, 80, "");
  if (!nombre) return null;
  out.nombre = nombre;
  // El código corto se normaliza igual que en el dominio (mayúsculas, sin
  // espacios). Si queda vacío, el puesto se conserva: la validación de
  // «Configuración» lo marcará, y perder el puesto entero dejaría huérfanas a
  // las personas que lo referencian por nombre.
  out.tag = sanitizeStructured(normalizarTag(out.tag), 8, /^[A-Z0-9-]+$/, "");
  out.color = CLASES_COLOR_PUESTO.includes(out.color) ? out.color : COLOR_PUESTO_POR_DEFECTO;
  return out;
}

/** Un cambio dentro de una entrada del rastro: `{ campo, antes, despues }`. */
function sanitizeValorDeCambio(valor) {
  if (typeof valor === "boolean") return valor;
  if (typeof valor === "number") return Number.isFinite(valor) ? valor : "";
  return sanitizeFreeText(valor, 200, "");
}

function sanitizeCambio(cambio) {
  if (!isPlainObject(cambio)) return null;
  const campo = sanitizeStructured(cambio.campo, 40, /^[A-Za-z0-9_]+$/, "");
  if (!campo) return null;
  return { campo, antes: sanitizeValorDeCambio(cambio.antes), despues: sanitizeValorDeCambio(cambio.despues) };
}

/**
 * Entrada del rastro de cambios (`domain/historial.js`).
 *
 * Se descarta la entrada entera cuando el `tipo` no es uno de los válidos:
 * `crearEntrada()` tampoco crea entradas así, y la vista traduce
 * `historial.tipo.<tipo>` —un tipo inventado saldría en pantalla como la clave
 * cruda del diccionario—. Una `fecha` ilegible, en cambio, solo se vacía: la
 * entrada sigue diciendo qué cambió y sobre quién.
 */
function sanitizeEntradaHistorial(entrada) {
  if (!isPlainObject(entrada)) return null;
  if (!TIPOS_HISTORIAL.has(entrada.tipo)) return null;

  const fechaCruda = typeof entrada.fecha === "string" ? entrada.fecha.trim().slice(0, 40) : "";
  const fecha = fechaCruda && !Number.isNaN(Date.parse(fechaCruda)) ? fechaCruda : "";

  const cambios = Array.isArray(entrada.cambios)
    ? entrada.cambios.map(sanitizeCambio).filter(Boolean).slice(0, MAX_CAMBIOS_POR_ENTRADA)
    : [];
  // La vista usa `key={c.campo}`: dos cambios del mismo campo colisionarían.
  const vistos = new Set();
  const cambiosUnicos = cambios.filter((c) => {
    if (vistos.has(c.campo)) return false;
    vistos.add(c.campo);
    return true;
  });

  const salida = {
    id: sanitizeFreeText(entrada.id, 40, ""),
    fecha,
    tipo: entrada.tipo,
    funcionario: {
      nombre: sanitizeFreeText(entrada.funcionario?.nombre, 120, ""),
      cedula: sanitizeStructured(entrada.funcionario?.cedula, 20, /^[0-9-]+$/, ""),
    },
    cambios: cambiosUnicos,
  };

  if (isPlainObject(entrada.detalle)) {
    salida.detalle = {
      archivo: sanitizeFreeText(entrada.detalle.archivo, 120, ""),
      altas: sanitizeNumeroFinito(entrada.detalle.altas, 0, { min: 0, max: 1000000 }),
      cambios: sanitizeNumeroFinito(entrada.detalle.cambios, 0, { min: 0, max: 1000000 }),
    };
  }

  return salida;
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
 * reposiciones, roleData, reglas, puestos, historial). No cambia la forma
 * general del objeto ni rechaza registros completos por un campo inválido
 * salvo en los campos de identidad descritos arriba. Es seguro llamarla con
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
        .filter(Boolean)
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

    if (Array.isArray(out.puestos)) {
      // Dos puestos con el mismo nombre romperían el agrupado de la cuadrícula
      // de Roles y la validación de «Configuración»: gana el primero.
      const nombresVistos = new Set();
      out.puestos = out.puestos
        .map((p) => {
          try {
            return sanitizePuesto(p);
          } catch {
            return null;
          }
        })
        .filter(Boolean)
        .filter((p) => {
          const clave = p.nombre.toLocaleLowerCase("es-CR");
          if (nombresVistos.has(clave)) return false;
          nombresVistos.add(clave);
          return true;
        })
        .slice(0, MAX_PUESTOS);
    }

    if (Array.isArray(out.historial)) {
      // La vista usa `key={e.id}`: los ids repetidos o ausentes colisionarían,
      // así que se completan aquí en vez de confiar en el archivo.
      const idsVistos = new Set();
      out.historial = out.historial
        .map((e) => {
          try {
            return sanitizeEntradaHistorial(e);
          } catch {
            return null;
          }
        })
        .filter(Boolean)
        .map((e, i) => {
          const id = e.id && !idsVistos.has(e.id) ? e.id : `importado-${i}`;
          idsVistos.add(id);
          return e.id === id ? e : { ...e, id };
        })
        .slice(0, MAX_ENTRADAS);
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
