/**
 * Plan de importación masiva de funcionarios (RF4).
 *
 * Lógica pura y sin React: calcula qué pasaría, para poder enseñarlo en la
 * vista previa ANTES de tocar nada. Aplicar es luego un `setPersonas` con el
 * resultado ya calculado.
 *
 * Decisiones, registradas en `_relevo/SEGUIMIENTO.md`:
 *
 *  - **Fusiona, nunca reemplaza.** Un archivo incompleto no puede borrar a
 *    quien no aparece en él. En una app de campo, un reemplazo silencioso
 *    sería la peor pérdida posible.
 *  - **La identidad es la cédula**, comparada solo por sus dígitos para que
 *    «1-0000-0001» y «100000001» sean la misma persona. Si la fila no trae
 *    cédula, se cae al nombre normalizado. Si no trae ninguna de las dos, la
 *    fila se omite: no hay forma de saber a quién se refiere.
 *  - **Al actualizar solo se pisan las columnas que vienen en el archivo.** El
 *    `id` y cualquier campo ausente se conservan, así que un CSV con dos
 *    columnas sirve para corregir esas dos y nada más.
 *  - **Si el archivo repite una identidad, gana la última fila**, y se informa.
 */

/** Clave de identidad de una fila o registro. Devuelve "" si no se puede. */
export function claveIdentidad(registro) {
  const digitos = String(registro?.cedula ?? "").replace(/\D/g, "");
  if (digitos) return `c:${digitos}`;
  const nombre = String(registro?.nombre ?? "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ");
  return nombre ? `n:${nombre}` : "";
}

let secuencia = 0;
function nuevoId() {
  secuencia += 1;
  // Sufijo incremental: varias altas dentro del mismo milisegundo no pueden
  // compartir id, o `filter` por id borraría de más.
  return `f${Date.now()}-${secuencia}`;
}

// Export solo para tests: hace los ids predecibles entre casos.
export function _resetIdImportacion() {
  secuencia = 0;
}

/**
 * @param personas  lista actual
 * @param filas     objetos ya mapeados desde el CSV
 * @param plantilla valores por defecto de un funcionario nuevo
 * @returns { resultado, nuevos, actualizados, omitidos, duplicados }
 */
export function planificarImportacion(personas, filas, plantilla = {}) {
  const actuales = Array.isArray(personas) ? personas : [];
  const porClave = new Map();
  actuales.forEach((p, i) => {
    const k = claveIdentidad(p);
    if (k && !porClave.has(k)) porClave.set(k, i);
  });

  const resultado = [...actuales];
  const nuevos = [];
  const actualizados = [];
  const omitidos = [];
  const duplicados = [];
  const vistasEnArchivo = new Map();

  (Array.isArray(filas) ? filas : []).forEach((fila, indice) => {
    // `indice + 2`: la fila 1 del archivo es la cabecera, así que lo que la
    // persona ve en Excel es esta cuenta y no el índice del arreglo.
    const numeroDeFila = indice + 2;
    const clave = claveIdentidad(fila);
    if (!clave) {
      omitidos.push({ fila: numeroDeFila, motivo: "sinIdentidad" });
      return;
    }
    if (vistasEnArchivo.has(clave)) {
      duplicados.push({ fila: numeroDeFila, anterior: vistasEnArchivo.get(clave) });
    }
    vistasEnArchivo.set(clave, numeroDeFila);

    const posicion = porClave.get(clave);
    if (posicion === undefined) {
      const registro = { ...plantilla, ...fila, id: nuevoId() };
      porClave.set(clave, resultado.length);
      resultado.push(registro);
      nuevos.push({ fila: numeroDeFila, registro });
      return;
    }
    const previo = resultado[posicion];
    // El id nunca se pisa: es la referencia estable del registro.
    const fusionado = { ...previo, ...fila, id: previo.id };
    const cambios = Object.keys(fila).filter((k) => previo[k] !== fila[k]);
    resultado[posicion] = fusionado;
    actualizados.push({ fila: numeroDeFila, registro: fusionado, previo, cambios });
  });

  return { resultado, nuevos, actualizados, omitidos, duplicados };
}
