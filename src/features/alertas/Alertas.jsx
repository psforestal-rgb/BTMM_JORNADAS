import Card from "../../ui/Card.jsx";
import Badge from "../../ui/Badge.jsx";
import AlertItem from "../../ui/AlertItem.jsx";
import { useT } from "../../i18n/useT.js";
import { useSessionState } from "../../lib/useSessionState.js";

export default function Alertas({ alerts, setView }) {
  const t = useT();
  const [filtro, setFiltro] = useState("todas");
  const [revisadas, setRevisadas] = useSessionState("btmm:alertas:revisadas", []);
  const alertasConId = useMemo(() => alerts.map((a, i) => ({ ...a, _id: `${a.t}:${a.msg}:${i}` })), [alerts]);
  const visibles = alertasConId.filter((a) => filtro === "todas" || (filtro === "pendientes" ? !revisadas.includes(a._id) : a.t === filtro));
  const toggle = (id) => setRevisadas((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
  const destino = (a) => /repos|jornada/i.test(`${a.msg} ${a.sub}`) ? "reposicion" : /actividad|viático/i.test(`${a.msg} ${a.sub}`) ? "planificacion" : /contrato|dispon/i.test(`${a.msg} ${a.sub}`) ? "disponibilidad" : "funcionarios";
  const semaforo = [
    ["🟢", t("alertas.semaforo.verde")],
    ["🟡", t("alertas.semaforo.amarillo")],
    ["🟠", t("alertas.semaforo.naranja")],
    ["🔴", t("alertas.semaforo.rojo")],
    ["🔵", t("alertas.semaforo.azul")],
  ];
  return (
    <section className="space-y-4">
      <Card
        title={t("alertas.titulo", { n: alerts.length })}
        icon="🔔"
        action={<Badge className="border-orange-200 bg-orange-100 text-orange-900">{alertasConId.length - revisadas.filter((id) => alertasConId.some((a) => a._id === id)).length} pendientes</Badge>}
      >
        <div className="mb-4 flex snap-x gap-2 overflow-x-auto pb-1" role="group" aria-label="Filtrar alertas">
          {[["todas","Todas"],["pendientes","No revisadas"],["danger","Críticas"],["warn","Advertencias"],["info","Informativas"]].map(([id,label]) => <button key={id} type="button" onClick={() => setFiltro(id)} aria-pressed={filtro === id} className={`min-h-touch shrink-0 rounded-xl px-3 text-xs font-semibold ${filtro === id ? "bg-slate-900 text-white" : "border border-slate-300 bg-white"}`}>{label}</button>)}
        </div>
        <div className="space-y-2">
          {visibles.map((a) => (
            <AlertItem key={a._id} a={a} reviewed={revisadas.includes(a._id)} onReview={() => toggle(a._id)} onOpen={setView ? () => setView(destino(a)) : undefined} />
          ))}
          {!visibles.length && <p className="rounded-xl border border-dashed border-slate-300 p-6 text-center text-sm text-slate-500">No hay alertas en este filtro.</p>}
        </div>
      </Card>
      <Card title={t("alertas.semaforoTitulo")} icon="🚦">
        <div className="grid gap-3 md:grid-cols-5">
          {semaforo.map(([s, txt]) => (
            <div key={txt} className="rounded-xl bg-slate-50 p-3">
              <div className="text-xl">{s}</div>
              <div className="mt-1 text-sm font-semibold">{txt}</div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
import { useMemo, useState } from "react";
