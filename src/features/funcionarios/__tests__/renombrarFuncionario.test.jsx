/** @vitest-environment jsdom */
import "fake-indexeddb/auto";
import { afterEach, describe, expect, it, vi } from "vitest";
import { act, cleanup, render, screen } from "@testing-library/react";
import { AppProvider, useApp } from "../../../context/AppContext.jsx";
import { ToastProvider } from "../../../context/ToastContext.jsx";
import ToastViewport from "../../../ui/Toast.jsx";
import { useGuardarFuncionario } from "../useGuardarFuncionario.js";
import { rolCfgKey, rolKey } from "../../../domain/roles.js";

afterEach(() => {
  cleanup();
  localStorage.clear();
});

/**
 * El arrastre de un cambio de nombre, montado de verdad.
 *
 * Las funciones de dominio ya tienen sus pruebas; estas comprueban lo otro, que
 * en este proyecto ya ha fallado dos veces: que el cascadeo esté ENCHUFADO al
 * estado real. Una función correcta a la que nadie llama deja exactamente el
 * mismo rastro que una función rota —ninguno—.
 */

const PUESTO = "Puesto Quetzales";

const ANA = {
  id: "f1",
  nombre: "Ana Mora",
  puestoOperativo: PUESTO,
  historialPuestos: [{ puesto: PUESTO, desde: "", hasta: null }],
};

function montar(personas) {
  const setPersonas = vi.fn();
  let guardar = null;
  let ctx = null;
  function Probe() {
    ctx = useApp();
    guardar = useGuardarFuncionario(personas, setPersonas);
    return null;
  }
  render(
    <AppProvider>
      <ToastProvider>
        <Probe />
        <ToastViewport />
      </ToastProvider>
    </AppProvider>,
  );
  return {
    guardar: (...a) => guardar(...a),
    setPersonas,
    ctx: () => ctx,
  };
}

async function sembrar(ctx, { roleData, actividadesPlan, reposiciones, funcionarioVista }) {
  await act(async () => {
    if (roleData) ctx().setRoleData(roleData);
    if (actividadesPlan) ctx().setActividadesPlan(actividadesPlan);
    if (reposiciones) ctx().setReposiciones(reposiciones);
    if (funcionarioVista) ctx().setFuncionarioVista(funcionarioVista);
  });
}

