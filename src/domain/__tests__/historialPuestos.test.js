import { describe, expect, it } from "vitest";
import {
  cerrarHistorial,
  estabaEnMes,
  finDeMes,
  inicioDeMes,
  normalizarFuncionario,
  normalizarHistorial,
  puestoActual,
  puestoEnFecha,
  puestoEnMes,
  tramoCubre,
  trasladar,
  validarHistorial,
} from "../historialPuestos.js";

const CON_HISTORIAL = {
  nombre: "Laura Valverde",
  puestoOperativo: "Puesto Orosi",
  historialPuestos: [
    { puesto: "Puesto Quetzales", desde: "", hasta: "2026-06-30" },
    { puesto: "Puesto Orosi", desde: "2026-07-01", hasta: null },
  ],
};

describe("normalizarHistorial", () => {
  it("construye el historial de una ficha antigua con su puesto de siempre", () => {
    expect(normalizarHistorial({ puestoOperativo: "Puesto Orosi" })).toEqual([
      { puesto: "Puesto Orosi", desde: "", hasta: null },
    ]);
  });

  it("una ficha sin puesto ni historial no inventa ninguno", () => {
    expect(normalizarHistorial({})).toEqual([]);
    expect(normalizarHistorial(null)).toEqual([]);
  });

  it("ordena los tramos y deja el abierto con hasta en null", () => {
    const f = {
      historialPuestos: [
        { puesto: "Puesto Orosi", desde: "2026-07-01" },
        { puesto: "Puesto Quetzales", desde: "", hasta: "2026-06-30" },
      ],
    };
    expect(normalizarHistorial(f).map((t) => t.puesto)).toEqual([
      "Puesto Quetzales",
      "Puesto Orosi",
    ]);
    expect(normalizarHistorial(f)[1].hasta).toBeNull();
  });

  it("descarta tramos sin puesto y fechas que no son ISO", () => {
    const f = {
      historialPuestos: [
        { puesto: "  ", desde: "2026-01-01" },
        { puesto: "Puesto Orosi", desde: "el año pasado", hasta: "cuando sea" },
      ],
    };
    expect(normalizarHistorial(f)).toEqual([{ puesto: "Puesto Orosi", desde: "", hasta: null }]);
  });

  it("conserva el motivo cuando lo trae", () => {
    const f = { historialPuestos: [{ puesto: "Puesto Orosi", desde: "", hasta: null, motivo: "Traslado" }] };
    expect(normalizarHistorial(f)[0].motivo).toBe("Traslado");
  });
});

describe("tramoCubre", () => {
  it("un extremo vacío deja ese lado abierto", () => {
    expect(tramoCubre({ desde: "", hasta: "2026-06-30" }, "2020-01-01")).toBe(true);
    expect(tramoCubre({ desde: "2026-07-01", hasta: null }, "2030-01-01")).toBe(true);
  });

  it("los bordes se incluyen", () => {
    const t = { desde: "2026-07-01", hasta: "2026-07-31" };
    expect(tramoCubre(t, "2026-07-01")).toBe(true);
    expect(tramoCubre(t, "2026-07-31")).toBe(true);
    expect(tramoCubre(t, "2026-06-30")).toBe(false);
    expect(tramoCubre(t, "2026-08-01")).toBe(false);
  });
});

describe("puestoEnFecha", () => {
  it("devuelve el puesto del tramo que cubre esa fecha", () => {
    expect(puestoEnFecha(CON_HISTORIAL, "2026-03-15")).toBe("Puesto Quetzales");
    expect(puestoEnFecha(CON_HISTORIAL, "2026-06-30")).toBe("Puesto Quetzales");
    expect(puestoEnFecha(CON_HISTORIAL, "2026-07-01")).toBe("Puesto Orosi");
  });

  it("devuelve vacío cuando la persona ya no estaba", () => {
    const salida = cerrarHistorial(CON_HISTORIAL, "2026-08-31");
    expect(puestoEnFecha(salida, "2026-09-01")).toBe("");
  });
});

