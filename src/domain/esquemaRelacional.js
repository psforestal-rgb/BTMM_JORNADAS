/**
 * Modelo relacional del estado completo de la aplicación.
 *
 * Existe para responder a una pregunta concreta de la administración: «que
 * toda esa información quede guardada en un archivo que después sirva para
 * exportar a una base de datos o conectarse con una».
 *
 * La aplicación guarda un ÚNICO documento JSON (ver `src/lib/db.js`), que es
 * lo correcto para trabajar sin red, pero no es lo que una base de datos
 * espera. Este módulo traduce ese documento a TABLAS normalizadas —con clave
 * primaria, claves foráneas y una fila por hecho— sin perder ni inventar nada:
 *
 *  - Lo que la aplicación guarda como una lista dentro de otro registro
 *    (los funcionarios de una actividad, las cuotas de una reposición, los
 *    cambios de una entrada del rastro) pasa a su propia tabla de enlace, que
 *    es como se representa en un esquema relacional.
 *  - Lo que la aplicación guarda como una clave compuesta en un objeto plano
 *    (`roleData`: `"2026-9-Puesto Orosi-Errol Salazar-15"`) se descompone en
 *    sus columnas reales y se le añade la fecha ISO, que es con lo que se
 *    consulta de verdad.
 *  - Los campos derivados que se añaden (`categoria`, `fecha`,
 *    `codigo_original`) se calculan con el mismo dominio que usa la pantalla,
 *    nunca con una regla paralela.
 *
 * Es un módulo de dominio: no sabe de React, de descargas ni de formatos de
 * archivo. Quien quiera CSV, JSON o SQL parte de aquí.
 */

import { categoriaDe, partirClaveModalidad, partirClaveRol } from "./roles.js";
import { normalizarHistorial } from "./historialPuestos.js";

/** Tipos admitidos en `columnas`. `booleano` se serializa como 0/1. */
export const TIPOS = Object.freeze({
  TEXTO: "texto",
  ENTERO: "entero",
  DECIMAL: "decimal",
  BOOLEANO: "booleano",
  FECHA: "fecha",
});

const T = TIPOS;

/**
 * Definición de las tablas. El orden importa: una tabla nunca aparece antes
 * que aquella a la que referencia, para que un volcado SQL se pueda ejecutar
 * de arriba abajo sin desactivar las claves foráneas.
 */
