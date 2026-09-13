/** @vitest-environment jsdom */
import "fake-indexeddb/auto";
import { afterEach, describe, expect, it, vi } from "vitest";
import { act, cleanup, render } from "@testing-library/react";
import { AppProvider } from "../../../context/AppContext.jsx";
import { ToastProvider } from "../../../context/ToastContext.jsx";
import { useGuardarFuncionario } from "../useGuardarFuncionario.js";

afterEach(() => {
  cleanup();
  localStorage.clear();
});

/**
 * Guardar una ficha es el único camino por el que se edita a una persona, así
 * que es donde tiene que registrarse un traslado. Si el cambio de puesto se
 * guardara como un campo más, el rol de los meses ya trabajados se movería de
 * puesto con él.
 */
function montarGuardado(personas) {
  const setPersonas = vi.fn();
  let guardar = null;
  function Probe() {
    guardar = useGuardarFuncionario(personas, setPersonas);
    return null;
  }
  render(
    <AppProvider>
      <ToastProvider>
        <Probe />
      </ToastProvider>
    </AppProvider>,
  );
  return { guardar: (...a) => guardar(...a), setPersonas };
}

/** La lista que `setPersonas` acabó dejando, resolviendo el actualizador. */
function resultado(setPersonas, previas) {
  const arg = setPersonas.mock.calls.at(-1)[0];
  return typeof arg === "function" ? arg(previas) : arg;
}

const ANA = {
  id: "f1",
  nombre: "Ana Mora",
  puestoOperativo: "Puesto Quetzales",
  historialPuestos: [{ puesto: "Puesto Quetzales", desde: "", hasta: null }],
};

describe("useGuardarFuncionario — el cambio de puesto es un traslado", () => {
  it("cierra el tramo anterior la víspera y abre el nuevo", async () => {
    const { guardar, setPersonas } = montarGuardado([ANA]);

    await act(async () => {
      guardar({ ...ANA, puestoOperativo: "Puesto Orosi", trasladoDesde: "2026-07-01" });
    });

    const [ficha] = resultado(setPersonas, [ANA]);
    expect(ficha.puestoOperativo).toBe("Puesto Orosi");
    expect(ficha.historialPuestos).toEqual([
      { puesto: "Puesto Quetzales", desde: "", hasta: "2026-06-30" },
      { puesto: "Puesto Orosi", desde: "2026-07-01", hasta: null },
    ]);
  });

  it("nunca guarda `trasladoDesde` dentro de la ficha", async () => {
    const { guardar, setPersonas } = montarGuardado([ANA]);

    await act(async () => {
      guardar({ ...ANA, puestoOperativo: "Puesto Orosi", trasladoDesde: "2026-07-01" });
    });

    const [ficha] = resultado(setPersonas, [ANA]);
    expect("trasladoDesde" in ficha).toBe(false);
  });

  it("editar otros campos sin tocar el puesto no ensucia el historial", async () => {
    const { guardar, setPersonas } = montarGuardado([ANA]);

    await act(async () => {
      guardar({ ...ANA, obs: "Nota nueva" });
    });

    const [ficha] = resultado(setPersonas, [ANA]);
    expect(ficha.historialPuestos).toEqual(ANA.historialPuestos);
    expect(ficha.obs).toBe("Nota nueva");
  });

  it("un alta arranca el historial en su fecha de ingreso", async () => {
    const { guardar, setPersonas } = montarGuardado([]);

    await act(async () => {
      guardar({
        id: "f9",
        nombre: "Diego Salazar",
        puestoOperativo: "Puesto Quetzales",
        ingreso: "2026-09-01",
      });
    });

    const [ficha] = resultado(setPersonas, []);
    expect(ficha.historialPuestos).toEqual([
      { puesto: "Puesto Quetzales", desde: "2026-09-01", hasta: null },
    ]);
  });

  it("un alta sin fecha de ingreso deja el historial abierto por el principio", async () => {
    const { guardar, setPersonas } = montarGuardado([]);

    await act(async () => {
      guardar({ id: "f9", nombre: "Sin Fecha", puestoOperativo: "Puesto Orosi" });
    });

    const [ficha] = resultado(setPersonas, []);
    expect(ficha.historialPuestos).toEqual([{ puesto: "Puesto Orosi", desde: "", hasta: null }]);
  });

  it("rechaza una ficha sin nombre", async () => {
    const { guardar, setPersonas } = montarGuardado([]);
    let devuelto = null;
    await act(async () => {
      devuelto = guardar({ id: "f9", nombre: "   ", puestoOperativo: "Puesto Orosi" });
    });
    expect(devuelto).toBe(false);
    expect(setPersonas).not.toHaveBeenCalled();
  });
});
