/**
 * @vitest-environment jsdom
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act, cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import {
  DURACION_CON_ACCION,
  DURACION_DEFECTO,
  MAX_TOASTS,
  ToastProvider,
  useToast,
  _resetToastId,
} from "../../context/ToastContext.jsx";
import ToastViewport from "../Toast.jsx";

/** Banco de pruebas: expone la API del contexto a través de botones. */
function Banco({ onApi }) {
  const api = useToast();
  onApi?.(api);
  return (
    <div>
      <button type="button" onClick={() => api.mostrar({ mensaje: "Aviso simple" })}>
        simple
      </button>
      <button type="button" onClick={() => api.exito("Guardado")}>
        exito
      </button>
      <button type="button" onClick={() => api.error("Falló")}>
        error
      </button>
      <button type="button" onClick={() => api.aviso("Ojo")}>
        aviso
      </button>
    </div>
  );
}

function renderBanco(props = {}) {
  let api = null;
  const utils = render(
    <ToastProvider>
      <Banco onApi={(a) => { api = a; }} {...props} />
      <ToastViewport />
    </ToastProvider>,
  );
  return { ...utils, getApi: () => api };
}

beforeEach(() => {
  _resetToastId();
  vi.useFakeTimers({ shouldAdvanceTime: true });
});

afterEach(() => {
  cleanup();
  vi.runOnlyPendingTimers();
  vi.useRealTimers();
});

describe("ToastProvider — cola y ciclo de vida", () => {
  it("muestra el mensaje y lo retira al vencer la duración por defecto", () => {
    renderBanco();
    fireEvent.click(screen.getByRole("button", { name: "simple" }));
    expect(screen.getByText("Aviso simple")).toBeDefined();
    act(() => { vi.advanceTimersByTime(DURACION_DEFECTO - 100); });
    expect(screen.getByText("Aviso simple")).toBeDefined();
    act(() => { vi.advanceTimersByTime(200); });
    expect(screen.queryByText("Aviso simple")).toBeNull();
  });

  it("ignora mensajes vacíos o en blanco", () => {
    const { getApi } = renderBanco();
    let id = "x";
    act(() => { id = getApi().mostrar({ mensaje: "   " }); });
    expect(id).toBeNull();
    expect(screen.queryAllByTestId("toast")).toHaveLength(0);
  });

  it(`nunca muestra más de ${MAX_TOASTS} avisos: descarta los más antiguos`, () => {
    const { getApi } = renderBanco();
    act(() => {
      for (let i = 1; i <= MAX_TOASTS + 2; i += 1) getApi().mostrar({ mensaje: `Aviso ${i}` });
    });
    expect(screen.queryAllByTestId("toast")).toHaveLength(MAX_TOASTS);
    expect(screen.queryByText("Aviso 1")).toBeNull();
    expect(screen.queryByText("Aviso 2")).toBeNull();
    expect(screen.getByText(`Aviso ${MAX_TOASTS + 2}`)).toBeDefined();
  });

  it("duracion 0 deja el aviso fijo hasta cerrarlo a mano", () => {
    const { getApi } = renderBanco();
    act(() => { getApi().mostrar({ mensaje: "Persistente", duracion: 0 }); });
    act(() => { vi.advanceTimersByTime(60_000); });
    expect(screen.getByText("Persistente")).toBeDefined();
    fireEvent.click(within(screen.getByTestId("toast")).getByRole("button", { name: "Cerrar" }));
    expect(screen.queryByText("Persistente")).toBeNull();
  });

  it("cerrar(id) retira solo ese aviso", () => {
    const { getApi } = renderBanco();
    let primero = null;
    act(() => {
      primero = getApi().mostrar({ mensaje: "Uno" });
      getApi().mostrar({ mensaje: "Dos" });
    });
    act(() => { getApi().cerrar(primero); });
    expect(screen.queryByText("Uno")).toBeNull();
    expect(screen.getByText("Dos")).toBeDefined();
  });
});

