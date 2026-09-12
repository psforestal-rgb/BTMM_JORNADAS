import { describe, it, expect } from "vitest";
import { conflictoDePersonaDia, conflictosActividadDia, actividadTieneConflictoMes } from "../conflictos.js";
import { rolKey } from "../roles.js";

const personas = [
  { id: "f1", nombre: "Errol Salazar", puestoOperativo: "Puesto Orosi", modalidad: "10x5" },
];

describe("conflictos", () => {
  it("reporta nombres con rol no-activo", () => {
    // primer día laboral 2026-05 es viernes 1 → T1; mayo 12 cae en T (día 12: T12) — todavía en turno con 10x5
    // mayo 16 cae en L1 (día 11 → L1)
    const actividad = {
      id: "a1",
      titulo: "X",
      inicio: "2026-05-13",
      fin: "2026-05-13",
      funcionarios: ["Errol Salazar"],
    };
    // 13 mayo: día 13 - inicio 1 = 12 % 15 = 12 → trabajo 10, libre 5 → 12 >= 10 → L3 (no activo)
    const conf = conflictosActividadDia(actividad, 13, 2026, 4, personas, {});
    expect(conf).toEqual(["Errol Salazar"]);
  });
  it("vacío si todos están en turno", () => {
    const actividad = {
      id: "a2",
      titulo: "Y",
      inicio: "2026-05-05",
      fin: "2026-05-05",
      funcionarios: ["Errol Salazar"],
    };
    // 5 mayo: día 5 - inicio 1 = 4 % 15 = 4 < 10 → T5 (activo)
    const conf = conflictosActividadDia(actividad, 5, 2026, 4, personas, {});
    expect(conf).toEqual([]);
  });
  it("actividadTieneConflictoMes detecta conflicto en al menos un día", () => {
    const actividad = {
      id: "a3",
      titulo: "Z",
      inicio: "2026-05-11",
      fin: "2026-05-15",
      funcionarios: ["Errol Salazar"],
    };
    expect(actividadTieneConflictoMes(actividad, 2026, 4, personas, {})).toBe(true);
  });
});

describe("la regla de conflicto por persona y día (una sola copia)", () => {
  const PUESTO = "Puesto Orosi";

  it("sin actividad no hay conflicto, trabaje o no", () => {
    for (const rol of ["T1", "E1", "L2", ""]) {
      expect(conflictoDePersonaDia({ rol, tieneActividad: false, tieneVisit: false, puesto: PUESTO })).toBe(false);
    }
  });

  it("con actividad y sin trabajar, conflicto", () => {
    for (const rol of ["L2", "V1", "I1", ""]) {
      expect(conflictoDePersonaDia({ rol, tieneActividad: true, tieneVisit: false, puesto: PUESTO })).toBe(true);
    }
  });

  it("el teletrabajo choca con la atención de visitantes donde es obligatoria", () => {
    expect(conflictoDePersonaDia({ rol: "E1", tieneActividad: true, tieneVisit: true, puesto: PUESTO })).toBe(true);
    // Y no choca con cualquier otra actividad.
    expect(conflictoDePersonaDia({ rol: "E1", tieneActividad: true, tieneVisit: false, puesto: PUESTO })).toBe(false);
    // Ni en un puesto que no la exige a diario.
    expect(conflictoDePersonaDia({ rol: "E1", tieneActividad: true, tieneVisit: true, puesto: "Puesto Esperanza" })).toBe(false);
  });

  it("el turno presencial no choca nunca", () => {
    expect(conflictoDePersonaDia({ rol: "T4", tieneActividad: true, tieneVisit: true, puesto: PUESTO })).toBe(false);
  });

  it("dice lo mismo que `conflictosActividadDia` para el mismo caso", () => {
    const personas = [{ id: "p1", nombre: "Ana", puestoOperativo: PUESTO, modalidad: "10x5" }];
    const roleData = { [rolKey(2026, 6, PUESTO, "Ana", 8)]: "E1" };
    const visitante = { id: "v", titulo: "Atención rutinaria de visitantes", inicio: "2026-07-08", fin: "2026-07-08", funcionarios: ["Ana"] };
    const porActividad = conflictosActividadDia(visitante, 8, 2026, 6, personas, roleData);
    const porPersona = conflictoDePersonaDia({ rol: "E1", tieneActividad: true, tieneVisit: true, puesto: PUESTO });
    expect(porActividad).toEqual(["Ana"]);
    expect(porPersona).toBe(true);
  });
});
