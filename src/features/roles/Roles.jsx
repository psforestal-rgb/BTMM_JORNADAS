import { useState } from "react";
import Card from "../../ui/Card.jsx";
import Badge from "../../ui/Badge.jsx";
import Icon from "../../ui/Icon.jsx";
import { meses } from "../../data/calendario.js";
import { puestos } from "../../data/puestos.js";
import { dim } from "../../domain/fechas.js";
import { useIsMobile } from "../../lib/responsive.js";
import { useT } from "../../i18n/useT.js";
import PuestoRolCard from "./PuestoRolCard.jsx";
import PuestoRolCardSemana from "./PuestoRolCardSemana.jsx";
import RolesPrintHeader, { RolesPrintFooter } from "./RolesPrintMatter.jsx";
import Modal from "../../ui/Modal.jsx";
import RolesDiaMobile from "./RolesDiaMobile.jsx";

export default function Roles({
  year,
  month,
  compact,
  roleData,
  setRoleData,
  personas,
  actividadesPlan,
  setActividadesPlan,
  reposiciones = [],
  hj,
}) {
  const t = useT();
  const [confirmarLimpieza, setConfirmarLimpieza] = useState(false);
  const days = Array.from({ length: dim(year, month) }, (_, i) => i + 1);
  const gruposRoles = puestos.map((p) => ({
    ...p,
    funcionarios: personas
      .filter((f) => (f.puestoOperativo || "Puesto Quetzales") === p.nombre && f.estado !== "Inactivo")
      .map((f) => f.nombre),
  }));
  const limpiarMes = () => {
    const pref = `${year}-${month + 1}-`;
    setRoleData((prev) =>
      Object.fromEntries(
        Object.entries(prev).filter(([k]) => !k.startsWith(pref) && !k.startsWith(`CFG-${year}-${month + 1}-`))
      )
    );
    setConfirmarLimpieza(false);
  };
  const isMobile = useIsMobile();
  const [vista, setVista] = useState(null);
  const [puestoActivo, setPuestoActivo] = useState(puestos[0]?.nombre || "");
  const [modoMovil, setModoMovil] = useState("funcionario");
  const vistaEfectiva = vista ?? (isMobile ? "semana" : "tabla");
  const grupoActivo = gruposRoles.find((grupo) => grupo.nombre === puestoActivo) || gruposRoles[0];
  const gruposVisibles = isMobile ? [grupoActivo].filter(Boolean) : gruposRoles;

  // La impresión siempre usa la tabla mensual (formato administrativo
  // tradicional), independientemente de la vista que el usuario tenga
  // activa en pantalla. Forzamos `vista=tabla` justo antes de imprimir.
  const handleImprimir = () => {
    if (vistaEfectiva !== "tabla") {
      setVista("tabla");
      // Esperar a que React re-renderice antes de abrir el diálogo.
      window.setTimeout(() => window.print(), 50);
    } else {
      window.print();
    }
  };

  return (
    <section className="space-y-4">
      <Card
        title={t("roles.titulo", { mes: meses[month], anio: year })}
        icon="📊"
        action={
          <div className="pnlq-no-print flex flex-wrap items-center gap-2">
            <div role="group" aria-label={t("roles.vistaAria")} className="inline-flex overflow-hidden rounded-xl border border-slate-300 bg-white">
              <button
                type="button"
                onClick={() => setVista("tabla")}
                aria-pressed={vistaEfectiva === "tabla"}
                className={`min-h-touch px-3 py-2 text-xs font-bold ${
                  vistaEfectiva === "tabla" ? "bg-emerald-800 text-white" : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {t("roles.vistaTabla")}
              </button>
              <button
                type="button"
                onClick={() => setVista("semana")}
                aria-pressed={vistaEfectiva === "semana"}
                className={`min-h-touch border-l border-slate-300 px-3 py-2 text-xs font-bold ${
                  vistaEfectiva === "semana" ? "bg-emerald-800 text-white" : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {t("roles.vistaSemana")}
              </button>
            </div>
            <button
              onClick={handleImprimir}
              className="inline-flex min-h-touch items-center gap-1 rounded-xl border border-emerald-700 bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-900 hover:bg-emerald-100"
              title={t("print.imprimir")}
            >
              <Icon name="file" size={14} />
              <span className="hidden sm:inline">{t("print.imprimir")}</span>
              <span className="sm:hidden">{t("print.imprimirCorto")}</span>
            </button>
            <button
              onClick={() => setConfirmarLimpieza(true)}
              className="min-h-touch rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
            >
              {t("roles.restaurar")}
            </button>
            <Badge className="border-emerald-200 bg-emerald-100 text-emerald-900">{t("roles.edicionFila")}</Badge>
          </div>
        }
      >
        {isMobile && grupoActivo && (
          <div className="pnlq-no-print mb-3 space-y-3">
            <div className="flex snap-x gap-2 overflow-x-auto pb-1" aria-label={t("rolesDia.puesto")}>
              {gruposRoles.map((grupo) => (
                <button
                  key={grupo.nombre}
                  type="button"
                  onClick={() => setPuestoActivo(grupo.nombre)}
                  aria-pressed={grupo.nombre === grupoActivo.nombre}
                  className={`min-h-touch shrink-0 snap-start rounded-xl px-4 text-sm font-semibold ${grupo.nombre === grupoActivo.nombre ? "bg-brand text-brand-fg" : "border border-line bg-surface text-ink"}`}
                >
                  {grupo.nombre.replace("Puesto ", "")}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 overflow-hidden rounded-xl border border-line">
              <button type="button" onClick={() => setModoMovil("funcionario")} aria-pressed={modoMovil === "funcionario"} className={`min-h-touch text-sm font-semibold ${modoMovil === "funcionario" ? "bg-brand text-brand-fg" : "bg-surface text-ink"}`}>{t("rolesDia.modoFuncionario")}</button>
              <button type="button" onClick={() => setModoMovil("dia")} aria-pressed={modoMovil === "dia"} className={`min-h-touch border-l border-line text-sm font-semibold ${modoMovil === "dia" ? "bg-brand text-brand-fg" : "bg-surface text-ink"}`}>{t("rolesDia.modoDia")}</button>
            </div>
          </div>
        )}
        <div className="pnlq-no-print mb-3 flex items-center gap-1.5 overflow-x-auto rounded-2xl border border-slate-200 bg-white px-2 py-1.5 text-[11px] font-semibold whitespace-nowrap shadow-sm">
          <span className="rounded-lg border border-emerald-300 bg-emerald-200 px-2 py-1 text-emerald-950">{t("roles.leyenda.turno")}</span>
          <span className="rounded-lg border border-amber-300 bg-amber-200 px-2 py-1 text-amber-950">{t("roles.leyenda.libre")}</span>
          <span className="rounded-lg border border-sky-300 bg-sky-200 px-2 py-1 text-sky-950">{t("roles.leyenda.vacaciones")}</span>
          <span className="rounded-lg border border-rose-300 bg-rose-200 px-2 py-1 text-rose-950">{t("roles.leyenda.incapacidad")}</span>
          <span className="rounded-lg border border-violet-300 bg-violet-200 px-2 py-1 text-violet-950">{t("roles.leyenda.otro")}</span>
        </div>
        {isMobile && modoMovil === "dia" && grupoActivo ? (
          <RolesDiaMobile
            grupos={gruposRoles}
            grupoActivo={grupoActivo}
            year={year}
            month={month}
            personas={personas}
            roleData={roleData}
            setRoleData={setRoleData}
          />
        ) : (
        <div className="space-y-6">
          {gruposVisibles.map((g, gi) => (
            <div key={`puesto-${g.nombre}`} className={`pnlq-print-page ${gi > 0 ? "pnlq-print-break-before" : ""}`}>
              <RolesPrintHeader mes={meses[month]} anio={year} puesto={g.nombre} />
              {vistaEfectiva === "semana" ? (
                <PuestoRolCardSemana
                  grupo={g}
                  year={year}
                  month={month}
                  roleData={roleData}
                  setRoleData={setRoleData}
                  personas={personas}
                  actividadesPlan={actividadesPlan}
                  setActividadesPlan={setActividadesPlan}
                  reposiciones={reposiciones}
                  hj={hj}
                />
              ) : (
                <PuestoRolCard
                  grupo={g}
                  gi={gi}
                  days={days}
                  year={year}
                  month={month}
                  compact={compact}
                  roleData={roleData}
                  setRoleData={setRoleData}
                  personas={personas}
                  actividadesPlan={actividadesPlan}
                  setActividadesPlan={setActividadesPlan}
                  reposiciones={reposiciones}
                  hj={hj}
                />
              )}
              <RolesPrintFooter />
            </div>
          ))}
        </div>
        )}
      </Card>
      <Modal
        open={confirmarLimpieza}
        onClose={() => setConfirmarLimpieza(false)}
        title={t("roles.restaurarTitulo")}
        description={t("roles.restaurarConfirm", { mes: meses[month], anio: year })}
        size="sm"
        actions={(
          <div className="ml-auto flex gap-2">
            <button type="button" onClick={() => setConfirmarLimpieza(false)} className="min-h-touch rounded-xl border border-line bg-surface px-4 text-sm font-semibold">
              {t("acciones.cancelar")}
            </button>
            <button type="button" onClick={limpiarMes} className="min-h-touch rounded-xl bg-critical px-4 text-sm font-semibold text-white">
              {t("roles.restaurar")}
            </button>
          </div>
        )}
      >
        <p className="text-sm text-ink-muted">{t("roles.restaurarNota")}</p>
      </Modal>
    </section>
  );
}
