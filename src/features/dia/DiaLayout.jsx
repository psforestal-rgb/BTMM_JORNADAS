/**
 * DiaLayout — shell nativo-móvil para la ruta #/dia/:fecha.
 */
import { useState, useCallback, useEffect } from "react";
import Dia from "./Dia.jsx";
import BottomSheet from "../../ui/BottomSheet.jsx";
import ModalActividad from "../actividades/ModalActividad.jsx";
import SyncStatus from "../../ui/SyncStatus.jsx";
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
    nAlertas = 0,
    setView,
  } = props;

  const t = useT();
  const isMobile = useMobile();

  const [fabModal, setFabModal] = useState(null);

  const [contextualVisible, setContextualVisible] = useState(false);
  useEffect(() => {
    const el = document.getElementById("dia-boton-nueva-actividad");
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(([entry]) => setContextualVisible(entry.isIntersecting), {
      rootMargin: "-70px 0px -90px 0px",
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

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
    <div className="relative mx-auto w-full max-w-md md:max-w-4xl lg:max-w-6xl xl:max-w-7xl">
      {/* Indicador de guardado siempre visible en móvil (Topbar a menudo oculto). */}
      {isMobile && (
        <div className="mb-3 md:hidden">
          <SyncStatus prominent />
        </div>
      )}

      <Dia {...props} nAlertas={nAlertas} setView={setView} />

      <button
        type="button"
        onClick={() => setFabModal(nuevaActFab())}
        aria-label={t("dia.nueva")}
        aria-hidden={contextualVisible}
        tabIndex={contextualVisible ? -1 : 0}
        className={
          [
            "fixed z-40 flex h-14 w-14 items-center justify-center",
            "rounded-full bg-emerald-700 text-white shadow-lg",
            "hover:bg-emerald-600 active:scale-95",
            "transition-all duration-200",
            "bottom-[5.5rem] right-4",
            "md:hidden",
            contextualVisible ? "pointer-events-none scale-50 opacity-0" : "scale-100 opacity-100",
          ].join(" ")
        }
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>

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
