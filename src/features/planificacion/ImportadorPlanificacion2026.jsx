import { useEffect } from "react";
import { useApp } from "../../context/AppContext.jsx";
import { cargarPlanificacion2026 } from "../../data/planificacion2026.js";

const MARCA_IMPORTACION = "btmm:planificacion2026:importada:v2";

/**
 * Migración única de la programación institucional 2026.
 * La fuente está incluida en el bundle: se convierte primero y solo después
 * se sustituye el arreglo completo, evitando dejar la agenda vacía si ocurre
 * un error inesperado durante la carga.
 */
export default function ImportadorPlanificacion2026() {
  const { setActividadesPlan } = useApp();

  useEffect(() => {
    if (window.localStorage.getItem(MARCA_IMPORTACION) === "1") return undefined;
    let cancelado = false;

    (async () => {
      try {
        const actividades = await cargarPlanificacion2026();
        if (cancelado) return;
        // Sustitución atómica: limpia lo anterior y coloca la fuente oficial
        // en una sola actualización de estado.
        setActividadesPlan(actividades);
        window.localStorage.setItem(MARCA_IMPORTACION, "1");
      } catch (error) {
        // No se marca la migración: el siguiente arranque volverá a intentarlo.
        console.error("No fue posible importar PLANIFICACION BTMM 2026", error);
      }
    })();

    return () => {
      cancelado = true;
    };
  }, [setActividadesPlan]);

  return null;
}
