/**
 * @vitest-environment jsdom
 */
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { AppProvider } from "../../../context/AppContext.jsx";
import ModalFuncionario from "../ModalFuncionario.jsx";

afterEach(cleanup);

const valorNuevo = {
  nombre: "",
  cedula: "",
  email: "",
  puesto: "Guardaparques",
  puestoOperativo: "Puesto Quetzales",
  condicion: "Propiedad",
  jornada: "Ordinaria",
  modalidad: "10x5",
  resolucion: "",
  contrato: "",
  vencimiento: "",
  ingreso: "",
  disponibilidad: false,
  policia: false,
  brigada: false,
  ong: false,
  estado: "Activo",
  obs: "",
};

function renderModal(props = {}) {
  const guardar = vi.fn();
  const cerrar = vi.fn();
  // Desde RP1–RP8 el modal lee los puestos vigentes del contexto, así que
  // necesita el proveedor.
  render(
    <AppProvider>
      <ModalFuncionario valor={valorNuevo} cerrar={cerrar} guardar={guardar} {...props} />
    </AppProvider>,
  );
  return { guardar, cerrar };
}

/** Avanza n pasos con el botón «Siguiente». */
function avanzar(n = 1) {
  for (let i = 0; i < n; i += 1) {
    fireEvent.click(screen.getByRole("button", { name: "Siguiente" }));
  }
}

describe("ModalFuncionario — formulario seccionado", () => {
  // Antes del wizard las seis secciones convivían en un solo scroll. Ahora cada
  // una vive en su paso: la prueba recorre los tres y comprueba que ninguna se
  // perdió por el camino.
  it("las seis secciones siguen existiendo, repartidas en los tres pasos", () => {
    renderModal();
    const porPaso = [
      ["Identificación"],
      ["Puesto y condición", "Jornada y modalidad"],
      ["Contratación y fechas", "Atributos", "Observaciones"],
    ];
    porPaso.forEach((titulos, indice) => {
      if (indice > 0) avanzar();
      for (const titulo of titulos) {
        expect(screen.getByRole("heading", { name: titulo })).toBeDefined();
      }
    });
  });

  it("el campo Nombre conserva el foco al teclear (regresión: Field se remontaba)", () => {
    renderModal();
    const input = screen.getByLabelText("Nombre");
    input.focus();
    fireEvent.change(input, { target: { value: "J" } });
    expect(document.activeElement).toBe(input);
    fireEvent.change(input, { target: { value: "Juana" } });
    expect(document.activeElement).toBe(input);
    expect(input.value).toBe("Juana");
  });

  it("guardar entrega el estado editado completo", () => {
    const { guardar } = renderModal();
    fireEvent.change(screen.getByLabelText("Nombre"), { target: { value: "Juana Solís" } });
    fireEvent.change(screen.getByLabelText("Cédula"), { target: { value: "1-1111-1111" } });
    fireEvent.click(screen.getByRole("button", { name: "Guardar" }));
    expect(guardar).toHaveBeenCalledTimes(1);
    const enviado = guardar.mock.calls[0][0];
    expect(enviado.nombre).toBe("Juana Solís");
    expect(enviado.cedula).toBe("1-1111-1111");
    expect(enviado.estado).toBe("Activo");
  });
});