export const TABLAS = Object.freeze([
  {
    nombre: "puestos",
    descripcion:
      "Puestos operativos del bloque. Se identifican por nombre, no por un id. `vigente` en 0 marca un puesto que ya no está en la lista activa pero al que todavía apuntan datos históricos.",
    clavePrimaria: ["nombre"],
    columnas: [
      { nombre: "nombre", tipo: T.TEXTO },
      { nombre: "codigo", tipo: T.TEXTO },
      { nombre: "color", tipo: T.TEXTO },
      { nombre: "orden", tipo: T.ENTERO },
      { nombre: "vigente", tipo: T.BOOLEANO },
    ],
  },
  {
    nombre: "funcionarios",
    descripcion: "Ficha de cada persona funcionaria.",
    clavePrimaria: ["id"],
    foraneas: [{ columnas: ["puesto_operativo"], tabla: "puestos", referencia: ["nombre"] }],
    columnas: [
      { nombre: "id", tipo: T.TEXTO },
      { nombre: "nombre", tipo: T.TEXTO },
      { nombre: "cedula", tipo: T.TEXTO },
      { nombre: "email", tipo: T.TEXTO },
      { nombre: "cargo", tipo: T.TEXTO },
      { nombre: "puesto_operativo", tipo: T.TEXTO },
      { nombre: "condicion", tipo: T.TEXTO },
      { nombre: "jornada", tipo: T.TEXTO },
      { nombre: "modalidad", tipo: T.TEXTO },
      { nombre: "resolucion", tipo: T.TEXTO },
      { nombre: "jefatura", tipo: T.TEXTO },
      { nombre: "ingreso", tipo: T.FECHA },
      { nombre: "estado", tipo: T.TEXTO },
      { nombre: "disponibilidad", tipo: T.BOOLEANO },
      { nombre: "contrato", tipo: T.TEXTO },
      { nombre: "vencimiento", tipo: T.FECHA },
      { nombre: "policia", tipo: T.BOOLEANO },
      { nombre: "brigada", tipo: T.BOOLEANO },
      { nombre: "ong", tipo: T.BOOLEANO },
      { nombre: "observaciones", tipo: T.TEXTO },
    ],
  },
  {
    nombre: "funcionario_puestos",
    descripcion:
      "Por qué puestos pasó cada persona y cuándo. Un `desde` vacío es «desde antes de lo que cubre el registro»; un `hasta` vacío, «sigue ahí».",
    clavePrimaria: ["funcionario_id", "orden"],
    foraneas: [
      { columnas: ["funcionario_id"], tabla: "funcionarios", referencia: ["id"] },
      { columnas: ["puesto"], tabla: "puestos", referencia: ["nombre"] },
    ],
    columnas: [
      { nombre: "funcionario_id", tipo: T.TEXTO },
      { nombre: "orden", tipo: T.ENTERO },
      { nombre: "funcionario", tipo: T.TEXTO },
      { nombre: "puesto", tipo: T.TEXTO },
      { nombre: "desde", tipo: T.FECHA },
      { nombre: "hasta", tipo: T.FECHA },
      { nombre: "motivo", tipo: T.TEXTO },
    ],
  },
  {
    nombre: "rol_dias",
    descripcion:
      "Un día de rol por persona. Solo se exportan los días con valor: un día sin marcar no es un hecho.",
    clavePrimaria: ["anio", "mes", "puesto", "funcionario", "dia"],
    foraneas: [{ columnas: ["puesto"], tabla: "puestos", referencia: ["nombre"] }],
    columnas: [
      { nombre: "anio", tipo: T.ENTERO },
      { nombre: "mes", tipo: T.ENTERO },
      { nombre: "dia", tipo: T.ENTERO },
      { nombre: "fecha", tipo: T.FECHA },
      { nombre: "puesto", tipo: T.TEXTO },
      { nombre: "funcionario", tipo: T.TEXTO },
      { nombre: "valor", tipo: T.TEXTO },
      { nombre: "categoria", tipo: T.TEXTO },
      { nombre: "codigo_original", tipo: T.TEXTO },
    ],
  },
  {
    nombre: "rol_modalidades",
    descripcion: "Modalidad de jornada configurada para un mes concreto (claves CFG- de roleData).",
    clavePrimaria: ["anio", "mes", "puesto", "funcionario"],
    columnas: [
      { nombre: "anio", tipo: T.ENTERO },
      { nombre: "mes", tipo: T.ENTERO },
      { nombre: "puesto", tipo: T.TEXTO },
      { nombre: "funcionario", tipo: T.TEXTO },
      { nombre: "modalidad", tipo: T.TEXTO },
    ],
  },
  {
    nombre: "actividades",
    descripcion: "Actividades planificadas. `oficial` distingue las que vienen del documento institucional.",
    clavePrimaria: ["id"],
    columnas: [
      { nombre: "id", tipo: T.TEXTO },
      { nombre: "titulo", tipo: T.TEXTO },
      { nombre: "categoria", tipo: T.TEXTO },
      { nombre: "inicio", tipo: T.FECHA },
      { nombre: "fin", tipo: T.FECHA },
      { nombre: "un_dia", tipo: T.BOOLEANO },
      { nombre: "hora_inicio", tipo: T.TEXTO },
      { nombre: "hora_fin", tipo: T.TEXTO },
      { nombre: "lugar", tipo: T.TEXTO },
      { nombre: "observaciones", tipo: T.TEXTO },
      { nombre: "viatico", tipo: T.BOOLEANO },
      { nombre: "oficial", tipo: T.BOOLEANO },
    ],
  },
  {
    nombre: "actividad_funcionarios",
    descripcion: "Quién participa en cada actividad. Tabla de enlace: una fila por persona y actividad.",
    clavePrimaria: ["actividad_id", "funcionario"],
    foraneas: [{ columnas: ["actividad_id"], tabla: "actividades", referencia: ["id"] }],
    columnas: [
      { nombre: "actividad_id", tipo: T.TEXTO },
      { nombre: "funcionario", tipo: T.TEXTO },
    ],
  },
  {
    nombre: "actividad_externos",
    descripcion: "Participantes que no son personal de planta (voluntariado, investigación, otras instituciones).",
    clavePrimaria: ["actividad_id", "nombre"],
    foraneas: [{ columnas: ["actividad_id"], tabla: "actividades", referencia: ["id"] }],
    columnas: [
      { nombre: "actividad_id", tipo: T.TEXTO },
      { nombre: "nombre", tipo: T.TEXTO },
      { nombre: "contacto", tipo: T.TEXTO },
    ],
  },
  {
    nombre: "reposiciones",
    descripcion: "Tiempo trabajado fuera de rol que la administración debe reponer.",
    clavePrimaria: ["id"],
    columnas: [
      { nombre: "id", tipo: T.TEXTO },
      { nombre: "folio", tipo: T.TEXTO },
      { nombre: "funcionario", tipo: T.TEXTO },
      { nombre: "fecha", tipo: T.FECHA },
      { nombre: "tipo_dia", tipo: T.TEXTO },
      { nombre: "motivo", tipo: T.TEXTO },
      { nombre: "motivo_detalle", tipo: T.TEXTO },
      { nombre: "magnitud", tipo: T.TEXTO },
      { nombre: "horas", tipo: T.DECIMAL },
      { nombre: "fecha_reposicion", tipo: T.FECHA },
      { nombre: "observaciones", tipo: T.TEXTO },
    ],
  },
  {
    nombre: "reposicion_cuotas",
    descripcion: "Cada devolución parcial de una reposición.",
    clavePrimaria: ["id"],
    foraneas: [{ columnas: ["reposicion_id"], tabla: "reposiciones", referencia: ["id"] }],
    columnas: [
      { nombre: "id", tipo: T.TEXTO },
      { nombre: "reposicion_id", tipo: T.TEXTO },
      { nombre: "fecha", tipo: T.FECHA },
      { nombre: "magnitud", tipo: T.TEXTO },
      { nombre: "horas", tipo: T.DECIMAL },
    ],
  },
  {
    nombre: "historial",
    descripcion: "Rastro de cambios sobre las fichas (auditoría).",
    clavePrimaria: ["id"],
    columnas: [
      { nombre: "id", tipo: T.TEXTO },
      { nombre: "fecha", tipo: T.TEXTO },
      { nombre: "tipo", tipo: T.TEXTO },
      { nombre: "funcionario_nombre", tipo: T.TEXTO },
      { nombre: "funcionario_cedula", tipo: T.TEXTO },
      { nombre: "detalle_archivo", tipo: T.TEXTO },
      { nombre: "detalle_altas", tipo: T.ENTERO },
      { nombre: "detalle_cambios", tipo: T.ENTERO },
    ],
  },
  {
    nombre: "historial_cambios",
    descripcion: "Campo a campo de cada entrada del rastro: qué decía antes y qué dice después.",
    clavePrimaria: ["historial_id", "campo"],
    foraneas: [{ columnas: ["historial_id"], tabla: "historial", referencia: ["id"] }],
    columnas: [
      { nombre: "historial_id", tipo: T.TEXTO },
      { nombre: "campo", tipo: T.TEXTO },
      { nombre: "antes", tipo: T.TEXTO },
      { nombre: "despues", tipo: T.TEXTO },
    ],
  },
  {
    nombre: "reglas",
    descripcion: "Reglas administrativas configurables. `valor` va en JSON para admitir listas.",
    clavePrimaria: ["clave"],
    columnas: [
      { nombre: "clave", tipo: T.TEXTO },
      { nombre: "valor", tipo: T.TEXTO },
    ],
  },
]);

