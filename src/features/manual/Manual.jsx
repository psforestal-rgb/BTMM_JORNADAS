import { useMemo, useState } from "react";
import Card from "../../ui/Card.jsx";
import Icon from "../../ui/Icon.jsx";
import { useT } from "../../i18n/useT.js";
import { useAtajoBusqueda } from "../../lib/useAtajoBusqueda.js";
import { useRef } from "react";
import { ETIQUETA_PUBLICO, MANUAL, PUBLICOS, textoDeSeccion } from "../../data/manual.js";

/**
 * El manual, dentro de la aplicación.
 *
 * Existe porque quien más lo necesita está en el puesto, sin señal, con la
 * aplicación abierta: un manual que hay que ir a buscar a internet no sirve en
 * ese momento. El contenido vive en `src/data/manual.js` y `docs/MANUAL.md` se
 * genera desde ahí, así que los dos no pueden acabar diciendo cosas distintas.
 *
 * Se filtra por público y se busca por texto, porque el manual completo es
 * largo y en campo se viene a resolver UNA duda, no a leerlo entero.
 */

function Bloque({ bloque }) {
  if (bloque.tipo === "parrafo") {
    return <p className="text-sm leading-relaxed text-ink">{bloque.texto}</p>;
  }

  if (bloque.tipo === "lista") {
    return (
      <ul className="list-inside list-disc space-y-1.5 text-sm leading-relaxed text-ink">
        {bloque.items.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    );
  }

  if (bloque.tipo === "pasos") {
    return (
      <ol className="list-inside list-decimal space-y-1.5 text-sm leading-relaxed text-ink">
        {bloque.items.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ol>
    );
  }

  if (bloque.tipo === "aviso") {
    const tono =
      bloque.tono === "cuidado"
        ? "border-amber-300 bg-amber-50 text-amber-950"
        : "border-sky-300 bg-sky-50 text-sky-950";
    return (
      <p className={`rounded-xl border p-3 text-sm leading-relaxed ${tono}`}>
        <Icon name={bloque.tono === "cuidado" ? "alert" : "info"} size={16} className="mr-1.5 inline align-[-3px]" />
        {bloque.texto}
      </p>
    );
  }

  if (bloque.tipo === "tabla") {
    return (
      // La tabla es lo único que puede ser más ancha que la pantalla; se
      // desplaza sola en vez de estirar toda la página.
      <div className="overflow-x-auto">
        <table className="w-full min-w-[28rem] text-sm">
          <thead>
            <tr className="border-b border-line text-left text-xs uppercase tracking-wider text-ink-muted">
              {bloque.columnas.map((c) => (
                <th key={c} scope="col" className="py-2 pr-3 font-bold">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bloque.filas.map((fila) => (
              <tr key={fila.join("|")} className="border-b border-line/60 align-top">
                {fila.map((celda, i) => (
                  <td key={celda} className={`py-2 pr-3 ${i === 0 ? "font-semibold text-ink" : "text-ink-muted"}`}>
                    {celda}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return null;
}

export default function Manual() {
  const t = useT();
  const [publico, setPublico] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const campoBusqueda = useRef(null);
  useAtajoBusqueda(campoBusqueda);

  // El texto plano de cada sección se calcula una vez, no en cada tecla.
  const indexadas = useMemo(
    () => MANUAL.secciones.map((s) => ({ seccion: s, texto: textoDeSeccion(s) })),
    [],
  );

  const visibles = useMemo(() => {
    const q = busqueda.trim().toLocaleLowerCase("es-CR");
    return indexadas
      .filter(({ seccion }) => !publico || seccion.publico === publico)
      .filter(({ texto }) => !q || texto.includes(q))
      .map(({ seccion }) => seccion);
  }, [busqueda, indexadas, publico]);

  const filtros = [
    ["", t("manual.todos")],
    ...Object.values(PUBLICOS).map((p) => [p, ETIQUETA_PUBLICO[p]]),
  ];

  return (
    <section className="space-y-4">
      <Card title={MANUAL.titulo} icon="clipboard" variant="elevated">
        <p className="text-sm text-ink-muted">{MANUAL.subtitulo}</p>

        <p className="mt-3 rounded-xl border border-critical bg-critical-soft p-3 text-sm font-semibold leading-relaxed text-critical-fg">
          {MANUAL.reglaDura}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {filtros.map(([valor, etiqueta]) => (
            <button
              key={etiqueta}
              type="button"
              aria-pressed={publico === valor}
              onClick={() => setPublico(valor)}
              className={`min-h-touch rounded-xl border px-4 text-sm font-semibold ${
                publico === valor
                  ? "border-brand bg-brand text-brand-fg"
                  : "border-line bg-surface text-ink hover:bg-surface-alt"
              }`}
            >
              {etiqueta}
            </button>
          ))}
        </div>

        <label className="mt-3 block">
          <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-ink-muted">
            {t("manual.buscar")}
          </span>
          <input
            ref={campoBusqueda}
            type="search"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder={t("manual.buscarPlaceholder")}
            className="min-h-touch w-full rounded-xl border border-line bg-surface px-3 text-sm text-ink"
          />
        </label>
      </Card>

      {visibles.length === 0 ? (
        <Card variant="elevated">
          <p className="text-sm text-ink-muted">{t("manual.sinResultados", { texto: busqueda })}</p>
        </Card>
      ) : (
        visibles.map((seccion) => (
          <Card key={seccion.id} variant="elevated">
            <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-base font-bold text-ink">{seccion.titulo}</h2>
              <span className="rounded-full border border-line bg-surface-inset px-2 py-0.5 text-xs font-semibold text-ink-muted">
                {ETIQUETA_PUBLICO[seccion.publico]}
              </span>
            </div>
            <div className="space-y-3">
              {seccion.bloques.map((bloque, i) => (
                <Bloque key={`${seccion.id}-${i}`} bloque={bloque} />
              ))}
            </div>
          </Card>
        ))
      )}
    </section>
  );
}
