/** @vitest-environment jsdom */
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { AppProvider } from "../../context/AppContext.jsx";
import { ThemeProvider } from "../../context/ThemeContext.jsx";
import Topbar from "../Topbar.jsx";

afterEach(cleanup);

describe("Topbar — simulador móvil", () => {
  it("permite alternar el marco entre orientación vertical y horizontal", () => {
    render(
      <ThemeProvider>
        <AppProvider>
          <Topbar
            view="roles"
            setView={vi.fn()}
            month={6}
            setMonth={vi.fn()}
            year={2026}
            setYear={vi.fn()}
            compact={false}
            setCompact={vi.fn()}
          />
        </AppProvider>
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Abrir simulador temporal de vista móvil" }));
    const horizontal = screen.getByRole("button", { name: "Horizontal" });
    fireEvent.click(horizontal);

    expect(horizontal.getAttribute("aria-pressed")).toBe("true");
    const frame = screen.getByTitle("Aplicación en tamaño de teléfono móvil");
    expect(frame.parentElement.style.width).toBe("856px");
    expect(frame.className).toContain("h-[min(390px");
  });
});
