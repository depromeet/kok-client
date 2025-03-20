import { useCallback, useRef, useState } from "react";
import { animate, useMotionValue } from "@repo/motion";
import { Position } from "./useDrag";
import { clamp } from "@repo/utils";
import useDrag from "./useDrag";

export default function useSliderDrag() {
  const [sliderIndex, setSliderIndex] = useState(0);

  const dragging = useRef(false);

  const startX = useRef(0);
  const currentX = useRef(0);
  const moveDirection = useRef<"none" | "left" | "right">("none");

  const translateXMotion = useMotionValue(0);

  const onDragStart = useCallback(({ x }: Position) => {
    if (dragging.current) {
      return;
    }

    dragging.current = true;

    startX.current = x;
    currentX.current = x;
  }, []);

  const onDragMove = useCallback(
    ({ x }: Position) => {
      if (dragging.current === false) {
        return;
      }

      const diffX = x - currentX.current;
      const nextX = clamp(
        translateXMotion.get() + diffX,
        -window.innerWidth * 2,
        0
      );

      if (startX.current - x < 20) {
        moveDirection.current = "left";
      } else if (startX.current - x > 20) {
        moveDirection.current = "right";
      }

      if (nextX >= 0 || nextX <= -window.innerWidth * 2) {
        moveDirection.current = "none";
      }

      translateXMotion.set(nextX);
      currentX.current = x;
    },
    [translateXMotion]
  );

  const onDragEnd = useCallback(() => {
    if (moveDirection.current === "left") {
      setSliderIndex((prev) => prev - 1);
      animate(translateXMotion, -window.innerWidth * (sliderIndex - 1));
    } else if (moveDirection.current === "right") {
      setSliderIndex((prev) => prev + 1);
      animate(translateXMotion, -window.innerWidth * (sliderIndex + 1));
    }

    moveDirection.current = "none";
    dragging.current = false;
  }, [sliderIndex, translateXMotion]);

  const dragEvents = useDrag({
    onDragStart,
    onDragMove,
    onDragEnd,
  });

  return { sliderIndex, translateXMotion, dragEvents };
}
