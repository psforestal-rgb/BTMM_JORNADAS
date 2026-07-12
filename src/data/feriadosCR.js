/**
 * Calendario de feriados de pago obligatorio en Costa Rica.
 *
 * Fuente base: Código de Trabajo art. 148 y comunicados del Ministerio de
 * Trabajo y Seguridad Social (MTSS). Se incluyen también los feriados de
 * pago no obligatorio (San Ramón, Anexión, Día de los Difuntos) para que
 * el administrador pueda decidir si afectan o no la rotación interna.
 *
 * Para los traslados anuales (Ley 9803 y modificaciones), se anotan las
 * fechas observadas según el comunicado MTSS del año en cuestión.
 *
 * Formato: ISO YYYY-MM-DD por año. El objeto es plano para facilitar
 * edición (CSV → JSON) e importación futura desde panel administrativo.
 *
 * COBERTURA Y RIESGO RESIDUAL (revisión 2026-07-12):
 * Solo hay datos verificados para 2025-2027. El MTSS publica el comunicado
 * oficial de traslados de feriados año a año (normalmente el año anterior),
 * así que 2028 en adelante NO puede completarse ahora sin fabricar fechas
 * de traslado. Antes de cargar un año nuevo aquí, verificar contra el
 * comunicado oficial vigente en https://www.mtss.go.cr (Temas laborales ›
 * Feriados) — NO extrapolar el patrón de años anteriores, la ley que rige
 * los traslados a lunes ha cambiado más de una vez. Mientras un año no
 * esté cargado, `tieneCoberturaOficial()` lo marca como "sin validar" (no
 * como "sin feriados") y la UI de Roles muestra una advertencia.
 */

export const FERIADOS_CR = {
  2025: [
    { fecha: "2025-01-01", nombre: "Año Nuevo", obligatorio: true },
    { fecha: "2025-04-11", nombre: "Juan Santamaría (trasladado a viernes)", obligatorio: true },
    { fecha: "2025-04-17", nombre: "Jueves Santo", obligatorio: true },
    { fecha: "2025-04-18", nombre: "Viernes Santo", obligatorio: true },
    { fecha: "2025-05-01", nombre: "Día del Trabajo", obligatorio: true },
    { fecha: "2025-07-25", nombre: "Anexión del Partido de Nicoya", obligatorio: false },
    { fecha: "2025-08-02", nombre: "Virgen de los Ángeles", obligatorio: true },
    { fecha: "2025-08-15", nombre: "Día de la Madre", obligatorio: true },
    { fecha: "2025-09-15", nombre: "Independencia", obligatorio: true },
    { fecha: "2025-12-01", nombre: "Abolición del Ejército", obligatorio: true },
    { fecha: "2025-12-25", nombre: "Navidad", obligatorio: true },
  ],
  2026: [
    { fecha: "2026-01-01", nombre: "Año Nuevo", obligatorio: true },
    { fecha: "2026-04-02", nombre: "Jueves Santo", obligatorio: true },
    { fecha: "2026-04-03", nombre: "Viernes Santo", obligatorio: true },
    { fecha: "2026-04-13", nombre: "Juan Santamaría (trasladado a lunes)", obligatorio: true },
    { fecha: "2026-05-01", nombre: "Día del Trabajo", obligatorio: true },
    { fecha: "2026-07-27", nombre: "Anexión del Partido de Nicoya (trasladado)", obligatorio: false },
    { fecha: "2026-08-02", nombre: "Virgen de los Ángeles", obligatorio: true },
    { fecha: "2026-08-17", nombre: "Día de la Madre (trasladado a lunes)", obligatorio: true },
    { fecha: "2026-09-14", nombre: "Independencia (trasladado a lunes)", obligatorio: true },
    { fecha: "2026-11-30", nombre: "Abolición del Ejército (trasladado a lunes)", obligatorio: true },
    { fecha: "2026-12-25", nombre: "Navidad", obligatorio: true },
  ],
  2027: [
    { fecha: "2027-01-01", nombre: "Año Nuevo", obligatorio: true },
    { fecha: "2027-03-25", nombre: "Jueves Santo", obligatorio: true },
    { fecha: "2027-03-26", nombre: "Viernes Santo", obligatorio: true },
    { fecha: "2027-04-12", nombre: "Juan Santamaría (trasladado a lunes)", obligatorio: true },
    { fecha: "2027-05-01", nombre: "Día del Trabajo", obligatorio: true },
    { fecha: "2027-07-26", nombre: "Anexión del Partido de Nicoya (trasladado)", obligatorio: false },
    { fecha: "2027-08-02", nombre: "Virgen de los Ángeles", obligatorio: true },
    { fecha: "2027-08-16", nombre: "Día de la Madre (trasladado a lunes)", obligatorio: true },
    { fecha: "2027-09-13", nombre: "Independencia (trasladado a lunes)", obligatorio: true },
    { fecha: "2027-11-29", nombre: "Abolición del Ejército (trasladado a lunes)", obligatorio: true },
    { fecha: "2027-12-25", nombre: "Navidad", obligatorio: true },
  ],
};

/**
 * Devuelve un Set de fechas ISO (YYYY-MM-DD) consideradas no laborales
 * para el año indicado. Por defecto solo los obligatorios; si se pasa
 * `incluirNoObligatorios=true`, también suma los de pago no obligatorio.
 *
 * IMPORTANTE: para un año SIN datos oficiales cargados, esto devuelve un
 * Set vacío — indistinguible, solo mirando el Set, de "este año
 * genuinamente no tiene feriados". Usa `tieneCoberturaOficial(year)` para
 * distinguir ambos casos antes de asumir "sin feriados" en cálculos que
 * afectan el primer día laboral o los patrones de rol.
 */
export function feriadosDelAno(year, incluirNoObligatorios = false) {
  const lista = FERIADOS_CR[year] || [];
  return new Set(
    lista
      .filter((f) => incluirNoObligatorios || f.obligatorio)
      .map((f) => f.fecha),
  );
}

export function nombreFeriado(year, iso) {
  const lista = FERIADOS_CR[year] || [];
  return lista.find((f) => f.fecha === iso)?.nombre || null;
}

/** Años (número) con datos oficiales cargados, ordenados ascendente. */
export function aniosConCobertura() {
  return Object.keys(FERIADOS_CR).map(Number).sort((a, b) => a - b);
}

/**
 * `true` si el año tiene un calendario de feriados oficial cargado
 * (fuente: MTSS/Código de Trabajo, ver cabecera del archivo). `false` NO
 * significa "sin feriados" — significa "sin validar todavía": no se debe
 * tratar como año sin feriados en cálculos de negocio, solo mostrar una
 * advertencia administrativa.
 */
export function tieneCoberturaOficial(year) {
  return Object.prototype.hasOwnProperty.call(FERIADOS_CR, String(year));
}

/** Último año con cobertura oficial cargada, o `null` si no hay ninguno. */
export function ultimoAnioConCobertura() {
  const anios = aniosConCobertura();
  return anios.length ? anios[anios.length - 1] : null;
}
