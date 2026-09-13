import { useCallback } from "react";
import { useApp } from "../../context/AppContext.jsx";
import { useToast } from "../../context/ToastContext.jsx";
import { useT } from "../../i18n/useT.js";
import { crearEntrada, entradaDeEdicion, TIPO } from "../../domain/historial.js";
import { normalizarFuncionario, trasladar } from "../../domain/historialPuestos.js";
import { nombreOcupado, renombrarFuncionario } from "../../domain/funcionarios.js";

/**
 * Guardado de una ficha de funcionario: alta o edición, rastro de cambios
 * (RF9) y aviso.
 *
 * Lo comparten la lista de Funcionarios y la ficha individual (VF). Si cada
 * una guardara por su cuenta, una de las dos acabaría olvidándose de registrar
 * el cambio en el historial y el rastro dejaría de ser fiable sin que nadie lo
 * notara. Por lo mismo, el arrastre de un cambio de nombre vive aquí: es el
 * único camino por el que una ficha se guarda.
 *
 * Devuelve `true` si guardó, `false` si rechazó el objeto (sin nombre o con un
 * nombre que ya lleva otra ficha), para que quien llama decida si cierra el
 * formulario.
 */
export function useGuardarFuncionario(personas, setPersonas) {
  const t = useT();
  const {
    registrarCambio,
    // El nombre es la referencia con la que apuntan a una persona el rol, las
    // actividades y las reposiciones. Renombrar sin arrastrarlas vacía las
    // tres en silencio.
    roleData,
    setRoleData,
    actividadesPlan,
    setActividadesPlan,
    reposiciones,
    setReposiciones,
    funcionarioVista,
    setFuncionarioVista,
  } = useApp();
  const { exito, aviso, error } = useToast();

  return useCallback(
    (obj) => {
      if (!obj || !String(obj.nombre || "").trim()) return false;
      const previo = personas.find((x) => x.id === obj.id);
      const esEdicion = Boolean(previo);

      // `trasladoDesde` solo viaja desde el formulario para decir DESDE CUÁNDO
      // vale el cambio de puesto; nunca se guarda dentro de la ficha.
      const { trasladoDesde, ...ficha } = obj;

      const nombreAntes = String(previo?.nombre ?? "").trim();
      const nombreDespues = String(ficha.nombre).trim();
      const cambiaNombre = esEdicion && nombreAntes !== nombreDespues;

      /* Nombre que ya lleva otra ficha. Las claves de `roleData` se arman con el
         nombre, así que dos fichas homónimas comparten literalmente las mismas
         celdas de rol. Se trata distinto según el caso, y la diferencia importa:

          - **RENOMBRAR a un nombre ocupado SÍ se bloquea.** Es la única cosa
            además del nombre vacío que la aplicación se niega a guardar. No es
            una validación de formulario: sería coger el rol de una persona y
            volcarlo encima del de otra. Y siempre es evitable —basta un nombre
            que las distinga—, así que bloquear no impide registrar nada.
          - **Dar de ALTA con un nombre ocupado solo avisa.** Dos guardaparques
            pueden llamarse igual de verdad; negarse a registrar a alguien que
            existe sería una pérdida de función, y el proyecto tiene escrito que
            las validaciones guían y no bloquean. Se avisa de que compartirán
            rol, que es la verdad del modelo de datos hasta que las claves pasen
            a ir por `id` (pendiente anotado en `src/domain/roles.js`).

         La comprobación NO corre en una edición que no toca el nombre: si no,
         un par de homónimos ya guardados quedaría imposible de editar, y
         entonces tampoco se podría arreglar el choque. */
      const choque = (!esEdicion || cambiaNombre) && nombreOcupado(personas, nombreDespues, ficha.id);
      if (choque && cambiaNombre) {
        error(t("funcionarios.nombreRepetido", { nombre: nombreDespues }));
        return false;
      }

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

      let cascada = null;
      if (cambiaNombre) {
        cascada = renombrarFuncionario({
          personas,
          roleData,
          actividadesPlan,
          reposiciones,
          antes: nombreAntes,
          despues: nombreDespues,
        });
        setRoleData(cascada.roleData);
        setActividadesPlan(cascada.actividadesPlan);
        setReposiciones(cascada.reposiciones);
        // La ficha individual se abre por nombre (`#/funcionario/<nombre>`). Si
        // no se actualiza, renombrar desde la propia ficha la deja diciendo
        // «no existe» sobre la persona que se acaba de guardar.
        if (funcionarioVista === nombreAntes) setFuncionarioVista(nombreDespues);
      }

      // RF9: una edición que no cambió nada no deja rastro (`entradaDeEdicion`
      // devuelve null), así que abrir y cerrar el formulario no ensucia nada.
      // El rastro guarda el nombre de cada momento y NO se reescribe: la
      // entrada de esta edición es la que enlaza el nombre viejo con el nuevo.
      registrarCambio(
        esEdicion
          ? entradaDeEdicion(previo, aGuardar)
          : crearEntrada({ tipo: TIPO.ALTA, funcionario: aGuardar }),
      );

      if (cascada) {
        exito(
          t("funcionarios.renombrado", {
            antes: nombreAntes,
            despues: nombreDespues,
            celdas: cascada.celdas,
            actividades: cascada.actividades,
            reposiciones: cascada.reposicionesTocadas,
          }),
        );
        // Una colisión significa que el nombre nuevo ya tenía rol guardado y
        // ese rol gana. Callarlo sería perder días de trabajo sin decirlo.
        if (cascada.colisiones > 0) {
          aviso(t("funcionarios.renombradoColision", { n: cascada.colisiones }));
        }
      } else {
        exito(
          t(esEdicion ? "funcionarios.guardado" : "funcionarios.creado", {
            nombre: aGuardar.nombre.trim(),
          }),
        );
      }
      if (choque && !cambiaNombre) {
        aviso(t("funcionarios.nombreRepetidoAlta", { nombre: nombreDespues }));
      }
      return true;
    },
    [
      actividadesPlan,
      aviso,
      error,
      exito,
      funcionarioVista,
      personas,
      registrarCambio,
      reposiciones,
      roleData,
      setActividadesPlan,
      setFuncionarioVista,
      setPersonas,
      setReposiciones,
      setRoleData,
      t,
    ],
  );
}
