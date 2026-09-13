/**
 * Historial de puestos de cada funcionario, leído del rol institucional
 * «Rol Bloque 2026.xlsx» (revisión del 11/09/2026).
 *
 * El libro reparte a cada persona por bloques de puesto mes a mes, así que dice
 * con precisión cuándo la trasladaron. Esto NO se genera automáticamente: son
 * diecinueve personas y varias decisiones no salen del archivo solo, así que
 * cada caso que no es evidente lleva su razón escrita al lado.
 *
 * Reglas que se siguieron, para que la próxima sincronización las repita:
 *
 *  - `desde: ""` significa «desde antes de lo que cubre el libro». El libro
 *    arranca el 1 de diciembre de 2025 y nadie registró las fechas de ingreso:
 *    inventarlas sería peor que dejarlas abiertas.
 *  - `hasta: null` significa «sigue ahí». Que el libro deje de traer a alguien
 *    NO se interpreta como una salida: puede ser que falte llenarlo. Solo se
 *    cierra un tramo cuando la administración lo confirma.
 *  - Cuando una persona aparece en dos puestos el mismo mes y las dos filas
 *    están completas, es una contradicción del libro y no un traslado; se toma
 *    la que continúa antes y después, y el desacuerdo queda registrado en
 *    `conflictosRol2026.js` para que la aplicación lo advierta.
 */

/** Nombre del puesto en la aplicación para cada bloque del libro. */
const OR = "Puesto Orosi";
const QZ = "Puesto Quetzales";
const LE = "Puesto Esperanza"; // el libro lo escribe «Puesto La Esperanza»
const VM = "Puesto Villa Mills"; // ya no pertenece al ACC: solo histórico

export const HISTORIAL_PUESTOS_2026 = {
  // --- Orosi, sin movimientos ---
  "Errol Salazar": [{ puesto: OR, desde: "", hasta: null }],
  "Mayra Espinoza": [{ puesto: OR, desde: "", hasta: null }],
  "Yeison Cortés": [{ puesto: OR, desde: "", hasta: null }],
  "Fabricio Carbonell": [{ puesto: OR, desde: "", hasta: null }],

  // Salió del bloque hacia otra Área de Conservación. Es el único tramo que se
  // cierra: lo confirmó la administración. El libro deja de traerlo justo ahí.
  "Kenneth Mena": [
    { puesto: OR, desde: "", hasta: "2026-08-31", motivo: "Traslado a otra Área de Conservación" },
  ],

  // Aparece por primera vez el 20 de agosto.
  "Monserrath Navarro": [{ puesto: OR, desde: "2026-08-20", hasta: null }],

  // --- Quetzales, con estancias en Orosi ---
  // Varias personas de Quetzales pasan una temporada en Orosi y vuelven. El
  // libro lo muestra cambiándolas de bloque y devolviéndolas después.
  "Karen Valle": [
    { puesto: QZ, desde: "", hasta: "2026-01-31" },
    { puesto: OR, desde: "2026-02-01", hasta: "2026-06-30" },
    { puesto: QZ, desde: "2026-07-01", hasta: null },
  ],
  // Su estancia en Orosi termina el 21 de junio y el libro ya no vuelve a
  // traerlo. Se le devuelve a Quetzales, que es su puesto en la aplicación, en
  // vez de cerrarle el historial: nadie ha dicho que saliera del bloque.
  "Josué Brenes": [
    { puesto: QZ, desde: "", hasta: "2026-01-31" },
    { puesto: OR, desde: "2026-02-01", hasta: "2026-06-21" },
    { puesto: QZ, desde: "2026-06-22", hasta: null },
  ],
  // Solo aparece en el libro en mayo y junio, y bajo Orosi. Se lee como una
  // estancia, no como su puesto: su ficha estaba en Quetzales y el libro no
  // dice nada del resto del año.
  "Juan Pablo Granados": [
    { puesto: QZ, desde: "", hasta: "2026-04-30" },
    { puesto: OR, desde: "2026-05-01", hasta: "2026-06-30" },
    { puesto: QZ, desde: "2026-07-01", hasta: null },
  ],
  "Laura Valverde": [
    { puesto: QZ, desde: "", hasta: "2026-06-30" },
    { puesto: OR, desde: "2026-07-01", hasta: null },
  ],
  "Jetzelly Villalobos": [
    { puesto: QZ, desde: "", hasta: "2026-06-30" },
    { puesto: OR, desde: "2026-07-01", hasta: null },
  ],
  "Diana Tencio": [{ puesto: QZ, desde: "", hasta: null }],
  // Aparece por primera vez el 1 de mayo.
  "Pablo Sánchez": [{ puesto: QZ, desde: "2026-05-01", hasta: null }],
  // Funcionario nuevo. El libro lo archiva bajo el bloque de Orosi en setiembre
  // y octubre, pero la administración lo sitúa en Los Quetzales, que es donde
  // queda destacado.
  "Diego Salazar": [{ puesto: QZ, desde: "2026-09-01", hasta: null }],

  // --- La Esperanza ---
  // Traslado a mitad de mes: el libro le abre fila en La Esperanza el 18 de
  // marzo, mientras la de Orosi cubre marzo entero por inercia.
  "Yolanda Elizondo": [
    { puesto: OR, desde: "", hasta: "2026-03-17" },
    { puesto: LE, desde: "2026-03-18", hasta: null },
  ],
  "Mariano Solís": [{ puesto: LE, desde: "", hasta: null }],
  "Guillermo Pérez": [{ puesto: LE, desde: "", hasta: null }],
  // El libro deja de traerlo el 11 de marzo. No se cierra el tramo: nadie ha
  // confirmado que saliera del bloque.
  "Alexander Alvarado": [{ puesto: LE, desde: "", hasta: null }],
  // Estuvo en Villa Mills hasta que el puesto pasó a otra Área de Conservación;
  // desde abril está en La Esperanza.
  "Carlos Cordero": [
    { puesto: VM, desde: "", hasta: "2026-03-31" },
    { puesto: LE, desde: "2026-04-01", hasta: null, motivo: "Villa Mills pasa a otra Área de Conservación" },
  ],
};

/** Los tramos de una persona, o `null` si no está en el rol institucional. */
export function historialSemillaDe(nombre) {
  const tramos = HISTORIAL_PUESTOS_2026[nombre];
  return tramos ? tramos.map((t) => ({ ...t })) : null;
}
