"use client";

import { Button, ButtonProps } from "../button";
import * as Style from "./style.css";
import { useState } from "react";

export function FixedBottomButton({ children, ...buttonProps }: ButtonProps) {
  const [containerHeight, setContainerHeight] = useState(0);

  return (
    <>
      <div style={{ height: containerHeight }} />
      <div
        ref={(el) => {
          if (el != null) {
            setContainerHeight(el.clientHeight);
          }
        }}
        className={Style.buttonContainer}
      >
        <Button {...buttonProps}>{children}</Button>
      </div>
    </>
  );
}
