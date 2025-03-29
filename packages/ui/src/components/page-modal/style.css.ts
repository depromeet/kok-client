import { zIndex } from "@repo/z-index";
import { style } from "@vanilla-extract/css";

export const container = style({
  position: "fixed",
  top: 0,
  maxWidth: "600px",
  width: "100%",
  height: "100%",
  zIndex: zIndex.overlay + 1,
});

export const modalLayout = style({
  width: "100%",
  height: "100%",
});
