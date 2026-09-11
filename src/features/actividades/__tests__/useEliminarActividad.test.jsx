/**
 * @vitest-environment jsdom
 */
import { afterEach, describe, expect, it } from "vitest";
import { useState } from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { ToastProvider } from "../../../context/ToastContext.jsx";
import ToastViewport from "../../../ui/Toast.jsx";
import { useEliminarActividad } from "../useEliminarActividad.js";

afterEach(cleanup);

const INICIAL = [
  { id: "a1", titulo: "Patrullaje norte" },
  { id: "a2", titulo: "Charla educativa" },
  { id: "a3", titulo: "" },
];

function Banco() {
  const [actividades, setActividades] = useState(INICIAL);
  const eliminar = useEliminarActividad(actividades, setActividades);
  return (
    <div>
      <p data-testid="orden">{actividades.map((a) => a.id).join(",")}</p>
      {INICIAL.map((a) => (
        <button key={a.id} type="button" onClick={() => eliminar(a.id)}>
          {`borrar-${a.id}`}
        </button>
      ))}
      <button type="button" onClick={() => eliminar("inexistente")}>
        borrar-fantasma
      </button>
    </div>
  );
}

function renderBanco() {
  return render(
    <ToastProvider>
      <Banco />
      <ToastViewport />
    </ToastProvider>,
  );
}

describe("useEliminarActividad — borrado reversible", () => {
  it("elimina la actividad y anuncia el borrado por su título", () => {
    renderBanco();
    fireEvent.click(screen.getByRole("button", { name: "borrar-a2" }));
    expect(screen.getByTestId("orden").textContent).toBe("a1,a3");
    expect(screen.getByText("Se eliminó «Charla educativa»")).toBeDefined();
  });

  it("«Deshacer» la devuelve a su posición original, no al final", () => {
    renderBanco();
    fireEvent.click(screen.getByRole("button", { name: "borrar-a2" }));
    fireEvent.click(screen.getByRole("button", { name: "Deshacer" }));
    expect(screen.getByTestId("orden").textContent).toBe("a1,a2,a3");
    expect(screen.getByText("Se restauró «Charla educativa»")).toBeDefined();
  });

  it("conserva la primera posición al deshacer el borrado del primer elemento", () => {
    renderBanco();
    fireEvent.click(screen.getByRole("button", { name: "borrar-a1" }));
    fireEvent.click(screen.getByRole("button", { name: "Deshacer" }));
    expect(screen.getByTestId("orden").textContent).toBe("a1,a2,a3");
  });

  it("una actividad sin título se nombra con un texto de reserva", () => {
    renderBanco();
    fireEvent.click(screen.getByRole("button", { name: "borrar-a3" }));
    expect(screen.getByText("Se eliminó «actividad sin título»")).toBeDefined();
  });

  it("un id inexistente no borra nada ni genera aviso", () => {
    renderBanco();
    fireEvent.click(screen.getByRole("button", { name: "borrar-fantasma" }));
    expect(screen.getByTestId("orden").textContent).toBe("a1,a2,a3");
    expect(screen.queryAllByTestId("toast")).toHaveLength(0);
  });

  it("dos borrados seguidos se deshacen cada uno por su lado", () => {
    renderBanco();
    fireEvent.click(screen.getByRole("button", { name: "borrar-a1" }));
    fireEvent.click(screen.getByRole("button", { name: "borrar-a3" }));
    expect(screen.getByTestId("orden").textContent).toBe("a2");
    const deshacer = screen.getAllByRole("button", { name: "Deshacer" });
    expect(deshacer).toHaveLength(2);
    // El último aviso de la cola es el del borrado más reciente (a3).
    fireEvent.click(deshacer[1]);
    expect(screen.getByTestId("orden").textContent).toBe("a2,a3");
    fireEvent.click(screen.getByRole("button", { name: "Deshacer" }));
    expect(screen.getByTestId("orden").textContent).toBe("a1,a2,a3");
  });
});

describe("useEliminarActividad — advertencia de alcance", () => {
  it("el aviso recuerda que la actividad desaparece para todos los asignados", () => {
    renderBanco();
    fireEvent.click(screen.getByRole("button", { name: "borrar-a1" }));
    expect(screen.getByText(/Desaparece para todos los funcionarios asignados/)).toBeDefined();
  });
});
