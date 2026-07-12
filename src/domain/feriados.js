import { feriadosDelAno, tieneCoberturaOficial } from "../data/feriadosCR.js";

/**
 * Construye el `Set<string>` de fechas ISO de feriados aplicables al año,
 * o `null` si la regla está desactivada. Devolver `null` (en lugar de Set
 * vacío) permite que las funciones de dominio reconozcan el caso "no
 * aplicar feriados" sin overhead.
 */
export function buildFeriadosSet(year, reglas) {
  if (!reglas?.aplicarFeriadosEnPrimerDiaLaboral) return null;
  return feriadosDelAno(year, false);
}

/**
 * Igual que `buildFeriadosSet`, pero además indica si el año tiene
 * cobertura oficial cargada. `cobertura: false` significa "no validado
 * todavía" — NO "sin feriados" — así el llamador puede mostrar una
 * advertencia en vez de asumir silenciosamente cero feriados.
 */
export function buildFeriadosSetConCobertura(year, reglas) {
  const set = buildFeriadosSet(year, reglas);
  return { set, cobertura: tieneCoberturaOficial(year) };
}
