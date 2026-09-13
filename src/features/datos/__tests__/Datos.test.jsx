/**
 * @vitest-environment jsdom
 */
import "fake-indexeddb/auto";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { act, cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { useEffect } from "react";
import { AppProvider, useApp } from "../../../context/AppContext.jsx";
import { ToastProvider } from "../../../context/ToastContext.jsx";
import ToastViewport from "../../../ui/Toast.jsx";
import { crearEntrada, TIPO } from "../../../domain/historial.js";
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
        <ToastProvider>
          <Probe />
          <Datos />
        </ToastProvider>
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

  // Regresión: `REPLACE_STATE` parte de `seedState`, de modo que toda clave que
  // `aplicarImport` no pase VUELVE A LA SEMILLA en vez de conservarse. `puestos`
  // e `historial` sí viajaban dentro del archivo (los guarda `crearRespaldo`
  // desde 3971d2a) pero no se restauraban: restaurar un respaldo borraba los
  // puestos editados y el rastro de auditoría completo.
  it("restaurar devuelve los puestos editados y el rastro de cambios que traía el archivo", async () => {
    let ctxRef = null;
    function Probe() {
      const ctx = useApp();
      ctxRef = ctx;
      useEffect(() => {
        ctx.setPuestos([
          ...ctx.puestos,
          { nombre: "Puesto Cerro Buenavista", tag: "CB", color: "bg-violet-100 text-violet-950" },
        ]);
        ctx.registrarCambio(
          crearEntrada({
            tipo: TIPO.ALTA,
            funcionario: { nombre: "Persona De Prueba", cedula: "1-1111-1111" },
            fecha: "2026-09-12T10:00:00.000Z",
          }),
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
      return null;
    }

    render(
      <AppProvider>
        <ToastProvider>
          <Probe />
          <Datos />
        </ToastProvider>
      </AppProvider>,
    );

    // Tres vigentes más Villa Mills, que se conserva como histórico.
    const puestosOriginales = 4;
    await waitFor(() => {
      expect(ctxRef.puestos).toHaveLength(puestosOriginales + 1);
      expect(ctxRef.historial).toHaveLength(1);
    });

    // 1. Exportar: el archivo tiene que llevar ambas cosas dentro.
    fireEvent.click(screen.getByText("Crear respaldo"));
    await waitFor(() => expect(ultimoBlob).not.toBeNull());
    const texto = await leerBlobComoTexto(ultimoBlob);
    const snapshot = JSON.parse(texto);
    expect(snapshot.state.puestos.map((p) => p.nombre)).toContain("Puesto Cerro Buenavista");
    expect(snapshot.state.historial).toHaveLength(1);

    // 2. Perder ambas cosas, como si otra persona hubiera tocado el aparato.
    await act(async () => {
      ctxRef.setPuestos([{ nombre: "Puesto Único", tag: "UN", color: "bg-slate-200 text-slate-900" }]);
    });
    await waitFor(() => expect(ctxRef.puestos).toHaveLength(1));

    // 3. Restaurar el archivo exportado.
    const archivo = new File([texto], "respaldo.json", { type: "application/json" });
    const input = document.querySelector('input[type="file"]');
    await act(async () => {
      fireEvent.change(input, { target: { files: [archivo] } });
    });
    await screen.findByText("Confirmar restauración");
    fireEvent.click(screen.getByText("Crear respaldo y restaurar"));

    // 4. Vuelven los cuatro puestos del archivo y la entrada del rastro; no la
    //    semilla de tres puestos ni un rastro vacío.
    await waitFor(() => {
      expect(ctxRef.puestos).toHaveLength(puestosOriginales + 1);
      expect(ctxRef.puestos.map((p) => p.nombre)).toContain("Puesto Cerro Buenavista");
      expect(ctxRef.historial).toHaveLength(1);
      expect(ctxRef.historial[0].funcionario.nombre).toBe("Persona De Prueba");
    });
  });

  // La copia preventiva es la única vuelta atrás de una restauración, y el
  // modal la promete por escrito. Si el navegador bloquea la descarga,
  // restaurar igual dejaría los datos actuales sin salvaguarda.
  it("si la copia preventiva no se puede descargar, NO restaura nada", async () => {
    let ctxRef = null;
    function Probe() {
      ctxRef = useApp();
      return null;
    }

    render(
      <AppProvider>
        <ToastProvider>
          <Probe />
          <Datos />
          <ToastViewport />
        </ToastProvider>
      </AppProvider>,
    );

    await waitFor(() => expect(ctxRef).not.toBeNull());
    const reglasAntes = { ...ctxRef.reglas };

    const snapshot = JSON.stringify({
      schemaVersion: ctxRef.schemaVersion,
      state: { reglas: { ...reglasAntes, diaCorteViaticos: 28 } },
    });
    const archivo = new File([snapshot], "respaldo.json", { type: "application/json" });
    const input = document.querySelector('input[type="file"]');
    await act(async () => {
      fireEvent.change(input, { target: { files: [archivo] } });
    });
    await screen.findByText("Confirmar restauración");

    // A partir de aquí el navegador no deja descargar nada.
    URL.createObjectURL = () => {
      throw new Error("descargas bloqueadas");
    };
    fireEvent.click(screen.getByText("Crear respaldo y restaurar"));

    await screen.findByText(/NO se restauró nada/);
    expect(ctxRef.reglas.diaCorteViaticos).toBe(reglasAntes.diaCorteViaticos);
    expect(screen.queryByText("Confirmar restauración")).toBeNull();
  });
});
