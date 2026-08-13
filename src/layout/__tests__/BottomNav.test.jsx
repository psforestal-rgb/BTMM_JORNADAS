/** @vitest-environment jsdom */
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import BottomNav from "../BottomNav.jsx";

afterEach(cleanup);

describe("BottomNav móvil", () => {
  it("expone Día, Roles, Alertas, Personal y Más en ese orden", () => {
    render(<BottomNav view="dia" setView={vi.fn()} nAlertas={12} />);
    const nav = screen.getByRole("navigation", { name: "Navegación principal" });
    expect(Array.from(nav.querySelectorAll("button")).map((button) => button.textContent.trim()))
      .toEqual(["Día", "Roles", "Alertas12", "Personal", "Más"]);
  });

  it("abre Más como diálogo accesible y muestra Plan", () => {
    render(<BottomNav view="reposicion" setView={vi.fn()} nAlertas={25} />);
    fireEvent.click(screen.getByRole("button", { name: /Más/ }));
    expect(screen.getByRole("dialog", { name: "Más módulos" })).toBeDefined();
    // Nombre exacto: el menú «Más» tiene dos entradas con "Plan" ("Plan" y
    // "Plan/Func."), así que un regex laxo /Plan/ es ambiguo.
    expect(screen.getByRole("button", { name: "Plan" })).toBeDefined();
  });
});
