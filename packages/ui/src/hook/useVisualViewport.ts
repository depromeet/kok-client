import { useMotionValue } from "@repo/motion";
import { useEffect } from "react";

export function useVisualViewport() {
  const offsetYMotionValue = useMotionValue(0);

  useEffect(() => {
    const handleVisualViewPortResize = () => {
      const currentVisualViewport = Number(window.visualViewport?.height ?? 0);

      offsetYMotionValue.set(currentVisualViewport);
    };

    window.visualViewport?.addEventListener(
      "resize",
      handleVisualViewPortResize
    );

    return () =>
      window.visualViewport?.removeEventListener(
        "resize",
        handleVisualViewPortResize
      );
  }, [offsetYMotionValue]);

  return { offsetYMotionValue };
}
