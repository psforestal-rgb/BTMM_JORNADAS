/**
 * @vitest-environment jsdom
 */
import "fake-indexeddb/auto";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { act, cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { AppProvider, useApp } from "../../../context/AppContext.jsx";
import { ThemeProvider } from "../../../context/ThemeContext.jsx";
import { ToastProvider } from "../../../context/ToastContext.jsx";
import ToastViewport from "../../../ui/Toast.jsx";
import { __INTERNALS__, getDb } from "../../../lib/db.js";
import Configuracion from "../Configuracion.jsx";

async function resetAll() {
  __INTERNALS__.resetSingleton();
  try {
    const db = await getDb();
    if (db) await db.delete();
  } catch { /* ignorar */ }
  __INTERNALS__.resetSingleton();
  localStorage.clear();
}

beforeEach(resetAll);
afterEach(async () => {
  cleanup();
  await resetAll();
});

async function montar() {
  let ctx = null;
  function Espia() {
    ctx = useApp();
    return null;
  }
  await act(async () => {
    render(
      // Configuración incluye el selector de tema, que exige su proveedor.
      <ThemeProvider>
        <AppProvider>
          <ToastProvider>
            <Configuracion />
            <Espia />
            <ToastViewport />
          </ToastProvider>
        </AppProvider>
      </ThemeProvider>,
    );
  });
  // La sección vive dentro de un <details>; se abre para poder interactuar.
  const resumen = screen.getByText("Puestos operativos");
  fireEvent.click(resumen);
  return { ctx: () => ctx, panel: () => resumen.closest("details") };
}

const abrirAgregar = () => fireEvent.click(screen.getByRole("button", { name: /Agregar puesto/ }));

const crearPuestoCerro = () => {
  abrirAgregar();
  fireEvent.change(screen.getByLabelText("Nombre del puesto"), { target: { value: "Puesto Cerro" } });
  fireEvent.change(screen.getByLabelText("Código corto"), { target: { value: "CE" } });
  fireEvent.click(screen.getByRole("button", { name: "Guardar" }));
};

describe("Configuración — CRUD de puestos (RP1–RP8)", () => {
  it("lista los puestos vigentes con su código y cuántas personas tienen", async () => {
    const { panel } = await montar();
    expect(within(panel()).getByText("Puesto Orosi")).toBeDefined();
    expect(within(panel()).getAllByText("OR").length).toBeGreaterThan(0);
    expect(within(panel()).getAllByText(/funcionario|Sin funcionarios/).length).toBeGreaterThan(0);
  });

  it("agrega un puesto nuevo y aparece en la lista", async () => {
    const { ctx, panel } = await montar();
    const antes = ctx().puestos.length;
    abrirAgregar();
    fireEvent.change(screen.getByLabelText("Nombre del puesto"), { target: { value: "Puesto Cerro" } });
    fireEvent.change(screen.getByLabelText("Código corto"), { target: { value: "ce" } });
    fireEvent.click(screen.getByRole("button", { name: "Guardar" }));
    expect(ctx().puestos).toHaveLength(antes + 1);
    // El código se normaliza a mayúsculas.
    expect(ctx().puestos.at(-1)).toMatchObject({ nombre: "Puesto Cerro", tag: "CE" });
    expect(within(panel()).getByText("Puesto Cerro")).toBeDefined();
  });

  it("bloquea guardar un nombre repetido y explica por qué", async () => {
    await montar();
    abrirAgregar();
    fireEvent.change(screen.getByLabelText("Nombre del puesto"), { target: { value: "Puesto Orosi" } });
    fireEvent.change(screen.getByLabelText("Código corto"), { target: { value: "XX" } });
    expect(screen.getByText(/Ya existe un puesto llamado/)).toBeDefined();
    expect(screen.getByRole("button", { name: "Guardar" }).disabled).toBe(true);
  });

  it("bloquea guardar un código repetido", async () => {
    await montar();
    abrirAgregar();
    fireEvent.change(screen.getByLabelText("Nombre del puesto"), { target: { value: "Puesto Cerro" } });
    fireEvent.change(screen.getByLabelText("Código corto"), { target: { value: "OR" } });
    expect(screen.getByText(/ya está en uso/)).toBeDefined();
    expect(screen.getByRole("button", { name: "Guardar" }).disabled).toBe(true);
  });

  it("renombrar arrastra el nombre a las fichas y a la cobertura diaria", async () => {
    const { ctx, panel } = await montar();
    const afectadas = ctx().personas.filter((p) => p.puestoOperativo === "Puesto Orosi").length;
    expect(afectadas).toBeGreaterThan(0);
    expect(ctx().reglas.puestosRequierenVisitantesDiario).toContain("Puesto Orosi");

    const fila = within(panel()).getByText("Puesto Orosi").closest("li");
    fireEvent.click(within(fila).getByRole("button", { name: "Editar" }));
    fireEvent.change(screen.getByLabelText("Nombre del puesto"), { target: { value: "Orosi Alto" } });
    fireEvent.click(screen.getByRole("button", { name: "Guardar" }));

    expect(ctx().puestos.map((p) => p.nombre)).toContain("Orosi Alto");
    expect(ctx().personas.some((p) => p.puestoOperativo === "Puesto Orosi")).toBe(false);
    expect(ctx().personas.filter((p) => p.puestoOperativo === "Orosi Alto")).toHaveLength(afectadas);
    expect(ctx().reglas.puestosRequierenVisitantesDiario).toContain("Orosi Alto");
    expect(ctx().reglas.puestosRequierenVisitantesDiario).not.toContain("Puesto Orosi");
    expect(screen.getByText(/pasa a llamarse «Orosi Alto»/)).toBeDefined();
  });

  it("editar sin cambiar el nombre no toca las fichas", async () => {
    const { ctx, panel } = await montar();
    const personasAntes = ctx().personas;
    const fila = within(panel()).getByText("Puesto Orosi").closest("li");
    fireEvent.click(within(fila).getByRole("button", { name: "Editar" }));
    fireEvent.change(screen.getByLabelText("Código corto"), { target: { value: "ORO" } });
    fireEvent.click(screen.getByRole("button", { name: "Guardar" }));
    expect(ctx().personas).toBe(personasAntes);
    expect(ctx().puestos.find((p) => p.nombre === "Puesto Orosi").tag).toBe("ORO");
  });

  it("no deja eliminar un puesto con funcionarios asignados", async () => {
    const { ctx, panel } = await montar();
    const antes = ctx().puestos.length;
    const fila = within(panel()).getByText("Puesto Orosi").closest("li");
    fireEvent.click(within(fila).getByRole("button", { name: "Eliminar" }));
    expect(screen.getByText(/No se puede eliminar «Puesto Orosi»/)).toBeDefined();
    expect(ctx().puestos).toHaveLength(antes);
  });

  it("elimina un puesto vacío y permite deshacerlo en su posición", async () => {
    const { ctx, panel } = await montar();
    crearPuestoCerro();
    const conNuevo = ctx().puestos.map((p) => p.nombre);

    const fila = within(panel()).getByText("Puesto Cerro").closest("li");
    fireEvent.click(within(fila).getByRole("button", { name: "Eliminar" }));
    expect(ctx().puestos.map((p) => p.nombre)).not.toContain("Puesto Cerro");
    expect(screen.getByText(/Se eliminó el puesto «Puesto Cerro»/)).toBeDefined();

    fireEvent.click(screen.getByRole("button", { name: /^Deshacer$/ }));
    expect(ctx().puestos.map((p) => p.nombre)).toEqual(conNuevo);
  });

  it("la cobertura diaria ofrece los puestos vigentes, incluidos los nuevos", async () => {
    await montar();
    crearPuestoCerro();
    const resumenCobertura = screen.getByText(/^Cobertura/i);
    fireEvent.click(resumenCobertura);
    const cobertura = resumenCobertura.closest("details");
    expect(within(cobertura).getByRole("button", { name: /Puesto Cerro/ })).toBeDefined();
  });
});
