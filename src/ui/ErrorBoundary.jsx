import { Component } from "react";
import { loadState, exportSnapshot } from "../lib/storage.js";
import { toLocalFileTimestamp } from "../domain/fechas.js";

/**
 * Límite de error de nivel aplicación. Envuelve TODO el árbol (incluido
 * `AppProvider`) para poder recuperarse incluso si el error ocurre durante
 * el render/montaje del propio contexto — por eso el fallback NO depende
 * de `useApp()` y lee el respaldo directamente de localStorage con
 * `loadState()` (síncrono, no requiere que React siga funcionando).
 *
 * No oculta la excepción: se registra con `console.error` (solo en la
 * consola del dispositivo del usuario, nunca se envía a un servidor) para
 * que quede rastro durante soporte técnico. No se registra ningún dato
 * personal — solo el mensaje/stack del error de React.
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error("Error de aplicación capturado por ErrorBoundary:", error, info?.componentStack);
  }

  handleReintentar = () => {
    this.setState({ hasError: false, error: null });
  };

  handleRecargar = () => {
    window.location.reload();
  };

  handleDescargarRespaldo = () => {
    try {
      const state = loadState();
      if (!state) return;
      const snapshot = exportSnapshot(state);
      const blob = new Blob([JSON.stringify(snapshot, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `pnlq-respaldo-de-emergencia-${toLocalFileTimestamp()}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch {
      /* si ni esto funciona, no hay más que intentar desde aquí */
    }
  };

  render() {
    if (!this.state.hasError) return this.props.children;

    const hayRespaldoLocal = (() => {
      try {
        return !!loadState();
      } catch {
        return false;
      }
    })();

    return (
      <div
        role="alert"
        className="flex min-h-screen items-center justify-center bg-slate-100 p-4 text-slate-950"
      >
        <div className="w-full max-w-md rounded-2xl border border-red-300 bg-white p-6 shadow-lg">
          <p className="text-lg font-bold text-red-900">Ocurrió un error inesperado</p>
          <p className="mt-2 text-sm text-slate-700">
            La aplicación encontró un problema y no puede continuar mostrando esta pantalla. Tus
            datos guardados en este dispositivo no se han borrado.
          </p>
          <div className="mt-5 flex flex-col gap-2">
            <button
              type="button"
              onClick={this.handleReintentar}
              className="min-h-touch rounded-xl bg-emerald-800 px-4 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              Reintentar
            </button>
            <button
              type="button"
              onClick={this.handleRecargar}
              className="min-h-touch rounded-xl border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Recargar la aplicación
            </button>
            {hayRespaldoLocal && (
              <button
                type="button"
                onClick={this.handleDescargarRespaldo}
                className="min-h-touch rounded-xl border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                Descargar mis datos por seguridad
              </button>
            )}
          </div>
          {this.state.error?.message && (
            <p className="mt-4 break-words rounded-lg bg-slate-50 p-2 text-[11px] text-slate-500">
              Detalle técnico: {this.state.error.message}
            </p>
          )}
        </div>
      </div>
    );
  }
}
