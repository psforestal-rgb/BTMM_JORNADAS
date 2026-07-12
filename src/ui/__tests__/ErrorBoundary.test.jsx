/** @vitest-environment jsdom */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import ErrorBoundary from "../ErrorBoundary.jsx";
import { STORAGE_KEY, SCHEMA_VERSION } from "../../lib/storage.js";

function Bomba() {
  throw new Error("boom de prueba");
}

beforeEach(() => {
  localStorage.clear();
  // React registra el error de todas formas en la consola del navegador
  // real; en el test se silencia solo el ruido esperado de este caso.
  vi.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  cleanup();
  localStorage.clear();
  vi.restoreAllMocks();
});

describe("ErrorBoundary", () => {
  it("renderiza los hijos normalmente cuando no hay error", () => {
    render(
      <ErrorBoundary>
        <p>Contenido normal</p>
      </ErrorBoundary>,
    );
    expect(screen.getByText("Contenido normal")).toBeDefined();
  });

  it("captura un error de render y muestra el mensaje de recuperación en español, sin ocultar el detalle técnico", () => {
    render(
      <ErrorBoundary>
        <Bomba />
      </ErrorBoundary>,
    );
    expect(screen.getByRole("alert")).toBeDefined();
    expect(screen.getByText(/Ocurrió un error inesperado/i)).toBeDefined();
    expect(screen.getByText(/boom de prueba/i)).toBeDefined();
    expect(screen.getByText("Reintentar")).toBeDefined();
    expect(screen.getByText("Recargar la aplicación")).toBeDefined();
  });

  it("no ofrece 'descargar mis datos' si no hay nada guardado en localStorage", () => {
    render(
      <ErrorBoundary>
        <Bomba />
      </ErrorBoundary>,
    );
    expect(screen.queryByText(/Descargar mis datos/i)).toBeNull();
  });

  it("ofrece 'descargar mis datos' cuando SÍ hay un respaldo en localStorage, leyéndolo directo sin depender de AppContext", () => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ schemaVersion: SCHEMA_VERSION, savedAt: new Date().toISOString(), state: { personas: [] } }),
    );
    render(
      <ErrorBoundary>
        <Bomba />
      </ErrorBoundary>,
    );
    expect(screen.getByText(/Descargar mis datos/i)).toBeDefined();
  });

  it("'Reintentar' vuelve a intentar renderizar los hijos", () => {
    let lanzar = true;
    function Intermitente() {
      if (lanzar) throw new Error("solo la primera vez");
      return <p>Ya no falla</p>;
    }
    render(
      <ErrorBoundary>
        <Intermitente />
      </ErrorBoundary>,
    );
    expect(screen.getByRole("alert")).toBeDefined();
    lanzar = false;
    fireEvent.click(screen.getByText("Reintentar"));
    expect(screen.getByText("Ya no falla")).toBeDefined();
  });
});
