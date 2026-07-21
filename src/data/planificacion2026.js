import { PLANIFICACION_2026_TEXTO } from "./planificacion2026Fuente/index.js";

const lugares = {
  PNTMM: "Parque Nacional Tapantí Macizo de la Muerte",
  PNLQ: "Parque Nacional Los Quetzales",
  PLE: "Puesto La Esperanza",
  PVM: "Puesto Villa Mills",
};

const meses = {
  ENERO: 1, FEBRERO: 2, MARZO: 3, ABRIL: 4, MAYO: 5, JUNIO: 6,
  JULIO: 7, AGOSTO: 8, SETIEMBRE: 9, SEPTIEMBRE: 9, OCTUBRE: 10,
  NOVIEMBRE: 11, DICIEMBRE: 12,
};

const aliasFuncionarios = {
  ES: "Errol Salazar", ME: "Mayra Espinoza", YC: "Yeison Cortés",
  KM: "Kenneth Mena", FC: "Fabricio Carbonell", MN: "Monserrath Navarro",
  JPG: "Juan Pablo Granados", JG: "Juan Pablo Granados", PG: "Juan Pablo Granados",
  JP: "Juan Pablo Granados", LV: "Laura Valverde", JV: "Jetzelly Villalobos",
  DT: "Diana Tencio", KV: "Karen Valle", PS: "Pablo Sánchez",
  YE: "Yolanda Elizondo", MS: "Mariano Solís", MSA: "Mariano Solís",
  GP: "Guillermo Pérez", CC: "Carlos Cordero", JB: "Josué Brenes",
  AA: "Alexander Alvarado",
};

const otrosAlias = {
  MH: "MH", GG: "GG", MSG: "MSG", DA: "Dirección de Agua", GJ: "GJ",
  JC: "JC", IV: "IV", YV: "YV", VB: "VB", ASVO: "ASVO", TCU: "TCU",
  UCR: "UCR", TEC: "TEC", ICE: "ICE", ACLAP: "ACLAP",
  COVIRENA: "COVIRENA", COVIRENAS: "COVIRENA", PANTHERA: "Panthera",
  UNED: "UNED", INA: "INA", MOPT: "MOPT", FUNDECOR: "FUNDECOR",
  CEDARENA: "CEDARENA",
};

const diasSemana = new Set(["DOMINGO", "LUNES", "MARTES", "MIÉRCOLES", "JUEVES", "VIERNES", "SÁBADO"]);
const ascii = (texto) => texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
const contieneAlias = (texto, alias) => new RegExp(`(^|[^A-Z])${alias}([^A-Z]|$)`).test(texto);

function sitioDe(linea) {
  const limpio = linea.replace(/[^A-Za-z]/g, "").toUpperCase();
  if (limpio.startsWith("PNTMM")) return "PNTMM";
  return ["PNLQ", "PLE", "PVM"].includes(limpio) ? limpio : "";
}

/**
 * Participantes externos ("invitados"): voluntarios, covirenas, pasantes,
 * investigadores, funcionarios de otras instituciones, etc. A diferencia del
 * personal de planta, no se asignan como `funcionarios` de la actividad.
 */
function detectarOtros(texto) {
  const normal = ascii(texto);
  const otros = [];
  const agregar = (nombre) => {
    if (!otros.some((p) => p.nombre === nombre)) otros.push({ nombre, contacto: "" });
  };
  for (const [alias, nombre] of Object.entries(otrosAlias)) {
    if (contieneAlias(normal, alias)) agregar(nombre);
  }
  if (/\bENZO\b/.test(normal)) agregar("Enzo");
  if (/\bALEX(?:ANDER)?\b/.test(normal)) agregar("Alex");
  if (/\bMERYLL(?:\s+ARIAS)?\b/.test(normal)) agregar("Meryll Arias");
  if (/\bLUIS\s*DAVID\b|\bLUISDA\b/.test(normal)) agregar("Luis David");
  if (/\bVOLUNTARI(?:O|A|OS|AS)\b/.test(normal)) agregar("Voluntariado");
  if (/\bINVESTIGADOR(?:A|ES|AS)?\b/.test(normal)) agregar("Investigadores");
  if (/\bPASANTES?\b/.test(normal)) agregar("Pasantes");
  if (/\bESTUDIANTES?\b/.test(normal)) agregar("Estudiantes");
  return otros;
}

