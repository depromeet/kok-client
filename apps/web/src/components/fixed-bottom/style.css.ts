import { style } from "@vanilla-extract/css";
import { zIndex } from "@repo/z-index";

export const footerContainerStyle = style({
  width: "100%",
  maxWidth: "600px",
  position: "fixed",
  padding: "16px 20px",
  bottom: 0,
  // left: 0,
  zIndex: zIndex.floating,
});
