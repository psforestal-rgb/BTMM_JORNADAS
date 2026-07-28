/**
 * Resumen compacto de la vista Día para móvil:
 * tres cifras grandes + acceso a alertas y ayuda.
 */
import Icon from "../../ui/Icon.jsx";
import { useT } from "../../i18n/useT.js";

export default function DiaResumenMovil({
  enTurno,
  sinActividad,
  nAlertas = 0,
  onIrAlertas,
  onAyuda,
}) {
  const t = useT();
  return (
    <div className="space-y-3 md:hidden">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-base font-bold text-ink">{t("dia.resumenTitulo")}</h2>
        <button
          type="button"
          onClick={onAyuda}
          aria-label={t("dia.ayudaAria")}
          className="inline-flex min-h-touch min-w-touch items-center justify-center rounded-xl border border-line bg-surface text-ink-muted hover:bg-surface-alt"
        >
          <Icon name="info" size={22} />
        </button>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className="rounded-xl border border-ok/30 bg-ok-soft px-2 py-3 text-center">
          <div className="text-3xl font-bold tabular-nums text-ok-fg">{enTurno}</div>
          <div className="mt-1 text-sm font-semibold leading-tight text-ok-fg">{t("dia.resumenEnTurno")}</div>
        </div>
        <div className={`rounded-xl border px-2 py-3 text-center ${sinActividad > 0 ? "border-warning/40 bg-warning-soft" : "border-line bg-surface"}`}>
          <div className={`text-3xl font-bold tabular-nums ${sinActividad > 0 ? "text-warning-fg" : "text-ink-muted"}`}>{sinActividad}</div>
          <div className={`mt-1 text-sm font-semibold leading-tight ${sinActividad > 0 ? "text-warning-fg" : "text-ink-muted"}`}>{t("dia.resumenSinActividad")}</div>
        </div>
        <button
          type="button"
          onClick={onIrAlertas}
          className={`rounded-xl border px-2 py-3 text-center active:scale-95 ${nAlertas > 0 ? "border-critical/40 bg-critical-soft" : "border-line bg-surface"}`}
        >
          <div className={`text-3xl font-bold tabular-nums ${nAlertas > 0 ? "text-critical-fg" : "text-ink-muted"}`}>{nAlertas}</div>
          <div className={`mt-1 text-sm font-semibold leading-tight ${nAlertas > 0 ? "text-critical-fg" : "text-ink-muted"}`}>{t("dia.resumenAlertas")}</div>
        </button>
      </div>

      {sinActividad > 0 && (
        <p className="text-sm leading-relaxed text-ink-muted">{t("dia.resumenPistaSinActividad")}</p>
      )}
    </div>
  );
}
