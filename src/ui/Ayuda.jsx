import { useId, useState } from "react";
import Icon from "./Icon.jsx";
import { t } from "../i18n/es-CR.js";

/**
 * Ayuda contextual desplegable (F-P8).
 *
 * Se eligió una revelación en línea en vez de un tooltip flotante por tres
 * razones concretas de esta app:
 *  - Es táctil: un tooltip que solo aparece al pasar el ratón no existe en un
 *    teléfono, que es donde más se usa la herramienta.
 *  - No se recorta: los formularios viven dentro de contenedores con scroll
 *    (`overflow-y-auto`), donde una burbuja flotante se corta o desplaza la caja.
 *  - Es el mismo patrón para lector de pantalla y para vista: un botón con
 *    `aria-expanded` y un panel con `aria-controls`, sin texto duplicado ni
 *    contenido oculto que solo unos usuarios reciben.
 *
 * Props:
 *  - etiqueta: de qué trata la ayuda; completa el nombre accesible del botón.
 *  - children: el texto de ayuda.
 */
export default function Ayuda({ etiqueta, children, className = "" }) {
  const id = useId();
  const [abierta, setAbierta] = useState(false);
  return (
    <div className={className}>
      <button
        type="button"
        onClick={() => setAbierta((v) => !v)}
        aria-expanded={abierta}
        aria-controls={id}
        className="inline-flex min-h-touch items-center gap-1.5 rounded-xl px-2 text-xs font-semibold text-emerald-800 hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
      >
        <Icon name={abierta ? "chevronDown" : "info"} size={14} />
        <span>{abierta ? t("ayuda.ocultar") : t("ayuda.mostrar")}</span>
        {etiqueta && <span className="sr-only">{` — ${etiqueta}`}</span>}
      </button>
      {/* El panel se desmonta al cerrarse: un `hidden` deja el texto en el DOM
          pero fuera del árbol de accesibilidad, y no aporta nada a cambio. */}
      {abierta && (
        <p
          id={id}
          role="note"
          className="mt-1 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-xs leading-relaxed text-emerald-950"
        >
          {children}
        </p>
      )}
    </div>
  );
}
