/**
 * @vitest-environment jsdom
 */
import { afterEach, beforeEach, describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, cleanup, within, waitFor } from "@testing-library/react";
import { AppProvider, useApp } from "../../../context/AppContext.jsx";
import { ToastProvider } from "../../../context/ToastContext.jsx";
import ToastViewport from "../../../ui/Toast.jsx";
import Funcionarios from "../Funcionarios.jsx";

function renderConProvider(props = {}, extra = null) {
  let setPersonasRef;
  function Probe() {
    const [personas, setPersonas] = require("react").useState([
      { id: "f1", nombre: "Ana Pérez", cedula: "1-0000-0001", email: "ana@sinac.go.cr", puesto: "Guardaparques", puestoOperativo: "Puesto Orosi", condicion: "Propiedad", jornada: "Acumulativa", modalidad: "10x5", resolucion: "RES-1", disponibilidad: true, contrato: "DISP-1", vencimiento: "2026-12-31", policia: true, brigada: false, ong: false, estado: "Activo", obs: "" },
      { id: "f2", nombre: "Bruno Salas", cedula: "1-0000-0002", email: "bruno@sinac.go.cr", puesto: "Asistente Administrativo", puestoOperativo: "Puesto Quetzales", condicion: "Interino", jornada: "Ordinaria", modalidad: "Horario administrativo L-V", resolucion: "", disponibilidad: false, contrato: "", vencimiento: "", policia: false, brigada: false, ong: false, estado: "Activo", obs: "" },
      { id: "f3", nombre: "Carla Mora", cedula: "1-0000-0003", email: "carla@ong.org", puesto: "Personal Apoyo ONG-Invest-Volunt", puestoOperativo: "Puesto Esperanza", condicion: "ONG-Invest-Volunt", jornada: "Ordinaria", modalidad: "Horario administrativo L-V", resolucion: "CONV-1", disponibilidad: false, contrato: "", vencimiento: "", policia: false, brigada: false, ong: true, estado: "Activo", obs: "" },
    ]);
    setPersonasRef = setPersonas;
    return <Funcionarios personas={personas} setPersonas={setPersonas} {...props} />;
  }
  const utils = render(
    <AppProvider>
      <ToastProvider>
        <Probe />
        {extra}
        <ToastViewport />
      </ToastProvider>
    </AppProvider>,
  );
  return { ...utils, getSetPersonas: () => setPersonasRef };
}

afterEach(() => {
  cleanup();
  sessionStorage.clear();
});

describe("Funcionarios — filtros y búsqueda", () => {
  it("muestra los 3 funcionarios por defecto", () => {
    renderConProvider();
    // El conteo "3/3" debe estar visible.
    expect(screen.getByText("3/3")).toBeDefined();
    expect(screen.getByText("Ana Pérez")).toBeDefined();
    expect(screen.getByText("Bruno Salas")).toBeDefined();
    expect(screen.getByText("Carla Mora")).toBeDefined();
  });

  it("filtro 'Guardaparques' deja solo a Ana", () => {
    renderConProvider();
    fireEvent.click(screen.getByRole("button", { name: /^Guardaparques$/ }));
    expect(screen.getByText("1/3")).toBeDefined();
    expect(screen.getByText("Ana Pérez")).toBeDefined();
    expect(screen.queryByText("Bruno Salas")).toBeNull();
    expect(screen.queryByText("Carla Mora")).toBeNull();
  });

  it("filtro 'ONG-Invest-Volunt' deja solo a Carla", () => {
    renderConProvider();
    fireEvent.click(screen.getByRole("button", { name: /^ONG-Invest-Volunt$/ }));
    expect(screen.getByText("1/3")).toBeDefined();
    expect(screen.getByText("Carla Mora")).toBeDefined();
  });

  it("filtro 'Con disponibilidad' deja solo a Ana", () => {
    renderConProvider();
    fireEvent.click(screen.getByRole("button", { name: /Con disponibilidad/ }));
    expect(screen.getByText("1/3")).toBeDefined();
    expect(screen.getByText("Ana Pérez")).toBeDefined();
  });

  it("búsqueda por texto en cédula/nombre/puesto", () => {
    renderConProvider();
    const input = screen.getByPlaceholderText(/Buscar/i);
    fireEvent.change(input, { target: { value: "Bruno" } });
    expect(screen.getByText("1/3")).toBeDefined();
    expect(screen.getByText("Bruno Salas")).toBeDefined();
  });

  it("búsqueda sin resultados muestra EmptyState", () => {
    renderConProvider();
    const input = screen.getByPlaceholderText(/Buscar/i);
    fireEvent.change(input, { target: { value: "ZZZ_no_existe" } });
    expect(screen.getByText("0/3")).toBeDefined();
    expect(screen.getByText(/Sin resultados/i)).toBeDefined();
  });
});