describe("ModalFuncionario — ayuda contextual por sección", () => {
  it("cada sección normativa ofrece su ayuda, y Identificación no la necesita", () => {
    renderModal();
    expect(screen.queryByRole("button", { name: /Identificación/ })).toBeNull();
    avanzar();
    for (const seccion of ["Puesto y condición", "Jornada y modalidad"]) {
      expect(screen.getByRole("button", { name: new RegExp(seccion) })).toBeDefined();
    }
    avanzar();
    for (const seccion of ["Contratación y fechas", "Atributos"]) {
      expect(screen.getByRole("button", { name: new RegExp(seccion) })).toBeDefined();
    }
  });

  it("la ayuda de Jornada explica la modalidad NxM (caso 10x5 del diagnóstico)", () => {
    renderModal();
    avanzar();
    fireEvent.click(screen.getByRole("button", { name: /Jornada y modalidad/ }));
    const panel = screen.getByRole("note");
    expect(panel.textContent).toMatch(/10x5 son 10 días de turno seguidos de 5 libres/);
    expect(panel.textContent).toMatch(/requiere número de resolución/);
  });

  it("la ayuda de Atributos repite la regla dura del proyecto", () => {
    renderModal();
    avanzar(2);
    fireEvent.click(screen.getByRole("button", { name: /Atributos/ }));
    expect(screen.getByRole("note").textContent).toMatch(/no genera pagos, reposiciones ni derechos automáticos/);
  });

  it("abrir la ayuda no altera lo que se guarda", () => {
    const { guardar } = renderModal();
    fireEvent.change(screen.getByLabelText("Nombre"), { target: { value: "Juana Solís" } });
    avanzar();
    fireEvent.click(screen.getByRole("button", { name: /Jornada y modalidad/ }));
    fireEvent.click(screen.getByRole("button", { name: "Guardar" }));
    expect(guardar.mock.calls[0][0].nombre).toBe("Juana Solís");
  });
});

const valorExistente = { ...valorNuevo, id: "f9", nombre: "Ana Pérez", cedula: "1-0000-0001" };

