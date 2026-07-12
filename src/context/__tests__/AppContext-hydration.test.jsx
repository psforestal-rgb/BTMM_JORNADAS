/**
 * @vitest-environment jsdom
 *
 * Tests de regresión para los issues identificados en la revisión de PR #19:
 *  - P1: validar schemaVersion al migrar desde localStorage (cubierto en
 *    db.test.js, pero aquí verificamos el flujo end-to-end del provider).
 *  - P2: la hidratación async no debe sobrescribir ediciones del usuario.
 */
import "fake-indexeddb/auto";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { act, render, waitFor } from "@testing-library/react";
import { useEffect } from "react";
import { AppProvider, useApp } from "../AppContext.jsx";
import { __INTERNALS__, saveToDexie, getDb } from "../../lib/db.js";

async function resetAll() {
  __INTERNALS__.resetSingleton();
  try {
    const db = await getDb();
    if (db) await db.delete();
  } catch { /* ignorar */ }
  __INTERNALS__.resetSingleton();
  localStorage.clear();
}

beforeEach(resetAll);
afterEach(resetAll);

describe("AppContext — hidratación async desde Dexie", () => {
  it("no sobrescribe ediciones del usuario hechas durante la hidratación", async () => {
    // Sembrar Dexie con un snapshot que SERÍA aplicado si la edición no
    // hubiera ocurrido. La edición del usuario debe ganar.
    await saveToDexie({
      personas: [{ id: "f-dexie", nombre: "Sembrado en Dexie" }],
      actividadesPlan: [],
      roleData: {},
      reglas: {},
    });

    let observedNombres = null;
    function Probe() {
      const ctx = useApp();
      // Forzamos una edición justo después del primer render, simulando
      // que el usuario tipea algo antes de que loadStateAsync resuelva.
      useEffect(() => {
        ctx.setPersonas([{ id: "f-edicion", nombre: "Edición del usuario" }]);
      }, []);
      observedNombres = ctx.personas.map((p) => p.nombre);
      return null;
    }

    await act(async () => {
      render(
        <AppProvider>
          <Probe />
        </AppProvider>,
      );
    });

    // Esperar a que la hidratación async termine (se acomoda el flag).
    await waitFor(() => {
      // Por si la hidratación todavía no resolvió, damos otro ciclo.
      expect(observedNombres).toBeTruthy();
    });

    // El nombre que debe quedar es el de la EDICIÓN del usuario, no el
    // sembrado en Dexie. Esto verifica que P2 está corregido.
    expect(observedNombres).toEqual(["Edición del usuario"]);
  });

  it("aplica el snapshot de Dexie si el usuario no editó nada", async () => {
    await saveToDexie({
      personas: [
        { id: "f-dexie", nombre: "Sembrado en Dexie" },
        { id: "f-enzo", nombre: "Enzo Martini" },
      ],
      actividadesPlan: [],
      roleData: {
        "2026-5-Puesto Orosi-Errol Salazar-1": "T99",
        "2026-9-Puesto Orosi-Errol Salazar-1": "T1",
        "2026-8-Puesto Orosi-Enzo Martini-1": "T6",
      },
      reglas: {},
    });

    let observedNombres = null;
    let observedRoleData = null;
    function Probe() {
      const ctx = useApp();
      observedNombres = ctx.personas.map((p) => p.nombre);
      observedRoleData = ctx.roleData;
      return null;
    }

    await act(async () => {
      render(
        <AppProvider>
          <Probe />
        </AppProvider>,
      );
    });

    // La hidratación async debe aplicar el snapshot de Dexie.
    await waitFor(() => {
      expect(observedNombres).toContain("Sembrado en Dexie");
      expect(observedNombres).not.toContain("Enzo Martini");
    });
    expect(observedRoleData["2026-5-Puesto Orosi-Errol Salazar-1"]).toBe("T99");
    expect(observedRoleData["2026-5-Puesto Orosi-Errol Salazar-2"]).toBe("T11");
    expect(observedRoleData["2026-9-Puesto Orosi-Errol Salazar-1"]).toBe("");
    expect(observedRoleData["2026-8-Puesto Orosi-Enzo Martini-1"]).toBeUndefined();
  });

  it("una vez aplicada la migración de limpieza, NO vuelve a borrar ediciones de setiembre-diciembre 2026", async () => {
    // Simula un snapshot que YA pasó por la migración una vez (tiene la
    // marca) y que además tiene una edición real del usuario en un día de
    // setiembre 2026 — el escenario que el bug original destruía en cada
    // carga.
    await saveToDexie({
      personas: [{ id: "f1", nombre: "Errol Salazar" }],
      actividadesPlan: [],
      roleData: {
        "2026-9-Puesto Orosi-Errol Salazar-15": "V3",
      },
      reglas: {},
      migraciones: { limpiezaEnzoYSetDic2026: true },
    });

    let observedRoleData = null;
    function Probe() {
      const ctx = useApp();
      observedRoleData = ctx.roleData;
      return null;
    }

    await act(async () => {
      render(
        <AppProvider>
          <Probe />
        </AppProvider>,
      );
    });

    await waitFor(() => {
      expect(observedRoleData).toBeTruthy();
      expect(observedRoleData["2026-9-Puesto Orosi-Errol Salazar-15"]).toBe("V3");
    });
  });
});
