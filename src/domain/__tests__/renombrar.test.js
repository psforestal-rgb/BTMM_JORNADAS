import { describe, expect, it } from "vitest";
import { renombrarPuesto } from "../puestos.js";
import {
  nombreOcupado,
  renombrarFuncionario,
  renombrarVariosFuncionarios,
  renombresDelPlan,
} from "../funcionarios.js";
import { puestoEnMes } from "../historialPuestos.js";
import { reescribirClavesRol, rolCfgKey, rolKey } from "../roles.js";

/**
 * Renombrar arrastra referencias. Estas pruebas existen por una regresión real
 * y registrada: al pasar el puesto de una persona de dato fijo a historial de
 * traslados, la cuadrícula de Roles empezó a agrupar por `puestoEnMes(...)`, y
 * `renombrarPuesto` seguía tocando solo `puestoOperativo`. Resultado: renombrar
 * un puesto hacía DESAPARECER a toda su gente de la cuadrícula, sin error
 * ninguno.
 *
 * Por eso cada prueba de aquí comprueba el efecto final —la persona sigue en su
 * grupo, la celda sigue teniendo su código— y no solo que el campo cambió.
 */

const ORIGINAL = "Puesto Orosi";
const NUEVO = "Puesto Orosi Centro";

function fichaConTraslado() {
  return {
    id: "f1",
    nombre: "Ana Mora",
    puestoOperativo: "Puesto Quetzales",
    historialPuestos: [
      { puesto: ORIGINAL, desde: "", hasta: "2026-06-30" },
      { puesto: "Puesto Quetzales", desde: "2026-07-01", hasta: null },
    ],
  };
}

function estadoBase() {
  const personas = [
    { id: "f0", nombre: "Errol Salazar", puestoOperativo: ORIGINAL },
    fichaConTraslado(),
  ];
  const roleData = {
    [rolKey(2026, 8, ORIGINAL, "Errol Salazar", 15)]: "T3",
    [rolCfgKey(2026, 8, ORIGINAL, "Errol Salazar")]: "10x5",
    [rolKey(2026, 2, ORIGINAL, "Ana Mora", 4)]: "L1",
    [rolKey(2026, 8, "Puesto Quetzales", "Ana Mora", 4)]: "T1",
  };
  const puestos = [
    { nombre: ORIGINAL, tag: "OR", color: "a" },
    { nombre: "Puesto Quetzales", tag: "QZ", color: "b" },
  ];
  const reglas = { puestosRequierenVisitantesDiario: [ORIGINAL] };
  return { personas, roleData, puestos, reglas };
}

