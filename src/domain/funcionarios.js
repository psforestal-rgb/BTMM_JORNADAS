/**
 * Renombrar a un funcionario, en cascada.
 *
 * Hermano de `renombrarPuesto` (`src/domain/puestos.js`) y por el mismo motivo:
 * **la identidad de una persona dentro del estado es su nombre**, no su `id`.
 * El `id` existe y la lista de fichas lo usa, pero todo lo que apunta a una
 * persona DESDE FUERA de su ficha la nombra:
 *
 *  - `roleData`: las claves llevan el nombre dentro
 *    (`2026-9-Puesto Orosi-Errol Salazar-15`).
 *  - `actividadesPlan[].funcionarios[]`: lista de nombres.
 *  - `reposiciones[].funcionario`: un nombre.
 *
 * Cambiar el nombre en la ficha sin arrastrar esas tres cosas no da ningún
 * error: el rol se vacía, las actividades dejan de aparecer en la ficha y en la
 * planificación individual, y el banco de tiempo cae a cero. Todo en silencio,
 * que es exactamente como se pierden los datos aquí.
 *
 * **Lo que NO se arrastra, a propósito:**
 *
 *  - `historial[]` (el rastro de cambios, RF9). Cada entrada guarda el nombre y
 *    la cédula que la ficha tenía EN ESE MOMENTO. Reescribirlo convertiría un
 *    registro de auditoría en una mentira retroactiva: diría que la ficha
 *    siempre se llamó así. El propio renombre queda registrado como una
 *    edición con su cambio «nombre: antes → después», que es el enlace entre
 *    los dos nombres.
 *  - `otrosParticipantes[]` de las actividades: son personas de fuera del
 *    bloque, no funcionarios; comparten forma pero no identidad.
 *
 * La comparación es EXACTA (solo se recortan los bordes). Los nombres de
 * funcionario no son únicos ni se validan como tales —a diferencia de los
 * puestos—, así que aflojarla movería el rol de otra persona que se llame casi
 * igual.
 */

import { reescribirClavesRol } from "./roles.js";
import { normalizarHistorial } from "./historialPuestos.js";

/** Nombres de puesto que aparecen en las fichas, aunque ya no estén vigentes. */
function puestosReferidos(personas) {
  const nombres = new Set();
  for (const p of personas) {
    if (p?.puestoOperativo) nombres.add(String(p.puestoOperativo));
    for (const tramo of normalizarHistorial(p)) {
      if (tramo?.puesto) nombres.add(String(tramo.puesto));
    }
  }
  return [...nombres];
}

/**
 * ¿Ese nombre ya lo lleva OTRA ficha?
 *
 * Se compara sin mayúsculas ni bordes: dos fichas que solo se diferencien en
 * eso comparten las claves de `roleData` de hecho, aunque el código las tome
 * por distintas. Quien llama decide si bloquea o solo avisa.
 */
export function nombreOcupado(personas, nombre, idPropio = null) {
  const buscado = String(nombre ?? "").trim().toLowerCase();
  if (!buscado) return false;
  return (Array.isArray(personas) ? personas : []).some(
    (p) => p?.id !== idPropio && String(p?.nombre ?? "").trim().toLowerCase() === buscado,
  );
}

/**
 * Arrastra un cambio de nombre por todo el estado que lo referencia.
 *
 * NO toca `personas`: la ficha con el nombre nuevo la escribe quien guarda
 * (`useGuardarFuncionario`), que es el único camino de guardado y el que
 * además deja el rastro del cambio. Aquí solo viaja para saber qué puestos
 * existen —hacen falta para partir bien las claves de `roleData`—.
 *
 * `roleData`, `actividadesPlan` y `reposiciones` son opcionales: lo que no se
 * pasa vuelve tal cual y su contador vale 0. Devuelve
 * `{ roleData, actividadesPlan, reposiciones, celdas, colisiones, actividades,
 * reposicionesTocadas }`.
 */
