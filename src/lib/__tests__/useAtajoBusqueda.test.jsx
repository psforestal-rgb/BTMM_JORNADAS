/**
 * @vitest-environment jsdom
 */
import { useRef } from "react";
import { afterEach, describe, expect, it } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { useAtajoBusqueda } from "../useAtajoBusqueda.js";

function Vista({ dentroDeDetails = false } = {}) {
  const ref = useRef(null);
  useAtajoBusqueda(ref);
  const campo = <input ref={ref} aria-label="Buscar" defaultValue="ana" />;
  return (
    <div>
      <input aria-label="Otro campo" />
      <button type="button">Un botón</button>
      {dentroDeDetails ? (
        <details>
          <summary>Filtros</summary>
          {campo}
        </details>
      ) : (
        campo
      )}
    </div>
  );
}

afterEach(cleanup);

describe("atajo «/» para buscar", () => {
  it("lleva el foco al buscador y selecciona lo que hubiera", () => {
    render(<Vista />);
    const buscador = screen.getByLabelText("Buscar");
    expect(document.activeElement).not.toBe(buscador);
    fireEvent.keyDown(document, { key: "/" });
    expect(document.activeElement).toBe(buscador);
    // Seleccionado: escribir encima no obliga a borrar antes.
    expect(buscador.selectionStart).toBe(0);
    expect(buscador.selectionEnd).toBe("ana".length);
  });

  it("no se dispara mientras se escribe en otro campo", () => {
    render(<Vista />);
    const otro = screen.getByLabelText("Otro campo");
    otro.focus();
    fireEvent.keyDown(otro, { key: "/" });
    // La barra ahí es un carácter, no un atajo.
    expect(document.activeElement).toBe(otro);
  });

  it("no se dispara con Ctrl, Alt o Meta: no le roba `Ctrl+F` al navegador", () => {
    render(<Vista />);
    const buscador = screen.getByLabelText("Buscar");
    for (const mod of [{ ctrlKey: true }, { metaKey: true }, { altKey: true }]) {
      fireEvent.keyDown(document, { key: "/", ...mod });
      expect(document.activeElement).not.toBe(buscador);
    }
  });

  it("abre el bloque plegado antes de enfocar", () => {
    const { container } = render(<Vista dentroDeDetails />);
    const plegable = container.querySelector("details");
    expect(plegable.open).toBe(false);
    fireEvent.keyDown(document, { key: "/" });
    expect(plegable.open).toBe(true);
    expect(document.activeElement).toBe(screen.getByLabelText("Buscar"));
  });

  it("deja de escuchar al desmontarse", () => {
    const { unmount } = render(<Vista />);
    const buscador = screen.getByLabelText("Buscar");
    unmount();
    fireEvent.keyDown(document, { key: "/" });
    expect(document.activeElement).not.toBe(buscador);
  });
});