describe("renombrarPuesto — la regresión que hizo desaparecer a la gente", () => {
  it("arrastra el historial de traslados, no solo el puesto de hoy", () => {
    const { personas, roleData, puestos, reglas } = estadoBase();
    const r = renombrarPuesto({ puestos, personas, reglas, roleData, antes: ORIGINAL, despues: NUEVO });

    // Ana ya no está en ese puesto HOY, pero estuvo hasta junio: su tramo
    // cerrado también tiene que llevar el nombre nuevo.
    expect(r.personas[1].historialPuestos[0].puesto).toBe(NUEVO);
    expect(r.personas[1].puestoOperativo).toBe("Puesto Quetzales");
  });

  it("la persona sigue cayendo en su grupo de la cuadrícula después del renombre", () => {
    const { personas, roleData, puestos, reglas } = estadoBase();
    const r = renombrarPuesto({ puestos, personas, reglas, roleData, antes: ORIGINAL, despues: NUEVO });

    // Esto es exactamente lo que hace `gruposRoles`: comparar el puesto del mes
    // con el nombre del grupo. Antes del arreglo devolvía el nombre VIEJO y la
    // persona no caía en ningún grupo.
    expect(puestoEnMes(r.personas[0], 2026, 9)).toBe(NUEVO);
    expect(puestoEnMes(r.personas[1], 2026, 3)).toBe(NUEVO);
    expect(puestoEnMes(r.personas[1], 2026, 9)).toBe("Puesto Quetzales");
  });

  it("reescribe las claves de rol, incluida la de modalidad", () => {
    const { personas, roleData, puestos, reglas } = estadoBase();
    const r = renombrarPuesto({ puestos, personas, reglas, roleData, antes: ORIGINAL, despues: NUEVO });

    expect(r.roleData[rolKey(2026, 8, NUEVO, "Errol Salazar", 15)]).toBe("T3");
    expect(r.roleData[rolCfgKey(2026, 8, NUEVO, "Errol Salazar")]).toBe("10x5");
    expect(r.roleData[rolKey(2026, 2, NUEVO, "Ana Mora", 4)]).toBe("L1");
    // Y ninguna de las claves viejas puede sobrevivir.
    for (const vieja of Object.keys(roleData).filter((k) => k.includes(`-${ORIGINAL}-`))) {
      expect(r.roleData[vieja]).toBeUndefined();
    }
    expect(r.celdas).toBe(3);
    expect(r.colisiones).toBe(0);
  });

  it("no toca el rol de otro puesto", () => {
    const { personas, roleData, puestos, reglas } = estadoBase();
    const r = renombrarPuesto({ puestos, personas, reglas, roleData, antes: ORIGINAL, despues: NUEVO });
    expect(r.roleData[rolKey(2026, 8, "Puesto Quetzales", "Ana Mora", 4)]).toBe("T1");
  });

  it("cuenta como afectada la ficha que solo cambia por el historial", () => {
    const { personas, roleData, puestos, reglas } = estadoBase();
    const r = renombrarPuesto({ puestos, personas, reglas, roleData, antes: ORIGINAL, despues: NUEVO });
    expect(r.afectados).toBe(2);
  });

  it("sigue arrastrando la regla de cobertura diaria", () => {
    const { personas, roleData, puestos, reglas } = estadoBase();
    const r = renombrarPuesto({ puestos, personas, reglas, roleData, antes: ORIGINAL, despues: NUEVO });
    expect(r.reglas.puestosRequierenVisitantesDiario).toEqual([NUEVO]);
  });

  it("sin `roleData` no inventa nada y lo demás sigue funcionando", () => {
    const { personas, puestos, reglas } = estadoBase();
    const r = renombrarPuesto({ puestos, personas, reglas, antes: ORIGINAL, despues: NUEVO });
    expect(r.roleData).toBeNull();
    expect(r.celdas).toBe(0);
    expect(r.personas[0].puestoOperativo).toBe(NUEVO);
  });

  it("no muta el `roleData` original", () => {
    const { personas, roleData, puestos, reglas } = estadoBase();
    const antesDe = { ...roleData };
    renombrarPuesto({ puestos, personas, reglas, roleData, antes: ORIGINAL, despues: NUEVO });
    expect(roleData).toEqual(antesDe);
  });
});

