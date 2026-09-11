/**
 * Restaura un ítem eliminado en su índice original.
 * Idempotente: si el id ya está en la lista, no duplica.
 */
export function reinsertarEn(lista, item, indice) {
  if (!Array.isArray(lista)) return lista;
  if (!item || item.id == null) return lista;
  if (lista.some((x) => x && x.id === item.id)) return lista;
  const i = Number.isFinite(indice) ? Math.max(0, Math.min(indice, lista.length)) : lista.length;
  return [...lista.slice(0, i), item, ...lista.slice(i)];
}