/**
 * Una nota es "de invitado" cuando su sujeto es una persona externa
 * (voluntario, covirena, invitado, investigador, pasante, estudiante) o
 * describe su entrada/salida/pernocta. Estas líneas se registran SIN
 * funcionario y no heredan el del renglón anterior.
 *
 * Ojo: "voluntariado" (el programa) NO cuenta como invitado — es una tarea
 * institucional (p. ej. "Charla voluntariado"); solo "voluntario/a/os/as"
 * (las personas) marcan la nota como externa.
 */
function esNotaDeInvitado(texto) {
  const normal = ascii(texto);
  if (/\bVOLUNTARI[OA]S?\b/.test(normal)) return true;
  if (/\bCOVIRENAS?\b/.test(normal)) return true;
  if (/\bINVITAD[OA]S?\b/.test(normal)) return true;
  if (/\bINVESTIGADOR/.test(normal)) return true;
  if (/\bPASANTES?\b/.test(normal)) return true;
  if (/\bESTUDIANTES?\b/.test(normal)) return true;
  if (/\bPRACTICANTES?\b/.test(normal)) return true;
  if (/\bENZO\b/.test(normal)) return true;
  if (/\bMERYLL\b/.test(normal)) return true;
  if (/^(INGRESAN?|SALEN?|PERNOCTAN?|LLEGAN?|VISITAN?)\b/.test(normal)) return true;
  return false;
}

/**
 * Extrae el/los funcionarios responsables al inicio del renglón (el sujeto de
 * la tarea) y devuelve el título ya sin ese prefijo. Solo se toman las siglas
 * encadenadas al comienzo ("ES y ME ...", "ME, FC, MN ...", "DT:..."); una
 * sigla que aparece más adelante ("PS coordina con YC ...") es colaboradora,
 * no responsable, y no se agrega.
 */
function detectarResponsables(linea) {
  const emparejarSigla = (texto) => {
    const m = texto.match(/^([A-Za-z]{2,3})(?![A-Za-z])/);
    if (!m) return null;
    const clave = m[1].toUpperCase();
    return aliasFuncionarios[clave] ? { nombre: aliasFuncionarios[clave], largo: m[1].length } : null;
  };

  let resto = linea.replace(/^\s+/, "");
  const primero = emparejarSigla(resto);
  if (!primero) return { funcionarios: [], titulo: linea.trim() };

  const funcionarios = [primero.nombre];
  resto = resto.slice(primero.largo);

  // Encadena siglas adicionales unidas por separadores ("y", ",", "/", "-").
  for (;;) {
    const sep = resto.match(/^(\s*(?:y|,|\/|-|–|&|;)\s*|\s+)/i);
    if (!sep) break;
    const despues = resto.slice(sep[0].length);
    const siguiente = emparejarSigla(despues);
    if (!siguiente) break; // el separador pertenece a la tarea, no a otra sigla
    if (!funcionarios.includes(siguiente.nombre)) funcionarios.push(siguiente.nombre);
    resto = despues.slice(siguiente.largo);
  }

  // Descarta el separador que une el sujeto con la tarea (":", "-", espacios) y
  // una conjunción suelta que haya quedado de una sigla no reconocida
  // ("PS y JS" => "JS"). Si no queda tarea, `titulo` es "" y el renglón se omite.
  const titulo = resto
    .replace(/^\s*[:\-–]?\s*/, "")
    .replace(/^(?:y|e|&|,|;)\s+/i, "")
    .trim();
  return { funcionarios, titulo };
}