describe("Funcionarios — toggle Tabla / Tarjetas", () => {
  it("cambia entre vistas y preserva la lista filtrada", () => {
    renderConProvider();
    // Cambiar a Tarjetas
    fireEvent.click(screen.getByRole("button", { name: /Tarjetas/ }));
    // En tarjetas, los 3 nombres siguen presentes.
    expect(screen.getByText("Ana Pérez")).toBeDefined();
    expect(screen.getByText("Bruno Salas")).toBeDefined();
    expect(screen.getByText("Carla Mora")).toBeDefined();
    // El conteo sigue siendo 3/3.
    expect(screen.getByText("3/3")).toBeDefined();

    // Volver a tabla.
    fireEvent.click(screen.getByRole("button", { name: /^Tabla$/ }));
    // Header de la tabla visible.
    expect(screen.getByText(/Cargo \/ puesto operativo/i)).toBeDefined();
  });
});

describe("Funcionarios — eliminación reversible con «Deshacer»", () => {
  // La tabla ordena por nombre; la fila 0 es siempre Ana Pérez.
  const clicEliminarPrimero = () => {
    const botones = screen.getAllByRole("button", { name: /^Eliminar$/i });
    fireEvent.click(botones[0]);
  };

  it("elimina de inmediato y anuncia el borrado con acción Deshacer", () => {
    renderConProvider();
    clicEliminarPrimero();
    expect(screen.getByText("2/2")).toBeDefined();
    expect(screen.queryByText("Ana Pérez")).toBeNull();
    expect(screen.getByText("Se eliminó a Ana Pérez")).toBeDefined();
    expect(screen.getByRole("button", { name: /^Deshacer$/ })).toBeDefined();
  });

  it("«Deshacer» restaura al funcionario en su posición original", () => {
    renderConProvider();
    clicEliminarPrimero();
    fireEvent.click(screen.getByRole("button", { name: /^Deshacer$/ }));
    expect(screen.getByText("3/3")).toBeDefined();
    expect(screen.getByText("Ana Pérez")).toBeDefined();
    expect(screen.getByText("Se restauró a Ana Pérez")).toBeDefined();
    // El aviso de borrado se cierra al activar su acción.
    expect(screen.queryByText("Se eliminó a Ana Pérez")).toBeNull();
  });

  it("ya no hay modal bloqueante de confirmación", () => {
    renderConProvider();
    clicEliminarPrimero();
    expect(screen.queryByRole("dialog")).toBeNull();
  });

  it("el aviso se cierra sin restaurar al pulsar Cerrar", () => {
    renderConProvider();
    clicEliminarPrimero();
    const aviso = screen.getByTestId("toast");
    fireEvent.click(within(aviso).getByRole("button", { name: /^Cerrar$/ }));
    expect(screen.queryByText("Se eliminó a Ana Pérez")).toBeNull();
    expect(screen.getByText("2/2")).toBeDefined();
  });
});

describe("Funcionarios — confirmación visual al guardar", () => {
  it("avisa al editar un funcionario existente", () => {
    renderConProvider();
    fireEvent.click(screen.getAllByRole("button", { name: /^Editar$/i })[0]);
    fireEvent.click(screen.getByRole("button", { name: /^Guardar$/ }));
    expect(screen.getByText("Se guardaron los cambios de Ana Pérez")).toBeDefined();
  });

  it("avisa al agregar uno nuevo", () => {
    renderConProvider();
    fireEvent.click(screen.getByRole("button", { name: /Agregar/ }));
    fireEvent.change(screen.getByLabelText("Nombre"), { target: { value: "Nuevo Funcionario" } });
    fireEvent.click(screen.getByRole("button", { name: /^Guardar$/ }));
    expect(screen.getByText("Se agregó a Nuevo Funcionario")).toBeDefined();
    expect(screen.getByText("4/4")).toBeDefined();
  });
});

