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
