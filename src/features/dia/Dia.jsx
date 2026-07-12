import { useState } from "react";
import Card from "../../ui/Card.jsx";
import Badge from "../../ui/Badge.jsx";
import Avatar from "../../ui/Avatar.jsx";
import Icon from "../../ui/Icon.jsx";
import BottomSheet from "../../ui/BottomSheet.jsx";
import { codigoCls } from "../../ui/styles.js";
import { meses, diasLargos } from "../../data/calendario.js";
import { opcionesPuestoOperativo } from "../../data/puestos.js";
import { pad2, fecha } from "../../domain/fechas.js";
import { codigoRolFuncionario, esRolActivo, categoriaDe } from "../../domain/roles.js";
import { actividadesEnDia } from "../../domain/actividades.js";
import { conflictosActividadDia } from "../../domain/conflictos.js";
import { indexarReposiciones } from "../../domain/reposicion.js";
import { useSwipe } from "../../lib/useSwipe.js";
import { useMobile } from "../../lib/useMobile.js";
import { useFeriadosDelAno } from "../../lib/useFeriadosDelAno.js";
import { useT } from "../../i18n/useT.js";
import { plural } from "../../i18n/es-CR.js";
import { magnitudLabel } from "../reposicion/etiquetas.js";
import ModalActividad from "../actividades/ModalActividad.jsx";

function ColHead({ label }) {
  const [first, ...rest] = String(label).split(" ");
  if (rest.length === 0) return label;
  return (
    <>
      {first}
      <br className="sm:hidden" />
      <span className="hidden sm:inline"> </span>
      {rest.join(" ")}
    </>
  );
}

function SubgrupoPuesto({ label, n, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mb-1.5 flex w-full items-center gap-2 text-left active:scale-95"
      >
        <Icon name={open ? "chevronDown" : "chevronRight"} size={14} className="shrink-0 text-slate-400" />
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">{label}</span>
        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-500">{n}</span>
        <span className="h-px flex-1 bg-slate-100" />
      </button>
      {open && children}
    </div>
  );
}

function MarcasDia({ trabajada, reposicion, t }) {
  if (!trabajada && !reposicion) return null;
  return (
    <>
      {trabajada && (
        <Badge className="border-amber-300 bg-amber-100 text-amber-900">
          ⚑ {trabajada.folio} · {magnitudLabel(trabajada, t)} · {t(`reposicion.estado.${trabajada.estadoCalc || "Pendiente"}`).toLowerCase()}
        </Badge>
      )}
      {reposicion && (
        <Badge className="border-sky-300 bg-sky-100 text-sky-900">
          ⟲ {reposicion.folio} · {t("reposicion.marca.reposicionDe", { fecha: fecha(reposicion.fecha) })}
        </Badge>
      )}
    </>
  );
}

