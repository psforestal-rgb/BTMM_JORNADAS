import { codigoRolFuncionario, esRolPresencial, esTeletrabajo, funcionarioPorNombre } from "./roles.js";
import { actividadesEnDia, esAtencionRutinaria } from "./actividades.js";

const DEFAULT_PUESTOS_REQUIEREN = ["Puesto Orosi", "Puesto Quetzales"];

/**
 * Devuelve true si el puesto operativo requiere "Atención rutinaria de
 * visitantes" todos los días. La lista se acepta como argumento para
 * permitir parametrización desde la configuración del administrador
 * (Fase 6). Si no se pasa nada, mantiene el comportamiento histórico.
 */
export function puestoRequiereAtencionRutinaria(puesto, puestosRequieren) {
  const lista = puestosRequieren || DEFAULT_PUESTOS_REQUIEREN;
  return lista.includes(puesto);
}

/**
 * ¿Puede esta persona atender visitantes ese día? (RT4/RT5)
 *
 * Requiere estar FÍSICAMENTE en el puesto: desde casa no se atiende a nadie.
 * Se separa de `esRolActivo` a propósito, porque desde que existe el
 * teletrabajo «estar trabajando» y «estar presente» dejaron de coincidir, y
 * confundirlos daría por cubierto un puesto que en realidad está vacío.
 */
export function puedeAtenderVisitantes(codigoRol) {
  return esRolPresencial(codigoRol);
}

/**
 * ¿Es incompatible este rol con la atención de visitantes en este puesto?
 *
 * Solo lo es donde la atención es obligatoria a diario: en el resto de puestos,
 * un día de teletrabajo no choca con nada.
 */
export function teletrabajoIncompatible(codigoRol, puesto, puestosRequieren) {
  return (
    esTeletrabajo(codigoRol) && puestoRequiereAtencionRutinaria(puesto, puestosRequieren)
  );
}

/**
 * Cobertura de atención de visitantes de un día, puesto por puesto.
 *
 * Un puesto está cubierto cuando **alguien de ese puesto está asignado a la
 * atención rutinaria de visitantes ese día Y está físicamente presente**. Las
 * dos condiciones importan:
 *
 * - Sin la primera, bastaría con que hubiera gente en turno, y el glosario es
 *   explícito: lo que se exige es la actividad asignada, no la presencia suelta.
 * - Sin la segunda, un puesto con todo el mundo en teletrabajo saldría como
 *   cubierto, que es exactamente lo contrario de lo que significa atender
 *   visitantes. Por eso usa `puedeAtenderVisitantes` y no `esRolActivo`.
 *
 * La actividad se atribuye al **puesto operativo de quien la hace**, no al
 * `lugar` escrito en la actividad. Es el mismo criterio que ya usa
 * `conflictosActividadDia` para el choque entre teletrabajo y visitantes: si
 * los dos no coincidieran, la aplicación marcaría conflicto en un puesto y
 * cobertura en otro por el mismo hecho.
 */
export function coberturaVisitantesDelDia({
  actividadesPlan = [],
  iso,
  personas = [],
  roleData = {},
  year,
  month,
  dia,
  feriados = null,
  puestos = [],
  puestosRequieren,
}) {
  const delDia = actividadesEnDia(actividadesPlan, iso).filter(esAtencionRutinaria);
  const asignadosPorPuesto = new Map();
  for (const actividad of delDia) {
    for (const nombre of actividad.funcionarios || []) {
      const puesto = funcionarioPorNombre(personas, nombre)?.puestoOperativo;
      if (!puesto) continue;
      if (!asignadosPorPuesto.has(puesto)) asignadosPorPuesto.set(puesto, new Set());
      asignadosPorPuesto.get(puesto).add(nombre);
    }
  }

  return puestos.map((puesto) => {
    const asignados = [...(asignadosPorPuesto.get(puesto) || [])];
    const presentes = asignados.filter((nombre) =>
      puedeAtenderVisitantes(codigoRolFuncionario(personas, roleData, year, month, nombre, dia, feriados)),
    );
    const requiere = puestoRequiereAtencionRutinaria(puesto, puestosRequieren);
    return {
      puesto,
      requiere,
      asignados,
      presentes,
      // Solo es crítico donde la atención es obligatoria a diario. En el resto
      // de puestos, no tener visitantes asignados no es un incumplimiento.
      critico: requiere && presentes.length === 0,
      // Asignado pero sin nadie presente: el plan dice que está cubierto y en
      // el puesto no hay nadie. Merece decirse distinto de «no hay nadie
      // asignado», porque se arregla de otra manera.
      soloRemoto: requiere && asignados.length > 0 && presentes.length === 0,
    };
  });
}

/** Puestos en cobertura crítica ese día. Atajo para la vista. */
export function puestosEnCoberturaCritica(cobertura = []) {
  return cobertura.filter((c) => c.critico).map((c) => c.puesto);
}
