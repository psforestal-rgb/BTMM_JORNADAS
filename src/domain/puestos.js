/**
 * Operaciones sobre la lista de puestos operativos (RP1–RP8).
 *
 * Lógica pura, sin React. La decisión que gobierna todo el módulo:
 *
 * **Un puesto se identifica por su nombre, no por un id.** Las fichas guardan
 * `puestoOperativo: "Puesto Orosi"` y las reglas de cobertura guardan una lista
 * de nombres, el historial de traslados guarda nombres y las claves de
 * `roleData` llevan el nombre dentro. Introducir ids obligaría a migrar datos ya
 * persistidos y a subir `SCHEMA_VERSION`; mantener el nombre como clave evita
 * esa migración a cambio de que renombrar tenga que arrastrar TODAS las
 * referencias. De eso se encarga `renombrarPuesto`, que devuelve el cambio
 * completo de una sola vez para que no pueda aplicarse a medias.
 */

import { reescribirClavesRol } from "./roles.js";

/** Compara nombres como los compararía una persona: sin bordes ni mayúsculas. */
function normalizar(texto) {
  return String(texto ?? "").trim().toLowerCase();
}

/** Normaliza el código corto: siempre en mayúsculas y sin espacios. */
export function normalizarTag(texto) {
  return String(texto ?? "").trim().toUpperCase();
}

/**
 * Valida un puesto contra el resto de la lista.
 * Devuelve un arreglo de mensajes; vacío si está bien. No bloquea nada por sí
 * mismo: quien llama decide, igual que en `src/domain/validaciones.js`.
 */
export function validarPuesto(puesto, lista, nombreOriginal = null) {
  const errores = [];
  const nombre = String(puesto?.nombre ?? "").trim();
  const tag = normalizarTag(puesto?.tag);
  const otros = (Array.isArray(lista) ? lista : []).filter(
    (p) => normalizar(p.nombre) !== normalizar(nombreOriginal),
  );

  if (!nombre) errores.push("El nombre del puesto es obligatorio.");
  else if (otros.some((p) => normalizar(p.nombre) === normalizar(nombre))) {
    errores.push(`Ya existe un puesto llamado «${nombre}».`);
  }

  if (!tag) errores.push("El código corto es obligatorio.");
  else if (otros.some((p) => normalizarTag(p.tag) === tag)) {
    errores.push(`El código «${tag}» ya está en uso.`);
  }
  return errores;
}

/** Añade un puesto al final de la lista. No valida: eso lo hace el llamador. */
export function agregarPuesto(lista, puesto) {
  const base = Array.isArray(lista) ? lista : [];
  return [...base, { ...puesto, nombre: String(puesto.nombre).trim(), tag: normalizarTag(puesto.tag) }];
}

/** Sustituye un puesto conservando su posición. */
export function reemplazarPuesto(lista, nombreOriginal, puesto) {
  const base = Array.isArray(lista) ? lista : [];
  return base.map((p) =>
    normalizar(p.nombre) === normalizar(nombreOriginal)
      ? { ...p, ...puesto, nombre: String(puesto.nombre).trim(), tag: normalizarTag(puesto.tag) }
      : p,
  );
}

/** Quita un puesto de la lista. */
export function quitarPuesto(lista, nombre) {
  const base = Array.isArray(lista) ? lista : [];
  return base.filter((p) => normalizar(p.nombre) !== normalizar(nombre));
}

/**
 * Renombrar en cascada: el puesto, las fichas que lo referencian —incluido su
 * historial de traslados—, la regla de cobertura diaria y las claves del rol.
 *
 * Cada referencia que no se arrastre rompe algo distinto, y ninguna avisa:
 *
 *  - `puestoOperativo`: la ficha queda apuntando a un puesto inexistente y la
 *    cobertura crítica de la vista Día deja de evaluarse.
 *  - `historialPuestos`: desde que la cuadrícula de Roles agrupa por
 *    `puestoEnMes`, una persona cuyo historial siga diciendo el nombre viejo
 *    **desaparece entera de la cuadrícula**. El grupo se llama como el nombre
 *    nuevo y su historial dice el viejo, así que no cae en ningún grupo.
 *  - `roleData`: las claves llevan dentro el nombre del puesto. Sin
 *    reescribirlas, el rol ya trabajado queda archivado bajo el nombre viejo y
 *    las celdas salen en blanco.
 *
 * `roleData` es opcional para no obligar a los llamadores que solo mueven
 * listas; cuando no se pasa, se devuelve tal cual y `celdas` vale 0. Quien
 * renombra desde la interfaz SÍ tiene que pasarlo.
 *
 * Devuelve `{ puestos, personas, reglas, roleData, afectados, celdas,
 * colisiones }`. `afectados` cuenta fichas tocadas (por puesto actual o por
 * historial) y `celdas` claves de rol movidas.
 */
