/**
 * @vitest-environment jsdom
 */
import { afterEach, describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, cleanup, within } from "@testing-library/react";
import { AppProvider } from "../../../context/AppContext.jsx";
import { ToastProvider } from "../../../context/ToastContext.jsx";
import ToastViewport from "../../../ui/Toast.jsx";
import Funcionarios from "../Funcionarios.jsx";

function renderConProvider(props = {}) {
  let setPersonasRef;
  function Probe() {
    const [personas, setPersonas] = require("react").useState([
      { id: "f1", nombre: "Ana Pérez", cedula: "1-0000-0001", email: "ana@sinac.go.cr", puesto: "Guardaparques", puestoOperativo: "Puesto Orosi", condicion: "Propiedad", jornada: "Acumulativa", modalidad: "10x5", resolucion: "RES-1", disponibilidad: true, contrato: "DISP-1", vencimiento: "2026-12-31", policia: true, brigada: false, ong: false, estado: "Activo", obs: "" },
      { id: "f2", nombre: "Bruno Salas", cedula: "1-0000-0002", email: "bruno@sinac.go.cr", puesto: "Asistente Administrativo", puestoOperativo: "Puesto Quetzales", condicion: "Interino", jornada: "Ordinaria", modalidad: "Horario administrativo L-V", resolucion: "", disponibilidad: false, contrato: "", vencimiento: "", policia: false, brigada: false, ong: false, estado: "Activo", obs: "" },
      { id: "f3", nombre: "Carla Mora", cedula: "1-0000-0003", email: "carla@ong.org", puesto: "Personal Apoyo ONG-Invest-Volunt", puestoOperativo: "Puesto Esperanza", condicion: "ONG-Invest-Volunt", jornada: "Ordinaria", modalidad: "Horario administrativo L-V", resolucion: "CONV-1", disponibilidad: false, contrato: "", vencimiento: "", policia: false, brigada: false, ong: true, estado: "Activo", obs: "" },
    ]);
    setPersonasRef = setPersonas;
    return <Funcionarios personas={personas} setPersonas={setPersonas} {...props} />;
  }
  const utils = render(
    <AppProvider>
      <ToastProvider>
        <Probe />
        <ToastViewport />
      </ToastProvider>
    </AppProvider>,
  );
  return { ...utils, getSetPersonas: () => setPersonasRef };
}

afterEach(() => {
  cleanup();
  sessionStorage.clear();
});

describe("Funcionarios — filtros y búsqueda", () => {
  it("muestra los 3 funcionarios por defecto", () => {
    renderConProvider();
    // El conteo "3/3" debe estar visible.
    expect(screen.getByText("3/3")).toBeDefined();
    expect(screen.getByText("Ana Pérez")).toBeDefined();
    expect(screen.getByText("Bruno Salas")).toBeDefined();
    expect(screen.getByText("Carla Mora")).toBeDefined();
  });

  it("filtro 'Guardaparques' deja solo a Ana", () => {
    renderConProvider();
    fireEvent.click(screen.getByRole("button", { name: /^Guardaparques$/ }));
    expect(screen.getByText("1/3")).toBeDefined();
    expect(screen.getByText("Ana Pérez")).toBeDefined();
    expect(screen.queryByText("Bruno Salas")).toBeNull();
    expect(screen.queryByText("Carla Mora")).toBeNull();
  });

  it("filtro 'ONG-Invest-Volunt' deja solo a Carla", () => {
    renderConProvider();
    fireEvent.click(screen.getByRole("button", { name: /^ONG-Invest-Volunt$/ }));
    expect(screen.getByText("1/3")).toBeDefined();
    expect(screen.getByText("Carla Mora")).toBeDefined();
  });

  it("filtro 'Con disponibilidad' deja solo a Ana", () => {
    renderConProvider();
    fireEvent.click(screen.getByRole("button", { name: /Con disponibilidad/ }));
    expect(screen.getByText("1/3")).toBeDefined();
    expect(screen.getByText("Ana Pérez")).toBeDefined();
  });

  it("búsqueda por texto en cédula/nombre/puesto", () => {
    renderConProvider();
    const input = screen.getByPlaceholderText(/Buscar/i);
    fireEvent.change(input, { target: { value: "Bruno" } });
    expect(screen.getByText("1/3")).toBeDefined();
    expect(screen.getByText("Bruno Salas")).toBeDefined();
  });

  it("búsqueda sin resultados muestra EmptyState", () => {
    renderConProvider();
    const input = screen.getByPlaceholderText(/Buscar/i);
    fireEvent.change(input, { target: { value: "ZZZ_no_existe" } });
    expect(screen.getByText("0/3")).toBeDefined();
    expect(screen.getByText(/Sin resultados/i)).toBeDefined();
  });
});

