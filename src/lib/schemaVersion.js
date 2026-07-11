/**
 * Fuente única de verdad para la versión del esquema de persistencia
 * (localStorage y IndexedDB). Ambos backends deben coincidir siempre:
 * un desajuste haría que `loadFromDexie()`/`loadState()` rechacen
 * snapshots válidos por error.
 */
export const SCHEMA_VERSION = 1;
