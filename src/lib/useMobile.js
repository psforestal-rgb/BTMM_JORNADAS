/**
 * useMobile — devuelve true cuando el viewport es < 768 px (breakpoint `md`).
 * Se actualiza al cambiar el tamaño de la ventana.
 *
 * Tolera entornos sin `matchMedia` (jsdom sin polyfill, render en servidor,
 * WebViews antiguas): en ese caso asume escritorio y no se suscribe a nada,
 * en vez de lanzar. También admite navegadores con la API antigua
 * (`addListener`), igual que `useMediaQuery` en `responsive.js`.
 */
import { useState, useEffect } from "react";

const QUERY = "(max-width: 767px)";

function coincide() {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") return false;
  return window.matchMedia(QUERY).matches;
}

export function useMobile() {
  const [isMobile, setIsMobile] = useState(coincide);

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return undefined;
    const mql = window.matchMedia(QUERY);
    const handler = (e) => setIsMobile(e.matches);
    // El viewport pudo cambiar entre el primer render y este efecto.
    setIsMobile(mql.matches);
    if (mql.addEventListener) {
      mql.addEventListener("change", handler);
      return () => mql.removeEventListener("change", handler);
    }
    // Safari < 14
    mql.addListener(handler);
    return () => mql.removeListener(handler);
  }, []);

  return isMobile;
}