export default function Dia({ diaVista, setDiaVista, personas, actividadesPlan, setActividadesPlan, roleData, reposiciones = [], hj }) {
  const t = useT();
  const isMobile = useMobile();
  const { trabajadas, reposiciones: reposicionesDia } = indexarReposiciones(reposiciones, hj);
  const marcaDe = (nombre) => ({
    trabajada: trabajadas[`${nombre}|${diaVista}`],
    reposicion: reposicionesDia[`${nombre}|${diaVista}`],
  });
  const [modalActividad, setModalActividad] = useState(null);
  const [yearD, monthD, dayD] = diaVista.split("-").map(Number);
  const monthIdx = monthD - 1;
  const feriados = useFeriadosDelAno(yearD);
  const personasActivas = personas.filter((p) => p.estado !== "Inactivo");
  const finde = [0, 6].includes(new Date(diaVista + "T12:00:00").getDay());
  const dowLabel = diasLargos[new Date(diaVista + "T12:00:00").getDay()];

  const statusDia = personasActivas.map((p) => {
    const rol = codigoRolFuncionario(personas, roleData, yearD, monthIdx, p.nombre, dayD, feriados);
    const cat = categoriaDe(rol);
    const enTurno = esRolActivo(rol);
    const acts = actividadesEnDia(actividadesPlan, diaVista).filter((a) => (a.funcionarios || []).includes(p.nombre));
    return { ...p, rol, cat, enTurno, acts, tieneActividad: acts.length > 0, tieneViatico: acts.some((a) => a.viatico) };
  });

  const enTurnoConAct = statusDia.filter((p) => p.enTurno && p.tieneActividad);
  const enTurnoSinAct = statusDia.filter((p) => p.enTurno && !p.tieneActividad);
  const fueraDeTurno = statusDia.filter((p) => !p.enTurno);
  const conViatico = statusDia.filter((p) => p.tieneViatico);
  const actsDelDia = actividadesEnDia(actividadesPlan, diaVista).sort((a, b) => a.titulo.localeCompare(b.titulo));
  const statsPuesto = opcionesPuestoOperativo.map((puesto) => {
    const delPuesto = statusDia.filter((p) => (p.puestoOperativo || "") === puesto);
    const enTurno = delPuesto.filter((p) => p.enTurno);
    return {
      puesto,
      fuera: delPuesto.length - enTurno.length,
      turno: enTurno.length,
      conActividad: enTurno.filter((p) => p.tieneActividad).length,
      sinActividad: enTurno.filter((p) => !p.tieneActividad).length,
    };
  });
  const totalPuesto = statsPuesto.reduce(
    (a, s) => ({
      fuera: a.fuera + s.fuera,
      turno: a.turno + s.turno,
      conActividad: a.conActividad + s.conActividad,
      sinActividad: a.sinActividad + s.sinActividad,
    }),
    { fuera: 0, turno: 0, conActividad: 0, sinActividad: 0 },
  );
  const catLabel = { L: "Libre", V: "Vacaciones", I: "Incapacidad", O: "Otro", "": "Sin marcar" };
  const catCls = {
    L: "border-amber-700 bg-amber-700 text-white",
    V: "border-sky-700 bg-sky-700 text-white",
    I: "border-red-700 bg-red-700 text-white",
    O: "border-violet-700 bg-violet-700 text-white",
    "": "border-slate-500 bg-slate-500 text-white",
  };
  const fueraPorCat = fueraDeTurno.reduce((acc, p) => {
    const k = p.cat || "";
    if (!acc[k]) acc[k] = [];
    acc[k].push(p);
    return acc;
  }, {});

  const agruparPorPuesto = (lista) => {
    const grupos = opcionesPuestoOperativo.map((puesto) => ({
      key: puesto,
      label: puesto.replace("Puesto ", ""),
      items: lista.filter((p) => (p.puestoOperativo || "") === puesto),
    }));
    const resto = lista.filter((p) => !opcionesPuestoOperativo.includes(p.puestoOperativo || ""));
    if (resto.length) grupos.push({ key: "__sin__", label: t("funcionarios.sinPuesto"), items: resto });
    return grupos.filter((g) => g.items.length > 0);
  };

  const moveDay = (delta) => {
    const d = new Date(diaVista + "T12:00:00");
    d.setDate(d.getDate() + delta);
    setDiaVista(`${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`);
  };
  const guardar = (act) => {
    if (!act.titulo.trim()) return;
    const normal = { ...act, fin: act.unDia ? act.inicio : act.fin || act.inicio };
    if (normal.fin < normal.inicio) normal.fin = normal.inicio;
    setActividadesPlan((prev) =>
      prev.some((a) => a.id === normal.id) ? prev.map((a) => (a.id === normal.id ? normal : a)) : [...prev, normal]
    );
    setModalActividad(null);
  };
  const eliminar = (id) => {
    setActividadesPlan((prev) => prev.filter((a) => a.id !== id));
    setModalActividad(null);
  };
  const nuevaAct = (funs = [], lugar = "") => ({
    id: `a${Date.now()}`,
    titulo: "",
    inicio: diaVista,
    fin: diaVista,
    unDia: true,
    funcionarios: funs,
    lugar,
    observaciones: "",
    viatico: false,
  });

  const swipeRef = useSwipe({
    onSwipeLeft: () => moveDay(1),
    onSwipeRight: () => moveDay(-1),
  });

  // Título dinámico para el BottomSheet según si es edición o creación.
  const tituloModal = modalActividad && actividadesPlan.some((a) => a.id === modalActividad.id)
    ? t("dia.editarActividad", { defaultValue: "Editar actividad" })
    : t("dia.nuevaActividad", { defaultValue: "Nueva actividad" });

  const modalContent = modalActividad ? (
    <ModalActividad
      valor={modalActividad}
      personas={personasActivas}
      cerrar={() => setModalActividad(null)}
      guardar={guardar}
      eliminar={eliminar}
      actividadesPlan={actividadesPlan}
    />
  ) : null;

  return (
    <section ref={swipeRef} className="space-y-4">
      {/* Navegación de fecha — una sola fila con flechas ‹ › y selector central */}
      <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white p-2 sm:gap-3 sm:p-3">
        <button
          onClick={() => moveDay(-1)}
          aria-label={t("dia.diaAnterior")}
          className="inline-flex min-h-touch min-w-touch shrink-0 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-700 transition-colors hover:bg-slate-50 active:scale-95 active:bg-slate-100"
        >
          <Icon name="chevronLeft" size={20} />
        </button>
        <div className="flex min-w-0 flex-1 flex-col items-center gap-0.5">
          <span className="truncate text-[10px] font-semibold uppercase tracking-wider text-slate-500 sm:text-xs">
            {dowLabel} · {meses[monthIdx]} {yearD}
          </span>
          <input
            type="date"
            value={diaVista}
            onChange={(e) => e.target.value && setDiaVista(e.target.value)}
            aria-label={t("dia.seleccionarFecha")}
            className="min-h-touch w-full max-w-[13rem] rounded-xl border border-slate-300 bg-white px-2 py-1 text-center text-sm font-semibold text-slate-900 outline-none focus:border-emerald-700 [color-scheme:light] dark:[color-scheme:dark]"
          />
        </div>
        <button
          onClick={() => moveDay(1)}
          aria-label={t("dia.diaSiguiente")}
          className="inline-flex min-h-touch min-w-touch shrink-0 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-700 transition-colors hover:bg-slate-50 active:scale-95 active:bg-slate-100"
        >
          <Icon name="chevronRight" size={20} />
        </button>
      </div>

      {/* Cobertura + actividades: una columna en móvil; desde md, dos
          columnas lado a lado para aprovechar tablet/escritorio. */}
      <div className="grid gap-4 md:grid-cols-2 md:items-start">
      {/* Resumen por puesto — siempre visible: es el dato crítico del día,
          no debe quedar oculto detrás de un colapsable. */}
      <Card title={t("dia.porPuesto")} icon="📍">
        <div className="overflow-hidden rounded-lg border border-line">
          <table className="w-full table-fixed border-collapse text-sm">
            <thead className="bg-surface-alt text-[9px] uppercase leading-[1.15] tracking-tight text-ink-muted sm:text-[11px] sm:tracking-wide">
              <tr>
                <th scope="col" className="w-[26%] px-1.5 py-2 text-left sm:px-3 sm:py-3">{t("dia.th.puesto")}</th>
                <th scope="col" className="px-0 py-2 text-center sm:px-3 sm:py-3"><ColHead label={t("dia.th.fuera")} /></th>
                <th scope="col" className="px-0 py-2 text-center sm:px-3 sm:py-3"><ColHead label={t("dia.th.enTurno")} /></th>
                <th scope="col" className="px-0 py-2 text-center sm:px-3 sm:py-3"><ColHead label={t("dia.th.conActividad")} /></th>
                <th scope="col" className="px-0 py-2 text-center sm:px-3 sm:py-3"><ColHead label={t("dia.th.sinActividad")} /></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {statsPuesto.map(({ puesto, fuera, turno, conActividad, sinActividad }) => (
                <tr key={puesto} className="hover:bg-surface-alt">
                  <th scope="row" className="px-1.5 py-2 text-left text-[11px] font-semibold text-ink sm:px-3 sm:py-3 sm:text-sm">{puesto.replace("Puesto ", "")}</th>
                  <td className={`px-1 py-2 text-center text-base font-semibold sm:px-3 sm:py-3 sm:text-lg ${fuera > 0 ? "text-ink-muted" : "text-ink-subtle"}`}>{fuera}</td>
                  <td className="px-1 py-2 text-center text-base font-semibold text-ok sm:px-3 sm:py-3 sm:text-lg">{turno}</td>
                  <td className="px-1 py-2 text-center text-base font-semibold text-info sm:px-3 sm:py-3 sm:text-lg">{conActividad}</td>
                  <td className={`px-1 py-2 text-center text-base font-semibold sm:px-3 sm:py-3 sm:text-lg ${sinActividad > 0 ? "text-warning" : "text-ink-subtle"}`}>{sinActividad}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-line-strong bg-surface-alt">
                <th scope="row" className="px-1.5 py-2 text-left text-[11px] font-bold text-ink sm:px-3 sm:py-3 sm:text-sm">{t("dia.th.total")}</th>
                <td className="px-1 py-2 text-center text-base font-bold text-ink-muted sm:px-3 sm:py-3 sm:text-lg">{totalPuesto.fuera}</td>
                <td className="px-1 py-2 text-center text-base font-bold text-ok sm:px-3 sm:py-3 sm:text-lg">{totalPuesto.turno}</td>
                <td className="px-1 py-2 text-center text-base font-bold text-info sm:px-3 sm:py-3 sm:text-lg">{totalPuesto.conActividad}</td>
                <td className={`px-1 py-2 text-center text-base font-bold sm:px-3 sm:py-3 sm:text-lg ${totalPuesto.sinActividad > 0 ? "text-warning" : "text-ink-subtle"}`}>{totalPuesto.sinActividad}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </Card>

      {/* Actividades del día — abierta por defecto: es información accionable.
          Título visual compacto (no se parte en varias líneas a 320 px);
          el nombre completo queda disponible como aria-label del botón. */}
      <Card
        title={t("dia.actividadesTituloCorto", { n: actsDelDia.length })}
        ariaLabel={t("dia.actividadesTitulo", { n: actsDelDia.length })}
        icon="🗓️"
        collapsible
        defaultOpen
        action={
          <button
            id="dia-boton-nueva-actividad"
            onClick={() => setModalActividad(nuevaAct())}
            className="inline-flex min-h-touch items-center gap-1 rounded-xl bg-emerald-800 px-3 py-2 text-xs font-semibold text-white transition-all hover:bg-emerald-700 active:scale-95 active:brightness-90"
          >
            <Icon name="plus" size={14} />
            {t("dia.nuevaCorta")}
          </button>
        }
      >
        {actsDelDia.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-200 p-6 text-center text-sm text-slate-400">{t("dia.sinActividades")}</div>
        ) : (
          <div className="space-y-3">
            {actsDelDia.map((act) => {
              const conf = conflictosActividadDia(act, dayD, yearD, monthIdx, personas, roleData, feriados);
              return (
                <div
                  key={act.id}
                  className={`rounded-lg p-4 ${
                    // Conflicto: acento lateral en vez de borde completo — el rojo
                    // no debe dominar la lectura cuando hay varias actividades.
                    conf.length
                      ? "border-l-4 border-red-600 bg-red-50/70"
                      : act.viatico
                      ? "border border-orange-200 bg-orange-50"
                      : "border border-emerald-200 bg-emerald-50"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0 flex-1">
                      <div className="break-words font-semibold text-slate-950">{act.titulo}</div>
                      {act.lugar && <div className="mt-0.5 text-xs text-slate-600">📍 {act.lugar}</div>}
                      {act.inicio !== (act.fin || act.inicio) && (
                        <div className="mt-0.5 text-xs text-slate-400">
                          {fecha(act.inicio)} → {fecha(act.fin)}
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => setModalActividad({ ...act })}
                      className="shrink-0 rounded-lg border border-slate-300 bg-white px-2 py-1 text-xs font-semibold text-slate-700 transition-all hover:bg-slate-50 active:scale-95"
                    >
                      {t("acciones.editar")}
                    </button>
                  </div>
                  {(act.viatico || conf.length > 0) && (
                    <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                      {act.viatico && <Badge className="border-orange-300 bg-orange-100 text-orange-900">{t("dia.viaticoBadge")}</Badge>}
                      {conf.length > 0 && (
                        <Badge className="border-red-300 bg-red-100 text-red-900">{t("dia.conflictosBadge", { n: conf.length, plural: plural(conf.length) })}</Badge>
                      )}
                    </div>
                  )}
                  {act.funcionarios.length > 0 && (
                    <div className="mt-2.5 flex flex-wrap gap-1">
                      {act.funcionarios.map((n) => (
                        <span
                          key={n}
                          className={`rounded-full border px-2 py-0.5 text-[11px] font-semibold ${
                            conf.includes(n) ? "border-red-300 bg-white text-red-800" : "border-emerald-200 bg-white text-emerald-800"
                          }`}
                        >
                          {n}
                          {conf.includes(n) ? " ⚠" : ""}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </Card>
      </div>

      {/* En turno con actividad */}
      <Card title={t("dia.enTurnoConActTitulo", { n: enTurnoConAct.length })} icon="✅" collapsible defaultOpen={false}>
        {enTurnoConAct.length === 0 ? (
          <p className="text-sm text-slate-400">{t("dia.enTurnoConActVacio")}</p>
        ) : (
          <div className="space-y-4">
            {agruparPorPuesto(enTurnoConAct).map((g) => (
              <SubgrupoPuesto key={g.key} label={g.label} n={g.items.length}>
                <div className="divide-y divide-slate-100">
                  {g.items.map((p) => (
                    <div key={p.id} className="flex items-start gap-3 py-3">
                      <Avatar name={p.nombre} />
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="break-words text-sm font-semibold text-slate-950">{p.nombre}</span>
                          <Badge className={codigoCls(p.rol, finde)}>{p.rol}</Badge>
                          {p.tieneViatico && <Badge className="border-orange-600 bg-orange-600 text-white">{t("dia.viaticoBadge")}</Badge>}
                          <MarcasDia {...marcaDe(p.nombre)} t={t} />
                        </div>
                        <div className="mt-1.5 flex flex-wrap gap-1">
                          {p.acts.map((a) => (
                            <span key={a.id} className="rounded-full border border-emerald-200 bg-white px-2 py-0.5 text-[11px] text-emerald-800">
                              {a.titulo}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </SubgrupoPuesto>
            ))}
          </div>
        )}
      </Card>

      {/* En turno sin actividad — abierta por defecto: requiere asignar. */}
      <Card title={t("dia.enTurnoSinActTitulo", { n: enTurnoSinAct.length })} icon={enTurnoSinAct.length > 0 ? "⚠️" : "✅"} collapsible defaultOpen>
        {enTurnoSinAct.length === 0 ? (
          <p className="text-sm text-slate-400">{t("dia.enTurnoSinActVacio")}</p>
        ) : (
          <div className="space-y-4">
            {agruparPorPuesto(enTurnoSinAct).map((g) => (
              <SubgrupoPuesto key={g.key} label={g.label} n={g.items.length}>
                <div className="divide-y divide-slate-100">
                  {g.items.map((p) => (
                    <div key={p.id} className="py-3">
                      <div className="flex items-start gap-3">
                        <Avatar name={p.nombre} />
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="break-words text-sm font-semibold text-slate-950">{p.nombre}</span>
                            <Badge className={codigoCls(p.rol, finde)}>{p.rol}</Badge>
                            <MarcasDia {...marcaDe(p.nombre)} t={t} />
                          </div>
                          <div className="mt-0.5 text-xs text-slate-500">{p.puesto}</div>
                        </div>
                      </div>
                      <button
                        onClick={() => setModalActividad(nuevaAct([p.nombre], p.puestoOperativo || ""))}
                        className="mt-2 inline-flex min-h-touch w-full items-center justify-center rounded-xl bg-amber-700 px-3 py-2 text-sm font-semibold text-white transition-all hover:bg-amber-800 active:scale-95 active:brightness-90 sm:w-auto"
                      >
                        {t("dia.asignar")}
                      </button>
                    </div>
                  ))}
                </div>
              </SubgrupoPuesto>
            ))}
          </div>
        )}
      </Card>

      {/* Fuera de turno */}
      <Card title={t("dia.fueraDeTurnoTitulo", { n: fueraDeTurno.length })} icon="📴" collapsible defaultOpen={false}>
        {fueraDeTurno.length === 0 ? (
          <p className="text-sm text-slate-400">{t("dia.fueraDeTurnoVacio")}</p>
        ) : (
          <div className="space-y-4">
            {Object.entries(fueraPorCat)
              .sort(([a], [b]) => (catLabel[a] || "z").localeCompare(catLabel[b] || "z"))
              .map(([cat, list]) => (
                <div key={cat}>
                  <div className="mb-2 flex items-center gap-2">
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${catCls[cat]}`}>{catLabel[cat] || "Sin marcar"}</span>
                    <span className="text-xs text-slate-400">
                      {t("dia.nFuncionarios", { n: list.length, plural: plural(list.length) })}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {list.map((p) => (
                      <div key={p.id} className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2">
                        <Avatar name={p.nombre} />
                        <div>
                          <div className="text-sm font-semibold text-slate-900">{p.nombre}</div>
                          <div className="text-[10px] text-slate-400">{(p.puestoOperativo || "").replace("Puesto ", "")}</div>
                          <div className="mt-1 flex flex-wrap gap-1">
                            <MarcasDia {...marcaDe(p.nombre)} t={t} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        )}
      </Card>

      {/* Con viático */}
      {conViatico.length > 0 && (
        <Card title={t("dia.conViaticoTitulo", { n: conViatico.length })} icon="💵" collapsible defaultOpen={false}>
          <div className="space-y-4">
            {agruparPorPuesto(conViatico).map((g) => (
              <SubgrupoPuesto key={g.key} label={g.label} n={g.items.length}>
                <div className="divide-y divide-slate-100">
                  {g.items.map((p) => (
                    <div key={p.id} className="flex items-start gap-3 py-2.5">
                      <Avatar name={p.nombre} />
                      <div className="min-w-0 flex-1">
                        <div className="font-semibold text-slate-950">{p.nombre}</div>
                        <div className="mt-1 flex flex-wrap gap-1">
                          {p.acts
                            .filter((a) => a.viatico)
                            .map((a) => (
                              <span key={a.id} className="rounded-full border border-orange-200 bg-orange-50 px-2 py-0.5 text-[11px] text-orange-800">
                                {a.titulo}
                                {a.lugar ? ` · ${a.lugar}` : ""}
                              </span>
                            ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </SubgrupoPuesto>
            ))}
          </div>
        </Card>
      )}

      {/* Modal de actividad:
          - Móvil (< 768 px): BottomSheet deslizable desde la base.
          - Desktop (≥ 768 px): Modal centrado clásico.
          Ambas rutas renderizan el mismo ModalActividad. */}
      {modalActividad && (
        isMobile ? (
          <BottomSheet open={!!modalActividad} onClose={() => setModalActividad(null)} title={tituloModal}>
            {modalContent}
          </BottomSheet>
        ) : (
          modalContent
        )
      )}
    </section>
  );
}
