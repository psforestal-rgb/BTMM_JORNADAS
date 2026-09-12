/**
 * @vitest-environment jsdom
 */
import { afterEach, describe, expect, it, vi } from "vitest";
import { act, cleanup, render, waitFor } from "@testing-library/react";

const storage = vi.hoisted(() => ({ state: null }));

vi.mock("../../lib/storage.js", () => ({
  loadState: () => storage.state,
  loadStateAsync: async () => ({ state: storage.state, source: "indexeddb", migrated: false }),
  saveState: vi.fn(async () => ({ ok: true, ls: true, idb: true })),
  clearState: vi.fn(async () => ({ ok: true, ls: true, idb: true })),
  getLastSavedAt: () => null,
  getBackendInfo: () => ({ type: "indexeddb" }),
  getBackendInfoAsync: async () => ({ type: "indexeddb" }),
  SCHEMA_VERSION: 1,
}));

import { AppProvider, useApp } from "../AppContext.jsx";
import { ROLES_FUENTE_VERSION } from "../../data/seedRoles.js";

afterEach(() => {
  storage.state = null;
  cleanup();
  vi.clearAllMocks();
});

describe("AppContext — sincronización institucional de roles", () => {
  it("aplica la revisión nueva del mes de sincronización en adelante y conserva el pasado", async () => {
    storage.state = {
      personas: [{ id: "f1", nombre: "Diana Tencio" }],
      actividadesPlan: [],
      reposiciones: [],
      roleData: {
        "2026-8-Puesto Orosi-Errol Salazar-1": "T99",
        "2026-9-Puesto Orosi-Errol Salazar-15": "V3",
        "2026-7-Puesto Quetzales-Diana Tencio-13": "T99",
        "CFG-2026-8-Puesto Orosi-Errol Salazar": "12x6",
        "2026-8-Puesto Personal-Persona local-1": "T1",
      },
      reglas: {},
      migraciones: {
        limpiezaEnzoYSetDic2026: true,
        actividadesEjemploJul2026: true,
      },
    };

    let observado = null;
    function Probe() {
      observado = useApp();
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
      expect(observado.migraciones.rolesFuenteJulAgo2026).toBe(ROLES_FUENTE_VERSION);
    });
    // De setiembre (mes de la sincronización) en adelante manda el libro.
    expect(observado.roleData["2026-9-Puesto Orosi-Errol Salazar-15"]).toBe("L4");
    // Agosto y julio ya son pasado: manda lo que tuviera el aparato.
    expect(observado.roleData["2026-8-Puesto Orosi-Errol Salazar-1"]).toBe("T99");
    expect(observado.roleData["2026-7-Puesto Quetzales-Diana Tencio-13"]).toBe("T99");
    // Las claves CFG y las ajenas a la fuente no se tocan nunca.
    expect(observado.roleData["CFG-2026-8-Puesto Orosi-Errol Salazar"]).toBe("12x6");
    expect(observado.roleData["2026-8-Puesto Personal-Persona local-1"]).toBe("T1");
  });
});
