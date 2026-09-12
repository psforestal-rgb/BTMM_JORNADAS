/** @vitest-environment jsdom */
import "fake-indexeddb/auto";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act, cleanup, render } from "@testing-library/react";
import { AppProvider } from "../../../context/AppContext.jsx";
import RolesMensualGrid from "../RolesMensualGrid.jsx";

/**
 * Virtualización por meses del cuerpo de la cuadrícula (A1).
 *
 * jsdom no hace layout, así que las medidas se simulan a mano. Es exactamente
 * lo que hace falta probar aquí: la cuadrícula SOLO virtualiza cuando ha podido
 * medir, y sin medida tiene que pintarlo todo.
 */

global.ResizeObserver = class { observe() {} unobserve() {} disconnect() {} };
global.IntersectionObserver = class { observe() {} unobserve() {} disconnect() {} };
Element.prototype.scrollTo = Element.prototype.scrollTo || (() => {});
document.elementFromPoint = document.elementFromPoint || (() => null);

const ANCHO_COLUMNA = 44;
const ANCHO_VISIBLE = 800;

const personas = [
  { id: "f1", nombre: "Ana Pérez", puestoOperativo: "Puesto Orosi", estado: "Activo", modalidad: "10x5" },
  { id: "f2", nombre: "Bruno Salas", puestoOperativo: "Puesto Orosi", estado: "Activo", modalidad: "10x5" },
];
const grupos = [{ nombre: "Puesto Orosi", funcionarios: ["Ana Pérez", "Bruno Salas"] }];

const rectOriginal = Element.prototype.getBoundingClientRect;
let clientWidthDescriptor;

function simularLayout() {
  Element.prototype.getBoundingClientRect = function fake() {
    const ancho = this.dataset?.celdaRol || this.dataset?.fecha
      ? ANCHO_COLUMNA
      : this.dataset?.colNombre
        ? 176
        : this.dataset?.mes
          ? ANCHO_COLUMNA * (this.colSpan || 1)
          : 0;
    return { width: ancho, height: 0, top: 0, left: 0, right: ancho, bottom: 0, x: 0, y: 0, toJSON() {} };
  };
  clientWidthDescriptor = Object.getOwnPropertyDescriptor(Element.prototype, "clientWidth");
  Object.defineProperty(Element.prototype, "clientWidth", { configurable: true, get: () => ANCHO_VISIBLE });
}

beforeEach(() => {
  window.matchMedia = window.matchMedia || ((q) => ({ matches: false, media: q, addEventListener() {}, removeEventListener() {} }));
});

afterEach(() => {
  cleanup();
  Element.prototype.getBoundingClientRect = rectOriginal;
  if (clientWidthDescriptor) Object.defineProperty(Element.prototype, "clientWidth", clientWidthDescriptor);
  else delete Element.prototype.clientWidth;
  clientWidthDescriptor = null;
  localStorage.clear();
});

function montar({ meses = 12 } = {}) {
  // `focusDate` a N-1 meses vista fuerza la carga progresiva de ese rango.
  const focusDate = meses > 1 ? { year: 2026, month: 6 + meses - 1 } : null;
  return render(
    <AppProvider>
      <RolesMensualGrid
        grupos={grupos} year={2026} month={6} compact={false} focusDate={focusDate}
        roleData={{}} setRoleData={vi.fn()} personas={personas}
        actividadesPlan={[]} setActividadesPlan={vi.fn()} reposiciones={[]} hj={8}
      />
    </AppProvider>,
  );
}

function columnasPorFila(container) {
  const anchos = new Set();
  for (const tr of container.querySelectorAll("tbody tr")) {
    let n = 0;
    for (const td of tr.children) n += td.colSpan || 1;
    anchos.add(n);
  }
  return [...anchos];
}

describe("cuadrícula de Roles — virtualización por meses", () => {
  it("sin poder medir no virtualiza nada: antes vacía que rota", () => {
    const { container } = montar({ meses: 12 });
    expect(container.querySelectorAll("td[data-hueco]").length).toBe(0);
    expect(container.querySelectorAll("td[data-celda-rol]").length).toBeGreaterThan(600);
  });

  it("con medidas, los meses lejanos se colapsan y los cercanos se pintan", () => {
    simularLayout();
    const { container } = montar({ meses: 12 });
    const huecos = container.querySelectorAll("td[data-hueco]");
    expect(huecos.length).toBeGreaterThan(0);
    // Siguen pintándose las celdas de los meses cercanos.
    expect(container.querySelectorAll("td[data-celda-rol]").length).toBeGreaterThan(0);
  });

  it("el encabezado NUNCA se colapsa: es quien fija el ancho de cada columna", () => {
    simularLayout();
    const { container } = montar({ meses: 12 });
    const dias = container.querySelectorAll("th[data-fecha]").length;
    // 12 meses desde julio de 2026: 365 días naturales.
    expect(dias).toBe(365);
  });

  it("todas las filas del cuerpo abarcan el mismo número de columnas", () => {
    simularLayout();
    const { container } = montar({ meses: 12 });
    const anchos = columnasPorFila(container);
    expect(anchos).toHaveLength(1);
    // Una columna por día más la columna congelada del nombre.
    expect(anchos[0]).toBe(366);
  });

  it("el hueco reserva anchura, para que la tabla no encoja al colapsar", () => {
    simularLayout();
    const { container } = montar({ meses: 12 });
    for (const hueco of container.querySelectorAll("td[data-hueco]")) {
      const ancho = Number(String(hueco.style.width).replace("px", ""));
      expect(ancho).toBeGreaterThan(0);
      // El ancho reservado corresponde a los días que sustituye.
      expect(ancho).toBeCloseTo(hueco.colSpan * ANCHO_COLUMNA, 0);
    }
  });

  it("el hueco no llega a los lectores de pantalla", () => {
    simularLayout();
    const { container } = montar({ meses: 12 });
    for (const hueco of container.querySelectorAll("td[data-hueco]")) {
      expect(hueco.getAttribute("aria-hidden")).toBe("true");
    }
  });

  it("al imprimir vuelve la tabla entera", () => {
    simularLayout();
    const { container } = montar({ meses: 12 });
    expect(container.querySelectorAll("td[data-hueco]").length).toBeGreaterThan(0);
    act(() => { window.dispatchEvent(new Event("beforeprint")); });
    expect(container.querySelectorAll("td[data-hueco]").length).toBe(0);
    expect(columnasPorFila(container)).toEqual([366]);
    act(() => { window.dispatchEvent(new Event("afterprint")); });
    expect(container.querySelectorAll("td[data-hueco]").length).toBeGreaterThan(0);
  });

  it("con un solo mes cargado no hay nada que colapsar", () => {
    simularLayout();
    const { container } = montar({ meses: 1 });
    expect(container.querySelectorAll("td[data-hueco]").length).toBe(0);
    expect(columnasPorFila(container)).toEqual([32]);
  });
});
