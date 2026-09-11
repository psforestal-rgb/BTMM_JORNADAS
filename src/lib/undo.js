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
 * - Exige que el ítem traiga `id`: un registro sin id rompería tanto el
 *   borrado posterior (`filter` por id) como las claves de React, y además no
 *   habría forma de detectar el duplicado.
 * - Ante una lista que no es un array devuelve lo recibido sin tocarlo. Es
 *   preferible no hacer nada a sustituir toda la lista por un único elemento,
 *   que sería una pérdida de datos silenciosa.
 * - Tolera índices fuera de rango o no enteros: los acota al tamaño actual,
 *   que pudo encoger mientras el aviso estaba en pantalla.
 * - No muta `lista`.
 */
export function reinsertarEn(lista, item, indice) {
  if (!Array.isArray(lista)) return lista;
  if (!item || item.id == null) return lista;
  if (lista.some((x) => x?.id === item.id)) return lista;
  const pedido = Number.isInteger(indice) ? indice : lista.length;
  const pos = Math.max(0, Math.min(pedido, lista.length));
  return [...lista.slice(0, pos), item, ...lista.slice(pos)];
}
