import { describe, expect, it } from "vitest";
import { destinoDeTecla, filasDeGrupos } from "../navegacionCuadricula.js";

const clave = (puesto, nombre) => `${puesto}|${nombre}`;

const GRUPOS = [
  { nombre: "Puesto Orosi", funcionarios: ["Ana", "Beto"] },
  { nombre: "Puesto Quetzales", funcionarios: ["Carla"] },
];
const FILAS = filasDeGrupos(GRUPOS, clave);

// Julio y agosto de 2026: 31 + 31 días, para probar el cruce de mes.
const COLUMNAS = [];
for (const [year, month, dias] of [[2026, 6, 31], [2026, 7, 31]]) {
  for (let d = 1; d <= dias; d += 1) {
    COLUMNAS.push({ year, month, dia: d, iso: `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}` });
  }
}

const mover = (tecla, fila, iso) => destinoDeTecla({ tecla, fila, iso, filas: FILAS, columnas: COLUMNAS });

describe("recorrido de la cuadrícula con el teclado", () => {
  it("las filas salen en el orden en que se pintan, puesto por puesto", () => {
    expect(FILAS).toEqual(["Puesto Orosi|Ana", "Puesto Orosi|Beto", "Puesto Quetzales|Carla"]);
  });

  it("izquierda y derecha se mueven de día en día", () => {
    expect(mover("ArrowRight", FILAS[0], "2026-07-08")).toEqual({ fila: FILAS[0], iso: "2026-07-09" });
    expect(mover("ArrowLeft", FILAS[0], "2026-07-08")).toEqual({ fila: FILAS[0], iso: "2026-07-07" });
  });

  it("cruzan el cambio de mes sin saltarse nada", () => {
    expect(mover("ArrowRight", FILAS[0], "2026-07-31")).toEqual({ fila: FILAS[0], iso: "2026-08-01" });
    expect(mover("ArrowLeft", FILAS[0], "2026-08-01")).toEqual({ fila: FILAS[0], iso: "2026-07-31" });
  });

  it("arriba y abajo cambian de funcionario y cruzan el cambio de puesto", () => {
    expect(mover("ArrowDown", FILAS[0], "2026-07-08")).toEqual({ fila: FILAS[1], iso: "2026-07-08" });
    // De Beto (Orosi) a Carla (Quetzales): el salto de puesto no corta el paso.
    expect(mover("ArrowDown", FILAS[1], "2026-07-08")).toEqual({ fila: FILAS[2], iso: "2026-07-08" });
    expect(mover("ArrowUp", FILAS[2], "2026-07-08")).toEqual({ fila: FILAS[1], iso: "2026-07-08" });
  });

  it("en los extremos se queda quieta, no da la vuelta", () => {
    expect(mover("ArrowLeft", FILAS[0], "2026-07-01")).toBeNull();
    expect(mover("ArrowRight", FILAS[0], "2026-08-31")).toBeNull();
    expect(mover("ArrowUp", FILAS[0], "2026-07-08")).toBeNull();
    expect(mover("ArrowDown", FILAS[2], "2026-07-08")).toBeNull();
  });

  it("Inicio y Fin van al primer y último día DEL MES, no del rango cargado", () => {
    expect(mover("Home", FILAS[0], "2026-08-15")).toEqual({ fila: FILAS[0], iso: "2026-08-01" });
    expect(mover("End", FILAS[0], "2026-08-15")).toEqual({ fila: FILAS[0], iso: "2026-08-31" });
    // Estando ya en el borde, no hay movimiento que anunciar.
    expect(mover("Home", FILAS[0], "2026-07-01")).toBeNull();
    expect(mover("End", FILAS[0], "2026-07-31")).toBeNull();
  });

  it("ignora las teclas que no son de movimiento y las celdas desconocidas", () => {
    expect(mover("Enter", FILAS[0], "2026-07-08")).toBeNull();
    expect(mover("ArrowRight", "fila-que-no-existe", "2026-07-08")).toBeNull();
    expect(mover("ArrowRight", FILAS[0], "1999-01-01")).toBeNull();
  });
});
