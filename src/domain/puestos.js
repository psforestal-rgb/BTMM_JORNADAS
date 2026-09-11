/**
 * Operaciones sobre la lista de puestos operativos (RP1–RP8).
 *
 * Lógica pura, sin React. La decisión que gobierna todo el módulo:
 *
 * **Un puesto se identifica por su nombre, no por un id.** Las fichas guardan
 * `puestoOperativo: "Puesto Orosi"` y las reglas de cobertura guardan una lista
 * de nombres. Introducir ids obligaría a migrar datos ya persistidos y a subir
 * `SCHEMA_VERSION`; mantener el nombre como clave evita esa migración a cambio
 * de que renombrar tenga que arrastrar las referencias. De eso se encarga
 * `renombrarPuesto`, que devuelve los tres cambios a la vez para que no puedan
 * aplicarse a medias.
 */

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
 * Renombrar en cascada: el puesto, las fichas que lo referencian y la regla de
 * cobertura diaria. Devuelve las tres listas nuevas.
 *
 * Si no se arrastraran las referencias, las fichas quedarían apuntando a un
 * puesto inexistente y la cobertura crítica de la vista Día dejaría de
 * evaluarse **en silencio**, que es el peor fallo posible aquí.
 */
export function renombrarPuesto({ puestos, personas, reglas, antes, despues }) {
  const nuevo = String(despues ?? "").trim();
  const listaPuestos = Array.isArray(puestos) ? puestos : [];
  const listaPersonas = Array.isArray(personas) ? personas : [];
  const coincide = (v) => normalizar(v) === normalizar(antes);

  if (!nuevo || normalizar(antes) === normalizar(nuevo)) {
    return { puestos: listaPuestos, personas: listaPersonas, reglas, afectados: 0 };
  }

  const afectados = listaPersonas.filter((p) => coincide(p.puestoOperativo)).length;
  const visitDiario = Array.isArray(reglas?.puestosRequierenVisitantesDiario)
    ? reglas.puestosRequierenVisitantesDiario
    : [];

  return {
    puestos: listaPuestos.map((p) => (coincide(p.nombre) ? { ...p, nombre: nuevo } : p)),
    personas: listaPersonas.map((p) =>
      coincide(p.puestoOperativo) ? { ...p, puestoOperativo: nuevo } : p,
    ),
    reglas: {
      ...reglas,
      puestosRequierenVisitantesDiario: visitDiario.map((n) => (coincide(n) ? nuevo : n)),
    },
    afectados,
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
      const registro = { nombre, tag, color: color || colorPorDefecto };
      resultado.push(registro);
      nuevos.push({ fila: numeroDeFila, registro });
      return;
    }
    const previo = resultado[posicion];
    const fusionado = {
      ...previo,
      nombre,
      ...(tag ? { tag } : {}),
      ...(color ? { color } : {}),
    };
    const cambios = Object.keys(fusionado).filter((k) => previo[k] !== fusionado[k]);
    resultado[posicion] = fusionado;
    actualizados.push({ fila: numeroDeFila, registro: fusionado, previo, cambios });
  });

  return { resultado, nuevos, actualizados, omitidos, duplicados };
}

/** Cuántas fichas activas quedarían huérfanas si se elimina el puesto. */
export function personasEnPuesto(personas, nombre) {
  return (Array.isArray(personas) ? personas : []).filter(
    (p) => normalizar(p.puestoOperativo) === normalizar(nombre),
  );
}
