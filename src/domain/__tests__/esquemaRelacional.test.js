import { describe, expect, it } from "vitest";
import {
  TABLAS,
  TIPOS,
  codigoOriginalDeRol,
  conteoDeTablas,
  partirClaveModalidad,
  partirClaveRol,
  tablasDesdeEstado,
} from "../esquemaRelacional.js";

const ESTADO = {
  puestos: [
    { nombre: "Puesto Orosi", tag: "OR", color: "bg-orange-100 text-orange-950" },
    { nombre: "Puesto Villa Mills", tag: "VM", color: "bg-violet-100 text-violet-950" },
  ],
  personas: [
    {
      id: "f1",
      nombre: "Ana Mora",
      cedula: "1-1111-1111",
      email: "ana@sinac.go.cr",
      puesto: "Guardaparque",
      puestoOperativo: "Puesto Orosi",
      disponibilidad: true,
      policia: false,
      obs: "Nota",
    },
  ],
  roleData: {
    "2026-9-Puesto Orosi-Ana Mora-1": "T3",
    "2026-9-Puesto Orosi-Ana Mora-2": "O-FA",
    "2026-9-Puesto Orosi-Ana Mora-3": "",
    "CFG-2026-9-Puesto Orosi-Ana Mora": "12x6",
    "basura sin forma de clave": "T1",
  },
  actividadesPlan: [
    {
      id: "a1",
      titulo: "Patrullaje",
      categoria: "Otra actividad",
      inicio: "2026-09-01",
      fin: "2026-09-01",
      unDia: true,
      horaInicio: "08:00",
      horaFin: "16:00",
      funcionarios: ["Ana Mora", "Ana Mora"],
      otrosParticipantes: [{ nombre: "Voluntariado", contacto: "" }],
      lugar: "Orosi",
      viatico: true,
    },
    { titulo: "Sin id, se descarta", inicio: "2026-09-02" },
  ],
  reposiciones: [
    {
      id: "r1",
      folio: "REP-001",
      funcionario: "Ana Mora",
      fecha: "2026-05-24",
      tipoDia: "Día libre",
      motivo: "Incendio forestal",
      magnitud: "diaEntero",
      horas: 0,
      cuotas: [{ id: "r1-c1", fecha: "2026-05-31", magnitud: "medioDia", horas: 4 }],
    },
  ],
  historial: [
    {
      id: "h1",
      fecha: "2026-09-10T10:00:00.000Z",
      tipo: "edicion",
      funcionario: { nombre: "Ana Mora", cedula: "1-1111-1111" },
      cambios: [{ campo: "estado", antes: "Activo", despues: "Inactivo" }],
    },
  ],
  reglas: { diaCorteViaticos: 15, puestosRequierenVisitantesDiario: ["Puesto Orosi"] },
};

describe("partirClaveRol", () => {
  it("descompone una clave normal", () => {
    expect(partirClaveRol("2026-9-Puesto Orosi-Errol Salazar-15")).toEqual({
      anio: 2026,
      mes: 9,
      puesto: "Puesto Orosi",
      funcionario: "Errol Salazar",
      dia: 15,
    });
  });

  it("no confunde el día de dos cifras con el final del nombre", () => {
    // Sin el retroceso correcto del regex, «...-15» se leería como funcionario
    // «...-1» y día 5.
    expect(partirClaveRol("2026-9-Puesto Orosi-Errol Salazar-15").dia).toBe(15);
    expect(partirClaveRol("2026-9-Puesto Orosi-Errol Salazar-5").dia).toBe(5);
  });

  it("usa la lista de puestos conocidos cuando el nombre del puesto lleva guiones", () => {
    const conocidos = ["Puesto Orosi-Sector Alto"];
    expect(partirClaveRol("2026-9-Puesto Orosi-Sector Alto-Ana Mora-7", conocidos)).toEqual({
      anio: 2026,
      mes: 9,
      puesto: "Puesto Orosi-Sector Alto",
      funcionario: "Ana Mora",
      dia: 7,
    });
    // Sin esa lista, partir por el primer guion se equivoca; por eso
    // `tablasDesdeEstado` siempre la pasa.
    expect(partirClaveRol("2026-9-Puesto Orosi-Sector Alto-Ana Mora-7").puesto).toBe("Puesto Orosi");
  });

  it("devuelve null ante una clave con otra forma", () => {
    expect(partirClaveRol("no es una clave")).toBeNull();
    expect(partirClaveRol("2026-9-SoloUnaParte")).toBeNull();
  });

  it("descompone la clave de modalidad", () => {
    expect(partirClaveModalidad("CFG-2026-9-Puesto Orosi-Ana Mora")).toEqual({
      anio: 2026,
      mes: 9,
      puesto: "Puesto Orosi",
      funcionario: "Ana Mora",
    });
  });
});

