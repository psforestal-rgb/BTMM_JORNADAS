import { useCallback } from "react";
import { useToast } from "../../context/ToastContext.jsx";
import { reinsertarEn } from "../../lib/undo.js";
import { useT } from "../../i18n/useT.js";

/**
 * Borrado reversible de una actividad del plan (F-P12).
 *
 * Las actividades se eliminan desde cuatro sitios (vista Día, Planificación
 * general, el modal de actividades de una celda de Roles y el propio
 * ModalActividad). Este hook centraliza el comportamiento para que todos
 * ofrezcan el mismo «Deshacer» y reinserten en la posición original.
 *
 * Devuelve `eliminar(id)`. No cierra modales: eso lo decide quien lo llama.
 */
export function useEliminarActividad(actividadesPlan, setActividadesPlan) {
  const t = useT();
  const { conDeshacer, exito } = useToast();
  return useCallback(
    (id) => {
      const lista = actividadesPlan || [];
      const indice = lista.findIndex((a) => a.id === id);
      if (indice < 0) return;
      const actividad = lista[indice];
      // Una actividad puede guardarse sin título desde flujos antiguos; el
      // aviso necesita igualmente algo que nombrar.
      const titulo = String(actividad.titulo || "").trim() || t("actividad.sinTitulo");
      setActividadesPlan((prev) => prev.filter((a) => a.id !== id));
      conDeshacer(
        t("actividad.eliminada", { titulo }),
        () => {
          setActividadesPlan((prev) => reinsertarEn(prev, actividad, indice));
          exito(t("actividad.restaurada", { titulo }));
        },
        // El detalle recuerda el alcance real del borrado —la actividad
        // desaparece para todos sus funcionarios—, que antes solo advertía la
        // confirmación en línea del modal de Roles.
        { detalle: t("actividad.eliminadaDetalle") },
      );
    },
    [actividadesPlan, setActividadesPlan, conDeshacer, exito, t],
  );
}