export const TABLA_POR_NOMBRE = Object.freeze(
  Object.fromEntries(TABLAS.map((t) => [t.nombre, t])),
);

const lista = (v) => (Array.isArray(v) ? v : []);
const texto = (v) => (v === null || v === undefined ? "" : String(v));
const booleano = (v) => v === true;

/**
 * Recupera el código tal como venía en el libro institucional.
 *
 * La conversión que hace `seedRoles.js` es reversible a propósito: un número
 * pasa a `T{n}`, y un código sin equivalente en el modelo viaja entero dentro
 * de `O-{código}`. Deshacerla aquí permite que quien consulte la base de datos
 * vea el código original sin tener que conocer la convención.
 */
export function codigoOriginalDeRol(valor) {
  const v = texto(valor).trim();
  if (!v) return "";
  if (v.startsWith("O-")) return v.slice(2);
  const turno = v.match(/^T(\d+)$/);
  if (turno) return turno[1];
  return v;
}

/*
 * `partirClaveRol` y `partirClaveModalidad` viven en `roles.js`, junto a
 * `rolKey`/`rolCfgKey`: el formato de la clave es uno solo y quien lo arma
 * tiene que ser también quien lo lee. Se reexportan porque esta es la puerta
 * por la que entraron —los llamadores y sus tests las piden aquí— y porque el
 * volcado relacional es justamente el sitio donde una clave mal partida se
 * convierte en una fila mal atribuida.
 */
