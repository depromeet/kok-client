import { motion } from "motion/react";
import { Children, ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
}

export function AnimateStack({ children, delay = 0 }: Props) {
  return Children.map(children, (child, index) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", delay: delay + index * 0.1 }}
    >
      {child}
    </motion.div>
  ));
}
