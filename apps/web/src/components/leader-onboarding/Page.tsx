"use client";

import { Button } from "@repo/ui/components";
import * as Style from "./Page.css";
import Slider from "./molecules/Slider";
import { usePressEffect } from "@repo/motion";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const { backgroundRef, containerRef, pressProps } = usePressEffect();

  const handleClickStart = () => {
    router.push("/create-room");
  };

  return (
    <div className={Style.container}>
      <Slider />

      <div className={Style.buttonContainer}>
        <Button
          ref={containerRef}
          variant="secondary"
          className={Style.button}
          {...pressProps}
          onClick={handleClickStart}
        >
          <div ref={backgroundRef} className={Style.buttonBackground} />콕
          시작하기
        </Button>
      </div>
    </div>
  );
}
