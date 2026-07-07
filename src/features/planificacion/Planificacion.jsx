import { useRef, useState } from "react";
import Card from "../../ui/Card.jsx";
import Badge from "../../ui/Badge.jsx";
import { meses, diasLargos } from "../../data/calendario.js";
import { dim, pad2 } from "../../domain/fechas.js";
import { codigoRolFuncionario, esRolActivo } from "../../domain/roles.js";
import { conflictosActividadDia } from "../../domain/conflictos.js";
import { useFeriadosDelAno } from "../../lib/useFeriadosDelAno.js";
import { useIsMobile } from "../../lib/responsive.js";
import { useSessionState } from "../../lib/useSessionState.js";
import { useT } from "../../i18n/useT.js";
import Modal from "../../ui/Modal.jsx";
import ModalActividad from "../actividades/ModalActividad.jsx";

/** Tarjeta de actividad compartida por la cuadrícula y la agenda. */
function ActividadItem({ a, conflictos, abrir, compacta }) {
  const t = useT();
  return (
    <button
      onClick={abrir}
      className={`w-full rounded-xl border px-2 py-1.5 text-left shadow-sm transition hover:brightness-95 ${
        conflictos.length
          ? "border-red-500 bg-red-50 text-red-950 ring-2 ring-red-500"
          : a.viatico
          ? "border-orange-300 bg-orange-50 text-orange-950"
          : "border-emerald-200 bg-emerald-50 text-emerald-950"
      }`}
    >
      <div className={`line-clamp-2 font-semibold leading-tight ${compacta ? "text-[11px]" : "text-sm"}`}>{a.titulo}</div>
      {!compacta && <div className="mt-1 text-xs font-medium opacity-75">📅 {a.inicio}{a.fin && a.fin !== a.inicio ? ` — ${a.fin}` : ""}</div>}
      <div className={`mt-1 font-bold opacity-80 ${compacta ? "text-[10px]" : "text-xs"}`}>
        {a.funcionarios.length ? a.funcionarios.slice(0, 3).join(", ") : t("planificacion.sinFuncionarios")}
        {a.funcionarios.length > 3 ? " " + t("planificacion.masFuncionarios", { n: a.funcionarios.length - 3 }) : ""}
      </div>
      {a.lugar && <div className={`mt-0.5 font-bold opacity-70 ${compacta ? "text-[10px]" : "text-xs"}`}>📍 {a.lugar}</div>}
      {!compacta && a.observaciones && <div className="mt-1 line-clamp-2 text-xs opacity-75">{a.observaciones}</div>}
      {a.viatico && (
        <div className={`mt-1 inline-flex rounded-md bg-orange-200 px-1.5 py-0.5 font-bold text-orange-950 ${compacta ? "text-[9px]" : "text-[11px]"}`}>
          {t("planificacion.viaticoTag")}
        </div>
      )}
      {conflictos.length > 0 && (
        <div className={`mt-1 rounded-md bg-red-700 px-1.5 py-0.5 font-bold text-white ${compacta ? "text-[9px]" : "text-[11px]"}`}>
          {t("planificacion.rolBadge", { nombres: conflictos.join(", ") })}
        </div>
      )}
      {!compacta && <div className="mt-2 text-xs font-semibold underline decoration-2 underline-offset-2">Editar actividad</div>}
    </button>
  );
}

