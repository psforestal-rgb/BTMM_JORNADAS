import { createPortal } from "react-dom";
import { useT } from "../i18n/useT.js";

const TIPO_CLS = {
  info: "border-slate-300 bg-white text-slate-900",
  success: "border-emerald-300 bg-emerald-50 text-emerald-950",
  warning: "border-amber-300 bg-amber-50 text-amber-950",
  error: "border-red-300 bg-red-50 text-red-950",
};

/**
 * Viewport de avisos temporales. Se porta a document.body para quedar
 * por encima de modales (z-60) y de la bottom nav móvil.
 */
export default function ToastViewport({ toasts = [], onDismiss, onPause, onResume }) {
  const t = useT();
  if (typeof document === "undefined" || toasts.length === 0) return null;

  return createPortal(
    <div
      className="pointer-events-none fixed inset-x-0 bottom-[calc(4.5rem+env(safe-area-inset-bottom))] z-[60] flex flex-col items-center gap-2 px-3 lg:bottom-6"
      onMouseEnter={() => toasts.forEach((toast) => onPause?.(toast.id))}
      onMouseLeave={() => toasts.forEach((toast) => onResume?.(toast.id))}
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          role="status"
          aria-live="polite"
          className={`pointer-events-auto flex w-full max-w-md items-center gap-3 rounded-xl border px-3 py-2 shadow-lg ${TIPO_CLS[toast.tipo] || TIPO_CLS.info}`}
        >
          <p className="min-w-0 flex-1 text-sm font-semibold">{toast.mensaje}</p>
          {typeof toast.onAccion === "function" && (
            <button
              type="button"
              className="min-h-touch shrink-0 rounded-lg px-3 text-sm font-bold underline-offset-2 hover:underline"
              onClick={() => {
                toast.onAccion();
                onDismiss?.(toast.id);
              }}
            >
              {toast.accionLabel || t("toast.deshacer")}
            </button>
          )}
          <button
            type="button"
            className="inline-flex min-h-touch min-w-touch shrink-0 items-center justify-center rounded-lg text-lg font-semibold opacity-70 hover:opacity-100"
            aria-label={t("toast.cerrar")}
            onClick={() => onDismiss?.(toast.id)}
          >
            ×
          </button>
        </div>
      ))}
    </div>,
    document.body,
  );
}
