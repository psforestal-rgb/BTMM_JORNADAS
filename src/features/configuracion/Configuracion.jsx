import { useMemo, useRef, useState } from "react";
import Card from "../../ui/Card.jsx";
import Badge from "../../ui/Badge.jsx";
import Icon from "../../ui/Icon.jsx";
import ThemeToggle from "../../ui/ThemeToggle.jsx";
import { useApp } from "../../context/AppContext.jsx";
import { useToast } from "../../context/ToastContext.jsx";
import {
  agregarPuesto,
  personasEnPuesto,
  moverPuesto,
  planificarImportacionPuestos,
  quitarPuesto,
  reemplazarPuesto,
  renombrarPuesto,
  validarPuesto,
} from "../../domain/puestos.js";
import { coloresPuesto } from "../../data/opciones.js";
import { csvDescargable, filasAObjetos, parsearCSV, TIPO_CSV } from "../../lib/csv.js";
import { descargarArchivo } from "../../lib/descargas.js";
import { crearRespaldo } from "../../lib/respaldo.js";
import { toLocalFileTimestamp } from "../../domain/fechas.js";
import ModalPuesto, { PALETA } from "./ModalPuesto.jsx";
import { VIATICOS_OBJETIVO_OPCIONES, validarReglas, REGLAS_DEFAULT } from "../../config/reglas.js";
import { FERIADOS_CR } from "../../data/feriadosCR.js";
import { useT } from "../../i18n/useT.js";
import { plural } from "../../i18n/es-CR.js";
import Modal from "../../ui/Modal.jsx";

/**
 * Editor administrativo de reglas duras configurables. Cada cambio se
 * confirma explícitamente para evitar apagar alertas por error.
 */
/* Mismo tope que protege la importación de «Datos» y la de funcionarios: un
   archivo enorme o corrupto no debe congelar el hilo principal. */
const MAX_CSV_BYTES = 5 * 1024 * 1024;

