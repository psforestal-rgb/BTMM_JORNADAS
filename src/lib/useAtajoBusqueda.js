import { useEffect } from "react";

/** ¿El foco está en un sitio donde la tecla es texto y no un atajo? */
function escribiendo(destino) {
  if (!destino) return false;
  if (destino.isContentEditable) return true;
  const etiqueta = String(destino.tagName || "").toLowerCase();
  return etiqueta === "input" || etiqueta === "textarea" || etiqueta === "select";
}

/**
 * Atajo de teclado para saltar al buscador de la vista (A-P12).
 *
 * La tecla es `/` y no `Ctrl+F` a propósito: `Ctrl+F` es la búsqueda del
 * navegador y robársela deja sin su herramienta a quien la esperaba, incluidos
 * los lectores de pantalla. `/` es la convención de las aplicaciones web con
 * buscador propio y no pisa nada.
 *
 * No se dispara mientras se escribe en un campo, ni con Ctrl/Alt/Meta
 * pulsados: ahí la barra es un carácter, no un atajo.
 */
export function useAtajoBusqueda(ref, { tecla = "/", activo = true } = {}) {
  useEffect(() => {
    if (!activo) return undefined;
    const alPulsar = (evento) => {
      if (evento.key !== tecla) return;
      if (evento.ctrlKey || evento.metaKey || evento.altKey) return;
      if (escribiendo(evento.target)) return;
      const campo = ref?.current;
      if (!campo) return;
      evento.preventDefault();
      /* Si el buscador vive dentro de un bloque plegado (en Roles está dentro
         de un `<details>`), se abre antes: enfocar algo oculto no hace nada y
         parecería que el atajo no funciona. */
      const plegable = typeof campo.closest === "function" ? campo.closest("details") : null;
      if (plegable && !plegable.open) plegable.open = true;
      campo.focus();
      // Seleccionar lo que hubiera deja escribir encima sin borrar antes.
      if (typeof campo.select === "function") campo.select();
    };
    document.addEventListener("keydown", alPulsar);
    return () => document.removeEventListener("keydown", alPulsar);
  }, [ref, tecla, activo]);
}