describe("Funcionarios — toggle Tabla / Tarjetas", () => {
  it("cambia entre vistas y preserva la lista filtrada", () => {
    renderConProvider();
    // Cambiar a Tarjetas
    fireEvent.click(screen.getByRole("button", { name: /Tarjetas/ }));
    // En tarjetas, los 3 nombres siguen presentes.
    expect(screen.getByText("Ana Pérez")).toBeDefined();
    expect(screen.getByText("Bruno Salas")).toBeDefined();
    expect(screen.getByText("Carla Mora")).toBeDefined();
    // El conteo sigue siendo 3/3.
    expect(screen.getByText("3/3")).toBeDefined();

    // Volver a tabla.
    fireEvent.click(screen.getByRole("button", { name: /^Tabla$/ }));
    // Header de la tabla visible.
    expect(screen.getByText(/Cargo \/ puesto operativo/i)).toBeDefined();
  });
});

describe("Funcionarios — eliminación reversible con «Deshacer»", () => {
  // La tabla ordena por nombre; la fila 0 es siempre Ana Pérez.
  const clicEliminarPrimero = () => {
    const botones = screen.getAllByRole("button", { name: /^Eliminar$/i });
    fireEvent.click(botones[0]);
  };

  it("elimina de inmediato y anuncia el borrado con acción Deshacer", () => {
    renderConProvider();
    clicEliminarPrimero();
    expect(screen.getByText("2/2")).toBeDefined();
    expect(screen.queryByText("Ana Pérez")).toBeNull();
    expect(screen.getByText("Se eliminó a Ana Pérez")).toBeDefined();
    expect(screen.getByRole("button", { name: /^Deshacer$/ })).toBeDefined();
  });

  it("«Deshacer» restaura al funcionario en su posición original", () => {
    renderConProvider();
    clicEliminarPrimero();
    fireEvent.click(screen.getByRole("button", { name: /^Deshacer$/ }));
    expect(screen.getByText("3/3")).toBeDefined();
    expect(screen.getByText("Ana Pérez")).toBeDefined();
    expect(screen.getByText("Se restauró a Ana Pérez")).toBeDefined();
    // El aviso de borrado se cierra al activar su acción.
    expect(screen.queryByText("Se eliminó a Ana Pérez")).toBeNull();
  });

  it("ya no hay modal bloqueante de confirmación", () => {
    renderConProvider();
    clicEliminarPrimero();
    expect(screen.queryByRole("dialog")).toBeNull();
  });

  it("el aviso se cierra sin restaurar al pulsar Cerrar", () => {
    renderConProvider();
    clicEliminarPrimero();
    const aviso = screen.getByTestId("toast");
    fireEvent.click(within(aviso).getByRole("button", { name: /^Cerrar$/ }));
    expect(screen.queryByText("Se eliminó a Ana Pérez")).toBeNull();
    expect(screen.getByText("2/2")).toBeDefined();
  });
});

describe("Funcionarios — confirmación visual al guardar", () => {
  it("avisa al editar un funcionario existente", () => {
    renderConProvider();
    fireEvent.click(screen.getAllByRole("button", { name: /^Editar$/i })[0]);
    fireEvent.click(screen.getByRole("button", { name: /^Guardar$/ }));
    expect(screen.getByText("Se guardaron los cambios de Ana Pérez")).toBeDefined();
  });

  it("avisa al agregar uno nuevo", () => {
    renderConProvider();
    fireEvent.click(screen.getByRole("button", { name: /Agregar/ }));
    fireEvent.change(screen.getByLabelText("Nombre"), { target: { value: "Nuevo Funcionario" } });
    fireEvent.click(screen.getByRole("button", { name: /^Guardar$/ }));
    expect(screen.getByText("Se agregó a Nuevo Funcionario")).toBeDefined();
    expect(screen.getByText("4/4")).toBeDefined();
  });
});
