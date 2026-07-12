/**
 * @vitest-environment jsdom
 */
import "fake-indexeddb/auto";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { act, cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { useEffect } from "react";
import { AppProvider, useApp } from "../../../context/AppContext.jsx";
import Datos from "../Datos.jsx";

async function resetAll() {
  localStorage.clear();
}

beforeEach(resetAll);
afterEach(() => {
  cleanup();
  resetAll();
});

// jsdom no trae URL.createObjectURL; se captura el Blob exportado en
// lugar de simular la descarga real del navegador. Tampoco implementa
// Blob.prototype.text() ni la navegación real de un <a href="blob:...">
// click, así que se lee con FileReader y se ignora el error de navegación.
let ultimoBlob = null;
function leerBlobComoTexto(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsText(blob);
  });
}
beforeEach(() => {
  ultimoBlob = null;
  URL.createObjectURL = (blob) => {
    ultimoBlob = blob;
    return "blob:mock";
  };
  URL.revokeObjectURL = () => {};
});

// jsdom tampoco implementa Blob.prototype.text()/File.prototype.text()
// (sí existen en navegadores reales); Datos.jsx los usa para leer el
// archivo importado, así que se rellenan con FileReader para el test.
if (typeof Blob.prototype.text !== "function") {
  Blob.prototype.text = function () {
    return leerBlobComoTexto(this);
  };
}

describe("Datos — respaldo/restauración round-trip", () => {
  it("exportar conserva reglas no predeterminadas y restaurar las aplica de vuelta", async () => {
    let ctxRef = null;
    function Probe() {
      const ctx = useApp();
      ctxRef = ctx;
      useEffect(() => {
        ctx.setReglas({ diaCorteViaticos: 22, horasJornada: 12 });
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
      return null;
    }

    render(
      <AppProvider>
        <Probe />
        <Datos />
      </AppProvider>,
    );

    await waitFor(() => expect(ctxRef.reglas.diaCorteViaticos).toBe(22));

    // 1. Exportar: captura el Blob descargado.
    fireEvent.click(screen.getByText("Crear respaldo"));
    await waitFor(() => expect(ultimoBlob).not.toBeNull());
    const texto = await leerBlobComoTexto(ultimoBlob);
    const snapshot = JSON.parse(texto);
    expect(snapshot.state.reglas.diaCorteViaticos).toBe(22);
    expect(snapshot.state.reglas.horasJornada).toBe(12);

    // 2. Reiniciar a valores por defecto para simular pérdida de la config.
    await act(async () => {
      ctxRef.setReglas({ diaCorteViaticos: 15, horasJornada: 8 });
    });
    await waitFor(() => expect(ctxRef.reglas.diaCorteViaticos).toBe(15));

    // 3. Restaurar el respaldo exportado vía el input de archivo.
    const archivo = new File([texto], "respaldo.json", { type: "application/json" });
    const input = document.querySelector('input[type="file"]');
    await act(async () => {
      fireEvent.change(input, { target: { files: [archivo] } });
    });

    // El modal de confirmación debe abrir con el resumen del respaldo.
    await screen.findByText("Confirmar restauración");
    fireEvent.click(screen.getByText("Crear respaldo y restaurar"));

    // 4. Las reglas restauradas deben coincidir con las exportadas, no con
    // las que había justo antes de importar.
    await waitFor(() => {
      expect(ctxRef.reglas.diaCorteViaticos).toBe(22);
      expect(ctxRef.reglas.horasJornada).toBe(12);
    });
  });
});
