/**
 * @vitest-environment jsdom
 */
import "fake-indexeddb/auto";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { AppProvider } from "../../../context/AppContext.jsx";
import { ToastProvider } from "../../../context/ToastContext.jsx";
import ToastViewport from "../../../ui/Toast.jsx";
import Datos from "../Datos.jsx";
import {
  getDb,
  guardarRespaldoDeMigracion,
  listarRespaldosDeMigracion,
  MOTIVO_RESPALDO,
  __INTERNALS__,
} from "../../../lib/db.js";

/**
 * A2 desde la vista: un respaldo automático que nadie puede ver ni sacar del
 * aparato no sirve de nada. Se monta el árbol real (AppProvider + ToastProvider
 * + Datos), no el componente suelto.
 */

let ultimoBlob = null;
function leerBlobComoTexto(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsText(blob);
  });
}

beforeEach(async () => {
  __INTERNALS__.resetSingleton();
  try {
    const db = await getDb();
    if (db) await db.delete();
  } catch { /* ignorar */ }
  __INTERNALS__.resetSingleton();
  localStorage.clear();
  ultimoBlob = null;
  URL.createObjectURL = (blob) => {
    ultimoBlob = blob;
    return "blob:mock";
  };
  URL.revokeObjectURL = () => {};
});

afterEach(() => {
  cleanup();
  localStorage.clear();
});

function montar() {
  return render(
    <AppProvider>
      <ToastProvider>
        <Datos />
        {/* Mismo montaje que App.jsx: el viewport es hermano de la vista. */}
        <ToastViewport />
      </ToastProvider>
    </AppProvider>,
  );
}

const PAYLOAD = { personas: [{ id: "f1", nombre: "Ana Mora" }] };

async function sembrarRespaldo() {
  await guardarRespaldoDeMigracion({
    motivo: MOTIVO_RESPALDO.ESQUEMA_INCOMPATIBLE,
    origen: "indexeddb",
    schemaVersion: 7,
    savedAt: "2026-03-01T12:00:00.000Z",
    payload: PAYLOAD,
  });
}

describe("Datos — respaldos automáticos", () => {
  it("dice que no hay ninguno cuando el formato nunca cambió", async () => {
    montar();
    expect(await screen.findByText(/No hay ninguno/)).toBeTruthy();
  });

  it("muestra el respaldo con su motivo, su fecha y su tamaño", async () => {
    await sembrarRespaldo();
    montar();
    expect(await screen.findByText("El formato guardado era de otra versión")).toBeTruthy();
    expect(screen.getByText(/esquema v7/)).toBeTruthy();
    expect(screen.getByText(/KB/)).toBeTruthy();
  });

  it("descargar entrega el contenido íntegro, declarado con su propia versión", async () => {
    await sembrarRespaldo();
    montar();
    fireEvent.click(await screen.findByText("Descargar"));
    await waitFor(() => expect(ultimoBlob).not.toBeNull());
    const snapshot = JSON.parse(await leerBlobComoTexto(ultimoBlob));
    expect(snapshot.schemaVersion).toBe(7);
    expect(snapshot.state).toEqual(PAYLOAD);
  });

  it("eliminar es reversible: «Deshacer» devuelve el respaldo", async () => {
    await sembrarRespaldo();
    montar();
    fireEvent.click(await screen.findByText("Eliminar"));

    await screen.findByText("Respaldo automático eliminado.");
    await waitFor(async () => expect(await listarRespaldosDeMigracion()).toHaveLength(0));
    expect(await screen.findByText(/No hay ninguno/)).toBeTruthy();

    fireEvent.click(screen.getByText("Deshacer"));
    await waitFor(async () => expect(await listarRespaldosDeMigracion()).toHaveLength(1));
    expect(await screen.findByText("El formato guardado era de otra versión")).toBeTruthy();
  });
});
