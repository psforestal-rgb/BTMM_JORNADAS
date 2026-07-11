import { useState } from "react";
import Avatar from "../../ui/Avatar.jsx";
import Badge from "../../ui/Badge.jsx";
import EmptyState from "../../ui/EmptyState.jsx";
import { fecha } from "../../domain/fechas.js";
import { estadoReposicion, saldoHoras, cuotasDe, HORAS_JORNADA_DEFAULT } from "../../domain/reposicion.js";
import { useT } from "../../i18n/useT.js";
import { magnitudLabel, saldoTexto } from "./etiquetas.js";

const ESTADO_CLS = {
  Pendiente: "border-amber-300 bg-amber-100 text-amber-900",
  Parcial: "border-indigo-300 bg-indigo-100 text-indigo-900",
  Repuesto: "border-emerald-200 bg-emerald-100 text-emerald-900",
};

/**
 * Historial por funcionario: cuántas veces se le ha tenido que hacer
 * trabajar fuera de su rol, cuánto tiempo, qué está pendiente de reponer y
 * qué ya se repuso. Cada tarjeta es expandible para ver el detalle de los
 * registros con su folio (que enlaza día trabajado ↔ día de reposición).
 */
export default function HistorialFuncionario({ historial, hj = HORAS_JORNADA_DEFAULT, onEdit }) {
  const t = useT();
  const [abierto, setAbierto] = useState({});

  if (!historial.length) {
    return (
      <EmptyState
        icon="refresh"
        title={t("reposicion.historial.vacioTitulo")}
        description={t("reposicion.historial.vacioDesc")}
      />
    );
  }

  return (
    <div className="space-y-3">
      {historial.map((fila) => {
        const open = !!abierto[fila.funcionario];
        return (
          <div key={fila.funcionario} className="rounded-lg border border-slate-200 bg-white">
            <button
              type="button"
              onClick={() => setAbierto((p) => ({ ...p, [fila.funcionario]: !p[fila.funcionario] }))}
              aria-expanded={open}
              className="flex w-full items-center gap-3 p-4 text-left"
            >
              <Avatar name={fila.funcionario} />
              <div className="min-w-0 flex-1">
                <div className="font-semibold text-slate-900">{fila.funcionario}</div>
                <div className="mt-0.5 flex flex-wrap gap-1.5">
                  <Badge className="border-slate-200 bg-slate-100 text-slate-700">
                    {t("reposicion.historial.veces", { n: fila.total })}
                  </Badge>
                  {fila.pendientes > 0 && (
                    <Badge className="border-amber-300 bg-amber-100 text-amber-900">
                      {t("reposicion.historial.pendientesN", { n: fila.pendientes })}
                    </Badge>
                  )}
                  {fila.repuestos > 0 && (
                    <Badge className="border-emerald-200 bg-emerald-100 text-emerald-900">
                      {t("reposicion.historial.repuestosN", { n: fila.repuestos })}
                    </Badge>
                  )}
                </div>
              </div>
              {fila.saldoHoras > 0 && (
                <span className="shrink-0 rounded-xl border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-bold text-amber-900">
                  {t("reposicion.historial.saldoFavor", { saldo: saldoTexto(fila.saldoHoras, hj) })}
                </span>
              )}
              <span aria-hidden="true" className="shrink-0 text-slate-400">
                {open ? "▲" : "▼"}
              </span>
            </button>

            {open && (
              <div className="border-t border-slate-100">
                <ol className="space-y-3 p-3 md:hidden">
                  {fila.registros.map((r) => {
                    const est = estadoReposicion(r, hj);
                    const saldo = saldoHoras(r, hj);
                    const cuotas = cuotasDe(r);
                    return (
                      <li key={`mobile-${r.id}`} className="relative border-l-2 border-line pl-4">
                        <span aria-hidden="true" className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-brand" />
                        <div className="rounded-xl bg-surface-alt p-3">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <p className="text-sm font-semibold text-ink">{fecha(r.fecha)}</p>
                              <p className="font-mono text-xs text-ink-muted">{r.folio || "—"}</p>
                            </div>
                            <Badge className={ESTADO_CLS[est]}>{t(`reposicion.estado.${est}`)}</Badge>
                          </div>
                          <p className="mt-2 text-sm font-semibold text-ink">{r.motivo} · {magnitudLabel(r, t)}</p>
                          <p className="mt-1 text-sm text-ink-muted">{r.tipoDia}</p>
                          {r.observaciones && <p className="mt-2 whitespace-pre-wrap text-sm text-ink-muted">{r.observaciones}</p>}
                          {cuotas.map((c) => (
                            <p key={c.id} className="mt-2 rounded-lg bg-ok-soft p-2 text-sm text-ok-fg">
                              {t("reposicion.historial.cuota", { fecha: fecha(c.fecha), cantidad: magnitudLabel(c, t) })}
                            </p>
                          ))}
                          {saldo > 0 && <p className="mt-2 text-sm font-semibold text-warning-fg">{t("reposicion.saldoLabel", { saldo: saldoTexto(saldo, hj) })}</p>}
                          {onEdit && <button type="button" onClick={() => onEdit(r)} className="mt-3 min-h-touch w-full rounded-xl border border-line bg-surface text-sm font-semibold text-info-fg">{t("acciones.editar")}</button>}
                        </div>
                      </li>
                    );
                  })}
                </ol>
                <div className="hidden overflow-auto md:block">
                <table className="min-w-[640px] w-full border-collapse text-sm">
                  <thead className="bg-slate-50 text-left text-[11px] uppercase tracking-wider text-slate-500">
                    <tr>
                      <th className="p-2.5">{t("reposicion.th.folio")}</th>
                      <th className="p-2.5">{t("reposicion.th.fecha")}</th>
                      <th className="p-2.5">{t("reposicion.th.tipoDia")}</th>
                      <th className="p-2.5">{t("reposicion.th.motivo")}</th>
                      <th className="p-2.5">{t("reposicion.th.tiempo")}</th>
                      <th className="p-2.5">{t("reposicion.th.estado")}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {fila.registros.map((r) => {
                      const est = estadoReposicion(r, hj);
                      const saldo = saldoHoras(r, hj);
                      const cuotas = cuotasDe(r);
                      return (
                      <tr key={r.id}>
                        <td className="p-2.5 whitespace-nowrap">
                          <Badge bordered className="border-slate-300 bg-white font-mono text-slate-700">{r.folio || "—"}</Badge>
                        </td>
                        <td className="p-2.5 whitespace-nowrap">{fecha(r.fecha)}</td>
                        <td className="p-2.5">{r.tipoDia}</td>
                        <td className="p-2.5">{r.motivo}</td>
                        <td className="p-2.5 whitespace-nowrap">{magnitudLabel(r, t)}</td>
                        <td className="p-2.5">
                          <Badge className={ESTADO_CLS[est]}>{t(`reposicion.estado.${est}`)}</Badge>
                          {saldo > 0 ? (
                            <div className="mt-0.5 text-[11px] font-semibold text-amber-800">
                              {t("reposicion.saldoLabel", { saldo: saldoTexto(saldo, hj) })}
                            </div>
                          ) : (
                            cuotas.length > 0 && (
                              <div className="mt-0.5 text-[11px] text-slate-500">
                                {t("reposicion.repuestoEl", { fecha: fecha(cuotas[cuotas.length - 1].fecha) })}
                              </div>
                            )
                          )}
                        </td>
                      </tr>
                      );
                    })}
                  </tbody>
                </table>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
