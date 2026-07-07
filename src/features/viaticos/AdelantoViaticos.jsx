import { useState } from "react";
import Card from "../../ui/Card.jsx";
import Badge from "../../ui/Badge.jsx";
import Avatar from "../../ui/Avatar.jsx";
import EmptyState from "../../ui/EmptyState.jsx";
import { meses } from "../../data/calendario.js";
import { dim, fecha, pad2 } from "../../domain/fechas.js";
import { useApp } from "../../context/AppContext.jsx";
import { useT } from "../../i18n/useT.js";
import { useSessionState } from "../../lib/useSessionState.js";

export default function AdelantoViaticos({ actividadesPlan, personas, setView }) {
  const t = useT();
  const [vista, setVista] = useState("funcionario");
  const [periodoOffset, setPeriodoOffset] = useSessionState("btmm:viaticos:periodo", 0);
  const [q, setQ] = useState("");
  const { reglas } = useApp();
  const diaCorte = reglas?.diaCorteViaticos ?? 15;
  const mesObjetivoConfig = reglas?.mesObjetivoViaticos ?? "siguiente";
  const permitirConsulta = reglas?.permitirConsultaDespuesCierre ?? true;

  const hoy = new Date();
  const enMesSiguiente = mesObjetivoConfig === "siguiente";
  const mesBase = enMesSiguiente
    ? hoy.getMonth() === 11 ? 0 : hoy.getMonth() + 1
    : hoy.getMonth();
  const anoBase = enMesSiguiente
    ? hoy.getMonth() === 11 ? hoy.getFullYear() + 1 : hoy.getFullYear()
    : hoy.getFullYear();
  const fechaObjetivo = new Date(anoBase, mesBase + periodoOffset, 1, 12);
  const mesObjetivo = fechaObjetivo.getMonth();
  const anoObjetivo = fechaObjetivo.getFullYear();
  const plazoAbierto = hoy.getDate() <= diaCorte;
  const inicioMes = `${anoObjetivo}-${pad2(mesObjetivo + 1)}-01`;
  const finMes = `${anoObjetivo}-${pad2(mesObjetivo + 1)}-${pad2(dim(anoObjetivo, mesObjetivo))}`;
  const actividades = actividadesPlan
    .filter((a) => a.viatico && a.inicio <= finMes && (a.fin || a.inicio) >= inicioMes)
    .filter((a) => !q || `${a.titulo} ${a.lugar} ${a.funcionarios.join(" ")}`.toLocaleLowerCase().includes(q.toLocaleLowerCase()))
    .sort((a, b) => a.inicio.localeCompare(b.inicio) || a.titulo.localeCompare(b.titulo));
  const nombreMes = `${meses[mesObjetivo]} ${anoObjetivo}`;
  const mostrarListado = plazoAbierto || permitirConsulta;
  const registrosFuncionario = personas
    .filter((p) => actividades.some((a) => a.funcionarios.includes(p.nombre)))
    .map((p) => ({ funcionario: p, actividades: actividades.filter((a) => a.funcionarios.includes(p.nombre)) }))
    .sort((a, b) => a.funcionario.nombre.localeCompare(b.funcionario.nombre));
  const rango = (a) => (a.inicio === (a.fin || a.inicio) ? fecha(a.inicio) : `${fecha(a.inicio)} al ${fecha(a.fin)}`);
  const resumen = `${nombreMes}: ${actividades.length} actividades con viático, ${new Set(actividades.flatMap((a) => a.funcionarios)).size} funcionarios.`;
  const compartir = async () => {
    if (navigator.share) await navigator.share({ title: `Viáticos ${nombreMes}`, text: resumen });
    else await navigator.clipboard?.writeText(resumen);
  };
  const exportar = () => {
    const csv = ["Actividad,Inicio,Fin,Lugar,Funcionarios", ...actividades.map((a) => [a.titulo, a.inicio, a.fin || a.inicio, a.lugar || "", a.funcionarios.join(" | ")].map((v) => `"${String(v).replaceAll('"','""')}"`).join(","))].join("\n");
    const url = URL.createObjectURL(new Blob(["\ufeff", csv], { type: "text/csv;charset=utf-8" }));
    const link = document.createElement("a"); link.href = url; link.download = `viaticos-${anoObjetivo}-${pad2(mesObjetivo + 1)}.csv`; link.click(); URL.revokeObjectURL(url);
  };
  return (
    <section className="space-y-4">
      <Card
        title={t("viaticos.titulo", { nombreMes })}
        icon="💵"
        action={
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setVista("funcionario")}
              className={`min-h-touch rounded-xl border px-3 py-2 text-xs font-bold ${
                vista === "funcionario" ? "border-emerald-800 bg-emerald-800 text-white" : "border-slate-300 bg-white text-slate-700"
              }`}
            >
              {t("viaticos.porFuncionario")}
            </button>
            <button
              onClick={() => setVista("actividad")}
              className={`min-h-touch rounded-xl border px-3 py-2 text-xs font-bold ${
                vista === "actividad" ? "border-emerald-800 bg-emerald-800 text-white" : "border-slate-300 bg-white text-slate-700"
              }`}
            >
              {t("viaticos.porActividad")}
            </button>
          </div>
        }
      >
        <div className="mb-4 flex flex-wrap items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-2">
          <button type="button" onClick={() => setPeriodoOffset((n) => n - 1)} aria-label="Periodo anterior" className="min-h-touch min-w-touch rounded-xl border border-slate-300 bg-white">←</button>
          <strong className="min-w-0 flex-1 text-center text-sm">{nombreMes}</strong>
          <button type="button" onClick={() => setPeriodoOffset((n) => n + 1)} aria-label="Periodo siguiente" className="min-h-touch min-w-touch rounded-xl border border-slate-300 bg-white">→</button>
          <button type="button" onClick={() => setPeriodoOffset(0)} className="min-h-touch rounded-xl px-3 text-sm font-semibold text-emerald-800">Periodo actual</button>
        </div>
        <div className="mb-4 grid gap-2 sm:grid-cols-[1fr_auto_auto_auto]">
          <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar actividad, lugar o persona" className="min-h-touch rounded-xl border border-slate-300 px-3 text-sm" />
          <button type="button" onClick={exportar} className="min-h-touch rounded-xl border border-slate-300 bg-white px-3 text-sm font-semibold">Exportar CSV</button>
          <button type="button" onClick={compartir} className="min-h-touch rounded-xl border border-slate-300 bg-white px-3 text-sm font-semibold">Compartir</button>
          {setView && <button type="button" onClick={() => setView("planificacion")} className="min-h-touch rounded-xl bg-emerald-800 px-3 text-sm font-semibold text-white">Abrir planificación</button>}
        </div>
        <div className="mb-4 grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-orange-50 p-3"><div className="text-xs font-semibold text-orange-800">Actividades</div><div className="text-2xl font-bold text-orange-950">{actividades.length}</div></div>
          <div className="rounded-xl bg-orange-50 p-3"><div className="text-xs font-semibold text-orange-800">Funcionarios</div><div className="text-2xl font-bold text-orange-950">{new Set(actividades.flatMap((a) => a.funcionarios)).size}</div></div>
        </div>
        <div
          className={`mb-4 rounded-2xl border p-4 text-sm ${
            plazoAbierto ? "border-emerald-200 bg-emerald-50 text-emerald-950" : "border-red-200 bg-red-50 text-red-950"
          }`}
        >
          {plazoAbierto ? (
            <>
              <strong>{t("viaticos.plazoAbierto")}</strong> {t("viaticos.plazoAbiertoSub", { dia: diaCorte })}
            </>
          ) : (
            <>
              <strong>{t("viaticos.plazoCerrado")}</strong> {t("viaticos.plazoCerradoSub", { dia: diaCorte })}
            </>
          )}
          <div className="mt-1 text-xs font-bold opacity-80">
            {t("viaticos.pie", {
              nombreMes,
              dia: diaCorte,
              referencia: enMesSiguiente ? t("viaticos.referenciaAnterior") : t("viaticos.referenciaEnCurso"),
            })}
          </div>
        </div>
        {!mostrarListado ? (
          <EmptyState
            icon="banknote"
            title={t("viaticos.ocultoTitulo")}
            description={t("viaticos.ocultoDesc", { dia: diaCorte })}
            tone="warning"
          />
        ) : actividades.length === 0 ? (
          <EmptyState
            icon="banknote"
            title={t("viaticos.sinActividadesTitulo")}
            description={t("viaticos.sinActividadesDesc", { nombreMes })}
            tone="neutral"
          />
        ) : vista === "funcionario" ? (
          <div className="grid gap-3 xl:grid-cols-2">
            {registrosFuncionario.map(({ funcionario, actividades }) => (
              <div key={funcionario.id} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="mb-3 flex items-center gap-3">
                  <Avatar name={funcionario.nombre} />
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold">{funcionario.nombre}</div>
                    <div className="text-xs font-bold text-slate-500">
                      {funcionario.puestoOperativo} · {funcionario.puesto}
                    </div>
                  </div>
                  <Badge className="border-orange-200 bg-orange-100 text-orange-900">{actividades.length}</Badge>
                </div>
                <div className="space-y-2">
                  {actividades.map((a) => (
                    <div key={a.id} className="rounded-xl border border-orange-200 bg-orange-50 p-3 text-orange-950">
                      <div className="text-sm font-semibold">{a.titulo}</div>
                      <div className="mt-1 text-xs font-bold">
                        {rango(a)} · {a.lugar || t("dia.sinLugar")}
                      </div>
                      {a.observaciones && <div className="mt-1 text-xs opacity-80">{a.observaciones}</div>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {actividades.map((a) => (
              <div key={a.id} className="rounded-2xl border border-orange-200 bg-orange-50 p-4 text-orange-950 shadow-sm">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="text-base font-semibold">{a.titulo}</div>
                    <div className="mt-1 text-sm font-bold">
                      {rango(a)} · {a.lugar || t("dia.sinLugar")}
                    </div>
                  </div>
                  <Badge className="border-orange-300 bg-orange-200 text-orange-950">
                    {t("viaticos.nFuncionarios", { n: a.funcionarios.length })}
                  </Badge>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {a.funcionarios.map((n) => (
                    <span
                      key={n}
                      className="rounded-full border border-orange-300 bg-white px-3 py-1 text-xs font-bold text-orange-950"
                    >
                      {n}
                    </span>
                  ))}
                </div>
                {a.observaciones && <div className="mt-3 rounded-xl bg-white/70 p-3 text-xs font-bold opacity-90">{a.observaciones}</div>}
              </div>
            ))}
          </div>
        )}
      </Card>
    </section>
  );
}
