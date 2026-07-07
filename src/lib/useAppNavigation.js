import { useCallback, useEffect } from "react";
import { hashForState, normalizarVista, parseAppHash } from "./navigation.js";

export function useAppNavigation({ view, setView, year, setYear, month, setMonth, diaVista, setDiaVista }) {
  const applyHash = useCallback(() => {
    const next = parseAppHash(window.location.hash);
    setView(next.view);
    if (next.year != null) setYear(next.year);
    if (next.month != null) setMonth(next.month);
    if (next.diaVista) setDiaVista(next.diaVista);
  }, [setDiaVista, setMonth, setView, setYear]);

  useEffect(() => {
    applyHash();
    window.addEventListener("popstate", applyHash);
    window.addEventListener("hashchange", applyHash);
    return () => {
      window.removeEventListener("popstate", applyHash);
      window.removeEventListener("hashchange", applyHash);
    };
  }, [applyHash]);

  useEffect(() => {
    const target = hashForState({ view, year, month, diaVista });
    if (window.location.hash !== target) window.history.replaceState({}, "", target);
  }, [diaVista, month, view, year]);

  return useCallback((nextView) => {
    const safeView = normalizarVista(nextView);
    const target = hashForState({ view: safeView, year, month, diaVista });
    if (window.location.hash !== target) window.history.pushState({}, "", target);
    setView(safeView);
  }, [diaVista, month, setView, year]);
}
