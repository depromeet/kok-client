import { HTMLAttributes } from "react";
import { skeletonStyle } from "./style.css";

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  width?: number;
  height?: number;
}

export const Skeleton = ({ width = 16, height = 16, style }: SkeletonProps) => {
  return (
    <div
      className={skeletonStyle}
      style={{
        ...style,
        width,
        height,
      }}
    />
  );
};
