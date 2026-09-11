import { useMemo, useState } from "react";
import { MAX_ENTRADAS } from "../../domain/historial.js";
import { useT } from "../../i18n/useT.js";
import Icon from "../../ui/Icon.jsx";

/**
 * Vista del rastro de cambios (RF9).
 *
 * Vive dentro de «Datos · respaldo» y no en una vista propia: es el sitio donde
 * mira quien hace control interno, y evita añadir una entrada más de navegación
 * a una app que ya se criticaba por tener demasiadas.
 */

const ICONO = {
  alta: "plus",
  edicion: "pencil",
  baja: "trash",
  restauracion: "refresh",
  importacion: "file",
};

const TONO = {
  alta: "border-emerald-300 bg-emerald-50 text-emerald-950",
  edicion: "border-blue-300 bg-blue-50 text-blue-950",
  baja: "border-red-300 bg-red-50 text-red-950",
  restauracion: "border-amber-300 bg-amber-50 text-amber-950",
  importacion: "border-slate-300 bg-slate-50 text-slate-900",
};

/** Cuántas entradas se pintan de entrada; el resto se despliega bajo demanda. */
const PAGINA = 20;

function fechaLegible(iso) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleString("es-CR", { dateStyle: "short", timeStyle: "short" });
}

export default function HistorialCambios({ historial = [] }) {
  const t = useT();
  const [filtro, setFiltro] = useState("");
  const [visibles, setVisibles] = useState(PAGINA);

  const personas = useMemo(() => {
    const nombres = new Set();
    for (const e of historial) {
      if (e?.funcionario?.nombre) nombres.add(e.funcionario.nombre);
    }
    return [...nombres].sort((a, b) => a.localeCompare(b));
  }, [historial]);

  const filtradas = useMemo(
    () => (filtro ? historial.filter((e) => e?.funcionario?.nombre === filtro) : historial),
    [historial, filtro],
  );

  // Los booleanos y los vacíos se leen mal en crudo dentro de «antes → después».
  const comoTexto = (valor) => {
    if (valor === true) return t("historial.si");
    if (valor === false) return t("historial.no");
    const texto = String(valor ?? "").trim();
    return texto === "" ? t("historial.vacioCampo") : texto;
  };

  const etiquetaCampo = (campo) => {
    const clave = `funcionarios.col.${campo}`;
    const traducido = t(clave);
    // El diccionario devuelve la clave cuando no existe; ahí mostramos el
    // nombre crudo del campo antes que un texto con puntos.
    return traducido === clave ? campo : traducido;
  };

  if (historial.length === 0) {
    return <p className="text-sm text-slate-600">{t("historial.vacio")}</p>;
  }

  return (
    <div className="space-y-3">
      <p className="text-sm text-slate-600">
        {t("historial.sub", { n: historial.length, max: MAX_ENTRADAS })}
      </p>

      {personas.length > 1 && (
        <label className="flex min-h-touch items-center gap-2 text-sm font-semibold text-slate-700">
          {t("historial.filtro")}
          <select
            value={filtro}
            onChange={(e) => {
              setFiltro(e.target.value);
              setVisibles(PAGINA);
            }}
            className="min-h-touch rounded-xl border border-slate-300 bg-white px-3 font-normal text-slate-900"
          >
            <option value="">{t("historial.todos")}</option>
            {personas.map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </label>
      )}

      {filtradas.length === 0 ? (
        <p className="text-sm text-slate-600">{t("historial.sinResultados")}</p>
      ) : (
        <ol className="space-y-2">
          {filtradas.slice(0, visibles).map((e) => (
            <li key={e.id} className={`rounded-xl border p-3 ${TONO[e.tipo] || TONO.importacion}`}>
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider">
                <Icon name={ICONO[e.tipo] || "file"} size={14} />
                <span>{t(`historial.tipo.${e.tipo}`)}</span>
                <time dateTime={e.fecha} className="font-semibold normal-case tracking-normal opacity-75">
                  {fechaLegible(e.fecha)}
                </time>
              </div>
              {e.funcionario?.nombre && (
                <p className="mt-1 text-sm font-semibold">
                  {e.funcionario.nombre}
                  {e.funcionario.cedula ? ` · ${e.funcionario.cedula}` : ""}
                </p>
              )}
              {e.detalle && (
                <p className="mt-1 text-sm">
                  {t("historial.resumenImportacion", {
                    archivo: e.detalle.archivo || "—",
                    altas: e.detalle.altas ?? 0,
                    cambios: e.detalle.cambios ?? 0,
                  })}
                </p>
              )}
              {e.cambios?.length > 0 && (
                <ul className="mt-1 list-disc space-y-0.5 pl-5 text-xs">
                  {e.cambios.map((c) => (
                    <li key={c.campo}>
                      {t("historial.cambio", {
                        campo: etiquetaCampo(c.campo),
                        antes: comoTexto(c.antes),
                        despues: comoTexto(c.despues),
                      })}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      )}

      {filtradas.length > visibles && (
        <button
          type="button"
          onClick={() => setVisibles((v) => v + PAGINA)}
          className="min-h-touch w-full rounded-xl border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          {t("historial.verMas", { n: filtradas.length - visibles })}
        </button>
      )}

      <p className="text-xs text-slate-500">{t("historial.nota")}</p>
    </div>
  );
}
