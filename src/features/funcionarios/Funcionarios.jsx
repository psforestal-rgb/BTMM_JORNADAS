import { useMemo, useRef, useState } from "react";
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
import { useFiltrosDeVista } from "../../lib/useFiltrosDeVista.js";
import { useT } from "../../i18n/useT.js";
import { useApp } from "../../context/AppContext.jsx";
import { useToast } from "../../context/ToastContext.jsx";
import { csvDescargable, filasAObjetos, parsearCSV, TIPO_CSV } from "../../lib/csv.js";
import { descargarArchivo } from "../../lib/descargas.js";
import { crearRespaldo } from "../../lib/respaldo.js";
import { validarFuncionario } from "../../domain/validaciones.js";
import { crearEntrada, TIPO } from "../../domain/historial.js";
import { toLocalFileTimestamp } from "../../domain/fechas.js";
import { reinsertarEn } from "../../lib/undo.js";
import Modal from "../../ui/Modal.jsx";
import { planificarImportacion } from "./importarFuncionarios.js";
import ModalFuncionario from "./ModalFuncionario.jsx";
import { useGuardarFuncionario } from "./useGuardarFuncionario.js";
import FuncionarioCard from "./FuncionarioCard.jsx";

/* Tope de tamaño, como el que ya protege la importación JSON de «Datos»: un
   archivo enorme o corrupto no debe congelar el hilo principal. */
const MAX_CSV_BYTES = 5 * 1024 * 1024;

