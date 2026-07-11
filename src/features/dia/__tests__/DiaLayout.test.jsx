/** @vitest-environment jsdom */
import "fake-indexeddb/auto";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act, cleanup, render, screen } from "@testing-library/react";
import { AppProvider } from "../../../context/AppContext.jsx";
import DiaLayout from "../DiaLayout.jsx";

afterEach(() => {
  cleanup();
  localStorage.clear();
});

let observado = null;
let callbackGuardado = null;

beforeEach(() => {
  observado = null;
  callbackGuardado = null;
  // jsdom no implementa IntersectionObserver: se simula para poder
  // disparar manualmente el cambio de visibilidad del botón contextual.
  global.IntersectionObserver = class {
    constructor(callback) {
      callbackGuardado = callback;
    }
    observe(el) {
      observado = el;
    }
    disconnect() {}
  };
  // jsdom tampoco implementa matchMedia; useMobile() lo necesita para saber
  // si debe mostrar el BottomSheet o el modal centrado.
  window.matchMedia = vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
  }));
});

function renderDiaLayout() {
  return render(
    <AppProvider>
      <DiaLayout
        diaVista="2026-07-11"
        setDiaVista={vi.fn()}
        personas={[]}
        actividadesPlan={[]}
        setActividadesPlan={vi.fn()}
        roleData={{}}
        reposiciones={[]}
        hj={8}
      />
    </AppProvider>,
  );
}

describe("DiaLayout — FAB contextual", () => {
  it("observa el botón '+ Nueva' contextual de la tarjeta Actividades", () => {
    renderDiaLayout();
    expect(observado).not.toBeNull();
    expect(observado.id).toBe("dia-boton-nueva-actividad");
  });

  it("oculta el FAB cuando el botón contextual entra en la vista, y lo muestra cuando sale", () => {
    renderDiaLayout();
    // Se guarda la referencia una sola vez: al quedar aria-hidden="true" el
    // botón sale del árbol de accesibilidad y getByRole ya no lo encuentra
    // (comportamiento correcto), pero React solo muta sus atributos.
    const fab = screen.getByRole("button", { name: "+ Nueva" });
    expect(fab.getAttribute("aria-hidden")).toBe("false");

    act(() => callbackGuardado([{ isIntersecting: true }]));
    expect(fab.getAttribute("aria-hidden")).toBe("true");

    act(() => callbackGuardado([{ isIntersecting: false }]));
    expect(fab.getAttribute("aria-hidden")).toBe("false");
  });
});
