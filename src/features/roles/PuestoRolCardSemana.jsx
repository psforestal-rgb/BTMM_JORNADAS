import { useEffect, useMemo, useState } from "react";
import Badge from "../../ui/Badge.jsx";
import Icon from "../../ui/Icon.jsx";
import { codigoCls } from "../../ui/styles.js";
import { meses, dias, diasLargos } from "../../data/calendario.js";
import { opcionesModalidad } from "../../data/opciones.js";
import { dim, isoFecha, primerDiaLaboral } from "../../domain/fechas.js";
import {
  rolKey,
  rolCfgKey,
  esRolActivo,
  generarValorPatron,
  categoriaDe,
  formatearCategoria,
  patchCategoriaDia,
} from "../../domain/roles.js";
import { actividadesEnDia } from "../../domain/actividades.js";
import { indexarReposiciones } from "../../domain/reposicion.js";
import { useFeriadosDelAno } from "../../lib/useFeriadosDelAno.js";
import { useT } from "../../i18n/useT.js";
import MarcaReposicionCelda from "../reposicion/MarcaReposicionCelda.jsx";
import MenuCelda from "./MenuCelda.jsx";
import ConflictoModal from "./ConflictoModal.jsx";
import ActividadesDiaModal from "./ActividadesDiaModal.jsx";
import Modal from "../../ui/Modal.jsx";

/**
 * Calcula las semanas del mes (lunes a domingo) como arreglos de días [1..N].
 * Las semanas parciales del primer/último ciclo se reportan también.
 */
function semanasDelMes(year, month) {
  const total = dim(year, month);
  const semanas = [];
  let actual = [];
  for (let d = 1; d <= total; d++) {
    const dow = new Date(year, month, d).getDay(); // 0..6 (Dom=0)
    actual.push(d);
    if (dow === 0 || d === total) {
      semanas.push(actual);
      actual = [];
    }
  }
  return semanas;
}

function indiceSemanaActual(semanas, year, month) {
  const hoy = new Date();
  if (hoy.getFullYear() !== year || hoy.getMonth() !== month) return 0;
  const indice = semanas.findIndex((semana) => semana.includes(hoy.getDate()));
  return indice >= 0 ? indice : 0;
}

/**
 * Vista alterna de Roles por semana, optimizada para uso móvil/campo.
 * Conserva: códigos T/L/V/I/O, anillo INICIO (verde), conflicto (rojo),
 * edición por fila, modalidad/Aplicar patrón, CANTIDAD EN TURNO (por
 * semana en este modo) y los mismos modales (MenuCelda, ConflictoModal,
 * ActividadesDiaModal).
 *
 * Diferencia con PuestoRolCard:
 *  - Una tarjeta por funcionario (apilable en móvil).
 *  - 7 botones de día por semana (≥ 48 px de alto/ancho).
 *  - Selector de semana visible.
 */
