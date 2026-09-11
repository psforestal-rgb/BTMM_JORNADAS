import { useEffect, useId, useMemo, useRef, useState } from "react";
import { useApp } from "../../context/AppContext.jsx";
import { opcionesPuesto, opcionesCondicion, opcionesEstado, opcionesModalidad } from "../../data/opciones.js";
import { validarCedula, validarCorreo, validarFuncionario, validarNombre } from "../../domain/validaciones.js";
import { useModalA11y } from "../../lib/a11y.js";
import { useT } from "../../i18n/useT.js";
import Ayuda from "../../ui/Ayuda.jsx";

const cls = "w-full min-h-touch rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-emerald-700 focus:ring-4 focus:ring-emerald-100";

/* A nivel de módulo: definidos dentro del componente cambiaban de identidad
   en cada render y React remontaba el input, perdiendo el foco al teclear. */
function Field({ label, children }) {
  return (
    <label>
      <span className="mb-1 block text-xs font-bold uppercase text-slate-500">{label}</span>
      {children}
    </label>
  );
}

/* Campo que se valida al SALIR del foco, no al teclear (RF3): avisar mientras
   alguien escribe su cédula es ruido, porque el valor está incompleto por
   definición hasta el último carácter.

   Reutiliza los validadores de `src/domain/validaciones.js`, cuya filosofía ya
   escrita es que las validaciones guían pero NO bloquean el guardado: la
   operación de campo siempre debe poder registrar el dato. Por eso el aviso es
   ámbar (advertencia) y no rojo (error), y por eso nada aquí deshabilita
   «Guardar». */
function FieldValidado({ label, valor, onChange, validar, ...resto }) {
  const idError = useId();
  const [tocado, setTocado] = useState(false);
  const aviso = tocado ? validar(valor) : null;
  return (
    <label>
      <span className="mb-1 block text-xs font-bold uppercase text-slate-500">{label}</span>
      <input
        className={`${cls} ${aviso ? "border-amber-500 focus:border-amber-600 focus:ring-amber-100" : ""}`}
        value={valor}
        onChange={(e) => onChange(e.target.value)}
        onBlur={() => setTocado(true)}
        aria-invalid={aviso ? "true" : undefined}
        aria-describedby={aviso ? idError : undefined}
        {...resto}
      />
      {aviso && (
        <p id={idError} className="mt-1 text-xs font-semibold text-amber-800">{aviso}</p>
      )}
    </label>
  );
}

/* La ayuda va por sección y no por campo: con 18 campos, un botón de ayuda en
   cada uno alargaría todavía más un formulario que ya se critica por largo. */
function Seccion({ id, titulo, ayuda, cols = "md:grid-cols-2", children }) {
  return (
    <section aria-labelledby={id}>
      <div className="mb-2 flex flex-wrap items-center gap-x-2">
        <h4 id={id} className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
          {titulo}
        </h4>
        {ayuda && <Ayuda etiqueta={titulo}>{ayuda}</Ayuda>}
      </div>
      <div className={`grid gap-4 ${cols}`}>{children}</div>
    </section>
  );
}

/* Los 18 campos se reparten en 3 pasos (F-P2/F-P10). El reparto sigue la
   pregunta que responde cada uno, no el número de campos: quién es la persona,
   dónde y cómo trabaja, y con qué papeles se respalda eso. */
const PASOS = ["uno", "dos", "tres"];

const BTN = "min-h-touch rounded-xl px-4 py-2 text-sm font-semibold";
const BTN_NEUTRO = `${BTN} border border-slate-300 bg-white text-slate-700 hover:bg-slate-50`;
const BTN_PRIMARIO = `${BTN} bg-emerald-800 text-white hover:bg-emerald-700`;
const BTN_GUARDAR_SEC = `${BTN} border border-emerald-700 bg-white text-emerald-800 hover:bg-emerald-50`;