describe("codigoOriginalDeRol", () => {
  it("deshace la conversión del libro institucional", () => {
    expect(codigoOriginalDeRol("T5")).toBe("5");
    expect(codigoOriginalDeRol("O-FA")).toBe("FA");
    expect(codigoOriginalDeRol("O-CM")).toBe("CM");
    expect(codigoOriginalDeRol("IN")).toBe("IN");
    expect(codigoOriginalDeRol("L3")).toBe("L3");
    expect(codigoOriginalDeRol("")).toBe("");
  });
});

describe("tablasDesdeEstado", () => {
  const tablas = tablasDesdeEstado(ESTADO, { esActividadOficial: (a) => a.id === "a1" });

  it("produce una tabla por definición, sin sobrar ni faltar ninguna", () => {
    expect(Object.keys(tablas).sort()).toEqual(TABLAS.map((t) => t.nombre).sort());
  });

  it("cada fila trae exactamente las columnas declaradas", () => {
    for (const definicion of TABLAS) {
      const columnas = definicion.columnas.map((c) => c.nombre).sort();
      for (const fila of tablas[definicion.nombre]) {
        expect(Object.keys(fila).sort()).toEqual(columnas);
      }
    }
  });

  it("un día sin marcar no genera fila: no es un hecho", () => {
    expect(tablas.rol_dias).toHaveLength(2);
    expect(tablas.rol_dias.map((r) => r.dia)).toEqual([1, 2]);
  });

  it("añade la fecha ISO y la categoría del dominio a cada día de rol", () => {
    const [primero, segundo] = tablas.rol_dias;
    expect(primero).toMatchObject({
      fecha: "2026-09-01",
      valor: "T3",
      categoria: "T",
      codigo_original: "3",
    });
    expect(segundo).toMatchObject({
      fecha: "2026-09-02",
      valor: "O-FA",
      categoria: "O",
      codigo_original: "FA",
    });
  });

  it("separa las modalidades de los días", () => {
    expect(tablas.rol_modalidades).toEqual([
      { anio: 2026, mes: 9, puesto: "Puesto Orosi", funcionario: "Ana Mora", modalidad: "12x6" },
    ]);
  });

  it("descarta las claves de roleData que no tienen forma de clave", () => {
    expect(tablas.rol_dias.every((r) => Number.isFinite(r.anio))).toBe(true);
  });

  it("convierte las listas anidadas en tablas de enlace y no repite participantes", () => {
    expect(tablas.actividad_funcionarios).toEqual([{ actividad_id: "a1", funcionario: "Ana Mora" }]);
    expect(tablas.actividad_externos).toEqual([
      { actividad_id: "a1", nombre: "Voluntariado", contacto: "" },
    ]);
    expect(tablas.reposicion_cuotas).toHaveLength(1);
    expect(tablas.historial_cambios).toEqual([
      { historial_id: "h1", campo: "estado", antes: "Activo", despues: "Inactivo" },
    ]);
  });

  it("descarta el registro sin id: una fila sin clave primaria no es exportable", () => {
    expect(tablas.actividades.map((a) => a.id)).toEqual(["a1"]);
  });

  it("marca qué actividades vienen del documento institucional", () => {
    expect(tablas.actividades[0].oficial).toBe(true);
  });

  it("guarda las reglas como clave/valor JSON, para que una lista quepa", () => {
    const regla = tablas.reglas.find((r) => r.clave === "puestosRequierenVisitantesDiario");
    expect(JSON.parse(regla.valor)).toEqual(["Puesto Orosi"]);
  });

  it("respeta la integridad referencial que declara el esquema", () => {
    for (const definicion of TABLAS) {
      for (const fk of definicion.foraneas || []) {
        const destino = TABLAS.find((t) => t.nombre === fk.tabla);
        expect(destino).toBeTruthy();
        const claves = new Set(
          tablas[fk.tabla].map((fila) => fk.referencia.map((c) => fila[c]).join(" ")),
        );
        for (const fila of tablas[definicion.nombre]) {
          // Una referencia vacía es «sin asignar», no una violación.
          if (fk.columnas.every((c) => !fila[c])) continue;
          expect(claves.has(fk.columnas.map((c) => fila[c]).join(" "))).toBe(true);
        }
      }
    }
  });

  it("incluye el puesto renombrado al que todavía apunta el rol archivado", () => {
    // Renombrar un puesto arrastra las fichas y las reglas, pero NO reescribe
    // las claves de `roleData`: el rol de los meses anteriores sigue archivado
    // bajo el nombre viejo. Sin su fila padre, el volcado SQL revienta en la
    // primera fila histórica con «FOREIGN KEY constraint failed».
    const renombrado = tablasDesdeEstado({
      puestos: [{ nombre: "Puesto Orosi Centro", tag: "OR", color: "bg-orange-100 text-orange-950" }],
      personas: [{ id: "f1", nombre: "Ana Mora", puestoOperativo: "Puesto Orosi Centro" }],
      roleData: { "2026-9-Puesto Orosi-Ana Mora-1": "T1" },
    });

    expect(renombrado.rol_dias[0].puesto).toBe("Puesto Orosi");
    expect(renombrado.puestos).toEqual([
      {
        nombre: "Puesto Orosi Centro",
        codigo: "OR",
        color: "bg-orange-100 text-orange-950",
        orden: 1,
        vigente: true,
      },
      { nombre: "Puesto Orosi", codigo: "", color: "", orden: null, vigente: false },
    ]);
  });

  it("también recupera el puesto que solo aparece en una ficha o en una modalidad", () => {
    const suelto = tablasDesdeEstado({
      puestos: [{ nombre: "Puesto Orosi", tag: "OR" }],
      personas: [{ id: "f1", nombre: "Ana Mora", puestoOperativo: "Puesto Retirado" }],
      roleData: { "CFG-2026-9-Puesto Antiguo-Ana Mora": "12x6" },
    });
    const nombres = suelto.puestos.map((p) => p.nombre);
    expect(nombres).toContain("Puesto Retirado");
    expect(nombres).toContain("Puesto Antiguo");
    expect(suelto.puestos.filter((p) => !p.vigente)).toHaveLength(2);
  });

  it("no duplica un puesto vigente al recoger las referencias", () => {
    const normal = tablasDesdeEstado({
      puestos: [{ nombre: "Puesto Orosi", tag: "OR" }],
      personas: [{ id: "f1", nombre: "Ana Mora", puestoOperativo: "Puesto Orosi" }],
      roleData: { "2026-9-Puesto Orosi-Ana Mora-1": "T1" },
    });
    expect(normal.puestos).toHaveLength(1);
    expect(normal.puestos[0].vigente).toBe(true);
  });

  it("cuenta las filas de todas las tablas, incluidas las vacías", () => {
    const conteo = conteoDeTablas(tablas);
    expect(Object.keys(conteo)).toHaveLength(TABLAS.length);
    expect(conteo.funcionarios).toBe(1);
    expect(conteo.rol_dias).toBe(2);
  });

  it("no revienta con un estado vacío", () => {
    const vacio = tablasDesdeEstado({});
    expect(Object.keys(vacio).sort()).toEqual(TABLAS.map((t) => t.nombre).sort());
    expect(Object.values(vacio).every((f) => f.length === 0)).toBe(true);
  });

  it("todas las columnas declaran un tipo conocido", () => {
    const validos = new Set(Object.values(TIPOS));
    for (const t of TABLAS) for (const c of t.columnas) expect(validos.has(c.tipo)).toBe(true);
  });

  it("cada tabla declara su clave primaria y las foráneas apuntan a tablas anteriores", () => {
    const vistas = new Set();
    for (const t of TABLAS) {
      expect(t.clavePrimaria?.length).toBeGreaterThan(0);
      for (const fk of t.foraneas || []) expect(vistas.has(fk.tabla)).toBe(true);
      vistas.add(t.nombre);
    }
  });
});