export default function PuestoRolCardSemana({
  grupo,
  year,
  month,
  roleData,
  setRoleData,
  personas,
  actividadesPlan,
  setActividadesPlan,
  reposiciones = [],
  hj,
}) {
  const t = useT();
  const { trabajadas, reposiciones: reposicionesDia } = useMemo(
    () => indexarReposiciones(reposiciones, hj),
    [reposiciones, hj],
  );
  const semanas = useMemo(() => semanasDelMes(year, month), [year, month]);
  const totalSemanas = semanas.length;
  const [semIdx, setSemIdx] = useState(() => indiceSemanaActual(semanas, year, month));
  const semana = semanas[Math.min(semIdx, totalSemanas - 1)] || [];
  const hoy = new Date();
  const diaActual = hoy.getFullYear() === year && hoy.getMonth() === month ? hoy.getDate() : null;
  const feriados = useFeriadosDelAno(year);
  const inicio = primerDiaLaboral(year, month, feriados);

  const [editRows, setEditRows] = useState({});
  const [menu, setMenu] = useState(null);
  const [conflictoActivo, setConflictoActivo] = useState(null);
  const [actividadesDiaModal, setActividadesDiaModal] = useState(null);
  const [seleccionMultiple, setSeleccionMultiple] = useState(false);
  const [seleccionados, setSeleccionados] = useState(() => new Set());
  const [categoriaPendiente, setCategoriaPendiente] = useState(null);
  const [deshacerData, setDeshacerData] = useState(null);
  const todosLosDias = useMemo(() => Array.from({ length: dim(year, month) }, (_, i) => i + 1), [year, month]);

  useEffect(() => {
    setSemIdx(indiceSemanaActual(semanas, year, month));
  }, [semanas, year, month]);

  const toggleEdit = (nombre) => setEditRows((prev) => ({ ...prev, [nombre]: !prev[nombre] }));

  const getCfg = (persona) =>
    roleData[rolCfgKey(year, month, grupo.nombre, persona)] || personas.find((f) => f.nombre === persona)?.modalidad || "10x5";

  const setCfg = (persona, valor) =>
    setRoleData((prev) => ({ ...prev, [rolCfgKey(year, month, grupo.nombre, persona)]: valor }));

  const getCelda = (persona, dia) =>
    roleData[rolKey(year, month, grupo.nombre, persona, dia)] ?? generarValorPatron(getCfg(persona), dia, inicio, year, month);

  const aplicarPatron = (persona) => {
    const modalidad = getCfg(persona);
    const cambios = {};
    todosLosDias.forEach((d) => {
      cambios[rolKey(year, month, grupo.nombre, persona, d)] = generarValorPatron(modalidad, d, inicio, year, month);
    });
    setRoleData((prev) => ({ ...prev, ...cambios }));
  };

  // Renumera toda la fila tras un cambio puntual de categoría en `diaEditado`.
  const renumerarFila = (persona, diaEditado, categoria) => {
    const modalidad = getCfg(persona);
    const categorias = {};
    todosLosDias.forEach((d) => {
      categorias[d] = categoriaDe(getCelda(persona, d));
    });
    categorias[diaEditado] = categoria;
    const cambios = {};
    let anterior = null;
    let consecutivo = 0;
    todosLosDias.forEach((d) => {
      const cat = categorias[d] || "";
      if (!cat) {
        anterior = null;
        consecutivo = 0;
        cambios[rolKey(year, month, grupo.nombre, persona, d)] = "";
        return;
      }
      if (cat !== anterior) {
        anterior = cat;
        consecutivo = 1;
      } else {
        consecutivo += 1;
      }
      cambios[rolKey(year, month, grupo.nombre, persona, d)] = formatearCategoria(cat, consecutivo, modalidad);
    });
    setRoleData((prev) => ({ ...prev, ...cambios }));
  };

  const seleccionarMenu = (valor) => {
    if (!menu) return;
    renumerarFila(menu.persona, menu.dia, valor);
    setMenu(null);
  };

  const abrirConflicto = (nombre, d, val) => {
    const iso = isoFecha(year, month, d);
    const acts = actividadesEnDia(actividadesPlan || [], iso).filter((a) => (a.funcionarios || []).includes(nombre));
    setConflictoActivo({ persona: nombre, pi: 0, dia: d, valor: val, iso, acts, esInicio: d === inicio });
  };

  const cantidadTurnoSemana = semana.map((d) =>
    grupo.funcionarios.reduce((acc, nombre) => (esRolActivo(getCelda(nombre, d)) ? acc + 1 : acc), 0)
  );

  const toggleSeleccion = (nombre, d) => {
    const key = `${nombre}\u0000${d}`;
    setSeleccionados((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key); else next.add(key);
      return next;
    });
  };
  const aplicarSeleccion = () => {
    if (!categoriaPendiente || seleccionados.size === 0) return;
    let next = roleData;
    for (const key of seleccionados) {
      const [persona, diaTexto] = key.split("\u0000");
      const patch = patchCategoriaDia({
        roleData: next, personas, year, month, persona, dia: Number(diaTexto), categoria: categoriaPendiente, feriados,
      });
      next = { ...next, ...patch };
    }
    setDeshacerData(roleData);
    setRoleData(next);
    setSeleccionados(new Set());
    setCategoriaPendiente(null);
    setSeleccionMultiple(false);
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm ring-1 ring-slate-100">
      <div className={`flex flex-col gap-2 border-b border-slate-200 p-4 ${grupo.color}`}>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-lg font-semibold">{grupo.nombre}</h3>
          <Badge className="border-white/50 bg-white/70 text-slate-900">
            {meses[month]} {year}
          </Badge>
        </div>
        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={() => { setSeleccionMultiple((v) => !v); setSeleccionados(new Set()); }} aria-pressed={seleccionMultiple} className={`min-h-touch rounded-xl px-3 text-sm font-semibold ${seleccionMultiple ? "bg-violet-700 text-white" : "bg-white text-slate-800"}`}>
            {t("roles.multi.activar")}
          </button>
          {deshacerData && <button type="button" onClick={() => { setRoleData(deshacerData); setDeshacerData(null); }} className="min-h-touch rounded-xl bg-white px-3 text-sm font-semibold text-amber-800">{t("roles.multi.deshacer")}</button>}
        </div>
        {/* Selector de semana */}
        <nav aria-label={t("roles.semanaAria")} className="flex flex-wrap items-center gap-1.5 rounded-2xl bg-white/70 p-1.5">
          <button
            type="button"
            onClick={() => setSemIdx((i) => Math.max(0, i - 1))}
            disabled={semIdx === 0}
            aria-label={t("roles.semanaAnterior")}
            className="inline-flex min-h-touch min-w-touch items-center justify-center rounded-xl bg-white px-2 disabled:opacity-40"
          >
            <Icon name="chevronLeft" size={18} />
          </button>
          <div className="min-w-0 flex-1 text-center text-sm font-bold text-slate-800">
            {t("roles.semanaRango", { ini: semana[0], fin: semana[semana.length - 1], mes: meses[month].toLocaleLowerCase("es") })}
          </div>
          <button
            type="button"
            onClick={() => setSemIdx((i) => Math.min(totalSemanas - 1, i + 1))}
            disabled={semIdx === totalSemanas - 1}
            aria-label={t("roles.semanaSiguiente")}
            className="inline-flex min-h-touch min-w-touch items-center justify-center rounded-xl bg-white px-2 disabled:opacity-40"
          >
            <Icon name="chevronRight" size={18} />
          </button>
          <button
            type="button"
            onClick={() => setSemIdx(indiceSemanaActual(semanas, year, month))}
            className="min-h-touch rounded-xl bg-white px-3 text-sm font-bold text-emerald-800"
          >
            {t("topbar.hoy")}
          </button>
        </nav>
      </div>

      <div className="space-y-3 bg-slate-50 p-3">
        {seleccionMultiple && (
          <div className="sticky top-0 z-20 rounded-2xl border border-violet-300 bg-violet-50 p-3 shadow-lg">
            <p className="text-sm font-semibold text-violet-950">{t("roles.multi.seleccionados", { n: seleccionados.size })}</p>
            <div className="mt-2 grid grid-cols-5 gap-1">
              {["T", "L", "V", "I", "O"].map((cat) => <button key={cat} type="button" disabled={seleccionados.size === 0} onClick={() => setCategoriaPendiente(cat)} className="min-h-touch rounded-xl bg-white text-base font-bold text-violet-900 disabled:opacity-40">{cat}</button>)}
            </div>
          </div>
        )}
        {grupo.funcionarios.map((nombre) => {
          const editing = !!editRows[nombre];
          const modalidad = getCfg(nombre);
          return (
            <article key={nombre} className={`rounded-2xl border ${editing ? "border-emerald-300 bg-emerald-50/40" : "border-slate-200 bg-white"} p-3 shadow-sm`}>
              <header className="mb-2 flex items-start justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <p className="break-words text-sm font-semibold leading-tight text-slate-900">{nombre}</p>
                  <p className="mt-0.5 text-[11px] text-slate-500">{modalidad}</p>
                </div>
                <button
                  type="button"
                  onClick={() => toggleEdit(nombre)}
                  aria-pressed={editing}
                  aria-label={editing ? t("roles.bloquear", { nombre }) : t("roles.permitir", { nombre })}
                  className="inline-flex min-h-touch min-w-touch shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white px-3 text-slate-700"
                >
                  <Icon name={editing ? "unlock" : "lock"} size={18} />
                </button>
              </header>

              {editing && (
                <div className="mb-2 rounded-xl border border-emerald-200 bg-emerald-50 p-2">
                  <label className="block text-[10px] font-bold uppercase text-emerald-900">{t("roles.editarTipoRol")}</label>
                  <div className="mt-1 flex gap-2">
                    <select
                      value={modalidad}
                      onChange={(e) => setCfg(nombre, e.target.value)}
                      className="min-h-touch min-w-0 flex-1 rounded-lg border border-emerald-300 bg-white px-2 text-xs font-bold"
                    >
                      {opcionesModalidad.map((x) => (
                        <option key={x}>{x}</option>
                      ))}
                    </select>
                    <button
                      type="button"
                      onClick={() => aplicarPatron(nombre)}
                      className="min-h-touch rounded-lg bg-emerald-800 px-3 text-[11px] font-semibold text-white"
                    >
                      {t("roles.aplicar")}
                    </button>
                  </div>
                </div>
              )}

              {/* Botones de día: el anillo de conflicto se hizo más fino
                  (ring-2) para no comerse al texto cuando la columna es
                  estrecha, y el min-h subió a 60 px para que día+número+
                  código quepan con zoom de sistema activo. */}
              <div className="flex snap-x gap-2 overflow-x-auto pb-1" data-swipe-ignore>
                {semana.map((d) => {
                  const dow = new Date(year, month, d).getDay();
                  const finde = dow === 0 || dow === 6;
                  const val = getCelda(nombre, d);
                  const iso = isoFecha(year, month, d);
                  const tieneActividad = actividadesEnDia(actividadesPlan || [], iso).some((a) => (a.funcionarios || []).includes(nombre));
                  const conflicto = tieneActividad && !esRolActivo(val);
                  const esInicio = editing && d === inicio;
                  const cls = codigoCls(val, finde);
                  const selectedKey = `${nombre}\u0000${d}`;
                  const selected = seleccionados.has(selectedKey);
                  const clickable = seleccionMultiple || conflicto || editing;
                  const onClick = seleccionMultiple
                    ? () => toggleSeleccion(nombre, d)
                    : conflicto
                    ? () => abrirConflicto(nombre, d, val)
                    : editing
                    ? () => setMenu({ persona: nombre, pi: 0, dia: d, valor: val, esInicio })
                    : undefined;
                  return (
                    <button
                      type="button"
                      key={`${nombre}-${d}`}
                      aria-current={d === diaActual ? "date" : undefined}
                      aria-pressed={seleccionMultiple ? selected : undefined}
                      disabled={!clickable}
                      onClick={onClick}
                      title={conflicto ? t("roles.titleConflicto") : editing ? t("roles.titleEditar") : t("roles.titleSinEdicion")}
                      className={`relative flex min-h-[64px] min-w-touch snap-start flex-col items-center justify-center gap-1 overflow-hidden rounded-xl border-2 px-1 py-1.5 text-xs font-semibold ${cls} ${
                        selected ? "ring-4 ring-inset ring-violet-600" : ""
                      } ${
                        d === diaActual ? "ring-2 ring-inset ring-emerald-500" : ""
                      } ${
                        esInicio ? "ring-2 ring-inset ring-emerald-700" : ""
                      } ${conflicto ? "ring-2 ring-inset ring-red-600" : ""} ${
                        clickable ? "cursor-pointer hover:brightness-95" : "cursor-default opacity-90"
                      }`}
                    >
                      <span className="text-xs uppercase leading-none opacity-70">{dias[dow]}</span>
                      <span className="text-sm font-bold leading-none">{d}</span>
                      <span className="inline-flex min-w-7 items-center justify-center rounded bg-white/55 px-1 text-sm font-bold leading-none shadow-sm ring-1 ring-black/5">
                        {(val || "—").toUpperCase()}
                      </span>
                      <MarcaReposicionCelda
                        trabajada={trabajadas[`${nombre}|${iso}`]}
                        reposicion={reposicionesDia[`${nombre}|${iso}`]}
                      />
                      {conflicto && (
                        <span className="pnlq-pulse absolute right-0 top-0 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-700 px-1 text-xs font-bold text-white">
                          !
                        </span>
                      )}
                      {esInicio && (
                        <span className="absolute bottom-0 left-0 right-0 rounded-b-md bg-emerald-900 text-center text-[11px] font-bold tracking-wider text-white">
                          {t("roles.initRing")}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </article>
          );
        })}

        {/* Resumen: CANTIDAD EN TURNO por día de la semana visible */}
        <article className="rounded-2xl border border-slate-300 bg-white p-3 shadow-sm">
          <header className="mb-2 flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600">{t("roles.cantidadEnTurnoSemana")}</h4>
            <span className="text-xs font-bold text-slate-500">
              {t("roles.semanaResumen", { n: semIdx + 1, total: totalSemanas })}
            </span>
          </header>
          <div className="flex snap-x gap-2 overflow-x-auto pb-1" data-swipe-ignore>
            {semana.map((d, i) => {
              const dow = new Date(year, month, d).getDay();
              return (
                <div
                  key={`turno-${d}`}
                  aria-current={d === diaActual ? "date" : undefined}
                  className={`flex min-w-touch snap-start flex-col items-center rounded-lg py-1.5 ${
                    d === diaActual ? "bg-emerald-100 ring-2 ring-emerald-400" : "bg-slate-50"
                  }`}
                >
                  <span className="text-xs uppercase text-slate-500">{dias[dow]}</span>
                  <span className="text-xs text-slate-500">{d}</span>
                  <span className="text-base font-bold text-slate-900">{cantidadTurnoSemana[i]}</span>
                </div>
              );
            })}
          </div>
          <p className="mt-2 text-xs text-slate-500">{diasLargos[new Date(year, month, semana[0]).getDay()]} a {diasLargos[new Date(year, month, semana[semana.length - 1]).getDay()]}</p>
        </article>
      </div>

      {menu && <MenuCelda data={menu} cerrar={() => setMenu(null)} seleccionar={seleccionarMenu} />}
      {conflictoActivo && (
        <ConflictoModal
          data={conflictoActivo}
          cerrar={() => setConflictoActivo(null)}
          onModificarRol={() => {
            const d = conflictoActivo;
            setConflictoActivo(null);
            setMenu({ persona: d.persona, pi: 0, dia: d.dia, valor: d.valor, esInicio: d.esInicio });
          }}
          onModificarActividad={() => {
            setActividadesDiaModal({ persona: conflictoActivo.persona, iso: conflictoActivo.iso });
            setConflictoActivo(null);
          }}
        />
      )}
      {actividadesDiaModal && (
        <ActividadesDiaModal
          funcionario={actividadesDiaModal.persona}
          iso={actividadesDiaModal.iso}
          allActividadesPlan={actividadesPlan || []}
          personas={personas}
          setActividadesPlan={setActividadesPlan}
          cerrar={() => setActividadesDiaModal(null)}
        />
      )}
      <Modal
        open={!!categoriaPendiente}
        onClose={() => setCategoriaPendiente(null)}
        title={t("roles.multi.confirmarTitulo")}
        description={t("roles.multi.confirmarDesc", { n: seleccionados.size, cat: categoriaPendiente || "" })}
        size="sm"
        actions={(
          <div className="ml-auto flex gap-2">
            <button type="button" onClick={() => setCategoriaPendiente(null)} className="min-h-touch rounded-xl border border-line px-4 text-sm font-semibold">{t("acciones.cancelar")}</button>
            <button type="button" onClick={aplicarSeleccion} className="min-h-touch rounded-xl bg-brand px-4 text-sm font-semibold text-brand-fg">{t("acciones.confirmar")}</button>
          </div>
        )}
      >
        <p className="text-sm text-ink-muted">{t("roles.multi.nota")}</p>
      </Modal>
    </div>
  );
}