export { partirClaveModalidad, partirClaveRol };

const dosDigitos = (n) => String(n).padStart(2, "0");

function filasDePuestos(puestos) {
  return lista(puestos).map((p, i) => ({
    nombre: texto(p?.nombre),
    codigo: texto(p?.tag),
    color: texto(p?.color),
    orden: i + 1,
    vigente: true,
  }));
}

/**
 * Puestos a los que apuntan los datos pero que ya no están en la lista activa.
 *
 * `renombrarPuesto` ya reescribe también las claves de `roleData`, así que un
 * renombre hecho desde «Configuración» no deja referencias colgando. Quedan
 * otras dos fuentes, las dos legítimas:
 *
 *  - Un puesto **retirado** —Villa Mills se entregó a otra Área de
 *    Conservación— sigue teniendo rol trabajado bajo su nombre.
 *  - Un estado guardado **antes** de que el renombre arrastrara las claves, o
 *    llegado en un respaldo antiguo.
 *
 * Ese rol es un hecho y se exporta, así que el puesto tiene que existir en la
 * tabla padre o el volcado SQL revienta en la primera fila histórica con un
 * «FOREIGN KEY constraint failed».
 *
 * Se añaden con `vigente` en 0 y sin orden: están para que la referencia se
 * resuelva y para que se vea que existieron, no para usarse como puesto activo.
 */
function filasDePuestosHistoricos(filasVigentes, referencias) {
  const vigentes = new Set(filasVigentes.map((p) => p.nombre));
  const historicos = [...new Set(referencias.filter((n) => n && !vigentes.has(n)))];
  historicos.sort((a, b) => a.localeCompare(b, "es-CR"));
  return historicos.map((nombre) => ({
    nombre,
    codigo: "",
    color: "",
    orden: null,
    vigente: false,
  }));
}

function filasDeFuncionarios(personas) {
  return lista(personas).map((f) => ({
    id: texto(f?.id),
    nombre: texto(f?.nombre),
    cedula: texto(f?.cedula),
    email: texto(f?.email),
    cargo: texto(f?.puesto),
    puesto_operativo: texto(f?.puestoOperativo),
    condicion: texto(f?.condicion),
    jornada: texto(f?.jornada),
    modalidad: texto(f?.modalidad),
    resolucion: texto(f?.resolucion),
    jefatura: texto(f?.jefe),
    ingreso: texto(f?.ingreso),
    estado: texto(f?.estado),
    disponibilidad: booleano(f?.disponibilidad),
    contrato: texto(f?.contrato),
    vencimiento: texto(f?.vencimiento),
    policia: booleano(f?.policia),
    brigada: booleano(f?.brigada),
    ong: booleano(f?.ong),
    observaciones: texto(f?.obs),
  }));
}

/**
 * Historial de puestos, una fila por tramo. Se normaliza con el dominio, así que
 * una ficha antigua —sin historial— produce el único tramo abierto de su puesto
 * actual y la tabla nunca queda vacía por eso.
 */
function filasDeHistorialPuestos(personas) {
  const filas = [];
  for (const f of lista(personas)) {
    const id = texto(f?.id);
    if (!id) continue;
    normalizarHistorial(f).forEach((tramo, i) => {
      filas.push({
        funcionario_id: id,
        orden: i + 1,
        funcionario: texto(f?.nombre),
        puesto: texto(tramo.puesto),
        desde: texto(tramo.desde),
        hasta: texto(tramo.hasta),
        motivo: texto(tramo.motivo),
      });
    });
  }
  return filas;
}