describe("Funcionarios — visibilidad de los filtros", () => {
  it("en pantalla ancha los filtros arrancan desplegados", () => {
    const { container } = renderConProvider();
    const detalles = container.querySelector("details");
    expect(detalles).not.toBeNull();
    expect(detalles.open).toBe(true);
  });

  it("los chips forman un grupo etiquetado y marcan el filtro activo", () => {
    renderConProvider();
    const grupo = screen.getByRole("group", { name: "Filtrar funcionarios" });
    expect(within(grupo).getByRole("button", { name: /^Todos$/ }).getAttribute("aria-pressed")).toBe("true");
    fireEvent.click(within(grupo).getByRole("button", { name: /^Guardaparques$/ }));
    expect(within(grupo).getByRole("button", { name: /^Guardaparques$/ }).getAttribute("aria-pressed")).toBe("true");
    expect(within(grupo).getByRole("button", { name: /^Todos$/ }).getAttribute("aria-pressed")).toBe("false");
  });
});

describe("Funcionarios — exportación CSV (RF5)", () => {
  let capturado;
  let BlobReal;

  beforeEach(() => {
    capturado = null;
    BlobReal = global.Blob;
    // El Blob de jsdom no expone su contenido ni implementa .text(), así que se
    // sustituye por un doble que guarda lo que se le pasó.
    global.Blob = class {
      constructor(partes, opciones) {
        capturado = { texto: (partes || []).join(""), tipo: opciones?.type };
      }
    };
    global.URL.createObjectURL = vi.fn(() => "blob:fake");
    global.URL.revokeObjectURL = vi.fn();
  });

  afterEach(() => {
    global.Blob = BlobReal;
  });

  const leerBlob = () => capturado?.texto ?? null;

  it("exporta lo que se está viendo, no la lista completa", () => {
    renderConProvider();
    fireEvent.click(screen.getByRole("button", { name: /^Guardaparques$/ }));
    expect(screen.getByText("1/3")).toBeDefined();
    fireEvent.click(screen.getByRole("button", { name: /Exportar a CSV/ }));
    const texto = leerBlob().replace(/^\ufeff/, "");
    const filas = texto.split("\r\n");
    expect(filas).toHaveLength(2); // cabecera + Ana
    expect(filas[1]).toMatch(/^Ana Pérez,/);
    expect(texto).not.toMatch(/Bruno Salas/);
  });

  it("la cabecera lleva los nombres de columna en español", () => {
    renderConProvider();
    fireEvent.click(screen.getByRole("button", { name: /Exportar a CSV/ }));
    const texto = leerBlob().replace(/^\ufeff/, "");
    const cabecera = texto.split("\r\n")[0];
    expect(cabecera).toContain("Nombre");
    expect(cabecera).toContain("Cédula");
    expect(cabecera).toContain("Puesto operativo");
    expect(cabecera).toContain("Observaciones");
  });

  it("los booleanos salen como Sí/No", () => {
    renderConProvider();
    fireEvent.click(screen.getByRole("button", { name: /^Con disponibilidad/ }));
    fireEvent.click(screen.getByRole("button", { name: /Exportar a CSV/ }));
    const texto = leerBlob();
    // Ana tiene disponibilidad y policía; brigada y ong en falso.
    expect(texto.split("\r\n")[1]).toContain("Sí");
    expect(texto.split("\r\n")[1]).toContain("No");
  });

  it("confirma con un aviso cuántos se exportaron", async () => {
    renderConProvider();
    fireEvent.click(screen.getByRole("button", { name: /Exportar a CSV/ }));
    expect(screen.getByText("Se exportaron 3 funcionarios a CSV")).toBeDefined();
  });

  it("el archivo se marca como CSV y empieza con el BOM UTF-8", () => {
    renderConProvider();
    fireEvent.click(screen.getByRole("button", { name: /Exportar a CSV/ }));
    expect(capturado.tipo).toMatch(/^text\/csv/);
    expect(capturado.texto.charCodeAt(0)).toBe(0xfeff);
  });

  it("con el filtro sin resultados avisa en vez de descargar un archivo vacío", () => {
    renderConProvider();
    fireEvent.change(screen.getByPlaceholderText(/Buscar/i), { target: { value: "ZZZ_no_existe" } });
    fireEvent.click(screen.getByRole("button", { name: /Exportar a CSV/ }));
    expect(screen.getByText(/No hay funcionarios que exportar/)).toBeDefined();
    expect(leerBlob()).toBeNull();
  });
});

