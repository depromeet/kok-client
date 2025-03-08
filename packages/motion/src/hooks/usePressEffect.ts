import { useAnimate } from "motion/react";
import { usePress } from "@react-aria/interactions";
import { useCallback } from "react";

export function usePressEffect() {
  const [containerRef, containerAnimate] = useAnimate();
  const [backgroundRef, backgroundAnimate] = useAnimate();

  const onPressStart = useCallback(() => {
    containerAnimate(containerRef.current, { scale: 0.96 });
    backgroundAnimate(backgroundRef.current, { opacity: 1 });
  }, []);

  const onPressEnd = useCallback(() => {
    containerAnimate(containerRef.current, { scale: 1 });
    backgroundAnimate(backgroundRef.current, { opacity: 0 });
  }, []);

  const { pressProps } = usePress({
    onPressStart,
    onPressEnd,
  }) as any;

  return { containerRef, backgroundRef, pressProps };
}