export default function Planificacion({
  year,
  month,
  personas,
  actividadesPlan,
  setActividadesPlan,
  roleData,
  setView,
  setDiaVista,
}) {
  const t = useT();
  const [modal, setModal] = useState(null);
  // null = sin preferencia explícita: agenda en móvil, cuadrícula en escritorio.
  const [vistaManual, setVistaManual] = useSessionState("btmm:planificacion:vista", null);
  const [rangoManual, setRangoManual] = useSessionState("btmm:planificacion:rango", null);
  const [texto, setTexto] = useSessionState("btmm:planificacion:texto", "");
  const [filtros, setFiltros] = useSessionState("btmm:planificacion:filtros", {
    persona: "",
    lugar: "",
    viatico: "todos",
  });
  const [filtrosAbiertos, setFiltrosAbiertos] = useState(false);
  const isMobile = useIsMobile();
  const modo = vistaManual ?? (isMobile ? "agenda" : "cuadricula");
  const rango = rangoManual ?? (isMobile ? "proximos7" : "mes");
  const feriados = useFeriadosDelAno(year);
  const hoyRef = useRef(null);
  const hoy = new Date();
  const diaActual = hoy.getFullYear() === year && hoy.getMonth() === month ? hoy.getDate() : null;
  const days = Array.from({ length: dim(year, month) }, (_, i) => i + 1);
  const blanks = Array.from({ length: new Date(year, month, 1).getDay() }, (_, i) => i);
  const isoDia = (d) => `${year}-${pad2(month + 1)}-${pad2(d)}`;
  const personasActivas = personas.filter((p) => p.estado !== "Inactivo");
  const nuevo = (fechaIso) => ({
    id: `a${Date.now()}`,
    titulo: "",
    inicio: fechaIso,
    fin: fechaIso,
    unDia: true,
    funcionarios: [],
    lugar: "",
    observaciones: "",
    viatico: false,
  });
  const enDia = (a, iso) => iso >= a.inicio && iso <= (a.fin || a.inicio);
  const actividadesDia = (d) =>
    actividadesPlan
      .filter((a) => enDia(a, isoDia(d)))
      .filter((a) => !texto.trim() || `${a.titulo} ${a.lugar} ${a.observaciones} ${a.funcionarios.join(" ")}`.toLocaleLowerCase().includes(texto.trim().toLocaleLowerCase()))
      .filter((a) => !filtros.persona || a.funcionarios.includes(filtros.persona))
      .filter((a) => !filtros.lugar || (a.lugar || "").toLocaleLowerCase().includes(filtros.lugar.toLocaleLowerCase()))
      .filter((a) => filtros.viatico === "todos" || Boolean(a.viatico) === (filtros.viatico === "si"))
      .sort((a, b) => a.inicio.localeCompare(b.inicio) || a.titulo.localeCompare(b.titulo));
  const guardar = (act) => {
    if (!act.titulo.trim()) return;
    const normal = { ...act, fin: act.unDia ? act.inicio : act.fin || act.inicio };
    if (normal.fin < normal.inicio) normal.fin = normal.inicio;
    setActividadesPlan((prev) =>
      prev.some((a) => a.id === normal.id) ? prev.map((a) => (a.id === normal.id ? normal : a)) : [...prev, normal]
    );
    setModal(null);
  };
  const eliminar = (id) => {
    setActividadesPlan((prev) => prev.filter((a) => a.id !== id));
    setModal(null);
  };
  const turnoEnDia = (d) =>
    personasActivas.filter((p) => esRolActivo(codigoRolFuncionario(personas, roleData, year, month, p.nombre, d, feriados))).length;
  const verDia = (d) => {
    setDiaVista(isoDia(d));
    setView("dia");
  };
  const tieneConflicto = (d, a) => conflictosActividadDia(a, d, year, month, personas, roleData, feriados).length > 0;
  const hoyDia = diaActual || 1;
  const daysVisible = days.filter((d) => {
    const items = actividadesDia(d);
    if (rango === "hoy") return d === hoyDia;
    if (rango === "proximos7") return d >= hoyDia && d <= Math.min(hoyDia + 6, days.length);
    if (rango === "actividades") return items.length > 0;
    if (rango === "conflictos") return items.some((a) => tieneConflicto(d, a));
    if (rango === "sinAsignar") return items.some((a) => !a.funcionarios.length);
    return true;
  });
  const irHoy = () => {
    if (!diaActual) return;
    setRangoManual("hoy");
    requestAnimationFrame(() => hoyRef.current?.scrollIntoView?.({ block: "center", behavior: "smooth" }));
  };
  const botonModo = (valor, etiqueta) => (
    <button
      onClick={() => setVistaManual(valor)}
      aria-pressed={modo === valor}
      className={`min-h-touch px-3 py-1.5 text-xs font-semibold transition ${
        modo === valor ? "bg-emerald-800 text-white" : "bg-white text-slate-600 hover:bg-slate-50"
      }`}
    >
      {etiqueta}
    </button>
  );
  return (
    <Card
      title={t("planificacion.titulo", { mes: meses[month], anio: year })}
      icon="🗓️"
      action={
        <button
          onClick={() => setModal(nuevo(isoDia(Math.min(new Date().getDate(), dim(year, month)))))}
          className="rounded-xl bg-emerald-800 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
        >
          {t("planificacion.agregar")}
        </button>
      }
    >
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <Badge className="border-emerald-300 bg-emerald-100 text-emerald-950">{t("planificacion.leyendaProgramada")}</Badge>
        <Badge className="border-orange-300 bg-orange-100 text-orange-950">{t("planificacion.leyendaViatico")}</Badge>
        <Badge className="border-slate-300 bg-slate-100 text-slate-900">{t("planificacion.leyendaFinde")}</Badge>
        <Badge className="border-slate-300 bg-slate-100 text-slate-600">{t("planificacion.leyendaTurno")}</Badge>
        <div
          role="group"
          aria-label={t("planificacion.vistaAria")}
          className="ml-auto inline-flex overflow-hidden rounded-xl border border-slate-200 shadow-sm"
        >
          {botonModo("agenda", t("planificacion.vistaAgenda"))}
          {botonModo("cuadricula", t("planificacion.vistaCuadricula"))}
        </div>
      </div>

      {modo === "agenda" && (
        <div className="mb-4 space-y-2 rounded-2xl border border-slate-200 bg-slate-50 p-2">
          <div className="flex gap-2">
            <input
              type="search"
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              placeholder="Buscar actividad, lugar o persona"
              aria-label="Buscar en planificación"
              className="min-h-touch min-w-0 flex-1 rounded-xl border border-slate-300 bg-white px-3 text-sm"
            />
            <button type="button" onClick={() => setFiltrosAbiertos(true)} className="min-h-touch rounded-xl border border-slate-300 bg-white px-3 text-sm font-semibold">
              Filtros{Object.values(filtros).filter((v) => v && v !== "todos").length ? ` (${Object.values(filtros).filter((v) => v && v !== "todos").length})` : ""}
            </button>
          </div>
          <div className="flex snap-x gap-2 overflow-x-auto pb-1">
            {[["hoy","Hoy"],["proximos7","Próximos 7"],["actividades","Con actividades"],["conflictos","Conflictos"],["sinAsignar","Sin asignar"],["mes","Mes completo"]].map(([value, label]) => (
              <button key={value} type="button" onClick={() => setRangoManual(value)} aria-pressed={rango === value} className={`min-h-touch shrink-0 snap-start rounded-xl px-3 text-xs font-semibold ${rango === value ? "bg-emerald-800 text-white" : "border border-slate-300 bg-white text-slate-700"}`}>{label}</button>
            ))}
          </div>
          {diaActual && rango !== "hoy" && <button type="button" onClick={irHoy} className="min-h-touch text-sm font-semibold text-emerald-800 underline">Ir a Hoy</button>}
        </div>
      )}

      {modo === "agenda" ? (
        /* Agenda vertical: un renglón por día, pensada para pantallas angostas.
           Misma información que la cuadrícula (actividades, turno, conflictos)
           más alta rápida con la fecha del día prellenada. */
        <ol className="space-y-2">
          {daysVisible.map((d) => {
            const dow = new Date(year, month, d).getDay();
            const finde = dow === 0 || dow === 6;
            const items = actividadesDia(d);
            const turno = turnoEnDia(d);
            return (
              <li
                key={d}
                ref={d === diaActual ? hoyRef : undefined}
                aria-current={d === diaActual ? "date" : undefined}
                className={`rounded-2xl border p-2 shadow-sm ${
                  d === diaActual
                    ? "border-emerald-500 bg-emerald-50 ring-2 ring-emerald-400"
                    : `border-slate-200 ${finde ? "bg-slate-50" : "bg-white"}`
                }`}
              >
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => verDia(d)}
                    title={t("planificacion.titleDetalleDia")}
                    className={`flex min-h-touch min-w-touch shrink-0 flex-col items-center justify-center rounded-xl text-white shadow-sm hover:bg-emerald-800 ${
                      d === diaActual ? "bg-emerald-700 ring-2 ring-emerald-300" : "bg-slate-900"
                    }`}
                  >
                    <span className="text-base font-semibold leading-none">{d}</span>
                    <span className="mt-0.5 text-[9px] uppercase leading-none opacity-80">{diasLargos[dow].slice(0, 3)}</span>
                  </button>
                  <div className="min-w-0 flex-1 text-xs">
                    {items.length > 0 ? (
                      <span className="font-semibold text-emerald-900">{t("planificacion.actsBadge", { n: items.length })}</span>
                    ) : (
                      <span className="text-slate-400">{t("planificacion.agendaVacia")}</span>
                    )}
                    {turno > 0 && (
                      <span className="ml-2 text-slate-500" title={t("planificacion.titleTurno", { n: turno })}>
                        👥 {turno}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => setModal(nuevo(isoDia(d)))}
                    aria-label={t("planificacion.agregarEnDia", { dia: d })}
                    className="flex min-h-touch min-w-touch shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-lg font-semibold text-emerald-800 shadow-sm hover:bg-emerald-50"
                  >
                    +
                  </button>
                </div>
                {items.length > 0 && (
                  <div className="mt-2 space-y-1.5">
                    {items.map((a) => (
                      <ActividadItem
                        key={a.id}
                        a={a}
                        conflictos={conflictosActividadDia(a, d, year, month, personas, roleData, feriados)}
                        abrir={() => setModal({ ...a })}
                      />
                    ))}
                  </div>
                )}
              </li>
            );
          })}
          {daysVisible.length === 0 && <li className="rounded-2xl border border-dashed border-slate-300 p-6 text-center text-sm text-slate-500">No hay días que coincidan con estos filtros.</li>}
        </ol>
      ) : (
        /* Cuadrícula mensual de 7 columnas. En pantallas angostas necesita
           desplazamiento horizontal: min-w fija el ancho legible. */
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="min-w-[700px]">
            <div className="grid grid-cols-7 bg-slate-900 text-white">
              {diasLargos.map((d) => (
                <div key={d} className="border-r border-white/10 px-2 py-2 text-center text-[11px] font-semibold tracking-wider">
                  {d}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 bg-slate-200">
              {blanks.map((b) => (
                <div key={b} className="min-h-[174px] border-b border-r border-slate-300 bg-slate-100" />
              ))}
              {days.map((d) => {
                const dow = new Date(year, month, d).getDay();
                const items = actividadesDia(d);
                const turno = turnoEnDia(d);
                return (
                  <div
                    key={d}
                    ref={d === diaActual ? hoyRef : undefined}
                    aria-current={d === diaActual ? "date" : undefined}
                    className={`min-h-[174px] border-b border-r p-2 ${
                      d === diaActual
                        ? "border-emerald-500 bg-emerald-50 ring-2 ring-inset ring-emerald-400"
                        : `border-slate-300 ${dow === 0 || dow === 6 ? "bg-slate-100" : "bg-white"}`
                    }`}
                  >
                    <div className="mb-2 flex items-start justify-between gap-1">
                      <button
                        onClick={() => verDia(d)}
                        title={t("planificacion.titleDetalleDia")}
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-sm font-semibold text-white shadow-sm hover:bg-emerald-800 ${
                          d === diaActual ? "bg-emerald-700 ring-2 ring-emerald-300" : "bg-slate-900"
                        }`}
                      >
                        {d}
                      </button>
                      <div className="flex flex-col items-end gap-0.5">
                        {turno > 0 && (
                          <span
                            className="rounded-full bg-slate-600 px-1.5 py-0.5 text-[9px] font-semibold text-white"
                            title={t("planificacion.titleTurno", { n: turno })}
                          >
                            👥 {turno}
                          </span>
                        )}
                        {items.length > 0 && (
                          <span
                            className="rounded-full bg-emerald-800 px-1.5 py-0.5 text-[9px] font-bold text-white"
                            title={t("planificacion.titleActs", { n: items.length })}
                          >
                            {t("planificacion.actsBadge", { n: items.length })}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      {items.map((a) => (
                        <ActividadItem
                          key={a.id}
                          a={a}
                          conflictos={conflictosActividadDia(a, d, year, month, personas, roleData, feriados)}
                          abrir={() => setModal({ ...a })}
                          compacta
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      {modal && (
        <ModalActividad
          valor={modal}
          personas={personasActivas}
          cerrar={() => setModal(null)}
          guardar={guardar}
          eliminar={eliminar}
          actividadesPlan={actividadesPlan}
        />
      )}
      <Modal
        open={filtrosAbiertos}
        onClose={() => setFiltrosAbiertos(false)}
        title="Filtros de planificación"
        description="Combina filtros para reducir la agenda."
        actions={<><button type="button" onClick={() => setFiltros({ persona: "", lugar: "", viatico: "todos" })} className="min-h-touch rounded-xl px-4 font-semibold text-slate-700">Limpiar</button><button type="button" onClick={() => setFiltrosAbiertos(false)} className="min-h-touch rounded-xl bg-emerald-800 px-5 font-semibold text-white">Ver resultados</button></>}
      >
        <div className="space-y-4">
          <label className="block text-sm font-semibold">Persona<select value={filtros.persona} onChange={(e) => setFiltros((prev) => ({ ...prev, persona: e.target.value }))} className="mt-1 min-h-touch w-full rounded-xl border border-slate-300 bg-white px-3 font-normal"><option value="">Todas</option>{personasActivas.map((p) => <option key={p.nombre}>{p.nombre}</option>)}</select></label>
          <label className="block text-sm font-semibold">Ubicación<input value={filtros.lugar} onChange={(e) => setFiltros((prev) => ({ ...prev, lugar: e.target.value }))} className="mt-1 min-h-touch w-full rounded-xl border border-slate-300 bg-white px-3 font-normal" /></label>
          <label className="block text-sm font-semibold">Viático<select value={filtros.viatico} onChange={(e) => setFiltros((prev) => ({ ...prev, viatico: e.target.value }))} className="mt-1 min-h-touch w-full rounded-xl border border-slate-300 bg-white px-3 font-normal"><option value="todos">Todos</option><option value="si">Con viático</option><option value="no">Sin viático</option></select></label>
        </div>
      </Modal>
    </Card>
  );
}
