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
 *
 * `vigente: false` marca un puesto que ya no está operativo pero al que todavía
 * apuntan datos: el rol de los meses en que sí lo estuvo. Se sigue pintando en
 * la cuadrícula de Roles de esos meses —si no, ese rol no tendría dónde salir—
 * pero no se ofrece como destino al asignar a nadie.
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
    funcionarios: [
      "Juan Pablo Granados",
      "Karen Valle",
      "Josué Brenes",
      "Laura Valverde",
      "Diana Tencio",
      "Jetzelly Villalobos",
      "Pablo Sánchez",
      // Funcionario nuevo, destacado en Los Quetzales (setiembre de 2026).
      "Diego Salazar",
    ],
  },
  {
    nombre: "Puesto Esperanza",
    tag: "LE",
    color: "bg-sky-100 text-sky-950",
    funcionarios: ["Yolanda Elizondo", "Mariano Solís", "Guillermo Pérez", "Carlos Cordero", "Alexander Alvarado"],
  },
  {
    // Pasó a otra Área de Conservación. Se conserva porque el rol de diciembre
    // de 2025 a marzo de 2026 pertenece a este puesto —Carlos Cordero estuvo
    // ahí— y sin su fila ese rol no tendría dónde pintarse. No lleva
    // funcionarios de semilla: quienes quedaron destacados ahí ya no son
    // personal del ACC.
    nombre: "Puesto Villa Mills",
    tag: "VM",
    color: "bg-violet-100 text-violet-950",
    vigente: false,
    funcionarios: [],
  },
];

/**
 * Puestos que se pueden ASIGNAR hoy. Un puesto histórico sigue existiendo para
 * que su rol pasado se lea, pero no se ofrece al asignar a nadie.
 */
export const opcionesPuestoOperativo = puestos.filter((p) => p.vigente !== false).map((p) => p.nombre);

/** Forma del puesto que vive en el estado: sin los datos de la semilla. */
export const puestosSemilla = puestos.map(({ nombre, tag, color, vigente }) => ({
  nombre,
  tag,
  color,
  vigente: vigente !== false,
}));