describe("puestoEnMes", () => {
  it("agrupa el mes donde la persona terminó, si el traslado cayó a mitad", () => {
    const f = {
      historialPuestos: [
        { puesto: "Puesto Quetzales", desde: "", hasta: "2026-07-14" },
        { puesto: "Puesto Orosi", desde: "2026-07-15", hasta: null },
      ],
    };
    expect(puestoEnMes(f, 2026, 7)).toBe("Puesto Orosi");
    expect(puestoEnMes(f, 2026, 6)).toBe("Puesto Quetzales");
    expect(puestoEnMes(f, 2026, 8)).toBe("Puesto Orosi");
  });

  it("devuelve vacío en los meses anteriores al ingreso y posteriores a la salida", () => {
    const f = {
      historialPuestos: [{ puesto: "Puesto Quetzales", desde: "2026-09-01", hasta: "2026-10-31" }],
    };
    expect(puestoEnMes(f, 2026, 8)).toBe("");
    expect(puestoEnMes(f, 2026, 9)).toBe("Puesto Quetzales");
    expect(puestoEnMes(f, 2026, 10)).toBe("Puesto Quetzales");
    expect(puestoEnMes(f, 2026, 11)).toBe("");
    expect(estabaEnMes(f, 2026, 11)).toBe(false);
  });

  it("una ficha antigua sin historial está en su puesto todos los meses", () => {
    const f = { puestoOperativo: "Puesto Orosi" };
    expect(puestoEnMes(f, 2025, 12)).toBe("Puesto Orosi");
    expect(puestoEnMes(f, 2026, 12)).toBe("Puesto Orosi");
  });
});

describe("inicioDeMes y finDeMes", () => {
  it("calculan los bordes, incluido febrero", () => {
    expect(inicioDeMes(2026, 2)).toBe("2026-02-01");
    expect(finDeMes(2026, 2)).toBe("2026-02-28");
    expect(finDeMes(2024, 2)).toBe("2024-02-29");
    expect(finDeMes(2026, 12)).toBe("2026-12-31");
  });
});

describe("trasladar", () => {
  it("cierra el tramo abierto la víspera y abre el nuevo", () => {
    const f = { puestoOperativo: "Puesto Orosi" };
    const movido = trasladar(f, { puesto: "Puesto Quetzales", desde: "2026-07-01" });
    expect(movido.historialPuestos).toEqual([
      { puesto: "Puesto Orosi", desde: "", hasta: "2026-06-30" },
      { puesto: "Puesto Quetzales", desde: "2026-07-01", hasta: null },
    ]);
    expect(movido.puestoOperativo).toBe("Puesto Quetzales");
  });

  it("trasladar al mismo puesto no ensucia el historial", () => {
    const movido = trasladar(CON_HISTORIAL, { puesto: "Puesto Orosi", desde: "2026-09-01" });
    expect(movido).toBe(CON_HISTORIAL);
  });

  it("no muta la ficha original", () => {
    const f = { puestoOperativo: "Puesto Orosi" };
    trasladar(f, { puesto: "Puesto Quetzales", desde: "2026-07-01" });
    expect(f.historialPuestos).toBeUndefined();
    expect(f.puestoOperativo).toBe("Puesto Orosi");
  });

  it("un destino vacío no hace nada", () => {
    const f = { puestoOperativo: "Puesto Orosi" };
    expect(trasladar(f, { puesto: "   " })).toBe(f);
  });

  it("guarda el motivo si se da", () => {
    const movido = trasladar(
      { puestoOperativo: "Puesto Orosi" },
      { puesto: "Puesto Quetzales", desde: "2026-07-01", motivo: "Traslado administrativo" },
    );
    expect(movido.historialPuestos[1].motivo).toBe("Traslado administrativo");
  });
});

