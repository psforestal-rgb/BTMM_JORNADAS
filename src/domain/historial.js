/**
 * Rastro de cambios sobre las fichas de funcionario (RF9).
 *
 * Es un registro de auditoría, no un mecanismo para deshacer: responde qué
 * cambió, cuándo y sobre quién. Deshacer ya lo cubre el aviso con «Deshacer»
 * de los borrados, y restaurar por completo lo cubre el respaldo de «Datos».
 *
 * Decisiones, registradas en `_relevo/SEGUIMIENTO.md`:
 *
 *  - **Se guarda el valor anterior y el nuevo de cada campo que cambia.** Un
 *    rastro que solo diga «se editó a Ana» no sirve para control interno; uno
 *    que diga «Estado: Activo → Inactivo» sí. Solo se guardan los campos que
 *    cambiaron, así que el coste es proporcional al cambio, no a la ficha.
 *  - **Tope de 200 entradas**, las más nuevas primero. Sin tope, el rastro
 *    crecería sin límite dentro de `localStorage`, que es pequeño y compartido
 *    con el resto del estado.
 *  - **Viaja en el respaldo.** Un rastro de auditoría que desaparece al
 *    restaurar no es un rastro. Al estar acotado a 200 entradas, el peso que
 *    añade al JSON es predecible.
 */

export const MAX_ENTRADAS = 200;

export const TIPO = Object.freeze({
  ALTA: "alta",
  EDICION: "edicion",
  BAJA: "baja",
  RESTAURACION: "restauracion",
  IMPORTACION: "importacion",
});

const TIPOS_VALIDOS = new Set(Object.values(TIPO));

// El `id` es la referencia interna del registro, no un dato que nadie edite:
// incluirlo en el rastro sería ruido.
const CAMPOS_IGNORADOS = new Set(["id"]);

let secuencia = 0;

// Export solo para tests: hace los ids predecibles entre casos.
export function _resetHistorialId() {
  secuencia = 0;
}

function nuevoId() {
  secuencia += 1;
  return `h${Date.now()}-${secuencia}`;
}

/** Normaliza un valor para compararlo y para mostrarlo sin ambigüedad. */
function normalizar(valor) {
  if (valor === null || valor === undefined) return "";
  return valor;
}

/**
 * Campos que cambian entre dos versiones de una ficha.
 * Recorre la unión de claves de ambas, para detectar tanto lo que se modifica
 * como lo que aparece o desaparece.
 */
export function diferencias(antes, despues) {
  const a = antes && typeof antes === "object" ? antes : {};
  const b = despues && typeof despues === "object" ? despues : {};
  const claves = new Set([...Object.keys(a), ...Object.keys(b)]);
  const salida = [];
  for (const campo of claves) {
    if (CAMPOS_IGNORADOS.has(campo)) continue;
    const va = normalizar(a[campo]);
    const vb = normalizar(b[campo]);
    if (va === vb) continue;
    salida.push({ campo, antes: va, despues: vb });
  }
  // Orden estable por nombre de campo: dos rastros del mismo cambio deben
  // verse iguales, sin depender del orden de las claves del objeto.
  return salida.sort((x, y) => x.campo.localeCompare(y.campo));
}

/** Identifica a quién afecta una entrada, con lo mínimo para reconocerlo. */
function referencia(funcionario) {
  return {
    nombre: String(funcionario?.nombre ?? "").trim(),
    cedula: String(funcionario?.cedula ?? "").trim(),
  };
}

/**
 * Crea una entrada. Devuelve `null` cuando no hay nada que registrar —una
 * edición que no cambió ningún campo—, para no ensuciar el rastro.
 */
export function crearEntrada({ tipo, funcionario, cambios = [], detalle = null, fecha } = {}) {
  if (!TIPOS_VALIDOS.has(tipo)) return null;
  if (tipo === TIPO.EDICION && cambios.length === 0) return null;
  return {
    id: nuevoId(),
    fecha: fecha || new Date().toISOString(),
    tipo,
    funcionario: referencia(funcionario),
    cambios,
    ...(detalle ? { detalle } : {}),
  };
}

/** Atajo para el caso más frecuente: una edición con su diferencia calculada. */
export function entradaDeEdicion(antes, despues, fecha) {
  return crearEntrada({
    tipo: TIPO.EDICION,
    funcionario: despues,
    cambios: diferencias(antes, despues),
    fecha,
  });
}

/**
 * Añade una entrada al rastro: la más nueva primero, y descarta las más
 * antiguas al pasar del tope. Una entrada nula se ignora sin tocar nada.
 */
export function agregarEntrada(historial, entrada, max = MAX_ENTRADAS) {
  const base = Array.isArray(historial) ? historial : [];
  if (!entrada) return base;
  const tope = Number.isInteger(max) && max > 0 ? max : MAX_ENTRADAS;
  return [entrada, ...base].slice(0, tope);
}
