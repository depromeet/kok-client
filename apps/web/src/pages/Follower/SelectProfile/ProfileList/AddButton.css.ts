import { style } from "@vanilla-extract/css";

export const container = style({
  width: 115,
  position: "relative",
});

export const button = style({
  display: "flex",
  padding: 16,
  border: "none",
  borderRadius: 100,
  WebkitTapHighlightColor: "transparent",
});
