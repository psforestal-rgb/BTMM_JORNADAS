/**
 * DiaLayout — shell nativo-móvil para la ruta #/dia/:fecha.
 *
 * Responsabilidades:
 *   1. Centra el contenido en max-w-md (390 px) en pantallas anchas,
 *      permitiendo que la app se sienta como una app móvil nativa.
 *   2. Añade un FAB (+) en la esquina inferior derecha para nueva actividad.
 *      El FAB queda sobre el BottomNav (z-40, bottom-[5.5rem]).
 *   3. En móvil (< 768 px) el ModalActividad se monta dentro de un
 *      <BottomSheet>; en escritorio usa el modal centrado de siempre.
 *
 * No contiene lógica de negocio: toda la lógica sigue en Dia.jsx.
 */
import { useState, useCallback } from "react";
import Dia from "./Dia.jsx";
import BottomSheet from "../../ui/BottomSheet.jsx";
import ModalActividad from "../actividades/ModalActividad.jsx";
import { useMobile } from "../../lib/useMobile.js";
import { useT } from "../../i18n/useT.js";

export default function DiaLayout(props) {
  const {
    diaVista,
    setDiaVista,
    personas,
    actividadesPlan,
    setActividadesPlan,
    roleData,
    reposiciones,
    hj,
  } = props;

  const t = useT();
  const isMobile = useMobile();

  // Estado del FAB / BottomSheet
  const [fabModal, setFabModal] = useState(null); // null | actividad obj

  const personasActivas = personas.filter((p) => p.estado !== "Inactivo");

  const nuevaActFab = useCallback(() => ({
    id: `a${Date.now()}`,
    titulo: "",
    inicio: diaVista,
    fin: diaVista,
    unDia: true,
    funcionarios: [],
    lugar: "",
    observaciones: "",
    viatico: false,
  }), [diaVista]);

  const guardarFab = useCallback((act) => {
    if (!act.titulo.trim()) return;
    const normal = { ...act, fin: act.unDia ? act.inicio : act.fin || act.inicio };
    if (normal.fin < normal.inicio) normal.fin = normal.inicio;
    setActividadesPlan((prev) =>
      prev.some((a) => a.id === normal.id)
        ? prev.map((a) => (a.id === normal.id ? normal : a))
        : [...prev, normal]
    );
    setFabModal(null);
  }, [setActividadesPlan]);

  const eliminarFab = useCallback((id) => {
    setActividadesPlan((prev) => prev.filter((a) => a.id !== id));
    setFabModal(null);
  }, [setActividadesPlan]);

  return (
    // Contenedor centrado max-w-md — da el ancho de teléfono en pantallas anchas
    <div className="relative mx-auto w-full max-w-md">
      {/* Vista principal del día (toda la lógica existente) */}
      <Dia {...props} />

      {/* ─── FAB — Añadir actividad ─── */}
      <button
        type="button"
        onClick={() => setFabModal(nuevaActFab())}
        aria-label={t("dia.nueva")}
        className={
          [
            "fixed z-40 flex h-14 w-14 items-center justify-center",
            "rounded-full bg-emerald-700 text-white shadow-lg",
            "hover:bg-emerald-600 active:scale-95",
            "transition-transform duration-150",
            // Posición: sobre el BottomNav (que mide ~4rem) + safe area
            "bottom-[5.5rem] right-4",
            // En escritorio lo ocultamos: los botones internos son suficientes
            "md:hidden",
          ].join(" ")
        }
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>

      {/* ─── Modal de actividad lanzado por el FAB ─── */}
      {fabModal && (
        isMobile ? (
          <BottomSheet
            open={!!fabModal}
            onClose={() => setFabModal(null)}
            title={t("modalActividad.agregar")}
            snapPoint="full"
          >
            <ModalActividad
              valor={fabModal}
              personas={personasActivas}
              cerrar={() => setFabModal(null)}
              guardar={guardarFab}
              eliminar={eliminarFab}
              actividadesPlan={actividadesPlan}
              embebido
            />
          </BottomSheet>
        ) : (
          <ModalActividad
            valor={fabModal}
            personas={personasActivas}
            cerrar={() => setFabModal(null)}
            guardar={guardarFab}
            eliminar={eliminarFab}
            actividadesPlan={actividadesPlan}
          />
        )
      )}
    </div>
  );
}
