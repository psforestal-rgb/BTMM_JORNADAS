import { lazy, Suspense, useMemo } from "react";
import { AppProvider, useApp } from "./context/AppContext.jsx";
import { alertas } from "./domain/alertas.js";
import { useT } from "./i18n/useT.js";
import Sidebar from "./layout/Sidebar.jsx";
import Topbar from "./layout/Topbar.jsx";
import BottomNav from "./layout/BottomNav.jsx";
import { useAppNavigation } from "./lib/useAppNavigation.js";
import { useVirtualKeyboard } from "./lib/useVirtualKeyboard.js";
import ErrorBoundary from "./ui/ErrorBoundary.jsx";
import ImportadorPlanificacion2026 from "./features/planificacion/ImportadorPlanificacion2026.jsx";

// Eager: vista por defecto. Las demás se cargan bajo demanda con React.lazy
// para reducir el tiempo de carga inicial en dispositivos modestos.
// DiaLayout es el thin wrapper mobile-first que envuelve Dia con FAB + BottomSheet.
import DiaLayout from "./features/dia/DiaLayout.jsx";

const Roles = lazy(() => import("./features/roles/Roles.jsx"));
const Funcionarios = lazy(() => import("./features/funcionarios/Funcionarios.jsx"));
const Planificacion = lazy(() => import("./features/planificacion/Planificacion.jsx"));
const PlanificacionFuncionario = lazy(() => import("./features/planFuncionario/PlanificacionFuncionario.jsx"));
const AdelantoViaticos = lazy(() => import("./features/viaticos/AdelantoViaticos.jsx"));
const Reposicion = lazy(() => import("./features/reposicion/Reposicion.jsx"));
const Disponibilidad = lazy(() => import("./features/disponibilidad/Disponibilidad.jsx"));
const Alertas = lazy(() => import("./features/alertas/Alertas.jsx"));
const Datos = lazy(() => import("./features/datos/Datos.jsx"));
const Configuracion = lazy(() => import("./features/configuracion/Configuracion.jsx"));

function FallbackVista() {
  const t = useT();
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-[200px] items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" aria-hidden="true" />
        {t("topbar.cargando")}
      </div>
    </div>
  );
}

function AppShell() {
  const {
    view,
    setView,
    personas,
    setPersonas,
    month,
    setMonth,
    year,
    setYear,
    compact,
    setCompact,
    roleData,
    setRoleData,
    actividadesPlan,
    setActividadesPlan,
    reposiciones,
    setReposiciones,
    diaVista,
    setDiaVista,
    reglas,
  } = useApp();

  const alerts = useMemo(
    () => alertas(personas, { actividadesPlan, reposiciones, flags: reglas }),
    [personas, actividadesPlan, reposiciones, reglas],
  );
  const nAlertas = useMemo(
    () => alerts.filter((a) => a.t === "danger" || a.t === "warn").length,
    [alerts],
  );
  const navigate = useAppNavigation({ view, setView, year, setYear, month, setMonth, diaVista, setDiaVista });
  const keyboardOpen = useVirtualKeyboard();

  return (
    <div className={`pnlq-app pnlq-print-root min-h-screen overflow-x-clip bg-surface-alt text-ink ${keyboardOpen ? "pnlq-keyboard-open" : ""}`}>
      <ImportadorPlanificacion2026 />
      <div className="flex min-h-screen">
        <Sidebar view={view} setView={navigate} nAlertas={nAlertas} />
        {/* `min-w-0` y `overflow-x-clip` aseguran que un hijo ancho
            (tabla con overflow-x propio, modal mal medido, etc.) NO
            produzca scroll horizontal de la página entera en móvil. */}
        <main className="pnlq-app-main min-w-0 flex-1 overflow-x-clip">
          <Topbar
            view={view}
            setView={navigate}
            month={month}
            setMonth={setMonth}
            year={year}
            setYear={setYear}
            compact={compact}
            setCompact={setCompact}
          />
          {/* pb generoso en móvil para librar la BottomNav fija (≈64px) más
              el safe-area del home indicator; en lg la nav desaparece. */}
          <div className="pnlq-app-content space-y-5 p-4 pb-[calc(6rem+env(safe-area-inset-bottom))] lg:p-6 lg:pb-6">
            <Suspense fallback={<FallbackVista />}>
              {view === "dia" && (
                <DiaLayout
                  diaVista={diaVista}
                  setDiaVista={setDiaVista}
                  personas={personas}
                  actividadesPlan={actividadesPlan}
                  setActividadesPlan={setActividadesPlan}
                  roleData={roleData}
                  reposiciones={reposiciones}
                  hj={reglas?.horasJornada}
                />
              )}
              {view === "funcionarios" && <Funcionarios personas={personas} setPersonas={setPersonas} />}
              {view === "roles" && (
                <Roles
                  year={year}
                  month={month}
                  setYear={setYear}
                  setMonth={setMonth}
                  compact={compact}
                  roleData={roleData}
                  setRoleData={setRoleData}
                  personas={personas}
                  actividadesPlan={actividadesPlan}
                  setActividadesPlan={setActividadesPlan}
                  reposiciones={reposiciones}
                  hj={reglas?.horasJornada}
                />
              )}
              {view === "planificacion" && (
                <Planificacion
                  year={year}
                  month={month}
                  personas={personas}
                  actividadesPlan={actividadesPlan}
                  setActividadesPlan={setActividadesPlan}
                  roleData={roleData}
                  setView={navigate}
                  setDiaVista={setDiaVista}
                />
              )}
              {view === "planFuncionario" && (
                <PlanificacionFuncionario
                  year={year}
                  month={month}
                  personas={personas}
                  actividadesPlan={actividadesPlan}
                  setActividadesPlan={setActividadesPlan}
                  roleData={roleData}
                  setRoleData={setRoleData}
                />
              )}
              {view === "adelantos" && <AdelantoViaticos actividadesPlan={actividadesPlan} personas={personas} setView={navigate} />}
              {view === "reposicion" && (
                <Reposicion
                  personas={personas}
                  reposiciones={reposiciones}
                  setReposiciones={setReposiciones}
                />
              )}
              {view === "disponibilidad" && <Disponibilidad personas={personas} setPersonas={setPersonas} />}
              {view === "alertas" && <Alertas alerts={alerts} setView={navigate} />}
              {view === "datos" && <Datos />}
              {view === "configuracion" && <Configuracion />}
            </Suspense>
          </div>
        </main>
      </div>
      <BottomNav view={view} setView={navigate} nAlertas={nAlertas} hidden={keyboardOpen} />
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <AppProvider>
        <AppShell />
      </AppProvider>
    </ErrorBoundary>
  );
}
