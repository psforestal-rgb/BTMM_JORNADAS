import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { ETIQUETA_PUBLICO, MANUAL, PUBLICOS, seccionesDe, textoDeSeccion } from "../manual.js";
import { generarMarkdown, RUTA_MANUAL } from "../../../scripts/generarManual.mjs";
import { VISTAS_VALIDAS } from "../../lib/navigation.js";

const TIPOS_DE_BLOQUE = new Set(["parrafo", "lista", "tabla", "aviso", "pasos"]);

describe("manual — forma del contenido", () => {
  it("cada sección tiene id, título, público conocido y al menos un bloque", () => {
    const publicos = new Set(Object.values(PUBLICOS));
    for (const s of MANUAL.secciones) {
      expect(s.id).toBeTruthy();
      expect(s.titulo).toBeTruthy();
      expect(publicos.has(s.publico)).toBe(true);
      expect(s.bloques.length).toBeGreaterThan(0);
    }
  });

  it("los ids no se repiten: la vista los usa como clave de React", () => {
    const ids = MANUAL.secciones.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("todo bloque es de un tipo que la vista y el generador saben pintar", () => {
    for (const s of MANUAL.secciones) {
      for (const b of s.bloques) expect(TIPOS_DE_BLOQUE.has(b.tipo)).toBe(true);
    }
  });

  it("cada tabla tiene tantas celdas por fila como columnas", () => {
    for (const s of MANUAL.secciones) {
      for (const b of s.bloques) {
        if (b.tipo !== "tabla") continue;
        for (const fila of b.filas) expect(fila).toHaveLength(b.columnas.length);
      }
    }
  });

  it("los tres públicos tienen contenido y todos tienen etiqueta", () => {
    for (const p of Object.values(PUBLICOS)) {
      expect(ETIQUETA_PUBLICO[p]).toBeTruthy();
      expect(seccionesDe(p).length).toBeGreaterThan(0);
    }
    expect(seccionesDe()).toHaveLength(MANUAL.secciones.length);
  });

  it("el texto de búsqueda de una sección incluye títulos, listas y tablas", () => {
    const dia = MANUAL.secciones.find((s) => s.id === "dia");
    const texto = textoDeSeccion(dia);
    expect(texto).toContain("cobertura crítica");
    expect(texto).toBe(texto.toLocaleLowerCase("es-CR"));
  });

  it("la regla dura sigue diciendo que la herramienta no decide nada", () => {
    expect(MANUAL.reglaDura).toMatch(/REGISTRA/);
    expect(MANUAL.reglaDura).toMatch(/no genera pagos|Ninguna acción/i);
  });
});

describe("manual — lo que describe existe de verdad", () => {
  it("«manual» es una vista válida de la aplicación", () => {
    expect(VISTAS_VALIDAS.has("manual")).toBe(true);
  });

  it("no promete la vista «Por semana», que se retiró hace tiempo", () => {
    // El manual anterior la seguía describiendo; este test impide que vuelva.
    const todo = MANUAL.secciones.map(textoDeSeccion).join(" ");
    expect(todo).not.toContain("por semana");
  });

  it("no dice que el rol se edite «tocando el candado»: se toca el nombre", () => {
    const todo = MANUAL.secciones.map(textoDeSeccion).join(" ");
    expect(todo).not.toContain("candado");
  });
});

describe("manual — docs/MANUAL.md está al día", () => {
  it("el archivo del repositorio coincide con lo que genera el script", () => {
    const enDisco = readFileSync(RUTA_MANUAL, "utf8");
    // Si esto falla, el manual cambió y falta correr `npm run manual`.
    expect(enDisco).toBe(generarMarkdown());
  });

  it("el Markdown generado avisa de que no se edita a mano", () => {
    expect(generarMarkdown()).toContain("No lo edite a mano");
  });

  it("una tabla generada no parte una celda con una barra vertical", () => {
    // Las barras se escapan; si no, una celda con «|» rompería la tabla.
    const md = generarMarkdown();
    for (const linea of md.split("\n")) {
      if (!linea.startsWith("|") || linea.includes("---")) continue;
      const celdas = linea.slice(1, -1).split(/(?<!\\)\|/);
      expect(celdas.length).toBeGreaterThan(1);
    }
  });
});
