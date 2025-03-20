"use client";

import { Button } from "@repo/ui/components";
import * as Style from "../../styles/onboard/Page.css";
import Slider from "./Slider/Slider";
import { usePressEffect } from "@repo/motion";

export default function Page() {
  const { backgroundRef, containerRef, pressProps } = usePressEffect();

  return (
    <div className={Style.container}>
      <Slider />

      <div className={Style.buttonContainer}>
        <Button
          ref={containerRef}
          variant="secondary"
          className={Style.button}
          {...pressProps}
        >
          <div ref={backgroundRef} className={Style.buttonBackground} />콕
          시작하기
        </Button>
      </div>
    </div>
  );
}
