import { MouseEvent, TouchEvent, useCallback } from "react";

export type Position = {
  x: number;
  y: number;
};

interface Props {
  onDragStart: (position: Position) => void;
  onDragMove: (position: Position) => void;
  onDragEnd: () => void;
}

export function useDrag({ onDragStart, onDragEnd, onDragMove }: Props) {
  const onTouchStart = useCallback(
    (event: TouchEvent) => {
      const touch = event.touches[0];
      if (touch != null) {
        onDragStart({ x: touch?.clientX, y: touch?.clientY });
      }
    },
    [onDragStart]
  );

  const onTouchMove = useCallback(
    (event: TouchEvent) => {
      const touch = event.touches[0];
      if (touch != null) {
        onDragMove({ x: touch?.clientX, y: touch?.clientY });
      }
    },
    [onDragMove]
  );

  const onMouseMove = useCallback(
    (event: MouseEvent) => {
      onDragMove({ x: event.clientX, y: event.clientY });
    },
    [onDragMove]
  );

  const onMouseUp = useCallback(() => {
    onDragEnd();
    window.removeEventListener("mousemove", onMouseMove as never);
    window.removeEventListener("mouseup", onMouseUp);
  }, [onDragEnd, onMouseMove]);

  const onMouseDown = useCallback(
    (event: MouseEvent) => {
      onDragStart({ x: event.clientX, y: event.clientY });
      window.addEventListener("mousemove", onMouseMove as never);
      window.addEventListener("mouseup", onMouseUp);
    },
    [onDragStart, onMouseMove, onMouseUp]
  );

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd: onDragEnd,
    onMouseDown,
  };
}
