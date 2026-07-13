import { useEffect, useMemo, useRef, useState } from "react";
import Icon from "../../ui/Icon.jsx";
import { meses, dias } from "../../data/calendario.js";
import { opcionesModalidad } from "../../data/opciones.js";
import { isoFecha, primerDiaLaboral, dim, addMonths } from "../../domain/fechas.js";
import {
  rolKey,
  rolCfgKey,
  esRolActivo,
  generarValorPatron,
  categoriaDe,
  formatearCategoria,
} from "../../domain/roles.js";
import { actividadesEnDia } from "../../domain/actividades.js";
import { indexarReposiciones } from "../../domain/reposicion.js";
import { buildFeriadosSet } from "../../domain/feriados.js";
import { tieneCoberturaOficial } from "../../data/feriadosCR.js";
import { useApp } from "../../context/AppContext.jsx";
import { useT } from "../../i18n/useT.js";
import RoleCell from "./RoleCell.jsx";
import MenuCelda from "./MenuCelda.jsx";
import ConflictoModal from "./ConflictoModal.jsx";
import ActividadesDiaModal from "./ActividadesDiaModal.jsx";

// Tope del scroll continuo hacia adelante: 10 años (120 meses) desde el mes
// inicial. Los meses se cargan progresivamente (uno a la vez) a medida que
// el usuario se acerca al borde derecho de la tabla, para no renderizar de
// entrada miles de columnas.
const MAX_MESES = 120;

function monthTone(month) {
  return month % 2 === 0
    ? {
        band: "bg-emerald-50 text-emerald-950",
        day: "bg-emerald-50 text-emerald-950",
      }
    : {
        band: "bg-sky-50 text-sky-950",
        day: "bg-sky-50 text-sky-950",
      };
}

function rowId(puesto, nombre) {
  return `${puesto}|${nombre}`;
}

function nombreEnDosLineas(nombreCompleto) {
  const partes = String(nombreCompleto || "").trim().split(/\s+/).filter(Boolean);
  if (partes.length <= 1) {
    return { nombre: nombreCompleto, apellido: "" };
  }
  return {
    nombre: partes.slice(0, -1).join(" "),
    apellido: partes[partes.length - 1],
  };
}

