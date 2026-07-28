/**
 * HelpSheet — ayuda corta en lenguaje llano para usuarios de campo.
 */
import BottomSheet from "./BottomSheet.jsx";
import { useT } from "../i18n/useT.js";

export default function HelpSheet({ open, onClose, topic = "dia" }) {
  const t = useT();
  const title = t(`help.${topic}.titulo`);
  const lineas = t(`help.${topic}.lineas`);
  const items = Array.isArray(lineas) ? lineas : [String(lineas)];

  return (
    <BottomSheet open={open} onClose={onClose} title={title} snapPoint="half">
      <ol className="list-decimal space-y-3 pl-5 text-base leading-relaxed text-ink">
        {items.map((linea, i) => (
          <li key={i}>{linea}</li>
        ))}
      </ol>
      <button
        type="button"
        onClick={onClose}
        className="mt-6 inline-flex min-h-touch w-full items-center justify-center rounded-xl bg-brand px-4 text-base font-semibold text-brand-fg"
      >
        {t("acciones.cerrar")}
      </button>
    </BottomSheet>
  );
}