export function renombrarPuesto({ puestos, personas, reglas, roleData = null, antes, despues }) {
  const nuevo = String(despues ?? "").trim();
  const viejo = String(antes ?? "").trim();
  const listaPuestos = Array.isArray(puestos) ? puestos : [];
  const listaPersonas = Array.isArray(personas) ? personas : [];
  const coincide = (v) => normalizar(v) === normalizar(viejo);

  /* La guarda compara los nombres TAL CUAL, no normalizados. Cambiar solo las
     mayúsculas («Puesto Orosi» → «PUESTO OROSI») es un renombre de verdad: el
     editor ya escribió el nombre nuevo en la lista, y salir aquí sin arrastrar
     nada dejaría las fichas y el rol apuntando al nombre viejo. */
  if (!viejo || !nuevo || viejo === nuevo) {
    return {
      puestos: listaPuestos,
      personas: listaPersonas,
      reglas,
      roleData: roleData ?? null,
      afectados: 0,
      celdas: 0,
      colisiones: 0,
    };
  }

  const visitDiario = Array.isArray(reglas?.puestosRequierenVisitantesDiario)
    ? reglas.puestosRequierenVisitantesDiario
    : [];

  let afectados = 0;
  const personasNuevas = listaPersonas.map((p) => {
    const cambiaActual = coincide(p?.puestoOperativo);
    const historial = Array.isArray(p?.historialPuestos) ? p.historialPuestos : null;
    const cambiaHistorial = historial ? historial.some((t) => coincide(t?.puesto)) : false;
    if (!cambiaActual && !cambiaHistorial) return p;
    afectados += 1;
    return {
      ...p,
      ...(cambiaActual ? { puestoOperativo: nuevo } : {}),
      ...(cambiaHistorial
        ? { historialPuestos: historial.map((t) => (coincide(t?.puesto) ? { ...t, puesto: nuevo } : t)) }
        : {}),
    };
  });

  const rol = roleData
    ? reescribirClavesRol(roleData, {
        tipo: "puesto",
        antes: viejo,
        despues: nuevo,
        // La lista de ANTES del renombre: es la que permite partir bien una
        // clave cuyo nombre de puesto lleve guiones.
        puestosConocidos: listaPuestos.map((p) => p?.nombre).filter(Boolean),
      })
    : { roleData: roleData ?? null, movidas: 0, colisiones: 0 };

  return {
    puestos: listaPuestos.map((p) => (coincide(p.nombre) ? { ...p, nombre: nuevo } : p)),
    personas: personasNuevas,
    reglas: {
      ...reglas,
      puestosRequierenVisitantesDiario: visitDiario.map((n) => (coincide(n) ? nuevo : n)),
    },
    roleData: rol.roleData,
    afectados,
    celdas: rol.movidas,
    colisiones: rol.colisiones,
  };
}

/**
 * Mueve un puesto una posición arriba (`delta = -1`) o abajo (`delta = 1`).
 *
 * El orden importa: es el que se ve en la cuadrícula de Roles, en los
 * desplegables de las fichas y en el resumen de la vista Día. Devuelve la
 * misma lista sin tocar si el movimiento se sale de los extremos, para que la
 * interfaz pueda llamar sin comprobar nada.
 */
export function moverPuesto(lista, nombre, delta) {
  const base = Array.isArray(lista) ? lista : [];
  const desde = base.findIndex((p) => normalizar(p.nombre) === normalizar(nombre));
  if (desde < 0) return base;
  const hasta = desde + delta;
  if (hasta < 0 || hasta >= base.length) return base;
  const copia = [...base];
  const [movido] = copia.splice(desde, 1);
  copia.splice(hasta, 0, movido);
  return copia;
}

/**
 * Plan de importación de puestos (RP6).
 *
 * Decisiones, registradas en `_relevo/SEGUIMIENTO.md`:
 *
 *  - **Solo agrega y actualiza; nunca elimina.** Si un import pudiera borrar un
 *    puesto, las fichas que lo referencian quedarían apuntando a algo
 *    inexistente y la cobertura crítica dejaría de evaluarse en silencio. Un
 *    archivo incompleto no puede vaciar la lista.
 *  - **La identidad es el nombre**, igual que en el resto del sistema.
 *  - **Una fila cuyo código ya usa OTRO puesto se omite y se informa.** Las dos
 *    alternativas eran peores: pisar el código del otro rompería su
 *    identificación en la cuadrícula, e inventar un código sería fabricar un
 *    dato que nadie escribió.
 *  - **Un color desconocido cae al primero de la paleta** en vez de omitir la
 *    fila: el color es decoración, no un dato que justifique perder el puesto.
 *
 * @returns { resultado, nuevos, actualizados, omitidos, duplicados }
 */
