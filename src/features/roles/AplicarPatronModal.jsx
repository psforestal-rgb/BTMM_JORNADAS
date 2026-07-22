import { useMemo, useState } from "react";
import Modal from "../../ui/Modal.jsx";
import Icon from "../../ui/Icon.jsx";
import { useT } from "../../i18n/useT.js";
import { isoFecha, fecha as formatearFecha } from "../../domain/fechas.js";
import { parseModalidad, posCicloDeCodigo, codigoDePosCiclo } from "../../domain/roles.js";

// Tope defensivo de días a llenar de una vez: evita escribir de golpe
// decenas de miles de celdas en `roleData` (persistido en localStorage +
// IndexedDB). 1830 ≈ 5 años, más que suficiente para planificar por
// adelantado sin bloquear la interfaz.
const MAX_DIAS = 1830;

function parseISO(iso) {
  const [y, m, d] = String(iso || "").split("-").map(Number);
  if (!y || !m || !d) return null;
  return { year: y, month: m - 1, day: d };
}

function sumarDiasISO(iso, n) {
  const p = parseISO(iso);
  if (!p) return null;
  const dt = new Date(p.year, p.month, p.day);
  dt.setDate(dt.getDate() + n);
  return isoFecha(dt.getFullYear(), dt.getMonth(), dt.getDate());
}

// Días entre dos fechas ISO (b - a), en fechas civiles locales.
function diffDiasISO(aISO, bISO) {
  const a = parseISO(aISO);
  const b = parseISO(bISO);
  if (!a || !b) return null;
  const da = new Date(a.year, a.month, a.day);
  const db = new Date(b.year, b.month, b.day);
  return Math.round((db - da) / 86400000);
}

/**
 * Asistente para llenar el patrón de rol (turno/libre) de un funcionario en
 * un rango de fechas que puede abarcar varios meses. Además de la modalidad,
 * permite elegir:
 *  - «A partir de» (fecha inicial), con un atajo para colocarla justo
 *    después del último día ya programado.
 *  - «Último día» (fecha final, inclusive).
 *  - Cómo empieza la rotación: reiniciar en T1 en la fecha inicial, o
 *    continuar la rotación que traía el día anterior (T7 → T8…).
 *
 * No toca `roleData` directamente: delega en `onAplicar` con los parámetros
 * ya resueltos (incluido `posInicial`, la posición de ciclo del primer día).
 */
