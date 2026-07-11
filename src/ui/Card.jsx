import { useState } from "react";
import Icon from "./Icon.jsx";

export default function Card({ title, icon, action, children, collapsible = false, defaultOpen = true, bordered = true }) {
  const [open, setOpen] = useState(defaultOpen);
  const abierto = !collapsible || open;
  return (
    <div className={`pnlq-card rounded-2xl bg-white p-5 shadow-sm ${bordered ? "border border-slate-300" : ""}`}>
      <div className={`pnlq-card-header flex flex-wrap items-center justify-between gap-3 ${abierto ? "mb-4" : ""}`}>
        {collapsible ? (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="flex min-h-touch flex-1 items-center gap-2 text-left text-base font-semibold text-slate-950 hover:text-emerald-900"
          >
            <Icon name={open ? "chevronDown" : "chevronRight"} size={18} className="shrink-0 text-slate-400" />
            <span>{icon}</span>
            {title}
          </button>
        ) : (
          <div className="flex items-center gap-2 text-base font-semibold">
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
