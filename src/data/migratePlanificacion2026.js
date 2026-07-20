/**
 * Migración única de la planificación oficial BTMM 2026.
 *
 * Reemplaza exclusivamente `actividadesPlan`; conserva funcionarios, roles,
 * reposiciones y reglas. Sincroniza el mismo snapshot en localStorage e
 * IndexedDB antes de montar React, evitando que un backend antiguo reactive
 * las actividades de demostración.
 */

import { baseActividadesPlan } from "./seedActividades.js";
import { SCHEMA_VERSION } from "../lib/schemaVersion.js";
import { loadFromDexieWithMeta, saveToDexie } from "../lib/db.js";

const STORAGE_KEY = "pnlq:state";
const LAST_SAVED_KEY = "pnlq:lastSavedAt";
const MIGRACION = "planificacionOficialBTMM2026-v1";
const BACKUP_PREFIX = "pnlq:backup:actividades-pre-planificacion-2026";

function leerLocalStorage() {
  try {
    if (typeof window === "undefined" || !window.localStorage) return null;
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed?.schemaVersion !== SCHEMA_VERSION || !parsed?.state) return null;
    return {
      state: parsed.state,
      revision: Number.isFinite(parsed.revision) ? parsed.revision : 0,
      savedAt: parsed.savedAt || null,
    };
  } catch {
    return null;
  }
}

function masReciente(local, idb) {
  if (!local) return idb;
  if (!idb) return local;
  const revLocal = local.revision ?? 0;
  const revIdb = idb.revision ?? 0;
  if (revLocal !== revIdb) return revLocal > revIdb ? local : idb;
  const tLocal = local.savedAt ? Date.parse(local.savedAt) : 0;
  const tIdb = idb.savedAt ? Date.parse(idb.savedAt) : 0;
  return tLocal >= tIdb ? local : idb;
}

function guardarBackup(actividades) {
  if (!Array.isArray(actividades) || actividades.length === 0) return;
  try {
    const key = `${BACKUP_PREFIX}-${Date.now()}`;
    window.localStorage.setItem(
      key,
      JSON.stringify({
        creadoEn: new Date().toISOString(),
        motivo: "Reemplazo por planificación institucional BTMM 2026",
        actividadesPlan: actividades,
      }),
    );
  } catch {
    // El respaldo es preventivo. Una cuota llena no debe impedir la migración.
  }
}

function escribirLocalStorage(state, revision, savedAt) {
  try {
    if (typeof window === "undefined" || !window.localStorage) return false;
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ schemaVersion: SCHEMA_VERSION, savedAt, revision, state }),
    );
    window.localStorage.setItem(LAST_SAVED_KEY, savedAt);
    return true;
  } catch {
    return false;
  }
}

export async function prepararPlanificacionOficial2026() {
  const local = leerLocalStorage();
  const idb = await loadFromDexieWithMeta().catch(() => null);
  const vigente = masReciente(local, idb);

  // Instalación nueva: AppContext tomará directamente las semillas oficiales.
  if (!vigente?.state) return { migrada: false, razon: "instalacion-nueva" };
  if (vigente.state?.migraciones?.[MIGRACION]) {
    return { migrada: false, razon: "ya-aplicada" };
  }

  guardarBackup(vigente.state.actividadesPlan);

  const state = {
    ...vigente.state,
    actividadesPlan: baseActividadesPlan,
    migraciones: {
      ...(vigente.state.migraciones || {}),
      [MIGRACION]: true,
    },
  };

  // Date.now() queda por encima del contador histórico y garantiza que el
  // snapshot migrado gane la comparación localStorage/IndexedDB.
  const revision = Math.max(local?.revision || 0, idb?.revision || 0, Date.now()) + 1;
  const savedAt = new Date().toISOString();
  const localOk = escribirLocalStorage(state, revision, savedAt);
  const idbOk = await saveToDexie(state, revision).catch(() => false);

  return {
    migrada: localOk || idbOk,
    localStorage: localOk,
    indexedDB: idbOk,
    totalActividades: baseActividadesPlan.length,
  };
}

export const MIGRACION_PLANIFICACION_2026 = MIGRACION;
