/**
 * Utilidades del borrado reversible (F-P12).
 *
 * El patrón en toda la app es el mismo: se elimina de inmediato y un aviso
 * ofrece «Deshacer» durante unos segundos. Deshacer debe devolver el elemento
 * a SU posición original, no al principio de la lista: el orden de las listas
 * base (personas, actividades, reposiciones) alimenta otras vistas y no debe
 * cambiar por haber pulsado un botón y arrepentirse.
 */

/**
 * Reinserta `item` en la posición `indice` de `lista`.
 *
 * - Idempotente: si un elemento con el mismo `id` ya volvió por otra vía
 *   (otro deshacer, una importación, una edición), devuelve la lista intacta.
 *   Sin esto, pulsar «Deshacer» dos veces duplicaría el registro.
 * - Tolera índices fuera de rango o inválidos: los acota al tamaño actual,
 *   que pudo encoger mientras el aviso estaba en pantalla.
 * - No muta `lista`.
 */
export function reinsertarEn(lista, item, indice) {
  const base = Array.isArray(lista) ? lista : [];
  if (!item) return base;
  if (item.id !== undefined && base.some((x) => x?.id === item.id)) return base;
  const copia = [...base];
  const pedido = Number.isInteger(indice) ? indice : copia.length;
  const pos = Math.max(0, Math.min(pedido, copia.length));
  copia.splice(pos, 0, item);
  return copia;
}
