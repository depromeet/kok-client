import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  position: "relative",
});

export const sliderContainerStyle = style({
  position: "relative",
  width: "100vw",
  maxWidth: 600,
  display: "flex",
  overflow: "hidden",
  flexWrap: "nowrap",
});

export const innerContainerStyle = style({
  display: "flex",
});