describe("cerrarHistorial", () => {
  it("cierra el tramo abierto y la persona deja de tener puesto después", () => {
    const salida = cerrarHistorial(CON_HISTORIAL, "2026-08-31", "Traslado a otra Área de Conservación");
    expect(salida.historialPuestos[1]).toEqual({
      puesto: "Puesto Orosi",
      desde: "2026-07-01",
      hasta: "2026-08-31",
      motivo: "Traslado a otra Área de Conservación",
    });
    expect(puestoEnMes(salida, 2026, 8)).toBe("Puesto Orosi");
    expect(puestoEnMes(salida, 2026, 9)).toBe("");
  });
});

describe("puestoActual y normalizarFuncionario", () => {
  it("el puesto de hoy sale del historial", () => {
    expect(puestoActual(CON_HISTORIAL, "2026-09-13")).toBe("Puesto Orosi");
    expect(puestoActual(CON_HISTORIAL, "2026-01-15")).toBe("Puesto Quetzales");
  });

  it("quien ya salió no tiene puesto hoy, pero la ficha sigue diciendo el último", () => {
    const salida = cerrarHistorial(CON_HISTORIAL, "2026-08-31");
    expect(puestoActual(salida, "2026-09-13")).toBe("");
    expect(normalizarFuncionario(salida, "2026-09-13").puestoOperativo).toBe("Puesto Orosi");
  });

  it("corrige un puestoOperativo que contradice al historial", () => {
    const desalineada = { ...CON_HISTORIAL, puestoOperativo: "Puesto Esperanza" };
    expect(normalizarFuncionario(desalineada, "2026-09-13").puestoOperativo).toBe("Puesto Orosi");
  });

  it("añade el historial a una ficha que no lo tenía, sin cambiarle el puesto", () => {
    const vieja = { nombre: "Ana Mora", puestoOperativo: "Puesto Orosi" };
    const nueva = normalizarFuncionario(vieja, "2026-09-13");
    expect(nueva.puestoOperativo).toBe("Puesto Orosi");
    expect(nueva.historialPuestos).toEqual([{ puesto: "Puesto Orosi", desde: "", hasta: null }]);
  });

  it("devuelve la misma referencia si ya estaba normalizada (evita renders de más)", () => {
    const ya = normalizarFuncionario(CON_HISTORIAL, "2026-09-13");
    expect(normalizarFuncionario(ya, "2026-09-13")).toBe(ya);
  });

  it("una ficha sin puesto se deja tal cual", () => {
    const sinPuesto = { nombre: "Ana Mora" };
    expect(normalizarFuncionario(sinPuesto, "2026-09-13")).toBe(sinPuesto);
  });
});

describe("validarHistorial", () => {
  it("acepta un historial correcto", () => {
    expect(validarHistorial(CON_HISTORIAL)).toEqual([]);
  });

  it("detecta tramos solapados", () => {
    const f = {
      historialPuestos: [
        { puesto: "Puesto Quetzales", desde: "2026-01-01", hasta: "2026-07-31" },
        { puesto: "Puesto Orosi", desde: "2026-07-01", hasta: null },
      ],
    };
    expect(validarHistorial(f).join(" ")).toMatch(/se solapan/);
  });

  it("detecta un tramo que termina antes de empezar", () => {
    const f = { historialPuestos: [{ puesto: "Puesto Orosi", desde: "2026-07-01", hasta: "2026-06-01" }] };
    expect(validarHistorial(f).join(" ")).toMatch(/termina antes de empezar/);
  });

  it("detecta un tramo abierto que no es el último", () => {
    const f = {
      historialPuestos: [
        { puesto: "Puesto Quetzales", desde: "2026-01-01", hasta: null },
        { puesto: "Puesto Orosi", desde: "2026-07-01", hasta: null },
      ],
    };
    expect(validarHistorial(f).join(" ")).toMatch(/sigue abierto/);
  });
});
