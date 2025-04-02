import { zIndex } from "@repo/z-index";
import { style } from "@vanilla-extract/css";
import { keyframes } from "@vanilla-extract/css";

export const mapContainer = style({
  display: "flex",
  height: "100%",
  width: "100%",
  maxWidth: "600px",
});

export const overlayStyle = style({
  position: "fixed",
  top: 0,
  left: "50%",
  transform: "translateX(-50%)",
  bottom: 0,
  width: "600px",
  backgroundColor: "rgba(0, 0, 0, 0.65)",
  zIndex: zIndex.floating,
});

export const refreshStyle = style({
  position: "fixed",
  top: 74,
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: zIndex.floating,
});

export const AddLocationButtonPositionStyle = style({
  position: "fixed",
  width: "100%",
  maxWidth: "600px",
  bottom: "190px",
  justifyContent: "flex-end",
  paddingRight: "20px",
});

export const headerSkeletonWrapper = style({
  display: "flex",
  justifyContent: "center",
  width: "100%",
});

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

export const roomNameSkeletonStyle = style([
  skeletonAnimation,
  {
    background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
    backgroundSize: "200% 100%",
    width: "120px",
    height: "24px",
    borderRadius: "4px",
    margin: "0 auto",
  },
]);

export const participantsSkeletonStyle = style([
  skeletonAnimation,
  {
    background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
    backgroundSize: "200% 100%",
    width: "32px",
    height: "24px",
    borderRadius: "4px",
    display: "inline-block",
  },
]);
