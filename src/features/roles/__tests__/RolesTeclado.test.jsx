/** @vitest-environment jsdom */
import "fake-indexeddb/auto";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { AppProvider } from "../../../context/AppContext.jsx";
import RolesMensualGrid from "../RolesMensualGrid.jsx";
import { rolKey } from "../../../domain/roles.js";

global.ResizeObserver = class { observe() {} unobserve() {} disconnect() {} };
global.IntersectionObserver = class { observe() {} unobserve() {} disconnect() {} };
Element.prototype.scrollTo = Element.prototype.scrollTo || (() => {});
Element.prototype.scrollIntoView = Element.prototype.scrollIntoView || (() => {});
document.elementFromPoint = document.elementFromPoint || (() => null);

const YEAR = 2026;
const MONTH = 6;
const personas = [
  { id: "f1", nombre: "Ana Pérez", puestoOperativo: "Puesto Orosi", estado: "Activo", modalidad: "10x5" },
  { id: "f2", nombre: "Bruno Salas", puestoOperativo: "Puesto Orosi", estado: "Activo", modalidad: "10x5" },
  { id: "f3", nombre: "Carla Mora", puestoOperativo: "Puesto Quetzales", estado: "Activo", modalidad: "10x5" },
];
const grupos = [
  { nombre: "Puesto Orosi", funcionarios: ["Ana Pérez", "Bruno Salas"] },
  { nombre: "Puesto Quetzales", funcionarios: ["Carla Mora"] },
];

beforeEach(() => {
  window.matchMedia = window.matchMedia || ((q) => ({ matches: false, media: q, addEventListener() {}, removeEventListener() {} }));
});
afterEach(() => {
  cleanup();
  localStorage.clear();
});

function montar() {
  return render(
    <AppProvider>
      <RolesMensualGrid
        grupos={grupos} year={YEAR} month={MONTH} compact={false} focusDate={null}
        roleData={{ [rolKey(YEAR, MONTH, "Puesto Orosi", "Ana Pérez", 8)]: "T3" }}
        setRoleData={vi.fn()} personas={personas} actividadesPlan={[]}
        setActividadesPlan={vi.fn()} reposiciones={[]} hj={8}
      />
    </AppProvider>,
  );
}

const celda = (container, fila, iso) =>
  container.querySelector(`td[data-celda-rol][data-fila="${fila}"][data-iso="${iso}"] button`);
const ANA = "Puesto Orosi|Ana Pérez";
const BRUNO = "Puesto Orosi|Bruno Salas";
const CARLA = "Puesto Quetzales|Carla Mora";

function pulsar(elemento, key) {
  fireEvent.keyDown(elemento, { key });
}

describe("cuadrícula de Roles — navegación con el teclado (A-P12)", () => {
  it("la tabla se anuncia como cuadrícula y dice cuántas columnas tiene", () => {
    const { container } = montar();
    const tabla = container.querySelector("table");
    expect(tabla.getAttribute("role")).toBe("grid");
    // 31 días de julio más la columna congelada del nombre.
    expect(tabla.getAttribute("aria-colcount")).toBe("32");
  });

  it("las celdas no editables SIGUEN siendo alcanzables con el teclado", () => {
    const { container } = montar();
    const boton = celda(container, ANA, "2026-07-08");
    // `aria-disabled` y no `disabled`: un botón deshabilitado no recibe foco y
    // dejaba el rol entero fuera del alcance de quien no usa ratón.
    expect(boton.hasAttribute("disabled")).toBe(false);
    expect(boton.getAttribute("aria-disabled")).toBe("true");
  });

  it("cada celda dice de quién y de qué día es", () => {
    const { container } = montar();
    const etiqueta = celda(container, ANA, "2026-07-08").getAttribute("aria-label");
    expect(etiqueta).toContain("Ana Pérez");
    expect(etiqueta).toContain("8 de julio de 2026");
    expect(etiqueta).toContain("Turno T3");
  });

  it("solo una celda está en la secuencia de tabulación", () => {
    const { container } = montar();
    const enTabulacion = container.querySelectorAll('td[data-celda-rol] button[tabindex="0"]');
    expect(enTabulacion).toHaveLength(1);
  });

  it("las flechas mueven el foco de día en día y de funcionario en funcionario", () => {
    const { container } = montar();
    const inicio = celda(container, ANA, "2026-07-08");
    inicio.focus();
    pulsar(inicio, "ArrowRight");
    expect(document.activeElement).toBe(celda(container, ANA, "2026-07-09"));
    pulsar(document.activeElement, "ArrowDown");
    expect(document.activeElement).toBe(celda(container, BRUNO, "2026-07-09"));
    pulsar(document.activeElement, "ArrowLeft");
    expect(document.activeElement).toBe(celda(container, BRUNO, "2026-07-08"));
    pulsar(document.activeElement, "ArrowUp");
    expect(document.activeElement).toBe(celda(container, ANA, "2026-07-08"));
  });

  it("bajar desde el último funcionario de un puesto entra en el siguiente", () => {
    const { container } = montar();
    const inicio = celda(container, BRUNO, "2026-07-10");
    inicio.focus();
    pulsar(inicio, "ArrowDown");
    expect(document.activeElement).toBe(celda(container, CARLA, "2026-07-10"));
  });

  it("Inicio y Fin llevan al primer y último día del mes", () => {
    const { container } = montar();
    const inicio = celda(container, ANA, "2026-07-15");
    inicio.focus();
    pulsar(inicio, "Home");
    expect(document.activeElement).toBe(celda(container, ANA, "2026-07-01"));
    pulsar(document.activeElement, "End");
    expect(document.activeElement).toBe(celda(container, ANA, "2026-07-31"));
  });

  it("en el borde no se mueve, y la tecla no arrastra la página", () => {
    const { container } = montar();
    const esquina = celda(container, ANA, "2026-07-01");
    esquina.focus();
    const evento = new KeyboardEvent("keydown", { key: "ArrowLeft", bubbles: true, cancelable: true });
    esquina.dispatchEvent(evento);
    expect(document.activeElement).toBe(esquina);
    expect(evento.defaultPrevented).toBe(true);
  });

  it("el foco sigue a la celda: la que lo tiene es la que queda tabulable", () => {
    const { container } = montar();
    const inicio = celda(container, ANA, "2026-07-08");
    inicio.focus();
    pulsar(inicio, "ArrowRight");
    const destino = celda(container, ANA, "2026-07-09");
    expect(destino.tabIndex).toBe(0);
    expect(inicio.tabIndex).toBe(-1);
    expect(container.querySelectorAll('td[data-celda-rol] button[tabindex="0"]')).toHaveLength(1);
  });

  it("una tecla cualquiera no toca el foco", () => {
    const { container } = montar();
    const inicio = celda(container, ANA, "2026-07-08");
    inicio.focus();
    pulsar(inicio, "a");
    expect(document.activeElement).toBe(inicio);
  });
});
