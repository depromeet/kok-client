"use client";

import { motion } from "@repo/motion";
import { spinnerStyle } from "./style.css";

interface LoadingSpinnerProps {
  width?: number;
  height?: number;
}

export const LoadingSpinner = ({
  width = 16,
  height = 16,
}: LoadingSpinnerProps) => {
  return (
    <motion.div
      className={spinnerStyle}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
      animate={{
        rotate: 360,
      }}
      transition={{
        repeat: Infinity,
        duration: 0.5,
        ease: "easeInOut",
      }}
    />
  );
};
