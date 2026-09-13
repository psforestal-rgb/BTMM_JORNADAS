import { puestos } from "./puestos.js";
import { historialSemillaDe } from "./historialPuestos2026.js";

export const baseFuncionarios = puestos.flatMap((p, gi) =>
  p.funcionarios.map((nombre, pi) => {
    const n = gi * 10 + pi + 1;
    const esPablo = nombre === "Pablo Sánchez";
    const esAdmin = nombre === "Yolanda Elizondo";
    const esOng = nombre === "Carlos Cordero";
    const sinRes = ["Yeison Cortés", "Jetzelly Villalobos", "Guillermo Pérez"].includes(nombre);
    const estado =
      nombre === "Fabricio Carbonell"
        ? "De vacaciones"
        : nombre === "Guillermo Pérez"
        ? "Incapacitado"
        : // Salió del bloque hacia otra Área de Conservación; su historial de
          // puestos se cierra el 31/08/2026 (ver historialPuestos2026.js).
          nombre === "Kenneth Mena"
        ? "Inactivo"
        : "Activo";
    // El rol institucional dice por qué puestos pasó cada quien y cuándo. Si
    // alguien no está en él, arranca con un tramo abierto en su puesto actual.
    const historialPuestos = historialSemillaDe(nombre) || [
      { puesto: p.nombre, desde: "", hasta: null },
    ];
    return {
      id: `f${n}`,
      nombre,
      cedula: `1-0000-${String(n).padStart(4, "0")}`,
      email: esPablo ? "psforestal@yahoo.com" : `${nombre.toLowerCase().replaceAll(" ", ".")}@sinac.go.cr`,
      puesto: esPablo
        ? "Técnico en Recursos Naturales"
        : esAdmin
        ? "Asistente Administrativo"
        : esOng
        ? "Personal Apoyo ONG-Invest-Volunt"
        : "Guardaparques",
      condicion: esOng ? "ONG-Invest-Volunt" : n % 5 === 0 ? "Interino" : "Propiedad",
      jornada: esPablo || esAdmin ? "Ordinaria" : "Acumulativa",
      modalidad:
        esPablo || esAdmin
          ? "Horario administrativo L-V"
          : n % 7 === 0
          ? "16x8"
          : n % 4 === 0
          ? "12x6"
          : "10x5",
      resolucion: sinRes
        ? ""
        : esOng
        ? "CONV-ONG-INV-VOL-2026"
        : esPablo || esAdmin
        ? ""
        : `RES-ACC-${String(n).padStart(3, "0")}-2026`,
      disponibilidad: !esPablo && !esAdmin && !esOng && n % 3 !== 0,
      contrato: !esPablo && !esAdmin && !esOng && n % 3 !== 0 ? `DISP-2026-${String(n).padStart(3, "0")}` : "",
      vencimiento: n % 5 === 0 ? "2026-05-30" : n % 4 === 0 ? "2026-06-30" : n % 3 !== 0 ? "2026-12-31" : "",
      policia: !esPablo && !esAdmin && !esOng && !sinRes,
      brigada: n % 4 === 2,
      ong: esOng,
      jefe: "Administración PNLQ",
      estado,
      ingreso: historialPuestos[0].desde || "2026-01-01",
      puestoOperativo: historialPuestos[historialPuestos.length - 1].puesto,
      historialPuestos,
      obs: `${p.nombre}${sinRes ? " · Dato pendiente: resolución acumulativa" : ""}`,
    };
  })
);
