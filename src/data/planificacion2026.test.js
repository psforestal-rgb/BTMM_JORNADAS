import { describe, expect, it } from "vitest";
import {
  PLANIFICACION_VERSION,
  cargarPlanificacion2026,
  convertirPlanificacion2026,
  esActividadOficial,
  reconciliarPlanificacion,
} from "./planificacion2026.js";

describe("convertirPlanificacion2026", () => {
  it("crea una actividad por tarea con el texto descriptivo como título", () => {
    const texto = `ENERO 2026
DOMINGO
1
PNTMM
ES y ME mantenimiento
YC atención de visitantes
PNLQ
DT: informe mensual`;

    const actividades = convertirPlanificacion2026(texto);

    expect(actividades).toHaveLength(3);
    expect(actividades.some((a) => a.titulo.startsWith("Programación institucional"))).toBe(false);
    expect(actividades[0]).toMatchObject({
      titulo: "mantenimiento",
      inicio: "2026-01-01",
      fin: "2026-01-01",
      categoria: "Otra actividad",
      horaInicio: "08:00",
      horaFin: "16:00",
      funcionarios: ["Errol Salazar", "Mayra Espinoza"],
      lugar: "Parque Nacional Tapantí Macizo de la Muerte",
    });
    expect(actividades[1]).toMatchObject({
      titulo: "atención de visitantes",
      funcionarios: ["Yeison Cortés"],
    });
    expect(actividades[2]).toMatchObject({
      titulo: "informe mensual",
      funcionarios: ["Diana Tencio"],
      lugar: "Parque Nacional Los Quetzales",
    });
  });

  it("deja sin funcionario las tareas de invitados (voluntarios, covirenas, pasantes)", () => {
    const texto = `JULIO 2026
1
PNTMM
2 voluntarios UCR y 4 TEC
pernocta covirena
Pasante frances Enzo`;

    const actividades = convertirPlanificacion2026(texto);

    expect(actividades.map((a) => a.titulo)).toEqual([
      "2 voluntarios UCR y 4 TEC",
      "pernocta covirena",
      "Pasante frances Enzo",
    ]);
    expect(actividades.every((a) => a.funcionarios.length === 0)).toBe(true);
    expect(actividades[0].otrosParticipantes.map((p) => p.nombre)).toEqual(
      expect.arrayContaining(["UCR", "TEC", "Voluntariado"]),
    );
    expect(actividades[1].otrosParticipantes).toContainEqual({ nombre: "COVIRENA", contacto: "" });
    expect(actividades[2].otrosParticipantes.map((p) => p.nombre)).toEqual(
      expect.arrayContaining(["Enzo", "Pasantes"]),
    );
  });

  it("hereda el funcionario en renglones de continuación y repara cortes de palabra", () => {
    const texto = `JULIO 2026
21
PNLQ
DT:Mantenimiento senderos PNTMM- Orosi
Charla voluntariado
PS coordina con YC a
ctividades de la semana
KV reunión`;

    const actividades = convertirPlanificacion2026(texto);

    expect(actividades.map((a) => ({ titulo: a.titulo, funcionarios: a.funcionarios }))).toEqual([
      { titulo: "Mantenimiento senderos PNTMM- Orosi", funcionarios: ["Diana Tencio"] },
      // "Charla voluntariado" no trae sigla: hereda a Diana Tencio del renglón previo.
      { titulo: "Charla voluntariado", funcionarios: ["Diana Tencio"] },
      // "PS coordina con YC a" + "ctividades..." se reúnen en una sola tarea de PS.
      { titulo: "coordina con YC actividades de la semana", funcionarios: ["Pablo Sánchez"] },
      { titulo: "reunión", funcionarios: ["Karen Valle"] },
    ]);
  });

  it("omite renglones que solo contienen la sigla sin tarea", () => {
    const texto = `JULIO 2026
1
PNTMM
DT:
YC patrullaje`;

    const actividades = convertirPlanificacion2026(texto);

    expect(actividades).toHaveLength(1);
    expect(actividades[0]).toMatchObject({ titulo: "patrullaje", funcionarios: ["Yeison Cortés"] });
  });

  it("carga la fuente institucional local completa sin depender de la red", async () => {
    const actividades = await cargarPlanificacion2026();

    expect(actividades.length).toBeGreaterThan(1000);
    expect(actividades.every((a) => a.categoria === "Otra actividad")).toBe(true);
    expect(actividades.every((a) => a.horaInicio === "08:00" && a.horaFin === "16:00")).toBe(true);
    expect(actividades.every((a) => Array.isArray(a.funcionarios))).toBe(true);
    expect(actividades.every((a) => a.titulo.trim().length > 0)).toBe(true);
    expect(actividades.some((a) => a.titulo.startsWith("Programación institucional"))).toBe(false);
    expect(actividades.some((a) => a.inicio === "2026-07-20" && a.lugar === "Parque Nacional Los Quetzales")).toBe(true);

    // Ids oficiales, deterministas y únicos (evita claves React/selección
    // duplicadas al refrescar de hoy en adelante conservando filas pasadas).
    const ids = actividades.map((a) => a.id);
    expect(ids.every((id) => id.startsWith("plan2026-"))).toBe(true);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("expone una versión de planificación no vacía", () => {
    expect(typeof PLANIFICACION_VERSION).toBe("string");
    expect(PLANIFICACION_VERSION.length).toBeGreaterThan(0);
  });

  it("refleja el ejemplo real del 21 de julio en Los Quetzales", async () => {
    const actividades = await cargarPlanificacion2026();
    const delDia = actividades
      .filter((a) => a.inicio === "2026-07-21" && a.lugar === "Parque Nacional Los Quetzales")
      .map((a) => ({ titulo: a.titulo, funcionarios: a.funcionarios }));

    expect(delDia).toEqual([
      { titulo: "Mantenimiento senderos PNTMM- Orosi", funcionarios: ["Diana Tencio"] },
      { titulo: "Charla voluntariado", funcionarios: ["Diana Tencio"] },
      { titulo: "coordina con YC actividades de la semana", funcionarios: ["Pablo Sánchez"] },
      { titulo: "reunión", funcionarios: ["Karen Valle"] },
    ]);
  });
});

describe("esActividadOficial", () => {
  it("reconoce las actividades importadas por su id plan2026-", () => {
    expect(esActividadOficial({ id: "plan2026-0001" })).toBe(true);
    expect(esActividadOficial({ id: "abc-123" })).toBe(false);
    expect(esActividadOficial({})).toBe(false);
    expect(esActividadOficial(null)).toBe(false);
  });
});

describe("reconciliarPlanificacion (refresco de hoy en adelante)", () => {
  const HOY = "2026-07-21";
  const oficial = (id, inicio, extra = {}) => ({ id, inicio, funcionarios: [], ...extra });
  const propia = (id, inicio, extra = {}) => ({ id, inicio, funcionarios: [], ...extra });

  it("conserva el pasado oficial y no lo reemplaza", () => {
    const previas = [oficial("plan2026-0001", "2026-07-10", { titulo: "pasado" })];
    const nuevas = [oficial("plan2026-0001", "2026-07-10", { titulo: "pasado editado" })];
    const resultado = reconciliarPlanificacion(previas, nuevas, HOY);
    expect(resultado).toEqual([{ id: "plan2026-0001", inicio: "2026-07-10", funcionarios: [], titulo: "pasado" }]);
  });

  it("conserva las actividades propias del usuario en cualquier fecha", () => {
    const previas = [
      propia("user-abc", "2026-12-01", { titulo: "mi actividad futura", funcionarios: ["Karen Valle"] }),
      propia("user-xyz", "2026-01-05", { titulo: "mi actividad pasada" }),
    ];
    const nuevas = [];
    const resultado = reconciliarPlanificacion(previas, nuevas, HOY);
    expect(resultado).toEqual(previas);
  });

  it("reemplaza las actividades oficiales de hoy en adelante por la fuente nueva", () => {
    const previas = [
      oficial("plan2026-0009", "2026-07-25", { titulo: "viejo", funcionarios: ["Yeison Cortés"] }),
    ];
    const nuevas = [
      oficial("plan2026-0009", "2026-07-25", { titulo: "nuevo", funcionarios: ["Diana Tencio"] }),
    ];
    const resultado = reconciliarPlanificacion(previas, nuevas, HOY);
    expect(resultado).toEqual([
      { id: "plan2026-0009", inicio: "2026-07-25", funcionarios: ["Diana Tencio"], titulo: "nuevo" },
    ]);
  });

  it("refleja altas y bajas del documento a futuro, incluida la fecha de hoy", () => {
    const previas = [
      oficial("plan2026-0001", "2026-07-10", { titulo: "pasado" }), // se conserva
      oficial("plan2026-0050", "2026-07-21", { titulo: "hoy vieja" }), // baja
      oficial("plan2026-0051", "2026-08-01", { titulo: "futura vieja" }), // baja
    ];
    const nuevas = [
      oficial("plan2026-0050", "2026-07-21", { titulo: "hoy nueva" }), // alta/cambio
      oficial("plan2026-0099", "2026-09-15", { titulo: "nueva futura" }), // alta
    ];
    const resultado = reconciliarPlanificacion(previas, nuevas, HOY);
    expect(resultado.map((a) => a.titulo)).toEqual(["pasado", "hoy nueva", "nueva futura"]);
  });
});
