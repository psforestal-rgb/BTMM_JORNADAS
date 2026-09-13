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
        { id: "act1", titulo: "Gira de mantenimiento", lugar: "Puesto Esperanza", viatico: true, inicio: "2026-05-06", fin: "2026-05-06" },
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
      actividadesPlan: [{ id: "a1", titulo: "<img src=x onerror=alert(1)>Gira", inicio: "2026-05-06" }],
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

describe("sanitizeImportedState — descarta entradas no-objeto en arreglos", () => {
  it("personas: null/números/strings sueltos se eliminan del arreglo, no se conservan", () => {
    const out = sanitizeImportedState({ personas: [null, 5, "texto", { id: "z1", nombre: "Ana" }] });
    expect(out.personas).toHaveLength(1);
    expect(out.personas[0].nombre).toBe("Ana");
  });

  it("actividadesPlan: entradas null no llegan al arreglo final (evita romper indexarReposiciones/listados aguas abajo)", () => {
    const out = sanitizeImportedState({
      actividadesPlan: [null, { id: "act1", titulo: "Gira", inicio: "2026-05-06" }],
    });
    expect(out.actividadesPlan).toEqual([{ id: "act1", titulo: "Gira", inicio: "2026-05-06" }]);
  });
});

describe("sanitizeImportedState — reposiciones", () => {
  it("una reposición null se descarta sin lanzar (antes rompía indexarReposiciones)", () => {
    const out = sanitizeImportedState({ reposiciones: [null, { funcionario: "Ana", fecha: "2026-05-01" }] });
    expect(out.reposiciones).toHaveLength(1);
    expect(out.reposiciones[0].funcionario).toBe("Ana");
  });

  it("una reposición sin funcionario o sin fecha se descarta (no es reparable: indexarReposiciones indexa por esa clave)", () => {
    const out = sanitizeImportedState({
      reposiciones: [
        { fecha: "2026-05-01" },
        { funcionario: "Ana" },
        { funcionario: "Ana", fecha: "no-es-fecha" },
        { funcionario: "Ana", fecha: "2026-05-01" },
      ],
    });
    expect(out.reposiciones).toHaveLength(1);
  });

  it("campos de vocabulario controlado (tipoDia, motivo, magnitud) inválidos caen a un valor válido, no se rechaza el registro", () => {
    const out = sanitizeImportedState({
      reposiciones: [
        { funcionario: "Ana", fecha: "2026-05-01", tipoDia: "<script>", motivo: 123, magnitud: "semanaEntera" },
      ],
    });
    expect(out.reposiciones).toHaveLength(1);
    expect(["Día libre", "Fuera de turno", "Feriado", "Vacaciones interrumpidas", "Otro"]).toContain(out.reposiciones[0].tipoDia);
    expect(out.reposiciones[0].magnitud).toBe("diaEntero");
  });

  it("actividad con inicio/fin patológicos (año fuera de rango) se descarta entera, no deja pasar un rango que 'cubra' todos los días", () => {
    // Los campos reales que usa actividadesEnDia() son inicio/fin, no
    // fecha/fechaInicio/fechaFin — con inicio="0000-01-01" y fin="9999-12-31"
    // sin sanear, la actividad coincidiría con prácticamente cualquier día
    // renderizado en el calendario.
    const out = sanitizeImportedState({
      actividadesPlan: [{ id: "a1", titulo: "Maliciosa", inicio: "0000-01-01", fin: "9999-12-31" }],
    });
    expect(out.actividadesPlan).toHaveLength(0);
  });

  it("actividad sin inicio se descarta entera (no es reparable)", () => {
    const out = sanitizeImportedState({ actividadesPlan: [{ id: "a1", titulo: "Sin fecha" }] });
    expect(out.actividadesPlan).toHaveLength(0);
  });

  it("actividad con inicio válido pero fin inválido: fin colapsa a inicio en vez de descartar el registro", () => {
    const out = sanitizeImportedState({
      actividadesPlan: [{ id: "a1", titulo: "Gira", inicio: "2026-05-06", fin: "9999-99-99" }],
    });
    expect(out.actividadesPlan).toHaveLength(1);
    expect(out.actividadesPlan[0].inicio).toBe("2026-05-06");
    expect(out.actividadesPlan[0].fin).toBe("2026-05-06");
  });

  it("actividad válida con inicio/fin normales se conserva intacta", () => {
    const out = sanitizeImportedState({
      actividadesPlan: [{ id: "a1", titulo: "Gira", inicio: "2026-05-06", fin: "2026-05-07", unDia: false }],
    });
    expect(out.actividadesPlan).toHaveLength(1);
    expect(out.actividadesPlan[0].inicio).toBe("2026-05-06");
    expect(out.actividadesPlan[0].fin).toBe("2026-05-07");
  });
});

describe("sanitizeImportedState — límites de tamaño/cantidad", () => {
  it("roleData: descarta claves absurdamente largas (protege contra entradas patológicas)", () => {
    const clavesLarga = "x".repeat(500);
    const out = sanitizeImportedState({ roleData: { [clavesLarga]: "T1", "2026-5-Puesto-z1-1": "T1" } });
    expect(Object.keys(out.roleData)).toEqual(["2026-5-Puesto-z1-1"]);
  });

  it("personas: un arreglo desproporcionadamente grande se recorta a un máximo razonable", () => {
    const enorme = Array.from({ length: 2000 }, (_, i) => ({ id: `p${i}`, nombre: `Persona ${i}` }));
    const out = sanitizeImportedState({ personas: enorme });
    expect(out.personas.length).toBeLessThan(2000);
    expect(out.personas.length).toBeGreaterThan(0);
  });
});

