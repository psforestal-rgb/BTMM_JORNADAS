/** @vitest-environment jsdom */
import "fake-indexeddb/auto";
import { useState } from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { AppProvider } from "../../../context/AppContext.jsx";
import { ToastProvider } from "../../../context/ToastContext.jsx";
import ToastViewport from "../../../ui/Toast.jsx";
import Reposicion from "../Reposicion.jsx";

afterEach(() => {
  cleanup();
  localStorage.clear();
});

const personas = [
  { id: "f1", nombre: "Ana Nombre Muy Largo", estado: "Activo" },
  { id: "f2", nombre: "Carlos", estado: "Activo" },
];
const reposiciones = [
  {
    id: "r1",
    folio: "REP-001",
    funcionario: "Ana Nombre Muy Largo",
    fecha: "2026-07-03",
    tipoDia: "Día libre",
    motivo: "Emergencia",
    motivoDetalle: "Sendero principal",
    magnitud: "diaEntero",
    cuotas: [],
    observaciones: "Observación extensa de prueba",
  },
];

function setup() {
  return render(
    <AppProvider>
      <ToastProvider>
        <Reposicion personas={personas} reposiciones={reposiciones} setReposiciones={vi.fn()} />
      </ToastProvider>
    </AppProvider>,
  );
}

describe("Reposición móvil", () => {
  it("muestra tarjeta con información operativa y acción principal", () => {
    setup();
    expect(screen.getAllByText("Ana Nombre Muy Largo").length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Observación extensa/).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("button", { name: "Reponer" }).length).toBeGreaterThan(0);
  });

  it("abre filtros avanzados accesibles", () => {
    setup();
    fireEvent.click(screen.getByRole("button", { name: "Filtros" }));
    expect(screen.getByRole("dialog", { name: "Filtros de reposición" })).toBeDefined();
    expect(screen.getByLabelText("Periodo")).toBeDefined();
  });
});

/** Variante con estado real para poder observar borrado y restauración. */
function setupConEstado() {
  function Probe() {
    const [items, setItems] = useState([
      ...reposiciones,
      { ...reposiciones[0], id: "r2", folio: "REP-002", funcionario: "Carlos", fecha: "2026-07-04" },
    ]);
    return (
      <>
        <p data-testid="folios">{items.map((r) => r.folio).join(",")}</p>
        <Reposicion personas={personas} reposiciones={items} setReposiciones={setItems} />
      </>
    );
  }
  return render(
    <AppProvider>
      <ToastProvider>
        <Probe />
        <ToastViewport />
      </ToastProvider>
    </AppProvider>,
  );
}

describe("Reposición — eliminación reversible", () => {
  // El folio afectado se lee del propio aviso: así la prueba no depende del
  // orden en que la vista liste los registros.
  const eliminarPrimero = () => {
    fireEvent.click(screen.getAllByRole("button", { name: /^Eliminar$/ })[0]);
    const aviso = screen.getByText(/^Se eliminó el registro REP-\d+$/);
    return aviso.textContent.replace("Se eliminó el registro ", "");
  };

  it("elimina de inmediato y ofrece «Deshacer», sin modal bloqueante", () => {
    setupConEstado();
    const folio = eliminarPrimero();
    expect(screen.getByTestId("folios").textContent).not.toContain(folio);
    expect(screen.getByTestId("folios").textContent.split(",")).toHaveLength(1);
    expect(screen.getByRole("button", { name: /^Deshacer$/ })).toBeDefined();
    expect(screen.queryByRole("dialog", { name: /Eliminar registro/ })).toBeNull();
  });

  it("«Deshacer» restaura el registro con su folio y su posición", () => {
    setupConEstado();
    const folio = eliminarPrimero();
    fireEvent.click(screen.getByRole("button", { name: /^Deshacer$/ }));
    expect(screen.getByTestId("folios").textContent).toBe("REP-001,REP-002");
    expect(screen.getByText(`Se restauró el registro ${folio}`)).toBeDefined();
  });
});
