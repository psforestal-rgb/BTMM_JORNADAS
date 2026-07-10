import { useMemo, useState } from "react";
import Card from "../../ui/Card.jsx";
import Icon from "../../ui/Icon.jsx";
import { meses } from "../../data/calendario.js";
import { puestos } from "../../data/puestos.js";
import { dim } from "../../domain/fechas.js";
import { useT } from "../../i18n/useT.js";
import RolesMensualGrid from "./RolesMensualGrid.jsx";
import RolesPrintHeader, { RolesPrintFooter } from "./RolesPrintMatter.jsx";

function inputFecha(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function partesFecha(valor) {
  const [y, m, d] = String(valor || "").split("-").map(Number);
  if (!y || !m || !d) return null;
  return { year: y, month: m - 1, day: d };
}

export default function Roles({
  year,
  month,
  setYear,
  setMonth,
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
  const [fechaBusqueda, setFechaBusqueda] = useState("");
  const [focusDate, setFocusDate] = useState(null);

  const days = useMemo(() => Array.from({ length: dim(year, month) }, (_, i) => i + 1), [month, year]);
  const gruposRoles = useMemo(
    () =>
      puestos.map((p) => ({
        ...p,
        funcionarios: personas
          .filter((f) => (f.puestoOperativo || "Puesto Quetzales") === p.nombre && f.estado !== "Inactivo")
          .map((f) => f.nombre),
      })),
    [personas],
  );
  const puestosDisponibles = useMemo(() => gruposRoles.map((g) => g.nombre), [gruposRoles]);
  const funcionariosDisponibles = useMemo(() => gruposRoles.flatMap((g) => g.funcionarios), [gruposRoles]);
  const [puestosSeleccionados, setPuestosSeleccionados] = useState(() => puestos.map((p) => p.nombre));
  const [funcionariosSeleccionados, setFuncionariosSeleccionados] = useState(() =>
    personas.filter((f) => f.estado !== "Inactivo").map((f) => f.nombre),
  );
  const gruposFiltrados = useMemo(
    () =>
      gruposRoles
        .filter((g) => puestosSeleccionados.includes(g.nombre))
        .map((g) => ({
          ...g,
          funcionarios: g.funcionarios.filter((nombre) => funcionariosSeleccionados.includes(nombre)),
        }))
        .filter((g) => g.funcionarios.length > 0),
    [funcionariosSeleccionados, gruposRoles, puestosSeleccionados],
  );
  const totalFiltrado = gruposFiltrados.reduce((acc, g) => acc + g.funcionarios.length, 0);

  const enfocarFecha = (partes) => {
    if (!partes) return;
    setYear?.(partes.year);
    setMonth?.(partes.month);
    setFocusDate({ ...partes, id: Date.now() });
  };

  const irAHoy = () => {
    const hoy = new Date();
    const valor = inputFecha(hoy);
    setFechaBusqueda(valor);
    enfocarFecha(partesFecha(valor));
  };

  const buscarFecha = () => enfocarFecha(partesFecha(fechaBusqueda));

  const moverMes = (paso) => {
    let nuevoMes = month + paso;
    let nuevoAno = year;
    if (nuevoMes < 0) {
      nuevoMes = 11;
      nuevoAno -= 1;
    }
    if (nuevoMes > 11) {
      nuevoMes = 0;
      nuevoAno += 1;
    }
    setMonth?.(nuevoMes);
    setYear?.(nuevoAno);
  };

  const seleccionarTodo = () => {
    setPuestosSeleccionados(puestosDisponibles);
    setFuncionariosSeleccionados(funcionariosDisponibles);
  };

  const limpiarFiltros = () => {
    setPuestosSeleccionados([]);
    setFuncionariosSeleccionados([]);
  };

  const togglePuesto = (grupo) => {
    const activo = puestosSeleccionados.includes(grupo.nombre);
    if (activo) {
      setPuestosSeleccionados((prev) => prev.filter((p) => p !== grupo.nombre));
      setFuncionariosSeleccionados((prev) => prev.filter((f) => !grupo.funcionarios.includes(f)));
      return;
    }
    setPuestosSeleccionados((prev) => [...new Set([...prev, grupo.nombre])]);
    setFuncionariosSeleccionados((prev) => [...new Set([...prev, ...grupo.funcionarios])]);
  };

  const toggleFuncionario = (grupo, nombre) => {
    const activo = funcionariosSeleccionados.includes(nombre);
    if (activo) {
      const restantes = funcionariosSeleccionados.filter((f) => f !== nombre);
      setFuncionariosSeleccionados(restantes);
      if (!grupo.funcionarios.some((f) => f !== nombre && restantes.includes(f))) {
        setPuestosSeleccionados((prev) => prev.filter((p) => p !== grupo.nombre));
      }
      return;
    }
    setPuestosSeleccionados((prev) => [...new Set([...prev, grupo.nombre])]);
    setFuncionariosSeleccionados((prev) => [...new Set([...prev, nombre])]);
  };

  return (
    <section className="space-y-4">
      <Card title={t("roles.titulo", { mes: meses[month], anio: year })} icon="📊">
        <div className="pnlq-no-print mb-3 flex items-center gap-1.5 overflow-x-auto rounded-2xl border border-slate-200 bg-white px-2 py-1.5 text-[11px] font-semibold whitespace-nowrap shadow-sm">
          <span className="rounded-lg border border-emerald-300 bg-emerald-200 px-2 py-1 text-emerald-950">{t("roles.leyenda.turno")}</span>
          <span className="rounded-lg border border-amber-300 bg-amber-200 px-2 py-1 text-amber-950">{t("roles.leyenda.libre")}</span>
          <span className="rounded-lg border border-sky-300 bg-sky-200 px-2 py-1 text-sky-950">{t("roles.leyenda.vacaciones")}</span>
          <span className="rounded-lg border border-rose-300 bg-rose-200 px-2 py-1 text-rose-950">{t("roles.leyenda.incapacidad")}</span>
          <span className="rounded-lg border border-violet-300 bg-violet-200 px-2 py-1 text-violet-950">{t("roles.leyenda.otro")}</span>
        </div>

        <div className="pnlq-no-print mb-4 grid gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-2 sm:grid-cols-[1fr_auto] sm:items-start">
          <details className="rounded-xl border border-slate-200 bg-white p-2">
            <summary className="cursor-pointer list-none text-xs font-bold text-slate-800">
              {t("roles.filtros")} · {t("roles.seleccionados", { n: totalFiltrado })}
            </summary>
            <div className="mt-2 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={seleccionarTodo}
                className="rounded-lg border border-emerald-700 bg-emerald-50 px-2 py-1 text-[11px] font-bold text-emerald-900"
              >
                {t("roles.verTodos")}
              </button>
              <button
                type="button"
                onClick={limpiarFiltros}
                className="rounded-lg border border-slate-300 bg-white px-2 py-1 text-[11px] font-bold text-slate-700"
              >
                {t("roles.limpiarFiltros")}
              </button>
            </div>
            <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {gruposRoles.map((grupo) => (
                <fieldset key={grupo.nombre} className="rounded-xl border border-slate-200 p-2">
                  <label className="flex items-center gap-2 text-xs font-black text-slate-900">
                    <input
                      type="checkbox"
                      checked={puestosSeleccionados.includes(grupo.nombre)}
                      onChange={() => togglePuesto(grupo)}
                      className="h-4 w-4 rounded border-slate-300 text-emerald-700"
                    />
                    {grupo.nombre}
                  </label>
                  <div className="mt-2 space-y-1">
                    {grupo.funcionarios.map((nombre) => (
                      <label key={nombre} className="flex items-center gap-2 text-[11px] font-semibold text-slate-700">
                        <input
                          type="checkbox"
                          checked={funcionariosSeleccionados.includes(nombre)}
                          onChange={() => toggleFuncionario(grupo, nombre)}
                          className="h-3.5 w-3.5 rounded border-slate-300 text-emerald-700"
                        />
                        <span className="min-w-0 break-words">{nombre}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              ))}
            </div>
          </details>
          <div className="flex flex-wrap items-center gap-2 rounded-xl border border-slate-200 bg-white p-2">
            {/* Navegación de mes dentro de la vista, sin depender de la barra superior:
                ‹ Mes Año › + Hoy + ir a una fecha concreta. */}
            <div
              role="group"
              aria-label={t("topbar.periodo")}
              className="inline-flex items-stretch overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                type="button"
                onClick={() => moverMes(-1)}
                aria-label={t("topbar.mesAnterior")}
                className="inline-flex min-h-touch min-w-touch items-center justify-center px-2 text-slate-700 hover:bg-slate-50"
              >
                <Icon name="chevronLeft" size={16} />
              </button>
              <span className="inline-flex min-h-touch items-center border-x border-slate-200 px-3 text-xs font-black whitespace-nowrap text-slate-800">
                {meses[month]} {year}
              </span>
              <button
                type="button"
                onClick={() => moverMes(1)}
                aria-label={t("topbar.mesSiguiente")}
                className="inline-flex min-h-touch min-w-touch items-center justify-center px-2 text-slate-700 hover:bg-slate-50"
              >
                <Icon name="chevronRight" size={16} />
              </button>
            </div>
            <button
              type="button"
              onClick={irAHoy}
              className="inline-flex min-h-touch items-center gap-1 rounded-xl border border-emerald-700 bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-900"
            >
              <Icon name="calendar" size={14} />
              {t("roles.irHoy")}
            </button>
            <div className="inline-flex items-stretch overflow-hidden rounded-xl border border-slate-300 bg-white">
              <input
                type="date"
                value={fechaBusqueda}
                onChange={(e) => setFechaBusqueda(e.target.value)}
                className="min-h-touch bg-white px-3 py-2 text-xs font-bold text-slate-700"
                aria-label={t("roles.buscarFecha")}
              />
              <button
                type="button"
                onClick={buscarFecha}
                disabled={!fechaBusqueda}
                className="inline-flex min-h-touch items-center gap-1 border-l border-slate-300 bg-white px-3 py-2 text-xs font-bold text-slate-700 disabled:opacity-50"
              >
                <Icon name="search" size={14} />
                {t("roles.buscar")}
              </button>
            </div>
          </div>
        </div>

        <div className="pnlq-print-page">
          <RolesPrintHeader mes={meses[month]} anio={year} puesto={t("roles.todosLosPuestos")} />
          <RolesMensualGrid
            grupos={gruposFiltrados}
            days={days}
            year={year}
            month={month}
            compact={compact}
            focusDate={focusDate}
            roleData={roleData}
            setRoleData={setRoleData}
            personas={personas}
            actividadesPlan={actividadesPlan}
            setActividadesPlan={setActividadesPlan}
            reposiciones={reposiciones}
            hj={hj}
          />
          <RolesPrintFooter />
        </div>
      </Card>
    </section>
  );
}