export default function RolesMensualGrid({
  grupos,
  year,
  month,
  compact,
  focusDate,
  roleData,
  setRoleData,
  personas,
  actividadesPlan,
  setActividadesPlan,
  reposiciones = [],
  hj,
}) {
  const t = useT();
  const { reglas } = useApp();
  const { trabajadas, reposiciones: reposicionesDia } = useMemo(
    () => indexarReposiciones(reposiciones, hj),
    [reposiciones, hj],
  );
  const [editRows, setEditRows] = useState({});
  const [menu, setMenu] = useState(null);
  const [conflictoActivo, setConflictoActivo] = useState(null);
  const [actividadesDiaModal, setActividadesDiaModal] = useState(null);
  const scrollRef = useRef(null);
  const theadRef = useRef(null);
  const sentinelRef = useRef(null);
  const scrollHandledKeyRef = useRef(null);
  const [theadHeight, setTheadHeight] = useState(44);
  const [bodyHeight, setBodyHeight] = useState(0);
  const lastGroupRef = useRef(null);
  const [lastGroupHeight, setLastGroupHeight] = useState(0);
  const [grupoActivoNombre, setGrupoActivoNombre] = useState(null);
  const [mesesCargados, setMesesCargados] = useState(1);
  const hoy = new Date();

  // Meses actualmente cargados (arranca en el mes seleccionado, crece hacia
  // adelante). No se recarga desde `mesesCargados=1` si cambia el mes/año
  // seleccionado desde otra vista: cada mes inicial nuevo reinicia la carga.
  useEffect(() => {
    setMesesCargados(1);
  }, [year, month]);

  const rangoMeses = useMemo(
    () => Array.from({ length: mesesCargados }, (_, i) => addMonths(year, month, i)),
    [year, month, mesesCargados],
  );

  const feriadosPorAnio = useMemo(() => {
    const anios = [...new Set(rangoMeses.map((m) => m.year))];
    const mapa = new Map();
    anios.forEach((y) => mapa.set(y, buildFeriadosSet(y, reglas)));
    return mapa;
  }, [rangoMeses, reglas]);

  // Años dentro del rango cargado que SÍ están afectando el cálculo de
  // primer día laboral/patrones (regla activa) pero NO tienen calendario
  // oficial de feriados cargado todavía. No se trata como "sin feriados":
  // se avisa para que no se asuma silenciosamente que el año no tiene.
  const aniosSinCoberturaFeriados = useMemo(() => {
    if (!reglas?.aplicarFeriadosEnPrimerDiaLaboral) return [];
    return [...feriadosPorAnio.keys()].filter((y) => !tieneCoberturaOficial(y)).sort((a, b) => a - b);
  }, [feriadosPorAnio, reglas]);

  const inicioPorMes = useMemo(() => {
    const mapa = new Map();
    rangoMeses.forEach(({ year: y, month: m }) => {
      mapa.set(`${y}-${m}`, primerDiaLaboral(y, m, feriadosPorAnio.get(y)));
    });
    return mapa;
  }, [rangoMeses, feriadosPorAnio]);
  const inicioDeMes = (y, m) => inicioPorMes.get(`${y}-${m}`) ?? 1;

  // Lista plana y cronológica de todas las columnas de día actualmente
  // cargadas, cada una con su (year, month, dia) explícito — reemplaza al
  // antiguo arreglo `days` (1..N) de un solo mes.
  const columnas = useMemo(() => {
    const lista = [];
    rangoMeses.forEach(({ year: y, month: m }) => {
      const n = dim(y, m);
      for (let d = 1; d <= n; d++) lista.push({ year: y, month: m, dia: d });
    });
    return lista;
  }, [rangoMeses]);

  // Carga progresiva: al acercarse al borde derecho de lo ya cargado, se
  // agrega un mes más (hasta el tope de 10 años). El nodo centinela es el
  // mismo durante toda la vida del componente, así que el observer se crea
  // una sola vez.
  useEffect(() => {
    const contenedor = scrollRef.current;
    const sentinel = sentinelRef.current;
    if (!contenedor || !sentinel || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setMesesCargados((prev) => Math.min(prev + 1, MAX_MESES));
        }
      },
      { root: contenedor, rootMargin: "0px 300px 0px 0px" },
    );
    obs.observe(sentinel);
    return () => obs.disconnect();
  }, []);

  // Si `focusDate` apunta a un mes que todavía no está cargado (pero está
  // dentro del rango de 10 años hacia adelante), se adelanta la carga para
  // que el efecto de scroll de abajo pueda encontrarlo.
  useEffect(() => {
    if (!focusDate) return;
    const distancia = (focusDate.year - year) * 12 + (focusDate.month - month);
    if (distancia >= 0 && distancia < MAX_MESES) {
      setMesesCargados((prev) => Math.max(prev, distancia + 1));
    }
  }, [focusDate, year, month]);

  // Centra la tabla en `focusDate` (o en "hoy" si no hay uno) al entrar a la
  // vista o cuando cambia el objetivo. Se reintenta en cada carga de meses
  // (por si el mes objetivo todavía no estaba disponible), pero una vez
  // encontrado y centrado para un objetivo dado, no se repite — así el
  // scroll manual del usuario (que dispara más cargas progresivas) no se ve
  // interrumpido por un recentrado inesperado.
  useEffect(() => {
    const contenedor = scrollRef.current;
    if (!contenedor) return;
    const targetIso = focusDate
      ? isoFecha(focusDate.year, focusDate.month, focusDate.day)
      : isoFecha(hoy.getFullYear(), hoy.getMonth(), hoy.getDate());
    // El nonce distingue búsquedas repetidas de la misma fecha: sin él,
    // buscar dos veces el mismo día (tras desplazarse a otro lado) no
    // volvería a centrar la tabla.
    const targetKey = focusDate ? `${targetIso}#${focusDate.nonce ?? 0}` : targetIso;
    if (scrollHandledKeyRef.current === targetKey) return;
    const objetivo = contenedor.querySelector(`[data-fecha="${targetIso}"]`);
    if (!objetivo) {
      if (!focusDate) {
        scrollHandledKeyRef.current = targetKey;
        contenedor.scrollTo({ left: 0, behavior: "auto" });
      }
      return;
    }
    scrollHandledKeyRef.current = targetKey;
    contenedor.scrollTo({
      left: Math.max(0, objetivo.offsetLeft - contenedor.clientWidth / 2 + objetivo.clientWidth / 2),
      behavior: focusDate ? "smooth" : "auto",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusDate, columnas]);

  // Mide el alto real del encabezado de días (varía por breakpoint) para
  // que el nombre de puesto se congele justo debajo, sin solaparse.
  useEffect(() => {
    const el = theadRef.current;
    if (!el) return;
    const medir = () => setTheadHeight(el.getBoundingClientRect().height);
    medir();
    const ro = new ResizeObserver(medir);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Mide el alto visible del panel para poder agregar, al final, el relleno
  // justo (ver más abajo) que permite que hasta el último puesto —aunque
  // tenga pocos funcionarios— llegue a ocupar la franja congelada.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const medir = () => setBodyHeight(el.clientHeight);
    medir();
    const ro = new ResizeObserver(medir);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Mide el alto real del último puesto: el relleno solo debe cubrir lo que
  // falte para llegar a la franja congelada, no el alto completo del panel
  // (si no, al llegar al final solo se vería un espacio en blanco).
  useEffect(() => {
    const el = lastGroupRef.current;
    if (!el) {
      setLastGroupHeight(0);
      return;
    }
    const medir = () => setLastGroupHeight(el.getBoundingClientRect().height);
    medir();
    const ro = new ResizeObserver(medir);
    ro.observe(el);
    return () => ro.disconnect();
  }, [grupos]);

  // El nombre de puesto vive en la única celda superior izquierda (congelada
  // junto a los días), así que no puede resolverse con sticky puro: se
  // pregunta al navegador qué fila está renderizada justo debajo del
  // encabezado congelado (más robusto que calcular posiciones a mano,
  // porque funciona igual aunque el último grupo sea más corto que el
  // alto visible y nunca "alcance" la línea de congelado).
  useEffect(() => {
    const contenedor = scrollRef.current;
    if (!contenedor) return;
    const actualizar = () => {
      const contRect = contenedor.getBoundingClientRect();
      const x = contRect.left + 10;
      const y = contRect.top + theadHeight + 4;
      const el = document.elementFromPoint(x, y);
      const tbody = el ? el.closest("tbody[data-grupo]") : null;
      if (tbody) setGrupoActivoNombre(tbody.dataset.grupo);
    };
    actualizar();
    contenedor.addEventListener("scroll", actualizar, { passive: true });
    return () => contenedor.removeEventListener("scroll", actualizar);
  }, [grupos, theadHeight]);

  const grupoActivo = grupos.find((g) => g.nombre === grupoActivoNombre) || grupos[0];

  const toggleEdit = (puesto, nombre) =>
    setEditRows((prev) => ({ ...prev, [rowId(puesto, nombre)]: !prev[rowId(puesto, nombre)] }));

  const getCfg = (grupo, persona, y, m) =>
    roleData[rolCfgKey(y, m, grupo.nombre, persona)] ||
    personas.find((f) => f.nombre === persona)?.modalidad ||
    "10x5";

  // La modalidad configurable desde la fila se lee/escribe siempre en el mes
  // inicial (igual que antes de soportar varios meses); "Aplicar" reusa ese
  // mismo valor para regenerar el patrón en todos los meses cargados.
  const setCfg = (grupo, persona, valor) =>
    setRoleData((prev) => ({ ...prev, [rolCfgKey(year, month, grupo.nombre, persona)]: valor }));

  const getCelda = (grupo, persona, y, m, dia) =>
    roleData[rolKey(y, m, grupo.nombre, persona, dia)] ??
    generarValorPatron(getCfg(grupo, persona, y, m), dia, inicioDeMes(y, m), y, m);

  // "Aplicar" solo llena el mes inicial (igual que antes de soportar varios
  // meses en la misma tabla): un solo click nunca debe sobrescribir de golpe
  // datos reales importados de otros meses ya cargados (10 años de rango).
  // Los meses fuera del inicial siguen mostrando el patrón generado
  // dinámicamente vía `getCelda` hasta que el usuario los edite ahí mismo.
  const aplicarPatron = (grupo, persona) => {
    const modalidad = getCfg(grupo, persona, year, month);
    const inicioMes = inicioDeMes(year, month);
    const cambios = {};
    for (let dia = 1; dia <= dim(year, month); dia += 1) {
      cambios[rolKey(year, month, grupo.nombre, persona, dia)] = generarValorPatron(modalidad, dia, inicioMes, year, month);
    }
    setRoleData((prev) => ({ ...prev, ...cambios }));
  };

  // Renumera solo dentro del mes (y, m) del día editado — nunca a través de
  // varios meses. Antes de este límite explícito, editar una sola celda
  // recorría TODO el rango cargado (hasta 10 años) y reescribía cada mes ya
  // cargado, convirtiendo códigos especiales importados (p. ej. "O-F",
  // "LA") en categorías renumeradas fuera del mes que el usuario realmente
  // quiso tocar.
  const renumerarFila = (grupo, persona, y, m, diaEditado, categoria) => {
    const modalidad = getCfg(grupo, persona, y, m);
    const inicioMes = inicioDeMes(y, m);
    const diasDelMes = dim(y, m);
    const categorias = {};
    for (let d = 1; d <= diasDelMes; d += 1) {
      categorias[d] = categoriaDe(getCelda(grupo, persona, y, m, d));
    }
    categorias[diaEditado] = categoria;
    const cambios = {};
    let categoriaAnterior = null;
    let consecutivo = 0;
    for (let d = 1; d <= diasDelMes; d += 1) {
      const cat = categorias[d] || "";
      const key = rolKey(y, m, grupo.nombre, persona, d);
      if (!cat) {
        categoriaAnterior = null;
        consecutivo = 0;
        cambios[key] = "";
        continue;
      }
      if (cat !== categoriaAnterior) {
        categoriaAnterior = cat;
        consecutivo = 1;
      } else {
        consecutivo += 1;
      }
      cambios[key] = formatearCategoria(cat, consecutivo, modalidad);
    }
    setRoleData((prev) => ({ ...prev, ...cambios }));
  };

  const seleccionarMenu = (valor) => {
    if (!menu) return;
    renumerarFila(menu.grupo, menu.persona, menu.year, menu.month, menu.dia, valor);
    setMenu(null);
  };

  const abrirConflicto = (grupo, nombre, y, m, d, val) => {
    const iso = isoFecha(y, m, d);
    const acts = actividadesEnDia(actividadesPlan || [], iso).filter((a) => (a.funcionarios || []).includes(nombre));
    setConflictoActivo({
      grupo,
      persona: nombre,
      pi: 0,
      dia: d,
      valor: val,
      iso,
      acts,
      esInicio: d === inicioDeMes(y, m),
      year: y,
      month: m,
    });
  };

  const totalDias = columnas.length;

  return (
    <div className="overflow-hidden rounded-lg bg-surface">
      {aniosSinCoberturaFeriados.length > 0 && (
        <div
          role="status"
          className="flex items-start gap-2 border-b border-warning/40 bg-warning-soft px-3 py-2 text-[11px] leading-snug text-warning-fg"
        >
          <Icon name="alert" size={14} className="mt-0.5 shrink-0" />
          <p>
            Calendario de feriados sin validar oficialmente para {aniosSinCoberturaFeriados.join(", ")}.
            El primer día laboral y los patrones de esos años se calculan sin feriados hasta cargar el
            comunicado MTSS correspondiente.
          </p>
        </div>
      )}
      <div
        ref={scrollRef}
        className="pnlq-roles-scroll max-h-[62vh] overflow-auto bg-surface sm:max-h-[68vh]"
        style={{ paddingBottom: Math.max(0, bodyHeight - theadHeight - lastGroupHeight) }}
      >
        <table
          className={`border-separate border-spacing-0 text-[11px] sm:text-xs ${
            compact ? "min-w-[1040px] lg:min-w-[1140px]" : "min-w-[1160px] lg:min-w-[1380px]"
          }`}
        >
          <thead ref={theadRef}>
            <tr>
              <th
                rowSpan={2}
                className={`sticky top-0 left-0 z-40 min-w-[5.5rem] max-w-[5.5rem] border-b border-r-2 border-slate-300 p-1.5 text-left text-[11px] font-semibold uppercase shadow-[2px_2px_8px_rgba(15,23,42,0.08)] sm:min-w-[10rem] sm:max-w-[10rem] sm:p-3 sm:text-xs lg:min-w-[13rem] lg:max-w-[13rem] ${grupoActivo ? grupoActivo.color : "bg-surface text-ink-muted"}`}
              >
                {grupoActivo ? grupoActivo.nombre.replace(/^Puesto\s+/, "") : ""}
              </th>
              {/* Una barra delgada de mes por cada mes cargado: siempre
                  visible sobre el encabezado de días (congelada junto con
                  el resto del thead) para saber a qué mes pertenecen las
                  fechas visibles aunque se haya desplazado la tabla
                  lateralmente a través de varios meses/años. Cada celda
                  ocupa todo el ancho de SU mes (colSpan), pero el texto va
                  en un span sticky con su propio `left` (alineado justo
                  después de la columna congelada de nombre) para que se
                  mantenga dentro del viewport mientras ese mes esté en
                  pantalla. */}
              {rangoMeses.map(({ year: y, month: m }) => (
                <th
                  key={`${y}-${m}`}
                  colSpan={dim(y, m)}
                  className="sticky top-0 z-30 h-5 border-b border-r-2 border-slate-600 bg-slate-800 p-0 text-white sm:h-6"
                >
                  <span className="sticky left-[5.5rem] flex h-5 w-fit items-center px-2 text-[9px] font-bold uppercase tracking-widest sm:left-[10rem] sm:h-6 sm:text-[10px] lg:left-[13rem]">
                    {meses[m]} {y}
                  </span>
                </th>
              ))}
            </tr>
            <tr>
              {columnas.map((col) => {
                const { year: y, month: m, dia: d } = col;
                const iso = isoFecha(y, m, d);
                const dow = new Date(y, m, d).getDay();
                const isWeekend = dow === 0 || dow === 6;
                const isToday = y === hoy.getFullYear() && m === hoy.getMonth() && d === hoy.getDate();
                const isFocused = focusDate?.year === y && focusDate?.month === m && focusDate?.day === d;
                const tone = monthTone(m);
                return (
                  <th
                    key={iso}
                    data-fecha={iso}
                    aria-current={isToday ? "date" : undefined}
                    className={`sticky top-5 z-30 border-b p-0.5 text-center font-semibold sm:top-6 sm:p-1 ${
                      isToday
                        ? "border-l-4 border-r-4 border-b-4 border-amber-400 bg-slate-900 text-white"
                        : isFocused
                          ? "border-r border-slate-200 bg-amber-100 text-amber-950 ring-2 ring-inset ring-amber-400"
                        : isWeekend
                          ? "border-r border-slate-200 bg-slate-100 text-slate-900"
                          : `border-r border-slate-200 ${tone.day}`
                    }`}
                  >
                    {/* "Hoy" en verde no destacaba: la tabla está dominada por
                        celdas de turno emerald. Se marca con la única
                        combinación que no compite con ningún código de rol:
                        encabezado negro + insignia y bordes amarillo vivo,
                        que continúan (4px) a lo largo de toda la columna. */}
                    <div
                      className={`mx-auto flex h-9 w-7 flex-col items-center justify-center rounded-lg sm:h-10 sm:w-9 ${
                        isToday ? "bg-amber-400 shadow-sm" : "bg-white/80"
                      }`}
                    >
                      <span className={`text-[9px] uppercase leading-none ${isToday ? "font-bold text-slate-900" : "text-slate-500"}`}>
                        {dias[dow]}
                      </span>
                      <span className={`mt-0.5 text-[12px] leading-none ${isToday ? "font-bold text-slate-950" : "font-semibold text-slate-950"}`}>
                        {d}
                      </span>
                    </div>
                  </th>
                );
              })}
              {/* Centinela invisible: al entrar en vista dispara la carga
                  del siguiente mes (ver IntersectionObserver arriba). */}
              <th ref={sentinelRef} aria-hidden="true" className="w-px p-0" />
            </tr>
          </thead>
          {grupos.length === 0 ? (
            <tbody>
              <tr>
                <td
                  className="sticky left-0 z-10 min-w-[5.5rem] max-w-[5.5rem] border-b border-r border-line bg-surface p-2 text-xs font-bold text-ink-muted shadow-[2px_0_8px_rgba(15,23,42,0.06)] sm:min-w-[10rem] sm:max-w-[10rem] lg:min-w-[13rem] lg:max-w-[13rem]"
                  colSpan={totalDias + 1}
                >
                  {t("roles.sinFuncionariosFiltro")}
                </td>
              </tr>
            </tbody>
          ) : (
            grupos.map((grupo, idx) => (
              <RowsGrupo
                key={grupo.nombre}
                grupo={grupo}
                columnas={columnas}
                compact={compact}
                editRows={editRows}
                toggleEdit={toggleEdit}
                getCfg={getCfg}
                setCfg={setCfg}
                getCelda={getCelda}
                aplicarPatron={aplicarPatron}
                abrirConflicto={abrirConflicto}
                setMenu={setMenu}
                inicioDeMes={inicioDeMes}
                actividadesPlan={actividadesPlan}
                trabajadas={trabajadas}
                reposicionesDia={reposicionesDia}
                registerBodyRef={idx === grupos.length - 1 ? lastGroupRef : undefined}
                hoy={hoy}
                year={year}
                month={month}
                t={t}
              />
            ))
          )}
        </table>
      </div>

      {menu && <MenuCelda data={menu} cerrar={() => setMenu(null)} seleccionar={seleccionarMenu} />}
      {conflictoActivo && (
        <ConflictoModal
          data={conflictoActivo}
          cerrar={() => setConflictoActivo(null)}
          onModificarRol={() => {
            const d = conflictoActivo;
            setConflictoActivo(null);
            setMenu({
              grupo: d.grupo,
              persona: d.persona,
              pi: 0,
              dia: d.dia,
              valor: d.valor,
              esInicio: d.esInicio,
              year: d.year,
              month: d.month,
            });
          }}
          onModificarActividad={() => {
            setActividadesDiaModal({ persona: conflictoActivo.persona, iso: conflictoActivo.iso });
            setConflictoActivo(null);
          }}
        />
      )}
      {actividadesDiaModal && (
        <ActividadesDiaModal
          funcionario={actividadesDiaModal.persona}
          iso={actividadesDiaModal.iso}
          allActividadesPlan={actividadesPlan || []}
          personas={personas}
          setActividadesPlan={setActividadesPlan}
          cerrar={() => setActividadesDiaModal(null)}
        />
      )}
    </div>
  );
}

function RowsGrupo({
  grupo,
  columnas,
  compact,
  editRows,
  toggleEdit,
  getCfg,
  setCfg,
  getCelda,
  aplicarPatron,
  abrirConflicto,
  setMenu,
  inicioDeMes,
  actividadesPlan,
  trabajadas,
  reposicionesDia,
  registerBodyRef,
  hoy,
  year,
  month,
  t,
}) {
  return (
    <tbody data-grupo={grupo.nombre} ref={registerBodyRef}>
      {/* Divisor de puesto: banda a todo lo ancho con el nombre del grupo,
          para que el cambio de puesto se lea en el flujo de la tabla (la
          celda congelada superior ya muestra el puesto activo, pero al
          desplazarse rápido la frontera entre grupos no era evidente).
          El nombre va en un span sticky para seguir visible aunque la
          tabla esté desplazada lateralmente. */}
      <tr className="pnlq-roles-divisor">
        <td colSpan={columnas.length + 1} className={`border-y-2 border-line-strong p-0 ${grupo.color}`}>
          <span className="sticky left-0 flex h-7 w-fit max-w-full items-center px-2 text-[10px] font-bold uppercase tracking-widest sm:h-8 sm:px-3 sm:text-[11px]">
            {grupo.nombre}
          </span>
        </td>
      </tr>
      {grupo.funcionarios.map((nombre) => {
        const editing = !!editRows[rowId(grupo.nombre, nombre)];
        const modalidad = getCfg(grupo, nombre, year, month);
        const nombrePartes = nombreEnDosLineas(nombre);
        return (
          <tr key={`${grupo.nombre}-${nombre}`} className={editing ? "bg-brand-soft/50" : "bg-surface"}>
            <td
              className="sticky left-0 z-10 min-w-[5.5rem] max-w-[5.5rem] border-r border-b border-line bg-surface p-0.5 align-top shadow-[2px_0_8px_rgba(15,23,42,0.06)] sm:min-w-[10rem] sm:max-w-[10rem] sm:p-2 lg:min-w-[13rem] lg:max-w-[13rem]"
            >
              <span className="pnlq-print-only font-semibold text-black">{nombre}</span>
              <div className="pnlq-no-print space-y-1 sm:space-y-2">
                <button
                  type="button"
                  onClick={() => toggleEdit(grupo.nombre, nombre)}
                  className="flex min-h-10 w-full items-center rounded-lg border border-line bg-surface px-0.5 py-1 text-left text-[11px] font-semibold leading-tight text-ink hover:bg-surface-alt sm:px-3 sm:py-2 sm:text-xs"
                >
                  <span className="flex w-full items-center justify-between gap-1">
                    <span className="min-w-0 leading-[1.05]">
                      <span className="block truncate">{nombrePartes.nombre}</span>
                      {nombrePartes.apellido && <span className="block truncate">{nombrePartes.apellido}</span>}
                    </span>
                    <Icon name={editing ? "unlock" : "lock"} size={14} className="shrink-0 text-ink-muted" />
                  </span>
                </button>
                {editing && (
                  <div className="rounded-xl border border-brand/40 bg-brand-soft/60 p-1.5 sm:rounded-2xl sm:p-2">
                    <label className="mb-1 block text-[9px] font-bold uppercase text-ink sm:text-[10px]">
                      {t("roles.editarTipoRol")}
                    </label>
                    <div className="flex flex-col gap-1.5 sm:flex-row sm:gap-2">
                      <select
                        value={modalidad}
                        onChange={(e) => setCfg(grupo, nombre, e.target.value)}
                        className="min-w-0 flex-1 rounded-lg border border-brand/50 bg-surface px-2 py-1 text-[11px] font-bold text-ink sm:text-xs"
                      >
                        {opcionesModalidad.map((x) => (
                          <option key={x}>{x}</option>
                        ))}
                      </select>
                      <button
                        type="button"
                        onClick={() => aplicarPatron(grupo, nombre)}
                        className="rounded-lg bg-brand px-2 py-1 text-[10px] font-semibold text-brand-fg sm:text-[11px]"
                      >
                        {t("roles.aplicar")}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </td>
            {columnas.map((col) => {
              const { year: y, month: m, dia: d } = col;
              const dow = new Date(y, m, d).getDay();
              const iso = isoFecha(y, m, d);
              const val = getCelda(grupo, nombre, y, m, d);
              const tieneActividad = actividadesEnDia(actividadesPlan || [], iso).some((a) =>
                (a.funcionarios || []).includes(nombre),
              );
              const conflicto = tieneActividad && !esRolActivo(val);
              const esHoy = y === hoy.getFullYear() && m === hoy.getMonth() && d === hoy.getDate();
              const esInicio = editing && d === inicioDeMes(y, m);
              return (
                <RoleCell
                  key={`${grupo.nombre}-${nombre}-${iso}`}
                  value={val}
                  compact={compact}
                  editable={editing}
                  finde={dow === 0 || dow === 6}
                  esInicio={esInicio}
                  conflicto={conflicto}
                  repoTrabajada={trabajadas[`${nombre}|${iso}`]}
                  repoReposicion={reposicionesDia[`${nombre}|${iso}`]}
                  esHoy={esHoy}
                  onOpen={() =>
                    editing &&
                    setMenu({ grupo, persona: nombre, pi: 0, dia: d, valor: val, esInicio, year: y, month: m })
                  }
                  onConflicto={() => abrirConflicto(grupo, nombre, y, m, d, val)}
                />
              );
            })}
          </tr>
        );
      })}
      <tr>
        <td className="sticky left-0 z-10 min-w-[5.5rem] max-w-[5.5rem] border-b border-r border-line bg-surface-alt p-1.5 text-[10px] font-bold uppercase text-ink-muted shadow-[2px_0_8px_rgba(15,23,42,0.06)] sm:min-w-[10rem] sm:max-w-[10rem] sm:p-3 sm:text-xs lg:min-w-[13rem] lg:max-w-[13rem]">
          {t("roles.cantidadEnTurno")}
        </td>
        {columnas.map((col) => {
          const { year: y, month: m, dia: d } = col;
          const iso = isoFecha(y, m, d);
          const count = grupo.funcionarios.reduce(
            (acc, nombre) => (esRolActivo(getCelda(grupo, nombre, y, m, d)) ? acc + 1 : acc),
            0,
          );
          const esHoy = y === hoy.getFullYear() && m === hoy.getMonth() && d === hoy.getDate();
          return (
            <td
              key={`${grupo.nombre}-cantidad-${iso}`}
              className={`border-b border-b-line bg-surface p-2 text-center font-semibold text-ink ${
                esHoy ? "border-l-4 border-r-4 border-l-amber-400 border-r-amber-400" : "border-r border-r-line"
              }`}
            >
              {count}
            </td>
          );
        })}
      </tr>
    </tbody>
  );
}
