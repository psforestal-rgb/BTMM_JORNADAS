import { useMemo, useState } from "react";
import Card from "../../ui/Card.jsx";
import Badge from "../../ui/Badge.jsx";
import Avatar from "../../ui/Avatar.jsx";
import Icon from "../../ui/Icon.jsx";
import EmptyState from "../../ui/EmptyState.jsx";
import { estadoCls } from "../../ui/styles.js";
import { fecha } from "../../domain/fechas.js";
import { useIsMobile } from "../../lib/responsive.js";
import { useMobile } from "../../lib/useMobile.js";
import { useSessionState } from "../../lib/useSessionState.js";
import { useT } from "../../i18n/useT.js";
import { useToast } from "../../context/ToastContext.jsx";
import { reinsertarEn } from "../../lib/undo.js";
import ModalFuncionario from "./ModalFuncionario.jsx";
import FuncionarioCard from "./FuncionarioCard.jsx";

export default function Funcionarios({ personas, setPersonas }) {
  const t = useT();
  const { conDeshacer, exito } = useToast();
  const [q, setQ] = useSessionState("btmm:funcionarios:buscar", "");
  const [filtro, setFiltro] = useSessionState("btmm:funcionarios:filtro", "todos");
  const [orden, setOrden] = useSessionState("btmm:funcionarios:orden", "nombre");
  const [modal, setModal] = useState(null);
  const isMobile = useIsMobile();
  // Breakpoint `md` (768 px): por debajo, los filtros siguen colapsados; a
  // partir de ahí hay sitio de sobra para dejarlos siempre a la vista.
  const filtrosEstrechos = useMobile();
  // null = sin elección manual; entonces manda el ancho de pantalla.
  const [filtrosAbiertos, setFiltrosAbiertos] = useState(null);
  const filtrosVisibles = filtrosAbiertos ?? !filtrosEstrechos;
  const [vista, setVista] = useSessionState("btmm:funcionarios:vista", null);
  const vistaEfectiva = vista ?? (isMobile ? "tarjetas" : "tabla");
  const filtrados = useMemo(
    () =>
      personas.filter((f) => {
        const texto = `${f.nombre} ${f.cedula} ${f.puesto} ${f.puestoOperativo || ""} ${f.condicion} ${f.obs}`.toLowerCase();
        if (q && !texto.includes(q.toLowerCase())) return false;
        if (filtro === "guardas") return f.puesto === "Guardaparques";
        if (filtro === "disp") return f.disponibilidad;
        if (filtro === "acum") return f.jornada === "Acumulativa";
        if (filtro === "ong") return f.ong;
        if (filtro === "sin-res") return f.jornada === "Acumulativa" && !f.resolucion && !f.ong;
        return true;
      }).sort((a, b) => {
        if (orden === "puesto") return (a.puestoOperativo || a.puesto || "").localeCompare(b.puestoOperativo || b.puesto || "");
        if (orden === "estado") return (a.estado || "").localeCompare(b.estado || "") || a.nombre.localeCompare(b.nombre);
        if (orden === "antiguedad") return (a.ingreso || "9999").localeCompare(b.ingreso || "9999");
        if (orden === "disponibilidad") return Number(Boolean(b.disponibilidad)) - Number(Boolean(a.disponibilidad)) || (a.vencimiento || "9999").localeCompare(b.vencimiento || "9999");
        return a.nombre.localeCompare(b.nombre);
      }),
    [personas, q, filtro, orden]
  );
  const nuevo = () => ({
    id: `f${Date.now()}`,
    nombre: "",
    cedula: "",
    email: "",
    puesto: "Guardaparques",
    puestoOperativo: "Puesto Quetzales",
    condicion: "Propiedad",
    jornada: "Ordinaria",
    modalidad: "Horario administrativo L-V",
    resolucion: "",
    disponibilidad: false,
    contrato: "",
    vencimiento: "",
    policia: false,
    brigada: false,
    ong: false,
    jefe: "Administración PNLQ",
    estado: "Activo",
    ingreso: "",
    obs: "",
  });
  const guardar = (obj) => {
    if (!obj.nombre.trim()) return;
    const esEdicion = personas.some((x) => x.id === obj.id);
    setPersonas((prev) => (prev.some((x) => x.id === obj.id) ? prev.map((x) => (x.id === obj.id ? obj : x)) : [obj, ...prev]));
    setModal(null);
    exito(t(esEdicion ? "funcionarios.guardado" : "funcionarios.creado", { nombre: obj.nombre.trim() }));
  };

  /* Borrado reversible (F-P12): en vez de un modal de confirmación por clic,
     se elimina de inmediato y el aviso ofrece «Deshacer» durante 10 s. La red
     de seguridad no desaparece, solo deja de costar un paso en cada borrado. */
  const eliminar = (id) => {
    const indice = personas.findIndex((x) => x.id === id);
    if (indice < 0) return;
    const persona = personas[indice];
    setPersonas((prev) => prev.filter((x) => x.id !== id));
    conDeshacer(
      t("funcionarios.eliminado", { nombre: persona.nombre }),
      () => {
        setPersonas((prev) => reinsertarEn(prev, persona, indice));
        exito(t("funcionarios.restaurado", { nombre: persona.nombre }));
      },
      { detalle: t("toast.puedeDeshacer") },
    );
  };

  const filtros = [
    ["todos", t("funcionarios.filtroTodos")],
    ["guardas", t("funcionarios.filtroGuardas")],
    ["disp", t("funcionarios.filtroDisp")],
    ["acum", t("funcionarios.filtroAcum")],
    ["ong", t("funcionarios.filtroOng")],
    ["sin-res", t("funcionarios.filtroSinRes")],
  ];

  return (
    <section>
      <Card
        title={t("funcionarios.titulo")}
        icon="👥"
        action={
          <div className="flex flex-wrap items-center gap-2">
            <div role="group" aria-label={t("funcionarios.vistaAria")} className="inline-flex overflow-hidden rounded-xl border border-slate-300 bg-white">
              <button
                type="button"
                onClick={() => setVista("tabla")}
                aria-pressed={vistaEfectiva === "tabla"}
                className={`min-h-touch px-3 py-2 text-xs font-bold ${
                  vistaEfectiva === "tabla" ? "bg-emerald-800 text-white" : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {t("funcionarios.vistaTabla")}
              </button>
              <button
                type="button"
                onClick={() => setVista("tarjetas")}
                aria-pressed={vistaEfectiva === "tarjetas"}
                className={`min-h-touch border-l border-slate-300 px-3 py-2 text-xs font-bold ${
                  vistaEfectiva === "tarjetas" ? "bg-emerald-800 text-white" : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {t("funcionarios.vistaTarjetas")}
              </button>
            </div>
            <button
              onClick={() => setModal(nuevo())}
              className="inline-flex min-h-touch items-center gap-1 rounded-xl bg-emerald-800 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              <Icon name="plus" size={16} />
              <span className="hidden sm:inline">{t("funcionarios.agregar")}</span>
              <span className="sm:hidden">{t("funcionarios.agregarCorto")}</span>
            </button>
          </div>
        }
      >
        <div className="mb-3 flex flex-col gap-2 xl:flex-row xl:items-center">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-emerald-700 xl:max-w-md"
            placeholder={t("funcionarios.buscarPlaceholder")}
          />
          <div className="text-sm font-bold text-slate-500 xl:ml-auto" aria-live="polite">
            {filtrados.length}/{personas.length}
          </div>
        </div>
        {/* Filtros y orden (F-P1). Por debajo de `md` siguen colapsados: en un
            teléfono, una fila de seis chips empujaba al primer funcionario
            fuera del viewport, que fue la razón de plegarlos en el sprint
            móvil. Desde `md` quedan siempre desplegados y el resumen se
            oculta, porque filtrar es la acción principal de esta vista y
            esconderla tras un clic la vuelve invisible. */}
        <details
          open={filtrosVisibles}
          onToggle={(e) => setFiltrosAbiertos(e.currentTarget.open)}
          className="mb-3 rounded-lg border border-slate-200 bg-white px-3 py-1.5"
        >
          <summary className="min-h-touch cursor-pointer list-none py-1.5 text-xs font-semibold text-slate-600 md:hidden">
            {t("funcionarios.verFiltros")}{filtro !== "todos" ? ` (${filtros.find(([id]) => id === filtro)?.[1]})` : ""}
          </summary>
          <div className="gap-2 pb-2 pt-1 md:flex md:items-center md:justify-between">
            <div role="group" aria-label={t("funcionarios.filtrosAria")} className="flex flex-wrap gap-2">
              {filtros.map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setFiltro(id)}
                  aria-pressed={filtro === id}
                  className={`min-h-touch rounded-full border px-3 py-2 text-xs font-bold ${
                    filtro === id ? "border-emerald-800 bg-emerald-800 text-white" : "border-slate-300 bg-white text-slate-700"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <label className="mt-2 flex shrink-0 items-center gap-2 text-sm font-semibold text-slate-600 md:mt-0">
              {t("funcionarios.ordenar")}
              <select value={orden} onChange={(e) => setOrden(e.target.value)} className="min-h-touch rounded-xl border border-slate-300 bg-white px-3 font-normal text-slate-900">
                <option value="nombre">Nombre</option><option value="puesto">Puesto</option><option value="estado">Estado</option><option value="antiguedad">Antigüedad</option><option value="disponibilidad">Disponibilidad</option>
              </select>
            </label>
          </div>
        </details>
        {filtrados.length === 0 && (
          <EmptyState
            icon="search"
            title={t("funcionarios.sinResultadosTitulo")}
            description={t("funcionarios.sinResultadosDesc")}
          />
        )}
        {filtrados.length > 0 && vistaEfectiva === "tarjetas" && (
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {filtrados.map((f) => (
              <FuncionarioCard
                key={f.id}
                f={f}
                onEditar={() => setModal({ ...f })}
                onBorrar={() => eliminar(f.id)}
              />
            ))}
          </div>
        )}
        {filtrados.length > 0 && vistaEfectiva === "tabla" && (
        <div className="overflow-auto rounded-lg border border-slate-300">
          <table className="min-w-[1040px] w-full border-collapse text-sm">
            <thead className="bg-slate-100 text-left text-[11px] uppercase tracking-wider text-slate-500">
              <tr>
                <th className="p-3">{t("funcionarios.th.funcionario")}</th>
                <th className="p-3">{t("funcionarios.th.cargo")}</th>
                <th className="p-3">{t("funcionarios.th.jornada")}</th>
                <th className="p-3">{t("funcionarios.th.disponibilidad")}</th>
                <th className="p-3">{t("funcionarios.th.atributos")}</th>
                <th className="p-3">{t("funcionarios.th.estado")}</th>
                <th className="p-3 text-right">{t("funcionarios.th.acciones")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filtrados.map((f) => (
                <tr key={f.id} className="hover:bg-slate-50">
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <Avatar name={f.nombre} />
                      <div>
                        <div className="font-semibold">{f.nombre}</div>
                        <div className="text-xs text-slate-500">{f.cedula} · {f.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="font-bold">{f.puesto}</div>
                    <div className="mt-1 text-xs font-bold text-emerald-800">{f.puestoOperativo || t("funcionarios.sinPuesto")}</div>
                    <div className="mt-1 flex gap-1">
                      <Badge className="border-slate-200 bg-slate-50 text-slate-700">{f.condicion}</Badge>
                      {f.ong && <Badge className="border-orange-200 bg-orange-100 text-orange-900">{t("funcionarios.filtroOng")}</Badge>}
                    </div>
                  </td>
                  <td className="p-3">
                    <Badge
                      className={
                        f.jornada === "Acumulativa"
                          ? "border-blue-200 bg-blue-100 text-blue-900"
                          : "border-slate-200 bg-slate-100 text-slate-700"
                      }
                    >
                      {f.jornada} {f.modalidad}
                    </Badge>
                    {f.jornada === "Acumulativa" && !f.resolucion && !f.ong && (
                      <div className="mt-1">
                        <Badge className="border-yellow-300 bg-yellow-100 text-yellow-900">{t("funcionarios.sinResolucion")}</Badge>
                      </div>
                    )}
                  </td>
                  <td className="p-3">
                    {f.disponibilidad ? (
                      <>
                        <Badge className="border-emerald-200 bg-emerald-100 text-emerald-900">{t("funcionarios.si")}</Badge>
                        <div className="mt-1 text-xs text-slate-500">{fecha(f.vencimiento)}</div>
                      </>
                    ) : (
                      <Badge className="border-slate-200 bg-slate-100 text-slate-600">{t("funcionarios.no")}</Badge>
                    )}
                  </td>
                  <td className="p-3">
                    <div className="flex gap-1">
                      {f.policia && <Badge className="border-emerald-200 bg-emerald-50 text-emerald-900">{t("funcionarios.atributoPolicia")}</Badge>}
                      {f.brigada && <Badge className="border-orange-200 bg-orange-50 text-orange-900">{t("funcionarios.atributoBrigada")}</Badge>}
                      {!f.policia && !f.brigada && <span className="text-slate-400">—</span>}
                    </div>
                  </td>
                  <td className="p-3">
                    <Badge className={estadoCls(f.estado)}>{f.estado}</Badge>
                  </td>
                  <td className="p-3 text-right">
                    <button onClick={() => setModal({ ...f })} className="rounded-lg px-2 py-1 font-semibold text-blue-800 hover:bg-blue-50">
                      {t("acciones.editar")}
                    </button>
                    <button onClick={() => eliminar(f.id)} className="rounded-lg px-2 py-1 font-semibold text-red-800 hover:bg-red-50">
                      {t("acciones.eliminar")}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        )}
        <div className="mt-3 flex flex-wrap gap-3 text-xs font-bold text-slate-500">
          <span>{t("funcionarios.leyendaPolicia")}</span>
          <span>{t("funcionarios.leyendaBrigada")}</span>
          <span>{t("funcionarios.leyendaPendiente")}</span>
        </div>
      </Card>
      {modal && <ModalFuncionario valor={modal} cerrar={() => setModal(null)} guardar={guardar} />}
    </section>
  );
}