describe("Funcionarios — importación CSV con vista previa y respaldo (RF4+RF8)", () => {
  let descargas;
  let BlobReal;

  beforeEach(() => {
    descargas = [];
    BlobReal = global.Blob;
    global.Blob = class {
      constructor(partes, opciones) {
        descargas.push({ texto: (partes || []).join(""), tipo: opciones?.type });
      }
    };
    global.URL.createObjectURL = vi.fn(() => "blob:fake");
    global.URL.revokeObjectURL = vi.fn();
  });

  afterEach(() => {
    global.Blob = BlobReal;
  });

  /** Simula elegir un archivo: jsdom sí implementa FileReader sobre un File real. */
  const elegir = async (texto, nombre = "personal.csv") => {
    const input = document.querySelector('input[type="file"]');
    const archivo = new BlobReal([texto], { type: "text/csv" });
    archivo.name = nombre;
    Object.defineProperty(input, "files", { value: [archivo], configurable: true });
    fireEvent.change(input);
    // El FileReader es asíncrono: esperar a que la previa aparezca.
    return screen.findByRole("dialog", { name: /Revisar antes de importar/i });
  };

  const CABECERA = "Nombre,Cédula,Observaciones";

  it("no toca nada hasta confirmar: primero enseña la vista previa", async () => {
    renderConProvider();
    await elegir(`${CABECERA}\r\nDora Nueva,1-0000-0009,`);
    expect(screen.getByText("3/3")).toBeDefined();
    expect(screen.queryByText("Dora Nueva")).toBeNull();
    expect(descargas).toHaveLength(0);
  });

  it("cuenta altas, cambios e intactos por separado", async () => {
    renderConProvider();
    const dialogo = await elegir(
      `${CABECERA}\r\nDora Nueva,1-0000-0009,\r\nAna Pérez,1-0000-0001,nota nueva`,
    );
    const altas = within(dialogo).getByText("Se agregan").parentElement;
    const cambios = within(dialogo).getByText("Se actualizan").parentElement;
    expect(within(altas).getByText("1")).toBeDefined();
    expect(within(cambios).getByText("1")).toBeDefined();
  });

  it("al confirmar descarga primero el respaldo y luego aplica", async () => {
    renderConProvider();
    await elegir(`${CABECERA}\r\nDora Nueva,1-0000-0009,`);
    fireEvent.click(screen.getByRole("button", { name: /Crear respaldo e importar/ }));
    expect(descargas).toHaveLength(1);
    expect(descargas[0].tipo).toBe("application/json");
    expect(JSON.parse(descargas[0].texto).state.personas).toHaveLength(3);
    expect(screen.getByText("4/4")).toBeDefined();
    expect(screen.getByText("Dora Nueva")).toBeDefined();
  });

  it("fusiona: quien no viene en el archivo sigue estando", async () => {
    renderConProvider();
    await elegir(`${CABECERA}\r\nAna Pérez,1-0000-0001,solo ana`);
    fireEvent.click(screen.getByRole("button", { name: /Crear respaldo e importar/ }));
    expect(screen.getByText("3/3")).toBeDefined();
    expect(screen.getByText("Bruno Salas")).toBeDefined();
    expect(screen.getByText("Carla Mora")).toBeDefined();
  });

  it("cancelar no importa ni descarga respaldo", async () => {
    renderConProvider();
    await elegir(`${CABECERA}\r\nDora Nueva,1-0000-0009,`);
    fireEvent.click(screen.getByRole("button", { name: /^Cancelar$/ }));
    expect(screen.getByText("3/3")).toBeDefined();
    expect(descargas).toHaveLength(0);
  });

  it("avisa de las columnas que faltan y de las que sobran", async () => {
    renderConProvider();
    const dialogo = await elegir("Nombre,Sueldo\r\nDora Nueva,999");
    expect(within(dialogo).getByText(/Columnas que no venían/)).toBeDefined();
    expect(within(dialogo).getByText(/Columnas del archivo que se ignoran: Sueldo/)).toBeDefined();
  });

  it("cuenta las filas omitidas por no traer nombre ni cédula", async () => {
    renderConProvider();
    const dialogo = await elegir(`${CABECERA}\r\n,,solo observaciones\r\nDora,1-0000-0009,`);
    expect(within(dialogo).getByText(/Filas omitidas por no traer nombre ni cédula: 1/)).toBeDefined();
  });

  it("muestra las advertencias de dominio de las filas importadas", async () => {
    renderConProvider();
    const dialogo = await elegir("Nombre,Cédula,Jornada\r\nDora Nueva,no-es-cedula,Acumulativa");
    const avisos = within(dialogo).getByRole("region", { name: /Advertencias sobre los datos/i });
    expect(within(avisos).getByText(/Cédula con formato inesperado/)).toBeDefined();
    expect(within(avisos).getByText(/sin número de resolución/)).toBeDefined();
  });

  it("rechaza un archivo sin Nombre ni Cédula, que no permite identificar a nadie", () => {
    renderConProvider();
    const input = document.querySelector('input[type="file"]');
    const archivo = new BlobReal(["Observaciones\r\nalgo"], { type: "text/csv" });
    archivo.name = "malo.csv";
    Object.defineProperty(input, "files", { value: [archivo], configurable: true });
    fireEvent.change(input);
    return screen.findByText(/no trae ni «Nombre» ni «Cédula»/).then(() => {
      expect(screen.queryByRole("dialog")).toBeNull();
    });
  });

  it("lo exportado se puede volver a importar sin cambiar nada", async () => {
    renderConProvider();
    fireEvent.click(screen.getByRole("button", { name: /Exportar a CSV/ }));
    const csv = descargas[0].texto;
    descargas.length = 0;
    const dialogo = await elegir(csv, "reimportado.csv");
    const altas = within(dialogo).getByText("Se agregan").parentElement;
    const cambios = within(dialogo).getByText("Se actualizan").parentElement;
    expect(within(altas).getByText("0")).toBeDefined();
    // Se reconocen los 3 como existentes; ningún campo cambia de valor.
    expect(within(cambios).getByText("3")).toBeDefined();
    fireEvent.click(screen.getByRole("button", { name: /Crear respaldo e importar/ }));
    expect(screen.getByText("3/3")).toBeDefined();
    expect(screen.getByText("Ana Pérez")).toBeDefined();
  });
});

