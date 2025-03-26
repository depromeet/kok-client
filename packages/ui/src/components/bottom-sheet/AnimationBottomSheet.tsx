"use client";
import { ReactNode } from "react";
import { motion, Transition } from "@repo/motion";
import * as styles from "./style.css";
import { zIndex } from "@repo/z-index";

interface AnimationBottomSheetProps {
  children: ReactNode;
  banner?: ReactNode;
  bannerBottom?: string;
  onAnimationComplete?: () => void;
  initialY?: string;
  animateY?: number | string;
  transition?: Transition;
}

export const AnimationBottomSheet = ({
  children,
  banner,
  bannerBottom = "140px",
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
            bottom: bannerBottom,
            zIndex: zIndex.floating,
          }}
          initial={{ y: "150%" }}
          animate={{ y: "0%" }}
          transition={transition}
          exit={{ y: "150%" }}
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
