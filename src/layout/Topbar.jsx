import { useState } from "react";
import { meses } from "../data/calendario.js";
import Icon from "../ui/Icon.jsx";
import SyncStatus from "../ui/SyncStatus.jsx";
import { useT } from "../i18n/useT.js";
import Modal from "../ui/Modal.jsx";
import {
  MOBILE_PREVIEW_HEIGHT,
  MOBILE_PREVIEW_WIDTH,
  isMobilePreviewLocation,
  mobilePreviewUrl,
} from "../lib/mobilePreview.js";

/** Vistas que muestran navegación de mes/año en la barra superior.
 *  Roles se excluye a propósito: su calendario se navega dentro de la
 *  propia vista (mes anterior/siguiente, Hoy e ir a una fecha), para
 *  concentrar todos sus controles en un solo lugar. */
const VISTAS_CON_PERIODO = ["planificacion", "planFuncionario"];

export default function Topbar({ view, setView, month, setMonth, year, setYear, compact, setCompact }) {
  const t = useT();
  const [mobilePreviewOpen, setMobilePreviewOpen] = useState(false);
  const [previewHorizontal, setPreviewHorizontal] = useState(false);
  const dentroDePreview = isMobilePreviewLocation();
  const anioActual = new Date().getFullYear();
  const opcionesAnio = Array.from({ length: 11 }, (_, i) => anioActual - 5 + i);
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
    setMonth(nuevoMes);
    setYear(nuevoAno);
  };
  const irHoy = () => {
    const hoy = new Date();
    setMonth(hoy.getMonth());
    setYear(hoy.getFullYear());
  };
  // En móvil (<768px), el topbar ya no tiene nada que mostrar salvo en las
  // vistas con navegación de periodo (título/breadcrumb y hora se retiraron
  // por pedido explícito). Sin este condicional queda una franja vacía con
  // fondo/borde/sombra propios flotando arriba de la primera tarjeta.
  // Desde `md` (768px), Roles también necesita el topbar visible: ahí vive
  // el único control para alternar la cuadrícula entre compacta y amplia
  // (`md:inline-flex` más abajo) — si el topbar entero quedara oculto hasta
  // `lg`, ese control sería inalcanzable entre 768 y 1023px.
  const contenidoMovilVisible = VISTAS_CON_PERIODO.includes(view);
  const contenidoTabletVisible = contenidoMovilVisible || view === "roles";
  return (
    <header
      className={`pnlq-topbar pnlq-no-print sticky top-0 border-line bg-surface/95 shadow-sm backdrop-blur lg:block lg:border-b lg:px-6 lg:py-3 ${
        contenidoMovilVisible
          ? "block border-b px-4 py-2"
          : contenidoTabletVisible
          ? "hidden border-b md:block md:px-4 md:py-2"
          : "hidden"
      } ${mobilePreviewOpen ? "z-50" : "z-30"}`}
    >
      <div className="pnlq-topbar-inner flex flex-col gap-2 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex items-center justify-between gap-2">
          <div className="min-w-0">
            {/* El breadcrumb "PNLQ / <vista>" y el indicador de hora en
                móvil se retiraron por pedido explícito: la BottomNav ya
                marca la vista activa, y ese primer renglón quedaba
                redundante y con demasiado peso visual arriba de la
                primera tarjeta. */}
            <h1 className="hidden text-xl font-semibold tracking-tight text-ink lg:block">{t("app.titulo")}</h1>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {VISTAS_CON_PERIODO.includes(view) && (
            <>
              {/* Periodo como un solo control segmentado: ‹ mes año ›.
                  Bordes compartidos para que quepa en una línea de 360 px. */}
              <div
                role="group"
                aria-label={t("topbar.periodo")}
                className="inline-flex items-stretch overflow-hidden rounded-xl border border-line bg-surface shadow-sm"
              >
                <button
                  onClick={() => moverMes(-1)}
                  aria-label={t("topbar.mesAnterior")}
                  className="inline-flex min-h-touch min-w-touch items-center justify-center px-2 text-ink-muted hover:bg-surface-alt"
                >
                  <Icon name="chevronLeft" size={16} />
                </button>
                <select
                  aria-label={t("topbar.mes")}
                  className="min-h-touch border-x border-line bg-surface px-1.5 text-sm font-medium text-ink outline-none sm:px-2 dark:[color-scheme:dark]"
                  value={month}
                  onChange={(e) => setMonth(Number(e.target.value))}
                >
                  {meses.map((m, i) => (
                    <option key={m} value={i}>
                      {m}
                    </option>
                  ))}
                </select>
                <select
                  aria-label={t("topbar.anio")}
                  className="min-h-touch bg-surface px-1.5 text-sm font-medium text-ink outline-none sm:px-2 dark:[color-scheme:dark]"
                  value={year}
                  onChange={(e) => setYear(Number(e.target.value))}
                >
                  {opcionesAnio.map((y) => (
                    <option key={y}>{y}</option>
                  ))}
                </select>
                <button
                  onClick={() => moverMes(1)}
                  aria-label={t("topbar.mesSiguiente")}
                  className="inline-flex min-h-touch min-w-touch items-center justify-center border-l border-line px-2 text-ink-muted hover:bg-surface-alt"
                >
                  <Icon name="chevronRight" size={16} />
                </button>
              </div>
              <button
                type="button"
                onClick={irHoy}
                className="inline-flex min-h-touch items-center rounded-xl border border-line bg-surface px-3 text-sm font-semibold text-brand hover:bg-brand-soft"
              >
                {t("topbar.hoy")}
              </button>
            </>
          )}
          {view === "roles" && (
            <button
              onClick={() => setCompact(!compact)}
              className="hidden min-h-touch items-center rounded-xl border border-line bg-surface px-3 py-2 text-sm font-medium text-ink hover:bg-surface-alt md:inline-flex"
              aria-pressed={compact}
            >
              {compact ? t("topbar.vistaAmplia") : t("topbar.vistaCompacta")}
            </button>
          )}
          {!dentroDePreview && (
            <button
              type="button"
              onClick={() => setMobilePreviewOpen(true)}
              className="hidden min-h-touch items-center gap-2 rounded-xl border border-brand bg-brand-soft px-3 text-sm font-semibold text-ink hover:opacity-90 lg:inline-flex"
              aria-label={t("topbar.previewMobile")}
            >
              <Icon name="phone" size={18} />
              {t("topbar.previewMobileCorto")}
              <span className="rounded-md bg-surface px-1.5 py-0.5 text-xs text-ink-muted">Temporal</span>
            </button>
          )}
          {/* Visible desde `lg` (donde la BottomNav de móvil ya desaparece,
              ver BottomNav.jsx) para no dejar un rango 1024-1279px sin
              ningún indicador de guardado/offline — antes empezaba en
              `xl` y ese hueco quedaba sin cobertura. */}
          <span className="hidden lg:inline-flex">
            <SyncStatus />
          </span>
        </div>
      </div>
      <Modal
        open={mobilePreviewOpen}
        onClose={() => setMobilePreviewOpen(false)}
        title={t("topbar.previewTitle")}
        description={t("topbar.previewDesc", {
          ancho: previewHorizontal ? MOBILE_PREVIEW_HEIGHT : MOBILE_PREVIEW_WIDTH,
          alto: previewHorizontal ? MOBILE_PREVIEW_WIDTH : MOBILE_PREVIEW_HEIGHT,
        })}
        size="2xl"
        contentClassName="bg-slate-200 p-3"
      >
        <div className="mb-3 flex justify-center" role="group" aria-label={t("topbar.previewOrientation")}>
          <button type="button" onClick={() => setPreviewHorizontal(false)} aria-pressed={!previewHorizontal} className={`min-h-touch rounded-l-xl border px-4 text-sm font-semibold ${!previewHorizontal ? "border-brand bg-brand text-brand-fg" : "border-line bg-surface text-ink"}`}>{t("topbar.previewVertical")}</button>
          <button type="button" onClick={() => setPreviewHorizontal(true)} aria-pressed={previewHorizontal} className={`min-h-touch rounded-r-xl border border-l-0 px-4 text-sm font-semibold ${previewHorizontal ? "border-brand bg-brand text-brand-fg" : "border-line bg-surface text-ink"}`}>{t("topbar.previewHorizontal")}</button>
        </div>
        <div
          className="mx-auto max-w-full overflow-hidden rounded-[2rem] border-[6px] border-slate-900 bg-white shadow-2xl transition-[width]"
          style={{ width: `${(previewHorizontal ? MOBILE_PREVIEW_HEIGHT : MOBILE_PREVIEW_WIDTH) + 12}px` }}
        >
          <iframe
            title={t("topbar.previewFrameTitle")}
            src={mobilePreviewUrl()}
            className={`block w-full bg-white ${previewHorizontal ? "h-[min(390px,calc(100dvh-12rem))] min-h-[280px]" : "h-[min(844px,calc(100dvh-12rem))] min-h-[480px]"}`}
          />
        </div>
      </Modal>
    </header>
  );
}
