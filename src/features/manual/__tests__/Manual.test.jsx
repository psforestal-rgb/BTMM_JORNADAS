/** @vitest-environment jsdom */
import { afterEach, describe, expect, it } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Manual from "../Manual.jsx";
import { ETIQUETA_PUBLICO, MANUAL, PUBLICOS, seccionesDe } from "../../../data/manual.js";

afterEach(cleanup);

/**
 * El manual dentro de la aplicación. Lo que importa probar es que se pueda
 * LLEGAR a una respuesta concreta: en campo se viene a resolver una duda, no a
 * leer el manual entero.
 */

describe("Manual", () => {
  it("abre con todas las secciones y con la regla dura a la vista", () => {
    render(<Manual />);
    expect(screen.getByText(MANUAL.reglaDura)).toBeTruthy();
    for (const s of MANUAL.secciones) {
      expect(screen.getByRole("heading", { name: s.titulo })).toBeTruthy();
    }
  });

  it("filtrar por público deja solo las secciones de ese público", () => {
    render(<Manual />);
    fireEvent.click(screen.getByRole("button", { name: ETIQUETA_PUBLICO[PUBLICOS.CAMPO] }));

    for (const s of seccionesDe(PUBLICOS.CAMPO)) {
      expect(screen.getByRole("heading", { name: s.titulo })).toBeTruthy();
    }
    for (const s of seccionesDe(PUBLICOS.JEFATURA)) {
      expect(screen.queryByRole("heading", { name: s.titulo })).toBeNull();
    }
  });

  it("el filtro activo se anuncia con aria-pressed", () => {
    render(<Manual />);
    const boton = screen.getByRole("button", { name: ETIQUETA_PUBLICO[PUBLICOS.ADMINISTRACION] });
    expect(boton.getAttribute("aria-pressed")).toBe("false");
    fireEvent.click(boton);
    expect(boton.getAttribute("aria-pressed")).toBe("true");
  });

  it("buscar «traslado» lleva a la sección de fichas y descarta el resto", () => {
    render(<Manual />);
    fireEvent.change(screen.getByRole("searchbox"), { target: { value: "traslado" } });

    expect(screen.getByRole("heading", { name: "Fichas y traslados" })).toBeTruthy();
    expect(screen.queryByRole("heading", { name: "Sin conexión" })).toBeNull();
  });

  it("la búsqueda no distingue mayúsculas ni acentos de más", () => {
    render(<Manual />);
    fireEvent.change(screen.getByRole("searchbox"), { target: { value: "TELETRABAJO" } });
    expect(screen.getByRole("heading", { name: "Leer el rol" })).toBeTruthy();
  });

  it("dice que no encontró nada en vez de quedarse en blanco", () => {
    render(<Manual />);
    fireEvent.change(screen.getByRole("searchbox"), { target: { value: "zzzzz" } });
    expect(screen.getByText(/no dice nada sobre «zzzzz»/)).toBeTruthy();
  });

  it("pinta las tablas del manual, no solo los párrafos", () => {
    render(<Manual />);
    // La tabla de códigos de rol es la que más se consulta en campo.
    expect(screen.getByText("IN")).toBeTruthy();
    expect(screen.getByText(/Incapacidad\./)).toBeTruthy();
  });

  it("explica qué es el aviso ámbar, que es la duda más probable en campo", () => {
    render(<Manual />);
    fireEvent.change(screen.getByRole("searchbox"), { target: { value: "ámbar" } });
    expect(screen.getAllByText(/ámbar/i).length).toBeGreaterThan(0);
  });
});