describe("renombrarFuncionario", () => {
  function estadoPersona() {
    return {
      personas: [{ id: "f0", nombre: "Errol Salazar", puestoOperativo: ORIGINAL }],
      roleData: {
        [rolKey(2026, 8, ORIGINAL, "Errol Salazar", 15)]: "T3",
        [rolCfgKey(2026, 8, ORIGINAL, "Errol Salazar")]: "10x5",
        [rolKey(2026, 8, ORIGINAL, "Ana Mora", 15)]: "L1",
      },
      actividadesPlan: [
        { id: "a1", funcionarios: ["Errol Salazar", "Ana Mora"] },
        { id: "a2", funcionarios: ["Ana Mora"] },
        { id: "a3" },
      ],
      reposiciones: [
        { id: "r1", funcionario: "Errol Salazar", horas: 8 },
        { id: "r2", funcionario: "Ana Mora", horas: 4 },
      ],
    };
  }

  it("mueve el rol, las actividades y las reposiciones de esa persona", () => {
    const e = estadoPersona();
    const r = renombrarFuncionario({ ...e, antes: "Errol Salazar", despues: "Errol Salazar Mora" });

    expect(r.roleData[rolKey(2026, 8, ORIGINAL, "Errol Salazar Mora", 15)]).toBe("T3");
    expect(r.roleData[rolCfgKey(2026, 8, ORIGINAL, "Errol Salazar Mora")]).toBe("10x5");
    expect(r.actividadesPlan[0].funcionarios).toEqual(["Errol Salazar Mora", "Ana Mora"]);
    expect(r.reposiciones[0].funcionario).toBe("Errol Salazar Mora");
    expect(r.celdas).toBe(2);
    expect(r.actividades).toBe(1);
    expect(r.reposicionesTocadas).toBe(1);
  });

  it("no toca a nadie más", () => {
    const e = estadoPersona();
    const r = renombrarFuncionario({ ...e, antes: "Errol Salazar", despues: "Errol Salazar Mora" });
    expect(r.roleData[rolKey(2026, 8, ORIGINAL, "Ana Mora", 15)]).toBe("L1");
    expect(r.actividadesPlan[1]).toBe(e.actividadesPlan[1]);
    expect(r.reposiciones[1]).toBe(e.reposiciones[1]);
  });

  it("una actividad sin lista de funcionarios no rompe nada", () => {
    const e = estadoPersona();
    const r = renombrarFuncionario({ ...e, antes: "Errol Salazar", despues: "Otro" });
    expect(r.actividadesPlan[2]).toBe(e.actividadesPlan[2]);
  });

  it("si la actividad ya tenía el nombre nuevo, no deja a la persona dos veces", () => {
    const e = estadoPersona();
    e.actividadesPlan = [{ id: "a1", funcionarios: ["Errol Salazar", "Ana Mora"] }];
    const r = renombrarFuncionario({ ...e, antes: "Errol Salazar", despues: "Ana Mora" });
    expect(r.actividadesPlan[0].funcionarios).toEqual(["Ana Mora"]);
  });

  it("una colisión de claves se cuenta en vez de perderse en silencio", () => {
    const e = estadoPersona();
    const r = renombrarFuncionario({ ...e, antes: "Errol Salazar", despues: "Ana Mora" });
    // La celda del día 15 ya existía a nombre de Ana: gana la suya y se avisa.
    expect(r.roleData[rolKey(2026, 8, ORIGINAL, "Ana Mora", 15)]).toBe("L1");
    expect(r.colisiones).toBe(1);
  });

  it("renombrar al mismo nombre devuelve todo tal cual", () => {
    const e = estadoPersona();
    const r = renombrarFuncionario({ ...e, antes: "Errol Salazar", despues: "Errol Salazar" });
    expect(r.roleData).toBe(e.roleData);
    expect(r.actividadesPlan).toBe(e.actividadesPlan);
    expect(r.reposiciones).toBe(e.reposiciones);
  });

  it("no muta el estado original", () => {
    const e = estadoPersona();
    const copiaRol = { ...e.roleData };
    const copiaPlan = JSON.parse(JSON.stringify(e.actividadesPlan));
    renombrarFuncionario({ ...e, antes: "Errol Salazar", despues: "Otro" });
    expect(e.roleData).toEqual(copiaRol);
    expect(e.actividadesPlan).toEqual(copiaPlan);
  });

  it("distingue a dos personas cuyo nombre solo cambia de mayúsculas", () => {
    /* Los nombres de funcionario NO son únicos ni se validan como tales, así
       que la comparación tiene que ser exacta: aflojarla movería el rol de
       otra persona. */
    const roleData = {
      [rolKey(2026, 8, ORIGINAL, "Ana Mora", 3)]: "T1",
      [rolKey(2026, 8, ORIGINAL, "ana mora", 3)]: "L1",
    };
    const r = renombrarFuncionario({
      personas: [{ id: "x", nombre: "Ana Mora", puestoOperativo: ORIGINAL }],
      roleData,
      antes: "Ana Mora",
      despues: "Ana Mora Jiménez",
    });
    expect(r.roleData[rolKey(2026, 8, ORIGINAL, "Ana Mora Jiménez", 3)]).toBe("T1");
    expect(r.roleData[rolKey(2026, 8, ORIGINAL, "ana mora", 3)]).toBe("L1");
    expect(r.celdas).toBe(1);
  });

  it("encuentra a la persona aunque su puesto ya no exista en la lista vigente", () => {
    // El rol archivado bajo un puesto retirado sigue siendo suyo: el historial
    // de la ficha es lo que permite partir bien la clave.
    const personas = [
      {
        id: "x",
        nombre: "Mauricio Rojas",
        puestoOperativo: "Puesto Quetzales",
        historialPuestos: [
          { puesto: "Puesto Villa-Mills", desde: "", hasta: "2026-03-31" },
          { puesto: "Puesto Quetzales", desde: "2026-04-01", hasta: null },
        ],
      },
    ];
    const roleData = { [rolKey(2026, 1, "Puesto Villa-Mills", "Mauricio Rojas", 9)]: "T2" };
    const r = renombrarFuncionario({ personas, roleData, antes: "Mauricio Rojas", despues: "Mauricio Rojas Ureña" });
    expect(r.roleData[rolKey(2026, 1, "Puesto Villa-Mills", "Mauricio Rojas Ureña", 9)]).toBe("T2");
    expect(r.celdas).toBe(1);
  });
});

