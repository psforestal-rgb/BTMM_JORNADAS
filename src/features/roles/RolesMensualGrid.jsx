import { Fragment, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import Icon from "../../ui/Icon.jsx";
import { meses, dias, diasLargos } from "../../data/calendario.js";
import { opcionesModalidad } from "../../data/opciones.js";
import { isoFecha, primerDiaLaboral, dim, addMonths } from "../../domain/fechas.js";
import {
  rolKey,
  rolCfgKey,
  esRolActivo,
  generarValorPatron,
  generarPatronRangoContinuo,
  ultimoDiaProgramado,
  categoriaDe,
  formatearCategoria,
} from "../../domain/roles.js";
import {
  actividadesEnDia,
  indexarActividadesPorPersonaDia,
  tieneActividadEse,
  tieneVisitEse,
} from "../../domain/actividades.js";
import { puestoDelRol } from "../../domain/roles.js";
import { dudaDeFuente } from "../../data/conflictosRol2026.js";
import { puestosDeFuncionario } from "../../domain/historialPuestos.js";
import { conflictoDePersonaDia } from "../../domain/conflictos.js";
import { destinoDeTecla, filasDeGrupos, TECLAS } from "./navegacionCuadricula.js";
import { indexarReposiciones } from "../../domain/reposicion.js";
import { buildFeriadosSet } from "../../domain/feriados.js";
import { tieneCoberturaOficial } from "../../data/feriadosCR.js";
import { useApp } from "../../context/AppContext.jsx";
import { useT } from "../../i18n/useT.js";
import RoleCell from "./RoleCell.jsx";
import MenuCelda from "./MenuCelda.jsx";
import ConflictoModal from "./ConflictoModal.jsx";
import ActividadesDiaModal from "./ActividadesDiaModal.jsx";
import AplicarPatronModal from "./AplicarPatronModal.jsx";

// Tope del scroll continuo hacia adelante: 10 años (120 meses) desde el mes
// inicial. Los meses se cargan progresivamente (uno a la vez) a medida que
// el usuario se acerca al borde derecho de la tabla, para no renderizar de
// entrada miles de columnas.
const MAX_MESES = 120;

// Identificador del tbody de resumen general (no es un puesto real): la
// esquina congelada lo detecta para mostrar "Resumen" al desplazarse hasta él.
const GRUPO_RESUMEN = "__resumen__";

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

// "YYYY-MM-DD" → { year, month, day } con month 0-indexado (o null).
function parseISO(iso) {
  const [y, m, d] = String(iso || "").split("-").map(Number);
  if (!y || !m || !d) return null;
  return { year: y, month: m - 1, day: d };
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
  setView,
}) {
  const t = useT();
  const { reglas } = useApp();
  const { trabajadas, reposiciones: reposicionesDia } = useMemo(
    () => indexarReposiciones(reposiciones, hj),
    [reposiciones, hj],
  );
  /* VF1: acceso a la ficha individual. Se pasa como callback ya resuelto para
     que la fila no tenga que conocer la forma de la navegación. */
  const verFicha = setView ? (nombre) => setView("funcionario", { funcionario: nombre }) : null;
  const [editRows, setEditRows] = useState({});
  const [menu, setMenu] = useState(null);
  const [conflictoActivo, setConflictoActivo] = useState(null);
  const [actividadesDiaModal, setActividadesDiaModal] = useState(null);
  const [patronModal, setPatronModal] = useState(null);
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
  /* Estable durante la vida del componente. Antes se creaba un `Date` nuevo en
     cada render, lo que impedía memoizar nada que dependiera de «hoy». */
  const hoy = useMemo(() => new Date(), []);

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
  // Primer día laboral de un mes. Para meses precargados usa el mapa; para
  // cualquier otro (p. ej. el día anterior a la fecha inicial de un llenado
  // por rango, que puede caer fuera del rango cargado) lo calcula al vuelo
  // con los feriados de ese año.
  const inicioDeMes = (y, m) =>
    inicioPorMes.get(`${y}-${m}`) ??
    primerDiaLaboral(y, m, feriadosPorAnio.get(y) ?? buildFeriadosSet(y, reglas));

  // Lista plana y cronológica de todas las columnas de día actualmente
  // cargadas, cada una con su (year, month, dia) explícito — reemplaza al
  // antiguo arreglo `days` (1..N) de un solo mes.
  /* Cada columna trae ya calculado todo lo que depende SOLO de ella: la fecha
     ISO, el día de la semana, si es hoy y el primer día laboral de su mes.
     Antes cada una de estas cuatro cosas se recalculaba dentro de CADA fila,
     es decir una vez por funcionario y por día. */
  const columnas = useMemo(() => {
    const lista = [];
    const anioHoy = hoy.getFullYear();
    const mesHoy = hoy.getMonth();
    const diaHoy = hoy.getDate();
    rangoMeses.forEach(({ year: y, month: m }) => {
      const n = dim(y, m);
      const inicioMes = inicioPorMes.get(`${y}-${m}`);
      for (let d = 1; d <= n; d++) {
        const dow = new Date(y, m, d).getDay();
        lista.push({
          // Posición absoluta dentro del rango cargado. La necesita
          // `aria-colindex`: con los meses lejanos colapsados, la posición de
          // la celda en la fila ya no dice en qué columna está de verdad.
          indice: lista.length,
          year: y,
          month: m,
          dia: d,
          iso: isoFecha(y, m, d),
          dow,
          finde: dow === 0 || dow === 6,
          esHoy: y === anioHoy && m === mesHoy && d === diaHoy,
          inicioMes,
          // Para el nombre accesible de la celda: «martes 7 de julio de 2026».
          // En minúsculas: el diccionario los guarda en mayúsculas para la
          // interfaz, y algunos lectores de pantalla deletrean las palabras
          // escritas así en vez de leerlas.
          fechaLegible: `${diasLargos[dow].toLocaleLowerCase("es")} ${d} de ${meses[m].toLocaleLowerCase("es")} de ${y}`,
        });
      }
    });
    return lista;
  }, [rangoMeses, inicioPorMes, hoy]);

  /* Quién tiene actividad cada día, en un índice construido una sola vez.
     La consulta que había aquí (`actividadesEnDia(...).some(...)`) recorría el
     plan entero y creaba un arreglo nuevo POR CELDA. */
  const indiceActividades = useMemo(
    () => indexarActividadesPorPersonaDia(actividadesPlan),
    [actividadesPlan],
  );

  /* ── Virtualización por meses (A1) ────────────────────────────────────────
     El cuerpo de la tabla solo pinta las celdas de los meses cercanos a lo que
     se está viendo; los demás se sustituyen por UNA celda vacía con `colSpan`
     por mes y fila. Medido en Chromium: tras desplazarse ocho meses el cuerpo
     pasaba de 836 a 6348 celdas, y la carga progresiva llega hasta diez años.

     Se virtualiza por MESES y solo el CUERPO, nunca el encabezado, y esa es la
     decisión que hace que el truco sea seguro: el ancho de cada columna lo fija
     la fila de días del encabezado, que sigue completa. Si se colapsara también
     el encabezado habría que pasar la tabla a `table-layout: fixed` con un
     `colgroup`, y eso sí rompería la columna congelada de nombres y las barras
     de mes con `colSpan`.

     El ancho total de la tabla no cambia —la celda con `colSpan` ocupa lo mismo
     que las celdas que sustituye—, así que la posición del scroll se conserva y
     no hay saltos. */
  const [anchoColumna, setAnchoColumna] = useState(0);
  const [anchoNombre, setAnchoNombre] = useState(0);
  const [ventana, setVentana] = useState({ desde: 0, hasta: Infinity });
  const [imprimiendo, setImprimiendo] = useState(false);

  // Mide una columna de día y la columna congelada de nombres. Se repite al
  // cambiar el tamaño de la ventana porque el ancho depende del breakpoint.
  useEffect(() => {
    const medir = () => {
      /* Se mide una celda del CUERPO y no del encabezado. En pantallas
         anchas las dos miden lo mismo, pero en móvil la celda de rol es más
         ancha que la del encabezado, así que es ella la que fija el ancho de
         la columna. Medir el encabezado dejaría el hueco corto y la tabla
         encogería al colapsar un mes, moviendo el contenido bajo el dedo. */
      const celda = scrollRef.current?.querySelector("td[data-celda-rol]");
      const th = theadRef.current?.querySelector("th[data-fecha]");
      const nombreTh = theadRef.current?.querySelector("th[data-col-nombre]");
      const ancho = (celda || th) ? (celda || th).getBoundingClientRect().width : 0;
      const anchoN = nombreTh ? nombreTh.getBoundingClientRect().width : 0;
      setAnchoColumna((prev) => (Math.abs(prev - ancho) > 0.05 ? ancho : prev));
      setAnchoNombre((prev) => (Math.abs(prev - anchoN) > 0.5 ? anchoN : prev));
    };
    medir();
    window.addEventListener("resize", medir);
    return () => window.removeEventListener("resize", medir);
  }, [compact, columnas.length]);

  /* Al imprimir hace falta la tabla ENTERA: el rol impreso es un entregable de
     la administración, y una virtualización que no se desactive dejaría en el
     papel solo los meses que estaban en pantalla. */
  useEffect(() => {
    if (typeof window.matchMedia !== "function") return undefined;
    const mq = window.matchMedia("print");
    setImprimiendo(mq.matches);
    const alCambiar = (e) => setImprimiendo(e.matches);
    // Safari < 14 y algunos motores antiguos solo tienen `addListener`.
    if (typeof mq.addEventListener === "function") mq.addEventListener("change", alCambiar);
    else if (typeof mq.addListener === "function") mq.addListener(alCambiar);
    const antes = () => setImprimiendo(true);
    const despues = () => setImprimiendo(false);
    window.addEventListener("beforeprint", antes);
    window.addEventListener("afterprint", despues);
    return () => {
      if (typeof mq.removeEventListener === "function") mq.removeEventListener("change", alCambiar);
      else if (typeof mq.removeListener === "function") mq.removeListener(alCambiar);
      window.removeEventListener("beforeprint", antes);
      window.removeEventListener("afterprint", despues);
    };
  }, []);

  /* Recalcula la ventana visible en cada scroll, con un margen de una pantalla
     a cada lado. No lee el DOM columna por columna: los días son todos del
     mismo ancho, así que la posición de cada uno es aritmética. */
  useEffect(() => {
    const contenedor = scrollRef.current;
    if (!contenedor || !anchoColumna) return undefined;
    let pedido = null;
    const recalcular = () => {
      pedido = null;
      const ancho = contenedor.clientWidth || 0;
      const izquierda = contenedor.scrollLeft - anchoNombre;
      const desde = Math.max(0, Math.floor((izquierda - ancho) / anchoColumna));
      const hasta = Math.ceil((izquierda + ancho * 2) / anchoColumna);
      setVentana((prev) => (prev.desde === desde && prev.hasta === hasta ? prev : { desde, hasta }));
    };
    const alDesplazar = () => {
      if (pedido != null) return;
      pedido = window.requestAnimationFrame(recalcular);
    };
    recalcular();
    contenedor.addEventListener("scroll", alDesplazar, { passive: true });
    return () => {
      contenedor.removeEventListener("scroll", alDesplazar);
      if (pedido != null) window.cancelAnimationFrame(pedido);
    };
  }, [anchoColumna, anchoNombre, columnas.length]);

  /* Meses que se pintan enteros. Un mes entra si CUALQUIERA de sus días cae en
     la ventana; así nunca se parte un mes por la mitad y la celda de hueco
     coincide exactamente con la barra de mes del encabezado. */
  const mesesVisibles = useMemo(() => {
    const visibles = new Set();
    let indice = 0;
    for (const { year: y, month: m } of rangoMeses) {
      const n = dim(y, m);
      if (indice < ventana.hasta && indice + n > ventana.desde) visibles.add(`${y}-${m}`);
      indice += n;
    }
    // Sin medición todavía (primer render, jsdom sin layout) no se virtualiza
    // nada: es preferible pintar de más que pintar una tabla vacía.
    if (visibles.size === 0) rangoMeses.forEach(({ year: y, month: m }) => visibles.add(`${y}-${m}`));
    return visibles;
  }, [rangoMeses, ventana]);

  /* Ancho EXACTO de cada mes, medido mientras estaba pintado.
     Las columnas no son todas igual de anchas: el ancho lo fija el contenido
     más largo de cada una («T10» ocupa más que «L1»), así que un ancho medio
     por columna se queda corto en unos meses y largo en otros, y la tabla se
     movía bajo el dedo al colapsar. Se comprobó en Chromium que un mes pintado
     mide lo mismo esté o no colapsado el resto, así que guardar su medida y
     devolvérsela al hueco reproduce la geometría exacta. */
  const anchosMes = useRef(new Map());
  useLayoutEffect(() => {
    const cabecera = theadRef.current;
    if (!cabecera) return;
    for (const th of cabecera.querySelectorAll("th[data-mes]")) {
      if (!mesesVisibles.has(th.dataset.mes)) continue;
      const ancho = th.getBoundingClientRect().width;
      if (ancho > 0) anchosMes.current.set(th.dataset.mes, ancho);
    }
  });

  /* ── Navegación con teclado (A-P12) ──────────────────────────────────────
     Patrón ARIA de cuadrícula: una sola celda en la secuencia de tabulación y
     las flechas para moverse. Las celdas usan `aria-disabled` y no `disabled`,
     así que se pueden recorrer aunque la fila esté bloqueada: leer el rol con
     el teclado no debería exigir permiso de edición.

     El destino lo decide `destinoDeTecla`, que es pura y está probada aparte.
     Aquí queda solo lo que necesita el DOM. */
  const filasNavegables = useMemo(() => filasDeGrupos(grupos, rowId), [grupos]);
  const celdaActivaRef = useRef(null);
  const focoPendienteRef = useRef(null);

  /* Se busca recorriendo las celdas pintadas en vez de con un selector de
     atributo. La clave de fila lleva el nombre de la persona, que puede traer
     comillas o acentos, y `CSS.escape` no existe en todos los entornos (jsdom,
     entre otros): un selector mal escapado deja la navegación muerta en
     silencio. Comparar `dataset` no puede fallar por eso. */
  const botonDeCelda = (fila, iso) => {
    const celdas = scrollRef.current?.querySelectorAll("td[data-celda-rol]");
    if (!celdas) return null;
    for (const celda of celdas) {
      if (celda.dataset.fila === fila && celda.dataset.iso === iso) return celda.querySelector("button");
    }
    return null;
  };

  const desplazarHasta = (elemento, inline) => {
    if (typeof elemento?.scrollIntoView === "function") {
      elemento.scrollIntoView({ block: "nearest", inline });
    }
  };

  /* `scrollIntoView` no sabe nada de la columna congelada de nombres, así que
     da por visible una celda que queda DEBAJO de ella y el anillo de foco
     aparece medio tapado. Después de desplazar, se corrige a mano dejando la
     celda a la derecha de esa columna. */
  const desplazarCeldaALaVista = (boton) => {
    const contenedor = scrollRef.current;
    if (!contenedor || !boton) return;
    desplazarHasta(boton, "nearest");
    if (typeof boton.getBoundingClientRect !== "function") return;
    const celda = boton.getBoundingClientRect();
    const caja = contenedor.getBoundingClientRect();
    if (!celda.width || !caja.width) return;
    const margen = 8;
    const limiteIzquierdo = caja.left + anchoNombre + margen;
    if (celda.left < limiteIzquierdo) contenedor.scrollLeft -= limiteIzquierdo - celda.left;
    else if (celda.right > caja.right - margen) contenedor.scrollLeft += celda.right - caja.right + margen;
  };

  const enfocarCelda = (destino) => {
    if (!destino) return;
    celdaActivaRef.current = destino;
    const boton = botonDeCelda(destino.fila, destino.iso);
    if (boton) {
      boton.focus();
      // Mover el foco no provoca render, así que el tabindex se actualiza aquí
      // mismo: si no, al salir y volver con el tabulador se regresaría a la
      // celda anterior y no a la última visitada.
      aplicarTabindex();
      desplazarCeldaALaVista(boton);
      return;
    }
    /* La celda no está en el DOM: su mes está colapsado por la virtualización.
       Se AMPLÍA la ventana para incluirlo, sin soltar el mes actual.

       Ampliar y no desplazar es lo que salva el foco. Desplazando, la celda de
       origen se desmontaba antes de que apareciera la de destino y el foco caía
       al `body`; a partir de ahí las flechas ya no llegaban a la cuadrícula y
       la navegación quedaba muerta. Al crecer la ventana, el origen sigue
       montado hasta que el destino existe y puede recibirlo. */
    focoPendienteRef.current = destino;
    const indice = columnas.findIndex((c) => c.iso === destino.iso);
    if (indice < 0) return;
    setVentana((prev) => ({
      desde: Math.min(prev.desde, indice),
      hasta: Math.max(prev.hasta, indice + 1),
    }));
  };

  useLayoutEffect(() => {
    const pendiente = focoPendienteRef.current;
    if (!pendiente) return;
    const boton = botonDeCelda(pendiente.fila, pendiente.iso);
    if (!boton) return;
    focoPendienteRef.current = null;
    boton.focus();
    desplazarCeldaALaVista(boton);
  });

  /* Tabindex móvil: exactamente una celda en la secuencia de tabulación. Se
     aplica sobre el DOM y no por props para no repintar las miles de celdas en
     cada movimiento. Si la celda activa ya no está pintada, el turno pasa a la
     primera visible, o la cuadrícula entera se caería de la tabulación. */
  const aplicarTabindex = () => {
    const contenedor = scrollRef.current;
    if (!contenedor) return;
    const activa = celdaActivaRef.current;
    const deseada =
      (activa && botonDeCelda(activa.fila, activa.iso)) ||
      contenedor.querySelector("td[data-celda-rol] button");
    const actual = contenedor.querySelector('td[data-celda-rol] button[tabindex="0"]');
    if (actual === deseada) return;
    if (actual) actual.tabIndex = -1;
    if (deseada) deseada.tabIndex = 0;
  };

  // Tras cada render, porque la virtualización puede haberse llevado la celda
  // que lo tenía.
  useLayoutEffect(aplicarTabindex);

  const alPulsarTecla = (evento) => {
    if (!TECLAS.includes(evento.key)) return;
    const celda = evento.target.closest?.("td[data-celda-rol]");
    if (!celda) return;
    const destino = destinoDeTecla({
      tecla: evento.key,
      fila: celda.dataset.fila,
      iso: celda.dataset.iso,
      filas: filasNavegables,
      columnas,
    });
    // Se consume la tecla aunque no haya destino: en el borde de la cuadrícula,
    // dejar que la flecha desplace la página sería peor que no hacer nada.
    evento.preventDefault();
    enfocarCelda(destino);
  };

  /* Tramos del cuerpo: series de columnas que se pintan y huecos que se
     resumen en una sola celda. Se calcula una vez y lo comparten todas las
     filas, así que la cuenta de celdas por fila es idéntica en todas. */
  const tramos = useMemo(() => {
    const virtualizar = !imprimiendo && anchoColumna > 0;
    const lista = [];
    let desde = 0;
    for (const { year: y, month: m } of rangoMeses) {
      const n = dim(y, m);
      const clave = `${y}-${m}`;
      if (!virtualizar || mesesVisibles.has(clave)) {
        lista.push({ tipo: "celdas", clave, columnas: columnas.slice(desde, desde + n) });
      } else {
        // Si el mes nunca llegó a pintarse (un salto a una fecha lejana), se
        // cae al ancho medio por columna. Es una estimación, pero solo afecta
        // a meses que la persona todavía no ha visto.
        const exacto = anchosMes.current.get(clave);
        lista.push({ tipo: "hueco", clave, n, ancho: exacto || n * anchoColumna });
      }
      desde += n;
    }
    return lista;
  }, [columnas, rangoMeses, mesesVisibles, imprimiendo, anchoColumna]);

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

  // Mide el alto real del último bloque de la tabla (el resumen general):
  // el relleno solo debe cubrir lo que falte para llegar a la franja
  // congelada, no el alto completo del panel (si no, al llegar al final solo
  // se vería un espacio en blanco).
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

  const grupoActivo =
    grupos.find((g) => g.nombre === grupoActivoNombre) ||
    (grupoActivoNombre === GRUPO_RESUMEN
      ? { nombre: t("roles.resumenCorto"), color: "bg-ink text-ink-inverse" }
      : grupos[0]);

  const toggleEdit = (puesto, nombre) =>
    setEditRows((prev) => ({ ...prev, [rowId(puesto, nombre)]: !prev[rowId(puesto, nombre)] }));

  // Índice por nombre: `getCelda` se llama una vez por celda pintada y buscar
  // con `find` en cada una recorría la lista entera miles de veces.
  const fichaPorNombre = useMemo(
    () => new Map((personas || []).map((f) => [f.nombre, f])),
    [personas],
  );

  /**
   * Puesto bajo el que está archivado el rol de esa persona en ESE mes.
   *
   * La fila se pinta dentro del grupo del puesto donde la persona está hoy,
   * pero sus meses anteriores pueden pertenecer a otro puesto si la
   * trasladaron. Cada celda se lee y se escribe con su propio puesto; si no,
   * al trasladar a alguien su rol pasado saldría en blanco.
   */
  const puestoDe = (grupo, persona, y, m, dia = null) =>
    puestoDelRol(fichaPorNombre.get(persona), y, m, dia) || grupo.nombre;

  const getCfg = (grupo, persona, y, m) =>
    roleData[rolCfgKey(y, m, puestoDe(grupo, persona, y, m), persona)] ||
    fichaPorNombre.get(persona)?.modalidad ||
    "10x5";

  // La modalidad configurable desde la fila se lee/escribe siempre en el mes
  // inicial (igual que antes de soportar varios meses); "Aplicar" reusa ese
  // mismo valor para regenerar el patrón en todos los meses cargados.
  const setCfg = (grupo, persona, valor) =>
    setRoleData((prev) => ({
      ...prev,
      [rolCfgKey(year, month, puestoDe(grupo, persona, year, month), persona)]: valor,
    }));

  const getCelda = (grupo, persona, y, m, dia) =>
    roleData[rolKey(y, m, puestoDe(grupo, persona, y, m, dia), persona, dia)] ??
    generarValorPatron(getCfg(grupo, persona, y, m), dia, inicioDeMes(y, m), y, m);

  // Código de rol vigente en una fecha concreta (override explícito si lo
  // hay; si no, el valor derivado del patrón del mes). Sirve al asistente de
  // llenado por rango para leer el día anterior (ancla de "continuar") en
  // cualquier mes, incluso fuera del rango cargado.
  const valorEnFecha = (grupo, persona, y, m, d) =>
    roleData[rolKey(y, m, puestoDe(grupo, persona, y, m, d), persona, d)] ??
    generarValorPatron(getCfg(grupo, persona, y, m), d, inicioDeMes(y, m), y, m);

  // Cuenta cuántos días del rango [desdeISO, hastaISO] ya tienen un rol
  // explícitamente programado (override no vacío) para esta persona.
  const contarProgramadosEnRango = (grupo, persona, desdeISO, hastaISO) => {
    const desde = parseISO(desdeISO);
    const hasta = parseISO(hastaISO);
    if (!desde || !hasta) return 0;
    let n = 0;
    const cursor = new Date(desde.year, desde.month, desde.day);
    const fin = new Date(hasta.year, hasta.month, hasta.day);
    while (cursor <= fin) {
      const cy = cursor.getFullYear();
      const cm = cursor.getMonth();
      const cd = cursor.getDate();
      const v = roleData[rolKey(cy, cm, puestoDe(grupo, persona, cy, cm, cd), persona, cd)];
      if (v != null && v !== "") n += 1;
      cursor.setDate(cursor.getDate() + 1);
    }
    return n;
  };

  // Aplica el patrón de rol a un rango de fechas continuo (puede cruzar
  // meses). Escribe un override por día y alinea la modalidad configurada
  // (rolCfgKey) de cada mes tocado para que la generación dinámica y las
  // ediciones futuras en esos meses usen la misma modalidad.
  const aplicarPatronRango = ({ grupo, persona, modalidad, desdeISO, hastaISO, posInicial }) => {
    const desde = parseISO(desdeISO);
    const hasta = parseISO(hastaISO);
    if (!desde || !hasta) return;
    const filas = generarPatronRangoContinuo({ modalidad, desde, hasta, posInicial });
    if (filas.length === 0) return;
    const cambios = {};
    const mesesTocados = new Set();
    for (const { year: y, month: m, day: d, valor } of filas) {
      cambios[rolKey(y, m, puestoDe(grupo, persona, y, m, d), persona, d)] = valor;
      mesesTocados.add(`${y}-${m}`);
    }
    for (const clave of mesesTocados) {
      const [y, m] = clave.split("-").map(Number);
      cambios[rolCfgKey(y, m, puestoDe(grupo, persona, y, m), persona)] = modalidad;
    }
    setRoleData((prev) => ({ ...prev, ...cambios }));
    setPatronModal(null);
  };

  // ISO del día SIGUIENTE al último día con rol programado de una persona
  // (o null si no tiene ninguno): base del atajo "continuar sin sobrescribir".
  const diaSiguienteAlUltimoProgramado = (grupo, persona) => {
    // Se buscan TODOS los puestos por los que pasó: el último día programado
    // puede estar archivado bajo uno anterior al actual.
    const ult = ultimoDiaProgramado(
      roleData,
      puestosDeFuncionario(fichaPorNombre.get(persona), grupo.nombre),
      persona,
    );
    if (!ult) return null;
    const dt = new Date(ult.year, ult.month, ult.day);
    dt.setDate(dt.getDate() + 1);
    return isoFecha(dt.getFullYear(), dt.getMonth(), dt.getDate());
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
      const key = rolKey(y, m, puestoDe(grupo, persona, y, m, d), persona, d);
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
          role="grid"
          aria-label={t("roles.cuadriculaAria")}
          aria-colcount={columnas.length + 1}
          onKeyDown={alPulsarTecla}
          className={`border-separate border-spacing-0 text-[11px] sm:text-xs ${
            compact ? "min-w-[1040px] lg:min-w-[1140px]" : "min-w-[1160px] lg:min-w-[1380px]"
          }`}
        >
          <thead ref={theadRef}>
            <tr>
              <th
                rowSpan={2}
                data-col-nombre="true"
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
                  data-mes={`${y}-${m}`}
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
                const { year: y, month: m, dia: d, iso, dow, finde: isWeekend, esHoy: isToday } = col;
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
            <>
              {grupos.map((grupo) => (
                <RowsGrupo
                  key={grupo.nombre}
                  grupo={grupo}
                  columnas={columnas}
                  tramos={tramos}
                  compact={compact}
                  editRows={editRows}
                  toggleEdit={toggleEdit}
                  getCfg={getCfg}
                  setCfg={setCfg}
                  getCelda={getCelda}
                  abrirPatronModal={(grupo, persona) => setPatronModal({ grupo, persona })}
                  abrirConflicto={abrirConflicto}
                  setMenu={setMenu}
                  indiceActividades={indiceActividades}
                  puestosRequieren={reglas?.puestosRequierenVisitantesDiario}
                  trabajadas={trabajadas}
                  reposicionesDia={reposicionesDia}
                  year={year}
                  month={month}
                  t={t}
                  verFicha={verFicha}
                />
              ))}
              {/* El resumen general es el último bloque de la tabla, así que
                  toma el ref que dimensiona el relleno final del scroll. */}
              <ResumenTbody
                grupos={grupos}
                columnas={columnas}
                tramos={tramos}
                getCelda={getCelda}
                registerBodyRef={lastGroupRef}
                t={t}
              />
            </>
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
      {patronModal && (
        <AplicarPatronModal
          persona={patronModal.persona}
          modalidadInicial={getCfg(patronModal.grupo, patronModal.persona, year, month)}
          opcionesModalidad={opcionesModalidad}
          defaultDesdeISO={isoFecha(year, month, inicioDeMes(year, month))}
          defaultHastaISO={isoFecha(year, month, dim(year, month))}
          ultimoProgramadoSiguienteISO={diaSiguienteAlUltimoProgramado(patronModal.grupo, patronModal.persona)}
          valorEnFecha={(iso) => {
            const p = parseISO(iso);
            return p ? valorEnFecha(patronModal.grupo, patronModal.persona, p.year, p.month, p.day) : "";
          }}
          contarProgramados={(dISO, hISO) =>
            contarProgramadosEnRango(patronModal.grupo, patronModal.persona, dISO, hISO)
          }
          onAplicar={({ modalidad, desdeISO, hastaISO, posInicial }) =>
            aplicarPatronRango({
              grupo: patronModal.grupo,
              persona: patronModal.persona,
              modalidad,
              desdeISO,
              hastaISO,
              posInicial,
            })
          }
          onClose={() => setPatronModal(null)}
        />
      )}
    </div>
  );
}

