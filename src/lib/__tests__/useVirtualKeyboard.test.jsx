/** @vitest-environment jsdom */
import { act, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { useVirtualKeyboard } from "../useVirtualKeyboard.js";

afterEach(() => { delete window.visualViewport; });

describe("useVirtualKeyboard", () => {
  it("detecta una reducción importante del viewport visual", () => {
    const listeners = {};
    window.visualViewport = {
      height: window.innerHeight,
      addEventListener: (name, fn) => { listeners[name] = fn; },
      removeEventListener: () => {},
    };
    const { result } = renderHook(() => useVirtualKeyboard());
    expect(result.current).toBe(false);
    act(() => {
      window.visualViewport.height = window.innerHeight - 300;
      listeners.resize();
    });
    expect(result.current).toBe(true);
  });
});