/**
 * Repara cortes de palabra a mitad de renglón provenientes de la exportación
 * del documento (p. ej. "... YC a" + "ctividades de la semana" =>
 * "... YC actividades de la semana"). Solo une cuando el renglón previo
 * termina en un fragmento suelto de una letra y el siguiente empieza en
 * minúscula; así no toca renglones que solo empiezan en minúscula por estilo
 * ("pernocta covirena", "informes", etc.).
 */
function repararCortes(textos) {
  const salida = [];
  for (const linea of textos) {
    const previa = salida[salida.length - 1];
    if (previa !== undefined && /^[a-záéíóúñ]/.test(linea)) {
      const ultima = previa.split(/\s+/).pop() || "";
      if (ultima.length === 1 && /^[a-záéíóúñ]$/.test(ultima)) {
        salida[salida.length - 1] = previa + linea;
        continue;
      }
    }
    salida.push(linea);
  }
  return salida;
}

export function convertirPlanificacion2026(texto) {
  const grupos = new Map();
  let mes = 0;
  let dia = 0;
  let sitio = "";

  for (const lineaOriginal of texto.split(/\r?\n/)) {
    const linea = lineaOriginal.trim();
    if (
      !linea ||
      diasSemana.has(linea) ||
      /^_+$/.test(linea) ||
      linea === "De" ||
      /^Pestaña\s+\d+$/i.test(linea)
    ) continue;
    const encabezadoMes = linea.match(/^([A-ZÁÉÍÓÚÑ]+) 2026$/);
    if (encabezadoMes && meses[encabezadoMes[1]]) {
      mes = meses[encabezadoMes[1]];
      dia = 0;
      sitio = "";
      continue;
    }
    if (/^\d{1,2}$/.test(linea)) {
      dia = Number(linea);
      sitio = "";
      continue;
    }
    const sitioDetectado = sitioDe(linea);
    if (sitioDetectado) {
      sitio = sitioDetectado;
      continue;
    }
    if (!mes || !dia || !sitio) continue;
    const clave = `${mes}-${dia}-${sitio}`;
    if (!grupos.has(clave)) grupos.set(clave, { mes, dia, sitio, textos: [] });
    grupos.get(clave).textos.push(linea);
  }

  const actividades = [];
  for (const grupo of grupos.values()) {
    const fecha = `2026-${String(grupo.mes).padStart(2, "0")}-${String(grupo.dia).padStart(2, "0")}`;
    let ultimosFuncionarios = [];

    for (const linea of repararCortes(grupo.textos)) {
      const { funcionarios: responsables, titulo } = detectarResponsables(linea);
      if (!titulo) continue;

      let funcionarios;
      if (responsables.length) {
        funcionarios = responsables;
        ultimosFuncionarios = responsables;
      } else if (esNotaDeInvitado(linea)) {
        // Tarea de un invitado (voluntario, covirena, etc.): sin funcionario.
        funcionarios = [];
      } else if (ultimosFuncionarios.length) {
        // Continuación sin sigla de la tarea del funcionario anterior
        // (p. ej. "Charla voluntariado" debajo de "DT:Mantenimiento senderos").
        funcionarios = ultimosFuncionarios;
      } else {
        funcionarios = [];
      }

      actividades.push({
        id: `plan2026-${String(actividades.length + 1).padStart(4, "0")}`,
        titulo,
        categoria: "Otra actividad",
        inicio: fecha,
        fin: fecha,
        unDia: true,
        horaInicio: "08:00",
        horaFin: "16:00",
        funcionarios,
        otrosParticipantes: detectarOtros(linea),
        lugar: lugares[grupo.sitio],
        observaciones: "",
        viatico: false,
      });
    }
  }

  return actividades;
}

export async function cargarPlanificacion2026() {
  const actividades = convertirPlanificacion2026(PLANIFICACION_2026_TEXTO);
  if (!actividades.length) throw new Error("La planificación 2026 no produjo actividades válidas.");
  return actividades;
}
