/** @vitest-environment jsdom */
import "fake-indexeddb/auto";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { AppProvider } from "../../../context/AppContext.jsx";
import { ToastProvider } from "../../../context/ToastContext.jsx";
import Dia from "../Dia.jsx";
import { rolKey } from "../../../domain/roles.js";

const DIA = "2026-07-21";
const YEAR = 2026;
const MONTH = 6;
const D = 21;

const personas = [
  { id: "f1", nombre: "Mayra Espinoza", estado: "Activo", puestoOperativo: "Puesto Orosi", puesto: "Guardaparques", modalidad: "10x5" },
  { id: "f2", nombre: "Diana Tencio", estado: "Activo", puestoOperativo: "Puesto Quetzales", puesto: "Guardaparques", modalidad: "10x5" },
];

const visit = (funcionarios) => ({
  id: "visit", titulo: "Atención rutinaria de visitantes",
  inicio: DIA, fin: DIA, unDia: true, funcionarios, lugar: "", observaciones: "", viatico: false,
});

beforeEach(() => {
  window.matchMedia = vi.fn().mockImplementation((query) => ({
    matches: false, media: query,
    addEventListener: () => {}, removeEventListener: () => {},
    addListener: () => {}, removeListener: () => {},
  }));
});

afterEach(() => {
  cleanup();
  localStorage.clear();
});

function renderDia(actividadesPlan, roleData) {
  return render(
    <AppProvider>
      <ToastProvider>
        <Dia
          diaVista={DIA} setDiaVista={vi.fn()} personas={personas}
          actividadesPlan={actividadesPlan} setActividadesPlan={vi.fn()}
          roleData={roleData} reposiciones={[]} hj={8}
        />
      </ToastProvider>
    </AppProvider>,
  );
}

const rol = (nombre, puesto, codigo) => ({ [rolKey(YEAR, MONTH, puesto, nombre, D)]: codigo });

describe("Día — cobertura crítica", () => {
  it("avisa cuando un puesto obligado se queda sin atención de visitantes", () => {
    renderDia([], {});
    // Orosi y Quetzales la exigen a diario; ninguno tiene a nadie asignado.
    expect(screen.getByRole("alert")).toBeDefined();
    expect(screen.getByText(/Cobertura crítica en 2 puesto/)).toBeDefined();
    expect(screen.getByText(/Orosi: nadie asignado/)).toBeDefined();
  });

  it("deja de avisar por el puesto que sí queda cubierto", () => {
    renderDia([visit(["Mayra Espinoza"])], rol("Mayra Espinoza", "Puesto Orosi", "T3"));
    expect(screen.getByText(/Cobertura crítica en 1 puesto/)).toBeDefined();
    expect(screen.queryByText(/Orosi: nadie asignado/)).toBeNull();
    expect(screen.getByText(/Quetzales: nadie asignado/)).toBeDefined();
  });

  it("el teletrabajo no cubre, y el aviso lo dice con sus palabras", () => {
    renderDia([visit(["Mayra Espinoza"])], rol("Mayra Espinoza", "Puesto Orosi", "E1"));
    expect(screen.getByText(/Orosi: 1 persona\(s\) asignada\(s\).*ninguna presente/)).toBeDefined();
    // Y no se confunde con el caso de no tener a nadie asignado.
    expect(screen.queryByText(/Orosi: nadie asignado/)).toBeNull();
  });

  it("cubiertos los dos puestos, el aviso desaparece del todo", () => {
    renderDia(
      [visit(["Mayra Espinoza", "Diana Tencio"])],
      { ...rol("Mayra Espinoza", "Puesto Orosi", "T3"), ...rol("Diana Tencio", "Puesto Quetzales", "T5") },
    );
    expect(screen.queryByRole("alert")).toBeNull();
    expect(screen.queryByText(/Cobertura crítica/)).toBeNull();
  });

  it("el puesto en crisis también queda marcado en la tabla por puesto", () => {
    renderDia([], {});
    // Texto solo para lectores de pantalla: la marca visual es el borde rojo.
    expect(screen.getByText("Orosi en cobertura crítica")).toBeDefined();
    expect(screen.getByText("Quetzales en cobertura crítica")).toBeDefined();
    expect(screen.queryByText("Esperanza en cobertura crítica")).toBeNull();
  });
});
