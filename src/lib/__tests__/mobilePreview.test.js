import { describe, expect, it } from "vitest";
import { isMobilePreviewLocation, mobilePreviewUrl } from "../mobilePreview.js";

describe("vista móvil temporal", () => {
  it("conserva la ruta actual y agrega la marca de previsualización", () => {
    const href = mobilePreviewUrl({ href: "https://example.test/app/?tema=oscuro#/roles/2026/07" });
    expect(href).toBe("https://example.test/app/?tema=oscuro&mobile-preview=1#/roles/2026/07");
  });

  it("detecta cuando la app ya está dentro del simulador", () => {
    expect(isMobilePreviewLocation({ search: "?mobile-preview=1" })).toBe(true);
    expect(isMobilePreviewLocation({ search: "" })).toBe(false);
  });
});
