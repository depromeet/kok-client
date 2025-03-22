import { useCallback, useEffect, useRef } from "react";
import { animate, useMotionValue } from "@repo/motion";
import { Position } from "@/hooks/useDrag";
import useDrag from "@/hooks/useDrag";

interface Props {
  totalNum: number;
  onIndexChange: (index: number) => void;
}

export default function useInfiniteSliderDrag({
  totalNum,
  onIndexChange,
}: Props) {
  const sliderIndexRef = useRef(1);

  const dragging = useRef(false);

  const startX = useRef(0);
  const currentX = useRef(0);
  const moveDirection = useRef<"none" | "left" | "right">("none");

  const translateXMotion = useMotionValue(0);

  useEffect(() => {
    translateXMotion.set(-window.innerWidth);
  }, [translateXMotion]);

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
      const nextX = translateXMotion.get() + diffX;

      if (startX.current - x < 20) {
        moveDirection.current = "left";
      } else if (startX.current - x > 20) {
        moveDirection.current = "right";
      }

      translateXMotion.set(nextX);
      currentX.current = x;
    },
    [translateXMotion]
  );

  const onDragEnd = useCallback(async () => {
    if (moveDirection.current === "left") {
      await animate(
        translateXMotion,
        -window.innerWidth * (sliderIndexRef.current - 1)
      );
      sliderIndexRef.current -= 1;
    } else if (moveDirection.current === "right") {
      await animate(
        translateXMotion,
        -window.innerWidth * (sliderIndexRef.current + 1)
      );
      sliderIndexRef.current += 1;
    }

    if (sliderIndexRef.current === 0) {
      translateXMotion.set(-window.innerWidth * totalNum);
      sliderIndexRef.current = totalNum;
    } else if (sliderIndexRef.current === totalNum + 1) {
      translateXMotion.set(-window.innerWidth);
      sliderIndexRef.current = 1;
    }
    onIndexChange(sliderIndexRef.current);

    moveDirection.current = "none";
    dragging.current = false;
  }, [onIndexChange, totalNum, translateXMotion]);

  const dragEvents = useDrag({
    onDragStart,
    onDragMove,
    onDragEnd,
  });

  return { focusedIndex: sliderIndexRef.current, translateXMotion, dragEvents };
}
