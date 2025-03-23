"use client";

import { ReactNode } from "react";
import { motion, AnimatePresence } from "@repo/motion";

interface AnimationBannerProps {
  children: ReactNode;
  isBannerVisible: boolean;
  onExitComplete?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export const AnimationBanner = ({
  children,
  isBannerVisible,
  onExitComplete,
  className,
  style,
}: AnimationBannerProps) => {
  return (
    <AnimatePresence onExitComplete={onExitComplete}>
      {isBannerVisible && (
        <motion.div
          className={className}
          style={style}
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 150, opacity: 0.5 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