describe("sanitizeImportedState — puestos", () => {
  it("conserva un puesto válido tal cual", () => {
    const out = sanitizeImportedState({
      puestos: [{ nombre: "Puesto Villa Mills", tag: "VM", color: "bg-violet-100 text-violet-950" }],
    });
    expect(out.puestos).toEqual([
      { nombre: "Puesto Villa Mills", tag: "VM", color: "bg-violet-100 text-violet-950" },
    ]);
  });

  it("descarta el puesto sin nombre: el nombre es su identidad, no hay default honesto", () => {
    const out = sanitizeImportedState({
      puestos: [{ nombre: "   ", tag: "XX" }, { nombre: "Puesto Orosi", tag: "OR" }],
    });
    expect(out.puestos.map((p) => p.nombre)).toEqual(["Puesto Orosi"]);
  });

  it("un color fuera de la paleta cerrada cae al primero, no se aplica tal cual", () => {
    const out = sanitizeImportedState({
      puestos: [{ nombre: "Puesto Raro", tag: "RR", color: "bg-[url(javascript:alert(1))]" }],
    });
    expect(out.puestos[0].color).toBe("bg-orange-100 text-orange-950");
  });

  it("normaliza el código corto y vacía el que no tiene forma de código", () => {
    const out = sanitizeImportedState({
      puestos: [
        { nombre: "Puesto A", tag: " or " },
        { nombre: "Puesto B", tag: "con espacios y símbolos !!" },
      ],
    });
    expect(out.puestos[0].tag).toBe("OR");
    expect(out.puestos[1].tag).toBe("");
  });

  it("elimina nombres duplicados: gana el primero", () => {
    const out = sanitizeImportedState({
      puestos: [
        { nombre: "Puesto Orosi", tag: "OR" },
        { nombre: "puesto orosi", tag: "O2" },
      ],
    });
    expect(out.puestos).toHaveLength(1);
    expect(out.puestos[0].tag).toBe("OR");
  });

  it("limpia el HTML del nombre", () => {
    const out = sanitizeImportedState({ puestos: [{ nombre: "<b>Orosi</b>", tag: "OR" }] });
    expect(out.puestos[0].nombre).toBe("Orosi");
  });
});

describe("sanitizeImportedState — historial", () => {
  const entradaBase = {
    id: "h1",
    fecha: "2026-09-12T10:00:00.000Z",
    tipo: "edicion",
    funcionario: { nombre: "Ana Mora", cedula: "1-1111-1111" },
    cambios: [{ campo: "estado", antes: "Activo", despues: "Inactivo" }],
  };

  it("conserva una entrada válida", () => {
    const out = sanitizeImportedState({ historial: [entradaBase] });
    expect(out.historial).toEqual([entradaBase]);
  });

  it("descarta la entrada con un tipo que el dominio no crea", () => {
    const out = sanitizeImportedState({
      historial: [{ ...entradaBase, tipo: "inventado" }, entradaBase],
    });
    expect(out.historial).toHaveLength(1);
    expect(out.historial[0].tipo).toBe("edicion");
  });

  it("vacía la fecha ilegible en vez de descartar la entrada o inventar una", () => {
    const out = sanitizeImportedState({ historial: [{ ...entradaBase, fecha: "ayer por la tarde" }] });
    expect(out.historial).toHaveLength(1);
    expect(out.historial[0].fecha).toBe("");
  });

  it("completa los ids repetidos o ausentes: la vista los usa como key de React", () => {
    const out = sanitizeImportedState({
      historial: [entradaBase, { ...entradaBase }, { ...entradaBase, id: undefined }],
    });
    const ids = out.historial.map((e) => e.id);
    expect(new Set(ids).size).toBe(3);
  });

  it("deduplica los cambios del mismo campo", () => {
    const out = sanitizeImportedState({
      historial: [
        {
          ...entradaBase,
          cambios: [
            { campo: "estado", antes: "Activo", despues: "Inactivo" },
            { campo: "estado", antes: "X", despues: "Y" },
          ],
        },
      ],
    });
    expect(out.historial[0].cambios).toHaveLength(1);
  });

  it("conserva booleanos y limpia el HTML dentro de un cambio", () => {
    const out = sanitizeImportedState({
      historial: [
        { ...entradaBase, cambios: [{ campo: "disponibilidad", antes: false, despues: true }] },
      ],
    });
    expect(out.historial[0].cambios[0]).toEqual({ campo: "disponibilidad", antes: false, despues: true });

    const conHtml = sanitizeImportedState({
      historial: [
        { ...entradaBase, cambios: [{ campo: "obs", antes: "<script>x</script>ok", despues: "" }] },
      ],
    });
    expect(conHtml.historial[0].cambios[0].antes).toBe("xok");
  });

  it("recorta un rastro desproporcionado al tope del dominio", () => {
    const enorme = Array.from({ length: 500 }, (_, i) => ({ ...entradaBase, id: `h${i}` }));
    const out = sanitizeImportedState({ historial: enorme });
    expect(out.historial).toHaveLength(200);
  });

  it("sanea el detalle de una importación", () => {
    const out = sanitizeImportedState({
      historial: [
        {
          ...entradaBase,
          tipo: "importacion",
          detalle: { archivo: "<i>datos.csv</i>", altas: "7", cambios: Infinity },
        },
      ],
    });
    expect(out.historial[0].detalle).toEqual({ archivo: "datos.csv", altas: 7, cambios: 0 });
  });
});
