"use client";

import { useCallback, useEffect, useRef } from "react";

export const useMoveVisualViewportTop = () => {
  const prevVisualViewport = useRef<number>(0);

  const handleVisualViewportResize = useCallback(() => {
    if (!window.visualViewport || !window.document.scrollingElement) return;

    window.scrollTo({ left: 0, top: 1, behavior: "instant" });

    prevVisualViewport.current = window.visualViewport.height;
  }, []);

  useEffect(() => {
    if (!window.visualViewport) return;
    window.visualViewport.onresize = handleVisualViewportResize;

    return () => {
      if (window.visualViewport) window.visualViewport.onresize = null;
    };
  }, [handleVisualViewportResize]);
};
