"use client";

import { ReactNode } from "react";
import { motion, Transition } from "@repo/motion";
import * as styles from "./style.css";

interface AnimationBottomSheetProps {
  children: ReactNode;
  onAnimationComplete?: () => void;
  initialY?: string;
  animateY?: number | string;
  transition?: Transition;
}

export const AnimationBottomSheet = ({
  children,
  onAnimationComplete,
  initialY = "100%",
  animateY = 0,
  transition = { type: "spring", stiffness: 250, damping: 40 },
}: AnimationBottomSheetProps) => {
  return (
    <motion.section
      className={styles.containerRecipe({})}
      initial={{ y: initialY }}
      animate={{ y: animateY }}
      transition={transition}
      onAnimationComplete={onAnimationComplete}
    >
      {children}
    </motion.section>
  );
};
