"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import * as styles from "./style.css";
import { AnimatePresence, motion } from "@repo/motion";
import { createPortal } from "react-dom";

interface PageModalProps {
  isOpen: boolean;
}

export const PageModal = ({
  isOpen,
  children,
}: PropsWithChildren<PageModalProps>) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.container}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 600, damping: 50 }}
            className={styles.modalLayout}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