export default function Funcionarios({ personas, setPersonas, setView }) {
  const t = useT();
  const ctx = useApp();
  const { registrarCambio } = ctx;
  const { conDeshacer, exito, aviso, error } = useToast();
  const archivoRef = useRef(null);
  const [previa, setPrevia] = useState(null);
  /* Búsqueda, filtro y orden viajan en la ruta: definen QUÉ se está viendo, así
     que un enlace a «los guardaparques sin resolución» tiene que poder
     compartirse. La elección entre tabla y tarjetas NO viaja: es una preferencia
     del aparato de quien mira. */
  const { valores: filtrosURL, poner: ponerFiltro } = useFiltrosDeVista("funcionarios", {
    q: "",
    filtro: "todos",
    orden: "nombre",
  });
  const q = filtrosURL.q;
  const setQ = (v) => ponerFiltro("q", typeof v === "function" ? v(q) : v);
  const filtro = filtrosURL.filtro;
  const setFiltro = (v) => ponerFiltro("filtro", typeof v === "function" ? v(filtro) : v);
  const orden = filtrosURL.orden;
  const setOrden = (v) => ponerFiltro("orden", typeof v === "function" ? v(orden) : v);
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
  // El guardado vive en un hook compartido con la ficha individual: una sola
  // ruta de alta/edición, un solo sitio donde se registra el rastro RF9.
  const guardarFuncionario = useGuardarFuncionario(personas, setPersonas);
  const guardar = (obj) => {
    if (guardarFuncionario(obj)) setModal(null);
  };

  /* VF1: la ficha individual es una ruta propia (`#/funcionario/<nombre>`) y
     no una entrada más de la barra de navegación. Se entra desde aquí y desde
     la cuadrícula de Roles, y el enlace se puede compartir. */
  const verFicha = (f) => setView?.("funcionario", { funcionario: f.nombre });

  /* Borrado reversible (F-P12): en vez de un modal de confirmación por clic,
     se elimina de inmediato y el aviso ofrece «Deshacer» durante 10 s. La red
     de seguridad no desaparece, solo deja de costar un paso en cada borrado. */
  const eliminar = (id) => {
    const indice = personas.findIndex((x) => x.id === id);
    if (indice < 0) return;
    const persona = personas[indice];
    setPersonas((prev) => prev.filter((x) => x.id !== id));
    registrarCambio(crearEntrada({ tipo: TIPO.BAJA, funcionario: persona }));
    conDeshacer(
      t("funcionarios.eliminado", { nombre: persona.nombre }),
      () => {
        setPersonas((prev) => reinsertarEn(prev, persona, indice));
        // La restauración se registra aparte en vez de borrar la baja: el
        // rastro debe contar lo que pasó, no dejarlo como si nunca hubiera
        // ocurrido.
        registrarCambio(crearEntrada({ tipo: TIPO.RESTAURACION, funcionario: persona }));
        exito(t("funcionarios.restaurado", { nombre: persona.nombre }));
      },
      { detalle: t("toast.puedeDeshacer") },
    );
  };

  /* Exporta LO QUE SE ESTÁ VIENDO, no la lista completa: el contador «N/M» está
     justo encima, así que es lo que la persona espera. El orden de las columnas
     es el del formulario, y es el que tendrá que respetar el import de RF4. */
  const BOOLEANAS = new Set(["disponibilidad", "policia", "brigada", "ong"]);
  const COLUMNAS_CSV = [
    "nombre", "cedula", "email", "puesto", "puestoOperativo", "condicion",
    "jornada", "modalidad", "resolucion", "contrato", "vencimiento", "ingreso",
    "disponibilidad", "policia", "brigada", "ong", "estado", "obs",
  ].map((clave) => ({
    clave,
    titulo: t(`funcionarios.col.${clave}`),
    ...(BOOLEANAS.has(clave) ? { tipo: "bool" } : {}),
  }));

  const exportarCSV = () => {
    if (filtrados.length === 0) {
      aviso(t("funcionarios.exportadoVacio"));
      return;
    }
    const ok = descargarArchivo(
      `funcionarios-${toLocalFileTimestamp()}.csv`,
      csvDescargable(filtrados, COLUMNAS_CSV),
      TIPO_CSV,
    );
    if (ok) exito(t("funcionarios.exportado", { n: filtrados.length }));
    else error(t("funcionarios.exportarError"));
  };

  /* ── Importación masiva (RF4) + respaldo automático (RF8) ──────────────
     Se calcula el plan completo y se enseña ANTES de tocar la lista. Aplicar
     es después un solo `setPersonas` con el resultado ya calculado. */
  const elegirArchivo = () => archivoRef.current?.click();

  const alElegirArchivo = (evento) => {
    const archivo = evento.target.files?.[0];
    // Se limpia el input siempre: si no, elegir el MISMO archivo dos veces
    // seguidas no dispara `change` y parecería que el botón no responde.
    evento.target.value = "";
    if (!archivo) return;
    if (archivo.size > MAX_CSV_BYTES) {
      error(t("funcionarios.importa.demasiadoGrande", { mb: Math.round(MAX_CSV_BYTES / 1024 / 1024) }));
      return;
    }
    const lector = new FileReader();
    lector.onerror = () => error(t("funcionarios.importa.errorLectura"));
    lector.onload = () => {
      try {
        prepararPrevia(String(lector.result ?? ""), archivo.name);
      } catch {
        error(t("funcionarios.importa.errorLectura"));
      }
    };
    lector.readAsText(archivo, "UTF-8");
  };

  const prepararPrevia = (texto, nombreArchivo) => {
    const lectura = filasAObjetos(parsearCSV(texto), COLUMNAS_CSV);
    // Sin nombre ni cédula no hay forma de saber a quién se refiere cada fila.
    const puedeIdentificar =
      !lectura.faltantes.includes(t("funcionarios.col.nombre")) ||
      !lectura.faltantes.includes(t("funcionarios.col.cedula"));
    if (!puedeIdentificar) {
      error(t("funcionarios.importa.sinIdentificar"));
      return;
    }
    if (lectura.objetos.length === 0) {
      aviso(t("funcionarios.importa.sinFilas"));
      return;
    }
    const plan = planificarImportacion(personas, lectura.objetos, nuevo());
    // Advertencias de dominio sobre el resultado, las mismas del formulario.
    const avisosPorFila = [...plan.nuevos, ...plan.actualizados]
      .map(({ fila, registro }) => ({ fila, mensajes: validarFuncionario(registro) }))
      .filter((x) => x.mensajes.length > 0)
      .sort((a, b) => a.fila - b.fila);
    setPrevia({ archivo: nombreArchivo, lectura, plan, avisosPorFila });
  };

  const aplicarImportacion = () => {
    if (!previa) return;
    // RF8: el respaldo se descarga ANTES de tocar nada, y si falla no se
    // importa. Es el mismo formato que acepta «Datos → Restaurar respaldo».
    // `personas` viene por prop y es la lista que se va a reemplazar; se pasa
    // explícitamente para que el respaldo sea exactamente lo que se pierde,
    // sin depender de que el contexto traiga la misma referencia.
    const backup = crearRespaldo({ ...ctx, personas }, "antes-de-importar-funcionarios");
    if (!descargarArchivo(backup.name, backup.text)) {
      error(t("funcionarios.importa.respaldoFallo"));
      return;
    }
    const { plan } = previa;
    setPersonas(plan.resultado);
    setPrevia(null);
    // Una entrada resumen y no una por fila: importar 200 fichas llenaría el
    // rastro entero y expulsaría todo lo anterior.
    registrarCambio(
      crearEntrada({
        tipo: TIPO.IMPORTACION,
        detalle: {
          archivo: previa.archivo,
          altas: plan.nuevos.length,
          cambios: plan.actualizados.length,
        },
      }),
    );
    exito(t("funcionarios.importa.hecho", {
      altas: plan.nuevos.length,
      cambios: plan.actualizados.length,
    }));
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
            <input
              ref={archivoRef}
              type="file"
              accept=".csv,text/csv"
              onChange={alElegirArchivo}
              className="hidden"
              aria-hidden="true"
              tabIndex={-1}
            />
            <button
              type="button"
              onClick={elegirArchivo}
              aria-label={t("funcionarios.importarAria")}
              className="inline-flex min-h-touch items-center gap-1 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              <Icon name="refresh" size={16} />
              <span className="hidden sm:inline">{t("funcionarios.importar")}</span>
              <span className="sm:hidden">{t("funcionarios.importarCorto")}</span>
            </button>
            <button
              type="button"
              onClick={exportarCSV}
              aria-label={t("funcionarios.exportarAria")}
              className="inline-flex min-h-touch items-center gap-1 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              <Icon name="file" size={16} />
              <span className="hidden sm:inline">{t("funcionarios.exportar")}</span>
              <span className="sm:hidden">{t("funcionarios.exportarCorto")}</span>
            </button>
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
                onVerFicha={setView ? () => verFicha(f) : null}
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
                    {setView && (
                      <button
                        onClick={() => verFicha(f)}
                        aria-label={t("funcionarios.verFichaDe", { nombre: f.nombre })}
                        className="inline-flex min-h-touch items-center rounded-lg px-3 py-1 font-semibold text-emerald-800 hover:bg-emerald-50"
                      >
                        {t("funcionarios.verFicha")}
                      </button>
                    )}
                    <button onClick={() => setModal({ ...f })} className="inline-flex min-h-touch items-center rounded-lg px-3 py-1 font-semibold text-blue-800 hover:bg-blue-50">
                      {t("acciones.editar")}
                    </button>
                    <button onClick={() => eliminar(f.id)} className="inline-flex min-h-touch items-center rounded-lg px-3 py-1 font-semibold text-red-800 hover:bg-red-50">
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
      {previa && (
        <Modal
          open
          onClose={() => setPrevia(null)}
          title={t("funcionarios.importa.titulo")}
          description={previa.archivo}
          size="md"
          actions={
            <div className="ml-auto flex flex-wrap gap-2">
              <button type="button" onClick={() => setPrevia(null)} className="min-h-touch rounded-xl border border-line bg-surface px-4 text-sm font-semibold">
                {t("acciones.cancelar")}
              </button>
              <button type="button" onClick={aplicarImportacion} className="min-h-touch rounded-xl bg-brand px-4 text-sm font-semibold text-brand-fg">
                {t("funcionarios.importa.confirmar")}
              </button>
            </div>
          }
        >
          <div className="space-y-3 text-sm">
            <p className="text-ink-muted">{t("funcionarios.importa.sub")}</p>
            <dl className="grid grid-cols-3 gap-2 rounded-xl bg-surface-alt p-3 text-center">
              <div>
                <dt className="text-xs font-semibold text-ink-muted">{t("funcionarios.importa.altas")}</dt>
                <dd className="text-2xl font-bold text-ok">{previa.plan.nuevos.length}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold text-ink-muted">{t("funcionarios.importa.cambios")}</dt>
                <dd className="text-2xl font-bold text-info">{previa.plan.actualizados.length}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold text-ink-muted">{t("funcionarios.importa.intactos")}</dt>
                <dd className="text-2xl font-bold text-ink">
                  {personas.length - previa.plan.actualizados.length}
                </dd>
              </div>
            </dl>
            <ul className="space-y-1 text-xs text-ink-muted">
              {previa.plan.omitidos.length > 0 && (
                <li>{t("funcionarios.importa.omitidas", { n: previa.plan.omitidos.length })}</li>
              )}
              {previa.lectura.filasVacias > 0 && (
                <li>{t("funcionarios.importa.vacias", { n: previa.lectura.filasVacias })}</li>
              )}
              {previa.plan.duplicados.length > 0 && (
                <li>{t("funcionarios.importa.duplicadas", { n: previa.plan.duplicados.length })}</li>
              )}
              {previa.lectura.faltantes.length > 0 && (
                <li>{t("funcionarios.importa.faltantes", { cols: previa.lectura.faltantes.join(", ") })}</li>
              )}
              {previa.lectura.desconocidas.length > 0 && (
                <li>{t("funcionarios.importa.desconocidas", { cols: previa.lectura.desconocidas.join(", ") })}</li>
              )}
            </ul>
            {previa.avisosPorFila.length > 0 && (
              <section aria-labelledby="importa-avisos" className="rounded-xl border border-amber-300 bg-amber-50 p-3">
                <h4 id="importa-avisos" className="text-[11px] font-bold uppercase tracking-wider text-amber-900">
                  {t("funcionarios.importa.avisosTitulo")}
                </h4>
                <ul className="mt-1 list-disc space-y-0.5 pl-5 text-xs text-amber-950">
                  {previa.avisosPorFila.map(({ fila, mensajes }) => (
                    <li key={fila}>{`${fila}: ${mensajes.join(" ")}`}</li>
                  ))}
                </ul>
                <p className="mt-1 text-xs font-semibold text-amber-800">{t("funcionarios.importa.avisosNota")}</p>
              </section>
            )}
            <p className="rounded-xl border border-line bg-surface-alt p-3 text-xs text-ink">
              {t("funcionarios.importa.respaldo")}
            </p>
          </div>
        </Modal>
      )}
    </section>
  );
}
