import { describe, expect, it } from "vitest";
import { cargarPlanificacion2026, convertirPlanificacion2026 } from "./planificacion2026.js";

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
