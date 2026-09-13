import { dim, isoFecha, primerDiaLaboral } from "./fechas.js";
import { puestoEnFecha, puestoEnMes } from "./historialPuestos.js";

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

/**
 * ¿La persona está TRABAJANDO ese día? Turno presencial (T) o teletrabajo (E).
 *
 * `E` cuenta como activo a propósito (RT1): un día de teletrabajo es
 * precisamente un día en que se hacen actividades. Si no lo fuera, asignar
 * cualquier actividad a alguien en teletrabajo marcaría conflicto, que es justo
 * lo contrario de lo que el rol significa.
 */
export function esRolActivo(v) {
  const x = String(v || "").toUpperCase();
  return x.startsWith("T") || x.startsWith("E");
}

/**
 * ¿La persona está FÍSICAMENTE en el puesto? Solo el turno presencial.
 *
 * Trabajar y estar presente dejaron de ser lo mismo al aparecer el teletrabajo
 * (RT5). Todo lo que dependa de la presencia física —atender visitantes, la
 * cobertura crítica— debe usar esta función y no `esRolActivo`.
 */
export function esRolPresencial(v) {
  return String(v || "").toUpperCase().startsWith("T");
}

/** ¿Es un día de teletrabajo? (RT1) */
export function esTeletrabajo(v) {
  return String(v || "").toUpperCase().startsWith("E");
}

