/**
 * @vitest-environment jsdom
 */
import { useState } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { AppProvider } from "../../../context/AppContext.jsx";
import { ToastProvider } from "../../../context/ToastContext.jsx";
import ToastViewport from "../../../ui/Toast.jsx";
import { rolKey } from "../../../domain/roles.js";
import { alertas } from "../../../domain/alertas.js";
import FichaFuncionario from "../FichaFuncionario.jsx";

const HOY = "2026-07-10";
const YEAR = 2026;
const MONTH = 6; // julio

const PERSONAS = [
  {
    id: "f1", nombre: "Ana Pérez", cedula: "1-0000-0001", email: "ana@sinac.go.cr",
    puesto: "Guardaparques", puestoOperativo: "Puesto Quetzales", condicion: "Propiedad",
    jornada: "Acumulativa", modalidad: "10x5", resolucion: "RES-1", disponibilidad: true,
    contrato: "DISP-1", vencimiento: "2026-12-31", policia: true, brigada: false, ong: false,
    jefe: "Administración PNLQ", estado: "Activo", ingreso: "2019-03-01", obs: "Turno base en Quetzales",
  },
  {
    id: "f3", nombre: "Carla Ruiz", cedula: "1-0000-0003", email: "carla@sinac.go.cr",
    puesto: "Guardaparques", puestoOperativo: "Puesto Quetzales", condicion: "Propiedad",
    jornada: "Ordinaria", modalidad: "Horario administrativo L-V", resolucion: "RES-2", disponibilidad: false,
    contrato: "", vencimiento: "", policia: false, brigada: false, ong: false,
    jefe: "Administración PNLQ", estado: "Activo", ingreso: "2021-01-04", obs: "",
  },
  {
    id: "f2", nombre: "Bruno Salas", cedula: "1-0000-0002", email: "bruno@sinac.go.cr",
    puesto: "Asistente Administrativo", puestoOperativo: "Puesto Quetzales", condicion: "Interino",
    jornada: "Ordinaria", modalidad: "Horario administrativo L-V", resolucion: "", disponibilidad: false,
    contrato: "", vencimiento: "", policia: false, brigada: false, ong: false,
    jefe: "Administración PNLQ", estado: "Activo", ingreso: "", obs: "",
  },
];

const ACTIVIDADES = [
  { id: "a1", titulo: "Patrullaje de control", inicio: "2026-07-01", fin: "2026-07-02", lugar: "Sector norte", funcionarios: ["Ana Pérez"] },
  { id: "a2", titulo: "Capacitación en radio", inicio: "2026-07-09", fin: "2026-07-11", lugar: "Sede", funcionarios: ["Ana Pérez", "Bruno Salas"] },
  { id: "a3", titulo: "Censo de quetzales", inicio: "2026-07-20", funcionarios: ["Ana Pérez"] },
  { id: "a4", titulo: "Solo de Bruno", inicio: "2026-07-21", funcionarios: ["Bruno Salas"] },
];

const REPOSICIONES = [
  { id: "r1", folio: "REP-001", funcionario: "Ana Pérez", fecha: "2026-07-04", tipoDia: "Día libre", motivo: "Incendio forestal", magnitud: "diaEntero", horas: 0, cuotas: [] },
  { id: "r2", folio: "REP-002", funcionario: "Ana Pérez", fecha: "2026-07-05", tipoDia: "Feriado", motivo: "Emergencia", magnitud: "medioDia", horas: 0, cuotas: [{ id: "c1", fecha: "2026-07-22", magnitud: "medioDia", horas: 0 }] },
  { id: "r3", folio: "REP-003", funcionario: "Bruno Salas", fecha: "2026-07-06", tipoDia: "Día libre", motivo: "Emergencia", magnitud: "diaEntero", horas: 0, cuotas: [] },
];

