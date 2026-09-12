import { memo } from "react";
import { codigoCls } from "../../ui/styles.js";
import { etiquetaRol } from "../../domain/roles.js";
import { t } from "../../i18n/es-CR.js";
import MarcaReposicionCelda from "../reposicion/MarcaReposicionCelda.jsx";

function RoleCell({
  value, onOpen, onConflicto, finde, compact, editable, esInicio, conflicto,
  repoTrabajada, repoReposicion, esHoy, fila, iso, fechaLegible, nombre, colIndex,
}) {
  const v = String(value || "").toUpperCase();
  const handleClick = conflicto ? onConflicto : editable ? onOpen : undefined;
  const clickable = conflicto || editable;
  const title = conflicto
    ? t("roles.titleConflicto")
    : editable
    ? t("roles.titleEditar")
    : t("roles.titleSinEdicion");
  /* Nombre accesible de la celda. Sin él, quien navega con lector de pantalla
     oye «T1» sin saber de quién ni de qué día, que es tanto como no oír nada en
     una cuadrícula de 18 filas por 31 columnas. */
  const etiqueta = [nombre, fechaLegible, etiquetaRol(v) + (v ? ` ${v}` : ""), conflicto ? t("roles.conflictoAria") : ""]
    .filter(Boolean)
    .join(", ");
  return (
    <td
      data-celda-rol="true"
      data-fila={fila}
      data-iso={iso}
      aria-colindex={colIndex}
      className={`border-b border-b-line p-0 text-center font-semibold ${codigoCls(v, finde)} ${
        esHoy ? "border-l-4 border-r-4 border-l-amber-400 border-r-amber-400" : "border-r border-r-line"
      } ${esInicio ? "ring-2 ring-inset ring-emerald-700" : ""} ${conflicto ? "ring-4 ring-inset ring-red-600" : ""}`}
    >
      {/* `aria-disabled` y NO `disabled`: una celda no editable se sigue
          pudiendo recorrer con el teclado, que es justo lo que permite leer el
          rol entero sin ratón. Un botón deshabilitado no recibe foco y dejaba
          la cuadrícula completa fuera del alcance del teclado.
          `tabIndex` -1 en todas: el contenedor mantiene exactamente una celda
          en la secuencia de tabulación (tabindex móvil). */}
      <button
        type="button"
        onClick={handleClick}
        aria-disabled={!clickable}
        aria-label={etiqueta}
        tabIndex={-1}
        className={`relative w-full ${compact ? "h-9 text-[11px]" : "min-h-touch h-12 text-[12px]"} font-semibold tracking-wide outline-none transition focus-visible:z-20 focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-slate-900 ${
          conflicto
            ? "cursor-pointer hover:brightness-90"
            : editable
            ? "cursor-pointer hover:brightness-95"
            : "cursor-default"
        }`}
        title={title}
      >
        {/* Texto oscuro fijo: sobre el pill aclarado (bg-white/45) el texto blanco
            heredado de codigoCls no alcanza contraste AA en ningún color de rol. */}
        <span className="inline-flex min-w-8 items-center justify-center rounded-md bg-white/45 px-1.5 py-0.5 text-slate-900">
          {v || "—"}
        </span>
        <MarcaReposicionCelda trabajada={repoTrabajada} reposicion={repoReposicion} />
        {conflicto && (
          <span className="pnlq-pulse absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-bl-md bg-red-700 text-[10px] text-white">
            !
          </span>
        )}
        {esInicio && (
          <span className="absolute bottom-0 left-1 right-1 rounded-t bg-emerald-900 px-1 text-[8px] font-bold tracking-wider text-white">
            {t("roles.initRing")}
          </span>
        )}
      </button>
    </td>
  );
}

function marcaKey(r) {
  return r ? `${r.folio}:${r.estado}` : "";
}

function areEqual(prev, next) {
  return (
    prev.value === next.value &&
    // Identidad de la celda: sin compararla, al reciclar una posición entre
    // meses la etiqueta accesible se quedaría con el día anterior.
    prev.iso === next.iso &&
    prev.fila === next.fila &&
    prev.nombre === next.nombre &&
    prev.colIndex === next.colIndex &&
    prev.finde === next.finde &&
    prev.compact === next.compact &&
    prev.editable === next.editable &&
    prev.esInicio === next.esInicio &&
    prev.conflicto === next.conflicto &&
    prev.esHoy === next.esHoy &&
    marcaKey(prev.repoTrabajada) === marcaKey(next.repoTrabajada) &&
    marcaKey(prev.repoReposicion) === marcaKey(next.repoReposicion)
  );
}

export default memo(RoleCell, areEqual);
