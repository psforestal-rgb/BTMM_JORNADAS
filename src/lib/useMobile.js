/**
 * useMobile — devuelve true cuando el viewport es < 768 px (breakpoint `md`).
 * Se actualiza al cambiar el tamaño de la ventana.
 */
import { useState, useEffect } from "react";

const QUERY = "(max-width: 767px)";

export function useMobile() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(QUERY).matches : false
  );

  useEffect(() => {
    const mql = window.matchMedia(QUERY);
    const handler = (e) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return isMobile;
}
