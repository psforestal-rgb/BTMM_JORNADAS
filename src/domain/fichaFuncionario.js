/**
 * Dominio: ficha individual del funcionario (bloque VF de la Fase 3).
 *
 * **Este módulo COMPONE, no calcula.** Todo lo que enseña la ficha —el saldo
 * del banco de tiempo, el rol de cada día, las alertas— sale de las funciones
 * de dominio que ya existían (`reposicion.js`, `roles.js`, `alertas.js`). Es
 * la regla dura del bloque, registrada en `_relevo/SEGUIMIENTO.md`: un segundo
 * cálculo del saldo acabaría contradiciendo al primero y la administración no
 * sabría cuál de los dos números creer.
 */

import { dim, isoFecha } from "./fechas.js";
import { categoriaDe, codigoRolFuncionario, esRolActivo, esRolPresencial, esTeletrabajo, etiquetaRol } from "./roles.js";
import { finDeActividad } from "./actividades.js";
import {
  HORAS_JORNADA_DEFAULT,
  ordenarPorFecha,
  registrosConSaldoDe,
  resumenReposiciones,
  saldoFuncionario,
} from "./reposicion.js";

/** Orden de presentación de las categorías de rol en el resumen mensual. */
export const CATEGORIAS_RESUMEN = ["T", "E", "L", "V", "I", "O"];

/**
 * Banco de tiempo de una persona (VF3).
 *
 * `saldoHoras` es literalmente `saldoFuncionario`, y el resto del resumen es
 * `resumenReposiciones` sobre los registros de esa persona. No hay aritmética
 * propia aquí y no debe haberla.
 */
export function bancoDeTiempo(reposiciones = [], nombre, hj = HORAS_JORNADA_DEFAULT) {
  const propios = (reposiciones || []).filter((r) => r?.funcionario === nombre);
  const resumen = resumenReposiciones(propios, hj);
  return {
    saldoHoras: saldoFuncionario(reposiciones, nombre, hj),
    total: resumen.total,
    pendientes: resumen.pendientes,
    parciales: resumen.parciales,
    repuestos: resumen.repuestos,
    // Con saldo vivo, del más antiguo al más nuevo: es el orden en que la
    // administración debe ir reponiendo.
    conSaldo: registrosConSaldoDe(reposiciones, nombre, hj),
    // Todo el historial de la persona, lo más reciente primero.
    registros: ordenarPorFecha(propios),
  };
}

/**
 * Resumen del rol del mes (VF5): cuántos días de cada categoría le tocan a la
 * persona, y en qué días concretos.
 *
 * El código de cada día sale de `codigoRolFuncionario`, que ya resuelve la
 * herencia entre el valor guardado y el patrón de la modalidad. Los días sin
 * código (la persona empieza después del primer día laboral del mes) se
 * cuentan aparte en `sinMarcar` en vez de inventarles una categoría.
 */
export function resumenRolesMes({ personas = [], roleData = {}, year, month, nombre, feriados = null }) {
  const totalDias = dim(year, month);
  const porCategoria = {};
  const diasPorCategoria = {};
  for (const c of CATEGORIAS_RESUMEN) {
    porCategoria[c] = 0;
    diasPorCategoria[c] = [];
  }
  let sinMarcar = 0;
  let activos = 0;
  let presenciales = 0;

  for (let dia = 1; dia <= totalDias; dia += 1) {
    const codigo = codigoRolFuncionario(personas, roleData, year, month, nombre, dia, feriados);
    const cat = categoriaDe(codigo);
    if (!cat) {
      sinMarcar += 1;
      continue;
    }
    if (!(cat in porCategoria)) {
      porCategoria[cat] = 0;
      diasPorCategoria[cat] = [];
    }
    porCategoria[cat] += 1;
    diasPorCategoria[cat].push(dia);
    // Trabajar y estar presente no son lo mismo desde el rol E (RT5): se
    // cuentan por separado y con las funciones que definen esa diferencia.
    if (esRolActivo(codigo)) activos += 1;
    if (esRolPresencial(codigo)) presenciales += 1;
  }

  return { totalDias, porCategoria, diasPorCategoria, sinMarcar, activos, presenciales };
}

/** Etiqueta legible de una categoría («T» → «Turno»), reutilizando `etiquetaRol`. */
export function etiquetaCategoria(cat) {
  return etiquetaRol(cat);
}

/**
 * Rol de la persona en un día concreto, con su fecha ISO. Lo usa la cabecera
 * de la ficha para responder «¿qué le toca hoy?» sin recorrer el mes entero.
 */
export function rolDelDia({ personas = [], roleData = {}, year, month, dia, nombre, feriados = null }) {
  const codigo = codigoRolFuncionario(personas, roleData, year, month, nombre, dia, feriados);
  return {
    iso: isoFecha(year, month, dia),
    codigo,
    categoria: categoriaDe(codigo),
    etiqueta: etiquetaRol(codigo),
    activo: esRolActivo(codigo),
    presencial: esRolPresencial(codigo),
  };
}

/**
 * Tope de días recorridos por actividad. Una actividad institucional no dura
 * un año; el tope solo evita que un `fin` corrupto (año 9999) congele la vista.
 */
const MAX_DIAS_ACTIVIDAD = 366;

/**
 * ¿Cuántos días de una actividad hace la persona en teletrabajo? (VF4 + RT2)
 *
 * Se recorre día a día a propósito. El teletrabajo se DERIVA del rol de cada
 * día, así que una actividad de tres días puede ser teletrabajo solo el
 * primero; mirar únicamente la fecha de inicio contaría mal justo el caso que
 * motivó la regla.
 *
 * `feriadosDe(year)` lo aporta quien llama porque el conjunto de feriados
 * depende del año y de las reglas configuradas, y una actividad puede caer en
 * un año distinto al que se está viendo.
 */
export function resumenTeletrabajoActividad({ actividad, nombre, personas = [], roleData = {}, feriadosDe }) {
  const inicio = actividad?.inicio || "";
  if (!inicio) return { dias: 0, teletrabajo: 0 };
  const finBruto = finDeActividad(actividad);
  const fin = finBruto && finBruto > inicio ? finBruto : inicio;
  const cursor = new Date(`${inicio}T00:00:00`);
  const limite = new Date(`${fin}T00:00:00`);
  if (Number.isNaN(cursor.getTime()) || Number.isNaN(limite.getTime())) return { dias: 0, teletrabajo: 0 };
  const feriadosDeAno = typeof feriadosDe === "function" ? feriadosDe : () => null;

  let dias = 0;
  let teletrabajo = 0;
  while (cursor <= limite && dias < MAX_DIAS_ACTIVIDAD) {
    const codigo = codigoRolFuncionario(
      personas, roleData, cursor.getFullYear(), cursor.getMonth(), nombre, cursor.getDate(),
      feriadosDeAno(cursor.getFullYear()),
    );
    if (esTeletrabajo(codigo)) teletrabajo += 1;
    dias += 1;
    cursor.setDate(cursor.getDate() + 1);
  }
  return { dias, teletrabajo };
}
