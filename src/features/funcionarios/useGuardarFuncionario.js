import { useCallback } from "react";
import { useApp } from "../../context/AppContext.jsx";
import { useToast } from "../../context/ToastContext.jsx";
import { useT } from "../../i18n/useT.js";
import { crearEntrada, entradaDeEdicion, TIPO } from "../../domain/historial.js";

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
      setPersonas((prev) =>
        prev.some((x) => x.id === obj.id) ? prev.map((x) => (x.id === obj.id ? obj : x)) : [obj, ...prev],
      );
      // RF9: una edición que no cambió nada no deja rastro (`entradaDeEdicion`
      // devuelve null), así que abrir y cerrar el formulario no ensucia nada.
      registrarCambio(
        esEdicion ? entradaDeEdicion(previo, obj) : crearEntrada({ tipo: TIPO.ALTA, funcionario: obj }),
      );
      exito(t(esEdicion ? "funcionarios.guardado" : "funcionarios.creado", { nombre: obj.nombre.trim() }));
      return true;
    },
    [exito, personas, registrarCambio, setPersonas, t],
  );
}
