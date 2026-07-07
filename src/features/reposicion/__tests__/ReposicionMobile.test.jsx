/** @vitest-environment jsdom */
import "fake-indexeddb/auto";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { AppProvider } from "../../../context/AppContext.jsx";
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
      <Reposicion personas={personas} reposiciones={reposiciones} setReposiciones={vi.fn()} />
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
