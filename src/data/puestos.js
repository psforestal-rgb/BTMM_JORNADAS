/**
 * Puestos operativos. A partir de RP1-RP8 esta lista es solo la SEMILLA: la
 * lista viva se edita desde «Configuración» y se guarda en el estado
 * (`AppContext`). Aquí se conserva porque la generación de datos de ejemplo
 * (`seedFuncionarios.js`, `seedRoles.js`) la necesita, y porque es el valor por
 * defecto de una instalación nueva.
 *
 * El campo `funcionarios` es exclusivo de la semilla: en ejecución, la vista
 * Roles agrupa a las personas por su `puestoOperativo`, no por esta lista.
 *
 * Los puestos se identifican **por nombre**, no por un id: `funcionario.
 * puestoOperativo` y `reglas.puestosRequierenVisitantesDiario` los referencian
 * así. Renombrar un puesto obliga a arrastrar esas dos referencias, y de eso se
 * encarga `renombrarPuesto()` en `src/domain/puestos.js`.
 */
export const puestos = [
  {
    nombre: "Puesto Orosi",
    tag: "OR",
    color: "bg-orange-100 text-orange-950",
    funcionarios: [
      "Errol Salazar",
      "Mayra Espinoza",
      "Yeison Cortés",
      "Kenneth Mena",
      "Fabricio Carbonell",
      "Monserrath Navarro",
    ],
  },
  {
    nombre: "Puesto Quetzales",
    tag: "QZ",
    color: "bg-orange-700 text-white",
    funcionarios: ["Juan Pablo Granados", "Karen Valle", "Josué Brenes", "Laura Valverde", "Diana Tencio", "Jetzelly Villalobos", "Pablo Sánchez"],
  },
  {
    nombre: "Puesto Esperanza",
    tag: "LE",
    color: "bg-sky-100 text-sky-950",
    funcionarios: ["Yolanda Elizondo", "Mariano Solís", "Guillermo Pérez", "Carlos Cordero", "Alexander Alvarado"],
  },
];

export const opcionesPuestoOperativo = puestos.map((p) => p.nombre);

/** Forma del puesto que vive en el estado: sin los datos de la semilla. */
export const puestosSemilla = puestos.map(({ nombre, tag, color }) => ({ nombre, tag, color }));
