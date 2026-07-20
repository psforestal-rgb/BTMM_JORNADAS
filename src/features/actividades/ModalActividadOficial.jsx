import { useMemo, useState } from "react";
import { opcionesPuestoOperativo } from "../../data/puestos.js";
import {
  actividadRutinariaVisitantes,
  opcionesLugarActividad,
} from "../../data/opciones.js";
import { useModalA11y } from "../../lib/a11y.js";
import { useT } from "../../i18n/useT.js";

const OTRA = "Otra actividad";
const HORA_INICIO = "08:00";
const HORA_FIN = "16:00";
const cls =
  "w-full min-h-touch rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-emerald-700 focus:ring-4 focus:ring-emerald-100";

function normalizar(valor = {}) {
  const titulo = typeof valor.titulo === "string" ? valor.titulo : "";
  return {
    ...valor,
    id: valor.id || `a${Date.now()}`,
    categoria:
      valor.categoria ||
      (titulo === actividadRutinariaVisitantes
        ? actividadRutinariaVisitantes
        : OTRA),
    titulo,
    inicio: valor.inicio || "",
    fin: valor.fin || valor.inicio || "",
    horaInicio: valor.horaInicio || HORA_INICIO,
    horaFin: valor.horaFin || HORA_FIN,
    unDia: valor.unDia !== false,
    funcionarios: Array.isArray(valor.funcionarios) ? valor.funcionarios : [],
    otrosParticipantes: Array.isArray(valor.otrosParticipantes)
      ? valor.otrosParticipantes
          .filter((p) => p && typeof p === "object")
          .map((p) => ({
            nombre: typeof p.nombre === "string" ? p.nombre : "",
            contacto: typeof p.contacto === "string" ? p.contacto : "",
          }))
      : [],
    lugar: typeof valor.lugar === "string" ? valor.lugar : "",
    observaciones:
      typeof valor.observaciones === "string" ? valor.observaciones : "",
    viatico: Boolean(valor.viatico),
  };
}