describe("Funcionarios — rastro de cambios (RF9)", () => {
  /** Igual que renderConProvider, pero con una sonda que lee el historial. */
  function renderConEspia() {
    let historial = [];
    function Espia() {
      historial = useApp().historial;
      return null;
    }
    const utils = renderConProvider({}, <Espia />);
    return { ...utils, getHistorial: () => historial };
  }

  it("dar de alta deja una entrada", () => {
    const { getHistorial } = renderConEspia();
    fireEvent.click(screen.getByRole("button", { name: /Agregar/ }));
    fireEvent.change(screen.getByLabelText("Nombre"), { target: { value: "Dora Nueva" } });
    fireEvent.click(screen.getByRole("button", { name: "Guardar" }));
    const h = getHistorial();
    expect(h).toHaveLength(1);
    expect(h[0].tipo).toBe("alta");
    expect(h[0].funcionario.nombre).toBe("Dora Nueva");
  });

  it("editar registra qué campo cambió, con su valor anterior", () => {
    const { getHistorial } = renderConEspia();
    fireEvent.click(screen.getAllByRole("button", { name: /^Editar$/i })[0]);
    fireEvent.click(screen.getByRole("button", { name: /Ir al paso 3/ }));
    fireEvent.change(screen.getByLabelText("Resolución"), { target: { value: "RES-99" } });
    fireEvent.click(screen.getByRole("button", { name: "Guardar" }));
    const h = getHistorial();
    expect(h[0].tipo).toBe("edicion");
    expect(h[0].cambios).toEqual([{ campo: "resolucion", antes: "RES-1", despues: "RES-99" }]);
  });

  it("abrir y guardar sin cambiar nada no ensucia el rastro", () => {
    const { getHistorial } = renderConEspia();
    fireEvent.click(screen.getAllByRole("button", { name: /^Editar$/i })[0]);
    fireEvent.click(screen.getByRole("button", { name: "Guardar" }));
    expect(getHistorial()).toHaveLength(0);
  });

  it("eliminar y deshacer dejan dos entradas, no cero", () => {
    const { getHistorial } = renderConEspia();
    fireEvent.click(screen.getAllByRole("button", { name: /^Eliminar$/i })[0]);
    expect(getHistorial()[0].tipo).toBe("baja");
    fireEvent.click(screen.getByRole("button", { name: /^Deshacer$/ }));
    const h = getHistorial();
    expect(h.map((e) => e.tipo)).toEqual(["restauracion", "baja"]);
    expect(h[0].funcionario.nombre).toBe("Ana Pérez");
  });
});

