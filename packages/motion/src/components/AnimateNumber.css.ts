import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  display: "flex",
  overflow: "hidden",
  position: "relative",
});

export const gradientTop = style({
  height: 9,
  width: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  background: "linear-gradient(to bottom, #FFF, transparent)",
  zIndex: 1,
});

export const gradientBottom = style({
  height: 9,
  width: "100%",
  position: "absolute",
  bottom: 0,
  left: 0,
  background: "linear-gradient(to top, #FFF, transparent)",
  zIndex: 1,
});

export const colContainerStyle = style({
  display: "flex",
  flexDirection: "column",
});

export const numItemStyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: 25,
  width: 11.5,
});
