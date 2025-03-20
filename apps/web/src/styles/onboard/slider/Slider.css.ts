import { style } from "@vanilla-extract/css";

export const container = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
});

export const img = style({
  width: "100%",
  userSelect: "none",
  WebkitUserSelect: "none",
});

export const slideContainer = style({
  position: "relative",
  width: "100vw",
  maxWidth: 600,
  display: "flex",
  overflow: "hidden",
  flexWrap: "nowrap",
});

export const slide = style({
  width: "100vw",
  maxWidth: 600,
  height: "100%",
  position: "relative",
});

export const controllerContainer = style({
  padding: "26px 0px",
  display: "flex",
  justifyContent: "center",
  gap: 12,
});

export const progressDot = style({
  width: 5,
  height: 5,
  borderRadius: 10,
});
