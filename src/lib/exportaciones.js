/**
 * Filas y columnas listas para exportar a CSV (B1).
 *
 * Funciones puras, sin React: dado el estado, devuelven `{ filas, columnas }`
 * en el formato que espera `csvDescargable`. Están aquí y no dentro de cada
 * vista para poder probarlas sin montar nada, y sobre todo para que **los
 * números del CSV salgan del mismo dominio que los de la pantalla**. Un
 * exportador que recalcule por su cuenta acaba entregando a la administración
 * un archivo que no cuadra con lo que se ve.
 */

import { dim, fecha, isoFecha } from "../domain/fechas.js";
import { categoriaDe, codigoRolFuncionario, esRolActivo, etiquetaRol } from "../domain/roles.js";
import {
  estadoReposicion,
  horasRepuestas,
  horasTrabajadas,
  saldoHoras,
  cuotasDe,
  HORAS_JORNADA_DEFAULT,
} from "../domain/reposicion.js";
import { finDeActividad } from "../domain/actividades.js";

const SI = "Sí";
const NO = "No";

/**
 * Reposición de tiempo: un registro por fila, con lo trabajado, lo repuesto y
 * el saldo tal como los calcula `src/domain/reposicion.js`.
 */
export function filasDeReposicion(registros = [], hj = HORAS_JORNADA_DEFAULT, t = (x) => x) {
  const columnas = [
    { clave: "folio", titulo: t("reposicion.col.folio") },
    { clave: "funcionario", titulo: t("reposicion.col.funcionario") },
    { clave: "fecha", titulo: t("reposicion.col.fecha") },
    { clave: "tipoDia", titulo: t("reposicion.col.tipoDia") },
    { clave: "motivo", titulo: t("reposicion.col.motivo") },
    { clave: "motivoDetalle", titulo: t("reposicion.col.detalle") },
    { clave: "horasTrabajadas", titulo: t("reposicion.col.trabajado") },
    { clave: "horasRepuestas", titulo: t("reposicion.col.repuesto") },
    { clave: "saldo", titulo: t("reposicion.col.saldo") },
    { clave: "estado", titulo: t("reposicion.col.estado") },
    { clave: "cuotas", titulo: t("reposicion.col.cuotas") },
    { clave: "observaciones", titulo: t("reposicion.col.observaciones") },
  ];
  const filas = registros.map((r) => ({
    folio: r.folio || "",
    funcionario: r.funcionario || "",
    fecha: r.fecha ? fecha(r.fecha) : "",
    tipoDia: r.tipoDia || "",
    motivo: r.motivo || "",
    motivoDetalle: r.motivoDetalle || "",
    horasTrabajadas: horasTrabajadas(r, hj),
    horasRepuestas: horasRepuestas(r, hj),
    saldo: saldoHoras(r, hj),
    estado: estadoReposicion(r, hj),
    // Las cuotas van en una sola celda: son una lista de longitud variable y
    // una columna por cuota dejaría el archivo con un ancho impredecible.
    cuotas: cuotasDe(r)
      .map((c) => `${c.fecha ? fecha(c.fecha) : "—"} (${c.magnitud === "horas" ? `${c.horas} h` : c.magnitud === "medioDia" ? "medio día" : "día entero"})`)
      .join(" · "),
    observaciones: r.observaciones || "",
  }));
  return { filas, columnas };
}