describe("ModalFuncionario — formulario en tres pasos", () => {
  it("arranca en el paso 1 y anuncia el progreso", () => {
    renderModal();
    // El nombre del paso aparece dos veces (indicador y pestaña), así que se
    // comprueba dentro del indicador, que es el texto que se lee de corrido.
    expect(screen.getByText(/Paso 1 de 3/).textContent).toMatch(/Quién es/);
    expect(screen.getByLabelText("Nombre")).toBeDefined();
    // Los campos de los otros pasos no están montados todavía.
    expect(screen.queryByLabelText("Modalidad")).toBeNull();
    expect(screen.queryByLabelText("Resolución")).toBeNull();
  });

  it("«Siguiente» y «Atrás» recorren los pasos en los dos sentidos", () => {
    renderModal();
    avanzar();
    expect(screen.getByText(/Paso 2 de 3/)).toBeDefined();
    expect(screen.getByLabelText("Modalidad")).toBeDefined();
    avanzar();
    expect(screen.getByText(/Paso 3 de 3/)).toBeDefined();
    expect(screen.getByLabelText("Resolución")).toBeDefined();
    fireEvent.click(screen.getByRole("button", { name: "Atrás" }));
    expect(screen.getByText(/Paso 2 de 3/)).toBeDefined();
  });

  it("no hay «Atrás» en el primer paso ni «Siguiente» en el último", () => {
    renderModal();
    expect(screen.queryByRole("button", { name: "Atrás" })).toBeNull();
    avanzar(2);
    expect(screen.queryByRole("button", { name: "Siguiente" })).toBeNull();
    expect(screen.getByRole("button", { name: "Atrás" })).toBeDefined();
  });

  it("el paso activo se marca con aria-current y solo uno a la vez", () => {
    renderModal();
    const activos = () =>
      screen.getAllByRole("button").filter((b) => b.getAttribute("aria-current") === "step");
    expect(activos()).toHaveLength(1);
    expect(activos()[0].getAttribute("aria-label")).toMatch(/paso 1/i);
    avanzar();
    expect(activos()).toHaveLength(1);
    expect(activos()[0].getAttribute("aria-label")).toMatch(/paso 2/i);
  });

  it("al crear, el indicador no deja saltar a un paso todavía no visto", () => {
    renderModal();
    const aTres = screen.getByRole("button", { name: /Ir al paso 3/ });
    expect(aTres.disabled).toBe(true);
    avanzar(2);
    // Una vez visitado, vuelve a ser alcanzable desde cualquier paso.
    fireEvent.click(screen.getByRole("button", { name: /Ir al paso 1/ }));
    expect(screen.getByText(/Paso 1 de 3/)).toBeDefined();
    expect(screen.getByRole("button", { name: /Ir al paso 3/ }).disabled).toBe(false);
  });

  it("al editar se puede saltar directo a cualquier paso desde el inicio", () => {
    renderModal({ valor: valorExistente });
    fireEvent.click(screen.getByRole("button", { name: /Ir al paso 3/ }));
    expect(screen.getByText(/Paso 3 de 3/)).toBeDefined();
    expect(screen.getByLabelText("Resolución")).toBeDefined();
  });

  it("creación rápida: nombre en el paso 1 y guardar sin recorrer el resto", () => {
    const { guardar } = renderModal();
    fireEvent.change(screen.getByLabelText("Nombre"), { target: { value: "Juana Solís" } });
    fireEvent.click(screen.getByRole("button", { name: "Guardar" }));
    expect(guardar).toHaveBeenCalledTimes(1);
    const enviado = guardar.mock.calls[0][0];
    expect(enviado.nombre).toBe("Juana Solís");
    // Los valores por defecto de los pasos no recorridos viajan intactos.
    expect(enviado.puesto).toBe("Guardaparques");
    expect(enviado.estado).toBe("Activo");
  });

  it("hay un único botón «Guardar» en pantalla en cada paso", () => {
    renderModal();
    expect(screen.getAllByRole("button", { name: "Guardar" })).toHaveLength(1);
    avanzar(2);
    expect(screen.getAllByRole("button", { name: "Guardar" })).toHaveLength(1);
  });

  it("lo escrito en un paso sobrevive al ir y volver", () => {
    const { guardar } = renderModal();
    fireEvent.change(screen.getByLabelText("Nombre"), { target: { value: "Juana Solís" } });
    avanzar();
    fireEvent.change(screen.getByLabelText("Modalidad"), { target: { value: "12x6" } });
    avanzar();
    fireEvent.change(screen.getByLabelText("Resolución"), { target: { value: "RES-42" } });
    fireEvent.click(screen.getByRole("button", { name: /Ir al paso 1/ }));
    expect(screen.getByLabelText("Nombre").value).toBe("Juana Solís");
    fireEvent.click(screen.getByRole("button", { name: /Ir al paso 3/ }));
    fireEvent.click(screen.getByRole("button", { name: "Guardar" }));
    const enviado = guardar.mock.calls[0][0];
    expect(enviado.nombre).toBe("Juana Solís");
    expect(enviado.modalidad).toBe("12x6");
    expect(enviado.resolucion).toBe("RES-42");
  });

  it("el paso 1 recuerda que solo el nombre es obligatorio", () => {
    renderModal();
    expect(screen.getByText(/Solo el nombre es obligatorio/)).toBeDefined();
  });

  it("«Cancelar» sigue cerrando sin guardar desde cualquier paso", () => {
    const { cerrar, guardar } = renderModal();
    avanzar();
    fireEvent.click(screen.getByRole("button", { name: "Cancelar" }));
    expect(cerrar).toHaveBeenCalledTimes(1);
    expect(guardar).not.toHaveBeenCalled();
  });

  it("al cambiar de paso el foco pasa al panel, no se queda en el botón", () => {
    renderModal();
    avanzar();
    expect(document.activeElement?.tagName).toBe("DIV");
    expect(document.activeElement?.textContent).toMatch(/Puesto y condición/);
  });
});

