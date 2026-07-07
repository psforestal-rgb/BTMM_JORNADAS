import { useEffect, useState } from "react";

/** Estado de interfaz efímero que sobrevive cambios de módulo y recargas. */
export function useSessionState(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.sessionStorage.getItem(key);
      return stored === null ? (typeof initialValue === "function" ? initialValue() : initialValue) : JSON.parse(stored);
    } catch {
      return typeof initialValue === "function" ? initialValue() : initialValue;
    }
  });

  useEffect(() => {
    try {
      window.sessionStorage.setItem(key, JSON.stringify(value));
    } catch {
      // La aplicación sigue funcionando si el navegador bloquea sessionStorage.
    }
  }, [key, value]);

  return [value, setValue];
}