export default function AplicarPatronModal({
  persona,
  modalidadInicial,
  opcionesModalidad,
  defaultDesdeISO,
  defaultHastaISO,
  ultimoProgramadoSiguienteISO,
  valorEnFecha,
  contarProgramados,
  onAplicar,
  onClose,
}) {
  const t = useT();
  const [modalidad, setModalidad] = useState(modalidadInicial);
  const [desdeISO, setDesdeISO] = useState(defaultDesdeISO);
  const [hastaISO, setHastaISO] = useState(defaultHastaISO);
  const [modo, setModo] = useState("reiniciar");

  const esAdministrativo = useMemo(() => parseModalidad(modalidad).administrativo, [modalidad]);

  // Rol vigente el día ANTES de la fecha inicial: es el ancla para
  // "continuar" la rotación. Si no es un turno/libre válido, no se puede
  // continuar (solo reiniciar).
  const anclaContinuar = useMemo(() => {
    if (esAdministrativo || !desdeISO) return null;
    const prevISO = sumarDiasISO(desdeISO, -1);
    if (!prevISO) return null;
    const codigoPrevio = valorEnFecha(prevISO);
    const pos = posCicloDeCodigo(codigoPrevio, modalidad);
    if (pos == null) return null;
    return {
      codigoPrevio,
      posSiguiente: pos + 1,
      codigoSiguiente: codigoDePosCiclo(pos + 1, modalidad),
    };
  }, [esAdministrativo, desdeISO, valorEnFecha, modalidad]);

  const puedeContinuar = anclaContinuar != null;
  // Modo efectivo: aunque el usuario haya elegido "continuar", si no hay
  // ancla válida (cambió a administrativo, movió la fecha, etc.) se llena
  // reiniciando para no dejar la acción en un estado imposible.
  const modoEfectivo = modo === "continuar" && puedeContinuar ? "continuar" : "reiniciar";
  const posInicial = modoEfectivo === "continuar" ? anclaContinuar.posSiguiente : 0;

  const dias = useMemo(() => {
    const d = diffDiasISO(desdeISO, hastaISO);
    return d == null ? null : d + 1;
  }, [desdeISO, hastaISO]);

  const error = useMemo(() => {
    if (!desdeISO || !hastaISO) return t("roles.aplicarPatron.errorSinFechas");
    if (dias == null || dias < 1) return t("roles.aplicarPatron.errorRango");
    if (dias > MAX_DIAS) return t("roles.aplicarPatron.errorMaxDias", { max: MAX_DIAS });
    return null;
  }, [desdeISO, hastaISO, dias, t]);

  // Solo se cuentan los días ya programados cuando el rango es válido: así
  // se evita recorrer un rango enorme (o invertido) en cada cambio.
  const programados = useMemo(
    () => (error ? 0 : contarProgramados(desdeISO, hastaISO)),
    [error, desdeISO, hastaISO, contarProgramados],
  );

  const usarUltimoProgramado = () => {
    if (!ultimoProgramadoSiguienteISO) return;
    setDesdeISO(ultimoProgramadoSiguienteISO);
    // La intención natural del atajo es continuar donde quedó la
    // programación previa, así que se preselecciona ese modo (si no hubiera
    // ancla, el modo efectivo cae a "reiniciar" solo).
    setModo("continuar");
  };

  const confirmar = () => {
    if (error) return;
    onAplicar({ modalidad, desdeISO, hastaISO, modo: modoEfectivo, posInicial });
  };

  const acciones = (
    <>
      <button
        type="button"
        onClick={onClose}
        className="inline-flex min-h-touch items-center rounded-xl border border-line bg-surface px-4 py-2 text-sm font-semibold text-ink hover:bg-surface-alt"
      >
        {t("roles.aplicarPatron.cancelar")}
      </button>
      <button
        type="button"
        onClick={confirmar}
        disabled={!!error}
        className="inline-flex min-h-touch items-center gap-1 rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-brand-fg hover:opacity-90 disabled:opacity-50"
      >
        <Icon name="check" size={16} /> {t("roles.aplicarPatron.confirmar")}
      </button>
    </>
  );

  return (
    <Modal
      open
      onClose={onClose}
      title={t("roles.aplicarPatron.titulo")}
      description={t("roles.aplicarPatron.descripcion", { persona })}
      size="md"
      actions={acciones}
    >
      <div className="space-y-4">
        {/* Modalidad */}
        <label className="block">
          <span className="mb-1 block text-xs font-bold uppercase text-ink-muted">
            {t("roles.aplicarPatron.modalidad")}
          </span>
          <select
            value={modalidad}
            onChange={(e) => setModalidad(e.target.value)}
            className="min-h-touch w-full rounded-xl border border-line bg-surface px-3 py-2 text-sm font-bold text-ink"
          >
            {opcionesModalidad.map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </label>

        {/* Rango de fechas */}
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1 block text-xs font-bold uppercase text-ink-muted">
              {t("roles.aplicarPatron.desde")}
            </span>
            <input
              type="date"
              value={desdeISO}
              onChange={(e) => setDesdeISO(e.target.value)}
              className="min-h-touch w-full rounded-xl border border-line bg-surface px-3 py-2 text-sm font-semibold text-ink [color-scheme:light] dark:[color-scheme:dark]"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-xs font-bold uppercase text-ink-muted">
              {t("roles.aplicarPatron.hasta")}
            </span>
            <input
              type="date"
              value={hastaISO}
              onChange={(e) => setHastaISO(e.target.value)}
              min={desdeISO || undefined}
              className="min-h-touch w-full rounded-xl border border-line bg-surface px-3 py-2 text-sm font-semibold text-ink [color-scheme:light] dark:[color-scheme:dark]"
            />
            <span className="mt-1 block text-[11px] text-ink-subtle">{t("roles.aplicarPatron.hastaAyuda")}</span>
          </label>
        </div>

        {/* Atajo: continuar desde el último día ya programado */}
        <div>
          <button
            type="button"
            onClick={usarUltimoProgramado}
            disabled={!ultimoProgramadoSiguienteISO}
            className="inline-flex min-h-touch items-center gap-1.5 rounded-xl border border-brand/50 bg-brand-soft px-3 py-2 text-xs font-bold text-ink hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Icon name="calendar" size={14} />
            {t("roles.aplicarPatron.botonUltimoProgramado")}
          </button>
          <p className="mt-1 text-[11px] text-ink-subtle">
            {ultimoProgramadoSiguienteISO
              ? t("roles.aplicarPatron.botonUltimoProgramadoAyuda")
              : t("roles.aplicarPatron.sinProgramado")}
          </p>
        </div>

        {/* Fase de la rotación */}
        <fieldset className="rounded-2xl border border-line p-3">
          <legend className="px-1 text-xs font-bold uppercase text-ink-muted">
            {t("roles.aplicarPatron.fase")}
          </legend>
          {esAdministrativo ? (
            <p className="rounded-xl border border-sky-200 bg-sky-50 p-3 text-xs text-sky-950">
              {t("roles.aplicarPatron.faseAdministrativo")}
            </p>
          ) : (
            <div className="grid gap-2">
              <label
                className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3 ${
                  modoEfectivo === "reiniciar"
                    ? "border-brand bg-brand-soft"
                    : "border-line bg-surface hover:bg-surface-alt"
                }`}
              >
                <input
                  type="radio"
                  name="fase-rotacion"
                  checked={modoEfectivo === "reiniciar"}
                  onChange={() => setModo("reiniciar")}
                  className="mt-0.5 h-4 w-4"
                />
                <span className="min-w-0">
                  <span className="block text-sm font-bold text-ink">{t("roles.aplicarPatron.faseReiniciar")}</span>
                  <span className="mt-0.5 block text-xs text-ink-muted">{t("roles.aplicarPatron.faseReiniciarAyuda")}</span>
                </span>
              </label>

              <label
                className={`flex items-start gap-3 rounded-xl border p-3 ${
                  !puedeContinuar
                    ? "border-line bg-surface-alt/60 opacity-70"
                    : modoEfectivo === "continuar"
                      ? "cursor-pointer border-brand bg-brand-soft"
                      : "cursor-pointer border-line bg-surface hover:bg-surface-alt"
                }`}
              >
                <input
                  type="radio"
                  name="fase-rotacion"
                  checked={modoEfectivo === "continuar"}
                  disabled={!puedeContinuar}
                  onChange={() => setModo("continuar")}
                  className="mt-0.5 h-4 w-4"
                />
                <span className="min-w-0">
                  <span className="block text-sm font-bold text-ink">{t("roles.aplicarPatron.faseContinuar")}</span>
                  {puedeContinuar ? (
                    <span className="mt-0.5 block text-xs text-ink-muted">
                      {t("roles.aplicarPatron.faseContinuarAyuda", {
                        codigoPrevio: anclaContinuar.codigoPrevio,
                        codigoSiguiente: anclaContinuar.codigoSiguiente,
                      })}
                    </span>
                  ) : (
                    <span className="mt-0.5 block text-xs text-ink-subtle">
                      {t("roles.aplicarPatron.faseContinuarSinAncla")}
                    </span>
                  )}
                </span>
              </label>
            </div>
          )}
        </fieldset>

        {/* Resumen / validación */}
        {error ? (
          <p className="rounded-xl border border-warning/40 bg-warning-soft p-3 text-xs font-semibold text-warning-fg">
            {error}
          </p>
        ) : (
          <div className="rounded-xl border border-line bg-surface-alt p-3 text-xs text-ink">
            <p className="font-semibold">
              {t("roles.aplicarPatron.resumen", {
                dias,
                desde: formatearFecha(desdeISO),
                hasta: formatearFecha(hastaISO),
              })}
            </p>
            {programados > 0 && (
              <p className="mt-1 text-ink-muted">{t("roles.aplicarPatron.sobrescribe", { n: programados })}</p>
            )}
          </div>
        )}
      </div>
    </Modal>
  );
}
