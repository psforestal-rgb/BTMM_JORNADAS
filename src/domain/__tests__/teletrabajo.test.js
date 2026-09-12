import { describe, expect, it } from "vitest";
import {
  categoriaDe,
  esRolActivo,
  esRolPresencial,
  esTeletrabajo,
  etiquetaRol,
  rolKey,
} from "../roles.js";
import { puedeAtenderVisitantes, teletrabajoIncompatible } from "../cobertura.js";
import { conflictosActividadDia } from "../conflictos.js";

/**
 * RT1–RT5. La decisión que gobierna todo: el teletrabajo es rol ACTIVO (la
 * persona trabaja) pero NO presencial (no está en el puesto). Confundir ambas
 * cosas daría por cubierto un puesto que en realidad está vacío.
 */

describe("roles — el rol E se reconoce (RT1)", () => {
  it("E cuenta como rol activo: la persona está trabajando", () => {
    expect(esRolActivo("E")).toBe(true);
    expect(esRolActivo("E1")).toBe(true);
  });

  it("E NO es presencial: desde casa no se está en el puesto", () => {
    expect(esRolPresencial("E")).toBe(false);
    expect(esRolPresencial("T1")).toBe(true);
  });

  it("los roles que no son trabajo siguen sin ser activos", () => {
    for (const v of ["L1", "V", "I", "O", "", null, undefined]) {
      expect(esRolActivo(v), `«${v}» no debería ser activo`).toBe(false);
    }
  });

  it("esTeletrabajo distingue E de todo lo demás", () => {
    expect(esTeletrabajo("E2")).toBe(true);
    expect(esTeletrabajo("T2")).toBe(false);
    expect(esTeletrabajo("")).toBe(false);
  });

  it("la categoría y la etiqueta reconocen E", () => {
    expect(categoriaDe("E3")).toBe("E");
    expect(etiquetaRol("E3")).toBe("Teletrabajo");
  });

  it("no rompe las categorías que ya existían", () => {
    expect(categoriaDe("T1")).toBe("T");
    expect(categoriaDe("L2")).toBe("L");
    expect(categoriaDe("V")).toBe("V");
    expect(categoriaDe("I")).toBe("I");
    expect(categoriaDe("O")).toBe("O");
    expect(categoriaDe("")).toBe("");
  });
});

describe("cobertura — trabajar no es estar presente (RT5)", () => {
  it("solo el turno presencial puede atender visitantes", () => {
    expect(puedeAtenderVisitantes("T1")).toBe(true);
    expect(puedeAtenderVisitantes("E1")).toBe(false);
    expect(puedeAtenderVisitantes("L1")).toBe(false);
  });

  it("el teletrabajo choca solo donde la atención es obligatoria a diario", () => {
    expect(teletrabajoIncompatible("E1", "Puesto Orosi")).toBe(true);
    expect(teletrabajoIncompatible("E1", "Puesto Esperanza")).toBe(false);
  });

  it("un turno presencial nunca choca, esté donde esté", () => {
    expect(teletrabajoIncompatible("T1", "Puesto Orosi")).toBe(false);
  });

  it("respeta la lista editable de puestos en vez de una constante", () => {
    expect(teletrabajoIncompatible("E1", "Puesto Nuevo", ["Puesto Nuevo"])).toBe(true);
    expect(teletrabajoIncompatible("E1", "Puesto Orosi", ["Puesto Nuevo"])).toBe(false);
  });
});

