/**
 * Días en que el rol institucional se contradice consigo mismo.
 *
 * El libro reparte a cada persona por bloques de puesto, y a veces la misma
 * persona aparece en DOS bloques el mismo mes con las dos filas completas. Eso
 * no es un traslado —un traslado deja una fila que termina y otra que empieza—
 * sino dos versiones del mismo día que no dicen lo mismo.
 *
 * La aplicación carga la fila del puesto donde el historial sitúa a la persona
 * (`historialPuestos2026.js`) y **avisa en la celda** de que la otra decía otra
 * cosa, en vez de elegir en silencio. Quien conoce el caso decide; la
 * herramienta solo se encarga de que la duda no se pierda.
 *
 * NO editar a mano: se regenera al sincronizar el libro institucional.
 *
 * Los dos casos de la revisión del 11/09/2026:
 *
 *  - **Errol Salazar, 1 al 15 de diciembre de 2025.** Tiene fila en Orosi y en
 *    Quetzales; se usa Orosi, que es donde sigue todo el año.
 *  - **Guillermo Pérez, 27 al 30 de abril de 2026.** La Esperanza lo da de
 *    incapacidad y Orosi de turno. Se usa La Esperanza, que es su puesto antes
 *    y después. Es el desacuerdo que más importa: una cosa es estar de baja y
 *    otra estar trabajando.
 */

export const CONFLICTOS_ROL_2026 = [
  { fecha: "2025-12-01", funcionario: "Errol Salazar", puesto: "Puesto Orosi", valor: "O-F", puestoAlterno: "Puesto Quetzales", valorAlterno: "L3" },
  { fecha: "2025-12-02", funcionario: "Errol Salazar", puesto: "Puesto Orosi", valor: "T2", puestoAlterno: "Puesto Quetzales", valorAlterno: "L4" },
  { fecha: "2025-12-03", funcionario: "Errol Salazar", puesto: "Puesto Orosi", valor: "T3", puestoAlterno: "Puesto Quetzales", valorAlterno: "L5" },
  { fecha: "2025-12-04", funcionario: "Errol Salazar", puesto: "Puesto Orosi", valor: "T4", puestoAlterno: "Puesto Quetzales", valorAlterno: "T1" },
  { fecha: "2025-12-05", funcionario: "Errol Salazar", puesto: "Puesto Orosi", valor: "T5", puestoAlterno: "Puesto Quetzales", valorAlterno: "T2" },
  { fecha: "2025-12-06", funcionario: "Errol Salazar", puesto: "Puesto Orosi", valor: "T6", puestoAlterno: "Puesto Quetzales", valorAlterno: "T3" },
  { fecha: "2025-12-07", funcionario: "Errol Salazar", puesto: "Puesto Orosi", valor: "T7", puestoAlterno: "Puesto Quetzales", valorAlterno: "T4" },
  { fecha: "2025-12-08", funcionario: "Errol Salazar", puesto: "Puesto Orosi", valor: "T8", puestoAlterno: "Puesto Quetzales", valorAlterno: "T5" },
  { fecha: "2025-12-09", funcionario: "Errol Salazar", puesto: "Puesto Orosi", valor: "T9", puestoAlterno: "Puesto Quetzales", valorAlterno: "T6" },
  { fecha: "2025-12-10", funcionario: "Errol Salazar", puesto: "Puesto Orosi", valor: "T10", puestoAlterno: "Puesto Quetzales", valorAlterno: "L1" },
  { fecha: "2025-12-11", funcionario: "Errol Salazar", puesto: "Puesto Orosi", valor: "L1", puestoAlterno: "Puesto Quetzales", valorAlterno: "L2" },
  { fecha: "2025-12-12", funcionario: "Errol Salazar", puesto: "Puesto Orosi", valor: "L2", puestoAlterno: "Puesto Quetzales", valorAlterno: "L3" },
  { fecha: "2025-12-13", funcionario: "Errol Salazar", puesto: "Puesto Orosi", valor: "L3", puestoAlterno: "Puesto Quetzales", valorAlterno: "O-FA" },
  { fecha: "2025-12-14", funcionario: "Errol Salazar", puesto: "Puesto Orosi", valor: "L4", puestoAlterno: "Puesto Quetzales", valorAlterno: "O-FA" },
  { fecha: "2025-12-15", funcionario: "Errol Salazar", puesto: "Puesto Orosi", valor: "L5", puestoAlterno: "Puesto Quetzales", valorAlterno: "LA" },
  { fecha: "2026-04-27", funcionario: "Guillermo Pérez", puesto: "Puesto Esperanza", valor: "IN", puestoAlterno: "Puesto Orosi", valorAlterno: "T1" },
  { fecha: "2026-04-28", funcionario: "Guillermo Pérez", puesto: "Puesto Esperanza", valor: "IN", puestoAlterno: "Puesto Orosi", valorAlterno: "T2" },
  { fecha: "2026-04-29", funcionario: "Guillermo Pérez", puesto: "Puesto Esperanza", valor: "IN", puestoAlterno: "Puesto Orosi", valorAlterno: "T3" },
  { fecha: "2026-04-30", funcionario: "Guillermo Pérez", puesto: "Puesto Esperanza", valor: "IN", puestoAlterno: "Puesto Orosi", valorAlterno: "T4" },
];

/**
 * Índice `"fecha|funcionario"` → conflicto, para consultar por celda sin
 * recorrer la lista en cada una de las miles que pinta la cuadrícula.
 */
export const CONFLICTOS_POR_CELDA = new Map(
  CONFLICTOS_ROL_2026.map((c) => [`${c.fecha}|${c.funcionario}`, c]),
);

/** El desacuerdo de esa celda, o `null` si el libro es claro ahí. */
export function dudaDeFuente(fechaIso, funcionario) {
  return CONFLICTOS_POR_CELDA.get(`${fechaIso}|${funcionario}`) || null;
}
