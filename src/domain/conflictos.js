import { esAtencionRutinaria } from "./actividades.js";
import { teletrabajoIncompatible } from "./cobertura.js";
import { dim, isoFecha } from "./fechas.js";
import { codigoRolFuncionario, esRolActivo, funcionarioPorNombre } from "./roles.js";

/**
 * Funcionarios en conflicto con una actividad ese día.
 *
 * Dos motivos, no uno:
 *  1. **Rol no activo.** La persona no trabaja ese día (libre, vacaciones,
 *     incapacidad, sin marcar).
 *  2. **Teletrabajo en atención de visitantes** (RT4). La persona sí trabaja,
 *     pero desde casa, y está asignada a atender visitantes en un puesto que lo
 *     exige a diario. Se expresa como conflicto a propósito: es un indicador ya
 *     vivo y visible en Roles, Planificación y Plan/Funcionario, así que la
 *     regla del teletrabajo se ve desde el primer día en vez de colgar de un
 *     indicador que nadie mira.
 *
 * `puestosRequieren` llega desde `reglas.puestosRequierenVisitantesDiario`, que
 * es editable: no se puede leer de una constante.
 */
export function conflictosActividadDia(
  actividad,
  dia,
  year,
  month,
  personas,
  roleData,
  feriados = null,
  puestosRequieren = null,
) {
  const esVisit = esAtencionRutinaria(actividad);
  return (actividad.funcionarios || []).filter((nombre) => {
    const rol = codigoRolFuncionario(personas, roleData, year, month, nombre, dia, feriados);
    if (!esRolActivo(rol)) return true;
    if (!esVisit) return false;
    const puesto = funcionarioPorNombre(personas, nombre)?.puestoOperativo;
    return teletrabajoIncompatible(rol, puesto, puestosRequieren);
  });
}

export function actividadTieneConflictoMes(
  actividad,
  year,
  month,
  personas,
  roleData,
  feriados = null,
  puestosRequieren = null,
) {
  for (let d = 1; d <= dim(year, month); d++) {
    const iso = isoFecha(year, month, d);
    if (
      iso >= actividad.inicio &&
      iso <= (actividad.fin || actividad.inicio) &&
      conflictosActividadDia(actividad, d, year, month, personas, roleData, feriados, puestosRequieren).length
    )
      return true;
  }
  return false;
}
