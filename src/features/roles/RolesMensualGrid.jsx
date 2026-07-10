import { useEffect, useMemo, useRef, useState } from "react";
import Badge from "../../ui/Badge.jsx";
import Icon from "../../ui/Icon.jsx";
import { meses, dias } from "../../data/calendario.js";
import { opcionesModalidad } from "../../data/opciones.js";
import { isoFecha, primerDiaLaboral } from "../../domain/fechas.js";
import {
  rolKey,
  rolCfgKey,
  esRolActivo,
  generarValorPatron,
  categoriaDe,
  formatearCategoria,
} from "../../domain/roles.js";
import { actividadesEnDia } from "../../domain/actividades.js";
import { indexarReposiciones } from "../../domain/reposicion.js";
import { useFeriadosDelAno } from "../../lib/useFeriadosDelAno.js";
import { useT } from "../../i18n/useT.js";
import RoleCell from "./RoleCell.jsx";
import MenuCelda from "./MenuCelda.jsx";
import ConflictoModal from "./ConflictoModal.jsx";
import ActividadesDiaModal from "./ActividadesDiaModal.jsx";

function monthTone(month) {
  return month % 2 === 0
    ? {
        band: "bg-emerald-50 text-emerald-950",
        day: "bg-emerald-50 text-emerald-950",
      }
    : {
        band: "bg-sky-50 text-sky-950",
        day: "bg-sky-50 text-sky-950",
      };
}

function rowId(puesto, nombre) {
  return `${puesto}|${nombre}`;
}

function nombreEnDosLineas(nombreCompleto) {
  const partes = String(nombreCompleto || "").trim().split(/\s+/).filter(Boolean);
  if (partes.length <= 1) {
    return { nombre: nombreCompleto, apellido: "" };
  }
  return {
    nombre: partes.slice(0, -1).join(" "),
    apellido: partes[partes.length - 1],
  };
}