describe("nombreOcupado", () => {
  const personas = [
    { id: "a", nombre: "Ana Mora" },
    { id: "b", nombre: "Errol Salazar" },
  ];

  it("no considera ocupado el nombre propio", () => {
    expect(nombreOcupado(personas, "Ana Mora", "a")).toBe(false);
  });

  it("detecta el choque aunque cambien las mayúsculas o los bordes", () => {
    expect(nombreOcupado(personas, "  ana mora ", "b")).toBe(true);
  });

  it("un nombre libre no está ocupado", () => {
    expect(nombreOcupado(personas, "Karen Valle", null)).toBe(false);
  });

  it("un nombre vacío no cuenta como choque", () => {
    expect(nombreOcupado(personas, "   ", null)).toBe(false);
  });
});

describe("reescribirClavesRol — ambigüedades del nombre dentro de la clave", () => {
  it("no confunde un puesto con otro cuyo nombre lo lleva de prefijo", () => {
    const roleData = {
      [rolKey(2026, 8, "Puesto Orosi", "Ana Mora", 3)]: "T1",
      [rolKey(2026, 8, "Puesto Orosi-Norte", "Ana Mora", 3)]: "L1",
    };
    const r = reescribirClavesRol(roleData, {
      tipo: "puesto",
      antes: "Puesto Orosi",
      despues: "Orosi Centro",
      puestosConocidos: ["Puesto Orosi", "Puesto Orosi-Norte"],
    });
    expect(r.roleData[rolKey(2026, 8, "Orosi Centro", "Ana Mora", 3)]).toBe("T1");
    expect(r.roleData[rolKey(2026, 8, "Puesto Orosi-Norte", "Ana Mora", 3)]).toBe("L1");
    expect(r.movidas).toBe(1);
  });

  it("cambiar solo las mayúsculas del puesto también mueve las claves", () => {
    const roleData = { [rolKey(2026, 8, "Puesto Orosi", "Ana Mora", 3)]: "T1" };
    const r = reescribirClavesRol(roleData, {
      tipo: "puesto",
      antes: "Puesto Orosi",
      despues: "PUESTO OROSI",
      puestosConocidos: ["Puesto Orosi"],
    });
    expect(r.roleData[rolKey(2026, 8, "PUESTO OROSI", "Ana Mora", 3)]).toBe("T1");
    expect(r.movidas).toBe(1);
  });

  it("deja intacta cualquier clave que no tenga forma de clave de rol", () => {
    const roleData = { basura: "x", "CFG-mal": "y" };
    const r = reescribirClavesRol(roleData, { tipo: "puesto", antes: "Puesto Orosi", despues: "Otro" });
    expect(r.roleData).toEqual(roleData);
    expect(r.movidas).toBe(0);
  });

  it("un tipo desconocido no toca nada", () => {
    const roleData = { [rolKey(2026, 8, "Puesto Orosi", "Ana Mora", 3)]: "T1" };
    const r = reescribirClavesRol(roleData, { tipo: "otra cosa", antes: "Puesto Orosi", despues: "X" });
    expect(r.roleData).toBe(roleData);
  });

  it("conserva el día de dos cifras al rearmar la clave", () => {
    const roleData = { [rolKey(2026, 11, "Puesto Orosi", "Ana Mora", 31)]: "T9" };
    const r = reescribirClavesRol(roleData, {
      tipo: "puesto",
      antes: "Puesto Orosi",
      despues: "Orosi",
      puestosConocidos: ["Puesto Orosi"],
    });
    expect(r.roleData[rolKey(2026, 11, "Orosi", "Ana Mora", 31)]).toBe("T9");
  });
});

