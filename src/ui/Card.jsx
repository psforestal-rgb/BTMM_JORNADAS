import { useState } from "react";
import Icon from "./Icon.jsx";

// Superficies compartidas — mobile-first: por defecto no hay borde ni
// sombra (flat). Los demás variantes se reservan para casos puntuales
// (ver docs/ARQUITECTURA.md): inset para contenido anidado dentro de un
// flat, elevated/interactive para paneles que deben distinguirse del
// fondo (poco frecuentes en listas repetidas).
const VARIANTES = {
  flat: "bg-surface",
  inset: "bg-surface-inset",
  elevated: "border border-line bg-surface shadow-sm",
  interactive: "border border-line bg-surface transition-colors hover:border-line-strong hover:bg-surface-alt",
};

export default function Card({
  title,
  icon,
  action,
  children,
  collapsible = false,
  defaultOpen = true,
  variant = "flat",
  className = "",
  ariaLabel,
}) {
  const [open, setOpen] = useState(defaultOpen);
  const abierto = !collapsible || open;
  return (
    <div className={`pnlq-card rounded-lg p-4 ${VARIANTES[variant] ?? VARIANTES.flat} ${className}`}>
      <div className={`pnlq-card-header flex flex-wrap items-center justify-between gap-3 ${abierto ? "mb-3" : ""}`}>
        {collapsible ? (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={ariaLabel}
            className="flex min-h-touch flex-1 items-center gap-2 text-left text-base font-semibold text-ink hover:text-brand"
          >
            <Icon name={open ? "chevronDown" : "chevronRight"} size={18} className="shrink-0 text-ink-subtle" />
            <span>{icon}</span>
            {title}
          </button>
        ) : (
          <div className="flex items-center gap-2 text-base font-semibold text-ink">
            <span>{icon}</span>
            {title}
          </div>
        )}
        {action}
      </div>
      {abierto && children}
    </div>
  );
}
