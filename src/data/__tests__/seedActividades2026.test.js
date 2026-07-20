import { describe, expect, it } from "vitest";
import {
  baseActividadesPlan,
  metadataPlanificacion2026,
} from "../seedActividades.js";

const FUNCIONARIOS_ESPERADOS = [
  "Errol Salazar",
  "Mayra Espinoza",
  "Yeison Cortés",
  "Kenneth Mena",
  "Fabricio Carbonell",
  "Monserrath Navarro",
  "Juan Pablo Granados",
  "Laura Valverde",
  "Jetzelly Villalobos",
  "Diana Tencio",
  "Karen Valle",
  "Pablo Sánchez",
  "Yolanda Elizondo",
  "Mariano Solís",
  "Guillermo Pérez",
  "Carlos Cordero",
];

describe("planificación institucional BTMM 2026", () => {
  it("carga 1791 actividades con ids únicos", () => {
    expect(baseActividadesPlan).toHaveLength(metadataPlanificacion2026.totalActividades);
    expect(baseActividadesPlan).toHaveLength(1791);
    expect(new Set(baseActividadesPlan.map((a) => a.id)).size).toBe(
      baseActividadesPlan.length,
    );
  });

  it("aplica categoría, horario y rango anual requeridos", () => {
    for (const actividad of baseActividadesPlan) {
      expect(actividad.categoria).toBe("Otra actividad");
      expect(actividad.horaInicio).toBe("08:00");
      expect(actividad.horaFin).toBe("16:00");
      expect(actividad.inicio).toMatch(/^2026-\d{2}-\d{2}$/);
      expect(actividad.fin).toBe(actividad.inicio);
      expect(actividad.unDia).toBe(true);
    }
  });

  it("incluye a todos los funcionarios del catálogo suministrado", () => {
    const asignados = new Set(
      baseActividadesPlan.flatMap((actividad) => actividad.funcionarios),
    );
    for (const nombre of FUNCIONARIOS_ESPERADOS) {
      expect(asignados.has(nombre), `${nombre} no aparece asignado`).toBe(true);
    }
  });

  it("separa participantes externos con nombre y campo de contacto", () => {
    const externos = baseActividadesPlan.flatMap(
      (actividad) => actividad.otrosParticipantes,
    );
    expect(externos.length).toBeGreaterThan(0);
    for (const participante of externos) {
      expect(participante.nombre.trim()).not.toBe("");
      expect(participante).toHaveProperty("contacto");
    }
  });
});
