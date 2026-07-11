import { useMemo, useState } from "react";
import Card from "../../ui/Card.jsx";
import Icon from "../../ui/Icon.jsx";
import { meses } from "../../data/calendario.js";
import { puestos } from "../../data/puestos.js";
import { dim } from "../../domain/fechas.js";
import { useT } from "../../i18n/useT.js";
import RolesMensualGrid from "./RolesMensualGrid.jsx";
import RolesPrintHeader, { RolesPrintFooter } from "./RolesPrintMatter.jsx";

export default function Roles({
  year,
  month,
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
  const [busqueda, setBusqueda] = useState("");
  // Cada puesto arranca contraído dentro del panel de selección: solo se ve
  // la fila de encabezado (casilla + "Solo"); el detalle de funcionarios
  // (para deseleccionar a alguien puntual) se expande bajo demanda.
  const [puestosAbiertos, setPuestosAbiertos] = useState({});
  const togglePuestoAbierto = (nombrePuesto) =>
    setPuestosAbiertos((prev) => ({ ...prev, [nombrePuesto]: !prev[nombrePuesto] }));

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
  const todoSeleccionado =
    funcionariosDisponibles.length > 0 && funcionariosDisponibles.every((f) => funcionariosSeleccionados.includes(f));
  // Lista de puestos/funcionarios acotada por el texto de búsqueda (panel avanzado).
  const gruposBusqueda = useMemo(() => {
    const q = busqueda.trim().toLowerCase();
    if (!q) return gruposRoles;
    return gruposRoles
      .map((g) => ({ ...g, funcionarios: g.funcionarios.filter((n) => n.toLowerCase().includes(q)) }))
      .filter((g) => g.funcionarios.length > 0);
  }, [busqueda, gruposRoles]);

  const seleccionarTodo = () => {
    setPuestosSeleccionados(puestosDisponibles);
    setFuncionariosSeleccionados(funcionariosDisponibles);
  };

  const limpiarFiltros = () => {
    setPuestosSeleccionados([]);
    setFuncionariosSeleccionados([]);
  };

  // Estado de un puesto según cuántos de sus funcionarios están seleccionados.
  const estadoPuesto = (grupo) => {
    const total = grupo.funcionarios.length;
    if (total === 0) return "none";
    const sel = grupo.funcionarios.filter((f) => funcionariosSeleccionados.includes(f)).length;
    if (sel === 0) return "none";
    return sel === total ? "all" : "partial";
  };

  // Muestra únicamente este puesto (atajo rápido en teléfono).
  const soloPuesto = (grupo) => {
    setPuestosSeleccionados([grupo.nombre]);
    setFuncionariosSeleccionados(grupo.funcionarios);
  };

  // Chip/casilla de puesto: si está completo lo quita, si no lo completa.
  const togglePuesto = (grupo) => {
    if (estadoPuesto(grupo) === "all") {
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
      <Card>
        <div className="pnlq-no-print mb-3 space-y-2">
          {/* Control único y compacto de puestos/funcionarios: reemplaza el
              carrusel horizontal (quedaba cortado a 320-390 px) por un
              resumen de una línea que abre la selección con casillas —
              ahí la semántica de multiselección es explícita, sin ambigüedad
              sobre si "Todos" es una categoría más o un atajo. */}
          <details className="rounded-lg border border-slate-200 bg-white p-2">
            <summary className="flex min-h-touch cursor-pointer list-none items-center gap-2 text-xs font-bold text-slate-800">
              <Icon name="users" size={14} className="text-slate-500" />
              {todoSeleccionado
                ? t("roles.resumenPuestosTodos", { n: funcionariosDisponibles.length })
                : t("roles.resumenPuestosParcial", { n: funcionariosSeleccionados.length, total: funcionariosDisponibles.length })}
            </summary>

            <div className="mt-2 flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-2">
              <Icon name="search" size={14} className="shrink-0 text-slate-400" />
              <input
                type="text"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                placeholder={t("roles.buscarFuncionario")}
                aria-label={t("roles.buscarFuncionario")}
                className="min-h-touch w-full bg-transparent py-2 text-xs font-semibold text-slate-700 outline-none"
              />
              {busqueda && (
                <button
                  type="button"
                  onClick={() => setBusqueda("")}
                  aria-label={t("roles.limpiarBusqueda")}
                  className="shrink-0 text-slate-400 hover:text-slate-700"
                >
                  <Icon name="x" size={14} />
                </button>
              )}
            </div>

            <div className="mt-2 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={seleccionarTodo}
                className="inline-flex min-h-touch items-center rounded-lg border border-emerald-700 bg-emerald-50 px-3 text-[11px] font-bold text-emerald-900"
              >
                {t("roles.verTodos")}
              </button>
              <button
                type="button"
                onClick={limpiarFiltros}
                className="inline-flex min-h-touch items-center rounded-lg border border-slate-300 bg-white px-3 text-[11px] font-bold text-slate-700"
              >
                {t("roles.limpiarFiltros")}
              </button>
            </div>

            {gruposBusqueda.length === 0 ? (
              <p className="mt-3 text-[11px] font-semibold text-slate-500">{t("roles.sinResultadosBusqueda")}</p>
            ) : (
              <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                {gruposBusqueda.map((grupo) => {
                  const estado = estadoPuesto(grupo);
                  // Con búsqueda activa siempre se muestra el detalle (es el
                  // resultado que la persona está buscando); sin búsqueda,
                  // respeta el contraído/expandido manual de cada puesto.
                  const abierto = busqueda.trim() !== "" || !!puestosAbiertos[grupo.nombre];
                  return (
                    <fieldset key={grupo.nombre} className="rounded-xl border border-slate-200 p-2">
                      <div className="flex items-center justify-between gap-2">
                        <label className="flex min-h-touch flex-1 items-center gap-2 text-xs font-bold text-slate-900">
                          <input
                            type="checkbox"
                            checked={estado === "all"}
                            ref={(el) => {
                              if (el) el.indeterminate = estado === "partial";
                            }}
                            onChange={() => togglePuesto(grupo)}
                            className="h-5 w-5 rounded border-slate-300 text-emerald-700"
                          />
                          {grupo.nombre}
                        </label>
                        <button
                          type="button"
                          onClick={() => soloPuesto(grupo)}
                          className="inline-flex min-h-touch shrink-0 items-center rounded-lg border border-slate-300 bg-white px-2 text-[10px] font-bold text-slate-600 hover:bg-slate-50"
                        >
                          {t("roles.solo")}
                        </button>
                        <button
                          type="button"
                          onClick={() => togglePuestoAbierto(grupo.nombre)}
                          aria-expanded={abierto}
                          aria-label={abierto ? t("roles.contraerPuesto") : t("roles.expandirPuesto")}
                          className="inline-flex min-h-touch min-w-touch shrink-0 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-600 hover:bg-slate-50"
                        >
                          <Icon name={abierto ? "chevronDown" : "chevronRight"} size={16} />
                        </button>
                      </div>
                      {abierto && (
                      <div className="mt-2 space-y-0.5">
                        {grupo.funcionarios.map((nombre) => (
                          <label
                            key={nombre}
                            className="flex min-h-touch items-center gap-2 rounded-lg px-1 text-[11px] font-semibold text-slate-700 hover:bg-slate-50"
                          >
                            <input
                              type="checkbox"
                              checked={funcionariosSeleccionados.includes(nombre)}
                              onChange={() => toggleFuncionario(grupo, nombre)}
                              className="h-5 w-5 rounded border-slate-300 text-emerald-700"
                            />
                            <span className="min-w-0 break-words">{nombre}</span>
                          </label>
                        ))}
                      </div>
                      )}
                    </fieldset>
                  );
                })}
              </div>
            )}
          </details>
        </div>

        <div className="pnlq-print-page">
          <RolesPrintHeader mes={meses[month]} anio={year} puesto={t("roles.todosLosPuestos")} />
          <RolesMensualGrid
            grupos={gruposFiltrados}
            days={days}
            year={year}
            month={month}
            compact={compact}
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

        <div className="pnlq-no-print mt-3 flex items-center gap-1.5 overflow-x-auto rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-[11px] font-semibold whitespace-nowrap">
          <span className="rounded-lg border border-emerald-300 bg-emerald-200 px-2 py-1 text-emerald-950">{t("roles.leyenda.turno")}</span>
          <span className="rounded-lg border border-amber-300 bg-amber-200 px-2 py-1 text-amber-950">{t("roles.leyenda.libre")}</span>
          <span className="rounded-lg border border-sky-300 bg-sky-200 px-2 py-1 text-sky-950">{t("roles.leyenda.vacaciones")}</span>
          <span className="rounded-lg border border-rose-300 bg-rose-200 px-2 py-1 text-rose-950">{t("roles.leyenda.incapacidad")}</span>
          <span className="rounded-lg border border-violet-300 bg-violet-200 px-2 py-1 text-violet-950">{t("roles.leyenda.otro")}</span>
        </div>
      </Card>
    </section>
  );
}