describe("Funcionarios — acceso a la ficha individual (VF1)", () => {
  it("desde la tabla abre la ficha de esa persona, sin tocar la vista de Roles", () => {
    const setView = vi.fn();
    renderConProvider({ setView });
    fireEvent.click(screen.getByRole("button", { name: "Ver la ficha de Ana Pérez" }));
    expect(setView).toHaveBeenCalledWith("funcionario", { funcionario: "Ana Pérez" });
  });

  it("cada fila lleva a su propia ficha", () => {
    const setView = vi.fn();
    renderConProvider({ setView });
    const botones = screen.getAllByRole("button", { name: /^Ver la ficha de / });
    expect(botones.length).toBe(3);
    fireEvent.click(screen.getByRole("button", { name: "Ver la ficha de Carla Mora" }));
    expect(setView).toHaveBeenCalledWith("funcionario", { funcionario: "Carla Mora" });
  });

  it("sin navegación disponible no se pinta el acceso, en vez de dejar un botón muerto", () => {
    renderConProvider();
    expect(screen.queryAllByRole("button", { name: /^Ver la ficha de / })).toHaveLength(0);
  });
});

describe("Funcionarios — aviso de proceso al importar (A-P17)", () => {
  /** Elige un archivo sin esperar a que termine el análisis. */
  const elegirSinEsperar = (texto) => {
    const input = document.querySelector('input[type="file"]');
    const archivo = new Blob([texto], { type: "text/csv" });
    archivo.name = "personal.csv";
    Object.defineProperty(input, "files", { value: [archivo], configurable: true });
    fireEvent.change(input);
  };

  it("mientras lee y analiza, el botón queda bloqueado y se anuncia", async () => {
    renderConProvider();
    const boton = screen.getByRole("button", { name: "Importar funcionarios desde un archivo CSV" });
    expect(boton.disabled).toBe(false);

    elegirSinEsperar("Nombre,Cédula\r\nDora Nueva,1-0000-0009");
    // El aviso tiene que estar ANTES de que termine: es su única razón de ser.
    await waitFor(() => expect(screen.getByRole("button", { name: "Importar funcionarios desde un archivo CSV" }).disabled).toBe(true));
    expect(screen.getByText("Procesando el archivo, espere un momento")).toBeDefined();

    // Y al terminar se libera.
    await screen.findByRole("dialog", { name: /Revisar antes de importar/i });
    await waitFor(() => expect(screen.getByRole("button", { name: "Importar funcionarios desde un archivo CSV" }).disabled).toBe(false));
  });

  it("la región de estado existe desde el principio, aunque esté vacía", () => {
    const { container } = renderConProvider();
    // Un `role=status` que aparece junto con su texto no se anuncia en varios
    // lectores de pantalla, así que tiene que estar montado de antemano.
    const region = container.querySelector('[role="status"][aria-live="polite"]');
    expect(region).not.toBeNull();
    expect(region.textContent).toBe("");
  });
});