/** Actividades planificadas: una por fila, con sus participantes. */
export function filasDePlanificacion(actividades = [], t = (x) => x) {
  const columnas = [
    { clave: "titulo", titulo: t("planificacion.col.titulo") },
    { clave: "categoria", titulo: t("planificacion.col.categoria") },
    { clave: "inicio", titulo: t("planificacion.col.inicio") },
    { clave: "fin", titulo: t("planificacion.col.fin") },
    { clave: "horaInicio", titulo: t("planificacion.col.horaInicio") },
    { clave: "horaFin", titulo: t("planificacion.col.horaFin") },
    { clave: "lugar", titulo: t("planificacion.col.lugar") },
    { clave: "funcionarios", titulo: t("planificacion.col.funcionarios") },
    { clave: "otrosParticipantes", titulo: t("planificacion.col.otros") },
    { clave: "viatico", titulo: t("planificacion.col.viatico") },
    { clave: "observaciones", titulo: t("planificacion.col.observaciones") },
  ];
  const filas = actividades.map((a) => ({
    titulo: a.titulo || "",
    categoria: a.categoria || "",
    inicio: a.inicio ? fecha(a.inicio) : "",
    fin: finDeActividad(a) ? fecha(finDeActividad(a)) : "",
    horaInicio: a.horaInicio || "",
    horaFin: a.horaFin || "",
    lugar: a.lugar || "",
    funcionarios: (a.funcionarios || []).join(" · "),
    otrosParticipantes: (a.otrosParticipantes || []).join(" · "),
    viatico: a.viatico ? SI : NO,
    observaciones: a.observaciones || "",
  }));
  return { filas, columnas };
}

/**
 * Rol mensual: una fila por funcionario y una columna por día del mes, más el
 * recuento de días de trabajo. Es la misma cuadrícula que se ve en pantalla,
 * y los códigos salen de `codigoRolFuncionario`, no de una copia.
 */
export function filasDeRoles({ grupos = [], personas = [], roleData = {}, year, month, feriados = null, t = (x) => x }) {
  const totalDias = dim(year, month);
  const columnas = [
    { clave: "puesto", titulo: t("roles.col.puesto") },
    { clave: "funcionario", titulo: t("roles.col.funcionario") },
  ];
  for (let d = 1; d <= totalDias; d += 1) columnas.push({ clave: `d${d}`, titulo: String(d) });
  columnas.push({ clave: "diasTrabajo", titulo: t("roles.col.diasTrabajo") });

  const filas = [];
  for (const grupo of grupos) {
    for (const nombre of grupo.funcionarios || []) {
      const fila = { puesto: grupo.nombre, funcionario: nombre };
      let diasTrabajo = 0;
      for (let d = 1; d <= totalDias; d += 1) {
        const codigo = codigoRolFuncionario(personas, roleData, year, month, nombre, d, feriados);
        fila[`d${d}`] = codigo || "";
        if (esRolActivo(codigo)) diasTrabajo += 1;
      }
      fila.diasTrabajo = diasTrabajo;
      filas.push(fila);
    }
  }
  return { filas, columnas };
}

/**
 * Segunda hoja del rol: el desglose por categoría de cada funcionario, que es
 * lo que suele pedir la administración cuando el rol se usa para justificar.
 */
export function filasDeResumenRoles({ grupos = [], personas = [], roleData = {}, year, month, feriados = null, t = (x) => x }) {
  const totalDias = dim(year, month);
  const cats = ["T", "E", "L", "V", "I", "O"];
  const columnas = [
    { clave: "puesto", titulo: t("roles.col.puesto") },
    { clave: "funcionario", titulo: t("roles.col.funcionario") },
    ...cats.map((c) => ({ clave: c, titulo: `${etiquetaRol(c)} (${c})` })),
    { clave: "sinMarcar", titulo: t("roles.col.sinMarcar") },
  ];
  const filas = [];
  for (const grupo of grupos) {
    for (const nombre of grupo.funcionarios || []) {
      const fila = { puesto: grupo.nombre, funcionario: nombre, sinMarcar: 0 };
      for (const c of cats) fila[c] = 0;
      for (let d = 1; d <= totalDias; d += 1) {
        const cat = categoriaDe(codigoRolFuncionario(personas, roleData, year, month, nombre, d, feriados));
        if (!cat) fila.sinMarcar += 1;
        else if (cat in fila) fila[cat] += 1;
      }
      filas.push(fila);
    }
  }
  return { filas, columnas };
}

/** Nombre de archivo estable: vista, periodo y marca de tiempo. */
export function nombreArchivo(vista, sufijo, marca) {
  return [vista, sufijo, marca].filter(Boolean).join("-") + ".csv";
}

/** Fecha ISO de un día del periodo, para los nombres de archivo. */
export function isoDelPeriodo(year, month) {
  return isoFecha(year, month, 1).slice(0, 7);
}