export default function ModalFuncionario({ valor, cerrar, guardar }) {
  const { ref, titleId } = useModalA11y({ onClose: cerrar });
  const t = useT();
  const [f, setF] = useState(valor);
  const set = (k, v) => setF((p) => ({ ...p, [k]: v }));
  // `valor.nombre` y no `f.nombre`: al crear, escribir el nombre no debe
  // convertir el formulario en "edición" a mitad de camino.
  const esEdicion = Boolean(valor.nombre);
  const titulo = esEdicion ? t("modalFuncionario.editar") : t("modalFuncionario.agregar");

  // Advertencias de dominio, recalculadas en cada render sobre el borrador.
  // No bloquean nada: `Funcionarios.jsx` sigue rechazando solo el nombre vacío.
  const avisos = validarFuncionario(f);
  // Puestos vigentes desde el estado (RP1–RP8), no desde el módulo de datos.
  const { puestos: puestosVigentes } = useApp();
  const opcionesPuestoOperativo = useMemo(
    () => puestosVigentes.map((p) => p.nombre),
    [puestosVigentes],
  );


  const [paso, setPaso] = useState(0);
  // Paso más lejano alcanzado: al crear, el indicador no deja saltar a un paso
  // que aún no se ha visto; al editar se puede ir a cualquiera desde el inicio.
  const [maxPaso, setMaxPaso] = useState(0);
  const ultimo = paso === PASOS.length - 1;

  const irAPaso = (i) => {
    const destino = Math.max(0, Math.min(i, PASOS.length - 1));
    setPaso(destino);
    setMaxPaso((m) => Math.max(m, destino));
  };

  // Al cambiar de paso, el foco va al panel para que un lector de pantalla
  // anuncie el contenido nuevo. Se salta el primer render: ahí el foco ya lo
  // coloca `useModalA11y` en el diálogo y robárselo rompería la trampa de foco.
  const panelRef = useRef(null);
  const montado = useRef(false);
  useEffect(() => {
    if (!montado.current) {
      montado.current = true;
      return;
    }
    panelRef.current?.focus();
  }, [paso]);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-0 md:items-center md:p-4" onClick={(e) => { if (e.target === e.currentTarget) cerrar(); }}>
      <div ref={ref} role="dialog" aria-modal="true" aria-labelledby={titleId} tabIndex={-1} className="flex max-h-[100dvh] w-full max-w-3xl flex-col overflow-hidden rounded-none bg-white shadow-2xl outline-none md:max-h-[94dvh] md:rounded-3xl">
        <div className="flex justify-between border-b p-5">
          <h3 id={titleId} className="text-lg font-semibold">{titulo}</h3>
          <button onClick={cerrar} aria-label={t("acciones.cerrar")} className="-mr-1 inline-flex min-h-touch min-w-touch shrink-0 items-center justify-center rounded-xl text-lg font-semibold text-slate-500 hover:bg-slate-100 hover:text-slate-700">✕</button>
        </div>

        <div className="border-b bg-slate-50 px-5 py-3">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
            {t("modalFuncionario.pasos.indicador", { n: paso + 1, total: PASOS.length })}
            <span className="text-slate-400"> · </span>
            <span className="text-slate-700">{t(`modalFuncionario.pasos.${PASOS[paso]}`)}</span>
          </p>
          <nav aria-label={t("modalFuncionario.pasos.navAria")} className="mt-2 flex flex-wrap gap-1.5">
            {PASOS.map((clave, i) => {
              const nombrePaso = t(`modalFuncionario.pasos.${clave}`);
              const activo = i === paso;
              const alcanzable = esEdicion || i <= maxPaso;
              return (
                <button
                  key={clave}
                  type="button"
                  onClick={() => irAPaso(i)}
                  disabled={!alcanzable}
                  aria-current={activo ? "step" : undefined}
                  aria-label={t("modalFuncionario.pasos.irA", { n: i + 1, titulo: nombrePaso })}
                  className={`inline-flex min-h-touch items-center gap-2 rounded-xl px-3 text-xs font-bold ${
                    activo
                      ? "bg-emerald-800 text-white"
                      : alcanzable
                      ? "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
                      : "border border-slate-200 bg-slate-100 text-slate-400"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] ${
                      activo ? "bg-white text-emerald-800" : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span aria-hidden="true" className="hidden sm:inline">{nombrePaso}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* key={paso}: cada paso es un panel nuevo, así el scroll vuelve arriba
            en vez de quedarse donde lo dejó el paso anterior. */}
        <div
          key={paso}
          ref={panelRef}
          tabIndex={-1}
          className="flex-1 space-y-5 overflow-y-auto p-5 outline-none"
        >
          {paso === 0 && (
            <>
              <Seccion id="sec-identificacion" titulo={t("modalFuncionario.sec.identificacion")}>
                <FieldValidado
                  label={t("modalFuncionario.nombre")}
                  valor={f.nombre}
                  onChange={(v) => set("nombre", v)}
                  validar={validarNombre}
                />
                <FieldValidado
                  label={t("modalFuncionario.cedula")}
                  valor={f.cedula}
                  onChange={(v) => set("cedula", v)}
                  validar={validarCedula}
                  type="text"
                  inputMode="numeric"
                  autoComplete="off"
                />
                <FieldValidado
                  label={t("modalFuncionario.correo")}
                  valor={f.email}
                  onChange={(v) => set("email", v)}
                  validar={validarCorreo}
                  type="email"
                  autoComplete="off"
                />
              </Seccion>
              <p className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs leading-relaxed text-slate-600">
                {t("modalFuncionario.pasos.soloNombre")}
              </p>
            </>
          )}

          {paso === 1 && (
            <>
              <Seccion id="sec-puesto" titulo={t("modalFuncionario.sec.puesto")} ayuda={t("modalFuncionario.ayuda.puesto")}>
                <Field label={t("modalFuncionario.cargo")}>
                  <select className={cls} value={f.puesto} onChange={(e) => set("puesto", e.target.value)}>
                    {opcionesPuesto.map((x) => <option key={x}>{x}</option>)}
                  </select>
                </Field>
                <Field label={t("modalFuncionario.puesto")}>
                  <select className={cls} value={f.puestoOperativo || "Puesto Quetzales"} onChange={(e) => set("puestoOperativo", e.target.value)}>
                    {opcionesPuestoOperativo.map((x) => <option key={x}>{x}</option>)}
                  </select>
                </Field>
                <Field label={t("modalFuncionario.condicion")}>
                  <select className={cls} value={f.condicion} onChange={(e) => set("condicion", e.target.value)}>
                    {opcionesCondicion.map((x) => <option key={x}>{x}</option>)}
                  </select>
                </Field>
                <Field label={t("modalFuncionario.estado")}>
                  <select className={cls} value={f.estado} onChange={(e) => set("estado", e.target.value)}>
                    {opcionesEstado.map((x) => <option key={x}>{x}</option>)}
                  </select>
                </Field>
              </Seccion>
              <Seccion id="sec-jornada" titulo={t("modalFuncionario.sec.jornada")} ayuda={t("modalFuncionario.ayuda.jornada")}>
                <Field label={t("modalFuncionario.jornada")}>
                  <select className={cls} value={f.jornada} onChange={(e) => set("jornada", e.target.value)}>
                    <option>Ordinaria</option>
                    <option>Acumulativa</option>
                  </select>
                </Field>
                <Field label={t("modalFuncionario.modalidad")}>
                  <select className={cls} value={f.modalidad} onChange={(e) => set("modalidad", e.target.value)}>
                    {opcionesModalidad.map((x) => <option key={x}>{x}</option>)}
                  </select>
                </Field>
              </Seccion>
            </>
          )}

          {paso === 2 && (
            <>
              <Seccion id="sec-contratacion" titulo={t("modalFuncionario.sec.contratacion")} ayuda={t("modalFuncionario.ayuda.contratacion")}>
                <Field label={t("modalFuncionario.resolucion")}><input className={cls} value={f.resolucion} onChange={(e) => set("resolucion", e.target.value)} /></Field>
                <Field label={t("modalFuncionario.contrato")}><input className={cls} value={f.contrato} onChange={(e) => set("contrato", e.target.value)} /></Field>
                <Field label={t("modalFuncionario.vencimiento")}><input type="date" className={cls + " [color-scheme:light] dark:[color-scheme:dark]"} value={f.vencimiento} onChange={(e) => set("vencimiento", e.target.value)} /></Field>
                <Field label={t("modalFuncionario.ingreso")}><input type="date" className={cls + " [color-scheme:light] dark:[color-scheme:dark]"} value={f.ingreso} onChange={(e) => set("ingreso", e.target.value)} /></Field>
              </Seccion>
              <Seccion id="sec-atributos" titulo={t("modalFuncionario.sec.atributos")} ayuda={t("modalFuncionario.ayuda.atributos")} cols="sm:grid-cols-2 md:grid-cols-4">
                {[
                  ["disponibilidad", t("modalFuncionario.attr.disponibilidad")],
                  ["policia", t("modalFuncionario.attr.policia")],
                  ["brigada", t("modalFuncionario.attr.brigada")],
                  ["ong", t("modalFuncionario.attr.ong")],
                ].map(([k, l]) => (
                  <label key={k} className="flex min-h-touch items-center gap-2 rounded-xl border p-3 text-sm font-semibold">
                    <input type="checkbox" checked={!!f[k]} onChange={(e) => set(k, e.target.checked)} />
                    {l}
                  </label>
                ))}
              </Seccion>
              <Seccion id="sec-obs" titulo={t("modalFuncionario.obs")} cols="grid-cols-1">
                <textarea className={`${cls} min-h-24`} value={f.obs} onChange={(e) => set("obs", e.target.value)} aria-label={t("modalFuncionario.obs")} />
              </Seccion>
              {/* Resumen en el último paso: recoge también las advertencias que
                  cruzan campos de pasos distintos (disponibilidad sin
                  vencimiento, acumulativa sin resolución), que ningún aviso de
                  campo suelto puede detectar. */}
              {avisos.length > 0 && (
                <section aria-labelledby="sec-revisar" className="rounded-2xl border border-amber-300 bg-amber-50 p-4">
                  <h4 id="sec-revisar" className="text-[11px] font-bold uppercase tracking-wider text-amber-900">
                    {t("modalFuncionario.revisar.titulo")}
                  </h4>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-relaxed text-amber-950">
                    {avisos.map((aviso) => <li key={aviso}>{aviso}</li>)}
                  </ul>
                  <p className="mt-2 text-xs font-semibold text-amber-800">{t("modalFuncionario.revisar.nota")}</p>
                </section>
              )}
            </>
          )}
        </div>

        {/* Salidas a la izquierda, navegación a la derecha. «Guardar» existe una
            sola vez en el DOM: secundario mientras quedan pasos, primario en el
            último. Guardar desde el paso 1 es el camino de creación rápida. */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-t bg-slate-50 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <div className="flex flex-wrap items-center gap-2">
            <button type="button" onClick={cerrar} className={BTN_NEUTRO}>{t("acciones.cancelar")}</button>
            {!ultimo && (
              <button type="button" onClick={() => guardar(f)} className={BTN_GUARDAR_SEC}>{t("acciones.guardar")}</button>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {paso > 0 && (
              <button type="button" onClick={() => irAPaso(paso - 1)} className={BTN_NEUTRO}>{t("acciones.atras")}</button>
            )}
            {ultimo ? (
              <button type="button" onClick={() => guardar(f)} className={BTN_PRIMARIO}>{t("acciones.guardar")}</button>
            ) : (
              <button type="button" onClick={() => irAPaso(paso + 1)} className={BTN_PRIMARIO}>{t("acciones.siguiente")}</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
