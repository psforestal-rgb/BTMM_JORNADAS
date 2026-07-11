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

// jsdom no implementa ResizeObserver ni Element.scrollTo; RolesMensualGrid
// los usa para el encabezado/columna congelados (no relevante aquí).
global.ResizeObserver = class {
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
