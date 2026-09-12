import { describe, it, expect } from "vitest";
import { alertas, alertasDeFuncionario } from "../alertas.js";

const base = {
  id: "f1",
  nombre: "Test User",
  cedula: "1-0000-0001",
  email: "test@sinac.go.cr",
  puesto: "Guardaparques",
  condicion: "Propiedad",
  jornada: "Ordinaria",
  modalidad: "Horario administrativo L-V",
  resolucion: "",
  disponibilidad: false,
  contrato: "",
  vencimiento: "",
  policia: false,
  brigada: false,
  ong: false,
  estado: "Activo",
  obs: "",
};

describe("alertas — sin condiciones críticas", () => {
  it("retorna OK cuando no hay vencimientos ni incoherencias", () => {
    const r = alertas([{ ...base }]);
    expect(r).toHaveLength(1);
    expect(r[0].t).toBe("ok");
    expect(r[0].msg).toMatch(/Sin alertas críticas/);
  });
});

describe("alertas — disponibilidad", () => {
  it("vencida (días < 0) genera danger", () => {
    const r = alertas([
      {
        ...base,
        disponibilidad: true,
        contrato: "DISP-01",
        vencimiento: "2026-05-01", // antes de la fecha de referencia 2026-05-19
      },
    ]);
    expect(r.some((a) => a.t === "danger" && /Disponibilidad vencida/.test(a.msg))).toBe(true);
  });
  it("por vencer (0 ≤ días ≤ 60) genera warn", () => {
    const r = alertas([
      {
        ...base,
        disponibilidad: true,
        contrato: "DISP-02",
        vencimiento: "2026-05-30",
      },
    ]);
    expect(r.some((a) => a.t === "warn" && /por vencer/i.test(a.msg))).toBe(true);
  });
  it("> 60 días no alerta", () => {
    const r = alertas([
      {
        ...base,
        disponibilidad: true,
        contrato: "DISP-03",
        vencimiento: "2026-12-31",
      },
    ]);
    expect(r.every((a) => !/Disponibilidad/.test(a.msg))).toBe(true);
  });
});

describe("alertas — resolución acumulativa", () => {
  it("Acumulativa sin resolución (no ONG) genera warn", () => {
    const r = alertas([
      { ...base, jornada: "Acumulativa", resolucion: "", ong: false },
    ]);
    expect(r.some((a) => a.t === "warn" && /Sin resolución acumulativa/.test(a.msg))).toBe(true);
  });
  it("ONG no dispara la alerta de resolución", () => {
    const r = alertas([
      { ...base, jornada: "Acumulativa", resolucion: "", ong: true },
    ]);
    expect(r.every((a) => !/Sin resolución acumulativa/.test(a.msg))).toBe(true);
  });
});

describe("alertas — incapacidad con disponibilidad activa", () => {
  it("dispara danger", () => {
    const r = alertas([
      {
        ...base,
        estado: "Incapacitado",
        disponibilidad: true,
        contrato: "DISP-04",
        vencimiento: "2026-12-31",
      },
    ]);
    expect(r.some((a) => a.t === "danger" && /Revisar disponibilidad/.test(a.msg))).toBe(true);
  });
});

describe("alertas por funcionario (VF6)", () => {
  const PERSONAS = [
    { id: "p1", nombre: "Ana Rojas", estado: "Activo", jornada: "Acumulativa", modalidad: "10x5", resolucion: "", ong: false, disponibilidad: false },
    { id: "p2", nombre: "Beto Mora", estado: "Activo", jornada: "Ordinaria", modalidad: "Horario administrativo L-V", resolucion: "R-1", ong: false, disponibilidad: false },
  ];

  it("cada alerta de personal dice a quién pertenece", () => {
    const lista = alertas(PERSONAS);
    expect(lista.length).toBeGreaterThan(0);
    for (const a of lista) expect(a.funcionario).toBe("Ana Rojas");
  });

  it("filtra por el campo y no por el texto del mensaje", () => {
    const lista = alertas(PERSONAS);
    expect(alertasDeFuncionario(lista, "Ana Rojas").length).toBe(lista.length);
    expect(alertasDeFuncionario(lista, "Beto Mora")).toEqual([]);
  });

  it("el aviso de «sin alertas críticas» nunca se atribuye a nadie", () => {
    const lista = alertas([PERSONAS[1]]);
    expect(lista).toHaveLength(1);
    expect(lista[0].t).toBe("ok");
    expect(lista[0].funcionario).toBeUndefined();
    expect(alertasDeFuncionario(lista, "Beto Mora")).toEqual([]);
  });

  it("sin nombre no devuelve nada", () => {
    expect(alertasDeFuncionario(alertas(PERSONAS), "")).toEqual([]);
  });

  it("la alerta de tiempo por reponer también queda atribuida", () => {
    const reposiciones = [
      { id: "r1", folio: "REP-001", funcionario: "Beto Mora", fecha: "2026-05-02", magnitud: "diaEntero", horas: 0, cuotas: [] },
    ];
    const lista = alertas(PERSONAS, { reposiciones });
    const suyas = alertasDeFuncionario(lista, "Beto Mora");
    expect(suyas).toHaveLength(1);
    expect(suyas[0].msg).toContain("Tiempo por reponer");
  });
});
