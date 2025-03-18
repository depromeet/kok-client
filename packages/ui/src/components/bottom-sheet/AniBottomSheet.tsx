"use client";
import { ReactNode } from "react";
import { motion } from "@repo/motion";
import * as styles from "./style.css";

interface AniBottomSheetProps {
  children: ReactNode;
  onAnimationComplete?: () => void;
  initialY?: string;
  animateY?: number | string;
  stiffness?: number;
  damping?: number;
}

export const AniBottomSheet = ({
  children,
  onAnimationComplete,
  initialY = "100%",
  animateY = 0,
  stiffness = 250,
  damping = 40,
}: AniBottomSheetProps) => {
  return (
    <motion.section
      className={styles.containerRecipe({})}
      initial={{ y: initialY }}
      animate={{ y: animateY }}
      transition={{ type: "spring", stiffness, damping }}
      onAnimationComplete={onAnimationComplete}
    >
      {children}
    </motion.section>
  );
};
