import { useEffect, useState } from "react";

export function useVirtualKeyboard() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const viewport = window.visualViewport;
    if (!viewport) return undefined;
    const update = () => {
      const reducedHeight = window.innerHeight - viewport.height;
      const nextOpen = reducedHeight > 150;
      setOpen(nextOpen);
      document.documentElement.style.setProperty("--visual-viewport-height", `${viewport.height}px`);
    };
    update();
    viewport.addEventListener("resize", update);
    viewport.addEventListener("scroll", update);
    return () => {
      viewport.removeEventListener("resize", update);
      viewport.removeEventListener("scroll", update);
      document.documentElement.style.removeProperty("--visual-viewport-height");
    };
  }, []);

  return open;
}
