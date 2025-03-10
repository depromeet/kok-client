"use client";

import { Button, ButtonProps } from "../button";
import * as Style from "./style.css";
import { ReactNode, useState } from "react";
import { useVisualViewport } from "../../hook/useVisualViewport";
import { motion } from "@repo/motion";

interface Props extends ButtonProps {
  top?: ReactNode;
}

export function FixedBottomButton({ children, top, ...buttonProps }: Props) {
  const [containerHeight, setContainerHeight] = useState(0);
  const { offsetYMotionValue } = useVisualViewport();

  return (
    <>
      <div style={{ height: containerHeight }} />
      <motion.div
        ref={(el) => {
          if (el != null) {
            setContainerHeight(el.clientHeight);
          }
        }}
        className={Style.buttonContainer}
        style={{ y: offsetYMotionValue }}
      >
        {top}
        <Button {...buttonProps}>{children}</Button>
      </motion.div>
    </>
  );
}
