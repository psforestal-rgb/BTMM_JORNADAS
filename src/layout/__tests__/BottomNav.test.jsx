/** @vitest-environment jsdom */
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import BottomNav from "../BottomNav.jsx";

afterEach(cleanup);

describe("BottomNav móvil", () => {
  it("expone Día, Roles, Plan, Personal y Más en ese orden", () => {
    render(<BottomNav view="dia" setView={vi.fn()} nAlertas={12} />);
    const nav = screen.getByRole("navigation", { name: "Navegación principal" });
    expect(Array.from(nav.querySelectorAll("button")).map((button) => button.textContent.trim()))
      .toEqual(["Día", "Roles", "Plan", "Personal", "Más12"]);
  });

  it("abre Más como diálogo accesible y muestra Alertas", () => {
    render(<BottomNav view="reposicion" setView={vi.fn()} nAlertas={25} />);
    fireEvent.click(screen.getByRole("button", { name: /Más/ }));
    expect(screen.getByRole("dialog", { name: "Más módulos" })).toBeDefined();
    expect(screen.getByRole("button", { name: /Alertas/ })).toBeDefined();
  });
});
