/**
 * @vitest-environment jsdom
 */
import { afterEach, describe, expect, it } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Ayuda from "../Ayuda.jsx";

afterEach(cleanup);

const TEXTO = "La modalidad NxM indica N días de trabajo por M días libres.";

describe("Ayuda — revelación contextual", () => {
  it("arranca cerrada: el texto no está en el DOM", () => {
    render(<Ayuda etiqueta="Jornada y modalidad">{TEXTO}</Ayuda>);
    expect(screen.queryByText(TEXTO)).toBeNull();
    expect(screen.getByRole("button").getAttribute("aria-expanded")).toBe("false");
  });

  it("el botón se abre y se cierra, y refleja el estado en aria-expanded", () => {
    render(<Ayuda etiqueta="Jornada y modalidad">{TEXTO}</Ayuda>);
    const boton = screen.getByRole("button");
    fireEvent.click(boton);
    expect(screen.getByText(TEXTO)).toBeDefined();
    expect(boton.getAttribute("aria-expanded")).toBe("true");
    fireEvent.click(boton);
    expect(screen.queryByText(TEXTO)).toBeNull();
    expect(boton.getAttribute("aria-expanded")).toBe("false");
  });

  it("aria-controls apunta al panel que realmente aparece", () => {
    render(<Ayuda etiqueta="Jornada y modalidad">{TEXTO}</Ayuda>);
    const boton = screen.getByRole("button");
    fireEvent.click(boton);
    const panel = screen.getByRole("note");
    expect(panel.id).toBe(boton.getAttribute("aria-controls"));
    expect(panel.textContent).toBe(TEXTO);
  });

  it("el nombre accesible dice de qué campo es la ayuda", () => {
    render(<Ayuda etiqueta="Jornada y modalidad">{TEXTO}</Ayuda>);
    expect(screen.getByRole("button", { name: /Jornada y modalidad/ })).toBeDefined();
  });

  it("el rótulo del botón cambia al abrir", () => {
    render(<Ayuda etiqueta="Jornada y modalidad">{TEXTO}</Ayuda>);
    expect(screen.getByText("¿Qué significa esto?")).toBeDefined();
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByText("Ocultar ayuda")).toBeDefined();
  });

  it("dos ayudas en la misma pantalla no comparten id", () => {
    render(
      <>
        <Ayuda etiqueta="Uno">A</Ayuda>
        <Ayuda etiqueta="Dos">B</Ayuda>
      </>,
    );
    const [a, b] = screen.getAllByRole("button");
    expect(a.getAttribute("aria-controls")).not.toBe(b.getAttribute("aria-controls"));
    fireEvent.click(a);
    // Abrir una no abre la otra.
    expect(screen.getAllByRole("note")).toHaveLength(1);
  });

  it("sin etiqueta el botón sigue teniendo nombre accesible", () => {
    render(<Ayuda>{TEXTO}</Ayuda>);
    expect(screen.getByRole("button", { name: "¿Qué significa esto?" })).toBeDefined();
  });
});
