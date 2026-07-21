/** @vitest-environment jsdom */
import "fake-indexeddb/auto";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { AppProvider } from "../../../context/AppContext.jsx";
import Dia from "../Dia.jsx";

const personas = [
  { id: "f1", nombre: "Yolanda Elizondo", estado: "Activo", puestoOperativo: "Puesto Esperanza", puesto: "Administración", modalidad: "Horario administrativo L-V" },
  { id: "f2", nombre: "Mayra Espinoza", estado: "Activo", puestoOperativo: "Puesto Orosi", puesto: "Guardaparques", modalidad: "10x5" },
  { id: "f3", nombre: "Diana Tencio", estado: "Activo", puestoOperativo: "Puesto Quetzales", puesto: "Guardaparques", modalidad: "10x5" },
];

const actividad = (id, titulo, funcionarios) => ({
  id,
  titulo,
  inicio: "2026-07-21",
  fin: "2026-07-21",
  unDia: true,
  funcionarios,
  lugar: "",
  observaciones: "",
  viatico: false,
});

const actividadesPlan = [
  actividad("a-y", "Actividad de Yolanda", ["Yolanda Elizondo"]),
  actividad("a-m2", "Segunda actividad de Mayra", ["Mayra Espinoza"]),
  actividad("a-d", "Actividad de Diana", ["Diana Tencio"]),
  actividad("a-m1", "Primera actividad de Mayra", ["Mayra Espinoza"]),
];

beforeEach(() => {
  window.matchMedia = vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
  }));
});

afterEach(() => {
  cleanup();
  localStorage.clear();
});

function renderDia() {
  return render(
    <AppProvider>
      <Dia
        diaVista="2026-07-21"
        setDiaVista={vi.fn()}
        personas={personas}
        actividadesPlan={actividadesPlan}
        setActividadesPlan={vi.fn()}
        roleData={{}}
        reposiciones={[]}
        hj={8}
      />
    </AppProvider>,
  );
}

function idsVisibles(container) {
  return [...container.querySelectorAll("[data-actividad-id]")].map((el) => el.dataset.actividadId);
}

describe("Día — filtro y orden de actividades", () => {
  it("ordena por funcionario y mantiene juntas sus actividades", () => {
    const { container } = renderDia();
    fireEvent.click(screen.getByRole("button", { name: "Actividades planificadas (4)" }));
    expect(idsVisibles(container)).toEqual(["a-d", "a-m1", "a-m2", "a-y"]);
  });

  it("filtra por un funcionario específico", () => {
    const { container } = renderDia();
    fireEvent.click(screen.getByRole("button", { name: "Actividades planificadas (4)" }));
    fireEvent.click(screen.getByRole("button", { name: "Funcionario" }));
    fireEvent.change(screen.getByLabelText("Funcionario"), { target: { value: "Mayra Espinoza" } });

    expect(idsVisibles(container)).toEqual(["a-m1", "a-m2"]);
    expect(screen.getByText("Mostrando 2 de 4 actividades")).toBeDefined();
  });

  it("filtra por el puesto operativo de los funcionarios asignados", () => {
    const { container } = renderDia();
    fireEvent.click(screen.getByRole("button", { name: "Actividades planificadas (4)" }));
    fireEvent.click(screen.getByRole("button", { name: "Puesto" }));
    fireEvent.change(screen.getByLabelText("Puesto operativo"), { target: { value: "Puesto Esperanza" } });

    expect(idsVisibles(container)).toEqual(["a-y"]);
  });
});
