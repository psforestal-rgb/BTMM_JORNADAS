/**
 * @vitest-environment jsdom
 */
import { useState } from "react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { act, cleanup, renderHook } from "@testing-library/react";
import { useAppNavigation } from "../useAppNavigation.js";

/**
 * Envuelve el hook en el estado que la aplicación le da de verdad, para que la
 * prueba ejercite el ciclo completo: hash → estado → hash.
 */
function usarNavegacion(inicial = {}) {
  const [view, setView] = useState(inicial.view ?? "dia");
  const [year, setYear] = useState(inicial.year ?? 2026);
  const [month, setMonth] = useState(inicial.month ?? 6);
  const [diaVista, setDiaVista] = useState(inicial.diaVista ?? "2026-07-10");
  const [funcionarioVista, setFuncionarioVista] = useState(inicial.funcionarioVista ?? "");
  const navegar = useAppNavigation({
    view, setView, year, setYear, month, setMonth, diaVista, setDiaVista,
    funcionarioVista, setFuncionarioVista,
  });
  return { navegar, view, year, month, diaVista, funcionarioVista };
}

beforeEach(() => {
  window.history.replaceState({}, "", "#/dia/2026-07-10");
});

afterEach(() => {
  cleanup();
});

describe("useAppNavigation", () => {
  it("abre la ficha de una persona y lo deja escrito en la ruta", () => {
    const { result } = renderHook(() => usarNavegacion());
    act(() => result.current.navegar("funcionario", { funcionario: "Ana Pérez" }));
    expect(result.current.view).toBe("funcionario");
    expect(result.current.funcionarioVista).toBe("Ana Pérez");
    expect(window.location.hash).toBe("#/funcionario/Ana%20P%C3%A9rez");
  });

  it("conserva la persona al volver a la ficha desde otra vista", () => {
    const { result } = renderHook(() => usarNavegacion());
    act(() => result.current.navegar("funcionario", { funcionario: "Ana Pérez" }));
    act(() => result.current.navegar("roles"));
    expect(window.location.hash).toBe("#/roles/2026/07");
    // Sin segundo argumento: no se pierde a quién se estaba viendo.
    act(() => result.current.navegar("funcionario"));
    expect(result.current.funcionarioVista).toBe("Ana Pérez");
    expect(window.location.hash).toBe("#/funcionario/Ana%20P%C3%A9rez");
  });

  it("lee el nombre de la ruta al arrancar", () => {
    window.history.replaceState({}, "", "#/funcionario/Bruno%20Salas");
    const { result } = renderHook(() => usarNavegacion());
    expect(result.current.view).toBe("funcionario");
    expect(result.current.funcionarioVista).toBe("Bruno Salas");
  });

  it("una ruta de ficha sin nombre cae en la lista", () => {
    window.history.replaceState({}, "", "#/funcionario");
    const { result } = renderHook(() => usarNavegacion());
    expect(result.current.view).toBe("funcionarios");
    expect(result.current.funcionarioVista).toBe("");
  });

  it("responde a atrás y adelante del navegador", () => {
    window.history.replaceState({}, "", "#/funcionario/Ana");
    const { result } = renderHook(() => usarNavegacion());
    expect(result.current.funcionarioVista).toBe("Ana");
    act(() => {
      window.history.replaceState({}, "", "#/funcionario/Bruno");
      window.dispatchEvent(new Event("popstate"));
    });
    expect(result.current.funcionarioVista).toBe("Bruno");
  });

  it("no toca el historial si la ruta ya es la pedida", () => {
    const { result } = renderHook(() => usarNavegacion());
    const largo = window.history.length;
    act(() => result.current.navegar("dia"));
    expect(window.location.hash).toBe("#/dia/2026-07-10");
    expect(window.history.length).toBe(largo);
  });
});
