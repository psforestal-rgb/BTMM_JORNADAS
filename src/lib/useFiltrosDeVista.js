import { useCallback, useEffect, useMemo, useRef } from "react";
import { useApp } from "../context/AppContext.jsx";

/**
 * Filtros de una vista, sincronizados con la ruta y con la sesión.
 *
 * Qué va a la URL y qué no, que es la decisión de fondo:
 * **la ruta lleva QUÉ se está viendo; la sesión guarda CÓMO se ve en este
 * aparato.** Un filtro de personal o una búsqueda cambian el contenido y por
 * eso se comparten; que la lista salga en tabla o en tarjetas es una
 * preferencia del aparato de quien mira, y colarla en el enlace le cambiaría la
 * pantalla a quien lo recibe sin haberlo pedido. Eso sigue en
 * `useSessionState`.
 *
 * Precedencia: si la ruta trae filtros, mandan (alguien abrió un enlace
 * concreto). Si no trae ninguno, se recuperan los de la sesión y la ruta se
 * reescribe para reflejarlos, de modo que el enlace de la barra de direcciones
 * siempre describe lo que hay en pantalla.
 *
 * Los valores iguales al valor por defecto NO se escriben: así el enlace de una
 * vista sin filtrar queda limpio y dos estados iguales dan el mismo enlace.
 */
export function useFiltrosDeVista(vista, valoresPorDefecto) {
  const { filtrosVista, setFiltrosVista } = useApp();
  const claveSesion = `btmm:filtros:${vista}`;
  const defectos = useRef(valoresPorDefecto);
  const enRuta = filtrosVista?.[vista];
  const yaSembrado = useRef(false);

  /* Siembra: la primera vez, si la ruta no traía filtros, se toman los de la
     sesión. Va en un efecto y no en el render porque escribe estado. */
  useEffect(() => {
    if (yaSembrado.current) return;
    yaSembrado.current = true;
    if (enRuta) return;
    let guardados = null;
    try {
      const crudo = window.sessionStorage.getItem(claveSesion);
      guardados = crudo ? JSON.parse(crudo) : null;
    } catch {
      guardados = null;
    }
    if (guardados && typeof guardados === "object" && Object.keys(guardados).length) {
      setFiltrosVista(vista, guardados);
    }
    // Solo al montar: sembrar más de una vez pisaría lo que la persona filtre.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Lo guardado en sesión se actualiza en cuanto cambian los filtros, para que
  // sobrevivan a recargar la página aunque el enlace se comparta sin ellos.
  useEffect(() => {
    try {
      window.sessionStorage.setItem(claveSesion, JSON.stringify(enRuta || {}));
    } catch {
      // La aplicación sigue funcionando si el navegador bloquea sessionStorage.
    }
  }, [claveSesion, enRuta]);

  const valores = useMemo(
    () => ({ ...defectos.current, ...(enRuta || {}) }),
    [enRuta],
  );

  const poner = useCallback(
    (clave, valor) => {
      setFiltrosVista(vista, (previos) => {
        const siguiente = { ...previos };
        // Volver al valor por defecto es quitar el filtro, no fijarlo: así el
        // enlace no arrastra `orden=nombre` cuando ese ya es el orden normal.
        if (valor === defectos.current[clave] || valor === "" || valor == null) delete siguiente[clave];
        else siguiente[clave] = valor;
        return siguiente;
      });
    },
    [setFiltrosVista, vista],
  );

  const limpiar = useCallback(() => setFiltrosVista(vista, {}), [setFiltrosVista, vista]);

  const hayFiltros = Boolean(enRuta && Object.keys(enRuta).length);

  return { valores, poner, limpiar, hayFiltros };
}
