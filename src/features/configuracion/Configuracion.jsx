import { useMemo, useState } from "react";
import Card from "../../ui/Card.jsx";
import Badge from "../../ui/Badge.jsx";
import Icon from "../../ui/Icon.jsx";
import ThemeToggle from "../../ui/ThemeToggle.jsx";
import { useApp } from "../../context/AppContext.jsx";
import { opcionesPuestoOperativo } from "../../data/puestos.js";
import { VIATICOS_OBJETIVO_OPCIONES, validarReglas, REGLAS_DEFAULT } from "../../config/reglas.js";
import { FERIADOS_CR } from "../../data/feriadosCR.js";
import { useT } from "../../i18n/useT.js";
import { plural } from "../../i18n/es-CR.js";
import Modal from "../../ui/Modal.jsx";

/**
 * Editor administrativo de reglas duras configurables. Cada cambio se
 * confirma explícitamente para evitar apagar alertas por error.
 */
export default function Configuracion() {
  const t = useT();
  const { reglas, setReglas, resetReglas, resetToSeed } = useApp();
  const [draft, setDraft] = useState(reglas);
  const [confirmar, setConfirmar] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);
  const [confirmSeed, setConfirmSeed] = useState(false);
  const [seedConfirmStep, setSeedConfirmStep] = useState(false);

  const sucia = JSON.stringify(draft) !== JSON.stringify(reglas);
  const advertencias = useMemo(() => validarReglas(draft), [draft]);
  const aniosDisponibles = useMemo(
    () => Object.keys(FERIADOS_CR).sort().map(Number),
    [],
  );

  const togglePuesto = (puesto) => {
    setDraft((prev) => {
      const incluye = prev.puestosRequierenVisitantesDiario.includes(puesto);
      const lista = incluye
        ? prev.puestosRequierenVisitantesDiario.filter((p) => p !== puesto)
        : [...prev.puestosRequierenVisitantesDiario, puesto];
      return { ...prev, puestosRequierenVisitantesDiario: lista };
    });
  };

  const setCampo = (clave, valor) => setDraft((prev) => ({ ...prev, [clave]: valor }));
  const aplicar = () => { setReglas(draft); setConfirmar(false); };
  const descartar = () => setDraft(reglas);
  const onResetTotal = () => setConfirmReset(true);
  const confirmarResetTotal = () => {
    resetReglas();
    setDraft(REGLAS_DEFAULT);
    setConfirmReset(false);
  };

  const onSeed = () => { setConfirmSeed(true); setSeedConfirmStep(false); };
  const confirmarSeed = () => {
    resetToSeed();
    setConfirmSeed(false);
    setSeedConfirmStep(false);
  };

  return (
    <section className="space-y-4">
      {/* Apariencia: el tema es global (toda la app), por eso vive aquí y no
          en la barra de cada módulo. */}
      <Card title={t("configuracion.aparienciaTitulo")} icon="🎨">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-ink">{t("topbar.tema")}</p>
            <p className="mt-0.5 text-xs text-ink-muted">{t("configuracion.aparienciaSub")}</p>
          </div>
          <ThemeToggle />
        </div>
      </Card>
      <Card
        title={t("configuracion.titulo")}
        icon="🚦"
        action={
          sucia ? (
            <Badge className="border-amber-300 bg-amber-100 text-amber-900">{t("configuracion.badgeSucia")}</Badge>
          ) : (
            <Badge className="border-emerald-300 bg-emerald-100 text-emerald-900">{t("configuracion.badgeOk")}</Badge>
          )
        }
      >
        <div className="mb-4 rounded-xl border-l-4 border-critical bg-critical-soft p-3 text-sm text-critical-fg">
          {t("configuracion.reglaDuraIntro")}
        </div>

        {/* Cobertura */}
        <details className="mb-3 rounded-2xl border border-slate-200 p-3">
          <summary className="min-h-touch cursor-pointer py-3 text-sm font-bold uppercase tracking-wider text-slate-700">{t("configuracion.coberturaTitulo")}</summary>
          <p className="mb-2 text-xs text-slate-500">{t("configuracion.coberturaSub")}</p>
          <div className="flex flex-wrap gap-2">
            {opcionesPuestoOperativo.map((p) => {
              const activo = draft.puestosRequierenVisitantesDiario.includes(p);
              return (
                <button
                  key={p}
                  type="button"
                  onClick={() => togglePuesto(p)}
                  aria-pressed={activo}
                  className={`min-h-touch rounded-xl border px-3 py-2 text-xs font-bold ${
                    activo
                      ? "border-red-300 bg-red-50 text-red-900"
                      : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {activo && <Icon name="alert" size={14} className="mr-1 inline" />}
                  {p}
                </button>
              );
            })}
          </div>
        </details>

        {/* Viáticos */}
        <details open className="mb-3 rounded-2xl border border-slate-200 p-3">
          <summary className="min-h-touch cursor-pointer py-3 text-sm font-bold uppercase tracking-wider text-slate-700">{t("configuracion.viaticosTitulo")}</summary>
          <div className="grid gap-3 md:grid-cols-3">
            <label className="block">
              <span className="mb-1 block text-xs font-bold uppercase text-slate-500">{t("configuracion.diaCorte")}</span>
              <input
                type="number"
                min="1"
                max="28"
                value={draft.diaCorteViaticos}
                onChange={(e) => setCampo("diaCorteViaticos", Number(e.target.value))}
                className="min-h-touch w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-emerald-700"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-xs font-bold uppercase text-slate-500">{t("configuracion.mesObjetivo")}</span>
              <select
                value={draft.mesObjetivoViaticos}
                onChange={(e) => setCampo("mesObjetivoViaticos", e.target.value)}
                className="min-h-touch w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-emerald-700"
              >
                {VIATICOS_OBJETIVO_OPCIONES.map((x) => (
                  <option key={x} value={x}>{x}</option>
                ))}
              </select>
            </label>
            <label className="flex items-center gap-2 rounded-xl border border-slate-300 p-3 text-sm font-semibold">
              <input
                type="checkbox"
                checked={draft.permitirConsultaDespuesCierre}
                onChange={(e) => setCampo("permitirConsultaDespuesCierre", e.target.checked)}
              />
              {t("configuracion.permitirConsulta")}
            </label>
          </div>
          <p className="mt-2 text-xs text-slate-500">{t("configuracion.permitirConsultaSub")}</p>
        </details>

        {/* Feriados */}
        <details className="mb-3 rounded-2xl border border-slate-200 p-3">
          <summary className="min-h-touch cursor-pointer py-3 text-sm font-bold uppercase tracking-wider text-slate-700">{t("configuracion.feriadosTitulo")}</summary>
          <label className="flex items-start gap-2 rounded-xl border border-slate-300 p-3 text-sm">
            <input
              type="checkbox"
              checked={draft.aplicarFeriadosEnPrimerDiaLaboral}
              onChange={(e) => setCampo("aplicarFeriadosEnPrimerDiaLaboral", e.target.checked)}
              className="mt-1"
            />
            <span>
              <strong className="block font-semibold">{t("configuracion.feriadosCheckTitle")}</strong>
              <span className="block text-xs text-slate-500">{t("configuracion.feriadosCheckSub")}</span>
            </span>
          </label>
          <details className="mt-2 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs">
            <summary className="cursor-pointer font-semibold text-slate-700">
              {t("configuracion.feriadosVer", { n: aniosDisponibles.length, plural: plural(aniosDisponibles.length) })}
            </summary>
            <div className="mt-2 grid gap-3 sm:grid-cols-3">
              {aniosDisponibles.map((ano) => (
                <div key={ano} className="rounded-lg bg-white p-2 ring-1 ring-slate-200">
                  <p className="text-xs font-bold text-slate-700">{ano}</p>
                  <ul className="mt-1 space-y-1 text-xs text-slate-600">
                    {FERIADOS_CR[ano].map((f) => (
                      <li key={f.fecha} className="flex justify-between">
                        <span>{f.fecha}</span>
                        <span className={f.obligatorio ? "" : "italic opacity-70"}>{f.nombre}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </details>
        </details>

        {/* Alertas adicionales */}
        <details className="mb-3 rounded-2xl border border-slate-200 p-3">
          <summary className="min-h-touch cursor-pointer py-3 text-sm font-bold uppercase tracking-wider text-slate-700">{t("configuracion.alertasTitulo")}</summary>
          <div className="grid gap-2 md:grid-cols-3">
            {[
              ["alertaInactivoConActividad", t("configuracion.alertaInactivo")],
              ["alertaIncapacitadoConActividad", t("configuracion.alertaIncapacitado")],
              ["alertaAcumulativaSinModalidad", t("configuracion.alertaSinModalidad")],
              ["alertaReposicionPendiente", t("configuracion.alertaReposicion")],
            ].map(([k, label]) => (
              <label key={k} className="flex items-start gap-2 rounded-xl border border-slate-300 p-3 text-sm">
                <input
                  type="checkbox"
                  checked={!!draft[k]}
                  onChange={(e) => setCampo(k, e.target.checked)}
                  className="mt-1"
                />
                <span className="text-xs font-semibold text-slate-700">{label}</span>
              </label>
            ))}
          </div>
          <p className="mt-1 text-xs text-slate-500">{t("configuracion.alertasNota")}</p>
        </details>

        {/* Reposición de tiempo */}
        <details className="mb-3 rounded-2xl border border-slate-200 p-3">
          <summary className="min-h-touch cursor-pointer py-3 text-sm font-bold uppercase tracking-wider text-slate-700">{t("configuracion.reposicionTitulo")}</summary>
          <label className="block max-w-xs">
            <span className="mb-1 block text-xs font-bold uppercase text-slate-500">{t("configuracion.horasJornada")}</span>
            <input
              type="number"
              min="1"
              max="24"
              step="0.5"
              value={draft.horasJornada}
              onChange={(e) => setCampo("horasJornada", Number(e.target.value))}
              className="min-h-touch w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-emerald-700"
            />
          </label>
          <p className="mt-1 text-xs text-slate-500">{t("configuracion.horasJornadaSub")}</p>
        </details>

        {advertencias.length > 0 && (
          <div className="mb-4 rounded-xl border border-amber-300 bg-amber-50 p-3 text-xs text-amber-950" role="alert">
            <p className="font-semibold">{t("configuracion.advertenciasTitulo")}</p>
            <ul className="mt-1 list-inside list-disc">
              {advertencias.map((m, i) => <li key={i}>{m}</li>)}
            </ul>
          </div>
        )}

        <footer className={`flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 pt-3 ${sucia ? "sticky bottom-[calc(5rem+env(safe-area-inset-bottom))] z-20 -mx-3 rounded-2xl bg-white p-3 shadow-xl lg:bottom-2" : ""}`}>
          {sucia && <strong className="w-full text-sm text-amber-900 sm:w-auto">Cambios pendientes</strong>}
          <button
            type="button"
            onClick={onResetTotal}
            className="min-h-touch rounded-xl border border-red-300 bg-white px-3 py-2 text-xs font-bold text-red-800 hover:bg-red-50"
          >
            {t("configuracion.restaurarPredet")}
          </button>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={descartar}
              disabled={!sucia}
              className="min-h-touch rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold disabled:opacity-50"
            >
              {t("configuracion.descartar")}
            </button>
            {!confirmar ? (
              <button
                type="button"
                onClick={() => setConfirmar(true)}
                disabled={!sucia}
                className="min-h-touch rounded-xl bg-emerald-800 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50 hover:bg-emerald-700"
              >
                {t("configuracion.aplicar")}
              </button>
            ) : (
              <button
                type="button"
                onClick={aplicar}
                className="min-h-touch rounded-xl bg-red-700 px-4 py-2 text-sm font-semibold text-white hover:bg-red-800"
              >
                {t("configuracion.confirmarAplicar")}
              </button>
            )}
          </div>
        </footer>
      </Card>

      {/* ── Datos de ejemplo ─────────────────────────────────────────── */}
      <Card title={t("datos.reiniciarTitulo")} icon="🗄️">
        <p className="mb-3 text-sm text-ink-muted">{t("datos.reiniciarSub")}</p>
        <p className="mb-4 rounded-xl border border-amber-300 bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-900">
          ⚠ {t("datos.reiniciarRec")}
        </p>
        <button
          type="button"
          onClick={onSeed}
          className="min-h-touch w-full rounded-xl border border-red-300 bg-red-50 px-4 py-2 text-sm font-bold text-red-800 hover:bg-red-100 sm:w-auto"
        >
          {t("datos.reiniciar")}
        </button>
      </Card>

      {/* Modal: reset reglas */}
      <Modal
        open={confirmReset}
        onClose={() => setConfirmReset(false)}
        title={t("configuracion.restaurarPredet")}
        description={t("configuracion.restaurarConfirm")}
        size="sm"
        actions={(
          <div className="ml-auto flex gap-2">
            <button type="button" onClick={() => setConfirmReset(false)} className="min-h-touch rounded-xl border border-line bg-surface px-4 text-sm font-semibold">
              {t("acciones.cancelar")}
            </button>
            <button type="button" onClick={confirmarResetTotal} className="min-h-touch rounded-xl bg-critical px-4 text-sm font-semibold text-white">
              {t("configuracion.restaurarPredet")}
            </button>
          </div>
        )}
      >
        <p className="text-sm text-ink-muted">{t("configuracion.reglaDuraIntro")}</p>
      </Modal>

      {/* Modal: reiniciar datos semilla (dos pasos) */}
      <Modal
        open={confirmSeed}
        onClose={() => { setConfirmSeed(false); setSeedConfirmStep(false); }}
        title={t("datos.reiniciarTitulo")}
        description={t("datos.reiniciarSub")}
        size="sm"
        actions={(
          <div className="ml-auto flex gap-2">
            <button
              type="button"
              onClick={() => { setConfirmSeed(false); setSeedConfirmStep(false); }}
              className="min-h-touch rounded-xl border border-line bg-surface px-4 text-sm font-semibold"
            >
              {t("acciones.cancelar")}
            </button>
            {!seedConfirmStep ? (
              <button
                type="button"
                onClick={() => setSeedConfirmStep(true)}
                className="min-h-touch rounded-xl border border-red-400 bg-red-50 px-4 text-sm font-bold text-red-800 hover:bg-red-100"
              >
                {t("datos.confirmarReiniciar")}…
              </button>
            ) : (
              <button
                type="button"
                onClick={confirmarSeed}
                className="min-h-touch rounded-xl bg-red-700 px-4 text-sm font-bold text-white hover:bg-red-800"
              >
                {t("datos.confirmarReiniciar")} ✓
              </button>
            )}
          </div>
        )}
      >
        <p className="mb-2 text-xs font-semibold text-amber-900">
          ⚠ {t("datos.reiniciarRec")}
        </p>
        {seedConfirmStep && (
          <p className="mt-2 rounded-lg border border-red-300 bg-red-50 p-2 text-xs font-bold text-red-900">
            Esta acción no se puede deshacer. Pulse «{t("datos.confirmarReiniciar")}» para confirmar.
          </p>
        )}
      </Modal>
    </section>
  );
}