describe("renombresDelPlan — el import también renombra", () => {
  it("saca los renombres de las filas actualizadas", () => {
    const actualizados = [
      { previo: { nombre: "Ana Mora" }, registro: { nombre: "Ana Mora Jiménez" }, cambios: ["nombre", "email"] },
      { previo: { nombre: "Errol Salazar" }, registro: { nombre: "Errol Salazar" }, cambios: ["email"] },
    ];
    expect(renombresDelPlan(actualizados)).toEqual([
      { antes: "Ana Mora", despues: "Ana Mora Jiménez" },
    ]);
  });

  it("ignora un cambio de nombre que en realidad no cambia nada", () => {
    const actualizados = [
      { previo: { nombre: "Ana Mora" }, registro: { nombre: "  Ana Mora  " }, cambios: ["nombre"] },
      { previo: { nombre: "" }, registro: { nombre: "Sin Previo" }, cambios: ["nombre"] },
    ];
    expect(renombresDelPlan(actualizados)).toEqual([]);
  });

  it("tolera una lista ausente", () => {
    expect(renombresDelPlan(undefined)).toEqual([]);
  });
});

describe("renombrarVariosFuncionarios — varios renombres a la vez", () => {
  const P = "Puesto Orosi";
  const personas = [
    { id: "a", nombre: "Ana", puestoOperativo: P },
    { id: "b", nombre: "Bruno", puestoOperativo: P },
  ];
  const rol = () => ({
    [rolKey(2026, 8, P, "Ana", 1)]: "ANA",
    [rolKey(2026, 8, P, "Bruno", 1)]: "BRUNO",
  });

  it("un intercambio de nombres no se pisa a sí mismo", () => {
    /* Encadenando de uno en uno, lo de Ana acabaría en Bruno y acto seguido
       TODO lo de Bruno —incluido lo que acaba de llegar— volvería a Ana. Por
       eso hay una pasada intermedia. */
    const r = renombrarVariosFuncionarios({
      personas,
      roleData: rol(),
      renombres: [
        { antes: "Ana", despues: "Bruno" },
        { antes: "Bruno", despues: "Ana" },
      ],
    });
    expect(r.roleData[rolKey(2026, 8, P, "Bruno", 1)]).toBe("ANA");
    expect(r.roleData[rolKey(2026, 8, P, "Ana", 1)]).toBe("BRUNO");
    expect(r.celdas).toBe(2);
    expect(r.colisiones).toBe(0);
  });

  it("una cadena de nombres no arrastra a la persona de en medio", () => {
    const r = renombrarVariosFuncionarios({
      personas,
      roleData: rol(),
      renombres: [
        { antes: "Ana", despues: "Bruno" },
        { antes: "Bruno", despues: "Carla" },
      ],
    });
    expect(r.roleData[rolKey(2026, 8, P, "Bruno", 1)]).toBe("ANA");
    expect(r.roleData[rolKey(2026, 8, P, "Carla", 1)]).toBe("BRUNO");
    expect(Object.keys(r.roleData)).toHaveLength(2);
  });

  it("no deja ningún nombre provisional suelto", () => {
    const r = renombrarVariosFuncionarios({
      personas,
      roleData: rol(),
      renombres: [{ antes: "Ana", despues: "Ana Mora" }],
    });
    expect(Object.keys(r.roleData).some((k) => k.includes("renombre-"))).toBe(false);
  });

  it("arrastra también actividades y reposiciones", () => {
    const r = renombrarVariosFuncionarios({
      personas,
      roleData: rol(),
      actividadesPlan: [{ id: "a1", funcionarios: ["Ana", "Bruno"] }],
      reposiciones: [{ id: "r1", funcionario: "Bruno" }],
      renombres: [{ antes: "Bruno", despues: "Bruno Mora" }],
    });
    expect(r.actividadesPlan[0].funcionarios).toEqual(["Ana", "Bruno Mora"]);
    expect(r.reposiciones[0].funcionario).toBe("Bruno Mora");
    expect(r.actividades).toBe(1);
    expect(r.reposicionesTocadas).toBe(1);
  });

  it("sin renombres devuelve el estado tal cual", () => {
    const roleData = rol();
    const r = renombrarVariosFuncionarios({ personas, roleData, renombres: [] });
    expect(r.roleData).toBe(roleData);
    expect(r.renombres).toBe(0);
  });
});
