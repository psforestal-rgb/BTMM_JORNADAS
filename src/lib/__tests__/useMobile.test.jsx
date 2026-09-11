/**
 * @vitest-environment jsdom
 */
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { useMobile } from "../useMobile.js";

function Sonda() {
  return <p data-testid="valor">{String(useMobile())}</p>;
}

afterEach(() => {
  cleanup();
  delete window.matchMedia;
});

/** matchMedia mínimo, con la API moderna de listeners. */
function instalarMatchMedia(matches) {
  const listeners = new Set();
  window.matchMedia = vi.fn(() => ({
    matches,
    addEventListener: (_, cb) => listeners.add(cb),
    removeEventListener: (_, cb) => listeners.delete(cb),
  }));
  return listeners;
}

describe("useMobile", () => {
  it("sin matchMedia asume escritorio en vez de lanzar", () => {
    expect(window.matchMedia).toBeUndefined();
    expect(() => render(<Sonda />)).not.toThrow();
    expect(screen.getByTestId("valor").textContent).toBe("false");
  });

  it("devuelve true cuando el query coincide", () => {
    instalarMatchMedia(true);
    render(<Sonda />);
    expect(screen.getByTestId("valor").textContent).toBe("true");
  });

  it("devuelve false cuando el query no coincide", () => {
    instalarMatchMedia(false);
    render(<Sonda />);
    expect(screen.getByTestId("valor").textContent).toBe("false");
  });

  it("se suscribe y se da de baja al desmontar", () => {
    const listeners = instalarMatchMedia(false);
    const { unmount } = render(<Sonda />);
    expect(listeners.size).toBe(1);
    unmount();
    expect(listeners.size).toBe(0);
  });

  it("admite navegadores con la API antigua (addListener)", () => {
    const listeners = new Set();
    window.matchMedia = vi.fn(() => ({
      matches: true,
      addListener: (cb) => listeners.add(cb),
      removeListener: (cb) => listeners.delete(cb),
    }));
    const { unmount } = render(<Sonda />);
    expect(screen.getByTestId("valor").textContent).toBe("true");
    expect(listeners.size).toBe(1);
    unmount();
    expect(listeners.size).toBe(0);
  });
});
