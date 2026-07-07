/** @vitest-environment jsdom */
import { afterEach, expect, it } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { useSessionState } from "../useSessionState.js";

function Probe() {
  const [value, setValue] = useSessionState("test:state", "inicial");
  return <button onClick={() => setValue("guardado")}>{value}</button>;
}

afterEach(() => { cleanup(); sessionStorage.clear(); });

it("restaura el estado de interfaz de sessionStorage", () => {
  const first = render(<Probe />);
  fireEvent.click(screen.getByRole("button", { name: "inicial" }));
  first.unmount();
  render(<Probe />);
  expect(screen.getByRole("button", { name: "guardado" })).toBeDefined();
});
