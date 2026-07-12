/**
 * @vitest-environment jsdom
 *
 * Tests de regresión para la Fase 5 paso 2 (revisión monotónica +
 * coordinación LS/IndexedDB, flush en pagehide/visibilitychange):
 * verifican que un cambio recién hecho por el usuario no se pierda si
 * la pestaña se oculta o cierra ANTES de que el debounce de 500ms
 * dispare por sí solo.
 */
import "fake-indexeddb/auto";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { act, render, waitFor } from "@testing-library/react";
import { AppProvider, useApp } from "../AppContext.jsx";
import { __INTERNALS__, getDb } from "../../lib/db.js";
import { STORAGE_KEY, __resetRevisionParaTests } from "../../lib/storage.js";

async function resetAll() {
  __INTERNALS__.resetSingleton();
  try {
    const db = await getDb();
    if (db) await db.delete();
  } catch { /* ignorar */ }
  __INTERNALS__.resetSingleton();
  __resetRevisionParaTests();
  localStorage.clear();
}

function setVisibility(value) {
  Object.defineProperty(document, "visibilityState", { value, configurable: true });
}

beforeEach(resetAll);
afterEach(() => {
  setVisibility("visible");
  return resetAll();
});

describe("AppContext — flush inmediato al ocultar/cerrar la pestaña", () => {
  it("pagehide fuerza el guardado sin esperar el debounce de 500ms", async () => {
    let ctxRef = null;
    function Probe() {
      const ctx = useApp();
      ctxRef = ctx;
      return null;
    }

    await act(async () => {
      render(
        <AppProvider>
          <Probe />
        </AppProvider>,
      );
    });

    await act(async () => {
      ctxRef.setPersonas([{ id: "f-flush", nombre: "Flush pagehide" }]);
    });

    // Antes de que el timer de 500ms dispare, simular que la pestaña se
    // oculta/cierra. El listener de pagehide debe cancelar el timer y
    // guardar de inmediato.
    await act(async () => {
      window.dispatchEvent(new Event("pagehide"));
    });

    await waitFor(() => {
      const raw = localStorage.getItem(STORAGE_KEY);
      expect(raw).toBeTruthy();
      const parsed = JSON.parse(raw);
      expect(parsed.state.personas).toEqual([{ id: "f-flush", nombre: "Flush pagehide" }]);
    });
  });

  it("visibilitychange a 'hidden' fuerza el guardado sin esperar el debounce", async () => {
    let ctxRef = null;
    function Probe() {
      const ctx = useApp();
      ctxRef = ctx;
      return null;
    }

    await act(async () => {
      render(
        <AppProvider>
          <Probe />
        </AppProvider>,
      );
    });

    await act(async () => {
      ctxRef.setPersonas([{ id: "f-visch", nombre: "Flush visibilitychange" }]);
    });

    await act(async () => {
      setVisibility("hidden");
      document.dispatchEvent(new Event("visibilitychange"));
    });

    await waitFor(() => {
      const raw = localStorage.getItem(STORAGE_KEY);
      expect(raw).toBeTruthy();
      const parsed = JSON.parse(raw);
      expect(parsed.state.personas).toEqual([{ id: "f-visch", nombre: "Flush visibilitychange" }]);
    });
  });

  it("visibilitychange a 'visible' NO dispara guardado anticipado", async () => {
    let ctxRef = null;
    function Probe() {
      const ctx = useApp();
      ctxRef = ctx;
      return null;
    }

    await act(async () => {
      render(
        <AppProvider>
          <Probe />
        </AppProvider>,
      );
    });

    await act(async () => {
      ctxRef.setPersonas([{ id: "f-nofluh", nombre: "No debe guardar aún" }]);
    });

    await act(async () => {
      setVisibility("visible");
      document.dispatchEvent(new Event("visibilitychange"));
    });

    // Sin el flush por ocultamiento, el guardado sigue en la cola de
    // debounce (pendingChanges > 0) hasta que pase el timeout normal.
    expect(ctxRef.pendingChanges).toBeGreaterThan(0);
  });
});
