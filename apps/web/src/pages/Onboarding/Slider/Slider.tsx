"use client";

import { range } from "@repo/utils";
import * as Style from "./Slider.css";
import { motion, transition } from "@repo/motion";
import { theme } from "@repo/ui/tokens";
import { useSliderDrag } from "./useSliderDrag";
import { SliderCard } from "./SliderCard";

export function Slider() {
  const { sliderIndex, translateXMotion, dragEvents } = useSliderDrag();

  return (
    <div className={Style.container}>
      <div className={Style.slideContainer} {...dragEvents}>
        <motion.div style={{ x: translateXMotion }}>
          <SliderCard
            title="약속방에 친구들 초대하기"
            subtitle={`일상 이야기, 업무 이야기와 섞이지 않게\n약속에 대한 이야기를 나눌 수 있어요`}
            imgSrc="/images/onboarding-1.png"
          />
          <SliderCard
            title="중간 장소 계산하기"
            subtitle={`친구들이 입력한 출발장소를 가지고\n중간 장소를 콕 집어줘요.`}
            imgSrc="/images/onboarding-2.png"
            style={{ position: "absolute", top: 0, left: "100vw" }}
          />
          <SliderCard
            title="약속방에 친구들 초대하기"
            subtitle={`여러 후보들을 둘러보며\n의견을 남기고 투표를 진행해요`}
            imgSrc="/images/onboarding-3.png"
            style={{ position: "absolute", top: 0, left: "200vw" }}
          />
        </motion.div>
      </div>
      <div className={Style.controllerContainer}>
        {range(0, 3).map((index) => (
          <motion.div
            key={index}
            variants={{
              focused: { width: 16, backgroundColor: theme.colors.gray95 },
              unfocused: { width: 5, backgroundColor: "#DBDBDB" },
            }}
            initial={sliderIndex === index ? "focused" : "unfocused"}
            animate={sliderIndex === index ? "focused" : "unfocused"}
            className={Style.progressDot}
            transition={transition.spring.slow}
          />
        ))}
      </div>
    </div>
  );
}