describe("ToastProvider — acción «Deshacer»", () => {
  it("un aviso con acción vive más que uno simple", () => {
    const { getApi } = renderBanco();
    act(() => { getApi().conDeshacer("Se eliminó algo", () => {}); });
    act(() => { vi.advanceTimersByTime(DURACION_DEFECTO + 500); });
    expect(screen.getByText("Se eliminó algo")).toBeDefined();
    act(() => { vi.advanceTimersByTime(DURACION_CON_ACCION); });
    expect(screen.queryByText("Se eliminó algo")).toBeNull();
  });

  it("pulsar la acción la ejecuta una sola vez y cierra el aviso", () => {
    const onDeshacer = vi.fn();
    const { getApi } = renderBanco();
    act(() => { getApi().conDeshacer("Se eliminó algo", onDeshacer); });
    fireEvent.click(screen.getByRole("button", { name: "Deshacer" }));
    expect(onDeshacer).toHaveBeenCalledTimes(1);
    expect(screen.queryByText("Se eliminó algo")).toBeNull();
  });

  it("una acción sin callback válido se ignora (no pinta botón)", () => {
    const { getApi } = renderBanco();
    act(() => { getApi().mostrar({ mensaje: "Sin acción", accion: { etiqueta: "Nada" } }); });
    expect(screen.getByText("Sin acción")).toBeDefined();
    expect(screen.queryByRole("button", { name: "Nada" })).toBeNull();
  });

  it("el temporizador se detiene con el puntero encima y se reanuda al salir", () => {
    const { getApi } = renderBanco();
    act(() => { getApi().conDeshacer("Se eliminó algo", () => {}); });
    const viewport = document.querySelector(".pnlq-toast-viewport");

    fireEvent.mouseEnter(viewport);
    act(() => { vi.advanceTimersByTime(DURACION_CON_ACCION * 2); });
    expect(screen.getByText("Se eliminó algo")).toBeDefined();

    fireEvent.mouseLeave(viewport);
    act(() => { vi.advanceTimersByTime(DURACION_CON_ACCION + 100); });
    expect(screen.queryByText("Se eliminó algo")).toBeNull();
  });

  it("al reanudar solo queda el tiempo que faltaba, no la duración completa", () => {
    const { getApi } = renderBanco();
    act(() => { getApi().mostrar({ mensaje: "Parcial", duracion: 1000 }); });
    act(() => { vi.advanceTimersByTime(800); });
    const viewport = document.querySelector(".pnlq-toast-viewport");
    fireEvent.mouseEnter(viewport);
    act(() => { vi.advanceTimersByTime(5000); });
    expect(screen.getByText("Parcial")).toBeDefined();
    fireEvent.mouseLeave(viewport);
    act(() => { vi.advanceTimersByTime(150); });
    expect(screen.getByText("Parcial")).toBeDefined();
    act(() => { vi.advanceTimersByTime(150); });
    expect(screen.queryByText("Parcial")).toBeNull();
  });
});

describe("ToastViewport — accesibilidad y tipos", () => {
  it("las regiones vivas existen antes de que llegue ningún aviso", () => {
    renderBanco();
    expect(screen.getByRole("status")).toBeDefined();
    expect(screen.getByRole("alert")).toBeDefined();
    expect(screen.queryAllByTestId("toast")).toHaveLength(0);
  });

  it("los errores van a la región assertive y el resto a la polite", () => {
    renderBanco();
    fireEvent.click(screen.getByRole("button", { name: "error" }));
    fireEvent.click(screen.getByRole("button", { name: "exito" }));
    expect(within(screen.getByRole("alert")).getByText("Falló")).toBeDefined();
    expect(within(screen.getByRole("status")).getByText("Guardado")).toBeDefined();
  });

  it("marca el tipo de cada aviso", () => {
    renderBanco();
    fireEvent.click(screen.getByRole("button", { name: "exito" }));
    fireEvent.click(screen.getByRole("button", { name: "aviso" }));
    const tipos = screen.getAllByTestId("toast").map((el) => el.dataset.tipo);
    expect(tipos).toContain("exito");
    expect(tipos).toContain("aviso");
  });

  it("un tipo desconocido cae a info en vez de romper", () => {
    const { getApi } = renderBanco();
    act(() => { getApi().mostrar({ mensaje: "Raro", tipo: "marciano" }); });
    expect(screen.getByTestId("toast").dataset.tipo).toBe("info");
  });

  it("pinta el detalle bajo el mensaje cuando se aporta", () => {
    const { getApi } = renderBanco();
    act(() => { getApi().mostrar({ mensaje: "Titular", detalle: "Explicación corta" }); });
    expect(screen.getByText("Explicación corta")).toBeDefined();
  });

  it("se monta por portal en document.body (fuera del árbol de la app)", () => {
    const { container } = renderBanco();
    expect(container.querySelector(".pnlq-toast-viewport")).toBeNull();
    expect(document.body.querySelector(".pnlq-toast-viewport")).not.toBeNull();
  });
});

describe("useToast — contrato", () => {
  it("falla con un mensaje claro si falta el proveedor", () => {
    const err = vi.spyOn(console, "error").mockImplementation(() => {});
    function Suelto() {
      useToast();
      return null;
    }
    expect(() => render(<Suelto />)).toThrow(/ToastProvider/);
    err.mockRestore();
  });
});