/**
 * Celda que sustituye a un mes entero fuera de la ventana visible.
 *
 * Ocupa exactamente las mismas columnas que las celdas que reemplaza
 * (`colSpan`), así que el ancho total de la tabla y la posición del scroll no
 * cambian. Va oculta a lectores de pantalla porque no aporta información: el
 * contenido real vuelve en cuanto el mes se acerca a la pantalla.
 */
function HuecoMes({ n, ancho }) {
  return (
    <td
      aria-hidden="true"
      colSpan={n}
      data-hueco="true"
      /* `width` ADEMÁS de `minWidth`, y sin redondear. El mínimo por sí solo no
         basta: en el reparto del ancho sobrante, una celda vacía declara un
         ancho preferido de cero y sus columnas reciben menos que las demás, así
         que la tabla encogía unos píxeles por cada mes colapsado y el contenido
         se desplazaba bajo el dedo al desplazarse. Verificado en Chromium a 390
         y a 1280 px. */
      style={ancho ? { width: `${ancho}px`, minWidth: `${ancho}px` } : undefined}
      className="border-b border-b-line border-r border-r-line bg-surface p-0"
    />
  );
}

function RowsGrupo({
  grupo,
  columnas,
  tramos,
  compact,
  editRows,
  toggleEdit,
  getCfg,
  setCfg,
  getCelda,
  abrirPatronModal,
  abrirConflicto,
  setMenu,
  indiceActividades,
  puestosRequieren,
  trabajadas,
  reposicionesDia,
  registerBodyRef,
  year,
  month,
  t,
  verFicha,
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
              {/* min-h-10 (40 px) en vez de min-h-touch: la cuadrícula de roles
                  es densa a propósito —una fila por funcionario y una columna
                  por día— y 48 px por fila la volverían ilegible. Sigue muy por
                  encima del mínimo de 24 px de WCAG 2.5.8. */}
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
                        onClick={() => abrirPatronModal(grupo, nombre)}
                        className="inline-flex min-h-10 items-center rounded-lg bg-brand px-2 text-[10px] font-semibold text-brand-fg sm:text-[11px]"
                      >
                        {t("roles.aplicarPatronAbrir")}
                      </button>
                      {/* VF1: acceso a la ficha individual desde Roles. Va en
                          el panel de edición de la fila y no junto al nombre
                          porque la celda del nombre mide 5,5 rem en móvil: un
                          segundo botón ahí duplicaría el alto de TODAS las
                          filas de una cuadrícula que es densa a propósito. */}
                      {verFicha && (
                        <button
                          type="button"
                          onClick={() => verFicha(nombre)}
                          className="inline-flex min-h-10 items-center rounded-lg border border-line bg-surface px-2 text-[10px] font-semibold text-ink hover:bg-surface-alt sm:text-[11px]"
                        >
                          {t("roles.verFicha")}
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </td>
            {tramos.map((tramo) =>
              tramo.tipo === "hueco" ? (
                <HuecoMes key={tramo.clave} n={tramo.n} ancho={tramo.ancho} />
              ) : (
                <Fragment key={tramo.clave}>
                {tramo.columnas.map((col) => {
              const { year: y, month: m, dia: d, iso, finde, esHoy, inicioMes } = col;
              const val = getCelda(grupo, nombre, y, m, d);
              /* La regla completa, no solo «no trabaja ese día»: desde que el
                 rol `E` cuenta como activo, mirar únicamente `esRolActivo`
                 dejaba pasar el teletrabajo en atención de visitantes que Día y
                 Planificación sí marcaban. */
              const conflicto = conflictoDePersonaDia({
                rol: val,
                tieneActividad: tieneActividadEse(indiceActividades, nombre, iso),
                tieneVisit: tieneVisitEse(indiceActividades, nombre, iso),
                puesto: grupo.nombre,
                puestosRequieren,
              });
              const esInicio = editing && d === inicioMes;
              return (
                <RoleCell
                  key={`${grupo.nombre}-${nombre}-${iso}`}
                  fila={rowId(grupo.nombre, nombre)}
                  iso={iso}
                  nombre={nombre}
                  fechaLegible={col.fechaLegible}
                  colIndex={col.indice + 2}
                  value={val}
                  compact={compact}
                  editable={editing}
                  finde={finde}
                  esInicio={esInicio}
                  conflicto={conflicto}
                  dudaFuente={dudaDeFuente(iso, nombre)}
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
                </Fragment>
              ),
            )}
          </tr>
        );
      })}
      <tr>
        <td className="sticky left-0 z-10 min-w-[5.5rem] max-w-[5.5rem] border-b border-r border-line bg-surface-alt p-1.5 text-[10px] font-bold uppercase text-ink-muted shadow-[2px_0_8px_rgba(15,23,42,0.06)] sm:min-w-[10rem] sm:max-w-[10rem] sm:p-3 sm:text-xs lg:min-w-[13rem] lg:max-w-[13rem]">
          {t("roles.cantidadEnTurno")}
        </td>
        {tramos.map((tramo) =>
          tramo.tipo === "hueco" ? (
            <HuecoMes key={tramo.clave} n={tramo.n} ancho={tramo.ancho} />
          ) : (
            <Fragment key={tramo.clave}>
              {tramo.columnas.map((col) => {
          const { year: y, month: m, dia: d, iso, esHoy } = col;
          const count = grupo.funcionarios.reduce(
            (acc, nombre) => (esRolActivo(getCelda(grupo, nombre, y, m, d)) ? acc + 1 : acc),
            0,
          );
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
            </Fragment>
          ),
        )}
      </tr>
    </tbody>
  );
}

/**
 * Resumen general al pie de la tabla: totales por día sumando todos los
 * puestos visibles — funcionarios en turno, libres, en vacaciones,
 * incapacitados y otros (permisos, oficina, etc.). Los puntos de color de
 * cada fila reutilizan los colores semánticos de los códigos de rol.
 */
function ResumenTbody({ grupos, columnas, tramos, getCelda, registerBodyRef, t }) {
  const filas = [
    { cat: "T", label: t("roles.resumenEnTurno"), dot: "bg-emerald-700" },
    { cat: "L", label: t("roles.resumenLibres"), dot: "bg-amber-700" },
    { cat: "V", label: t("roles.resumenVacaciones"), dot: "bg-sky-700" },
    { cat: "I", label: t("roles.resumenIncapacidad"), dot: "bg-rose-700" },
    { cat: "O", label: t("roles.resumenOtros"), dot: "bg-violet-700" },
  ];
  /* Una sola pasada por columna VISIBLE: las cinco filas comparten estos
     totales, y los meses colapsados no se cuentan porque no se pintan. Se
     indexa por fecha ISO y no por posición: con los huecos, la posición dentro
     de la fila ya no coincide con la posición dentro de `columnas`. */
  const totales = new Map();
  for (const tramo of tramos) {
    if (tramo.tipo !== "celdas") continue;
    for (const { year: y, month: m, dia: d, iso } of tramo.columnas) {
      const acc = { T: 0, L: 0, V: 0, I: 0, O: 0 };
      for (const grupo of grupos) {
        for (const nombre of grupo.funcionarios) {
          const cat = categoriaDe(getCelda(grupo, nombre, y, m, d));
          if (cat) acc[cat] += 1;
        }
      }
      totales.set(iso, acc);
    }
  }
  return (
    <tbody data-grupo={GRUPO_RESUMEN} ref={registerBodyRef}>
      <tr className="pnlq-roles-resumen">
        <td colSpan={columnas.length + 1} className="border-y-2 border-line-strong bg-ink p-0 text-ink-inverse">
          <span className="sticky left-0 flex h-7 w-fit max-w-full items-center px-2 text-[10px] font-bold uppercase tracking-widest sm:h-8 sm:px-3 sm:text-[11px]">
            {t("roles.resumenGeneral")}
          </span>
        </td>
      </tr>
      {filas.map(({ cat, label, dot }) => (
        <tr key={cat}>
          <td className="sticky left-0 z-10 min-w-[5.5rem] max-w-[5.5rem] border-b border-r border-line bg-surface-alt p-1.5 text-[10px] font-bold uppercase text-ink-muted shadow-[2px_0_8px_rgba(15,23,42,0.06)] sm:min-w-[10rem] sm:max-w-[10rem] sm:p-3 sm:text-xs lg:min-w-[13rem] lg:max-w-[13rem]">
            <span className="flex items-center gap-1.5">
              <span aria-hidden="true" className={`h-2 w-2 shrink-0 rounded-full ${dot}`} />
              <span className="truncate">{label}</span>
            </span>
          </td>
          {tramos.map((tramo) =>
            tramo.tipo === "hueco" ? (
              <HuecoMes key={tramo.clave} n={tramo.n} ancho={tramo.ancho} />
            ) : (
              <Fragment key={tramo.clave}>
                {tramo.columnas.map((col) => {
            const { iso, esHoy } = col;
            const n = totales.get(iso)[cat];
            return (
              <td
                key={`resumen-${cat}-${iso}`}
                className={`border-b border-b-line bg-surface p-2 text-center ${
                  n > 0 ? "font-semibold text-ink" : "font-medium text-ink-muted"
                } ${esHoy ? "border-l-4 border-r-4 border-l-amber-400 border-r-amber-400" : "border-r border-r-line"}`}
              >
                {n}
              </td>
            );
                  })}
              </Fragment>
            ),
          )}
        </tr>
      ))}
    </tbody>
  );
}
