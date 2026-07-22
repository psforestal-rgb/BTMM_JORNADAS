import { dim, primerDiaLaboral } from "./fechas.js";

/**
 * Dominio de roles mensuales (códigos T/L/V/I/O por funcionario y día).
 *
 * ## Contrato de claves de `roleData`
 *
 * `roleData` es un objeto plano `{ [clave]: valor }` persistido tal cual
 * (localStorage + IndexedDB, ver src/lib/storage.js y src/lib/db.js).
 * Existen dos familias de claves:
 *
 *  - `rolKey(year, month, puesto, persona, dia)`
 *    → `"YYYY-M-{puestoOperativo}-{persona}-{dia}"`
 *    Override puntual de la celda de un día concreto. `month` es 0-indexado
 *    (convención JS `Date`), por eso la clave usa `month + 1`.
 *
 *  - `rolCfgKey(year, month, puesto, persona)`
 *    → `"CFG-YYYY-M-{puestoOperativo}-{persona}"`
 *    Modalidad configurada para todo el mes (p. ej. "10x5"). Si no hay
 *    override en `rolKey`, la celda se deriva con `generarValorPatron` a
 *    partir de esta modalidad y el primer día laboral del mes.
 *
 * `{persona}` es hoy el **nombre** del funcionario (`persona.nombre`), no
 * su `id`. Ver TODO más abajo sobre la migración pendiente a `persona.id`.
 *
 * Categorías válidas para el valor de una celda (ver `categoriaDe`):
 *  - `T` — turno (activo)
 *  - `L` — libre
 *  - `V` — vacaciones
 *  - `I` — incapacidad
 *  - `O` — otro
 *  - `""` (vacío) — sin marcar / fuera de rango
 * El valor completo de una celda es la categoría seguida de un consecutivo
 * dentro de su racha (p. ej. `T3`, `L1`); ver `formatearCategoria`.
 *
 * Equivalencia aproximada en un esquema SQL relacional:
 *
 *   CREATE TABLE registros_rol (
 *     year        INTEGER,
 *     month       INTEGER,   -- 0-indexado, igual que en `rolKey`
 *     puesto_id   TEXT,
 *     persona_id  TEXT,      -- hoy: nombre del funcionario
 *     dia         INTEGER,
 *     valor       TEXT,      -- p. ej. "T3", "L1", ""
 *     PRIMARY KEY (year, month, puesto_id, persona_id, dia)
 *   );
 *   -- rolCfgKey equivale a una fila con dia = NULL (o una tabla aparte
 *   -- registros_rol_cfg(year, month, puesto_id, persona_id, modalidad)).
 *
 * TODO(arquitectura): migrar las claves de `persona` (nombre) a
 * `persona.id` para que renombrar un funcionario no huerfane su historial.
 * Se evaluó para esta iteración y se decidió posponer: `rolKey`/`rolCfgKey`
 * se usan directamente desde varios componentes de UI (RolesMensualGrid,
 * PlanificacionFuncionario, Dia, Planificacion, ModalActividad) que hoy
 * pasan el **nombre** como `persona`. Cambiar solo la firma de estas
 * funciones sin tocar esos componentes no migraría nada en la práctica: la
 * UI seguiría escribiendo claves por nombre en cada edición, y una
 * migración de `roleData` persistido (nombre → id) quedaría inmediatamente
 * "reforkeada" por la siguiente escritura, duplicando el historial en vez
 * de consolidarlo. Hacerlo bien requiere actualizar todos los llamadores de
 * UI en el mismo cambio (fuera del alcance de esta iteración, que se limitó
 * a dominio/storage/config) más tests que cubran el camino de migración de
 * `roleData` persistido. Estrategia sugerida para cuando se aborde:
 *   1. Cambiar los componentes de UI para pasar `persona.id` en vez de
 *      `persona.nombre` a `rolKey`/`rolCfgKey`.
 *   2. En `mergePersistedWithSeed` (AppContext.jsx), agregar
 *      `migrateRoleDataKeys()` que reescriba claves antiguas (nombre) al
 *      nuevo formato (id) usando el array de personas como mapa
 *      nombre→id, una sola vez, marcando `roleDataMigratedToIds: true` en
 *      el estado persistido.
 *   3. Mantener lectura con fallback a la clave antigua durante una fase
 *      de transición, para no perder datos de snapshots exportados antes
 *      de la migración.
 */

export function rolKey(year, month, puesto, persona, dia) {
  return `${year}-${month + 1}-${puesto}-${persona}-${dia}`;
}

export function rolCfgKey(year, month, puesto, persona) {
  return `CFG-${year}-${month + 1}-${puesto}-${persona}`;
}

export function parseModalidad(modalidad) {
  const texto = String(modalidad || "10x5").toLowerCase();
  if (texto.includes("administrativo")) return { trabajo: 5, libre: 2, administrativo: true };
  const p = texto.split("x");
  return { trabajo: Number(p[0]) || 10, libre: Number(p[1]) || 5, administrativo: false };
}