describe("ModalFuncionario — validación en tiempo real (RF3)", () => {
  it("no avisa nada antes de tocar los campos", () => {
    renderModal();
    expect(screen.queryByText(/formato inesperado/i)).toBeNull();
    expect(screen.queryByText(/Nombre obligatorio/i)).toBeNull();
  });

  it("avisa al salir del campo, no mientras se teclea", () => {
    renderModal();
    const cedula = screen.getByLabelText("Cédula");
    fireEvent.change(cedula, { target: { value: "12" } });
    // A medio escribir todavía no molesta.
    expect(screen.queryByText(/Cédula con formato inesperado/i)).toBeNull();
    fireEvent.blur(cedula);
    expect(screen.getByText(/Cédula con formato inesperado/i)).toBeDefined();
  });

  it("acepta los dos formatos válidos de cédula costarricense", () => {
    renderModal();
    const cedula = screen.getByLabelText("Cédula");
    fireEvent.change(cedula, { target: { value: "1-0000-0001" } });
    fireEvent.blur(cedula);
    expect(screen.queryByText(/Cédula con formato inesperado/i)).toBeNull();
    fireEvent.change(cedula, { target: { value: "100000001" } });
    expect(screen.queryByText(/Cédula con formato inesperado/i)).toBeNull();
  });

  it("el aviso se retira en cuanto el valor se corrige", () => {
    renderModal();
    const correo = screen.getByLabelText("Correo");
    fireEvent.change(correo, { target: { value: "no-es-correo" } });
    fireEvent.blur(correo);
    expect(screen.getByText(/Correo con formato inesperado/i)).toBeDefined();
    fireEvent.change(correo, { target: { value: "ana@sinac.go.cr" } });
    expect(screen.queryByText(/Correo con formato inesperado/i)).toBeNull();
  });

  it("marca el campo con aria-invalid y lo enlaza con su aviso", () => {
    renderModal();
    const cedula = screen.getByLabelText("Cédula");
    expect(cedula.getAttribute("aria-invalid")).toBeNull();
    fireEvent.change(cedula, { target: { value: "abc" } });
    fireEvent.blur(cedula);
    expect(cedula.getAttribute("aria-invalid")).toBe("true");
    const idAviso = cedula.getAttribute("aria-describedby");
    expect(idAviso).toBeTruthy();
    expect(document.getElementById(idAviso).textContent).toMatch(/Cédula/i);
  });

  it("avisa del nombre vacío al salir del campo", () => {
    renderModal();
    fireEvent.blur(screen.getByLabelText("Nombre"));
    expect(screen.getByText(/Nombre obligatorio/i)).toBeDefined();
  });

  // La regla de oro del módulo de dominio: guiar, nunca bloquear.
  it("un dato con formato raro NO impide guardar", () => {
    const { guardar } = renderModal();
    fireEvent.change(screen.getByLabelText("Nombre"), { target: { value: "Juana Solís" } });
    const cedula = screen.getByLabelText("Cédula");
    fireEvent.change(cedula, { target: { value: "sin formato" } });
    fireEvent.blur(cedula);
    const boton = screen.getByRole("button", { name: "Guardar" });
    expect(boton.disabled).toBe(false);
    fireEvent.click(boton);
    expect(guardar).toHaveBeenCalledTimes(1);
    expect(guardar.mock.calls[0][0].cedula).toBe("sin formato");
  });

  it("el último paso resume las advertencias que cruzan pasos distintos", () => {
    renderModal();
    fireEvent.change(screen.getByLabelText("Nombre"), { target: { value: "Juana Solís" } });
    avanzar();
    fireEvent.change(screen.getByLabelText("Jornada"), { target: { value: "Acumulativa" } });
    avanzar();
    const resumen = screen.getByRole("region", { name: /Antes de guardar/i });
    // Acumulativa sin resolución y sin ONG: ningún aviso de campo suelto lo ve.
    expect(within(resumen).getByText(/sin número de resolución/i)).toBeDefined();
    expect(within(resumen).getByText(/puede guardar igual/i)).toBeDefined();
  });

  it("el resumen desaparece cuando ya no hay nada que advertir", () => {
    renderModal({ valor: { ...valorNuevo, nombre: "Juana Solís", jornada: "Ordinaria" } });
    fireEvent.click(screen.getByRole("button", { name: /Ir al paso 3/ }));
    expect(screen.queryByRole("region", { name: /Antes de guardar/i })).toBeNull();
  });

  it("disponibilidad marcada sin vencimiento aparece en el resumen", () => {
    renderModal({ valor: { ...valorNuevo, nombre: "Juana Solís" } });
    fireEvent.click(screen.getByRole("button", { name: /Ir al paso 3/ }));
    fireEvent.click(screen.getByLabelText("Disponibilidad"));
    const resumen = screen.getByRole("region", { name: /Antes de guardar/i });
    expect(within(resumen).getByText(/sin fecha de vencimiento/i)).toBeDefined();
  });
});
