import { useMemo, useState } from "react";
import Icon from "../../ui/Icon.jsx";
import { useT } from "../../i18n/useT.js";
import { useApp } from "../../context/AppContext.jsx";
import { useToast } from "../../context/ToastContext.jsx";
import { descargarArchivo } from "../../lib/descargas.js";
import { archivoJSON, archivoSQL, prepararExportacion, DIALECTOS } from "../../lib/exportacionBaseDatos.js";
import { TABLAS } from "../../domain/esquemaRelacional.js";

/**
 * Botón de descarga. El `className` va literal en la etiqueta a propósito: la
 * guarda estática de objetivos táctiles (`objetivosTactiles.test.js`) lee el
 * JSX como texto, y una clase escondida tras una variable la dejaría ciega.
 */
function BotonDescarga({ etiqueta, onClick, disabled }) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="inline-flex min-h-touch items-center justify-center gap-2 rounded-2xl border border-emerald-700 bg-white px-4 py-3 text-sm font-semibold text-emerald-900 shadow-sm hover:bg-emerald-50 disabled:opacity-50"
    >
      <Icon name="file" size={18} />
      {etiqueta}
    </button>
  );
}

/**
 * Exportación relacional (ver `src/lib/exportacionBaseDatos.js`).
 *
 * Se enseña el recuento por tabla ANTES de descargar, no después: es la única
 * forma de que quien exporta sepa si el archivo lleva lo que espera. Un archivo
 * de 3 MB que resultó estar medio vacío se descubre semanas más tarde.
 */
export default function ExportarBaseDatos() {
  const t = useT();
  const ctx = useApp();
  const toast = useToast();
  const [ocupado, setOcupado] = useState(false);

  // El recuento recorre todo el estado: se recalcula solo cuando cambia algo
  // de lo que se exporta, no en cada render de la vista.
  const conteos = useMemo(
    () => prepararExportacion(ctx).conteos,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ctx.puestos, ctx.personas, ctx.roleData, ctx.actividadesPlan, ctx.reposiciones, ctx.historial, ctx.reglas],
  );
  const total = Object.values(conteos).reduce((a, b) => a + b, 0);

  const descargar = (construir) => {
    setOcupado(true);
    try {
      const archivo = construir();
      // `descargarArchivo` devuelve false en vez de lanzar cuando el navegador
      // bloquea la descarga. Dar por buena una exportación que no existe es
      // peor que no ofrecerla: se descubre el día que hace falta el archivo.
      if (!descargarArchivo(archivo.name, archivo.text, archivo.tipo)) {
        toast.error(t("datos.descargaFallo"));
        return;
      }
      toast.exito(t("datos.baseDatos.listo", { archivo: archivo.name }));
    } finally {
      setOcupado(false);
    }
  };

  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-600">{t("datos.baseDatos.sub")}</p>

      <div className="grid gap-3 sm:grid-cols-3">
        <BotonDescarga etiqueta={t("datos.baseDatos.json")} disabled={ocupado} onClick={() => descargar(() => archivoJSON(ctx))} />
        <BotonDescarga
          etiqueta={t("datos.baseDatos.sqlite")}
          disabled={ocupado}
          onClick={() => descargar(() => archivoSQL(ctx, { dialecto: DIALECTOS.SQLITE }))}
        />
        <BotonDescarga
          etiqueta={t("datos.baseDatos.postgres")}
          disabled={ocupado}
          onClick={() => descargar(() => archivoSQL(ctx, { dialecto: DIALECTOS.POSTGRESQL }))}
        />
      </div>

      <p className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-700">
        {t("datos.baseDatos.comoUsar")}
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <caption className="sr-only">
            {t("datos.baseDatos.total", { n: total, t: TABLAS.length })}
          </caption>
          <thead>
            <tr className="border-b border-slate-300 text-left text-xs uppercase tracking-wider text-slate-500">
              <th scope="col" className="py-2">{t("datos.baseDatos.thTabla")}</th>
              <th scope="col" className="py-2 text-right">{t("datos.baseDatos.thFilas")}</th>
            </tr>
          </thead>
          <tbody>
            {TABLAS.map((tabla) => (
              <tr key={tabla.nombre} className="border-b border-slate-100">
                <th scope="row" className="py-2 pr-3 text-left font-normal">
                  <span className="font-mono text-xs text-slate-900">{tabla.nombre}</span>
                  <span className="block text-xs text-slate-500">{tabla.descripcion}</span>
                </th>
                <td className="py-2 text-right font-semibold tabular-nums text-slate-900">
                  {conteos[tabla.nombre] ?? 0}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th scope="row" className="py-2 text-left text-xs uppercase tracking-wider text-slate-500">
                {t("datos.baseDatos.total", { n: total, t: TABLAS.length })}
              </th>
              <td className="py-2 text-right font-bold tabular-nums text-slate-900">{total}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
