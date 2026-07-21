import { useEffect } from "react";
import { useApp } from "../../context/AppContext.jsx";
import {
  PLANIFICACION_VERSION,
  cargarPlanificacion2026,
  esActividadOficial,
  reconciliarPlanificacion,
} from "../../data/planificacion2026.js";
import { toLocalISODate } from "../../domain/fechas.js";

// Versión de planificación ya aplicada en este dispositivo.
const CLAVE_VERSION = "btmm:planificacion2026:version";
// Marca del sistema anterior (importación única booleana). Si existe, el
// dispositivo ya tiene EXACTAMENTE esta planificación, así que la transición
// solo registra la versión sin tocar los datos del usuario.
const MARCA_LEGADO = "btmm:planificacion2026:importada:v3";

/**
 * Sincroniza la programación institucional 2026 en cada apertura de la app,
 * de forma barata y segura:
 *
 *  - Si la versión ya aplicada coincide con `PLANIFICACION_VERSION`, no hace
 *    nada (caso normal: rápido, no recorre nada).
 *  - En una instalación nueva, importa la planificación completa.
 *  - Cuando llega una versión nueva, refresca SOLO las actividades oficiales
 *    de hoy en adelante (`reconciliarPlanificacion`): conserva el pasado y
 *    las actividades propias del usuario, y refleja los cambios del documento
 *    a futuro. Así "revisa de la fecha actual en adelante" y tarda menos.
 */
export default function ImportadorPlanificacion2026() {
  const { setActividadesPlan } = useApp();

  useEffect(() => {
    let cancelado = false;
    let aplicada = null;
    let legado = null;
    try {
      aplicada = window.localStorage.getItem(CLAVE_VERSION);
      legado = window.localStorage.getItem(MARCA_LEGADO);
    } catch {
      // localStorage no disponible (modo privado estricto): se intenta
      // importar igualmente; solo no se podrá recordar la versión aplicada.
    }

    // Ya está al día: nada que hacer.
    if (aplicada === PLANIFICACION_VERSION) return undefined;

    // Usuario del sistema anterior con esta misma planificación ya importada:
    // solo se registra la versión, sin reemplazar ni reordenar nada.
    if (!aplicada && legado === "1") {
      try {
        window.localStorage.setItem(CLAVE_VERSION, PLANIFICACION_VERSION);
      } catch {
        /* sin persistencia: se revisará de nuevo en el próximo arranque */
      }
      return undefined;
    }

    (async () => {
      try {
        const nuevas = await cargarPlanificacion2026();
        if (cancelado) return;
        const hoy = toLocalISODate();
        // Sustitución atómica en una sola actualización de estado. Se decide
        // dentro del updater para leer el estado real: si aún no hay
        // planificación, se importa completa; si ya la hay, se refresca solo
        // de hoy en adelante conservando lo demás.
        setActividadesPlan((previas) =>
          previas.some(esActividadOficial)
            ? reconciliarPlanificacion(previas, nuevas, hoy)
            : nuevas,
        );
        try {
          window.localStorage.setItem(CLAVE_VERSION, PLANIFICACION_VERSION);
        } catch {
          /* sin persistencia: se reintentará en el próximo arranque */
        }
      } catch (error) {
        // No se registra la versión: el siguiente arranque lo reintenta.
        console.error("No fue posible sincronizar PLANIFICACION BTMM 2026", error);
      }
    })();

    return () => {
      cancelado = true;
    };
  }, [setActividadesPlan]);

  return null;
}
