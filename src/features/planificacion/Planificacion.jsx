import { useRef, useState } from "react";
import Badge from "../../ui/Badge.jsx";
import { diasLargos } from "../../data/calendario.js";
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
      className={`w-full rounded-lg px-2 py-1.5 text-left transition hover:brightness-95 ${
        // Conflicto: acento lateral en vez de borde completo + anillo — el
        // rojo no debe dominar la lectura en días con varias actividades.
        conflictos.length
          ? "border-l-4 border-red-600 bg-surface text-ink"
          : a.viatico
          ? "border border-viatico/40 bg-viatico-soft text-viatico-fg"
          : "border border-ok/40 bg-ok-soft text-ok-fg"
      }`}
    >
      <div className={`line-clamp-2 font-semibold leading-tight ${compacta ? "text-[11px]" : "text-sm"}`}>{a.titulo}</div>
      {!compacta && <div className="mt-1 text-xs font-medium opacity-75">📅 {a.inicio}{a.fin && a.fin !== a.inicio ? ` — ${a.fin}` : ""}</div>}
      <div className={`mt-1 font-bold opacity-80 ${compacta ? "text-[10px]" : "text-xs"}`}>
        {a.funcionarios.length ? a.funcionarios.slice(0, 3).join(", ") : t("planificacion.sinFuncionarios")}
        {a.funcionarios.length > 3 ? " " + t("planificacion.masFuncionarios", { n: a.funcionarios.length - 3 }) : ""}
      </div>
      {a.lugar && <div className={`mt-0.5 font-bold ${compacta ? "text-[10px]" : "text-xs"}`}>📍 {a.lugar}</div>}
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
      {!compacta && <div className="mt-2 text-xs font-semibold underline decoration-2 underline-offset-2">{t("planificacion.editarActividad")}</div>}
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
        modo === valor ? "bg-brand text-brand-fg" : "bg-surface text-ink-muted hover:bg-surface-alt"
      }`}
    >
      {etiqueta}
    </button>
  );
  return (
    <section className="space-y-3">
      {/* Barra compacta: título de contexto ya lo da el Topbar; aquí solo
          controles — modo de vista + acción principal en una fila. */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div
          role="group"
          aria-label={t("planificacion.vistaAria")}
          className="inline-flex overflow-hidden rounded-lg border border-line"
        >
          {botonModo("agenda", t("planificacion.vistaAgenda"))}
          {botonModo("cuadricula", t("planificacion.vistaCuadricula"))}
        </div>
        <button
          onClick={() => setModal(nuevo(isoDia(Math.min(new Date().getDate(), dim(year, month)))))}
          className="min-h-touch rounded-lg bg-brand px-4 text-sm font-semibold text-brand-fg hover:opacity-90"
        >
          {t("planificacion.agregar")}
        </button>
      </div>

      {/* Leyenda colapsable: no debe competir con los datos por el primer
          viewport; queda a un toque de distancia para quien la necesite. */}
      <details className="rounded-lg border border-line bg-surface px-3 py-1.5">
        <summary className="min-h-touch cursor-pointer list-none py-1.5 text-xs font-semibold text-ink-muted">
          {t("planificacion.verLeyenda")}
        </summary>
        <div className="flex flex-wrap items-center gap-2 pb-2 pt-1">
          <Badge className="bg-emerald-100 text-emerald-950">{t("planificacion.leyendaProgramada")}</Badge>
          <Badge className="bg-orange-100 text-orange-950">{t("planificacion.leyendaViatico")}</Badge>
          <Badge className="bg-slate-100 text-slate-900">{t("planificacion.leyendaFinde")}</Badge>
          <Badge className="bg-slate-100 text-slate-600">{t("planificacion.leyendaTurno")}</Badge>
        </div>
      </details>

      {modo === "agenda" && (
        <div className="space-y-2 rounded-lg bg-surface-inset p-2">
          <div className="flex gap-2">
            <input
              type="search"
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              placeholder={t("planificacion.buscarPlaceholder")}
              aria-label={t("planificacion.buscarAria")}
              className="min-h-touch min-w-0 flex-1 rounded-xl border border-line bg-surface px-3 text-sm text-ink"
            />
            <button type="button" onClick={() => setFiltrosAbiertos(true)} className="min-h-touch rounded-xl border border-line bg-surface px-3 text-sm font-semibold text-ink">
              {t("planificacion.filtros")}{Object.values(filtros).filter((v) => v && v !== "todos").length ? ` (${Object.values(filtros).filter((v) => v && v !== "todos").length})` : ""}
            </button>
          </div>
          {/* Rango como select nativo: seis chips desplazables ocupaban una
              fila entera y quedaban cortados en 320-390 px; un solo control
              muestra siempre la opción activa completa. */}
          <div className="flex items-center gap-2">
            <select
              value={rango}
              onChange={(e) => setRangoManual(e.target.value)}
              aria-label={t("planificacion.rangoAria")}
              className="min-h-touch min-w-0 flex-1 rounded-xl border border-line bg-surface px-3 text-sm font-semibold text-ink"
            >
              <option value="hoy">{t("planificacion.rangoHoy")}</option>
              <option value="proximos7">{t("planificacion.rangoProximos7")}</option>
              <option value="actividades">{t("planificacion.rangoActividades")}</option>
              <option value="conflictos">{t("planificacion.rangoConflictos")}</option>
              <option value="sinAsignar">{t("planificacion.rangoSinAsignar")}</option>
              <option value="mes">{t("planificacion.rangoMes")}</option>
            </select>
            {diaActual && rango !== "hoy" && <button type="button" onClick={irHoy} className="min-h-touch shrink-0 text-sm font-semibold text-brand underline">{t("planificacion.irHoy")}</button>}
          </div>
        </div>
      )}

      {modo === "agenda" ? (
        /* Agenda vertical: filas de día con divisores, no una tarjeta pesada
           por fecha. El día actual se distingue con un acento lateral. */
        daysVisible.length === 0 ? (
          <p className="rounded-lg border border-dashed border-line p-6 text-center text-sm text-ink-muted">{t("planificacion.sinCoincidencias")}</p>
        ) : (
        <ol className="divide-y divide-line rounded-lg border border-line bg-surface">
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
                className={`p-2 ${
                  d === diaActual
                    ? "border-l-4 border-brand bg-brand-soft/60 pl-1.5"
                    : finde ? "bg-surface-alt/60" : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => verDia(d)}
                    title={t("planificacion.titleDetalleDia")}
                    className={`flex min-h-touch min-w-touch shrink-0 flex-col items-center justify-center rounded-lg hover:opacity-85 ${
                      d === diaActual ? "bg-brand text-brand-fg ring-2 ring-brand/40" : "bg-ink text-ink-inverse"
                    }`}
                  >
                    <span className="text-base font-semibold leading-none">{d}</span>
                    <span className="mt-0.5 text-[9px] uppercase leading-none opacity-80">{diasLargos[dow].slice(0, 3)}</span>
                  </button>
                  <div className="min-w-0 flex-1 text-xs">
                    {items.length > 0 ? (
                      <span className="font-semibold text-ok-fg">{t("planificacion.actsBadge", { n: items.length })}</span>
                    ) : (
                      <span className="text-ink-muted">{t("planificacion.agendaVacia")}</span>
                    )}
                    {turno > 0 && (
                      <span className="ml-2 text-ink-muted" title={t("planificacion.titleTurno", { n: turno })}>
                        👥 {turno}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => setModal(nuevo(isoDia(d)))}
                    aria-label={t("planificacion.agregarEnDia", { dia: d })}
                    className="flex min-h-touch min-w-touch shrink-0 items-center justify-center rounded-lg border border-line bg-surface text-lg font-semibold text-brand hover:bg-brand-soft"
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
        </ol>
        )
      ) : (
        /* Cuadrícula mensual de 7 columnas. En pantallas angostas necesita
           desplazamiento horizontal: min-w fija el ancho legible. */
        <div className="overflow-x-auto rounded-lg border border-line bg-surface">
          <div className="min-w-[700px]">
            <div className="grid grid-cols-7 bg-ink text-ink-inverse">
              {diasLargos.map((d) => (
                <div key={d} className="border-r border-white/10 px-2 py-2 text-center text-[11px] font-semibold tracking-wider">
                  {d}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 bg-line/60">
              {blanks.map((b) => (
                <div key={b} className="min-h-[174px] border-b border-r border-line bg-surface-alt" />
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
                        ? "border-brand bg-brand-soft/60 ring-2 ring-inset ring-brand/50"
                        : `border-line ${dow === 0 || dow === 6 ? "bg-surface-alt" : "bg-surface"}`
                    }`}
                  >
                    <div className="mb-2 flex items-start justify-between gap-1">
                      <button
                        onClick={() => verDia(d)}
                        title={t("planificacion.titleDetalleDia")}
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-sm font-semibold shadow-sm hover:opacity-85 ${
                          d === diaActual ? "bg-brand text-brand-fg ring-2 ring-brand/40" : "bg-ink text-ink-inverse"
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
        title={t("planificacion.filtrosTitulo")}
        description={t("planificacion.filtrosDesc")}
        actions={<><button type="button" onClick={() => setFiltros({ persona: "", lugar: "", viatico: "todos" })} className="min-h-touch rounded-xl px-4 font-semibold text-ink">{t("planificacion.limpiar")}</button><button type="button" onClick={() => setFiltrosAbiertos(false)} className="min-h-touch rounded-xl bg-brand px-5 font-semibold text-brand-fg">{t("planificacion.verResultados")}</button></>}
      >
        <div className="space-y-4">
          <label className="block text-sm font-semibold text-ink">{t("planificacion.filtroPersona")}<select value={filtros.persona} onChange={(e) => setFiltros((prev) => ({ ...prev, persona: e.target.value }))} className="mt-1 min-h-touch w-full rounded-xl border border-line bg-surface px-3 font-normal text-ink"><option value="">{t("planificacion.filtroTodas")}</option>{personasActivas.map((p) => <option key={p.nombre}>{p.nombre}</option>)}</select></label>
          <label className="block text-sm font-semibold text-ink">{t("planificacion.filtroUbicacion")}<input value={filtros.lugar} onChange={(e) => setFiltros((prev) => ({ ...prev, lugar: e.target.value }))} className="mt-1 min-h-touch w-full rounded-xl border border-line bg-surface px-3 font-normal text-ink" /></label>
          <label className="block text-sm font-semibold text-ink">{t("planificacion.filtroViatico")}<select value={filtros.viatico} onChange={(e) => setFiltros((prev) => ({ ...prev, viatico: e.target.value }))} className="mt-1 min-h-touch w-full rounded-xl border border-line bg-surface px-3 font-normal text-ink"><option value="todos">{t("planificacion.viaticoTodos")}</option><option value="si">{t("planificacion.viaticoSi")}</option><option value="no">{t("planificacion.viaticoNo")}</option></select></label>
        </div>
      </Modal>
    </section>
  );
}