// Rol de julio de Ana: teletrabajo el 9 (primer día de «Capacitación en radio»).
const ROLE_DATA = {
  [rolKey(YEAR, MONTH, "Puesto Quetzales", "Ana Pérez", 9)]: "E1",
  [rolKey(YEAR, MONTH, "Puesto Quetzales", "Ana Pérez", 10)]: "T1",
  [rolKey(YEAR, MONTH, "Puesto Quetzales", "Ana Pérez", 11)]: "T2",
};

function montar({ nombre = "Ana Pérez", personas = PERSONAS } = {}) {
  const setView = vi.fn();
  const setDiaVista = vi.fn();
  const alerts = alertas(personas, { actividadesPlan: ACTIVIDADES, reposiciones: REPOSICIONES });
  function Probe() {
    const [gente, setGente] = useState(personas);
    return (
      <FichaFuncionario
        nombre={nombre}
        personas={gente}
        setPersonas={setGente}
        actividadesPlan={ACTIVIDADES}
        roleData={ROLE_DATA}
        reposiciones={REPOSICIONES}
        year={YEAR}
        month={MONTH}
        alerts={alerts}
        setView={setView}
        setDiaVista={setDiaVista}
      />
    );
  }
  const utils = render(
    <AppProvider>
      <ToastProvider>
        <Probe />
        <ToastViewport />
      </ToastProvider>
    </AppProvider>,
  );
  return { ...utils, setView, setDiaVista };
}

// «Hoy» fijo: el filtro de próximas/pasadas depende de la fecha real del
// equipo, y sin fijarla la prueba caducaría sola con el paso del tiempo.
vi.useFakeTimers();
vi.setSystemTime(new Date(`${HOY}T09:00:00`));

afterEach(() => {
  cleanup();
});

describe("Ficha de funcionario — datos básicos (VF2)", () => {
  it("enseña nombre, puesto operativo y los datos de la ficha", () => {
    montar();
    expect(screen.getByRole("heading", { name: "Ana Pérez" })).toBeDefined();
    // El puesto sale en la cabecera y otra vez en el historial de puestos, así
    // que `getByText` a secas ya no basta.
    expect(screen.getAllByText("Puesto Quetzales").length).toBeGreaterThan(0);
    expect(screen.getByText("1-0000-0001")).toBeDefined();
    expect(screen.getByText("ana@sinac.go.cr")).toBeDefined();
    expect(screen.getByText("Guardaparques")).toBeDefined();
    expect(screen.getByText("Turno base en Quetzales")).toBeDefined();
  });

  it("un enlace a alguien que ya no existe explica qué pasó y devuelve a la lista", () => {
    const { setView } = montar({ nombre: "Quien Sea" });
    expect(screen.getByText("No se encontró a esa persona")).toBeDefined();
    fireEvent.click(screen.getByRole("button", { name: /Volver a Funcionarios/ }));
    expect(setView).toHaveBeenCalledWith("funcionarios");
  });
});

describe("Ficha de funcionario — banco de tiempo (VF3)", () => {
  it("muestra el saldo de la persona y solo sus registros", () => {
    montar();
    // 8 h del día entero + 0 h del medio día ya repuesto = 8 h = 1 día.
    expect(screen.getByText("1 día")).toBeDefined();
    expect(screen.getByText("REP-001")).toBeDefined();
    expect(screen.getByText("REP-002")).toBeDefined();
    expect(screen.queryByText("REP-003")).toBeNull();
  });

  it("distingue lo pendiente de lo repuesto", () => {
    montar();
    expect(screen.getByText("2 registro(s)")).toBeDefined();
    expect(screen.getByText("1 pendiente(s)")).toBeDefined();
    expect(screen.getByText("1 repuesto(s)")).toBeDefined();
  });

  it("cada persona ve solo su propio banco", () => {
    montar({ nombre: "Bruno Salas" });
    expect(screen.queryByText("REP-001")).toBeNull();
    expect(screen.getByText("REP-003")).toBeDefined();
  });

  it("quien no tiene registros ve un vacío explicado, no una tabla vacía", () => {
    montar({ nombre: "Carla Ruiz" });
    expect(screen.getByText("Sin registros de tiempo trabajado fuera de rol")).toBeDefined();
    expect(screen.queryByText("REP-001")).toBeNull();
    expect(screen.queryByText("REP-003")).toBeNull();
  });
});