describe("renombrar a un funcionario desde el guardado de la ficha", () => {
  it("mueve las celdas de rol al nombre nuevo", async () => {
    const { guardar, ctx } = montar([ANA]);
    await sembrar(ctx, {
      roleData: {
        [rolKey(2026, 8, PUESTO, "Ana Mora", 15)]: "T3",
        [rolCfgKey(2026, 8, PUESTO, "Ana Mora")]: "10x5",
      },
    });

    await act(async () => {
      guardar({ ...ANA, nombre: "Ana Mora Jiménez" });
    });

    const rol = ctx().roleData;
    expect(rol[rolKey(2026, 8, PUESTO, "Ana Mora Jiménez", 15)]).toBe("T3");
    expect(rol[rolCfgKey(2026, 8, PUESTO, "Ana Mora Jiménez")]).toBe("10x5");
    expect(rol[rolKey(2026, 8, PUESTO, "Ana Mora", 15)]).toBeUndefined();
  });

  it("mueve sus actividades y sus reposiciones", async () => {
    const { guardar, ctx } = montar([ANA]);
    await sembrar(ctx, {
      actividadesPlan: [{ id: "a1", inicio: "2026-09-10", funcionarios: ["Ana Mora"] }],
      reposiciones: [{ id: "r1", funcionario: "Ana Mora", horas: 8 }],
    });

    await act(async () => {
      guardar({ ...ANA, nombre: "Ana Mora Jiménez" });
    });

    expect(ctx().actividadesPlan[0].funcionarios).toEqual(["Ana Mora Jiménez"]);
    expect(ctx().reposiciones[0].funcionario).toBe("Ana Mora Jiménez");
  });

  it("la ficha individual abierta sigue apuntando a la misma persona", async () => {
    const { guardar, ctx } = montar([ANA]);
    await sembrar(ctx, { funcionarioVista: "Ana Mora" });

    await act(async () => {
      guardar({ ...ANA, nombre: "Ana Mora Jiménez" });
    });

    // Sin esto, renombrar desde la propia ficha la deja diciendo «no existe»
    // sobre la persona que se acaba de guardar.
    expect(ctx().funcionarioVista).toBe("Ana Mora Jiménez");
  });

  it("no toca la ficha abierta si es la de otra persona", async () => {
    const { guardar, ctx } = montar([ANA]);
    await sembrar(ctx, { funcionarioVista: "Errol Salazar" });

    await act(async () => {
      guardar({ ...ANA, nombre: "Ana Mora Jiménez" });
    });

    expect(ctx().funcionarioVista).toBe("Errol Salazar");
  });

  it("editar sin cambiar el nombre no mueve ni una celda", async () => {
    const { guardar, ctx } = montar([ANA]);
    const semilla = { [rolKey(2026, 8, PUESTO, "Ana Mora", 15)]: "T3" };
    await sembrar(ctx, { roleData: semilla });

    await act(async () => {
      guardar({ ...ANA, obs: "Nota" });
    });

    expect(ctx().roleData).toEqual(semilla);
  });

  it("rechaza el renombre que choca con otra ficha, sin tocar nada", async () => {
    const otra = { id: "f2", nombre: "Errol Salazar", puestoOperativo: PUESTO };
    const { guardar, setPersonas, ctx } = montar([ANA, otra]);
    const semilla = { [rolKey(2026, 8, PUESTO, "Ana Mora", 15)]: "T3" };
    await sembrar(ctx, { roleData: semilla });

    let devuelto = null;
    await act(async () => {
      devuelto = guardar({ ...ANA, nombre: "errol salazar" });
    });

    /* Dos fichas con el mismo nombre compartirían literalmente las mismas
       claves de `roleData`: no es un dato incómodo, es fusionar el rol de dos
       personas. */
    expect(devuelto).toBe(false);
    expect(setPersonas).not.toHaveBeenCalled();
    expect(ctx().roleData).toEqual(semilla);
  });

  it("un alta con un nombre que ya existe se guarda, pero avisa", async () => {
    /* Dos guardaparques pueden llamarse igual de verdad. Negarse a registrar a
       alguien que existe sería perder función; lo que no puede es callarse que
       compartirán las mismas celdas de rol. */
    const { guardar, setPersonas } = montar([ANA]);
    let devuelto = null;
    await act(async () => {
      devuelto = guardar({ id: "f9", nombre: "Ana Mora", puestoOperativo: PUESTO });
    });
    expect(devuelto).toBe(true);
    expect(setPersonas).toHaveBeenCalled();
    expect(screen.getByText(/compartirán las mismas celdas/)).toBeTruthy();
  });

  it("un alta con un nombre libre no avisa de nada raro", async () => {
    const { guardar } = montar([ANA]);
    await act(async () => {
      guardar({ id: "f9", nombre: "Karen Valle", puestoOperativo: PUESTO });
    });
    expect(screen.queryByText(/compartirán las mismas celdas/)).toBeNull();
  });

  it("dos homónimas ya guardadas se pueden seguir editando", async () => {
    // Si la comprobación se hiciera siempre, un choque heredado quedaría
    // imposible de arreglar: no se podría ni renombrar a una de las dos.
    const gemela = { id: "f2", nombre: "Ana Mora", puestoOperativo: PUESTO };
    const { guardar, setPersonas } = montar([ANA, gemela]);
    let devuelto = null;
    await act(async () => {
      devuelto = guardar({ ...gemela, obs: "Nota" });
    });
    expect(devuelto).toBe(true);
    expect(setPersonas).toHaveBeenCalled();
  });

  it("el rastro de cambios conserva el nombre de cada momento", async () => {
    const { guardar, ctx } = montar([ANA]);

    await act(async () => {
      guardar({ ...ANA, nombre: "Ana Mora Jiménez" });
    });

    const entrada = ctx().historial[0];
    // La entrada queda a nombre NUEVO y guarda el cambio: ese es el enlace
    // entre los dos nombres. Reescribir el rastro entero sería falsear una
    // auditoría.
    expect(entrada.funcionario.nombre).toBe("Ana Mora Jiménez");
    expect(entrada.cambios.some((c) => c.campo === "nombre")).toBe(true);
  });
});