export function generarValorPatron(modalidad, dia, inicio, year, month) {
  const cfg = parseModalidad(modalidad);
  if (cfg.administrativo) {
    const dow = new Date(year, month, dia).getDay();
    if (dow >= 1 && dow <= 5) return `T${dow}`;
    if (dow === 6) return "L1";
    return "L2";
  }
  const ciclo = cfg.trabajo + cfg.libre;
  const pos = (dia - inicio) % ciclo;
  if (dia < inicio) return "";
  if (pos < cfg.trabajo) return `T${pos + 1}`;
  return `L${pos - cfg.trabajo + 1}`;
}

export function esRolActivo(v) {
  const x = String(v || "").toUpperCase();
  return x.startsWith("T");
}

export function etiquetaRol(v) {
  const x = String(v || "").toUpperCase();
  if (x.startsWith("T")) return "Turno";
  if (x.startsWith("L")) return "Libre";
  if (x.startsWith("V")) return "Vacaciones";
  if (x.startsWith("I")) return "Incapacidad";
  if (x.startsWith("O")) return "Otro";
  if (!x) return "Sin marcar";
  return "Turno";
}

export function categoriaDe(v) {
  const x = String(v || "").toUpperCase();
  if (x.startsWith("T")) return "T";
  if (x.startsWith("L")) return "L";
  if (x.startsWith("V")) return "V";
  if (x.startsWith("I")) return "I";
  if (x.startsWith("O")) return "O";
  return "";
}

export function formatearCategoria(cat, consecutivo, modalidad) {
  const c = String(cat || "").toUpperCase();
  if (!c) return "";
  const cfg = parseModalidad(modalidad);
  if (c === "T") return `T${((consecutivo - 1) % cfg.trabajo) + 1}`;
  if (c === "L") return `L${((consecutivo - 1) % cfg.libre) + 1}`;
  return `${c}${consecutivo}`;
}

export function funcionarioPorNombre(personas, nombre) {
  return personas.find((f) => f.nombre === nombre);
}

export function modalidadFuncionario(personas, roleData, year, month, nombre) {
  const f = funcionarioPorNombre(personas, nombre);
  if (!f) return "10x5";
  return roleData[rolCfgKey(year, month, f.puestoOperativo || "Puesto Quetzales", nombre)] || f.modalidad || "10x5";
}

export function codigoRolFuncionario(personas, roleData, year, month, nombre, dia, feriados = null) {
  const f = funcionarioPorNombre(personas, nombre);
  if (!f) return "";
  const puesto = f.puestoOperativo || "Puesto Quetzales";
  const inicio = primerDiaLaboral(year, month, feriados);
  return (
    roleData[rolKey(year, month, puesto, nombre, dia)] ??
    generarValorPatron(modalidadFuncionario(personas, roleData, year, month, nombre), dia, inicio, year, month)
  );
}

/**
 * Calcula el parche de `roleData` para fijar la categoría (T/L/V/I/O) de un
 * día de un funcionario, renumerando consecutivamente toda su fila del mes.
 * Devuelve un objeto de claves `rolKey` listo para mezclar en `roleData`.
 * Permite cambiar el rol desde fuera de la vista de Roles (p. ej. al asignar
 * una actividad a un funcionario que estaba libre).
 */
export function patchCategoriaDia({ roleData, personas, year, month, persona, dia, categoria, feriados = null }) {
  const f = funcionarioPorNombre(personas, persona);
  const puesto = f?.puestoOperativo || "Puesto Quetzales";
  const modalidad = modalidadFuncionario(personas, roleData, year, month, persona);
  const days = Array.from({ length: dim(year, month) }, (_, i) => i + 1);
  const categorias = {};
  for (const d of days) {
    categorias[d] = categoriaDe(codigoRolFuncionario(personas, roleData, year, month, persona, d, feriados));
  }
  categorias[dia] = categoria;
  const fila = renumerarFila({ days, categorias, modalidad });
  const patch = {};
  for (const d of days) patch[rolKey(year, month, puesto, persona, d)] = fila[d];
  return patch;
}

/**
 * Posición (0-indexada) dentro del ciclo T/L que corresponde a un código
 * concreto (p. ej. en 10x5: "T1"→0, "T10"→9, "L1"→10, "L5"→14). Devuelve
 * `null` si el código no es un turno/libre válido para la modalidad (vacío,
 * V/I/O, número fuera de rango o modalidad administrativa, que no tiene
 * ciclo). Es la operación inversa de `codigoDePosCiclo`.
 */
export function posCicloDeCodigo(codigo, modalidad) {
  const cfg = parseModalidad(modalidad);
  if (cfg.administrativo) return null;
  const x = String(codigo || "").toUpperCase();
  const mT = /^T(\d+)$/.exec(x);
  if (mT) {
    const n = Number(mT[1]);
    if (n >= 1 && n <= cfg.trabajo) return n - 1;
    return null;
  }
  const mL = /^L(\d+)$/.exec(x);
  if (mL) {
    const n = Number(mL[1]);
    if (n >= 1 && n <= cfg.libre) return cfg.trabajo + n - 1;
    return null;
  }
  return null;
}

