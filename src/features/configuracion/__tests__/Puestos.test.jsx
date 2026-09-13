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
import { puestoEnMes } from "../../../domain/historialPuestos.js";

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

  it("renombrar arrastra también el historial de traslados y las claves del rol", async () => {
    /* Esta es la regresión que motivó el arreglo: desde que la cuadrícula
       agrupa por `puestoEnMes(...)`, una ficha cuyo historial siga diciendo el
       nombre viejo NO cae en ningún grupo y su gente desaparece de la vista
       entera, sin error ninguno. Y el rol, cuyas claves llevan el nombre del
       puesto dentro, se queda archivado bajo un nombre que ya no existe. */
    const { ctx, panel } = await montar();

    const conHistorialAntes = ctx().personas.filter((p) =>
      (p.historialPuestos || []).some((t) => t.puesto === "Puesto Orosi"),
    ).length;
    const clavesAntes = Object.keys(ctx().roleData).filter((k) =>
      k.includes("-Puesto Orosi-"),
    );
    expect(conHistorialAntes).toBeGreaterThan(0);
    expect(clavesAntes.length).toBeGreaterThan(0);

    const fila = within(panel()).getByText("Puesto Orosi").closest("li");
    fireEvent.click(within(fila).getByRole("button", { name: "Editar" }));
    fireEvent.change(screen.getByLabelText("Nombre del puesto"), { target: { value: "Orosi Alto" } });
    fireEvent.click(screen.getByRole("button", { name: "Guardar" }));

    // Ningún tramo del historial puede quedarse con el nombre viejo.
    expect(
      ctx().personas.some((p) => (p.historialPuestos || []).some((t) => t.puesto === "Puesto Orosi")),
    ).toBe(false);
    expect(
      ctx().personas.filter((p) => (p.historialPuestos || []).some((t) => t.puesto === "Orosi Alto")),
    ).toHaveLength(conHistorialAntes);

    // Ni una sola clave de rol.
    for (const vieja of clavesAntes) {
      expect(ctx().roleData[vieja]).toBeUndefined();
      expect(ctx().roleData[vieja.replace("-Puesto Orosi-", "-Orosi Alto-")]).toBeDefined();
    }
  });

  it("renombrar deja a la gente del puesto en su grupo de la cuadrícula", async () => {
    const { ctx, panel } = await montar();
    const antes = ctx().personas.filter((p) => puestoEnMes(p, 2026, 9) === "Puesto Orosi").length;
    expect(antes).toBeGreaterThan(0);

    const fila = within(panel()).getByText("Puesto Orosi").closest("li");
    fireEvent.click(within(fila).getByRole("button", { name: "Editar" }));
    fireEvent.change(screen.getByLabelText("Nombre del puesto"), { target: { value: "Orosi Alto" } });
    fireEvent.click(screen.getByRole("button", { name: "Guardar" }));

    // `gruposRoles` compara exactamente así. Antes del arreglo esto daba 0.
    expect(ctx().personas.filter((p) => puestoEnMes(p, 2026, 9) === "Orosi Alto")).toHaveLength(antes);
    expect(ctx().personas.some((p) => puestoEnMes(p, 2026, 9) === "Puesto Orosi")).toBe(false);
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

describe("Configuración — orden de los puestos (RP7)", () => {
  it("subir y bajar cambian el orden, que es el que ve el resto de la app", async () => {
    const { ctx, panel } = await montar();
    const inicial = ctx().puestos.map((p) => p.nombre);
    const segundo = inicial[1];

    fireEvent.click(within(panel()).getByRole("button", { name: `Subir «${segundo}»` }));
    expect(ctx().puestos.map((p) => p.nombre)[0]).toBe(segundo);

    fireEvent.click(within(panel()).getByRole("button", { name: `Bajar «${segundo}»` }));
    expect(ctx().puestos.map((p) => p.nombre)).toEqual(inicial);
  });

  it("los extremos tienen el botón deshabilitado en vez de no hacer nada", async () => {
    const { ctx, panel } = await montar();
    const nombres = ctx().puestos.map((p) => p.nombre);
    expect(within(panel()).getByRole("button", { name: `Subir «${nombres[0]}»` }).disabled).toBe(true);
    expect(within(panel()).getByRole("button", { name: `Bajar «${nombres.at(-1)}»` }).disabled).toBe(true);
  });
});

describe("Configuración — exportar e importar puestos (RP6)", () => {
  let descargas;
  let BlobReal;

  beforeEach(() => {
    descargas = [];
    BlobReal = global.Blob;
    global.Blob = class {
      constructor(partes, opciones) {
        descargas.push({ texto: (partes || []).join(""), tipo: opciones?.type });
      }
    };
    global.URL.createObjectURL = () => "blob:fake";
    global.URL.revokeObjectURL = () => {};
  });

  afterEach(() => {
    global.Blob = BlobReal;
  });

  const elegir = (texto, nombre = "puestos.csv") => {
    const input = document.querySelector('input[type="file"]');
    const archivo = new BlobReal([texto], { type: "text/csv" });
    archivo.name = nombre;
    Object.defineProperty(input, "files", { value: [archivo], configurable: true });
    fireEvent.change(input);
    return screen.findByRole("dialog", { name: /Revisar antes de importar puestos/i });
  };

  const sinBom = (texto) => texto.replace(/^﻿/, "");

  it("exporta los puestos con su cabecera en español y tipo CSV", async () => {
    const { ctx } = await montar();
    fireEvent.click(screen.getByRole("button", { name: /Exportar los puestos/ }));
    expect(descargas).toHaveLength(1);
    expect(descargas[0].tipo).toMatch(/^text\/csv/);
    const filas = sinBom(descargas[0].texto).split("\r\n");
    expect(filas[0]).toBe("Nombre del puesto,Código corto,Color en Roles");
    expect(filas).toHaveLength(ctx().puestos.length + 1);
    expect(screen.getByText(/Se exportaron \d+ puestos a CSV/)).toBeDefined();
  });

  it("lo exportado se vuelve a importar sin cambiar nada", async () => {
    const { ctx } = await montar();
    fireEvent.click(screen.getByRole("button", { name: /Exportar los puestos/ }));
    const csv = descargas[0].texto;
    const antes = JSON.stringify(ctx().puestos);
    descargas.length = 0;

    const dialogo = await elegir(csv, "reimportado.csv");
    const altas = within(dialogo).getByText("Se agregan").parentElement;
    expect(within(altas).getByText("0")).toBeDefined();
    fireEvent.click(screen.getByRole("button", { name: /Crear respaldo e importar/ }));
    expect(JSON.stringify(ctx().puestos)).toBe(antes);
  });

  it("no toca nada hasta confirmar y el respaldo se descarga primero", async () => {
    const { ctx } = await montar();
    const antes = ctx().puestos.length;
    await elegir("Nombre del puesto,Código corto\r\nPuesto Cerro,CE");
    expect(ctx().puestos).toHaveLength(antes);
    expect(descargas).toHaveLength(0);

    fireEvent.click(screen.getByRole("button", { name: /Crear respaldo e importar/ }));
    expect(descargas).toHaveLength(1);
    expect(descargas[0].tipo).toBe("application/json");
    // El respaldo incluye los puestos: sin ellos, restaurar los perdería.
    expect(JSON.parse(descargas[0].texto).state.puestos).toHaveLength(antes);
    expect(ctx().puestos).toHaveLength(antes + 1);
  });

  it("importar NUNCA elimina: los puestos ausentes del archivo siguen ahí", async () => {
    const { ctx } = await montar();
    const antes = ctx().puestos.map((p) => p.nombre);
    await elegir("Nombre del puesto,Código corto\r\nPuesto Orosi,OR");
    fireEvent.click(screen.getByRole("button", { name: /Crear respaldo e importar/ }));
    expect(ctx().puestos.map((p) => p.nombre)).toEqual(antes);
  });

  it("avisa de la fila cuyo código ya usa otro puesto, y no la aplica", async () => {
    const { ctx } = await montar();
    const antes = ctx().puestos.length;
    const dialogo = await elegir("Nombre del puesto,Código corto\r\nPuesto Cerro,OR");
    expect(within(dialogo).getByText(/su código ya lo usa otro puesto: Puesto Cerro \(OR\)/)).toBeDefined();
    fireEvent.click(screen.getByRole("button", { name: /Crear respaldo e importar/ }));
    expect(ctx().puestos).toHaveLength(antes);
  });

  it("rechaza un archivo sin la columna del nombre", async () => {
    await montar();
    const input = document.querySelector('input[type="file"]');
    const archivo = new BlobReal(["Código corto\r\nXX"], { type: "text/csv" });
    archivo.name = "malo.csv";
    Object.defineProperty(input, "files", { value: [archivo], configurable: true });
    fireEvent.change(input);
    await screen.findByText(/no trae la columna «Nombre del puesto»/);
    expect(screen.queryByRole("dialog")).toBeNull();
  });

  it("la vista previa recuerda que la importación no elimina", async () => {
    await montar();
    const dialogo = await elegir("Nombre del puesto,Código corto\r\nPuesto Cerro,CE");
    expect(within(dialogo).getByText(/nunca elimina un puesto/)).toBeDefined();
  });

  it("cancelar no importa ni descarga respaldo", async () => {
    const { ctx } = await montar();
    const antes = ctx().puestos.length;
    await elegir("Nombre del puesto,Código corto\r\nPuesto Cerro,CE");
    fireEvent.click(screen.getByRole("button", { name: /^Cancelar$/ }));
    expect(ctx().puestos).toHaveLength(antes);
    expect(descargas).toHaveLength(0);
  });
});
