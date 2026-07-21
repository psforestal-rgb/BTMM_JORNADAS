import { useState } from "react";
import Badge from "../../ui/Badge.jsx";
import { opcionesPuestoOperativo } from "../../data/puestos.js";
import { opcionesLugarActividad, opcionesActividadBase, actividadRutinariaVisitantes } from "../../data/opciones.js";
import { useModalA11y } from "../../lib/a11y.js";
import { useT } from "../../i18n/useT.js";
import { useApp } from "../../context/AppContext.jsx";
import { useFeriadosDelAno } from "../../lib/useFeriadosDelAno.js";
import { codigoRolFuncionario, esRolActivo, categoriaDe, patchCategoriaDia } from "../../domain/roles.js";
import {
  saldoFuncionario,
  nuevoRegistroReposicion,
  aplicarCuotaAlMasAntiguo,
  HORAS_JORNADA_DEFAULT,
} from "../../domain/reposicion.js";
import { saldoTexto } from "../reposicion/etiquetas.js";
import AsignacionLibreModal from "./AsignacionLibreModal.jsx";
import OtrosParticipantes from "./OtrosParticipantes.jsx";

export default function ModalActividad({ valor, personas, cerrar, guardar, eliminar, actividadesPlan = [] }) {
  const { ref, titleId } = useModalA11y({ onClose: cerrar });
  const t = useT();
  const { roleData = {}, setRoleData, reposiciones = [], setReposiciones, reglas } = useApp();
  const hj = reglas?.horasJornada ?? HORAS_JORNADA_DEFAULT;
  const [a, setA] = useState(() => ({
    ...valor,
    categoria: valor.categoria || "Otra actividad",
    horaInicio: valor.horaInicio || "08:00",
    horaFin: valor.horaFin || "16:00",
    funcionarios: valor.funcionarios || [],
    otrosParticipantes: valor.otrosParticipantes || [],
    observaciones: valor.observaciones || "",
  }));
  const [asignLibre, setAsignLibre] = useState(null);
  const [soloSaldo, setSoloSaldo] = useState(false);
  const set = (k, v) => setA((prev) => ({ ...prev, [k]: v }));

  const yA = Number(a.inicio?.slice(0, 4));
  const mIdxA = Number(a.inicio?.slice(5, 7)) - 1;
  const diaA = Number(a.inicio?.slice(8, 10));
  const feriadosA = useFeriadosDelAno(yA);
  const rolDe = (nombre) =>
    a.inicio && Number.isFinite(yA) ? codigoRolFuncionario(personas, roleData, yA, mIdxA, nombre, diaA, feriadosA) : "";
  const esLibreDe = (nombre) => {
    const rol = rolDe(nombre);
    return rol && !esRolActivo(rol);
  };
  const saldoDe = (nombre) => saldoFuncionario(reposiciones, nombre, hj);
  const cls = "w-full min-h-touch rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-emerald-700 focus:ring-4 focus:ring-emerald-100";
  const porPuesto = opcionesPuestoOperativo.map((puesto) => ({ puesto, items: personas.filter((p) => p.puestoOperativo === puesto) }));
  const lugarModo = opcionesLugarActividad.includes(a.lugar) ? a.lugar : "Otro";
  const esExistente = actividadesPlan.some((actividad) => actividad.id === a.id);
  const finActividad = a.unDia ? a.inicio : a.fin || a.inicio;
  const traslapa = (actividad) => actividad.id !== a.id && actividad.inicio <= finActividad && (actividad.fin || actividad.inicio) >= a.inicio;
  const actividadesFuncionario = (nombre) => actividadesPlan.filter((actividad) => traslapa(actividad) && (actividad.funcionarios || []).includes(nombre));

  const agregarFuncionario = (nombre) => {
    if (!a.funcionarios.includes(nombre)) set("funcionarios", [...a.funcionarios, nombre]);
  };
  const quitarFuncionario = (nombre) => set("funcionarios", a.funcionarios.filter((item) => item !== nombre));
  const toggleFuncionario = (nombre) => {
    if (a.funcionarios.includes(nombre)) return quitarFuncionario(nombre);
    if (esLibreDe(nombre)) {
      setAsignLibre({ funcionario: nombre, iso: a.inicio, rol: rolDe(nombre), categoria: categoriaDe(rolDe(nombre)), saldo: saldoDe(nombre) });
      return undefined;
    }
    return agregarFuncionario(nombre);
  };

  const resolverModificarRol = () => {
    const { funcionario } = asignLibre;
    if (setRoleData) {
      setRoleData((prev) => ({
        ...prev,
        ...patchCategoriaDia({ roleData: prev, personas, year: yA, month: mIdxA, persona: funcionario, dia: diaA, categoria: "T", feriados: feriadosA }),
      }));
    }
    agregarFuncionario(funcionario);
    setAsignLibre(null);
  };
  const resolverReposicion = () => {
    const { funcionario, categoria } = asignLibre;
    if (setReposiciones) {
      setReposiciones((prev) => [
        nuevoRegistroReposicion({ reposiciones: prev, funcionario, fecha: a.inicio, categoria, detalle: a.titulo || "" }),
        ...prev,
      ]);
    }
    agregarFuncionario(funcionario);
    setAsignLibre(null);
  };
  const resolverReponer = () => {
    const { funcionario } = asignLibre;
    if (setReposiciones) {
      const cuota = { id: `c${Date.now()}`, fecha: a.inicio, magnitud: "diaEntero", horas: 0 };
      setReposiciones((prev) => aplicarCuotaAlMasAntiguo(prev, funcionario, cuota, hj));
    }
    quitarFuncionario(funcionario);
    setAsignLibre(null);
  };

  const tituloModal = esExistente ? t("modalActividad.editar") : t("modalActividad.agregar");
  const guardarNormalizado = () => guardar({
    ...a,
    categoria: "Otra actividad",
    horaInicio: a.horaInicio || "08:00",
    horaFin: a.horaFin || "16:00",
    otrosParticipantes: (a.otrosParticipantes || []).filter((p) => p.nombre?.trim()).map((p) => ({ nombre: p.nombre.trim(), contacto: (p.contacto || "").trim() })),
  });

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-0 backdrop-blur-sm md:items-center md:p-4" onClick={(e) => { if (e.target === e.currentTarget) cerrar(); }}>
      <div ref={ref} role="dialog" aria-modal="true" aria-labelledby={titleId} tabIndex={-1} className="max-h-[100dvh] w-full max-w-4xl overflow-hidden rounded-none bg-white shadow-2xl outline-none md:max-h-[94dvh] md:rounded-3xl">
        <div className="flex items-start justify-between gap-3 border-b border-slate-200 p-5">
          <div>
            <h3 id={titleId} className="text-lg font-semibold">{tituloModal}</h3>
            <p className="text-sm text-slate-600">{t("modalActividad.sub")}</p>
          </div>
          <button onClick={cerrar} aria-label={t("acciones.cerrar")} className="-mr-1 inline-flex min-h-touch min-w-touch shrink-0 items-center justify-center rounded-xl text-lg font-semibold text-slate-500 hover:bg-slate-100 hover:text-slate-700">✕</button>
        </div>

        <div className="max-h-[72vh] overflow-y-auto p-5">
          {a.funcionarios.filter((nombre) => esLibreDe(nombre)).length > 0 && (
            <div className="mb-4 rounded-2xl border border-amber-300 bg-amber-50 p-3">
              <p className="text-xs font-bold uppercase tracking-wider text-amber-800">{t("modalActividad.libresAsignados")}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {a.funcionarios.filter((nombre) => esLibreDe(nombre)).map((nombre) => (
                  <button key={nombre} type="button" onClick={() => setAsignLibre({ funcionario: nombre, iso: a.inicio, rol: rolDe(nombre), categoria: categoriaDe(rolDe(nombre)), saldo: saldoDe(nombre) })} className="inline-flex items-center gap-1 rounded-xl border border-amber-400 bg-white px-3 py-1.5 text-xs font-bold text-amber-900 hover:bg-amber-100">
                    {nombre} · {t("modalActividad.resolver")}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="grid gap-4 md:grid-cols-2">
            <label className="md:col-span-2">
              <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500">{t("modalActividad.titulo")}</span>
              <div className="grid gap-2 md:grid-cols-[260px_1fr]">
                <select className={cls} value={a.titulo === actividadRutinariaVisitantes ? actividadRutinariaVisitantes : "Otra"} onChange={(e) => set("titulo", e.target.value === "Otra" ? "" : e.target.value)}>
                  {opcionesActividadBase.map((opcion) => <option key={opcion} value={opcion}>{opcion}</option>)}
                  <option value="Otra">{t("modalActividad.otra")}</option>
                </select>
                <input className={cls} value={a.titulo} onChange={(e) => set("titulo", e.target.value)} placeholder={t("modalActividad.placeholderTitulo")} />
              </div>
            </label>

            <label>
              <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500">Categoría</span>
              <input className={cls + " bg-slate-100"} value="Otra actividad" readOnly />
            </label>
            <div className="grid grid-cols-2 gap-2">
              <label>
                <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500">Hora inicio</span>
                <input type="time" className={cls} value={a.horaInicio} onChange={(e) => set("horaInicio", e.target.value)} />
              </label>
              <label>
                <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500">Hora final</span>
                <input type="time" className={cls} value={a.horaFin} onChange={(e) => set("horaFin", e.target.value)} />
              </label>
            </div>
            <label>
              <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500">{t("modalActividad.fechaInicio")}</span>
              <input type="date" className={cls + " [color-scheme:light] dark:[color-scheme:dark]"} value={a.inicio} onChange={(e) => set("inicio", e.target.value)} />
            </label>
            <label>
              <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500">{t("modalActividad.fechaFinal")}</span>
              <input type="date" className={cls + " [color-scheme:light] dark:[color-scheme:dark]"} value={a.unDia ? a.inicio : a.fin} disabled={a.unDia} onChange={(e) => set("fin", e.target.value)} />
            </label>
            <label className="flex items-center gap-2 rounded-xl border border-slate-300 p-3 text-sm font-semibold">
              <input type="checkbox" checked={a.unDia} onChange={(e) => setA((prev) => ({ ...prev, unDia: e.target.checked, fin: e.target.checked ? prev.inicio : prev.fin }))} />
              {t("modalActividad.unDia")}
            </label>
            <label className="flex items-center gap-2 rounded-xl border border-orange-300 bg-orange-50 p-3 text-sm font-semibold text-orange-950">
              <input type="checkbox" checked={a.viatico} onChange={(e) => set("viatico", e.target.checked)} />
              {t("modalActividad.requiereViatico")}
            </label>
            <label className="md:col-span-2">
              <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500">{t("modalActividad.lugar")}</span>
              <div className="grid gap-2">
                <select className={cls} value={lugarModo} onChange={(e) => set("lugar", e.target.value === "Otro" ? "" : e.target.value)}>
                  {opcionesLugarActividad.map((opcion) => <option key={opcion} value={opcion}>{opcion}</option>)}
                  <option value="Otro">{t("modalActividad.otro")}</option>
                </select>
                {lugarModo === "Otro" && <input className={cls} value={a.lugar} onChange={(e) => set("lugar", e.target.value)} placeholder={t("modalActividad.placeholderLugar")} />}
              </div>
            </label>
          </div>

          <div className="mt-5">
            <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">{t("modalActividad.participantes")}</span>
              <div className="flex items-center gap-2">
                <label className="flex items-center gap-1.5 rounded-full border border-sky-300 bg-sky-50 px-2.5 py-1 text-[11px] font-bold text-sky-900">
                  <input type="checkbox" checked={soloSaldo} onChange={(e) => setSoloSaldo(e.target.checked)} />
                  {t("modalActividad.soloSaldo")}
                </label>
                <Badge className="border-emerald-200 bg-emerald-100 text-emerald-900">{t("modalActividad.seleccionados", { n: a.funcionarios.length })}</Badge>
              </div>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {porPuesto.map((grupo) => {
                const items = soloSaldo ? grupo.items.filter((funcionario) => saldoDe(funcionario.nombre) > 0) : grupo.items;
                if (soloSaldo && items.length === 0) return null;
                return (
                  <div key={grupo.puesto} className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                    <div className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">{grupo.puesto}</div>
                    <div className="space-y-1.5">
                      {items.map((funcionario) => {
                        const avisos = actividadesFuncionario(funcionario.nombre);
                        const seleccionado = a.funcionarios.includes(funcionario.nombre);
                        return (
                          <div key={funcionario.id} className={`rounded-xl border px-2 py-2 text-xs font-bold ${seleccionado ? "border-emerald-300 bg-emerald-100 text-emerald-950" : avisos.length ? "border-yellow-300 bg-yellow-50 text-yellow-950" : "border-slate-200 bg-white text-slate-700"}`}>
                            <label className="flex items-center gap-2">
                              <input type="checkbox" checked={seleccionado} onChange={() => toggleFuncionario(funcionario.nombre)} />
                              {funcionario.nombre}
                            </label>
                            {(esLibreDe(funcionario.nombre) || saldoDe(funcionario.nombre) > 0) && (
                              <div className="mt-1 flex flex-wrap gap-1">
                                {!seleccionado && esLibreDe(funcionario.nombre) && <span className="rounded-full border border-amber-300 bg-amber-100 px-1.5 py-0.5 text-[10px] font-bold text-amber-900">{t("modalActividad.diaLibre")}</span>}
                                {saldoDe(funcionario.nombre) > 0 && <span className="rounded-full border border-sky-300 bg-sky-100 px-1.5 py-0.5 text-[10px] font-bold text-sky-900">{t("modalActividad.saldoFavorMonto", { saldo: saldoTexto(saldoDe(funcionario.nombre), hj) })}</span>}
                              </div>
                            )}
                            {avisos.length > 0 && (
                              <div className="mt-2 rounded-lg border border-yellow-300 bg-yellow-100 p-2 text-[11px] leading-snug text-yellow-950">
                                <div className="font-bold">{t("modalActividad.avisoTraslape")}</div>
                                <div className="mt-1 font-bold">{avisos.map((actividad) => actividad.titulo).join(" · ")}</div>
                                <button type="button" onClick={() => agregarFuncionario(funcionario.nombre)} className="mt-2 rounded-lg bg-yellow-700 px-2 py-1 text-[10px] font-bold text-white hover:bg-yellow-800">{t("modalActividad.agregarAunAsi")}</button>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <OtrosParticipantes participantes={a.otrosParticipantes} onChange={(valorNuevo) => set("otrosParticipantes", valorNuevo)} inputClass={cls} />

          <label className="mt-5 block">
            <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500">{t("modalActividad.obs")}</span>
            <textarea className={`${cls} min-h-24`} value={a.observaciones} onChange={(e) => set("observaciones", e.target.value)} placeholder={t("modalActividad.placeholderObs")} />
          </label>
        </div>

        <div className="flex flex-wrap justify-between gap-2 border-t border-slate-200 bg-slate-50 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <div>{esExistente && <button onClick={() => eliminar(a.id)} className="rounded-xl border border-red-300 bg-white px-4 py-2 text-sm font-semibold text-red-800 hover:bg-red-50">{t("acciones.eliminar")}</button>}</div>
          <div className="flex gap-2">
            <button onClick={cerrar} className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold hover:bg-slate-50">{t("acciones.cancelar")}</button>
            <button onClick={guardarNormalizado} className="rounded-xl bg-emerald-800 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">{t("modalActividad.guardarActividad")}</button>
          </div>
        </div>
      </div>

      {asignLibre && (
        <AsignacionLibreModal
          data={asignLibre}
          hj={hj}
          cerrar={() => setAsignLibre(null)}
          onModificarRol={resolverModificarRol}
          onReposicion={resolverReposicion}
          onReponer={resolverReponer}
          onEditarFecha={() => setAsignLibre(null)}
        />
      )}
    </div>
  );
}
