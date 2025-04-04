import { keyframes, style } from "@vanilla-extract/css";

const skeletonKeyframes = keyframes({
  from: {
    backgroundPosition: "200% 0",
  },
  to: {
    backgroundPosition: "-200% 0",
  },
});

export const skeletonAnimation = style({
  animationName: skeletonKeyframes,
  animationDuration: "1.5s",
  animationIterationCount: "infinite",
  animationTimingFunction: "linear",
});

export const skeletonStyle = style([
  skeletonAnimation,
  {
    background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
    backgroundSize: "200% 100%",
    borderRadius: "4px",
    margin: "0 auto",
  },
]);
