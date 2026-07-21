const DOCUMENTO_ID = "12K3C6CmQ1xcwo4zfS8hZF4qObRb8EvyFHDwI9WZ9ZiU";
const URL_EXPORTACION = `https://docs.google.com/document/d/${DOCUMENTO_ID}/export?format=txt`;

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

function participantes(textos) {
  const funcionarios = [];
  const otrosParticipantes = [];
  const agregarFuncionario = (nombre) => {
    if (!funcionarios.includes(nombre)) funcionarios.push(nombre);
  };
  const agregarOtro = (nombre) => {
    if (!otrosParticipantes.some((p) => p.nombre === nombre)) otrosParticipantes.push({ nombre, contacto: "" });
  };

  for (const texto of textos) {
    const normal = ascii(texto);
    for (const [alias, nombre] of Object.entries(aliasFuncionarios).sort((a, b) => b[0].length - a[0].length)) {
      if (contieneAlias(normal, alias)) agregarFuncionario(nombre);
    }
    for (const [alias, nombre] of Object.entries(otrosAlias)) {
      if (contieneAlias(normal, alias)) agregarOtro(nombre);
    }
    if (/\bENZO\b/.test(normal)) agregarOtro("Enzo");
    if (/\bALEX(?:ANDER)?\b/.test(normal)) agregarOtro("Alex");
    if (/\bMERYLL(?:\s+ARIAS)?\b/.test(normal)) agregarOtro("Meryll Arias");
    if (/\bLUIS\s*DAVID\b|\bLUISDA\b/.test(normal)) agregarOtro("Luis David");
    if (/\bVOLUNTARI(?:O|A|OS|AS)\b/.test(normal)) agregarOtro("Voluntariado");
    if (/\bINVESTIGADOR(?:A|ES|AS)?\b/.test(normal)) agregarOtro("Investigadores");
    if (/\bPASANTES?\b/.test(normal)) agregarOtro("Pasantes");
    if (/\bESTUDIANTES?\b/.test(normal)) agregarOtro("Estudiantes");
  }
  return { funcionarios, otrosParticipantes };
}

export function convertirPlanificacion2026(texto) {
  const grupos = new Map();
  let mes = 0;
  let dia = 0;
  let sitio = "";

  for (const lineaOriginal of texto.split(/\r?\n/)) {
    const linea = lineaOriginal.trim();
    if (!linea || diasSemana.has(linea) || /^_+$/.test(linea) || linea === "De") continue;
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

  return [...grupos.values()].map((grupo, indice) => {
    const fecha = `2026-${String(grupo.mes).padStart(2, "0")}-${String(grupo.dia).padStart(2, "0")}`;
    const { funcionarios, otrosParticipantes } = participantes(grupo.textos);
    return {
      id: `plan2026-${String(indice + 1).padStart(4, "0")}`,
      titulo: `Programación institucional — ${grupo.sitio}`,
      categoria: "Otra actividad",
      inicio: fecha,
      fin: fecha,
      unDia: true,
      horaInicio: "08:00",
      horaFin: "16:00",
      funcionarios,
      otrosParticipantes,
      lugar: lugares[grupo.sitio],
      observaciones: grupo.textos.map((linea) => `• ${linea}`).join("\n"),
      viatico: false,
    };
  });
}

export async function cargarPlanificacion2026() {
  const respuesta = await fetch(URL_EXPORTACION, { cache: "no-store", credentials: "omit" });
  if (!respuesta.ok) throw new Error(`No se pudo descargar la planificación 2026 (${respuesta.status}).`);
  const actividades = convertirPlanificacion2026(await respuesta.text());
  if (!actividades.length) throw new Error("La planificación 2026 no produjo actividades válidas.");
  return actividades;
}
