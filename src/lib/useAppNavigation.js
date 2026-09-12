import { useCallback, useEffect } from "react";
import { hashForState, normalizarVista, parseAppHash } from "./navigation.js";

export function useAppNavigation({
  view, setView, year, setYear, month, setMonth, diaVista, setDiaVista,
  funcionarioVista, setFuncionarioVista, filtrosVista, setFiltrosVista,
}) {
  const filtros = filtrosVista?.[view];
  const applyHash = useCallback(() => {
    const next = parseAppHash(window.location.hash);
    setView(next.view);
    if (next.year != null) setYear(next.year);
    if (next.month != null) setMonth(next.month);
    if (next.diaVista) setDiaVista(next.diaVista);
    if (next.funcionarioVista) setFuncionarioVista?.(next.funcionarioVista);
    // Solo si la ruta dice algo de los filtros. Un enlace limpio no debe borrar
    // los que la persona tenía puestos (ver `parseAppHash`).
    if (next.filtros) setFiltrosVista?.(next.view, next.filtros);
  }, [setDiaVista, setFiltrosVista, setFuncionarioVista, setMonth, setView, setYear]);

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
    const target = hashForState({ view, year, month, diaVista, funcionarioVista, filtros });
    if (window.location.hash !== target) window.history.replaceState({}, "", target);
  }, [diaVista, filtros, funcionarioVista, month, view, year]);

  /**
   * `navegar(vista, { funcionario })`. El segundo argumento es opcional y hoy
   * solo lo usa la ficha individual: sin él se conserva el funcionario que ya
   * estuviera seleccionado, para que volver a la ficha desde otra vista no
   * pierda el contexto.
   */
  return useCallback((nextView, opciones = {}) => {
    const safeView = normalizarVista(nextView);
    const nombre = opciones.funcionario != null ? opciones.funcionario : funcionarioVista;
    if (opciones.funcionario != null) setFuncionarioVista?.(opciones.funcionario);
    const target = hashForState({
      view: safeView, year, month, diaVista, funcionarioVista: nombre,
      filtros: filtrosVista?.[safeView],
    });
    if (window.location.hash !== target) window.history.pushState({}, "", target);
    setView(safeView);
  }, [diaVista, filtrosVista, funcionarioVista, month, setFuncionarioVista, setView, year]);
}
