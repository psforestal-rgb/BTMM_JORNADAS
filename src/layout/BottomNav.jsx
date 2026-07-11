import { useState } from "react";
import Icon from "../ui/Icon.jsx";
import Modal from "../ui/Modal.jsx";
import { useT } from "../i18n/useT.js";

function badgeText(n) {
  return n > 99 ? "99+" : String(n);
}

export default function BottomNav({ view, setView, nAlertas, hidden = false }) {
  const t = useT();
  const [moreOpen, setMoreOpen] = useState(false);
  const main = [
    ["dia", t("bottomNav.dia"), "calendar"],
    ["roles", t("bottomNav.roles"), "chart"],
    ["planificacion", t("bottomNav.plan"), "calendarDays"],
    ["funcionarios", t("bottomNav.personal"), "users"],
  ];
  const more = [
    ["alertas", t("bottomNav.alertas"), "bell"],
    ["adelantos", t("bottomNav.viaticos"), "banknote"],
    ["reposicion", t("bottomNav.reposicion"), "refresh"],
    ["disponibilidad", t("bottomNav.disponib"), "shield"],
    ["planFuncionario", t("bottomNav.planFunc"), "clipboard"],
    ["datos", t("bottomNav.datos"), "shieldAlert"],
    ["configuracion", t("bottomNav.config"), "traffic"],
  ];
  const moreActive = more.some(([id]) => id === view);
  const go = (id) => {
    setView(id);
    setMoreOpen(false);
  };

  if (hidden) return null;

  return (
    <>
      <nav className="pnlq-bottom-nav pnlq-no-print fixed bottom-0 left-0 right-0 z-40 border-t border-line bg-surface pb-[env(safe-area-inset-bottom)] lg:hidden" aria-label={t("bottomNav.navAria")}>
        <div className="pnlq-bottom-nav-grid grid grid-cols-5">
          {main.map(([id, label, icon]) => (
            <button
              key={id}
              type="button"
              onClick={() => go(id)}
              aria-current={view === id ? "page" : undefined}
              className={`pnlq-bottom-nav-item relative flex min-h-touch flex-col items-center justify-center gap-1 py-2 text-xs font-semibold ${view === id ? "text-brand" : "text-ink-muted"}`}
            >
              <Icon name={icon} size={22} />
              {label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setMoreOpen(true)}
            aria-expanded={moreOpen}
            aria-current={moreActive ? "page" : undefined}
            className={`pnlq-bottom-nav-item relative flex min-h-touch flex-col items-center justify-center gap-1 py-2 text-xs font-semibold ${moreOpen || moreActive ? "text-brand" : "text-ink-muted"}`}
          >
            <Icon name="menu" size={22} />
            {t("bottomNav.mas")}
            {nAlertas > 0 && (
              <span className="absolute right-[22%] top-1 min-w-5 rounded-full bg-critical px-1 text-center text-[11px] font-bold leading-5 text-white" aria-label={t("bottomNav.alertasAria", { n: nAlertas })}>
                {badgeText(nAlertas)}
              </span>
            )}
          </button>
        </div>
      </nav>

      <Modal open={moreOpen} onClose={() => setMoreOpen(false)} title={t("bottomNav.masTitulo")} description={moreActive ? t(`view.${view}`) : t("bottomNav.masSub")} size="sm" contentClassName="p-3 pb-[max(1rem,env(safe-area-inset-bottom))]">
        <div className="grid grid-cols-2 gap-2">
          {more.map(([id, label, icon]) => (
            <button
              key={id}
              type="button"
              onClick={() => go(id)}
              aria-current={view === id ? "page" : undefined}
              className={`relative flex min-h-[56px] items-center gap-3 rounded-xl px-3 text-left text-sm font-semibold ${view === id ? "bg-brand text-brand-fg" : "border border-line bg-surface-alt text-ink"}`}
            >
              <Icon name={icon} size={20} />
              <span>{label}</span>
              {id === "alertas" && nAlertas > 0 && <span className="ml-auto rounded-full bg-critical px-2 py-0.5 text-xs font-bold text-white">{badgeText(nAlertas)}</span>}
            </button>
          ))}
        </div>
      </Modal>
    </>
  );
}