function filasDeRol(roleData, puestosConocidos) {
  const dias = [];
  const modalidades = [];
  for (const [clave, valor] of Object.entries(roleData || {})) {
    if (clave.startsWith("CFG-")) {
      const cfg = partirClaveModalidad(clave, puestosConocidos);
      if (cfg && texto(valor)) modalidades.push({ ...cfg, modalidad: texto(valor) });
      continue;
    }
    // Un día sin marcar no es un hecho: no se exporta como fila.
    if (!texto(valor)) continue;
    const p = partirClaveRol(clave, puestosConocidos);
    if (!p) continue;
    dias.push({
      anio: p.anio,
      mes: p.mes,
      dia: p.dia,
      fecha: `${p.anio}-${dosDigitos(p.mes)}-${dosDigitos(p.dia)}`,
      puesto: p.puesto,
      funcionario: p.funcionario,
      valor: texto(valor),
      categoria: categoriaDe(valor),
      codigo_original: codigoOriginalDeRol(valor),
    });
  }
  const porFecha = (a, b) =>
    a.fecha.localeCompare(b.fecha) ||
    a.puesto.localeCompare(b.puesto) ||
    a.funcionario.localeCompare(b.funcionario);
  dias.sort(porFecha);
  modalidades.sort(
    (a, b) =>
      a.anio - b.anio || a.mes - b.mes || a.puesto.localeCompare(b.puesto) || a.funcionario.localeCompare(b.funcionario),
  );
  return { dias, modalidades };
}

function filasDeActividades(actividadesPlan, esOficial) {
  const actividades = [];
  const participantes = [];
  const externos = [];
  for (const a of lista(actividadesPlan)) {
    const id = texto(a?.id);
    if (!id) continue;
    actividades.push({
      id,
      titulo: texto(a?.titulo),
      categoria: texto(a?.categoria),
      inicio: texto(a?.inicio),
      fin: texto(a?.fin || a?.inicio),
      un_dia: booleano(a?.unDia),
      hora_inicio: texto(a?.horaInicio),
      hora_fin: texto(a?.horaFin),
      lugar: texto(a?.lugar),
      observaciones: texto(a?.observaciones),
      viatico: booleano(a?.viatico),
      oficial: typeof esOficial === "function" ? esOficial(a) === true : false,
    });
    const vistos = new Set();
    for (const nombre of lista(a?.funcionarios)) {
      const n = texto(nombre);
      if (!n || vistos.has(n)) continue;
      vistos.add(n);
      participantes.push({ actividad_id: id, funcionario: n });
    }
    const vistosExternos = new Set();
    for (const otro of lista(a?.otrosParticipantes)) {
      const n = texto(otro?.nombre);
      if (!n || vistosExternos.has(n)) continue;
      vistosExternos.add(n);
      externos.push({ actividad_id: id, nombre: n, contacto: texto(otro?.contacto) });
    }
  }
  return { actividades, participantes, externos };
}

function filasDeReposiciones(reposiciones) {
  const filas = [];
  const cuotas = [];
  for (const r of lista(reposiciones)) {
    const id = texto(r?.id);
    if (!id) continue;
    filas.push({
      id,
      folio: texto(r?.folio),
      funcionario: texto(r?.funcionario),
      fecha: texto(r?.fecha),
      tipo_dia: texto(r?.tipoDia),
      motivo: texto(r?.motivo),
      motivo_detalle: texto(r?.motivoDetalle),
      magnitud: texto(r?.magnitud),
      horas: Number(r?.horas) || 0,
      fecha_reposicion: texto(r?.fechaReposicion),
      observaciones: texto(r?.observaciones),
    });
    lista(r?.cuotas).forEach((c, i) => {
      cuotas.push({
        id: texto(c?.id) || `${id}-c${i + 1}`,
        reposicion_id: id,
        fecha: texto(c?.fecha),
        magnitud: texto(c?.magnitud),
        horas: Number(c?.horas) || 0,
      });
    });
  }
  return { filas, cuotas };
}

