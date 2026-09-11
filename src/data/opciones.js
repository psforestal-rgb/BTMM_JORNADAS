import { opcionesPuestoOperativo } from "./puestos.js";

export const opcionesPuesto = [
  "Administrador de ASP",
  "Guardaparques",
  "Asistente Administrativo",
  "Técnico en Recursos Naturales",
  "Personal Apoyo ONG-Invest-Volunt",
];

export const opcionesEstado = ["Activo", "Inactivo", "De vacaciones", "Incapacitado"];

export const opcionesCondicion = ["Propiedad", "Interino", "ONG-Invest-Volunt"];

export const opcionesModalidad = [
  "Horario administrativo L-V",
  "10x5",
  "12x6",
  "14x7",
  "16x8",
  "20x10",
];

/** Lugar fijo que no es un puesto operativo. */
export const LUGAR_SEDE = "Secretaría Ejecutiva/Dirección ACC";

/**
 * Lugares de una actividad: los puestos operativos vigentes más la sede.
 *
 * Es una FUNCIÓN y no una constante porque los puestos son editables desde
 * RP1–RP8: una constante calculada al importar el módulo se quedaría con la
 * lista del arranque y no se enteraría de altas ni renombres.
 */
export function lugaresDeActividad(nombresPuestos = opcionesPuestoOperativo) {
  const base = Array.isArray(nombresPuestos) && nombresPuestos.length
    ? nombresPuestos
    : opcionesPuestoOperativo;
  return [...base, LUGAR_SEDE];
}

export const actividadRutinariaVisitantes = "Atención rutinaria de visitantes";

export const opcionesActividadBase = [actividadRutinariaVisitantes];
