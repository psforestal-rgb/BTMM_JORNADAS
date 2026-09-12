/**
 * A dónde lleva cada tecla dentro de la cuadrícula de Roles (A-P12).
 *
 * Función pura, sin DOM: recibe dónde está el foco y la geometría lógica de la
 * cuadrícula, y devuelve la celda destino. Separarla del componente es lo que
 * permite probar el recorrido —bordes incluidos— sin montar una tabla de
 * cientos de celdas.
 *
 * No hay envolvente en los extremos: es el comportamiento que describe el
 * patrón ARIA de cuadrícula, y en una tabla de turnos saltar del último día del
 * mes al primero desorientaría más de lo que ayuda.
 */

export const TECLAS = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"];

/** Límites de la columna dentro de SU mes: `[primera, última]`. */
function limitesDelMes(columnas, indice) {
  const { year, month } = columnas[indice];
  let primera = indice;
  while (primera > 0 && columnas[primera - 1].year === year && columnas[primera - 1].month === month) primera -= 1;
  let ultima = indice;
  while (
    ultima < columnas.length - 1 &&
    columnas[ultima + 1].year === year &&
    columnas[ultima + 1].month === month
  ) {
    ultima += 1;
  }
  return [primera, ultima];
}

export function destinoDeTecla({ tecla, fila, iso, filas = [], columnas = [] }) {
  const f = filas.indexOf(fila);
  const c = columnas.findIndex((x) => x.iso === iso);
  if (f < 0 || c < 0) return null;

  const enColumna = (indice) => (indice === c ? null : { fila, iso: columnas[indice].iso });
  const enFila = (indice) => (indice === f ? null : { fila: filas[indice], iso });

  switch (tecla) {
    case "ArrowLeft":
      return c > 0 ? enColumna(c - 1) : null;
    case "ArrowRight":
      return c < columnas.length - 1 ? enColumna(c + 1) : null;
    case "ArrowUp":
      return f > 0 ? enFila(f - 1) : null;
    case "ArrowDown":
      return f < filas.length - 1 ? enFila(f + 1) : null;
    // Inicio y Fin se mueven dentro del MES, no de todo el rango cargado: la
    // cuadrícula puede tener diez años cargados y saltar a diciembre de 2036
    // no es lo que nadie espera al pulsar Fin.
    case "Home":
      return enColumna(limitesDelMes(columnas, c)[0]);
    case "End":
      return enColumna(limitesDelMes(columnas, c)[1]);
    default:
      return null;
  }
}

/** Lista ordenada de filas de funcionario, con la misma clave que pinta el DOM. */
export function filasDeGrupos(grupos = [], claveDeFila) {
  const filas = [];
  for (const grupo of grupos) {
    for (const nombre of grupo.funcionarios || []) filas.push(claveDeFila(grupo.nombre, nombre));
  }
  return filas;
}