export function etiquetaRol(v) {
  const x = String(v || "").toUpperCase();
  if (x.startsWith("T")) return "Turno";
  if (x.startsWith("L")) return "Libre";
  if (x.startsWith("V")) return "Vacaciones";
  if (x.startsWith("I")) return "Incapacidad";
  if (x.startsWith("O")) return "Otro";
  if (x.startsWith("E")) return "Teletrabajo";
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
  if (x.startsWith("E")) return "E";
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

/**
 * Puesto bajo el que está archivado el rol de esa persona en ese mes.
 *
 * El puesto de alguien NO es fijo: un traslado lo cambia y el rol de los meses
 * anteriores sigue perteneciendo al puesto donde estuvo entonces (ver
 * `domain/historialPuestos.js`). Toda clave de `roleData` tiene que resolverse
 * con ESTE valor y no con `f.puestoOperativo`, o al trasladar a alguien su rol
 * pasado se leería bajo el puesto equivocado y saldría en blanco.
 *
 * `month` es 0-indexado, igual que en `rolKey`. Con `dia` resuelve por DÍA, que
 * es lo que hace falta para las claves de celda: un traslado puede caer a mitad
 * de mes y entonces la primera quincena pertenece a un puesto y la segunda a
 * otro. Sin `dia` resuelve por mes, que es lo que corresponde a las claves de
 * modalidad (`rolCfgKey`), que son mensuales. Si el historial no cubre esa
 * fecha se cae al puesto de la ficha, como se comportaba antes.
 */
export function puestoDelRol(funcionario, year, month, dia = null) {
  if (!funcionario) return "";
  const porHistorial =
    dia === null
      ? puestoEnMes(funcionario, year, month + 1)
      : puestoEnFecha(funcionario, isoFecha(year, month, dia));
  return porHistorial || funcionario.puestoOperativo || "Puesto Quetzales";
}

export function modalidadFuncionario(personas, roleData, year, month, nombre) {
  const f = funcionarioPorNombre(personas, nombre);
  if (!f) return "10x5";
  return roleData[rolCfgKey(year, month, puestoDelRol(f, year, month), nombre)] || f.modalidad || "10x5";
}

export function codigoRolFuncionario(personas, roleData, year, month, nombre, dia, feriados = null) {
  const f = funcionarioPorNombre(personas, nombre);
  if (!f) return "";
  const puesto = puestoDelRol(f, year, month, dia);
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
  // `puesto` admite una lista: una persona trasladada tiene rol archivado bajo
  // cada puesto por el que pasó, y el último día programado es el más reciente
  // de todos ellos, no solo el del puesto donde está hoy.
  const puestos = (Array.isArray(puesto) ? puesto : [puesto]).filter(Boolean);
  if (!puestos.length) return null;
  const alternativa = puestos.map(escapeRegExp).join("|");
  const re = new RegExp(`^(\\d+)-(\\d+)-(?:${alternativa})-${escapeRegExp(persona)}-(\\d+)$`);
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

/**
 * Separa «puesto» de «funcionario» dentro del medio de una clave de `roleData`.
 *
 * La clave los pega con un guion y NINGUNO de los dos tiene prohibido llevar
 * guiones, así que partir por el primero es una apuesta. Cuando se conoce la
 * lista de puestos se usa el que encaje como prefijo —eso es exacto— y el
 * primer guion queda solo como último recurso.
 *
 * Se prueba primero el nombre MÁS LARGO. Con «Puesto Orosi» y «Puesto
 * Orosi-Norte» en la misma lista, el orden de la lista decidiría quién gana y
 * la mitad de las claves del segundo se leerían como del primero.
 */
function separarPuestoYFuncionario(medio, puestosConocidos) {
  const candidatos = (Array.isArray(puestosConocidos) ? puestosConocidos : [])
    .filter(Boolean)
    .slice()
    .sort((a, b) => String(b).length - String(a).length);
  for (const puesto of candidatos) {
    if (medio.startsWith(`${puesto}-`)) {
      return { puesto, funcionario: medio.slice(puesto.length + 1) };
    }
  }
  const corte = medio.indexOf("-");
  if (corte <= 0) return null;
  return { puesto: medio.slice(0, corte), funcionario: medio.slice(corte + 1) };
}

/**
 * Descompone una clave de día de `roleData`.
 *
 * El formato es `"{anio}-{mes}-{puesto}-{funcionario}-{dia}"`: se ancla por los
 * extremos (dos números al principio, uno al final) y el medio se separa con
 * `separarPuestoYFuncionario`. Devuelve `null` si la clave no tiene esa forma.
 *
 * Vive aquí, junto a `rolKey`, y no en el módulo de exportación: el formato de
 * la clave es uno solo y quien lo arma tiene que ser también quien lo lee.
 */
export function partirClaveRol(clave, puestosConocidos) {
  const m = String(clave).match(/^(\d{4})-(\d{1,2})-(.+)-(\d{1,2})$/);
  if (!m) return null;
  const partes = separarPuestoYFuncionario(m[3], puestosConocidos);
  if (!partes) return null;
  return { anio: Number(m[1]), mes: Number(m[2]), ...partes, dia: Number(m[4]) };
}

/** Descompone una clave `CFG-{anio}-{mes}-{puesto}-{funcionario}`. */
export function partirClaveModalidad(clave, puestosConocidos) {
  const m = String(clave).match(/^CFG-(\d{4})-(\d{1,2})-(.+)$/);
  if (!m) return null;
  const partes = separarPuestoYFuncionario(m[3], puestosConocidos);
  if (!partes) return null;
  return { anio: Number(m[1]), mes: Number(m[2]), ...partes };
}

/**
 * Reescribe las claves de `roleData` al renombrar un puesto o una persona.
 *
 * Las claves llevan DENTRO el nombre del puesto y el de la persona
 * (`2026-9-Puesto Orosi-Errol Salazar-15`). Renombrar cualquiera de los dos sin
 * arrastrar las claves deja el rol archivado bajo el nombre viejo: la
 * cuadrícula lo busca por el nuevo, no lo encuentra, y las celdas salen en
 * blanco. No hay error ni aviso — el rol simplemente se vacía, que es la peor
 * forma de perder datos.
 *
 * `tipo` es `"puesto"` o `"persona"`. Se reescriben las dos familias de claves:
 * el día (`rolKey`) y la modalidad del mes (`rolCfgKey`).
 *
 * `puestosConocidos` es la lista de puestos ANTES del renombre —tiene que
 * contener a `antes` cuando se renombra un puesto—. Sin ella, un nombre de
 * puesto con guiones se parte por el sitio equivocado.
 *
 * La comparación con `antes` es distinta según el tipo, y no por capricho:
 *
 *  - **Puesto: sin distinguir mayúsculas.** `validarPuesto` ya impide que
 *    existan dos puestos que solo se diferencien en eso, así que la
 *    coincidencia no puede ser ambigua; y cambiar «Puesto Orosi» por «PUESTO
 *    OROSI» es un renombre real que también tiene que arrastrar el rol.
 *  - **Persona: exacta.** Los nombres de funcionario NO son únicos ni se
 *    validan como tales. Aflojar aquí movería el rol de otra persona que se
 *    llame casi igual, y eso sí sería pérdida de datos.
 *
 * Devuelve `{ roleData, movidas, colisiones }`. Una colisión es una clave de
 * destino que YA tenía valor: en ese caso gana el destino y la de origen se
 * descarta, porque el destino es el nombre que la persona usuaria acaba de
 * elegir. No debería ocurrir —el nombre nuevo no tiene rol todavía— pero si
 * ocurre hay que poder contarlo en vez de perderlo en silencio.
 */
export function reescribirClavesRol(
  roleData,
  { tipo, antes, despues, puestosConocidos = [] } = {},
) {
  const origen = roleData && typeof roleData === "object" ? roleData : {};
  const viejo = String(antes ?? "").trim();
  const nuevo = String(despues ?? "").trim();
  if (!viejo || !nuevo || viejo === nuevo || (tipo !== "puesto" && tipo !== "persona")) {
    return { roleData: origen, movidas: 0, colisiones: 0 };
  }

  const conocidos = [...new Set([...(puestosConocidos || []), viejo].filter(Boolean))];
  const coincide =
    tipo === "puesto"
      ? (valor) => String(valor).toLowerCase() === viejo.toLowerCase()
      : (valor) => String(valor) === viejo;

  const salida = {};
  const renombradas = new Map();
  for (const [clave, valor] of Object.entries(origen)) {
    const esCfg = clave.startsWith("CFG-");
    const partes = esCfg
      ? partirClaveModalidad(clave, conocidos)
      : partirClaveRol(clave, conocidos);
    const objetivo = partes && (tipo === "puesto" ? partes.puesto : partes.funcionario);
    if (!partes || !coincide(objetivo)) {
      salida[clave] = valor;
      continue;
    }
    const puesto = tipo === "puesto" ? nuevo : partes.puesto;
    const persona = tipo === "persona" ? nuevo : partes.funcionario;
    // `rolKey`/`rolCfgKey` esperan el mes 0-indexado y la clave lo guarda
    // 1-indexado; se resta aquí para que la clave se arme con la MISMA función
    // que la escribió y no con una plantilla copiada.
    const destino = esCfg
      ? rolCfgKey(partes.anio, partes.mes - 1, puesto, persona)
      : rolKey(partes.anio, partes.mes - 1, puesto, persona, partes.dia);
    if (destino === clave) {
      salida[clave] = valor;
      continue;
    }
    renombradas.set(destino, valor);
  }

  let colisiones = 0;
  for (const [destino, valor] of renombradas) {
    if (salida[destino] !== undefined && salida[destino] !== "") {
      colisiones += 1;
      continue;
    }
    salida[destino] = valor;
  }

  return { roleData: salida, movidas: renombradas.size, colisiones };
}
