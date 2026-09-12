/**
 * @vitest-environment jsdom
 */
import "fake-indexeddb/auto";
import { useEffect } from "react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { act, cleanup, render, renderHook } from "@testing-library/react";
import { AppProvider, useApp } from "../../context/AppContext.jsx";
import { useFiltrosDeVista } from "../useFiltrosDeVista.js";

const DEFECTOS = { q: "", filtro: "todos", orden: "nombre" };

function envoltura({ children }) {
  return <AppProvider>{children}</AppProvider>;
}

beforeEach(() => {
  sessionStorage.clear();
});

afterEach(() => {
  cleanup();
  sessionStorage.clear();
  localStorage.clear();
});

describe("useFiltrosDeVista", () => {
  it("arranca con los valores por defecto y sin ensuciar el estado", () => {
    const { result } = renderHook(() => useFiltrosDeVista("funcionarios", DEFECTOS), { wrapper: envoltura });
    expect(result.current.valores).toEqual(DEFECTOS);
    expect(result.current.hayFiltros).toBe(false);
  });

  it("guarda lo que se aparta del valor por defecto", () => {
    const { result } = renderHook(() => useFiltrosDeVista("funcionarios", DEFECTOS), { wrapper: envoltura });
    act(() => result.current.poner("filtro", "guardas"));
    expect(result.current.valores.filtro).toBe("guardas");
    expect(result.current.hayFiltros).toBe(true);
  });

  it("volver al valor por defecto quita el filtro en vez de fijarlo", () => {
    const { result } = renderHook(() => useFiltrosDeVista("funcionarios", DEFECTOS), { wrapper: envoltura });
    act(() => result.current.poner("orden", "puesto"));
    act(() => result.current.poner("orden", "nombre"));
    // Si se guardara, el enlace arrastraría `orden=nombre`, que ya es el normal.
    expect(result.current.hayFiltros).toBe(false);
    expect(result.current.valores.orden).toBe("nombre");
  });

  it("una búsqueda vacía tampoco es un filtro", () => {
    const { result } = renderHook(() => useFiltrosDeVista("funcionarios", DEFECTOS), { wrapper: envoltura });
    act(() => result.current.poner("q", "mora"));
    expect(result.current.hayFiltros).toBe(true);
    act(() => result.current.poner("q", ""));
    expect(result.current.hayFiltros).toBe(false);
  });

  it("limpiar los deja todos en su valor por defecto", () => {
    const { result } = renderHook(() => useFiltrosDeVista("funcionarios", DEFECTOS), { wrapper: envoltura });
    act(() => result.current.poner("filtro", "ong"));
    act(() => result.current.poner("orden", "estado"));
    act(() => result.current.limpiar());
    expect(result.current.valores).toEqual(DEFECTOS);
    expect(result.current.hayFiltros).toBe(false);
  });

  it("los recupera de la sesión al volver a montar", () => {
    const primera = renderHook(() => useFiltrosDeVista("funcionarios", DEFECTOS), { wrapper: envoltura });
    act(() => primera.result.current.poner("filtro", "acum"));
    primera.unmount();
    const segunda = renderHook(() => useFiltrosDeVista("funcionarios", DEFECTOS), { wrapper: envoltura });
    expect(segunda.result.current.valores.filtro).toBe("acum");
  });

  it("lo que traiga la ruta manda sobre lo guardado en la sesión", () => {
    sessionStorage.setItem("btmm:filtros:funcionarios", JSON.stringify({ filtro: "acum" }));
    /* Reproduce el orden real de la aplicación: la vista es hija y siembra
       desde la sesión en su efecto; la navegación es el padre y aplica lo que
       trae la ruta en el suyo. React ejecuta los efectos de los hijos ANTES que
       los del padre, así que la ruta escribe la última y gana. Si algún día se
       invierte ese orden, esta prueba lo dice. */
    const visto = {};
    function Vista() {
      visto.valores = useFiltrosDeVista("funcionarios", DEFECTOS).valores;
      return null;
    }
    function ComoLaNavegacion({ children }) {
      const { setFiltrosVista } = useApp();
      useEffect(() => {
        setFiltrosVista("funcionarios", { filtro: "ong" });
      }, [setFiltrosVista]);
      return children;
    }
    render(
      <AppProvider>
        <ComoLaNavegacion><Vista /></ComoLaNavegacion>
      </AppProvider>,
    );
    expect(visto.valores.filtro).toBe("ong");
  });

  it("cada vista tiene los suyos", () => {
    const funcionarios = renderHook(() => useFiltrosDeVista("funcionarios", DEFECTOS), { wrapper: envoltura });
    act(() => funcionarios.result.current.poner("filtro", "guardas"));
    const planificacion = renderHook(() => useFiltrosDeVista("planificacion", { viatico: "todos" }), { wrapper: envoltura });
    expect(planificacion.result.current.valores).toEqual({ viatico: "todos" });
    expect(planificacion.result.current.hayFiltros).toBe(false);
  });
});
