"use client";
import { ReactNode } from "react";
import { motion, Transition } from "@repo/motion";
import * as styles from "./style.css";
import { zIndex } from "@repo/z-index";

interface AnimationBottomSheetProps {
  children: ReactNode;
  banner?: ReactNode;
  onAnimationComplete?: () => void;
  initialY?: string;
  animateY?: number | string;
  transition?: Transition;
}

export const AnimationBottomSheet = ({
  children,
  banner,
  onAnimationComplete,
  initialY = "100%",
  animateY = 0,
  transition = { type: "spring", stiffness: 250, damping: 40 },
}: AnimationBottomSheetProps) => {
  return (
    <>
      {banner && (
        <motion.div
          style={{
            position: "fixed",
            width: "100%",
            maxWidth: "600px",
            bottom: "140px",
            zIndex: zIndex.floating,
          }}
          initial={{ y: "200%" }}
          animate={{ y: "0%" }}
          transition={transition}
        >
          {banner}
        </motion.div>
      )}
      <motion.section
        className={styles.containerRecipe({})}
        initial={{ y: initialY }}
        animate={{ y: animateY }}
        transition={transition}
        onAnimationComplete={onAnimationComplete}
      >
        {children}
      </motion.section>
    </>
  );
};