export function planificarImportacionPuestos(puestos, filas, coloresValidos = []) {
  const actuales = Array.isArray(puestos) ? puestos : [];
  const resultado = [...actuales];
  const nuevos = [];
  const actualizados = [];
  const omitidos = [];
  const duplicados = [];
  const renombresIgnorados = [];
  const vistos = new Map();
  const clases = coloresValidos.map((c) => c.clases ?? c);
  const colorPorDefecto = clases[0] ?? "";

  const indiceDe = (nombre) =>
    resultado.findIndex((x) => normalizar(x.nombre) === normalizar(nombre));

  (Array.isArray(filas) ? filas : []).forEach((fila, i) => {
    // `i + 2`: la fila 1 del archivo es la cabecera, así que esta es la cuenta
    // que la persona ve en su hoja de cálculo.
    const numeroDeFila = i + 2;
    const nombre = String(fila?.nombre ?? "").trim();
    if (!nombre) {
      omitidos.push({ fila: numeroDeFila, motivo: "sinNombre" });
      return;
    }
    if (vistos.has(normalizar(nombre))) {
      duplicados.push({ fila: numeroDeFila, anterior: vistos.get(normalizar(nombre)) });
    }
    vistos.set(normalizar(nombre), numeroDeFila);

    const tag = normalizarTag(fila?.tag);
    const posicion = indiceDe(nombre);
    // El código solo puede chocar con OTRO puesto; con el suyo propio no.
    const choqueTag =
      tag &&
      resultado.some(
        (x, j) => j !== posicion && normalizarTag(x.tag) === tag,
      );
    if (choqueTag) {
      omitidos.push({ fila: numeroDeFila, motivo: "codigoOcupado", nombre, tag });
      return;
    }

    const colorPedido = String(fila?.color ?? "").trim();
    const color = clases.includes(colorPedido) ? colorPedido : null;

    if (posicion < 0) {
      // Un puesto NUEVO sin código corto se omite en vez de crearse vacío.
      // `validarPuesto` exige un código único y no vacío, así que un archivo
      // sin esa columna estaría metiendo por la puerta de atrás puestos que el
      // formulario rechazaría, y varios a la vez con el mismo código «».
      if (!tag) {
        omitidos.push({ fila: numeroDeFila, motivo: "sinCodigo", nombre });
        return;
      }
      const registro = { nombre, tag, color: color || colorPorDefecto };
      resultado.push(registro);
      nuevos.push({ fila: numeroDeFila, registro });
      return;
    }
    const previo = resultado[posicion];
    /* El nombre que manda es el que ya estaba, NO el del archivo.
       La comparación ignora mayúsculas y acentos, así que importar «puesto
       orosi» encontraría «Puesto Orosi»; adoptar la grafía del archivo sería
       renombrar el puesto, y un renombre tiene que arrastrar las fichas de los
       funcionarios y las reglas de cobertura (eso lo hace `renombrarPuesto`,
       desde el editor). Sin ese arrastre, las fichas se quedarían apuntando a
       un nombre que ya no existe y sus funcionarios desaparecerían del grupo.
       Se informa para que no parezca que el archivo se ignoró en silencio. */
    if (previo.nombre !== nombre) {
      renombresIgnorados.push({ fila: numeroDeFila, actual: previo.nombre, pedido: nombre });
    }
    const fusionado = {
      ...previo,
      ...(tag ? { tag } : {}),
      ...(color ? { color } : {}),
    };
    const cambios = Object.keys(fusionado).filter((k) => previo[k] !== fusionado[k]);
    // Solo cuenta como actualizada la fila que CAMBIA algo. Si no, reimportar
    // la propia exportación de la aplicación diría que se actualizó todo y que
    // no quedó nada intacto, que es exactamente al revés.
    if (cambios.length === 0) return;
    resultado[posicion] = fusionado;
    actualizados.push({ fila: numeroDeFila, registro: fusionado, previo, cambios });
  });

  return { resultado, nuevos, actualizados, omitidos, duplicados, renombresIgnorados };
}

/** Cuántas fichas activas quedarían huérfanas si se elimina el puesto. */
export function personasEnPuesto(personas, nombre) {
  return (Array.isArray(personas) ? personas : []).filter(
    (p) => normalizar(p.puestoOperativo) === normalizar(nombre),
  );
}
