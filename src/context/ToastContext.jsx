import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";
import ToastViewport from "../ui/Toast.jsx";

const ToastContext = createContext(null);
let seq = 0;
const MAX_DEFAULT = 3;
const DURACION_DEFAULT = 5000;
const DURACION_UNDO = 10000;

function noopToast() {
  return { show: () => "", dismiss: () => {}, toasts: [] };
}

export function ToastProvider({ children, max = MAX_DEFAULT }) {
  const [toasts, setToasts] = useState([]);
  const timers = useRef(new Map());

  const clearTimer = useCallback((id) => {
    const entry = timers.current.get(id);
    if (entry?.id) clearTimeout(entry.id);
    timers.current.delete(id);
  }, []);

  const dismiss = useCallback((id) => {
    clearTimer(id);
    setToasts((prev) => prev.filter((x) => x.id !== id));
  }, [clearTimer]);

  const armTimer = useCallback((toast) => {
    const duracion = toast.duracion ?? (toast.onAccion ? DURACION_UNDO : DURACION_DEFAULT);
    const entry = { remaining: duracion, started: Date.now(), id: null };
    const start = () => {
      entry.started = Date.now();
      entry.id = setTimeout(() => dismiss(toast.id), entry.remaining);
      timers.current.set(toast.id, entry);
    };
    start();
    timers.current.set(toast.id, {
      ...entry,
      pause() {
        if (!entry.id) return;
        clearTimeout(entry.id);
        entry.id = null;
        entry.remaining = Math.max(0, entry.remaining - (Date.now() - entry.started));
      },
      resume() {
        if (entry.id || entry.remaining <= 0) return;
        start();
      },
    });
  }, [dismiss]);

  const show = useCallback((opts = {}) => {
    const id = opts.id || `toast-${++seq}`;
    const toast = {
      id,
      tipo: opts.tipo || "info",
      mensaje: opts.mensaje || "",
      accionLabel: opts.accionLabel,
      onAccion: typeof opts.onAccion === "function" ? opts.onAccion : undefined,
      duracion: opts.duracion,
    };
    setToasts((prev) => {
      const dropped = prev.length >= max ? prev.slice(0, prev.length - max + 1) : [];
      dropped.forEach((old) => clearTimer(old.id));
      const kept = prev.length >= max ? prev.slice(prev.length - max + 1) : prev;
      return [...kept, toast];
    });
    armTimer(toast);
    return id;
  }, [armTimer, clearTimer, max]);

  const pause = useCallback((id) => {
    timers.current.get(id)?.pause?.();
  }, []);

  const resume = useCallback((id) => {
    timers.current.get(id)?.resume?.();
  }, []);

  const value = useMemo(() => ({ show, dismiss, toasts }), [show, dismiss, toasts]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastViewport toasts={toasts} onDismiss={dismiss} onPause={pause} onResume={resume} />
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext) || noopToast();
}