export default function Configuracion() {
  const t = useT();
  const ctxCompleto = useApp();
  const {
    reglas,
    setReglas,
    resetReglas,
    resetToSeed,
    // Puestos vigentes desde el estado (RP1–RP8), no desde el módulo de datos.
    puestos: puestosVigentes,
    setPuestos,
    personas,
    setPersonas,
    // El rol lleva el nombre del puesto DENTRO de cada clave, así que un
    // renombre tiene que reescribirlas o el rol ya trabajado se queda
    // archivado bajo un nombre que ya no existe.
    roleData,
    setRoleData,
  } = useApp();
  const { conDeshacer, exito, aviso, error } = useToast();
  const opcionesPuestoOperativo = useMemo(
    () => puestosVigentes.map((p) => p.nombre),
    [puestosVigentes],
  );
  const [modalPuesto, setModalPuesto] = useState(null);
  const [previaPuestos, setPreviaPuestos] = useState(null);
  const archivoPuestosRef = useRef(null);
  const [draft, setDraft] = useState(reglas);
  const [confirmar, setConfirmar] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);
  const [confirmSeed, setConfirmSeed] = useState(false);
  const [seedConfirmStep, setSeedConfirmStep] = useState(false);

  const sucia = JSON.stringify(draft) !== JSON.stringify(reglas);
  const advertencias = useMemo(
    () => validarReglas(draft, opcionesPuestoOperativo),
    [draft, opcionesPuestoOperativo],
  );
  const aniosDisponibles = useMemo(
    () => Object.keys(FERIADOS_CR).sort().map(Number),
    [],
  );

  /* ── CRUD de puestos (RP1–RP8) ────────────────────────────────────────
     El renombrado NO es una edición más: arrastra el nombre a las fichas
     (puesto actual e historial de traslados), a la regla de cobertura y a las
     claves del rol. Si no lo hiciera, las fichas quedarían apuntando a un
     puesto inexistente, sus funcionarios desaparecerían de la cuadrícula y la
     cobertura crítica dejaría de evaluarse. */
  const guardarPuesto = (valor) => {
    const original = modalPuesto?.nombreOriginal ?? null;
    if (validarPuesto(valor, puestosVigentes, original).length > 0) return;

    if (!original) {
      setPuestos((prev) => agregarPuesto(prev, valor));
      setModalPuesto(null);
      exito(t("puestos.creado", { nombre: valor.nombre.trim() }));
      return;
    }

    const cambiaNombre = original.trim() !== valor.nombre.trim();
    setPuestos((prev) => reemplazarPuesto(prev, original, valor));
    if (cambiaNombre) {
      const cascada = renombrarPuesto({
        // `puestosVigentes` es todavía la lista de ANTES: `setPuestos` no se ha
        // aplicado en este render. Es justo la que hace falta para partir bien
        // una clave de rol cuyo nombre de puesto lleve guiones.
        puestos: puestosVigentes,
        personas,
        reglas: draft,
        roleData,
        antes: original,
        despues: valor.nombre,
      });
      setPersonas(cascada.personas);
      setRoleData(cascada.roleData);
      // La regla se toca en el borrador Y en el aplicado: el usuario no debería
      // tener que "confirmar reglas" para que un renombre no rompa la cobertura.
      setDraft(cascada.reglas);
      setReglas({ ...reglas, puestosRequierenVisitantesDiario: cascada.reglas.puestosRequierenVisitantesDiario });
      exito(
        t("puestos.renombrado", {
          antes: original,
          despues: valor.nombre.trim(),
          n: cascada.afectados,
          celdas: cascada.celdas,
        }),
      );
      // Una colisión significa que el nombre nuevo YA tenía rol guardado y ese
      // rol gana. No debería pasar, pero callarlo sería perder días de trabajo
      // sin decirlo.
      if (cascada.colisiones > 0) {
        aviso(t("puestos.renombradoColision", { n: cascada.colisiones }));
      }
    } else {
      exito(t("puestos.guardado", { nombre: valor.nombre.trim() }));
    }
    setModalPuesto(null);
  };

  const eliminarPuesto = (puesto) => {
    if (puestosVigentes.length <= 1) {
      error(t("puestos.ultimoPuesto"));
      return;
    }
    const ocupantes = personasEnPuesto(personas, puesto.nombre);
    if (ocupantes.length > 0) {
      // Se bloquea en vez de avisar: borrarlo dejaría fichas apuntando a un
      // puesto que ya no existe, y eso no se ve hasta que algo falla.
      error(t("puestos.eliminarConPersonas", { nombre: puesto.nombre, n: ocupantes.length }));
      return;
    }
    const indice = puestosVigentes.findIndex((x) => x.nombre === puesto.nombre);
    setPuestos((prev) => quitarPuesto(prev, puesto.nombre));
    conDeshacer(
      t("puestos.eliminado", { nombre: puesto.nombre }),
      () => {
        setPuestos((prev) => {
          if (prev.some((x) => x.nombre === puesto.nombre)) return prev;
          const copia = [...prev];
          copia.splice(Math.min(indice, copia.length), 0, puesto);
          return copia;
        });
        exito(t("puestos.restaurado", { nombre: puesto.nombre }));
      },
      { detalle: t("toast.puedeDeshacer") },
    );
  };

  /* ── Exportar e importar puestos (RP6) ────────────────────────────────
     Mismas tres columnas del formulario y en el mismo orden: el archivo que
     sale es exactamente el que vuelve a entrar. */
  const COLUMNAS_PUESTOS = ["nombre", "tag", "color"].map((clave) => ({
    clave,
    titulo: t(`puestos.col.${clave}`),
  }));

  const exportarPuestos = () => {
    const ok = descargarArchivo(
      `puestos-${toLocalFileTimestamp()}.csv`,
      csvDescargable(puestosVigentes, COLUMNAS_PUESTOS),
      TIPO_CSV,
    );
    if (ok) exito(t("puestos.exportado", { n: puestosVigentes.length }));
    else error(t("puestos.exportarError"));
  };

  const elegirArchivoPuestos = () => archivoPuestosRef.current?.click();

  const alElegirArchivoPuestos = (evento) => {
    const archivo = evento.target.files?.[0];
    // Se limpia siempre: si no, elegir el MISMO archivo dos veces seguidas no
    // dispara `change` y parecería que el botón no responde.
    evento.target.value = "";
    if (!archivo) return;
    if (archivo.size > MAX_CSV_BYTES) {
      error(t("puestos.importa.demasiadoGrande", { mb: Math.round(MAX_CSV_BYTES / 1024 / 1024) }));
      return;
    }
    const lector = new FileReader();
    lector.onerror = () => error(t("puestos.importa.errorLectura"));
    lector.onload = () => {
      try {
        prepararPreviaPuestos(String(lector.result ?? ""), archivo.name);
      } catch {
        error(t("puestos.importa.errorLectura"));
      }
    };
    lector.readAsText(archivo, "UTF-8");
  };

  const prepararPreviaPuestos = (texto, nombreArchivo) => {
    const lectura = filasAObjetos(parsearCSV(texto), COLUMNAS_PUESTOS);
    // Sin la columna del nombre no hay forma de saber a qué puesto se refiere
    // cada fila: el nombre es la identidad en todo el sistema.
    if (lectura.faltantes.includes(t("puestos.col.nombre"))) {
      error(t("puestos.importa.sinNombre"));
      return;
    }
    if (lectura.objetos.length === 0) {
      aviso(t("puestos.importa.sinFilas"));
      return;
    }
    const plan = planificarImportacionPuestos(puestosVigentes, lectura.objetos, coloresPuesto);
    setPreviaPuestos({ archivo: nombreArchivo, lectura, plan });
  };

  const aplicarImportacionPuestos = () => {
    if (!previaPuestos) return;
    // El respaldo se descarga ANTES de tocar nada y, si falla, no se importa.
    const backup = crearRespaldo(
      { ...ctxCompleto, puestos: puestosVigentes },
      "antes-de-importar-puestos",
    );
    if (!descargarArchivo(backup.name, backup.text)) {
      error(t("puestos.importa.respaldoFallo"));
      return;
    }
    const { plan } = previaPuestos;
    setPuestos(plan.resultado);
    setPreviaPuestos(null);
    exito(t("puestos.importa.hecho", {
      altas: plan.nuevos.length,
      cambios: plan.actualizados.length,
    }));
  };

  // RP7: el orden se guarda con la lista, no se recalcula.
  const moverPuestoEn = (nombre, delta) => setPuestos((prev) => moverPuesto(prev, nombre, delta));

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

        {/* Puestos operativos (RP1–RP8) */}
        <details className="mb-3 rounded-2xl border border-line p-3">
          <summary className="min-h-touch cursor-pointer py-3 text-sm font-bold uppercase tracking-wider text-ink">
            {t("puestos.titulo")}
          </summary>
          <p className="mb-1 text-xs text-ink-muted">{t("puestos.sub")}</p>
          <p className="mb-3 text-xs text-ink-muted">{t("puestos.ordenSub")}</p>
          <ul className="space-y-2">
            {puestosVigentes.map((p, i) => {
              const ocupantes = personasEnPuesto(personas, p.nombre);
              return (
                <li key={p.nombre} className="flex flex-wrap items-center gap-2 rounded-xl border border-line p-2">
                  <span className="flex shrink-0 flex-col">
                    <button
                      type="button"
                      onClick={() => moverPuestoEn(p.nombre, -1)}
                      disabled={i === 0}
                      aria-label={t("puestos.subir", { nombre: p.nombre })}
                      className="inline-flex min-h-6 min-w-touch items-center justify-center rounded-t-lg border border-line bg-surface text-ink-muted hover:bg-surface-alt disabled:opacity-30"
                    >
                      <Icon name="chevronUp" size={14} />
                    </button>
                    <button
                      type="button"
                      onClick={() => moverPuestoEn(p.nombre, 1)}
                      disabled={i === puestosVigentes.length - 1}
                      aria-label={t("puestos.bajar", { nombre: p.nombre })}
                      className="inline-flex min-h-6 min-w-touch items-center justify-center rounded-b-lg border border-t-0 border-line bg-surface text-ink-muted hover:bg-surface-alt disabled:opacity-30"
                    >
                      <Icon name="chevronDown" size={14} />
                    </button>
                  </span>
                  <span className={`inline-flex min-h-touch min-w-touch items-center justify-center rounded-lg px-2 text-xs font-bold ${p.color || "bg-surface-alt text-ink"}`}>
                    {p.tag}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-ink">{p.nombre}</span>
                    <span className="block text-xs text-ink-muted">
                      {ocupantes.length ? t("puestos.personas", { n: ocupantes.length }) : t("puestos.sinPersonas")}
                    </span>
                  </span>
                  <button
                    type="button"
                    onClick={() => setModalPuesto({ valor: { ...p }, nombreOriginal: p.nombre })}
                    className="inline-flex min-h-touch items-center rounded-lg border border-line bg-surface px-3 text-xs font-bold text-ink hover:bg-surface-alt"
                  >
                    {t("acciones.editar")}
                  </button>
                  <button
                    type="button"
                    onClick={() => eliminarPuesto(p)}
                    className="inline-flex min-h-touch items-center rounded-lg border border-critical/40 bg-surface px-3 text-xs font-bold text-critical-fg hover:bg-critical-soft"
                  >
                    {t("acciones.eliminar")}
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() =>
                setModalPuesto({
                  valor: { nombre: "", tag: "", color: PALETA[0].clases },
                  nombreOriginal: null,
                })
              }
              className="inline-flex min-h-touch items-center gap-1 rounded-xl bg-brand px-4 text-sm font-semibold text-brand-fg"
            >
              <Icon name="plus" size={16} />
              {t("puestos.agregar")}
            </button>
            <button
              type="button"
              onClick={exportarPuestos}
              aria-label={t("puestos.exportarAria")}
              className="inline-flex min-h-touch items-center gap-1 rounded-xl border border-line bg-surface px-4 text-sm font-semibold text-ink hover:bg-surface-alt"
            >
              <Icon name="file" size={16} />
              {t("puestos.exportar")}
            </button>
            <input
              ref={archivoPuestosRef}
              type="file"
              accept=".csv,text/csv"
              onChange={alElegirArchivoPuestos}
              className="hidden"
              aria-hidden="true"
              tabIndex={-1}
            />
            <button
              type="button"
              onClick={elegirArchivoPuestos}
              aria-label={t("puestos.importarAria")}
              className="inline-flex min-h-touch items-center gap-1 rounded-xl border border-line bg-surface px-4 text-sm font-semibold text-ink hover:bg-surface-alt"
            >
              <Icon name="refresh" size={16} />
              {t("puestos.importar")}
            </button>
          </div>
        </details>

        {/* Cobertura */}
        <details className="mb-3 rounded-2xl border border-line p-3">
          <summary className="min-h-touch cursor-pointer py-3 text-sm font-bold uppercase tracking-wider text-ink">{t("configuracion.coberturaTitulo")}</summary>
          <p className="mb-2 text-xs text-ink-muted">{t("configuracion.coberturaSub")}</p>
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
                      ? "border-critical/50 bg-critical-soft text-critical-fg"
                      : "border-line bg-surface text-ink hover:bg-surface-alt"
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
        <details className="mb-3 rounded-2xl border border-line p-3">
          <summary className="min-h-touch cursor-pointer py-3 text-sm font-bold uppercase tracking-wider text-ink">{t("configuracion.viaticosTitulo")}</summary>
          <div className="grid gap-3 md:grid-cols-3">
            <label className="block">
              <span className="mb-1 block text-xs font-bold uppercase text-ink-muted">{t("configuracion.diaCorte")}</span>
              <input
                type="number"
                min="1"
                max="28"
                value={draft.diaCorteViaticos}
                onChange={(e) => setCampo("diaCorteViaticos", Number(e.target.value))}
                className="min-h-touch w-full rounded-xl border border-line bg-surface px-3 py-2 text-sm text-ink outline-none focus:border-brand"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-xs font-bold uppercase text-ink-muted">{t("configuracion.mesObjetivo")}</span>
              <select
                value={draft.mesObjetivoViaticos}
                onChange={(e) => setCampo("mesObjetivoViaticos", e.target.value)}
                className="min-h-touch w-full rounded-xl border border-line bg-surface px-3 py-2 text-sm text-ink outline-none focus:border-brand"
              >
                {VIATICOS_OBJETIVO_OPCIONES.map((x) => (
                  <option key={x} value={x}>{x}</option>
                ))}
              </select>
            </label>
            <label className="flex items-center gap-2 rounded-xl border border-line p-3 text-sm font-semibold text-ink">
              <input
                type="checkbox"
                checked={draft.permitirConsultaDespuesCierre}
                onChange={(e) => setCampo("permitirConsultaDespuesCierre", e.target.checked)}
              />
              {t("configuracion.permitirConsulta")}
            </label>
          </div>
          <p className="mt-2 text-xs text-ink-muted">{t("configuracion.permitirConsultaSub")}</p>
        </details>

        {/* Feriados */}
        <details className="mb-3 rounded-2xl border border-line p-3">
          <summary className="min-h-touch cursor-pointer py-3 text-sm font-bold uppercase tracking-wider text-ink">{t("configuracion.feriadosTitulo")}</summary>
          <label className="flex items-start gap-2 rounded-xl border border-line p-3 text-sm text-ink">
            <input
              type="checkbox"
              checked={draft.aplicarFeriadosEnPrimerDiaLaboral}
              onChange={(e) => setCampo("aplicarFeriadosEnPrimerDiaLaboral", e.target.checked)}
              className="mt-1"
            />
            <span>
              <strong className="block font-semibold">{t("configuracion.feriadosCheckTitle")}</strong>
              <span className="block text-xs text-ink-muted">{t("configuracion.feriadosCheckSub")}</span>
            </span>
          </label>
          <details className="mt-2 rounded-xl border border-line bg-surface-inset p-3 text-xs">
            <summary className="cursor-pointer font-semibold text-ink">
              {t("configuracion.feriadosVer", { n: aniosDisponibles.length, plural: plural(aniosDisponibles.length) })}
            </summary>
            <div className="mt-2 grid gap-3 sm:grid-cols-3">
              {aniosDisponibles.map((ano) => (
                <div key={ano} className="rounded-lg bg-surface p-2 ring-1 ring-line">
                  <p className="text-xs font-bold text-ink">{ano}</p>
                  <ul className="mt-1 space-y-1 text-xs text-ink-muted">
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
        <details className="mb-3 rounded-2xl border border-line p-3">
          <summary className="min-h-touch cursor-pointer py-3 text-sm font-bold uppercase tracking-wider text-ink">{t("configuracion.alertasTitulo")}</summary>
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
                <span className="text-xs font-semibold text-ink">{label}</span>
              </label>
            ))}
          </div>
          <p className="mt-1 text-xs text-ink-muted">{t("configuracion.alertasNota")}</p>
        </details>

        {/* Reposición de tiempo */}
        <details className="mb-3 rounded-2xl border border-line p-3">
          <summary className="min-h-touch cursor-pointer py-3 text-sm font-bold uppercase tracking-wider text-ink">{t("configuracion.reposicionTitulo")}</summary>
          <label className="block max-w-xs">
            <span className="mb-1 block text-xs font-bold uppercase text-ink-muted">{t("configuracion.horasJornada")}</span>
            <input
              type="number"
              min="1"
              max="24"
              step="0.5"
              value={draft.horasJornada}
              onChange={(e) => setCampo("horasJornada", Number(e.target.value))}
              className="min-h-touch w-full rounded-xl border border-line bg-surface px-3 py-2 text-sm text-ink outline-none focus:border-brand"
            />
          </label>
          <p className="mt-1 text-xs text-ink-muted">{t("configuracion.horasJornadaSub")}</p>
        </details>

        {advertencias.length > 0 && (
          <div className="mb-4 rounded-xl border border-warning/40 bg-warning-soft p-3 text-xs text-warning-fg" role="alert">
            <p className="font-semibold">{t("configuracion.advertenciasTitulo")}</p>
            <ul className="mt-1 list-inside list-disc">
              {advertencias.map((m, i) => <li key={i}>{m}</li>)}
            </ul>
          </div>
        )}

        <footer className={`flex flex-wrap items-center justify-between gap-2 border-t border-line pt-3 ${sucia ? "sticky bottom-[calc(5rem+env(safe-area-inset-bottom))] z-20 -mx-3 rounded-2xl bg-surface p-3 shadow-xl lg:bottom-2" : ""}`}>
          {sucia && <strong className="w-full text-sm text-warning-fg sm:w-auto">{t("configuracion.cambiosPendientes")}</strong>}
          <button
            type="button"
            onClick={onResetTotal}
            className="min-h-touch rounded-xl border border-critical/50 bg-surface px-3 py-2 text-xs font-bold text-critical hover:bg-critical-soft"
          >
            {t("configuracion.restaurarPredet")}
          </button>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={descartar}
              disabled={!sucia}
              className="min-h-touch rounded-xl border border-line bg-surface px-4 py-2 text-sm font-semibold text-ink disabled:opacity-50"
            >
              {t("configuracion.descartar")}
            </button>
            {!confirmar ? (
              <button
                type="button"
                onClick={() => setConfirmar(true)}
                disabled={!sucia}
                className="min-h-touch rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-brand-fg disabled:opacity-50 hover:opacity-90"
              >
                {t("configuracion.aplicar")}
              </button>
            ) : (
              <button
                type="button"
                onClick={aplicar}
                className="min-h-touch rounded-xl bg-critical px-4 py-2 text-sm font-semibold text-ink-inverse hover:opacity-90"
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
        <p className="mb-4 rounded-xl border border-warning/40 bg-warning-soft px-3 py-2 text-xs font-semibold text-warning-fg">
          ⚠ {t("datos.reiniciarRec")}
        </p>
        <button
          type="button"
          onClick={onSeed}
          className="min-h-touch w-full rounded-xl border border-critical/50 bg-critical-soft px-4 py-2 text-sm font-bold text-critical-fg hover:opacity-90 sm:w-auto"
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
            <button type="button" onClick={confirmarResetTotal} className="min-h-touch rounded-xl bg-critical px-4 text-sm font-semibold text-ink-inverse">
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
                className="min-h-touch rounded-xl border border-critical/50 bg-critical-soft px-4 text-sm font-bold text-critical-fg hover:opacity-90"
              >
                {t("datos.confirmarReiniciar")}…
              </button>
            ) : (
              <button
                type="button"
                onClick={confirmarSeed}
                className="min-h-touch rounded-xl bg-critical px-4 text-sm font-bold text-ink-inverse hover:opacity-90"
              >
                {t("datos.confirmarReiniciar")} ✓
              </button>
            )}
          </div>
        )}
      >
        <p className="mb-2 text-xs font-semibold text-warning-fg">
          ⚠ {t("datos.reiniciarRec")}
        </p>
        {seedConfirmStep && (
          <p className="mt-2 rounded-lg border border-critical/50 bg-critical-soft p-2 text-xs font-bold text-critical-fg">
            {t("datos.noDeshacer", { accion: t("datos.confirmarReiniciar") })}
          </p>
        )}
      </Modal>
      {previaPuestos && (
        <Modal
          open
          onClose={() => setPreviaPuestos(null)}
          title={t("puestos.importa.titulo")}
          description={previaPuestos.archivo}
          size="md"
          actions={
            <div className="ml-auto flex flex-wrap gap-2">
              <button type="button" onClick={() => setPreviaPuestos(null)} className="min-h-touch rounded-xl border border-line bg-surface px-4 text-sm font-semibold">
                {t("acciones.cancelar")}
              </button>
              <button type="button" onClick={aplicarImportacionPuestos} className="min-h-touch rounded-xl bg-brand px-4 text-sm font-semibold text-brand-fg">
                {t("puestos.importa.confirmar")}
              </button>
            </div>
          }
        >
          <div className="space-y-3 text-sm">
            <p className="text-ink-muted">{t("puestos.importa.sub")}</p>
            <dl className="grid grid-cols-3 gap-2 rounded-xl bg-surface-alt p-3 text-center">
              <div>
                <dt className="text-xs font-semibold text-ink-muted">{t("puestos.importa.altas")}</dt>
                <dd className="text-2xl font-bold text-ok">{previaPuestos.plan.nuevos.length}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold text-ink-muted">{t("puestos.importa.cambios")}</dt>
                <dd className="text-2xl font-bold text-info">{previaPuestos.plan.actualizados.length}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold text-ink-muted">{t("puestos.importa.intactos")}</dt>
                <dd className="text-2xl font-bold text-ink">
                  {puestosVigentes.length - previaPuestos.plan.actualizados.length}
                </dd>
              </div>
            </dl>
            <ul className="space-y-1 text-xs text-ink-muted">
              {(() => {
                const sinNombre = previaPuestos.plan.omitidos.filter((o) => o.motivo === "sinNombre");
                const porCodigo = previaPuestos.plan.omitidos.filter((o) => o.motivo === "codigoOcupado");
                const sinCodigo = previaPuestos.plan.omitidos.filter((o) => o.motivo === "sinCodigo");
                const renombres = previaPuestos.plan.renombresIgnorados || [];
                return (
                  <>
                    {sinNombre.length > 0 && (
                      <li>{t("puestos.importa.omitidasSinNombre", { n: sinNombre.length })}</li>
                    )}
                    {sinCodigo.length > 0 && (
                      <li>
                        {t("puestos.importa.omitidasSinCodigo", {
                          cols: sinCodigo.map((o) => o.nombre).join(", "),
                        })}
                      </li>
                    )}
                    {renombres.length > 0 && (
                      <li>
                        {t("puestos.importa.renombresIgnorados", {
                          cols: renombres.map((r) => `${r.pedido} → ${r.actual}`).join(", "),
                        })}
                      </li>
                    )}
                    {porCodigo.length > 0 && (
                      <li>
                        {t("puestos.importa.omitidasCodigo", {
                          cols: porCodigo.map((o) => `${o.nombre} (${o.tag})`).join(", "),
                        })}
                      </li>
                    )}
                  </>
                );
              })()}
              {previaPuestos.lectura.filasVacias > 0 && (
                <li>{t("puestos.importa.vacias", { n: previaPuestos.lectura.filasVacias })}</li>
              )}
              {previaPuestos.plan.duplicados.length > 0 && (
                <li>{t("puestos.importa.duplicadas", { n: previaPuestos.plan.duplicados.length })}</li>
              )}
              {previaPuestos.lectura.faltantes.length > 0 && (
                <li>{t("puestos.importa.faltantes", { cols: previaPuestos.lectura.faltantes.join(", ") })}</li>
              )}
              {previaPuestos.lectura.desconocidas.length > 0 && (
                <li>{t("puestos.importa.desconocidas", { cols: previaPuestos.lectura.desconocidas.join(", ") })}</li>
              )}
            </ul>
            <p className="rounded-xl border border-line bg-surface-alt p-3 text-xs text-ink">
              {t("puestos.importa.noElimina")}
            </p>
            <p className="rounded-xl border border-line bg-surface-alt p-3 text-xs text-ink">
              {t("puestos.importa.respaldo")}
            </p>
          </div>
        </Modal>
      )}
      {modalPuesto && (
        <ModalPuesto
          valor={modalPuesto.valor}
          lista={puestosVigentes}
          nombreOriginal={modalPuesto.nombreOriginal}
          cerrar={() => setModalPuesto(null)}
          guardar={guardarPuesto}
        />
      )}
    </section>
  );
}
