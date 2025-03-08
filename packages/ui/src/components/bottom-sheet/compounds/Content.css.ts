import { style } from "@vanilla-extract/css";
import { zIndex } from "@repo/z-index";

export const container = style({
  left: 0,
  bottom: 0,
  width: "100%",
  maxWidth: 600,
  position: "fixed",
  maxHeight: "60vh",
  display: "flex",
  flexDirection: "column",

  overflow: "hidden",
  borderTopLeftRadius: 32,
  borderTopRightRadius: 32,
  backgroundColor: "#FFFFFF",

  zIndex: zIndex.overlay,
});

export const content = style({
  flex: 1,
  overflow: "auto",
});
