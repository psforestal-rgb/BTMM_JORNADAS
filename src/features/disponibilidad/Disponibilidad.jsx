import Card from "../../ui/Card.jsx";
import Badge from "../../ui/Badge.jsx";
import Avatar from "../../ui/Avatar.jsx";
import { faltan, fecha } from "../../domain/fechas.js";
import { useT } from "../../i18n/useT.js";
import EmptyState from "../../ui/EmptyState.jsx";
import ModalFuncionario from "../funcionarios/ModalFuncionario.jsx";

export default function Disponibilidad({ personas, setPersonas }) {
  const t = useT();
  const [q, setQ] = useState("");
  const [estado, setEstado] = useState("todos");
  const [modal, setModal] = useState(null);
  const visibles = useMemo(() => personas.filter((f) => {
    if (q && !`${f.nombre} ${f.puesto} ${f.puestoOperativo} ${f.contrato}`.toLocaleLowerCase().includes(q.toLocaleLowerCase())) return false;
    if (estado === "activos") return f.estado !== "Inactivo";
    if (estado === "inactivos") return f.estado === "Inactivo";
    if (estado === "porVencer") { const d = faltan(f.vencimiento); return d !== null && d <= 60; }
    return true;
  }).sort((a, b) => (a.vencimiento || "9999").localeCompare(b.vencimiento || "9999") || a.nombre.localeCompare(b.nombre)), [personas, q, estado]);
  const con = visibles.filter((f) => f.disponibilidad);
  const sin = visibles.filter((f) => !f.disponibilidad);
  const guardar = (obj) => {
    setPersonas((prev) => prev.map((p) => p.id === obj.id ? obj : p));
    setModal(null);
  };
  const lista = (arr) => (
    <div className="divide-y divide-slate-200">
      {arr.map((f) => {
        const d = faltan(f.vencimiento);
        return (
          <div key={f.id} className="flex items-center gap-3 py-3">
            <Avatar name={f.nombre} />
            <div className="min-w-0 flex-1">
              <div className="font-semibold">{f.nombre}</div>
              <div className="text-xs text-slate-500">
                {f.contrato || f.puesto} · {f.vencimiento ? `vence ${fecha(f.vencimiento)}` : f.condicion}
              </div>
            </div>
            <Badge
              className={
                d !== null && d <= 60
                  ? "border-orange-200 bg-orange-100 text-orange-900"
                  : "border-slate-200 bg-slate-100 text-slate-700"
              }
            >
              {d === null ? t("disponibilidad.sinContrato") : t("disponibilidad.nDias", { n: d })}
            </Badge>
            {setPersonas && <button type="button" onClick={() => setModal({ ...f })} className="min-h-touch rounded-xl border border-slate-300 bg-white px-3 text-sm font-semibold text-blue-800">Editar</button>}
          </div>
        );
      })}
    </div>
  );
  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:flex-row">
        <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar funcionario o puesto" className="min-h-touch min-w-0 flex-1 rounded-xl border border-slate-300 px-3 text-sm" />
        <select value={estado} onChange={(e) => setEstado(e.target.value)} aria-label="Filtrar disponibilidad" className="min-h-touch rounded-xl border border-slate-300 bg-white px-3 text-sm"><option value="todos">Todos</option><option value="activos">Activos</option><option value="inactivos">Inactivos</option><option value="porVencer">Vence en 60 días</option></select>
      </div>
      <div className="grid gap-4 xl:grid-cols-2">
      <Card
        title={t("disponibilidad.activosTitulo")}
        icon="🛡️"
        action={<Badge className="border-emerald-200 bg-emerald-100 text-emerald-900">{con.length}</Badge>}
      >
        {con.length ? lista(con) : <EmptyState icon="search" title="Sin disponibilidades" description="No hay registros que coincidan con los filtros." />}
        <div className="mt-4 rounded-xl bg-slate-50 p-3 text-sm text-slate-600">
          <strong>Control:</strong> {t("disponibilidad.controlNota").replace(/^Control:\s*/, "")}
        </div>
      </Card>
      <Card
        title={t("disponibilidad.sinActivosTitulo")}
        icon="🛡️"
        action={<Badge className="border-slate-200 bg-slate-100 text-slate-700">{sin.length}</Badge>}
      >
        {sin.length ? lista(sin) : <EmptyState icon="search" title="Sin resultados" description="No hay funcionarios sin disponibilidad con estos filtros." />}
      </Card>
      </div>
      {modal && <ModalFuncionario valor={modal} cerrar={() => setModal(null)} guardar={guardar} />}
    </section>
  );
}
import { useMemo, useState } from "react";
