import { useCallback } from "react";
import { useApp } from "../../context/AppContext.jsx";
import { useToast } from "../../context/ToastContext.jsx";
import { useT } from "../../i18n/useT.js";
import { crearEntrada, entradaDeEdicion, TIPO } from "../../domain/historial.js";
import { normalizarFuncionario, trasladar } from "../../domain/historialPuestos.js";

/**
 * Guardado de una ficha de funcionario: alta o edición, rastro de cambios
 * (RF9) y aviso.
 *
 * Lo comparten la lista de Funcionarios y la ficha individual (VF). Si cada
 * una guardara por su cuenta, una de las dos acabaría olvidándose de registrar
 * el cambio en el historial y el rastro dejaría de ser fiable sin que nadie lo
 * notara.
 *
 * Devuelve `true` si guardó, `false` si rechazó el objeto (sin nombre), para
 * que quien llama decida si cierra el formulario.
 */
export function useGuardarFuncionario(personas, setPersonas) {
  const t = useT();
  const { registrarCambio } = useApp();
  const { exito } = useToast();

  return useCallback(
    (obj) => {
      if (!obj || !String(obj.nombre || "").trim()) return false;
      const previo = personas.find((x) => x.id === obj.id);
      const esEdicion = Boolean(previo);

      // `trasladoDesde` solo viaja desde el formulario para decir DESDE CUÁNDO
      // vale el cambio de puesto; nunca se guarda dentro de la ficha.
      const { trasladoDesde, ...ficha } = obj;

      let aGuardar;
      if (esEdicion && ficha.puestoOperativo !== previo.puestoOperativo) {
        // Cambiar el puesto no es corregir un campo: es un traslado. Se cierra
        // el tramo anterior y se abre el nuevo, para que el rol de los meses ya
        // trabajados siga perteneciendo al puesto donde se trabajó.
        aGuardar = trasladar(ficha, { puesto: ficha.puestoOperativo, desde: trasladoDesde });
      } else if (!esEdicion) {
        // Alta: el historial arranca el día de ingreso si está registrado.
        aGuardar = normalizarFuncionario({
          ...ficha,
          historialPuestos: ficha.historialPuestos || [
            { puesto: ficha.puestoOperativo || "", desde: ficha.ingreso || "", hasta: null },
          ],
        });
      } else {
        aGuardar = ficha;
      }

      setPersonas((prev) =>
        prev.some((x) => x.id === aGuardar.id)
          ? prev.map((x) => (x.id === aGuardar.id ? aGuardar : x))
          : [aGuardar, ...prev],
      );
      // RF9: una edición que no cambió nada no deja rastro (`entradaDeEdicion`
      // devuelve null), así que abrir y cerrar el formulario no ensucia nada.
      registrarCambio(
        esEdicion
          ? entradaDeEdicion(previo, aGuardar)
          : crearEntrada({ tipo: TIPO.ALTA, funcionario: aGuardar }),
      );
      exito(t(esEdicion ? "funcionarios.guardado" : "funcionarios.creado", { nombre: aGuardar.nombre.trim() }));
      return true;
    },
    [exito, personas, registrarCambio, setPersonas, t],
  );
}
