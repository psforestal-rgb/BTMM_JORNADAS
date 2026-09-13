/**
 * @vitest-environment jsdom
 */
import "fake-indexeddb/auto";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { AppProvider } from "../../../context/AppContext.jsx";
import { ToastProvider } from "../../../context/ToastContext.jsx";
import ToastViewport from "../../../ui/Toast.jsx";
import Datos from "../Datos.jsx";
import { TABLAS } from "../../../domain/esquemaRelacional.js";

/**
 * La exportación relacional vista desde la pantalla. Se monta el árbol real
 * (AppProvider + ToastProvider + Datos), no el componente suelto: un botón que
 * funciona en aislamiento y no está cableado en la vista no sirve de nada.
 */

let ultimoBlob = null;
let ultimoNombre = null;

function leerBlobComoTexto(blob) {
  return new Promise((resolve, reject) => {
    const lector = new FileReader();
    lector.onload = () => resolve(lector.result);
    lector.onerror = reject;
    lector.readAsText(blob);
  });
}

beforeEach(() => {
  localStorage.clear();
  ultimoBlob = null;
  ultimoNombre = null;
  URL.createObjectURL = (blob) => {
    ultimoBlob = blob;
    return "blob:mock";
  };
  URL.revokeObjectURL = () => {};
  // `descargarArchivo` crea un <a download> y lo pulsa; jsdom no navega, así
  // que se intercepta el click para quedarse con el nombre del archivo.
  const clickOriginal = HTMLAnchorElement.prototype.click;
  HTMLAnchorElement.prototype.click = function interceptado() {
    if (this.download) ultimoNombre = this.download;
    else clickOriginal.call(this);
  };
});

afterEach(() => {
  cleanup();
  localStorage.clear();
});

function montar() {
  return render(
    <AppProvider>
      <ToastProvider>
        <Datos />
        <ToastViewport />
      </ToastProvider>
    </AppProvider>,
  );
}

describe("Datos — exportación a base de datos", () => {
  it("enseña el recuento por tabla ANTES de descargar", async () => {
    montar();
    await screen.findByText("Exportar a base de datos");
    for (const tabla of TABLAS) {
      expect(screen.getByText(tabla.nombre)).toBeTruthy();
    }
    // La semilla trae 19 fichas; el número tiene que verse, no solo el nombre.
    const filaFuncionarios = screen.getByText("funcionarios").closest("tr");
    expect(filaFuncionarios.textContent).toContain("19");
  });

  it("el JSON lleva el esquema dentro y las tablas con sus filas", async () => {
    montar();
    fireEvent.click(await screen.findByText("JSON relacional"));
    await waitFor(() => expect(ultimoBlob).not.toBeNull());

    const contenido = JSON.parse(await leerBlobComoTexto(ultimoBlob));
    expect(contenido.formato).toBe("btmm-jornadas/relacional");
    expect(contenido.esquema.map((t) => t.nombre)).toEqual(TABLAS.map((t) => t.nombre));
    expect(contenido.tablas.funcionarios).toHaveLength(19);
    expect(contenido.tablas.rol_dias.length).toBeGreaterThan(5000);
    expect(contenido.meta.fuenteRol).toContain("rol-bloque");
    expect(ultimoNombre).toMatch(/^btmm-jornadas-.*\.json$/);
  });

  it("el SQL de SQLite crea las tablas, las llena y se puede ejecutar de una vez", async () => {
    montar();
    fireEvent.click(await screen.findByText("SQL · SQLite"));
    await waitFor(() => expect(ultimoBlob).not.toBeNull());

    const sql = await leerBlobComoTexto(ultimoBlob);
    expect(sql).toContain("PRAGMA foreign_keys = ON;");
    expect(sql).toContain('CREATE TABLE IF NOT EXISTS "rol_dias"');
    expect(sql).toContain('INSERT INTO "funcionarios"');
    expect(sql.trimEnd().endsWith("COMMIT;")).toBe(true);
    expect(ultimoNombre).toMatch(/^btmm-jornadas-.*\.sqlite\.sql$/);
  });

  it("el SQL de PostgreSQL usa sus tipos", async () => {
    montar();
    fireEvent.click(await screen.findByText("SQL · PostgreSQL"));
    await waitFor(() => expect(ultimoBlob).not.toBeNull());

    const sql = await leerBlobComoTexto(ultimoBlob);
    expect(sql).toContain('"fecha" DATE');
    expect(sql).toContain('"viatico" BOOLEAN');
    expect(ultimoNombre).toMatch(/^btmm-jornadas-.*\.postgresql\.sql$/);
  });

  it("si el navegador bloquea la descarga, avisa del fallo en vez de dar por buena la exportación", async () => {
    // `descargarArchivo` devuelve false en vez de lanzar; sin comprobarlo, la
    // pantalla anunciaba un archivo que no existe.
    URL.createObjectURL = () => {
      throw new Error("descargas bloqueadas");
    };
    montar();
    fireEvent.click(await screen.findByText("JSON relacional"));

    await screen.findByText(/El navegador no permitió descargar el archivo/);
    expect(screen.queryByText(/Se descargó/)).toBeNull();
  });

  it("avisa con el nombre del archivo descargado", async () => {
    montar();
    fireEvent.click(await screen.findByText("JSON relacional"));
    await screen.findByText(/Se descargó btmm-jornadas-.*\.json\./);
  });
});