function filasDeHistorial(historial) {
  const entradas = [];
  const cambios = [];
  lista(historial).forEach((e, i) => {
    const id = texto(e?.id) || `h${i + 1}`;
    entradas.push({
      id,
      fecha: texto(e?.fecha),
      tipo: texto(e?.tipo),
      funcionario_nombre: texto(e?.funcionario?.nombre),
      funcionario_cedula: texto(e?.funcionario?.cedula),
      detalle_archivo: texto(e?.detalle?.archivo),
      detalle_altas: Number(e?.detalle?.altas) || 0,
      detalle_cambios: Number(e?.detalle?.cambios) || 0,
    });
    const vistos = new Set();
    for (const c of lista(e?.cambios)) {
      const campo = texto(c?.campo);
      if (!campo || vistos.has(campo)) continue;
      vistos.add(campo);
      cambios.push({
        historial_id: id,
        campo,
        antes: typeof c?.antes === "boolean" ? String(c.antes) : texto(c?.antes),
        despues: typeof c?.despues === "boolean" ? String(c.despues) : texto(c?.despues),
      });
    }
  });
  return { entradas, cambios };
}

function filasDeReglas(reglas) {
  return Object.entries(reglas || {})
    .map(([clave, valor]) => ({ clave, valor: JSON.stringify(valor ?? null) }))
    .sort((a, b) => a.clave.localeCompare(b.clave));
}

/**
 * Convierte el estado de la aplicación en las tablas de `TABLAS`.
 *
 * `esActividadOficial` se recibe como parámetro en vez de importarse para no
 * atar el dominio a los datos institucionales de 2026: quien exporta decide
 * qué cuenta como «oficial».
 */
export function tablasDesdeEstado(estado, { esActividadOficial } = {}) {
  // Los puestos conocidos incluyen los de la lista viva y los que cualquier
  // ficha declare: una clave de roleData puede referirse a un puesto que ya se
  // eliminó de la lista, y su rol sigue siendo un hecho que hay que exportar.
  const puestosConocidos = [
    ...lista(estado?.puestos).map((p) => texto(p?.nombre)),
    ...lista(estado?.personas).map((f) => texto(f?.puestoOperativo)),
  ]
    .filter(Boolean)
    .filter((v, i, a) => a.indexOf(v) === i)
    // El más largo primero: si existieran «Puesto Villa» y «Puesto Villa Mills»,
    // el prefijo corto se tragaría al largo.
    .sort((a, b) => b.length - a.length);

  const { dias, modalidades } = filasDeRol(estado?.roleData, puestosConocidos);
  const act = filasDeActividades(estado?.actividadesPlan, esActividadOficial);
  const rep = filasDeReposiciones(estado?.reposiciones);
  const hist = filasDeHistorial(estado?.historial);
  const funcionarios = filasDeFuncionarios(estado?.personas);
  const historialPuestos = filasDeHistorialPuestos(estado?.personas);

  // Toda columna que apunte a `puestos.nombre` tiene que encontrar su fila.
  const puestosVigentes = filasDePuestos(estado?.puestos);
  const referencias = [
    ...dias.map((d) => d.puesto),
    ...modalidades.map((m) => m.puesto),
    ...funcionarios.map((f) => f.puesto_operativo),
    ...historialPuestos.map((h) => h.puesto),
  ];

  return {
    puestos: [...puestosVigentes, ...filasDePuestosHistoricos(puestosVigentes, referencias)],
    funcionarios,
    funcionario_puestos: historialPuestos,
    rol_dias: dias,
    rol_modalidades: modalidades,
    actividades: act.actividades,
    actividad_funcionarios: act.participantes,
    actividad_externos: act.externos,
    reposiciones: rep.filas,
    reposicion_cuotas: rep.cuotas,
    historial: hist.entradas,
    historial_cambios: hist.cambios,
    reglas: filasDeReglas(estado?.reglas),
  };
}

/** Cuántas filas tiene cada tabla; útil para enseñar el resultado antes de descargar. */
export function conteoDeTablas(tablas) {
  return Object.fromEntries(TABLAS.map((t) => [t.nombre, (tablas?.[t.nombre] || []).length]));
}