export default function RolesMensualGrid({
  grupos,
  days,
  year,
  month,
  compact,
  focusDate,
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
  const [editRows, setEditRows] = useState({});
  const [menu, setMenu] = useState(null);
  const [conflictoActivo, setConflictoActivo] = useState(null);
  const [actividadesDiaModal, setActividadesDiaModal] = useState(null);
  const feriados = useFeriadosDelAno(year);
  const inicio = primerDiaLaboral(year, month, feriados);
  const scrollRef = useRef(null);
  const hoy = new Date();
  const diaActual = hoy.getFullYear() === year && hoy.getMonth() === month ? hoy.getDate() : null;
  const tone = monthTone(month);

  useEffect(() => {
    const sameMonth = focusDate?.year === year && focusDate?.month === month;
    const targetDay = sameMonth ? focusDate.day : diaActual;
    const contenedor = scrollRef.current;
    if (!contenedor) return;
    const objetivo = targetDay ? contenedor.querySelector(`[data-dia="${targetDay}"]`) : null;
    if (!objetivo) {
      // Mes sin "hoy" ni fecha buscada: arrancar desde el día 1 en lugar de
      // conservar el desplazamiento del mes anterior.
      contenedor.scrollTo({ left: 0, behavior: "auto" });
      return;
    }
    contenedor.scrollTo({
      left: Math.max(0, objetivo.offsetLeft - contenedor.clientWidth / 2 + objetivo.clientWidth / 2),
      behavior: focusDate ? "smooth" : "auto",
    });
  }, [diaActual, focusDate, month, year]);

  // Desplaza la tabla horizontalmente N columnas de día (± una semana),
  // pensado para moverse por el mes con el pulgar en teléfono.
  const scrollDias = (n) => {
    const contenedor = scrollRef.current;
    if (!contenedor) return;
    const celda = contenedor.querySelector("th[data-dia]");
    const ancho = celda?.getBoundingClientRect().width || 44;
    contenedor.scrollBy({ left: n * ancho, behavior: "smooth" });
  };

  // Recentra la tabla en el día de hoy (solo aplica si el mes visible lo contiene).
  const centrarHoy = () => {
    const contenedor = scrollRef.current;
    const objetivo = diaActual ? contenedor?.querySelector(`[data-dia="${diaActual}"]`) : null;
    if (!contenedor || !objetivo) return;
    contenedor.scrollTo({
      left: Math.max(0, objetivo.offsetLeft - contenedor.clientWidth / 2 + objetivo.clientWidth / 2),
      behavior: "smooth",
    });
  };

  const toggleEdit = (puesto, nombre) =>
    setEditRows((prev) => ({ ...prev, [rowId(puesto, nombre)]: !prev[rowId(puesto, nombre)] }));

  const getCfg = (grupo, persona) =>
    roleData[rolCfgKey(year, month, grupo.nombre, persona)] ||
    personas.find((f) => f.nombre === persona)?.modalidad ||
    "10x5";

  const setCfg = (grupo, persona, valor) =>
    setRoleData((prev) => ({ ...prev, [rolCfgKey(year, month, grupo.nombre, persona)]: valor }));

  const getCelda = (grupo, persona, dia) =>
    roleData[rolKey(year, month, grupo.nombre, persona, dia)] ??
    generarValorPatron(getCfg(grupo, persona), dia, inicio, year, month);

  const aplicarPatron = (grupo, persona) => {
    const modalidad = getCfg(grupo, persona);
    const cambios = {};
    days.forEach((d) => {
      cambios[rolKey(year, month, grupo.nombre, persona, d)] = generarValorPatron(modalidad, d, inicio, year, month);
    });
    setRoleData((prev) => ({ ...prev, ...cambios }));
  };

  const renumerarFila = (grupo, persona, diaEditado, categoria) => {
    const modalidad = getCfg(grupo, persona);
    const categorias = {};
    days.forEach((d) => {
      categorias[d] = categoriaDe(getCelda(grupo, persona, d));
    });
    categorias[diaEditado] = categoria;
    const cambios = {};
    let categoriaAnterior = null;
    let consecutivo = 0;
    days.forEach((d) => {
      const cat = categorias[d] || "";
      if (!cat) {
        categoriaAnterior = null;
        consecutivo = 0;
        cambios[rolKey(year, month, grupo.nombre, persona, d)] = "";
        return;
      }
      if (cat !== categoriaAnterior) {
        categoriaAnterior = cat;
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
    renumerarFila(menu.grupo, menu.persona, menu.dia, valor);
    setMenu(null);
  };

  const abrirConflicto = (grupo, nombre, d, val) => {
    const iso = isoFecha(year, month, d);
    const acts = actividadesEnDia(actividadesPlan || [], iso).filter((a) => (a.funcionarios || []).includes(nombre));
    setConflictoActivo({ grupo, persona: nombre, pi: 0, dia: d, valor: val, iso, acts, esInicio: d === inicio });
  };

  const totalFuncionarios = grupos.reduce((acc, grupo) => acc + grupo.funcionarios.length, 0);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm ring-1 ring-slate-100">
      <div className={`flex flex-col gap-2 border-b border-slate-200 p-3 ${tone.band}`}>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h3 className="text-base font-bold sm:text-lg">{t("roles.vistaMensualLineal")}</h3>
            <p className="text-[11px] font-semibold opacity-75">
              {t("roles.resumenFiltro", { n: totalFuncionarios })}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {/* Desplazamiento por días con el pulgar: ‹ semana · (centrar hoy / 7 días) · semana › */}
            <div
              role="group"
              aria-label={t("roles.desplazarDias")}
              className="pnlq-no-print inline-flex items-stretch overflow-hidden rounded-lg border border-black/10 bg-white/85 shadow-sm"
            >
              <button
                type="button"
                onClick={() => scrollDias(-7)}
                aria-label={t("roles.semanaAnterior")}
                className="inline-flex min-h-touch min-w-touch items-center justify-center px-2 text-slate-700 hover:bg-white"
              >
                <Icon name="chevronLeft" size={16} />
              </button>
              {diaActual ? (
                <button
                  type="button"
                  onClick={centrarHoy}
                  className="inline-flex min-h-touch items-center whitespace-nowrap border-x border-black/10 px-2 text-[11px] font-bold text-emerald-900 hover:bg-white"
                >
                  {t("roles.centrarHoy")}
                </button>
              ) : (
                <span className="inline-flex min-h-touch items-center whitespace-nowrap border-x border-black/10 px-2 text-[11px] font-bold text-slate-600">
                  {t("roles.semana7")}
                </span>
              )}
              <button
                type="button"
                onClick={() => scrollDias(7)}
                aria-label={t("roles.semanaSiguiente")}
                className="inline-flex min-h-touch min-w-touch items-center justify-center px-2 text-slate-700 hover:bg-white"
              >
                <Icon name="chevronRight" size={16} />
              </button>
            </div>
            <Badge className="border-white/60 bg-white/80 text-slate-900">
              {meses[month]} {year}
            </Badge>
          </div>
        </div>
      </div>

      <div ref={scrollRef} className="overflow-auto bg-white">
        <table
          className={`border-separate border-spacing-0 text-[11px] sm:text-xs ${
            compact ? "min-w-[1040px] lg:min-w-[1140px]" : "min-w-[1160px] lg:min-w-[1380px]"
          }`}
        >
          <thead>
            <tr>
              <th className="sticky left-0 z-30 min-w-[8rem] max-w-[8rem] border-b border-r border-slate-200 bg-white p-1.5 text-left text-[10px] font-semibold uppercase text-slate-500 shadow-[2px_0_8px_rgba(15,23,42,0.05)] sm:min-w-[14rem] sm:max-w-[14rem] sm:p-3 sm:text-[11px] lg:min-w-[18rem] lg:max-w-[18rem]">
                {t("roles.funcionarioCol")}
              </th>
              <th className={`border-b border-r border-slate-200 p-2 text-center text-sm font-black uppercase ${tone.band}`} colSpan={days.length}>
                {meses[month]} {year}
              </th>
            </tr>
            <tr>
              <th className="sticky left-0 z-30 min-w-[8rem] max-w-[8rem] border-b border-r border-slate-200 bg-white p-1.5 text-left text-[10px] font-bold uppercase text-slate-500 shadow-[2px_0_8px_rgba(15,23,42,0.05)] sm:min-w-[14rem] sm:max-w-[14rem] sm:p-3 sm:text-[11px] lg:min-w-[18rem] lg:max-w-[18rem]">
                {t("roles.puestoFuncionario")}
              </th>
              {days.map((d) => {
                const dow = new Date(year, month, d).getDay();
                const isWeekend = dow === 0 || dow === 6;
                const isToday = d === diaActual;
                const isFocused = focusDate?.year === year && focusDate?.month === month && focusDate?.day === d;
                return (
                  <th
                    key={d}
                    data-dia={d}
                    aria-current={isToday ? "date" : undefined}
                    className={`border-b border-r border-slate-200 p-0.5 text-center font-semibold sm:p-1 ${
                      isToday
                        ? "bg-emerald-700 text-white ring-2 ring-inset ring-emerald-300"
                        : isFocused
                          ? "bg-amber-100 text-amber-950 ring-2 ring-inset ring-amber-400"
                        : isWeekend
                          ? "bg-slate-100 text-slate-900"
                          : tone.day
                    }`}
                  >
                    <div className="mx-auto flex h-9 w-7 flex-col items-center justify-center rounded-lg bg-white/80 shadow-sm ring-1 ring-black/5 sm:h-10 sm:w-9">
                      <span className="text-[9px] uppercase leading-none text-slate-500">{dias[dow]}</span>
                      <span className="mt-0.5 text-[12px] leading-none font-black text-slate-950">{d}</span>
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {grupos.length === 0 ? (
              <tr>
                <td
                  className="sticky left-0 z-10 min-w-[8rem] max-w-[8rem] border-b border-r border-slate-200 bg-white p-2 text-xs font-bold text-slate-600 shadow-[2px_0_8px_rgba(15,23,42,0.06)] sm:min-w-[14rem] sm:max-w-[14rem] lg:min-w-[18rem] lg:max-w-[18rem]"
                  colSpan={days.length + 1}
                >
                  {t("roles.sinFuncionariosFiltro")}
                </td>
              </tr>
            ) : (
              grupos.map((grupo) => (
                <RowsGrupo
                  key={grupo.nombre}
                  grupo={grupo}
                  days={days}
                  year={year}
                  month={month}
                  compact={compact}
                  editRows={editRows}
                  toggleEdit={toggleEdit}
                  getCfg={getCfg}
                  setCfg={setCfg}
                  getCelda={getCelda}
                  aplicarPatron={aplicarPatron}
                  abrirConflicto={abrirConflicto}
                  setMenu={setMenu}
                  inicio={inicio}
                  actividadesPlan={actividadesPlan}
                  trabajadas={trabajadas}
                  reposicionesDia={reposicionesDia}
                  t={t}
                />
              ))
            )}
          </tbody>
        </table>
      </div>

      {menu && <MenuCelda data={menu} cerrar={() => setMenu(null)} seleccionar={seleccionarMenu} />}
      {conflictoActivo && (
        <ConflictoModal
          data={conflictoActivo}
          cerrar={() => setConflictoActivo(null)}
          onModificarRol={() => {
            const d = conflictoActivo;
            setConflictoActivo(null);
            setMenu({ grupo: d.grupo, persona: d.persona, pi: 0, dia: d.dia, valor: d.valor, esInicio: d.esInicio });
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
    </div>
  );
}

function RowsGrupo({
  grupo,
  days,
  year,
  month,
  compact,
  editRows,
  toggleEdit,
  getCfg,
  setCfg,
  getCelda,
  aplicarPatron,
  abrirConflicto,
  setMenu,
  inicio,
  actividadesPlan,
  trabajadas,
  reposicionesDia,
  t,
}) {
  return (
    <>
      <tr>
        <td className={`sticky left-0 z-20 border-b border-r border-slate-200 p-2 text-xs font-black uppercase shadow-[2px_0_8px_rgba(15,23,42,0.06)] ${grupo.color}`}>
          {grupo.nombre}
        </td>
        {days.map((d) => (
          <td key={`${grupo.nombre}-sep-${d}`} className="border-b border-r border-slate-200 bg-slate-50 p-0.5 text-center text-[10px] font-bold text-slate-400">
            {d}
          </td>
        ))}
      </tr>
      {grupo.funcionarios.map((nombre) => {
        const editing = !!editRows[rowId(grupo.nombre, nombre)];
        const modalidad = getCfg(grupo, nombre);
        const nombrePartes = nombreEnDosLineas(nombre);
        return (
          <tr key={`${grupo.nombre}-${nombre}`} className={editing ? "bg-emerald-50/60" : "bg-white"}>
            <td className="sticky left-0 z-10 min-w-[8rem] max-w-[8rem] border-b border-r border-slate-200 bg-white p-0.5 align-top shadow-[2px_0_8px_rgba(15,23,42,0.06)] sm:min-w-[14rem] sm:max-w-[14rem] sm:p-2 lg:min-w-[18rem] lg:max-w-[18rem]">
              <span className="pnlq-print-only font-semibold text-black">{nombre}</span>
              <div className="pnlq-no-print space-y-1 sm:space-y-2">
                <button
                  type="button"
                  onClick={() => toggleEdit(grupo.nombre, nombre)}
                  className="flex min-h-10 w-full items-center justify-between gap-1 rounded-lg border border-slate-200 bg-white px-1 py-1 text-left text-[11px] font-semibold leading-tight shadow-sm hover:bg-slate-50 sm:gap-2 sm:rounded-2xl sm:px-3 sm:py-2 sm:text-xs"
                >
                  <span className="min-w-0 flex-1 leading-[1.05]">
                    <span className="block truncate">{nombrePartes.nombre}</span>
                    {nombrePartes.apellido && <span className="block truncate">{nombrePartes.apellido}</span>}
                  </span>
                  <Icon name={editing ? "unlock" : "lock"} size={14} className="shrink-0 text-slate-500" />
                </button>
                {editing && (
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-1.5 shadow-inner sm:rounded-2xl sm:p-2">
                    <label className="mb-1 block text-[9px] font-bold uppercase text-emerald-900 sm:text-[10px]">
                      {t("roles.editarTipoRol")}
                    </label>
                    <div className="flex flex-col gap-1.5 sm:flex-row sm:gap-2">
                      <select
                        value={modalidad}
                        onChange={(e) => setCfg(grupo, nombre, e.target.value)}
                        className="min-w-0 flex-1 rounded-lg border border-emerald-300 bg-white px-2 py-1 text-[11px] font-bold sm:text-xs"
                      >
                        {opcionesModalidad.map((x) => (
                          <option key={x}>{x}</option>
                        ))}
                      </select>
                      <button
                        type="button"
                        onClick={() => aplicarPatron(grupo, nombre)}
                        className="rounded-lg bg-emerald-800 px-2 py-1 text-[10px] font-semibold text-white sm:text-[11px]"
                      >
                        {t("roles.aplicar")}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </td>
            {days.map((d) => {
              const dow = new Date(year, month, d).getDay();
              const iso = isoFecha(year, month, d);
              const val = getCelda(grupo, nombre, d);
              const tieneActividad = actividadesEnDia(actividadesPlan || [], iso).some((a) =>
                (a.funcionarios || []).includes(nombre),
              );
              const conflicto = tieneActividad && !esRolActivo(val);
              return (
                <RoleCell
                  key={`${grupo.nombre}-${nombre}-${d}`}
                  value={val}
                  compact={compact}
                  editable={editing}
                  finde={dow === 0 || dow === 6}
                  esInicio={editing && d === inicio}
                  conflicto={conflicto}
                  repoTrabajada={trabajadas[`${nombre}|${iso}`]}
                  repoReposicion={reposicionesDia[`${nombre}|${iso}`]}
                  onOpen={() => editing && setMenu({ grupo, persona: nombre, pi: 0, dia: d, valor: val, esInicio: d === inicio })}
                  onConflicto={() => abrirConflicto(grupo, nombre, d, val)}
                />
              );
            })}
          </tr>
        );
      })}
      <tr>
        <td className="sticky left-0 z-10 min-w-[8rem] max-w-[8rem] border-b border-r border-slate-200 bg-slate-100 p-1.5 text-[10px] font-bold uppercase text-slate-600 shadow-[2px_0_8px_rgba(15,23,42,0.06)] sm:min-w-[14rem] sm:max-w-[14rem] sm:p-3 sm:text-xs lg:min-w-[18rem] lg:max-w-[18rem]">
          {t("roles.cantidadEnTurno")}
        </td>
        {days.map((d) => {
          const count = grupo.funcionarios.reduce(
            (acc, nombre) => (esRolActivo(getCelda(grupo, nombre, d)) ? acc + 1 : acc),
            0,
          );
          return (
            <td
              key={`${grupo.nombre}-cantidad-${d}`}
              className="border-b border-r border-slate-200 bg-white p-2 text-center font-semibold text-slate-800"
            >
              {count}
            </td>
          );
        })}
      </tr>
    </>
  );
}
