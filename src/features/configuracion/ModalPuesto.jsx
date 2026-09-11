import { useId, useState } from "react";
import Modal from "../../ui/Modal.jsx";
import { normalizarTag, validarPuesto } from "../../domain/puestos.js";
import { useT } from "../../i18n/useT.js";

/**
 * Alta y edición de un puesto operativo (RP1, RP4, RP7).
 *
 * El color se elige de una paleta cerrada y no como texto libre: el valor es
 * una pareja de clases de Tailwind que la cuadrícula de Roles aplica tal cual,
 * y un valor inventado saldría sin estilo o, peor, con un contraste ilegible
 * bajo el sol.
 */
export const PALETA = [
  { id: "naranja-claro", clases: "bg-orange-100 text-orange-950" },
  { id: "naranja", clases: "bg-orange-700 text-white" },
  { id: "cielo", clases: "bg-sky-100 text-sky-950" },
  { id: "esmeralda", clases: "bg-emerald-100 text-emerald-950" },
  { id: "violeta", clases: "bg-violet-100 text-violet-950" },
  { id: "pizarra", clases: "bg-slate-200 text-slate-900" },
];

const cls =
  "w-full min-h-touch rounded-xl border border-line bg-surface px-3 py-2 text-sm text-ink outline-none focus:border-brand";

export default function ModalPuesto({ valor, lista, nombreOriginal = null, cerrar, guardar }) {
  const t = useT();
  const [p, setP] = useState(valor);
  const idAyudaTag = useId();
  const set = (k, v) => setP((prev) => ({ ...prev, [k]: v }));
  const errores = validarPuesto(p, lista, nombreOriginal);
  const esEdicion = Boolean(nombreOriginal);

  return (
    <Modal
      open
      onClose={cerrar}
      title={esEdicion ? t("puestos.editar") : t("puestos.agregar")}
      size="sm"
      actions={
        <div className="ml-auto flex flex-wrap gap-2">
          <button type="button" onClick={cerrar} className="min-h-touch rounded-xl border border-line bg-surface px-4 text-sm font-semibold">
            {t("acciones.cancelar")}
          </button>
          {/* Aquí SÍ se bloquea, a diferencia de las fichas: un puesto con el
              nombre o el código repetido rompería el agrupado y la cobertura,
              y no hay una lectura razonable de «guardar igual». */}
          <button
            type="button"
            onClick={() => guardar(p)}
            disabled={errores.length > 0}
            className="min-h-touch rounded-xl bg-brand px-4 text-sm font-semibold text-brand-fg disabled:cursor-not-allowed disabled:opacity-50"
          >
            {t("acciones.guardar")}
          </button>
        </div>
      }
    >
      <div className="space-y-4">
        <label className="block">
          <span className="mb-1 block text-xs font-bold uppercase text-ink-muted">{t("puestos.nombre")}</span>
          <input className={cls} value={p.nombre} onChange={(e) => set("nombre", e.target.value)} />
        </label>

        {/* La ayuda va FUERA del <label> y enlazada con aria-describedby: dentro
            pasaría a formar parte del nombre accesible del campo, y un lector
            de pantalla leería la explicación entera como si fuera la etiqueta. */}
        <div>
          <label className="block">
            <span className="mb-1 block text-xs font-bold uppercase text-ink-muted">{t("puestos.tag")}</span>
            <input
              className={`${cls} uppercase`}
              value={p.tag}
              maxLength={4}
              aria-describedby={idAyudaTag}
              onChange={(e) => set("tag", normalizarTag(e.target.value))}
            />
          </label>
          <p id={idAyudaTag} className="mt-1 text-xs text-ink-muted">{t("puestos.tagAyuda")}</p>
        </div>

        <div role="group" aria-label={t("puestos.colorAria")}>
          <span className="mb-1 block text-xs font-bold uppercase text-ink-muted">{t("puestos.color")}</span>
          <div className="flex flex-wrap gap-2">
            {PALETA.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => set("color", c.clases)}
                aria-pressed={p.color === c.clases}
                aria-label={c.id}
                className={`min-h-touch min-w-touch rounded-xl border-2 px-3 text-xs font-bold ${c.clases} ${
                  p.color === c.clases ? "border-brand ring-2 ring-brand/40" : "border-line"
                }`}
              >
                {p.tag || "AB"}
              </button>
            ))}
          </div>
        </div>

        {errores.length > 0 && (
          <ul className="list-disc space-y-1 rounded-xl border border-critical/40 bg-critical-soft p-3 pl-8 text-xs font-semibold text-critical-fg">
            {errores.map((e) => <li key={e}>{e}</li>)}
          </ul>
        )}
      </div>
    </Modal>
  );
}
