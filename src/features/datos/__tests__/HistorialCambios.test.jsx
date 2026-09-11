/**
 * @vitest-environment jsdom
 */
import { afterEach, describe, expect, it } from "vitest";
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import HistorialCambios from "../HistorialCambios.jsx";

afterEach(cleanup);

const entrada = (over = {}) => ({
  id: `h${Math.random()}`,
  fecha: "2026-09-11T15:30:00.000Z",
  tipo: "edicion",
  funcionario: { nombre: "Ana Pérez", cedula: "1-0000-0001" },
  cambios: [],
  ...over,
});

describe("HistorialCambios", () => {
  it("sin movimientos lo dice en vez de mostrar una lista vacía", () => {
    render(<HistorialCambios historial={[]} />);
    expect(screen.getByText(/Todavía no hay cambios registrados/)).toBeDefined();
  });

  it("muestra el tipo, la persona y la fecha de cada movimiento", () => {
    render(<HistorialCambios historial={[entrada({ tipo: "alta" })]} />);
    expect(screen.getByText("Alta")).toBeDefined();
    expect(screen.getByText(/Ana Pérez · 1-0000-0001/)).toBeDefined();
    expect(document.querySelector("time")).not.toBeNull();
  });

  it("un cambio se lee «antes → después» con el nombre humano del campo", () => {
    render(
      <HistorialCambios
        historial={[entrada({ cambios: [{ campo: "estado", antes: "Activo", despues: "Inactivo" }] })]}
      />,
    );
    expect(screen.getByText("Estado: Activo → Inactivo")).toBeDefined();
  });

  it("los booleanos y los vacíos se leen, no salen en crudo", () => {
    render(
      <HistorialCambios
        historial={[
          entrada({
            cambios: [
              { campo: "ong", antes: false, despues: true },
              { campo: "obs", antes: "algo", despues: "" },
            ],
          }),
        ]}
      />,
    );
    expect(screen.getByText("ONG-Invest-Volunt: No → Sí")).toBeDefined();
    expect(screen.getByText("Observaciones: algo → (vacío)")).toBeDefined();
  });

  it("un campo sin nombre humano se muestra crudo, no como clave con puntos", () => {
    render(
      <HistorialCambios historial={[entrada({ cambios: [{ campo: "jefe", antes: "A", despues: "B" }] })]} />,
    );
    expect(screen.getByText("jefe: A → B")).toBeDefined();
  });

  it("una importación muestra su resumen en vez de una lista de campos", () => {
    render(
      <HistorialCambios
        historial={[
          entrada({
            tipo: "importacion",
            funcionario: { nombre: "", cedula: "" },
            detalle: { archivo: "personal.csv", altas: 2, cambios: 3 },
          }),
        ]}
      />,
    );
    expect(screen.getByText(/personal.csv · 2 altas, 3 actualizaciones/)).toBeDefined();
  });

  it("filtra por funcionario cuando hay más de uno", () => {
    const { container } = render(
      <HistorialCambios
        historial={[
          entrada({ tipo: "alta", funcionario: { nombre: "Ana Pérez", cedula: "1" } }),
          entrada({ tipo: "alta", funcionario: { nombre: "Bruno Salas", cedula: "2" } }),
        ]}
      />,
    );
    // Se busca dentro de la lista: los dos nombres están también en el
    // desplegable del filtro, que no es lo que se está comprobando.
    const lista = () => container.querySelector("ol");
    expect(within(lista()).getAllByText(/Pérez|Salas/)).toHaveLength(2);
    fireEvent.change(screen.getByLabelText(/Filtrar por funcionario/), { target: { value: "Bruno Salas" } });
    expect(within(lista()).getByText(/Bruno Salas/)).toBeDefined();
    expect(within(lista()).queryByText(/Ana Pérez/)).toBeNull();
  });

  it("con un solo funcionario no ofrece un filtro inútil", () => {
    render(<HistorialCambios historial={[entrada({ tipo: "alta" })]} />);
    expect(screen.queryByLabelText(/Filtrar por funcionario/)).toBeNull();
  });

  it("pagina: no pinta las 200 entradas de golpe", () => {
    const muchas = Array.from({ length: 45 }, (_, i) =>
      entrada({ id: `h${i}`, tipo: "alta", funcionario: { nombre: "Ana Pérez", cedula: "1" } }),
    );
    const { container } = render(<HistorialCambios historial={muchas} />);
    expect(container.querySelectorAll("ol > li")).toHaveLength(20);
    fireEvent.click(screen.getByRole("button", { name: /Ver 25 más/ }));
    expect(container.querySelectorAll("ol > li")).toHaveLength(40);
  });

  it("avisa de que el historial viaja en el respaldo", () => {
    render(<HistorialCambios historial={[entrada({ tipo: "alta" })]} />);
    expect(screen.getByText(/viaja en el respaldo JSON/)).toBeDefined();
  });
});