describe("Ficha de funcionario — rol del mes (VF5)", () => {
  it("resume los días por categoría del mes que se está viendo", () => {
    montar();
    expect(screen.getByText("Rol del mes")).toBeDefined();
    expect(screen.getByText(/Días de julio 2026/)).toBeDefined();
    // El 10 de julio es T1 y es «hoy» en esta prueba.
    expect(screen.getByText("Hoy: Turno")).toBeDefined();
  });
});

describe("Ficha de funcionario — actividades y filtro (VF4 y VF7)", () => {
  it("arranca en «Próximas» y no enseña lo ya terminado", () => {
    montar();
    expect(screen.getByRole("button", { name: "Próximas (2)" }).getAttribute("aria-pressed")).toBe("true");
    expect(screen.getByText("Capacitación en radio")).toBeDefined();
    expect(screen.getByText("Censo de quetzales")).toBeDefined();
    expect(screen.queryByText("Patrullaje de control")).toBeNull();
    // Nunca las de otra persona.
    expect(screen.queryByText("Solo de Bruno")).toBeNull();
  });

  it("cambia a pasadas y a todas", () => {
    montar();
    fireEvent.click(screen.getByRole("button", { name: "Pasadas (1)" }));
    expect(screen.getByText("Patrullaje de control")).toBeDefined();
    expect(screen.queryByText("Censo de quetzales")).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: "Todas (3)" }));
    expect(screen.getByText("Patrullaje de control")).toBeDefined();
    expect(screen.getByText("Censo de quetzales")).toBeDefined();
  });

  it("marca el teletrabajo día a día: la capacitación es teletrabajo 1 de 3 días", () => {
    montar();
    expect(screen.getByText("Teletrabajo 1 de 3 días")).toBeDefined();
  });

  it("una actividad que ya empezó y no ha terminado se marca en curso", () => {
    montar();
    expect(screen.getByText("En curso")).toBeDefined();
  });

  it("abre el día de la actividad desde la ficha", () => {
    const { setView, setDiaVista } = montar();
    // Hay un botón por actividad; el primero de «Próximas» es la capacitación.
    fireEvent.click(screen.getAllByRole("button", { name: /Ver el día/ })[0]);
    expect(setDiaVista).toHaveBeenCalledWith("2026-07-09");
    expect(setView).toHaveBeenCalledWith("dia");
  });

  it("quien no aparece en ninguna actividad ve un vacío explicado", () => {
    montar({ nombre: "Carla Ruiz" });
    expect(screen.getByText("Sin actividades asignadas")).toBeDefined();
    expect(screen.getByRole("button", { name: "Próximas (0)" })).toBeDefined();
  });
});

describe("Ficha de funcionario — alertas de la persona (VF6)", () => {
  it("solo trae las alertas a nombre de quien se está viendo", () => {
    montar();
    const panel = screen.getByText("Alertas de la persona").closest(".pnlq-card");
    expect(within(panel).getByText(/Tiempo por reponer — Ana Pérez/)).toBeDefined();
    expect(within(panel).queryByText(/Bruno Salas/)).toBeNull();
  });
});

describe("Ficha de funcionario — accesos (VF1)", () => {
  it("vuelve a la lista y salta a Roles y a Reposición", () => {
    const { setView } = montar();
    fireEvent.click(screen.getByRole("button", { name: /Ver en Roles/ }));
    expect(setView).toHaveBeenCalledWith("roles");
    fireEvent.click(screen.getByRole("button", { name: /Ver en Reposición/ }));
    expect(setView).toHaveBeenCalledWith("reposicion");
  });
});