export default function ModalActividad({
  valor,
  personas = [],
  cerrar,
  guardar,
  eliminar,
  actividadesPlan = [],
}) {
  const { ref, titleId } = useModalA11y({ onClose: cerrar });
  const t = useT();
  const [a, setA] = useState(() => normalizar(valor));
  const set = (campo, valorCampo) =>
    setA((prev) => ({ ...prev, [campo]: valorCampo }));
  const esExistente = actividadesPlan.some((x) => x.id === a.id);
  const lugarPredefinido = opcionesLugarActividad.includes(a.lugar);

  const porPuesto = useMemo(
    () =>
      opcionesPuestoOperativo.map((puesto) => ({
        puesto,
        personas: personas.filter((p) => p.puestoOperativo === puesto),
      })),
    [personas],
  );

  const finActividad = a.unDia ? a.inicio : a.fin || a.inicio;
  const traslapes = (nombre) =>
    actividadesPlan.filter(
      (x) =>
        x.id !== a.id &&
        x.inicio <= finActividad &&
        (x.fin || x.inicio) >= a.inicio &&
        (x.funcionarios || []).includes(nombre),
    );

  const toggleFuncionario = (nombre) => {
    setA((prev) => ({
      ...prev,
      funcionarios: prev.funcionarios.includes(nombre)
        ? prev.funcionarios.filter((n) => n !== nombre)
        : [...prev.funcionarios, nombre],
    }));
  };

  const cambiarCategoria = (categoria) => {
    setA((prev) => ({
      ...prev,
      categoria,
      titulo:
        categoria === actividadRutinariaVisitantes
          ? actividadRutinariaVisitantes
          : prev.titulo === actividadRutinariaVisitantes
            ? ""
            : prev.titulo,
    }));
  };

  const agregarOtro = () =>
    setA((prev) => ({
      ...prev,
      otrosParticipantes: [
        ...prev.otrosParticipantes,
        { nombre: "", contacto: "" },
      ],
    }));

  const editarOtro = (index, campo, valorCampo) =>
    setA((prev) => ({
      ...prev,
      otrosParticipantes: prev.otrosParticipantes.map((p, i) =>
        i === index ? { ...p, [campo]: valorCampo } : p,
      ),
    }));

  const quitarOtro = (index) =>
    setA((prev) => ({
      ...prev,
      otrosParticipantes: prev.otrosParticipantes.filter((_, i) => i !== index),
    }));

  const guardarActividad = () => {
    const normal = {
      ...a,
      categoria: a.categoria || OTRA,
      fin: a.unDia ? a.inicio : a.fin || a.inicio,
      horaInicio: a.horaInicio || HORA_INICIO,
      horaFin: a.horaFin || HORA_FIN,
      otrosParticipantes: a.otrosParticipantes
        .map((p) => ({
          nombre: p.nombre.trim(),
          contacto: p.contacto.trim(),
        }))
        .filter((p) => p.nombre),
    };
    guardar(normal);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-sm md:items-center md:p-4"
      onClick={(e) => e.target === e.currentTarget && cerrar()}
    >
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="max-h-[100dvh] w-full max-w-4xl overflow-hidden bg-white shadow-2xl outline-none md:max-h-[94dvh] md:rounded-3xl"
      >
        <header className="flex items-start justify-between gap-3 border-b border-slate-200 p-5">
          <div>
            <h3 id={titleId} className="text-lg font-semibold">
              {esExistente
                ? t("modalActividad.editar")
                : t("modalActividad.agregar")}
            </h3>
            <p className="text-sm text-slate-600">
              Registre actividad, horario, funcionarios y participantes externos.
            </p>
          </div>
          <button
            type="button"
            onClick={cerrar}
            aria-label={t("acciones.cerrar")}
            className="min-h-touch min-w-touch rounded-xl text-lg font-semibold text-slate-500 hover:bg-slate-100"
          >
            ✕
          </button>
        </header>

        <div className="max-h-[72vh] space-y-5 overflow-y-auto p-5">
          <div className="grid gap-4 md:grid-cols-2">
            <label>
              <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500">
                Categoría
              </span>
              <select
                className={cls}
                value={a.categoria}
                onChange={(e) => cambiarCategoria(e.target.value)}
              >
                <option value={actividadRutinariaVisitantes}>
                  {actividadRutinariaVisitantes}
                </option>
                <option value={OTRA}>{OTRA}</option>
              </select>
            </label>

            <label>
              <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500">
                Nombre de la actividad
              </span>
              <input
                className={cls}
                value={a.titulo}
                disabled={a.categoria === actividadRutinariaVisitantes}
                onChange={(e) => set("titulo", e.target.value)}
                placeholder={t("modalActividad.placeholderTitulo")}
              />
            </label>

            <label>
              <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500">
                {t("modalActividad.fechaInicio")}
              </span>
              <input
                type="date"
                className={cls}
                value={a.inicio}
                onChange={(e) => set("inicio", e.target.value)}
              />
            </label>

            <label>
              <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500">
                {t("modalActividad.fechaFinal")}
              </span>
              <input
                type="date"
                className={cls}
                value={a.unDia ? a.inicio : a.fin}
                disabled={a.unDia}
                onChange={(e) => set("fin", e.target.value)}
              />
            </label>

            <label>
              <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500">
                Hora de inicio
              </span>
              <input
                type="time"
                className={cls}
                value={a.horaInicio}
                onChange={(e) => set("horaInicio", e.target.value)}
              />
            </label>

            <label>
              <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500">
                Hora de finalización
              </span>
              <input
                type="time"
                className={cls}
                value={a.horaFin}
                onChange={(e) => set("horaFin", e.target.value)}
              />
            </label>

            <label className="flex items-center gap-2 rounded-xl border border-slate-300 p-3 text-sm font-semibold">
              <input
                type="checkbox"
                checked={a.unDia}
                onChange={(e) =>
                  setA((prev) => ({
                    ...prev,
                    unDia: e.target.checked,
                    fin: e.target.checked ? prev.inicio : prev.fin,
                  }))
                }
              />
              {t("modalActividad.unDia")}
            </label>

            <label className="flex items-center gap-2 rounded-xl border border-orange-300 bg-orange-50 p-3 text-sm font-semibold text-orange-950">
              <input
                type="checkbox"
                checked={a.viatico}
                onChange={(e) => set("viatico", e.target.checked)}
              />
              {t("modalActividad.requiereViatico")}
            </label>

            <label className="md:col-span-2">
              <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500">
                {t("modalActividad.lugar")}
              </span>
              <select
                className={cls}
                value={lugarPredefinido ? a.lugar : "Otro"}
                onChange={(e) => set("lugar", e.target.value === "Otro" ? "" : e.target.value)}
              >
                {opcionesLugarActividad.map((lugar) => (
                  <option key={lugar}>{lugar}</option>
                ))}
                <option value="Otro">{t("modalActividad.otro")}</option>
              </select>
              {!lugarPredefinido && (
                <input
                  className={`${cls} mt-2`}
                  value={a.lugar}
                  onChange={(e) => set("lugar", e.target.value)}
                  placeholder={t("modalActividad.placeholderLugar")}
                />
              )}
            </label>
          </div>

          <section>
            <div className="mb-2 flex items-center justify-between gap-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {t("modalActividad.participantes")}
              </h4>
              <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-900">
                {a.funcionarios.length} seleccionados
              </span>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {porPuesto.map((grupo) => (
                <div key={grupo.puesto} className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                  <div className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                    {grupo.puesto}
                  </div>
                  <div className="space-y-1.5">
                    {grupo.personas.map((persona) => {
                      const avisos = traslapes(persona.nombre);
                      const seleccionado = a.funcionarios.includes(persona.nombre);
                      return (
                        <label
                          key={persona.id || persona.nombre}
                          className={`block rounded-xl border px-2 py-2 text-xs font-bold ${
                            seleccionado
                              ? "border-emerald-300 bg-emerald-100 text-emerald-950"
                              : avisos.length
                                ? "border-yellow-300 bg-yellow-50 text-yellow-950"
                                : "border-slate-200 bg-white text-slate-700"
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              checked={seleccionado}
                              onChange={() => toggleFuncionario(persona.nombre)}
                            />
                            {persona.nombre}
                          </span>
                          {avisos.length > 0 && (
                            <span className="mt-1 block text-[10px] font-semibold text-yellow-900">
                              Ya tiene {avisos.length} actividad(es) traslapada(s). Puede asignarse igualmente.
                            </span>
                          )}
                        </label>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-violet-200 bg-violet-50 p-4">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h4 className="text-sm font-bold text-violet-950">Otros participantes</h4>
                <p className="text-xs text-violet-800">
                  Personas no registradas en roles. Agregue nombre y contacto cuando esté disponible.
                </p>
              </div>
              <button
                type="button"
                onClick={agregarOtro}
                className="min-h-touch rounded-xl bg-violet-800 px-3 py-2 text-xs font-bold text-white hover:bg-violet-700"
              >
                + Agregar participante
              </button>
            </div>

            {a.otrosParticipantes.length === 0 ? (
              <p className="mt-3 rounded-xl border border-dashed border-violet-300 bg-white/70 p-3 text-xs text-violet-800">
                No hay participantes externos registrados.
              </p>
            ) : (
              <div className="mt-3 space-y-2">
                {a.otrosParticipantes.map((participante, index) => (
                  <div
                    key={index}
                    className="grid gap-2 rounded-xl border border-violet-200 bg-white p-3 md:grid-cols-[1fr_1fr_auto]"
                  >
                    <input
                      className={cls}
                      value={participante.nombre}
                      onChange={(e) => editarOtro(index, "nombre", e.target.value)}
                      placeholder="Nombre completo o iniciales"
                      aria-label="Nombre de otro participante"
                    />
                    <input
                      className={cls}
                      value={participante.contacto}
                      onChange={(e) => editarOtro(index, "contacto", e.target.value)}
                      placeholder="Teléfono, correo u otro contacto"
                      aria-label="Contacto de otro participante"
                    />
                    <button
                      type="button"
                      onClick={() => quitarOtro(index)}
                      className="min-h-touch rounded-xl border border-red-300 px-3 py-2 text-xs font-bold text-red-800 hover:bg-red-50"
                    >
                      Eliminar
                    </button>
                  </div>
                ))}
              </div>
            )}
          </section>

          <label className="block">
            <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500">
              {t("modalActividad.obs")}
            </span>
            <textarea
              className={`${cls} min-h-24`}
              value={a.observaciones}
              onChange={(e) => set("observaciones", e.target.value)}
              placeholder={t("modalActividad.placeholderObs")}
            />
          </label>
        </div>

        <footer className="flex flex-wrap justify-between gap-2 border-t border-slate-200 bg-slate-50 p-4">
          <div>
            {esExistente && (
              <button
                type="button"
                onClick={() => eliminar(a.id)}
                className="rounded-xl border border-red-300 bg-white px-4 py-2 text-sm font-semibold text-red-800 hover:bg-red-50"
              >
                {t("acciones.eliminar")}
              </button>
            )}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={cerrar}
              className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold hover:bg-slate-50"
            >
              {t("acciones.cancelar")}
            </button>
            <button
              type="button"
              onClick={guardarActividad}
              disabled={!a.titulo.trim() || !a.inicio}
              className="rounded-xl bg-emerald-800 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {t("modalActividad.guardarActividad")}
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
