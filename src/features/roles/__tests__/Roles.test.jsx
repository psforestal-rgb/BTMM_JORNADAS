/** @vitest-environment jsdom */
import "fake-indexeddb/auto";
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { AppProvider } from "../../../context/AppContext.jsx";
import Roles from "../Roles.jsx";

afterEach(() => {
  cleanup();
  localStorage.clear();
});

// jsdom no implementa ResizeObserver, IntersectionObserver ni
// Element.scrollTo; RolesMensualGrid los usa para el encabezado/columna
// congelados y la carga progresiva de meses (no relevante aquí).
global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};
global.IntersectionObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};
Element.prototype.scrollTo = Element.prototype.scrollTo || (() => {});
document.elementFromPoint = document.elementFromPoint || (() => null);

const personas = [
  { id: "f1", nombre: "Ana Pérez", puestoOperativo: "Puesto Orosi", estado: "Activo" },
  { id: "f2", nombre: "Bruno Salas", puestoOperativo: "Puesto Quetzales", estado: "Activo" },
];

function renderRoles(props = {}) {
  return render(
    <AppProvider>
      <Roles
        year={2026}
        month={6}
        compact={false}
        roleData={{}}
        setRoleData={vi.fn()}
        personas={personas}
        actividadesPlan={[]}
        setActividadesPlan={vi.fn()}
        reposiciones={[]}
        hj={8}
        {...props}
      />
    </AppProvider>,
  );
}

describe("Roles — control compacto de puestos/funcionarios", () => {
  it("no muestra el carrusel de chips por puesto; el resumen inicial dice 'todos'", () => {
    renderRoles();
    // El carrusel horizontal (chip "Todos" + un chip por puesto) ya no existe.
    expect(screen.queryByRole("group", { name: /Filtrar por puesto/i })).toBeNull();
    // El resumen colapsable sí está, y arranca reflejando que todos están seleccionados.
    expect(screen.getByText(/Puestos y funcionarios: todos/i)).toBeDefined();
  });

  it("al desmarcar un puesto, el resumen dice cuántos quedan seleccionados (no 'todos')", () => {
    renderRoles();
    // Abrir el panel de selección.
    fireEvent.click(screen.getByText(/Puestos y funcionarios: todos/i));
    const casillaOrosi = screen.getByRole("checkbox", { name: /Puesto Orosi/i });
    fireEvent.click(casillaOrosi);
    expect(screen.getByText(/Puestos y funcionarios: 1 de 2/i)).toBeDefined();
  });
});

describe("Roles — advertencia de cobertura de feriados", () => {
  it("no muestra advertencia para un año con calendario oficial cargado (2026)", () => {
    renderRoles({ year: 2026 });
    expect(screen.queryByText(/sin validar oficialmente/i)).toBeNull();
  });

  it("muestra una advertencia no intrusiva cuando el año visible no tiene feriados oficiales cargados (2028)", () => {
    renderRoles({ year: 2028, month: 0 });
    const aviso = screen.getByText(/sin validar oficialmente/i);
    expect(aviso.textContent).toMatch(/2028/);
  });
});

describe("Roles — divisor de puesto, hoy y búsqueda por fecha", () => {
  it("muestra una banda divisoria con el nombre de cada puesto visible", () => {
    const { container } = renderRoles();
    const divisores = container.querySelectorAll("tr.pnlq-roles-divisor");
    // Hay 2 funcionarios en 2 puestos distintos → 2 grupos visibles.
    expect(divisores.length).toBe(2);
    const textos = [...divisores].map((d) => d.textContent);
    expect(textos.some((x) => /Puesto Orosi/i.test(x))).toBe(true);
    expect(textos.some((x) => /Puesto Quetzales/i.test(x))).toBe(true);
  });

  it("el botón 'Ir a fecha' está deshabilitado sin fecha y re-basa el mes al buscar hacia atrás", () => {
    const setYear = vi.fn();
    const setMonth = vi.fn();
    renderRoles({ setYear, setMonth });
    const boton = screen.getByRole("button", { name: /Ir a fecha/i });
    expect(boton.disabled).toBe(true);
    const input = screen.getByLabelText(/Buscar por fecha/i);
    // Fecha anterior al mes inicial (julio 2026) → debe re-basar el calendario.
    fireEvent.change(input, { target: { value: "2026-03-10" } });
    expect(screen.getByRole("button", { name: /Ir a fecha/i }).disabled).toBe(false);
    fireEvent.click(screen.getByRole("button", { name: /Ir a fecha/i }));
    expect(setYear).toHaveBeenCalledWith(2026);
    expect(setMonth).toHaveBeenCalledWith(2);
  });

  it("buscar una fecha dentro del rango cargado NO re-basa el mes inicial", () => {
    const setYear = vi.fn();
    const setMonth = vi.fn();
    renderRoles({ setYear, setMonth });
    const input = screen.getByLabelText(/Buscar por fecha/i);
    fireEvent.change(input, { target: { value: "2026-07-20" } });
    fireEvent.click(screen.getByRole("button", { name: /Ir a fecha/i }));
    expect(setYear).not.toHaveBeenCalled();
    expect(setMonth).not.toHaveBeenCalled();
  });
});

describe("Roles — resumen general al pie de la tabla", () => {
  it("muestra la banda de resumen y una fila por categoría (turno/libres/vacas/incapacidad/otros)", () => {
    const { container } = renderRoles();
    // Banda final con clase propia (no cuenta como divisor de puesto).
    const banda = container.querySelector("tr.pnlq-roles-resumen");
    expect(banda).not.toBeNull();
    expect(banda.textContent).toMatch(/Resumen · todos los puestos/);
    for (const etiqueta of ["En turno", "Libres", "Vacaciones", "Incapacidad", "Otros"]) {
      expect(screen.getByText(etiqueta)).toBeDefined();
    }
  });

  it("el total 'En turno' de una columna es la suma de las filas EN TURNO de todos los puestos", () => {
    renderRoles();
    const filaResumen = screen.getByText("En turno").closest("tr");
    const filasPuesto = screen.getAllByText("EN TURNO").map((el) => el.closest("tr"));
    expect(filasPuesto.length).toBe(2);
    // children[0] es la celda de etiqueta; children[1] la primera columna de día.
    for (const col of [1, 2, 15]) {
      const totalResumen = Number(filaResumen.children[col].textContent);
      const sumaPuestos = filasPuesto.reduce((acc, tr) => acc + Number(tr.children[col].textContent), 0);
      expect(totalResumen).toBe(sumaPuestos);
    }
  });
});
