import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { t } from "../i18n/es-CR.js";

/**
 * Sistema de avisos efímeros (toast / snackbar) de la app.
 *
 * Resuelve dos puntos de dolor del diagnóstico UX:
 *  - F-P4 «falta de feedback visual»: toda acción relevante confirma qué pasó.
 *  - F-P12 «falta de deshacer»: un aviso puede llevar una acción («Deshacer»)
 *    que sustituye al modal de confirmación en los borrados reversibles.
 *
 * El proveedor solo gestiona la cola y los temporizadores; el render vive en
 * `src/ui/Toast.jsx` para que la lógica sea testeable sin DOM de presentación.
 */

const ToastContext = createContext(null);

/** ms que vive un aviso simple (sin acción). */
export const DURACION_DEFECTO = 5000;
/** ms que vive un aviso con acción: hay que dar tiempo real a reaccionar. */
export const DURACION_CON_ACCION = 10000;
/** Máximo de avisos simultáneos; al superarlo se descartan los más antiguos. */
export const MAX_TOASTS = 3;
/** Tipos admitidos. Cualquier otro valor cae a "info". */
export const TIPOS = ["info", "exito", "aviso", "error"];

let secuencia = 0;
function nuevoId() {
  secuencia += 1;
  return `toast-${secuencia}`;
}

// Export solo para tests: reinicia el contador de ids entre casos.
export function _resetToastId() {
  secuencia = 0;
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  // id -> { timeoutId, restanteMs, iniciadoEn }. Fuera del estado: cambiarlos
  // no debe provocar render.
  const timers = useRef(new Map());
  const pausado = useRef(false);

  const cerrar = useCallback((id) => {
    setToasts((prev) => prev.filter((x) => x.id !== id));
  }, []);

  const programar = useCallback(
    (id, ms) => {
      // duracion 0 o no finita => aviso persistente (se cierra a mano).
      if (!Number.isFinite(ms) || ms <= 0) return;
      const previo = timers.current.get(id);
      if (previo?.timeoutId) clearTimeout(previo.timeoutId);
      const entrada = { restanteMs: ms, iniciadoEn: Date.now(), timeoutId: null };
      if (!pausado.current) entrada.timeoutId = setTimeout(() => cerrar(id), ms);
      timers.current.set(id, entrada);
    },
    [cerrar],
  );

  const mostrar = useCallback(
    (opciones) => {
      const o = typeof opciones === "string" ? { mensaje: opciones } : opciones || {};
      const mensaje = typeof o.mensaje === "string" ? o.mensaje.trim() : "";
      if (!mensaje) return null;
      const tipo = TIPOS.includes(o.tipo) ? o.tipo : "info";
      // accion: { etiqueta, onAccion, cerrarAlActivar } — onAccion es obligatorio.
      const accion =
        o.accion && typeof o.accion.onAccion === "function"
          ? {
              etiqueta: o.accion.etiqueta || t("acciones.deshacer"),
              onAccion: o.accion.onAccion,
              cerrarAlActivar: o.accion.cerrarAlActivar !== false,
            }
          : null;
      const duracion = o.duracion === undefined ? (accion ? DURACION_CON_ACCION : DURACION_DEFECTO) : o.duracion;
      const id = nuevoId();
      setToasts((prev) => {
        const siguiente = [...prev, { id, mensaje, detalle: o.detalle || "", tipo, accion, duracion }];
        const sobran = siguiente.length - MAX_TOASTS;
        return sobran > 0 ? siguiente.slice(sobran) : siguiente;
      });
      programar(id, duracion);
      return id;
    },
    [programar],
  );

  const pausar = useCallback(() => {
    if (pausado.current) return;
    pausado.current = true;
    const ahora = Date.now();
    for (const entrada of timers.current.values()) {
      if (!entrada.timeoutId) continue;
      clearTimeout(entrada.timeoutId);
      entrada.restanteMs = Math.max(0, entrada.restanteMs - (ahora - entrada.iniciadoEn));
      entrada.timeoutId = null;
    }
  }, []);

  const reanudar = useCallback(() => {
    if (!pausado.current) return;
    pausado.current = false;
    const ahora = Date.now();
    for (const [id, entrada] of timers.current) {
      if (entrada.timeoutId) continue;
      entrada.iniciadoEn = ahora;
      entrada.timeoutId = setTimeout(() => cerrar(id), Math.max(0, entrada.restanteMs));
    }
  }, [cerrar]);

  const activarAccion = useCallback(
    (id) => {
      const item = toasts.find((x) => x.id === id);
      if (!item?.accion) return;
      item.accion.onAccion();
      if (item.accion.cerrarAlActivar) cerrar(id);
    },
    [toasts, cerrar],
  );

  // Atajos de uso frecuente.
  const exito = useCallback((mensaje, opciones) => mostrar({ ...opciones, mensaje, tipo: "exito" }), [mostrar]);
  const error = useCallback((mensaje, opciones) => mostrar({ ...opciones, mensaje, tipo: "error" }), [mostrar]);
  const aviso = useCallback((mensaje, opciones) => mostrar({ ...opciones, mensaje, tipo: "aviso" }), [mostrar]);
  /** Aviso con «Deshacer»: sustituye al modal de confirmación en borrados reversibles. */
  const conDeshacer = useCallback(
    (mensaje, onDeshacer, opciones) =>
      mostrar({
        ...opciones,
        mensaje,
        tipo: opciones?.tipo || "info",
        accion: { etiqueta: t("acciones.deshacer"), onAccion: onDeshacer },
      }),
    [mostrar],
  );

  // Los avisos descartados por exceso de cola dejan su temporizador huérfano:
  // se reconcilia el mapa con la lista viva en cada cambio.
  useEffect(() => {
    const vivos = new Set(toasts.map((x) => x.id));
    for (const [id, entrada] of timers.current) {
      if (vivos.has(id)) continue;
      if (entrada.timeoutId) clearTimeout(entrada.timeoutId);
      timers.current.delete(id);
    }
  }, [toasts]);

  // Al desmontar: ningún timeout debe sobrevivir al proveedor.
  useEffect(() => {
    const mapa = timers.current;
    return () => {
      for (const entrada of mapa.values()) {
        if (entrada.timeoutId) clearTimeout(entrada.timeoutId);
      }
      mapa.clear();
    };
  }, []);

  const value = useMemo(
    () => ({ toasts, mostrar, cerrar, pausar, reanudar, activarAccion, exito, error, aviso, conDeshacer }),
    [toasts, mostrar, cerrar, pausar, reanudar, activarAccion, exito, error, aviso, conDeshacer],
  );

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast() requiere que el árbol esté envuelto en <ToastProvider>.");
  }
  return ctx;
}
