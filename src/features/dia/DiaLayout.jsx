/**
 * DiaLayout — shell nativo-móvil para la ruta #/dia/:fecha.
 *
 * Responsabilidades:
 *   1. Centra el contenido en max-w-md (390 px) en móvil; desde md amplía
 *      a una composición de dos columnas (cobertura + actividades).
 *   2. Añade un FAB (+) en la esquina inferior derecha para nueva actividad,
 *      pero solo mientras el botón "+ Nueva" contextual de la tarjeta
 *      "Actividades del día" no esté a la vista — nunca deben coexistir
 *      ambas acciones ni el FAB puede tapar controles de las tarjetas.
 *   3. En móvil (< 768 px) el ModalActividad se monta dentro de un
 *      <BottomSheet>; en escritorio usa el modal centrado de siempre.
 *
 * No contiene lógica de negocio: toda la lógica sigue en Dia.jsx.
 */
import { useState, useCallback, useEffect } from "react";
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

  // El FAB se oculta mientras el botón "+ Nueva" contextual (dentro de la
  // tarjeta "Actividades del día") esté visible, para que nunca coexistan
  // dos acciones de alta ni el FAB tape "Editar" u otro control.
  const [contextualVisible, setContextualVisible] = useState(false);
  useEffect(() => {
    const el = document.getElementById("dia-boton-nueva-actividad");
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(([entry]) => setContextualVisible(entry.isIntersecting), {
      // Márgenes negativos: exige que el botón esté realmente visible,
      // no solo asomando bajo el Topbar o sobre el BottomNav/FAB.
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
    // Ancho de teléfono en móvil; desde md se amplía para aprovechar tablet
    // y escritorio (Dia.jsx arma cobertura + actividades en dos columnas).
    <div className="relative mx-auto w-full max-w-md md:max-w-4xl lg:max-w-6xl xl:max-w-7xl">
      {/* Vista principal del día (toda la lógica existente) */}
      <Dia {...props} />

      {/* ─── FAB — Añadir actividad (oculto si el botón contextual ya se ve) ─── */}
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
            // Posición: sobre el BottomNav (que mide ~4rem) + safe area
            "bottom-[5.5rem] right-4",
            // En escritorio lo ocultamos: los botones internos son suficientes
            "md:hidden",
            // Nunca debe tapar el botón "+ Nueva" contextual ni el contenido
            // que queda debajo: mientras ese botón esté a la vista, el FAB
            // desaparece del flujo de interacción (no solo visualmente).
            contextualVisible ? "pointer-events-none scale-50 opacity-0" : "scale-100 opacity-100",
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
