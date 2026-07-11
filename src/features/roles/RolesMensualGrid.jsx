import { useEffect, useMemo, useRef, useState } from "react";
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
  const theadRef = useRef(null);
  const [theadHeight, setTheadHeight] = useState(44);
  const [bodyHeight, setBodyHeight] = useState(0);
  const lastGroupRef = useRef(null);
  const [lastGroupHeight, setLastGroupHeight] = useState(0);
  const [grupoActivoNombre, setGrupoActivoNombre] = useState(null);
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

  // Mide el alto real del encabezado de días (varía por breakpoint) para
  // que el nombre de puesto se congele justo debajo, sin solaparse.
  useEffect(() => {
    const el = theadRef.current;
    if (!el) return;
    const medir = () => setTheadHeight(el.getBoundingClientRect().height);
    medir();
    const ro = new ResizeObserver(medir);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Mide el alto visible del panel para poder agregar, al final, el relleno
  // justo (ver más abajo) que permite que hasta el último puesto —aunque
  // tenga pocos funcionarios— llegue a ocupar la franja congelada.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const medir = () => setBodyHeight(el.clientHeight);
    medir();
    const ro = new ResizeObserver(medir);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Mide el alto real del último puesto: el relleno solo debe cubrir lo que
  // falte para llegar a la franja congelada, no el alto completo del panel
  // (si no, al llegar al final solo se vería un espacio en blanco).
  useEffect(() => {
    const el = lastGroupRef.current;
    if (!el) {
      setLastGroupHeight(0);
      return;
    }
    const medir = () => setLastGroupHeight(el.getBoundingClientRect().height);
    medir();
    const ro = new ResizeObserver(medir);
    ro.observe(el);
    return () => ro.disconnect();
  }, [grupos]);

  // El nombre de puesto vive en la única celda superior izquierda (congelada
  // junto a los días), así que no puede resolverse con sticky puro: se
  // pregunta al navegador qué fila está renderizada justo debajo del
  // encabezado congelado (más robusto que calcular posiciones a mano,
  // porque funciona igual aunque el último grupo sea más corto que el
  // alto visible y nunca "alcance" la línea de congelado).
  useEffect(() => {
    const contenedor = scrollRef.current;
    if (!contenedor) return;
    const actualizar = () => {
      const contRect = contenedor.getBoundingClientRect();
      const x = contRect.left + 10;
      const y = contRect.top + theadHeight + 4;
      const el = document.elementFromPoint(x, y);
      const tbody = el ? el.closest("tbody[data-grupo]") : null;
      if (tbody) setGrupoActivoNombre(tbody.dataset.grupo);
    };
    actualizar();
    contenedor.addEventListener("scroll", actualizar, { passive: true });
    return () => contenedor.removeEventListener("scroll", actualizar);
  }, [grupos, theadHeight]);

  const grupoActivo = grupos.find((g) => g.nombre === grupoActivoNombre) || grupos[0];

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
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
      <div className={`flex flex-col gap-2 border-b border-slate-200 p-3 ${tone.band}`}>
        <div>
          <h3 className="text-base font-bold sm:text-lg">{t("roles.vistaMensualLineal")}</h3>
          <p className="text-[11px] font-semibold opacity-75">
            {t("roles.resumenFiltro", { n: totalFuncionarios })}
          </p>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="pnlq-roles-scroll max-h-[62vh] overflow-auto bg-white sm:max-h-[68vh]"
        style={{ paddingBottom: Math.max(0, bodyHeight - theadHeight - lastGroupHeight) }}
      >
        <table
          className={`border-separate border-spacing-0 text-[11px] sm:text-xs ${
            compact ? "min-w-[1040px] lg:min-w-[1140px]" : "min-w-[1160px] lg:min-w-[1380px]"
          }`}
        >
          <thead ref={theadRef}>
            <tr>
              <th
                rowSpan={2}
                className={`sticky top-0 left-0 z-40 min-w-[5.5rem] max-w-[5.5rem] border-b border-r-2 border-slate-300 p-1.5 text-left text-[11px] font-semibold uppercase shadow-[2px_2px_8px_rgba(15,23,42,0.08)] sm:min-w-[10rem] sm:max-w-[10rem] sm:p-3 sm:text-xs lg:min-w-[13rem] lg:max-w-[13rem] ${grupoActivo ? grupoActivo.color : "bg-white text-slate-700"}`}
              >
                {grupoActivo ? grupoActivo.nombre.replace(/^Puesto\s+/, "") : ""}
              </th>
              {/* Barra delgada de mes: siempre visible sobre el encabezado de
                  días (congelada junto con el resto del thead) para saber a
                  qué mes pertenecen las fechas aunque se haya desplazado la
                  tabla lateralmente. */}
              <th
                colSpan={days.length}
                className="sticky top-0 z-30 h-5 border-b border-slate-300 bg-slate-800 text-center text-[9px] font-bold uppercase tracking-widest text-white sm:h-6 sm:text-[10px]"
              >
                {meses[month]} {year}
              </th>
            </tr>
            <tr>
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
                    className={`sticky top-5 z-30 border-b p-0.5 text-center font-semibold sm:top-6 sm:p-1 ${
                      isToday
                        ? "border-l-2 border-r-2 border-emerald-500 bg-emerald-700 text-white ring-2 ring-inset ring-emerald-300"
                        : isFocused
                          ? "border-r border-slate-200 bg-amber-100 text-amber-950 ring-2 ring-inset ring-amber-400"
                        : isWeekend
                          ? "border-r border-slate-200 bg-slate-100 text-slate-900"
                          : `border-r border-slate-200 ${tone.day}`
                    }`}
                  >
                    <div className="mx-auto flex h-9 w-7 flex-col items-center justify-center rounded-lg bg-white/80 sm:h-10 sm:w-9">
                      <span className="text-[9px] uppercase leading-none text-slate-500">{dias[dow]}</span>
                      <span className="mt-0.5 text-[12px] leading-none font-semibold text-slate-950">{d}</span>
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          {grupos.length === 0 ? (
            <tbody>
              <tr>
                <td
                  className="sticky left-0 z-10 min-w-[5.5rem] max-w-[5.5rem] border-b border-r border-slate-200 bg-white p-2 text-xs font-bold text-slate-600 shadow-[2px_0_8px_rgba(15,23,42,0.06)] sm:min-w-[10rem] sm:max-w-[10rem] lg:min-w-[13rem] lg:max-w-[13rem]"
                  colSpan={days.length + 1}
                >
                  {t("roles.sinFuncionariosFiltro")}
                </td>
              </tr>
            </tbody>
          ) : (
            grupos.map((grupo, idx) => (
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
                registerBodyRef={idx === grupos.length - 1 ? lastGroupRef : undefined}
                diaActual={diaActual}
                t={t}
              />
            ))
          )}
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
  registerBodyRef,
  diaActual,
  t,
}) {
  return (
    <tbody data-grupo={grupo.nombre} ref={registerBodyRef}>
      {grupo.funcionarios.map((nombre, idx) => {
        const editing = !!editRows[rowId(grupo.nombre, nombre)];
        const modalidad = getCfg(grupo, nombre);
        const nombrePartes = nombreEnDosLineas(nombre);
        return (
          <tr key={`${grupo.nombre}-${nombre}`} className={editing ? "bg-emerald-50/60" : "bg-white"}>
            <td
              className={`sticky left-0 z-10 min-w-[5.5rem] max-w-[5.5rem] border-r border-b border-slate-200 bg-white p-0.5 align-top shadow-[2px_0_8px_rgba(15,23,42,0.06)] sm:min-w-[10rem] sm:max-w-[10rem] sm:p-2 lg:min-w-[13rem] lg:max-w-[13rem] ${idx === 0 ? "border-t-2 border-t-slate-300" : ""}`}
            >
              <span className="pnlq-print-only font-semibold text-black">{nombre}</span>
              <div className="pnlq-no-print space-y-1 sm:space-y-2">
                <button
                  type="button"
                  onClick={() => toggleEdit(grupo.nombre, nombre)}
                  className="flex min-h-10 w-full items-center rounded-lg border border-slate-200 bg-white px-0.5 py-1 text-left text-[11px] font-semibold leading-tight hover:bg-slate-50 sm:px-3 sm:py-2 sm:text-xs"
                >
                  <span className="flex w-full items-center justify-between gap-1">
                    <span className="min-w-0 leading-[1.05]">
                      <span className="block truncate">{nombrePartes.nombre}</span>
                      {nombrePartes.apellido && <span className="block truncate">{nombrePartes.apellido}</span>}
                    </span>
                    <Icon name={editing ? "unlock" : "lock"} size={14} className="shrink-0 text-slate-500" />
                  </span>
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
                  esHoy={d === diaActual}
                  onOpen={() => editing && setMenu({ grupo, persona: nombre, pi: 0, dia: d, valor: val, esInicio: d === inicio })}
                  onConflicto={() => abrirConflicto(grupo, nombre, d, val)}
                />
              );
            })}
          </tr>
        );
      })}
      <tr>
        <td className="sticky left-0 z-10 min-w-[5.5rem] max-w-[5.5rem] border-b border-r border-slate-200 bg-slate-100 p-1.5 text-[10px] font-bold uppercase text-slate-600 shadow-[2px_0_8px_rgba(15,23,42,0.06)] sm:min-w-[10rem] sm:max-w-[10rem] sm:p-3 sm:text-xs lg:min-w-[13rem] lg:max-w-[13rem]">
          {t("roles.cantidadEnTurno")}
        </td>
        {days.map((d) => {
          const count = grupo.funcionarios.reduce(
            (acc, nombre) => (esRolActivo(getCelda(grupo, nombre, d)) ? acc + 1 : acc),
            0,
          );
          const esHoy = d === diaActual;
          return (
            <td
              key={`${grupo.nombre}-cantidad-${d}`}
              className={`border-b border-b-slate-200 bg-white p-2 text-center font-semibold text-slate-800 ${
                esHoy ? "border-l-2 border-r-2 border-l-emerald-500 border-r-emerald-500" : "border-r border-r-slate-200"
              }`}
            >
              {count}
            </td>
          );
        })}
      </tr>
    </tbody>
  );
}