/**
 * Código T/L que corresponde a una posición del ciclo (0-indexada), con
 * envoltura modular (acepta posiciones negativas o mayores que el ciclo).
 * En 10x5: 0→"T1", 9→"T10", 10→"L1", 15→"T1". Operación inversa de
 * `posCicloDeCodigo` (para modalidades de turnos, no administrativas).
 */
export function codigoDePosCiclo(pos, modalidad) {
  const cfg = parseModalidad(modalidad);
  const ciclo = cfg.trabajo + cfg.libre;
  const p = (((pos % ciclo) + ciclo) % ciclo) | 0;
  if (p < cfg.trabajo) return `T${p + 1}`;
  return `L${p - cfg.trabajo + 1}`;
}

/**
 * Genera el patrón de rol para cada día del rango [desde, hasta] inclusive,
 * de forma CONTINUA a través de los meses: el ciclo T/L no se reinicia al
 * cambiar de mes (a diferencia de `generarValorPatron`, que ancla cada mes
 * en su primer día laboral). `desde` y `hasta` son `{ year, month, day }`
 * con `month` 0-indexado (convención de `Date`).
 *
 *  - `posInicial` es la posición de ciclo (0 = T1) que se asigna al primer
 *    día del rango. Para "reiniciar" la rotación se pasa 0; para
 *    "continuar" desde un rol previo, la posición siguiente a la del último
 *    día ya programado.
 *  - Para el horario administrativo el patrón depende solo del día de la
 *    semana y `posInicial` se ignora.
 *
 * Devuelve un arreglo `[{ year, month, day, valor }]` en orden cronológico.
 * Si `hasta` es anterior a `desde` devuelve un arreglo vacío.
 */
export function generarPatronRangoContinuo({ modalidad, desde, hasta, posInicial = 0 }) {
  const cfg = parseModalidad(modalidad);
  const resultado = [];
  const fin = new Date(hasta.year, hasta.month, hasta.day);
  const cursor = new Date(desde.year, desde.month, desde.day);
  let offset = 0;
  while (cursor <= fin) {
    const y = cursor.getFullYear();
    const m = cursor.getMonth();
    const d = cursor.getDate();
    let valor;
    if (cfg.administrativo) {
      const dow = cursor.getDay();
      valor = dow >= 1 && dow <= 5 ? `T${dow}` : dow === 6 ? "L1" : "L2";
    } else {
      valor = codigoDePosCiclo(posInicial + offset, modalidad);
    }
    resultado.push({ year: y, month: m, day: d, valor });
    cursor.setDate(cursor.getDate() + 1);
    offset += 1;
  }
  return resultado;
}

function escapeRegExp(texto) {
  return String(texto).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Busca en `roleData` el último día (fecha máxima) que tiene un rol
 * explícitamente programado (override no vacío en `rolKey`) para un
 * `puesto`/`persona` dados. Ignora la modalidad configurada (`rolCfgKey`) y
 * los días derivados dinámicamente del patrón: solo cuenta lo guardado día
 * a día. Devuelve `{ year, month, day }` (month 0-indexado) o `null` si la
 * persona no tiene ningún día programado.
 */
export function ultimoDiaProgramado(roleData, puesto, persona) {
  if (!roleData) return null;
  const re = new RegExp(`^(\\d+)-(\\d+)-${escapeRegExp(puesto)}-${escapeRegExp(persona)}-(\\d+)$`);
  let best = null;
  let bestRank = -1;
  for (const key of Object.keys(roleData)) {
    const val = roleData[key];
    if (val == null || val === "") continue;
    const mt = re.exec(key);
    if (!mt) continue;
    const year = Number(mt[1]);
    const month = Number(mt[2]) - 1;
    const day = Number(mt[3]);
    const rank = year * 10000 + month * 100 + day;
    if (rank > bestRank) {
      bestRank = rank;
      best = { year, month, day };
    }
  }
  return best;
}

// Renumera consecutivamente toda una fila tras un cambio puntual de categoría.
// `days` es el listado de días del mes; `categorias[d]` la categoría destino por día.
export function renumerarFila({ days, categorias, modalidad }) {
  const resultado = {};
  let categoriaAnterior = null;
  let consecutivo = 0;
  days.forEach((d) => {
    const cat = categorias[d] || "";
    if (!cat) {
      categoriaAnterior = null;
      consecutivo = 0;
      resultado[d] = "";
      return;
    }
    if (cat !== categoriaAnterior) {
      categoriaAnterior = cat;
      consecutivo = 1;
    } else {
      consecutivo += 1;
    }
    resultado[d] = formatearCategoria(cat, consecutivo, modalidad);
  });
  return resultado;
}
