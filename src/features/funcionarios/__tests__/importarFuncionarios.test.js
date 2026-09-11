import { beforeEach, describe, expect, it } from "vitest";
import {
  claveIdentidad,
  planificarImportacion,
  _resetIdImportacion,
} from "../importarFuncionarios.js";

beforeEach(_resetIdImportacion);

const ana = { id: "f1", nombre: "Ana Pérez", cedula: "1-0000-0001", estado: "Activo", obs: "" };
const bruno = { id: "f2", nombre: "Bruno Salas", cedula: "1-0000-0002", estado: "Activo", obs: "" };
const PLANTILLA = { estado: "Activo", jornada: "Ordinaria", obs: "" };

describe("claveIdentidad", () => {
  it("la cédula manda, comparada solo por sus dígitos", () => {
    expect(claveIdentidad({ cedula: "1-0000-0001" })).toBe(claveIdentidad({ cedula: "100000001" }));
  });

  it("sin cédula cae al nombre, sin tildes ni mayúsculas ni espacios de más", () => {
    expect(claveIdentidad({ nombre: "  ana   PÉREZ " })).toBe(claveIdentidad({ nombre: "Ana Perez" }));
  });

  it("la cédula gana al nombre cuando están las dos", () => {
    expect(claveIdentidad({ nombre: "Otro", cedula: "1-0000-0001" })).toBe("c:100000001");
  });

  it("sin nombre ni cédula no hay identidad", () => {
    expect(claveIdentidad({ obs: "algo" })).toBe("");
    expect(claveIdentidad(null)).toBe("");
  });
});

describe("planificarImportacion", () => {
  it("fusiona: quien no aparece en el archivo NO se borra", () => {
    const plan = planificarImportacion([ana, bruno], [{ nombre: "Ana Pérez", cedula: "1-0000-0001", obs: "x" }], PLANTILLA);
    expect(plan.resultado).toHaveLength(2);
    expect(plan.resultado.find((p) => p.id === "f2")).toEqual(bruno);
  });

  it("da de alta a quien no existe, con los valores por defecto", () => {
    const plan = planificarImportacion([ana], [{ nombre: "Carla Mora", cedula: "1-0000-0003" }], PLANTILLA);
    expect(plan.nuevos).toHaveLength(1);
    expect(plan.actualizados).toHaveLength(0);
    const carla = plan.resultado[1];
    expect(carla.nombre).toBe("Carla Mora");
    expect(carla.jornada).toBe("Ordinaria");
    expect(carla.id).toBeTruthy();
  });

  it("actualiza solo las columnas que trae el archivo y conserva el id", () => {
    const plan = planificarImportacion([ana], [{ cedula: "1-0000-0001", obs: "nueva nota" }], PLANTILLA);
    expect(plan.actualizados).toHaveLength(1);
    const actualizada = plan.resultado[0];
    expect(actualizada.id).toBe("f1");
    expect(actualizada.obs).toBe("nueva nota");
    expect(actualizada.nombre).toBe("Ana Pérez");
    expect(actualizada.estado).toBe("Activo");
  });

  it("informa de qué campos cambian, para poder enseñarlo antes de aplicar", () => {
    const plan = planificarImportacion([ana], [{ cedula: "1-0000-0001", obs: "x", estado: "Activo" }], PLANTILLA);
    expect(plan.actualizados[0].cambios).toEqual(["obs"]);
  });

  it("respeta la posición: actualizar no reordena la lista", () => {
    const plan = planificarImportacion([ana, bruno], [{ cedula: "1-0000-0002", obs: "z" }], PLANTILLA);
    expect(plan.resultado.map((p) => p.id)).toEqual(["f1", "f2"]);
  });

  it("omite las filas sin nombre ni cédula y dice cuáles eran", () => {
    const plan = planificarImportacion([ana], [{ obs: "huérfana" }, { nombre: "Dora", cedula: "" }], PLANTILLA);
    expect(plan.omitidos).toEqual([{ fila: 2, motivo: "sinIdentidad" }]);
    expect(plan.nuevos).toHaveLength(1);
  });

  it("numera las filas como las ve Excel: la 1 es la cabecera", () => {
    const plan = planificarImportacion([], [{ nombre: "Uno" }, { nombre: "Dos" }], PLANTILLA);
    expect(plan.nuevos.map((n) => n.fila)).toEqual([2, 3]);
  });

  it("si el archivo repite una identidad gana la última, y se informa", () => {
    const plan = planificarImportacion(
      [],
      [
        { nombre: "Ana Pérez", cedula: "1-0000-0001", obs: "primera" },
        { nombre: "Ana Pérez", cedula: "100000001", obs: "segunda" },
      ],
      PLANTILLA,
    );
    expect(plan.resultado).toHaveLength(1);
    expect(plan.resultado[0].obs).toBe("segunda");
    expect(plan.duplicados).toEqual([{ fila: 3, anterior: 2 }]);
  });

  it("dos altas seguidas no comparten id", () => {
    const plan = planificarImportacion([], [{ nombre: "Uno" }, { nombre: "Dos" }], PLANTILLA);
    expect(plan.resultado[0].id).not.toBe(plan.resultado[1].id);
  });

  it("no muta la lista original", () => {
    const original = [{ ...ana }];
    planificarImportacion(original, [{ cedula: "1-0000-0001", obs: "cambiado" }], PLANTILLA);
    expect(original[0].obs).toBe("");
  });

  it("un archivo sin filas no cambia nada", () => {
    const plan = planificarImportacion([ana], [], PLANTILLA);
    expect(plan.resultado).toEqual([ana]);
    expect(plan.nuevos).toHaveLength(0);
  });

  it("tolera entradas no válidas sin lanzar", () => {
    expect(planificarImportacion(null, null).resultado).toEqual([]);
    expect(planificarImportacion(undefined, undefined).nuevos).toEqual([]);
  });
});
