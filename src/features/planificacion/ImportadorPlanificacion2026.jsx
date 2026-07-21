import { useEffect } from "react";
import { useApp } from "../../context/AppContext.jsx";
import { cargarPlanificacion2026 } from "../../data/planificacion2026.js";

const MARCA_IMPORTACION = "btmm:planificacion2026:importada:v1";

/**
 * Migración destructiva solicitada para 2026:
 * 1) elimina todas las actividades existentes;
 * 2) descarga y convierte el calendario institucional;
 * 3) persiste la marca únicamente cuando la importación concluye.
 */
export default function ImportadorPlanificacion2026() {
  const { setActividadesPlan } = useApp();

  useEffect(() => {
    if (window.localStorage.getItem(MARCA_IMPORTACION) === "1") return undefined;
    let cancelado = false;

    // La limpieza ocurre antes de iniciar la carga, tal como fue solicitado.
    setActividadesPlan([]);
    (async () => {
      try {
        const actividades = await cargarPlanificacion2026();
        if (cancelado) return;
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
