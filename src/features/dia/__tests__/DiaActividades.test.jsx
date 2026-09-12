/** @vitest-environment jsdom */
import "fake-indexeddb/auto";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { AppProvider } from "../../../context/AppContext.jsx";
import { ToastProvider } from "../../../context/ToastContext.jsx";
import Dia from "../Dia.jsx";
import { rolKey } from "../../../domain/roles.js";

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

function renderDia(roleData = {}) {
  return render(
    <AppProvider>
      <ToastProvider>
        <Dia
          diaVista="2026-07-21"
          setDiaVista={vi.fn()}
          personas={personas}
          actividadesPlan={actividadesPlan}
          setActividadesPlan={vi.fn()}
          roleData={roleData}
          reposiciones={[]}
          hj={8}
        />
      </ToastProvider>
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

describe("Día — teletrabajo (RT6/RT7/RT8)", () => {
  // El teletrabajo se marca en el ROL del día, no en la actividad (RT2).
  const conTeletrabajo = (nombre) => ({
    [rolKey(2026, 6, personas.find((p) => p.nombre === nombre).puestoOperativo, nombre, 21)]: "E1",
  });

  it("sin nadie en teletrabajo, el resumen no dice nada al respecto", () => {
    renderDia();
    expect(screen.queryByText(/en teletrabajo/)).toBeNull();
  });

  it("cuenta en el resumen a quienes trabajan a distancia (RT8)", () => {
    renderDia(conTeletrabajo("Mayra Espinoza"));
    expect(screen.getByText(/1 lo hacen en teletrabajo y no pueden atender visitantes/)).toBeDefined();
  });

  it("distingue en la tarjeta a quien teletrabaja (RT7)", () => {
    const { container } = renderDia(conTeletrabajo("Mayra Espinoza"));
    fireEvent.click(screen.getByRole("button", { name: "Actividades planificadas (4)" }));
    const marcados = [...container.querySelectorAll("span")].filter((el) =>
      el.textContent.includes("Mayra Espinoza") && el.textContent.includes("⌂"),
    );
    expect(marcados.length).toBeGreaterThan(0);
  });

  it("el filtro por tipo de trabajo separa presencial de teletrabajo (RT6)", () => {
    const { container } = renderDia(conTeletrabajo("Mayra Espinoza"));
    fireEvent.click(screen.getByRole("button", { name: "Actividades planificadas (4)" }));
    const todas = idsVisibles(container);
    expect(todas.length).toBeGreaterThan(1);

    fireEvent.click(screen.getByRole("button", { name: "Tipo de trabajo" }));
    const selector = screen.getByRole("combobox");
    fireEvent.change(selector, { target: { value: "Teletrabajo" } });
    const soloTeletrabajo = idsVisibles(container);
    expect(soloTeletrabajo.length).toBeGreaterThan(0);
    expect(soloTeletrabajo.length).toBeLessThan(todas.length);

    fireEvent.change(selector, { target: { value: "Presencial" } });
    const soloPresencial = idsVisibles(container);
    // Las dos mitades suman el total y no se solapan.
    expect(soloPresencial.length + soloTeletrabajo.length).toBe(todas.length);
    expect(soloPresencial.some((id) => soloTeletrabajo.includes(id))).toBe(false);
  });
});
