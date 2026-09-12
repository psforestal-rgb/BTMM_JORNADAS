import { describe, expect, it } from "vitest";
import {
  filasDePlanificacion,
  filasDeReposicion,
  filasDeResumenRoles,
  filasDeRoles,
  isoDelPeriodo,
  nombreArchivo,
} from "../exportaciones.js";
import { parsearCSV, csvDescargable, BOM_UTF8 } from "../csv.js";
import { estadoReposicion, saldoHoras } from "../../domain/reposicion.js";
import { codigoRolFuncionario, rolKey } from "../../domain/roles.js";

const HJ = 8;

const REPOSICIONES = [
  { id: "r1", folio: "REP-001", funcionario: "Ana Rojas", fecha: "2026-07-04", tipoDia: "Día libre", motivo: "Incendio forestal", motivoDetalle: "Sector alto", magnitud: "diaEntero", horas: 0, cuotas: [], observaciones: "" },
  { id: "r2", folio: "REP-002", funcionario: "Beto Mora", fecha: "2026-07-11", tipoDia: "Feriado", motivo: "Emergencia", motivoDetalle: "", magnitud: "horas", horas: 6, cuotas: [{ id: "c1", fecha: "2026-07-25", magnitud: "horas", horas: 2 }], observaciones: "Con oficio" },
];

describe("exportación de reposición", () => {
  it("las horas y el estado son los del dominio, no un cálculo aparte", () => {
    const { filas } = filasDeReposicion(REPOSICIONES, HJ);
    expect(filas[0].horasTrabajadas).toBe(8);
    expect(filas[1].saldo).toBe(saldoHoras(REPOSICIONES[1], HJ));
    expect(filas[1].estado).toBe(estadoReposicion(REPOSICIONES[1], HJ));
    expect(filas[0].estado).toBe("Pendiente");
    expect(filas[1].estado).toBe("Parcial");
  });

  it("las cuotas caben en una celda, sin ensanchar el archivo", () => {
    const { filas } = filasDeReposicion(REPOSICIONES, HJ);
    expect(filas[0].cuotas).toBe("");
    expect(filas[1].cuotas).toContain("2 h");
  });

  it("sobrevive al viaje de ida y vuelta por CSV", () => {
    const { filas, columnas } = filasDeReposicion(REPOSICIONES, HJ);
    const texto = csvDescargable(filas, columnas);
    expect(texto.startsWith(BOM_UTF8)).toBe(true);
    const matriz = parsearCSV(texto.slice(BOM_UTF8.length));
    expect(matriz).toHaveLength(3); // cabecera + 2 registros
    expect(matriz[0]).toHaveLength(columnas.length);
    expect(matriz[1][0]).toBe("REP-001");
  });
});

describe("exportación de planificación", () => {
  const PLAN = [
    { id: "a1", titulo: "Gira de control", categoria: "Control y protección", inicio: "2026-07-02", fin: "2026-07-04", horaInicio: "07:00", horaFin: "16:00", lugar: "Sector norte", funcionarios: ["Ana Rojas", "Beto Mora"], otrosParticipantes: ["ONG"], viatico: true, observaciones: "Llevar radio" },
    { id: "a2", titulo: "Censo", inicio: "2026-07-20", funcionarios: [], otrosParticipantes: [], viatico: false, observaciones: "" },
  ];

  it("una actividad de varios días sale una sola vez, con su rango", () => {
    const { filas } = filasDePlanificacion(PLAN);
    expect(filas).toHaveLength(2);
    expect(filas[0].inicio).not.toBe("");
    expect(filas[0].fin).not.toBe(filas[0].inicio);
  });

  it("la de un solo día cierra en su propia fecha, no en blanco", () => {
    const { filas } = filasDePlanificacion(PLAN);
    expect(filas[1].fin).toBe(filas[1].inicio);
  });

  it("los participantes van en una celda y el viático como Sí/No", () => {
    const { filas } = filasDePlanificacion(PLAN);
    expect(filas[0].funcionarios).toBe("Ana Rojas · Beto Mora");
    expect(filas[0].viatico).toBe("Sí");
    expect(filas[1].viatico).toBe("No");
  });
});

describe("exportación del rol mensual", () => {
  const personas = [
    { id: "p1", nombre: "Ana Rojas", puestoOperativo: "Puesto Quetzales", modalidad: "10x5" },
    { id: "p2", nombre: "Beto Mora", puestoOperativo: "Puesto Quetzales", modalidad: "10x5" },
  ];
  const grupos = [{ nombre: "Puesto Quetzales", funcionarios: ["Ana Rojas", "Beto Mora"] }];
  const year = 2026;
  const month = 6;

  it("una columna por día del mes, más puesto, funcionario y total", () => {
    const { filas, columnas } = filasDeRoles({ grupos, personas, roleData: {}, year, month });
    expect(columnas).toHaveLength(31 + 3);
    expect(columnas[0].clave).toBe("puesto");
    expect(columnas[columnas.length - 1].clave).toBe("diasTrabajo");
    expect(filas).toHaveLength(2);
  });

  it("los códigos son los mismos que pinta la cuadrícula", () => {
    const roleData = { [rolKey(year, month, "Puesto Quetzales", "Ana Rojas", 3)]: "V1" };
    const { filas } = filasDeRoles({ grupos, personas, roleData, year, month });
    for (let d = 1; d <= 31; d += 1) {
      expect(filas[0][`d${d}`]).toBe(codigoRolFuncionario(personas, roleData, year, month, "Ana Rojas", d) || "");
    }
    expect(filas[0].d3).toBe("V1");
  });

  it("el teletrabajo cuenta como día de trabajo, igual que en pantalla", () => {
    const roleData = {};
    for (let d = 1; d <= 31; d += 1) roleData[rolKey(year, month, "Puesto Quetzales", "Ana Rojas", d)] = d <= 5 ? "E1" : "L1";
    const { filas } = filasDeRoles({ grupos, personas, roleData, year, month });
    expect(filas[0].diasTrabajo).toBe(5);
  });

  it("el resumen reparte los 31 días entre las categorías y lo sin marcar", () => {
    const { filas, columnas } = filasDeResumenRoles({ grupos, personas, roleData: {}, year, month });
    const claves = columnas.map((c) => c.clave).filter((c) => c !== "puesto" && c !== "funcionario");
    const suma = claves.reduce((acc, c) => acc + filas[0][c], 0);
    expect(suma).toBe(31);
  });
});

describe("nombres de archivo", () => {
  it("encadenan vista, periodo y marca de tiempo", () => {
    expect(nombreArchivo("rol", "2026-07", "20260712-1030")).toBe("rol-2026-07-20260712-1030.csv");
    expect(nombreArchivo("reposicion", null, "20260712-1030")).toBe("reposicion-20260712-1030.csv");
  });

  it("el periodo es el año y el mes que se está viendo", () => {
    expect(isoDelPeriodo(2026, 6)).toBe("2026-07");
    expect(isoDelPeriodo(2027, 0)).toBe("2027-01");
  });
});
