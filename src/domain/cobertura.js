import { esRolPresencial, esTeletrabajo } from "./roles.js";

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
