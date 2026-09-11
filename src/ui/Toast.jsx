import { createPortal } from "react-dom";
import { useToast } from "../context/ToastContext.jsx";
import Icon from "./Icon.jsx";
import { t } from "../i18n/es-CR.js";

/**
 * Viewport de avisos efímeros. Se monta una sola vez (dentro de
 * `ToastProvider`) y pinta la cola que expone `useToast()`.
 *
 * Notas de implementación:
 *  - Portal a `document.body`, por la misma razón que `Modal.jsx`: un ancestro
 *    con `backdrop-filter` actuaría como bloque contenedor y descolocaría el
 *    `position: fixed`.
 *  - Dos regiones vivas persistentes (polite / assertive). Deben existir en el
 *    DOM ANTES de que llegue el mensaje: si se montaran junto con el aviso,
 *    los lectores de pantalla no lo anunciarían.
 *  - z-index por encima de los modales (ver `.pnlq-toast-viewport` en
 *    index.css): un borrado dentro de un modal debe poder ofrecer «Deshacer».
 */

const ACENTOS = {
  exito: { icono: "check", texto: "text-ok", borde: "border-l-ok" },
  error: { icono: "danger", texto: "text-critical", borde: "border-l-critical" },
  aviso: { icono: "alert", texto: "text-warning", borde: "border-l-warning" },
  info: { icono: "info", texto: "text-info", borde: "border-l-info" },
};

function ToastItem({ item, onCerrar, onAccion }) {
  const acento = ACENTOS[item.tipo] || ACENTOS.info;
  return (
    <div
      data-testid="toast"
      data-tipo={item.tipo}
      className={`pnlq-toast rounded-2xl border border-line border-l-4 ${acento.borde} bg-surface p-3 shadow-lg`}
    >
      <div className="flex items-start gap-2.5">
        <span className={`mt-0.5 shrink-0 ${acento.texto}`}>
          <Icon name={acento.icono} size={20} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="break-words text-sm font-semibold text-ink">{item.mensaje}</p>
          {item.detalle && <p className="mt-0.5 break-words text-xs text-ink-muted">{item.detalle}</p>}
        </div>
        <button
          type="button"
          onClick={onCerrar}
          aria-label={t("acciones.cerrar")}
          className="-mr-1 -mt-1 inline-flex min-h-touch min-w-touch shrink-0 items-center justify-center rounded-xl text-ink-muted hover:bg-surface-alt hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          <Icon name="x" size={18} />
        </button>
      </div>
      {item.accion && (
        <div className="mt-1 flex justify-end">
          <button
            type="button"
            onClick={onAccion}
            className="inline-flex min-h-touch items-center rounded-xl bg-brand px-4 text-sm font-bold text-brand-fg hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            {item.accion.etiqueta}
          </button>
        </div>
      )}
    </div>
  );
}

export default function ToastViewport() {
  const { toasts, cerrar, activarAccion, pausar, reanudar } = useToast();

  const urgentes = toasts.filter((x) => x.tipo === "error");
  const normales = toasts.filter((x) => x.tipo !== "error");

  const pintar = (item) => (
    <ToastItem key={item.id} item={item} onCerrar={() => cerrar(item.id)} onAccion={() => activarAccion(item.id)} />
  );

  const viewport = (
    <div
      className="pnlq-toast-viewport pnlq-no-print"
      // El temporizador se detiene mientras alguien lee o navega con teclado
      // por el aviso, para que «Deshacer» no desaparezca bajo el cursor.
      onMouseEnter={pausar}
      onMouseLeave={reanudar}
      onFocusCapture={pausar}
      onBlurCapture={reanudar}
    >
      <div role="alert" aria-live="assertive" aria-atomic="false" className="pnlq-toast-region">
        {urgentes.map(pintar)}
      </div>
      <div role="status" aria-live="polite" aria-atomic="false" className="pnlq-toast-region">
        {normales.map(pintar)}
      </div>
    </div>
  );

  return typeof document !== "undefined" ? createPortal(viewport, document.body) : viewport;
}
