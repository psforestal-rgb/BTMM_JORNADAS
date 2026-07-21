import { describe, expect, it } from "vitest";
import { cargarPlanificacion2026, convertirPlanificacion2026 } from "./planificacion2026.js";

describe("convertirPlanificacion2026", () => {
  it("crea un registro por puesto y día con categoría y horario institucional", () => {
    const texto = `ENERO 2026
DOMINGO
1
PNTMM
ES y ME mantenimiento
PNLQ
JPG turismo con MH
PLE
MS visado
PVM
CC mantenimiento
2
PNTMM
YC atención de visitantes`;

    const actividades = convertirPlanificacion2026(texto);

    expect(actividades).toHaveLength(5);
    expect(actividades[0]).toMatchObject({
      inicio: "2026-01-01",
      fin: "2026-01-01",
      categoria: "Otra actividad",
      horaInicio: "08:00",
      horaFin: "16:00",
      funcionarios: ["Errol Salazar", "Mayra Espinoza"],
      lugar: "Parque Nacional Tapantí Macizo de la Muerte",
    });
    expect(actividades[1].funcionarios).toContain("Juan Pablo Granados");
    expect(actividades[1].otrosParticipantes).toContainEqual({ nombre: "MH", contacto: "" });
  });

  it("conserva todas las líneas de una celda en observaciones", () => {
    const texto = `JULIO 2026
1
PNLQ
KV atiende turismo
DT prepara informe`;
    const [actividad] = convertirPlanificacion2026(texto);
    expect(actividad.observaciones).toBe("• KV atiende turismo\n• DT prepara informe");
    expect(actividad.funcionarios).toEqual(["Karen Valle", "Diana Tencio"]);
  });

  it("carga la fuente institucional local completa sin depender de la red", async () => {
    const actividades = await cargarPlanificacion2026();

    expect(actividades).toHaveLength(768);
    expect(actividades.every((a) => a.categoria === "Otra actividad")).toBe(true);
    expect(actividades.every((a) => a.horaInicio === "08:00" && a.horaFin === "16:00")).toBe(true);
    expect(actividades.some((a) => a.inicio === "2026-07-20" && a.lugar === "Parque Nacional Los Quetzales")).toBe(true);
  });
});
