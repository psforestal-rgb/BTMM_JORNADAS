import { useState } from "react";
import Badge from "../../ui/Badge.jsx";
import Icon from "../../ui/Icon.jsx";
import { fecha } from "../../domain/fechas.js";
import { estadoReposicion, saldoHoras, cuotasDe } from "../../domain/reposicion.js";
import { useT } from "../../i18n/useT.js";
import { magnitudLabel, saldoTexto } from "./etiquetas.js";

const ESTADO_CLS = {
  Pendiente: "border-amber-300 bg-amber-100 text-amber-900",
  Parcial: "border-indigo-300 bg-indigo-100 text-indigo-900",
  Repuesto: "border-emerald-200 bg-emerald-100 text-emerald-900",
};

export default function ReposicionCard({ registro, hj, onReponer, onEditar, onReabrir, onEliminar }) {
  const t = useT();
  const [menuOpen, setMenuOpen] = useState(false);
  const estado = estadoReposicion(registro, hj);
  const saldo = saldoHoras(registro, hj);
  const cuotas = cuotasDe(registro);
  const ultimaCuota = cuotas[cuotas.length - 1];

  return (
    <article className="rounded-lg border border-line bg-surface p-4">
      <header className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="break-words text-base font-semibold text-ink">{registro.funcionario || "—"}</h3>
          <p className="mt-0.5 font-mono text-xs text-ink-muted">{registro.folio || "—"}</p>
        </div>
        <Badge className={ESTADO_CLS[estado]}>{t(`reposicion.estado.${estado}`)}</Badge>
      </header>

      <dl className="mt-3 grid gap-2 text-sm">
        <div className="flex justify-between gap-3"><dt className="text-ink-muted">{t("reposicion.th.fecha")}</dt><dd className="text-right font-semibold text-ink">{fecha(registro.fecha)}</dd></div>
        <div className="flex justify-between gap-3"><dt className="text-ink-muted">{t("reposicion.th.tipoDia")}</dt><dd className="text-right text-ink">{registro.tipoDia}</dd></div>
        <div className="flex justify-between gap-3"><dt className="text-ink-muted">{t("reposicion.th.motivo")}</dt><dd className="max-w-[65%] text-right font-semibold text-ink">{registro.motivo}{registro.motivoDetalle ? ` · ${registro.motivoDetalle}` : ""}</dd></div>
        <div className="flex justify-between gap-3"><dt className="text-ink-muted">{t("reposicion.th.tiempo")}</dt><dd className="text-right font-semibold text-ink">{magnitudLabel(registro, t)}</dd></div>
        <div className="flex justify-between gap-3"><dt className="text-ink-muted">{t("reposicion.saldoCorto")}</dt><dd className="text-right font-semibold text-warning">{saldoTexto(saldo, hj)}</dd></div>
        {ultimaCuota && <div className="flex justify-between gap-3"><dt className="text-ink-muted">{t("reposicion.ultimaReposicion")}</dt><dd className="text-right text-ink">{fecha(ultimaCuota.fecha)}</dd></div>}
      </dl>

      {registro.observaciones && (
        <p className="mt-3 whitespace-pre-wrap break-words rounded-xl bg-surface-alt p-3 text-sm text-ink-muted">
          <strong className="text-ink">{t("modalReposicion.obs")}:</strong> {registro.observaciones}
        </p>
      )}

      <footer className="mt-4 flex items-center gap-2">
        {saldo > 0 && (
          <button type="button" onClick={onReponer} className="inline-flex min-h-touch flex-1 items-center justify-center gap-2 rounded-xl bg-brand px-4 text-sm font-semibold text-brand-fg">
            <Icon name="refresh" size={18} /> {t("reposicion.reponer")}
          </button>
        )}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          className="inline-flex min-h-touch min-w-touch items-center justify-center rounded-xl border border-line bg-surface-alt text-ink"
        >
          <Icon name="menu" size={20} label={t("reposicion.masAcciones")} />
        </button>
      </footer>

      {menuOpen && (
        <div className="mt-2 grid gap-2 rounded-xl border border-line bg-surface-alt p-2">
          <button type="button" onClick={onEditar} className="min-h-touch rounded-lg bg-surface px-3 text-left text-sm font-semibold text-info-fg">{t("acciones.editar")}</button>
          {cuotas.length > 0 && <button type="button" onClick={onReabrir} className="min-h-touch rounded-lg bg-surface px-3 text-left text-sm font-semibold text-warning-fg">{t("reposicion.reabrir")}</button>}
          <button type="button" onClick={onEliminar} className="min-h-touch rounded-lg bg-surface px-3 text-left text-sm font-semibold text-critical-fg">{t("acciones.eliminar")}</button>
        </div>
      )}
    </article>
  );
}
