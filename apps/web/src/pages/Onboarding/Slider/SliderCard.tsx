/* eslint-disable @next/next/no-img-element */
import * as Style from "@/pages/Onboarding/Slider/SliderCard.css";
import { classMerge } from "@repo/ui/utils";
import { ComponentProps } from "react";

interface Props extends ComponentProps<"div"> {
  imgSrc: string;
  title: string;
  subtitle: string;
}

export function SliderCard({
  imgSrc,
  title,
  subtitle,
  className,
  ...divProps
}: Props) {
  return (
    <div className={classMerge(className, Style.slide)} {...divProps}>
      <img className={Style.img} src={imgSrc} alt="" draggable={false} />
      <div className={Style.titleContainer}>
        <span className={Style.title}>{title}</span>
        <span className={Style.subtitle}>{subtitle}</span>
      </div>
    </div>
  );
}
