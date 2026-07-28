import { useEffect, useState } from "react";
import { useApp } from "../context/AppContext.jsx";
import { useT } from "../i18n/useT.js";

/**
 * Indicador global de conexión y respaldo.
 *
 * Props:
 *  - prominent {boolean}  variante más legible para anclar en vista Día móvil.
 */
export default function SyncStatus({ prominent = false }) {
  const { lastSavedAt, pendingChanges, durableSaveFailed } = useApp();
  const t = useT();
  const [online, setOnline] = useState(typeof navigator !== "undefined" ? navigator.onLine : true);

  useEffect(() => {
    const goOnline = () => setOnline(true);
    const goOffline = () => setOnline(false);
    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);
    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  const hora = lastSavedAt
    ? new Date(lastSavedAt).toLocaleTimeString("es-CR", { hour: "2-digit", minute: "2-digit" })
    : null;

  const guardadoParcial = durableSaveFailed && pendingChanges === 0;

  const label = pendingChanges > 0
    ? t("sync.guardando")
    : guardadoParcial
    ? t("sync.guardadoParcial", { hora: hora ?? "" })
    : hora
    ? t("sync.guardado", { hora })
    : t("sync.sinRespaldo");

  const ariaLabel = `${online ? t("sync.enLinea") : t("sync.sinConexion")} · ${label}`;

  if (prominent) {
    return (
      <span
        role="status"
        aria-label={ariaLabel}
        title={ariaLabel}
        className={`inline-flex min-h-touch w-full items-center justify-center gap-2 rounded-xl border px-3 py-2 text-sm font-semibold ${
          guardadoParcial || !online
            ? "border-warning/40 bg-warning-soft text-warning-fg"
            : "border-line bg-surface text-ink-muted"
        }`}
      >
        <span
          aria-hidden="true"
          className={`h-2.5 w-2.5 shrink-0 rounded-full ${
            pendingChanges > 0
              ? "animate-pulse bg-info"
              : guardadoParcial || !online
              ? "bg-warning"
              : "bg-ok"
          }`}
        />
        <span className="truncate">{label}</span>
        {!online && <span className="shrink-0 text-xs font-bold uppercase tracking-wide">{t("sync.sinConexion")}</span>}
      </span>
    );
  }

  return (
    <span
      role="status"
      aria-label={ariaLabel}
      title={ariaLabel}
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium sm:text-sm ${
        guardadoParcial
          ? "border-warning/40 bg-warning-soft text-warning-fg"
          : online
          ? "border-line bg-surface text-ink-muted"
          : "border-warning/40 bg-warning-soft text-warning-fg"
      }`}
    >
      <span
        aria-hidden="true"
        className={`h-2 w-2 shrink-0 rounded-full ${
          pendingChanges > 0
            ? "animate-pulse bg-info"
            : guardadoParcial
            ? "bg-warning"
            : online
            ? "bg-ok"
            : "bg-warning"
        }`}
      />
      <span className="hidden sm:inline">{label}</span>
      {hora && <span className="sm:hidden">{hora}</span>}
    </span>
  );
}
