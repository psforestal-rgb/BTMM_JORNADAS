/**
 * Historial de puestos de un funcionario.
 *
 * El puesto operativo de una persona NO es un dato fijo: un traslado lo cambia,
 * y el rol de los meses anteriores sigue perteneciendo al puesto donde estuvo
 * entonces. Hasta ahora la ficha guardaba un único `puestoOperativo` y la
 * cuadrícula de Roles agrupaba por él, así que al trasladar a alguien su rol
 * pasado se mostraba —y se archivaba— bajo el puesto equivocado.
 *
 * Forma del historial, dentro de la ficha:
 *
 *   historialPuestos: [
 *     { puesto: "Puesto Orosi",     desde: "",           hasta: "2026-06-30" },
 *     { puesto: "Puesto Quetzales", desde: "2026-07-01", hasta: null },
 *   ]
 *
 *  - `desde` vacío significa «desde siempre»: no se inventa una fecha de
 *    ingreso que nadie registró.
 *  - `hasta` en `null` significa «sigue ahí». Solo el último tramo puede
 *    tenerlo; cerrarlo es lo que marca una salida del bloque.
 *  - Los tramos van en orden y no se solapan.
 *
 * `funcionario.puestoOperativo` se conserva como el puesto de HOY —lo leen
 * media docena de vistas— y este módulo es quien lo mantiene coherente con el
 * historial. Una ficha antigua, sin historial, se normaliza a un único tramo
 * abierto con su `puestoOperativo`: nadie pierde nada al actualizar.
 */

/** Compara dos fechas ISO (YYYY-MM-DD) tolerando vacíos. */
function esIso(valor) {
  return typeof valor === "string" && /^\d{4}-\d{2}-\d{2}$/.test(valor);
}

function textoLimpio(valor) {
  return typeof valor === "string" ? valor.trim() : "";
}

/** Primer día del mes indicado, en ISO. `mes` es 1-12. */
export function inicioDeMes(anio, mes) {
  return `${anio}-${String(mes).padStart(2, "0")}-01`;
}

/** Último día del mes indicado, en ISO. `mes` es 1-12. */
export function finDeMes(anio, mes) {
  const dias = new Date(Date.UTC(anio, mes, 0)).getUTCDate();
  return `${anio}-${String(mes).padStart(2, "0")}-${String(dias).padStart(2, "0")}`;
}

/** ¿El tramo cubre esa fecha? Un extremo vacío es «abierto» por ese lado. */
export function tramoCubre(tramo, iso) {
  if (!tramo || !esIso(iso)) return false;
  const desde = esIso(tramo.desde) ? tramo.desde : "";
  const hasta = esIso(tramo.hasta) ? tramo.hasta : "";
  if (desde && iso < desde) return false;
  if (hasta && iso > hasta) return false;
  return true;
}

/**
 * Normaliza el historial de una ficha.
 *
 * Devuelve SIEMPRE un arreglo utilizable, ordenado y sin tramos rotos. Si la
 * ficha no trae historial, se construye uno con su `puestoOperativo`, que es
 * exactamente lo que la ficha decía antes de que existiera este módulo.
 */
export function normalizarHistorial(funcionario) {
  const crudo = Array.isArray(funcionario?.historialPuestos) ? funcionario.historialPuestos : null;

  const tramos = (crudo || [])
    .map((t) => {
      const puesto = textoLimpio(t?.puesto);
      if (!puesto) return null;
      return {
        puesto,
        desde: esIso(t?.desde) ? t.desde : "",
        hasta: esIso(t?.hasta) ? t.hasta : null,
        ...(textoLimpio(t?.motivo) ? { motivo: textoLimpio(t.motivo) } : {}),
      };
    })
    .filter(Boolean)
    // Sin fecha de inicio va primero: es el tramo «de siempre».
    .sort((a, b) => (a.desde || "").localeCompare(b.desde || ""));

  if (tramos.length) return tramos;

  const actual = textoLimpio(funcionario?.puestoOperativo);
  return actual ? [{ puesto: actual, desde: "", hasta: null }] : [];
}

/** Puesto de la persona en una fecha concreta; `""` si no estaba en ninguno. */
export function puestoEnFecha(funcionario, iso) {
  const tramos = normalizarHistorial(funcionario);
  const tramo = tramos.find((t) => tramoCubre(t, iso));
  return tramo ? tramo.puesto : "";
}

/**
 * Puesto durante un mes. Se toma el del ÚLTIMO día que la persona estuvo
 * asignada dentro de ese mes: si el traslado ocurrió a mitad de mes, el rol de
 * ese mes se agrupa donde terminó, que es donde lo archiva el libro.
 * Devuelve `""` si no estuvo en ningún puesto ese mes.
 */
export function puestoEnMes(funcionario, anio, mes) {
  const primero = inicioDeMes(anio, mes);
  const ultimo = finDeMes(anio, mes);
  const tramos = normalizarHistorial(funcionario);
  let encontrado = "";
  for (const tramo of tramos) {
    const desde = esIso(tramo.desde) ? tramo.desde : "";
    const hasta = esIso(tramo.hasta) ? tramo.hasta : "";
    // Se solapan si el tramo empieza antes de acabar el mes y acaba después de
    // empezarlo.
    if (desde && desde > ultimo) continue;
    if (hasta && hasta < primero) continue;
    encontrado = tramo.puesto;
  }
  return encontrado;
}