describe("conflictos — teletrabajo y atención de visitantes (RT3/RT4)", () => {
  const personas = [
    { id: "f1", nombre: "Ana", puestoOperativo: "Puesto Orosi" },
    { id: "f2", nombre: "Bruno", puestoOperativo: "Puesto Esperanza" },
  ];
  // Día 1 de 2026-09 (month = 8): Ana y Bruno en teletrabajo. Las claves se
  // construyen con `rolKey` en vez de a mano: el formato es un detalle del
  // dominio y escribirlo a pelo haría que la prueba mintiera en silencio si
  // cambiara.
  const roleData = {
    [rolKey(2026, 8, "Puesto Orosi", "Ana", 1)]: "E1",
    [rolKey(2026, 8, "Puesto Esperanza", "Bruno", 1)]: "E1",
  };
  const conflictos = (actividad, rd = roleData) =>
    conflictosActividadDia(actividad, 1, 2026, 8, personas, rd, null);

  const visit = (funcionarios) => ({
    id: "a1",
    titulo: "Atención rutinaria de visitantes",
    inicio: "2026-09-01",
    fin: "2026-09-01",
    funcionarios,
  });
  const gira = (funcionarios) => ({
    id: "a2",
    titulo: "Gira de control",
    inicio: "2026-09-01",
    fin: "2026-09-01",
    funcionarios,
  });

  it("una actividad normal en teletrabajo NO es conflicto: se trabaja igual", () => {
    expect(conflictos(gira(["Ana"]))).toEqual([]);
  });

  it("atender visitantes desde teletrabajo SÍ es conflicto donde se exige a diario", () => {
    expect(conflictos(visit(["Ana"]))).toEqual(["Ana"]);
  });

  it("en un puesto sin atención obligatoria, el teletrabajo no choca", () => {
    expect(conflictos(visit(["Bruno"]))).toEqual([]);
  });

  it("el mismo día en turno presencial no genera conflicto", () => {
    const presencial = { [rolKey(2026, 8, "Puesto Orosi", "Ana", 1)]: "T1" };
    expect(conflictos(visit(["Ana"]), presencial)).toEqual([]);
  });

  it("sigue detectando el conflicto de siempre: actividad en día no activo", () => {
    const libre = { [rolKey(2026, 8, "Puesto Orosi", "Ana", 1)]: "L1" };
    expect(conflictos(gira(["Ana"]), libre)).toEqual(["Ana"]);
  });

  it("distingue a quién señala cuando hay varios asignados", () => {
    expect(conflictos(visit(["Ana", "Bruno"]))).toEqual(["Ana"]);
  });

  it("admite una lista de puestos distinta de la histórica", () => {
    const r = conflictosActividadDia(
      visit(["Bruno"]), 1, 2026, 8, personas, roleData, null, ["Puesto Esperanza"],
    );
    expect(r).toEqual(["Bruno"]);
  });
});

describe("RT — el rol E no altera lo que ya funcionaba", () => {
  const personas = [{ id: "f1", nombre: "Ana", puestoOperativo: "Puesto Orosi" }];
  const dia1 = (codigo) => ({ [rolKey(2026, 8, "Puesto Orosi", "Ana", 1)]: codigo });
  const actividad = (titulo) => ({
    id: "a1",
    titulo,
    inicio: "2026-09-01",
    fin: "2026-09-01",
    funcionarios: ["Ana"],
  });

  it("un turno presencial sigue sin conflicto en cualquier actividad", () => {
    for (const titulo of ["Gira de control", "Atención rutinaria de visitantes"]) {
      const r = conflictosActividadDia(actividad(titulo), 1, 2026, 8, personas, dia1("T1"), null);
      expect(r, `«${titulo}» no debería dar conflicto en turno`).toEqual([]);
    }
  });

  it("libre, vacaciones e incapacidad siguen dando conflicto", () => {
    for (const codigo of ["L1", "V", "I"]) {
      const r = conflictosActividadDia(actividad("Gira de control"), 1, 2026, 8, personas, dia1(codigo), null);
      expect(r, `«${codigo}» debería dar conflicto`).toEqual(["Ana"]);
    }
  });

  it("un funcionario que no existe no rompe el cálculo", () => {
    const r = conflictosActividadDia(
      { ...actividad("Gira"), funcionarios: ["Fantasma"] }, 1, 2026, 8, personas, dia1("T1"), null,
    );
    expect(r).toEqual(["Fantasma"]);
  });

  it("una actividad sin funcionarios no da conflicto", () => {
    const r = conflictosActividadDia(
      { ...actividad("Gira"), funcionarios: [] }, 1, 2026, 8, personas, dia1("E1"), null,
    );
    expect(r).toEqual([]);
  });
});
