/**
 * BottomSheet — panel que se desliza desde la parte inferior del viewport.
 *
 * Props:
 *   open        {boolean}  controla visibilidad
 *   onClose     {function} callback al cerrar
 *   title       {string}   encabezado del panel (aria-label del diálogo)
 *   snapPoint   {'half'|'full'}  altura del panel; default 'full'
 *   children    {ReactNode}
 *
 * Comportamiento:
 *   - Entra con translate-y 100 → 0, sale 0 → 100 (transition CSS).
 *   - Overlay oscuro semitransparente detrás.
 *   - Drag-to-close: arrastrar hacia abajo > 80 px cierra el panel.
 *   - Tecla Escape cierra el panel.
 *   - aria-modal="true" + role="dialog" para lectores de pantalla.
 *   - Renderiza en un portal sobre document.body para evitar z-index issues.
 */
import { useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";

const SNAP = {
  half: "h-[60vh]",
  full: "max-h-[92vh]",
};

export default function BottomSheet({ open, onClose, title, snapPoint = "full", children }) {
  const sheetRef = useRef(null);
  const dragState = useRef({ startY: 0, dragging: false });

  // Cerrar con Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  // Bloquear scroll del body mientras está abierto
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Drag-to-close
  const onTouchStart = useCallback((e) => {
    dragState.current = { startY: e.touches[0].clientY, dragging: true };
  }, []);

  const onTouchMove = useCallback((e) => {
    if (!dragState.current.dragging) return;
    const delta = e.touches[0].clientY - dragState.current.startY;
    if (delta > 0 && sheetRef.current) {
      sheetRef.current.style.transform = `translateY(${delta}px)`;
    }
  }, []);

  const onTouchEnd = useCallback((e) => {
    if (!dragState.current.dragging) return;
    const delta = e.changedTouches[0].clientY - dragState.current.startY;
    dragState.current.dragging = false;
    if (sheetRef.current) {
      sheetRef.current.style.transform = "";
    }
    if (delta > 80) onClose();
  }, [onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <>
      {/* Overlay */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={[
          "fixed inset-0 z-40 bg-black/50 transition-opacity duration-300",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
      />

      {/* Panel */}
      <div
        ref={sheetRef}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={[
          "fixed inset-x-0 bottom-0 z-50 flex flex-col rounded-t-2xl bg-white shadow-2xl",
          "transition-transform duration-300 ease-out",
          SNAP[snapPoint] ?? SNAP.full,
          open ? "translate-y-0" : "translate-y-full",
        ].join(" ")}
      >
        {/* Drag handle */}
        <div
          className="flex cursor-grab touch-none items-center justify-center pb-1 pt-3"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          aria-hidden="true"
        >
          <span className="h-1 w-10 rounded-full bg-slate-300" />
        </div>

        {/* Encabezado */}
        {title && (
          <div className="flex items-center justify-between border-b border-slate-100 px-5 pb-3 pt-1">
            <h2 className="text-base font-semibold text-slate-900">{title}</h2>
            <button
              onClick={onClose}
              aria-label="Cerrar"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        {/* Contenido con scroll */}
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 pb-8 pt-4">
          {children}
        </div>
      </div>
    </>,
    document.body,
  );
}