/** Puesto de hoy. Es lo que debe reflejar `funcionario.puestoOperativo`. */
export function puestoActual(funcionario, hoy) {
  const iso = esIso(hoy) ? hoy : new Date().toISOString().slice(0, 10);
  const enFecha = puestoEnFecha(funcionario, iso);
  if (enFecha) return enFecha;
  // Si ya salió (último tramo cerrado), no tiene puesto hoy.
  const tramos = normalizarHistorial(funcionario);
  const ultimo = tramos[tramos.length - 1];
  return ultimo && ultimo.hasta === null ? ultimo.puesto : "";
}

/**
 * Todos los puestos por los que pasó la persona, sin repetir y del más antiguo
 * al más reciente. Sirve para buscar su rol archivado: está repartido entre
 * todos ellos, no solo bajo el de hoy.
 */
export function puestosDeFuncionario(funcionario, porDefecto = "") {
  const puestos = [...new Set(normalizarHistorial(funcionario).map((t) => t.puesto))];
  if (puestos.length) return puestos;
  return porDefecto ? [porDefecto] : [];
}

/** ¿La persona estaba asignada a algún puesto durante ese mes? */
export function estabaEnMes(funcionario, anio, mes) {
  return puestoEnMes(funcionario, anio, mes) !== "";
}

/**
 * Registra un traslado: cierra el tramo abierto la víspera y abre otro.
 *
 * Devuelve la ficha completa con `historialPuestos` y `puestoOperativo` ya
 * coherentes, sin mutar la original. Trasladar al mismo puesto no hace nada,
 * para que guardar una ficha sin tocar el puesto no ensucie el historial.
 */
export function trasladar(funcionario, { puesto, desde, motivo = "" } = {}) {
  const destino = textoLimpio(puesto);
  if (!destino) return funcionario;

  const tramos = normalizarHistorial(funcionario);
  const abierto = tramos.find((t) => t.hasta === null);
  if (abierto && abierto.puesto === destino) return funcionario;

  const inicio = esIso(desde) ? desde : new Date().toISOString().slice(0, 10);
  const vispera = new Date(`${inicio}T00:00:00Z`);
  vispera.setUTCDate(vispera.getUTCDate() - 1);
  const cierre = vispera.toISOString().slice(0, 10);

  const actualizados = tramos.map((t) =>
    t.hasta === null ? { ...t, hasta: cierre } : t,
  );
  actualizados.push({
    puesto: destino,
    desde: inicio,
    hasta: null,
    ...(motivo ? { motivo } : {}),
  });

  return { ...funcionario, historialPuestos: actualizados, puestoOperativo: destino };
}

/**
 * Cierra el historial: la persona sale del bloque y deja de tener puesto.
 * No la borra ni le toca el estado — eso lo decide quien llama.
 */
export function cerrarHistorial(funcionario, hasta, motivo = "") {
  const cierre = esIso(hasta) ? hasta : new Date().toISOString().slice(0, 10);
  const tramos = normalizarHistorial(funcionario).map((t) =>
    t.hasta === null ? { ...t, hasta: cierre, ...(motivo ? { motivo } : {}) } : t,
  );
  return { ...funcionario, historialPuestos: tramos };
}

/**
 * Deja la ficha coherente: historial normalizado y `puestoOperativo` igual al
 * puesto de hoy. Es lo que se aplica al cargar el estado, para que una ficha
 * guardada antes de que existiera el historial entre sin sorpresas.
 *
 * `puestoOperativo` NO se vacía cuando la persona ya salió: la ficha sigue
 * diciendo dónde estuvo por última vez, que es lo que espera ver quien la abre.
 */
export function normalizarFuncionario(funcionario, hoy) {
  if (!funcionario || typeof funcionario !== "object") return funcionario;
  const historialPuestos = normalizarHistorial(funcionario);
  if (!historialPuestos.length) return funcionario;

  const actual = puestoActual(funcionario, hoy);
  const ultimo = historialPuestos[historialPuestos.length - 1].puesto;
  const puestoOperativo = actual || ultimo;

  const igual =
    funcionario.puestoOperativo === puestoOperativo &&
    Array.isArray(funcionario.historialPuestos) &&
    JSON.stringify(funcionario.historialPuestos) === JSON.stringify(historialPuestos);
  if (igual) return funcionario;

  return { ...funcionario, historialPuestos, puestoOperativo };
}

/**
 * Problemas del historial, en texto legible. Vacío si está bien.
 * No bloquea nada por sí mismo: quien llama decide, igual que `validarPuesto`.
 */
export function validarHistorial(funcionario) {
  const errores = [];
  const tramos = normalizarHistorial(funcionario);
  if (!tramos.length) return errores;

  let anterior = null;
  for (const tramo of tramos) {
    if (tramo.desde && tramo.hasta && tramo.hasta < tramo.desde) {
      errores.push(`El tramo de «${tramo.puesto}» termina antes de empezar.`);
    }
    if (anterior) {
      if (anterior.hasta === null) {
        errores.push(`El tramo de «${anterior.puesto}» sigue abierto y ya hay otro después.`);
      } else if (tramo.desde && anterior.hasta >= tramo.desde) {
        errores.push(`Los tramos de «${anterior.puesto}» y «${tramo.puesto}» se solapan.`);
      }
    }
    anterior = tramo;
  }
  return errores;
}