export function renombrarFuncionario({
  personas = [],
  roleData = null,
  actividadesPlan = null,
  reposiciones = null,
  antes,
  despues,
} = {}) {
  const viejo = String(antes ?? "").trim();
  const nuevo = String(despues ?? "").trim();
  const sinCambios = {
    roleData,
    actividadesPlan,
    reposiciones,
    celdas: 0,
    colisiones: 0,
    actividades: 0,
    reposicionesTocadas: 0,
  };
  if (!viejo || !nuevo || viejo === nuevo) return sinCambios;

  const lista = Array.isArray(personas) ? personas : [];
  const rol = roleData
    ? reescribirClavesRol(roleData, {
        tipo: "persona",
        antes: viejo,
        despues: nuevo,
        puestosConocidos: puestosReferidos(lista),
      })
    : { roleData, movidas: 0, colisiones: 0 };

  let actividades = 0;
  const planNuevo = Array.isArray(actividadesPlan)
    ? actividadesPlan.map((a) => {
        const nombres = Array.isArray(a?.funcionarios) ? a.funcionarios : null;
        if (!nombres || !nombres.some((n) => String(n ?? "").trim() === viejo)) return a;
        actividades += 1;
        /* Se quitan los repetidos DESPUÉS de renombrar: si la actividad ya
           tenía al nombre nuevo, dejar los dos pondría a la misma persona dos
           veces en la lista de participantes. */
        const renombrados = nombres.map((n) => (String(n ?? "").trim() === viejo ? nuevo : n));
        const vistos = new Set();
        const unicos = renombrados.filter((n) => {
          const clave = String(n ?? "").trim();
          if (vistos.has(clave)) return false;
          vistos.add(clave);
          return true;
        });
        return { ...a, funcionarios: unicos };
      })
    : actividadesPlan;

  let reposicionesTocadas = 0;
  const reposNuevas = Array.isArray(reposiciones)
    ? reposiciones.map((r) => {
        if (String(r?.funcionario ?? "").trim() !== viejo) return r;
        reposicionesTocadas += 1;
        return { ...r, funcionario: nuevo };
      })
    : reposiciones;

  return {
    roleData: rol.roleData,
    actividadesPlan: planNuevo,
    reposiciones: reposNuevas,
    celdas: rol.movidas,
    colisiones: rol.colisiones,
    actividades,
    reposicionesTocadas,
  };
}

/**
 * Renombres que trae un plan de importación de funcionarios (RF4).
 *
 * El import empareja por CÉDULA, así que una fila cuyo nombre venga corregido
 * renombra a esa persona sin que nadie lo llame renombre. Sin arrastrarlo, un
 * CSV que solo arregla una tilde vacía el rol, las actividades y el banco de
 * tiempo de quien aparezca en él.
 *
 * `actualizados` es el arreglo que devuelve `planificarImportacion`, con
 * `{ previo, registro, cambios }` por fila.
 */
export function renombresDelPlan(actualizados) {
  const salida = [];
  for (const item of Array.isArray(actualizados) ? actualizados : []) {
    if (!Array.isArray(item?.cambios) || !item.cambios.includes("nombre")) continue;
    const antes = String(item?.previo?.nombre ?? "").trim();
    const despues = String(item?.registro?.nombre ?? "").trim();
    if (!antes || !despues || antes === despues) continue;
    salida.push({ antes, despues });
  }
  return salida;
}

/* Nombre imposible de teclear, para el paso intermedio de
   `renombrarVariosFuncionarios`. Va con NUL a los dos lados: `trim()` no lo
   quita y ningún nombre real puede contenerlo. */
const provisional = (i) => `\u0000renombre-${i}\u0000`;

/**
 * Aplica varios renombres a la vez.
 *
 * Se hace en DOS pasadas —cada nombre viejo va primero a uno provisional y de
 * ahí al definitivo— porque encadenar renombres uno tras otro corrompe dos
 * casos que un archivo real produce sin esfuerzo:
 *
 *  - **Intercambio** (A→B y B→A): en una sola pasada, lo de A acaba en B y
 *    acto seguido todo lo de B —incluido lo que acaba de llegar— vuelve a A.
 *  - **Cadena** (A→B y B→C): lo de A terminaría en C junto con lo de B.
 *
 * Devuelve la misma forma que `renombrarFuncionario`, con los contadores ya
 * sumados y `renombres` con cuántas personas se movieron.
 */
export function renombrarVariosFuncionarios({
  personas = [],
  roleData = null,
  actividadesPlan = null,
  reposiciones = null,
  renombres = [],
} = {}) {
  const pares = (Array.isArray(renombres) ? renombres : [])
    .map((r) => ({ antes: String(r?.antes ?? "").trim(), despues: String(r?.despues ?? "").trim() }))
    .filter((r) => r.antes && r.despues && r.antes !== r.despues);

  const total = {
    roleData,
    actividadesPlan,
    reposiciones,
    celdas: 0,
    colisiones: 0,
    actividades: 0,
    reposicionesTocadas: 0,
    renombres: pares.length,
  };
  if (!pares.length) return total;

  let estado = { roleData, actividadesPlan, reposiciones };
  const aplicar = (antes, despues) => {
    const r = renombrarFuncionario({ personas, ...estado, antes, despues });
    estado = { roleData: r.roleData, actividadesPlan: r.actividadesPlan, reposiciones: r.reposiciones };
    total.celdas += r.celdas;
    total.colisiones += r.colisiones;
    total.actividades += r.actividades;
    total.reposicionesTocadas += r.reposicionesTocadas;
  };

  pares.forEach((par, i) => aplicar(par.antes, provisional(i)));
  pares.forEach((par, i) => aplicar(provisional(i), par.despues));

  /* Cada persona se cuenta una sola vez aunque haya pasado por dos pasadas:
     los contadores de la primera son los que valen, los de la segunda repiten
     el mismo movimiento. */
  total.celdas = Math.round(total.celdas / 2);
  total.actividades = Math.round(total.actividades / 2);
  total.reposicionesTocadas = Math.round(total.reposicionesTocadas / 2);

  return { ...total, ...estado };
}
