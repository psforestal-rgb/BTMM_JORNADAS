import { describe, it, expect } from "vitest";
import { sanitizeImportedState } from "../sanitize.js";

describe("sanitizeImportedState — import válido", () => {
  it("pasa sin modificar un state con datos válidos", () => {
    const state = {
      personas: [
        {
          id: "z1",
          nombre: "Ana Pérez",
          cedula: "1-0000-0001",
          email: "ana.perez@sinac.go.cr",
          puesto: "Guardaparques",
          puestoOperativo: "Puesto Orosi",
          condicion: "Propiedad",
          jornada: "Acumulativa",
          modalidad: "10x5",
          obs: "Sin observaciones",
          estado: "Activo",
          disponibilidad: true,
          policia: false,
          brigada: true,
          ong: false,
          jefe: "Administración PNLQ",
        },
      ],
      actividadesPlan: [
        { id: "act1", titulo: "Gira de mantenimiento", lugar: "Puesto Esperanza", viatico: true },
      ],
      roleData: { "2026-5-Puesto Orosi-z1-1": "T1" },
      reglas: { diaCorteViaticos: 15 },
    };
    const out = sanitizeImportedState(state);
    expect(out.personas).toEqual(state.personas);
    expect(out.actividadesPlan).toEqual(state.actividadesPlan);
    expect(out.roleData).toEqual(state.roleData);
    expect(out.reglas.diaCorteViaticos).toBe(15);
  });
});

describe("sanitizeImportedState — campos de texto libre", () => {
  it("nombre con <script> queda solo con el texto interno", () => {
    const out = sanitizeImportedState({
      personas: [{ id: "z2", nombre: "<script>alert(1)</script>" }],
    });
    expect(out.personas[0].nombre).toBe("alert(1)");
  });

  it("trunca nombre por encima de 120 chars", () => {
    const largo = "A".repeat(200);
    const out = sanitizeImportedState({ personas: [{ id: "z3", nombre: largo }] });
    expect(out.personas[0].nombre.length).toBe(120);
  });
});

describe("sanitizeImportedState — roleData", () => {
  it("un valor de 50 chars queda en cadena vacía", () => {
    const out = sanitizeImportedState({ roleData: { "clave-1": "X".repeat(50) } });
    expect(out.roleData["clave-1"]).toBe("");
  });

  it("un código corto válido se conserva", () => {
    const out = sanitizeImportedState({ roleData: { "clave-1": "T3" } });
    expect(out.roleData["clave-1"]).toBe("T3");
  });

  it("un valor no-string se descarta", () => {
    const out = sanitizeImportedState({ roleData: { "clave-1": 12345 } });
    expect(out.roleData["clave-1"]).toBe("");
  });
});

describe("sanitizeImportedState — persona.estado", () => {
  it("un estado inválido queda en 'Activo'", () => {
    const out = sanitizeImportedState({ personas: [{ id: "z4", estado: "Despedido" }] });
    expect(out.personas[0].estado).toBe("Activo");
  });

  it("un estado válido se conserva", () => {
    const out = sanitizeImportedState({ personas: [{ id: "z5", estado: "Incapacitado" }] });
    expect(out.personas[0].estado).toBe("Incapacitado");
  });
});

describe("sanitizeImportedState — campos estructurados inválidos usan el seed", () => {
  it("id con caracteres no permitidos se descarta a cadena vacía", () => {
    const out = sanitizeImportedState({ personas: [{ id: "<b>f1</b>" }] });
    expect(out.personas[0].id).toBe("");
  });

  it("email con formato inválido en un id conocido del seed usa el email del seed", () => {
    const out = sanitizeImportedState({ personas: [{ id: "f1", email: "no-es-un-email" }] });
    expect(out.personas[0].email).toBe("errol.salazar@sinac.go.cr");
  });

  it("cedula con letras se descarta a cadena vacía si no hay seed que coincida", () => {
    const out = sanitizeImportedState({ personas: [{ id: "zzz-no-existe", cedula: "abc<xss>" }] });
    expect(out.personas[0].cedula).toBe("");
  });
});

describe("sanitizeImportedState — booleanos", () => {
  it("un valor no-boolean en disponibilidad cae al default", () => {
    const out = sanitizeImportedState({ personas: [{ id: "z6", disponibilidad: "si" }] });
    expect(out.personas[0].disponibilidad).toBe(false);
  });
});

describe("sanitizeImportedState — actividadesPlan", () => {
  it("strip HTML y trunca campos de texto de una actividad", () => {
    const out = sanitizeImportedState({
      actividadesPlan: [{ id: "a1", titulo: "<img src=x onerror=alert(1)>Gira" }],
    });
    expect(out.actividadesPlan[0].titulo).toBe("Gira");
  });
});

describe("sanitizeImportedState — nunca lanza excepción", () => {
  it("con null, undefined y valores primitivos devuelve sin lanzar", () => {
    expect(() => sanitizeImportedState(null)).not.toThrow();
    expect(() => sanitizeImportedState(undefined)).not.toThrow();
    expect(() => sanitizeImportedState(42)).not.toThrow();
    expect(sanitizeImportedState(null)).toBeNull();
    expect(sanitizeImportedState(undefined)).toBeUndefined();
    expect(sanitizeImportedState(42)).toBe(42);
  });

  it("con arrays/objetos malformados dentro de state no lanza", () => {
    expect(() =>
      sanitizeImportedState({
        personas: "no es un arreglo",
        actividadesPlan: [null, 5, "texto", { id: "ok" }],
        roleData: null,
        reglas: "no es un objeto",
      }),
    ).not.toThrow();
  });
});
