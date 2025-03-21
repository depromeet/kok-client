import { zIndex } from "@repo/z-index";
import { style } from "@vanilla-extract/css";

export const footerContainerStyle = style({
  maxWidth: "600px",
  width: "100%",
  padding: "20px 16px",
  position: "fixed",
  bottom: 0,
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: zIndex.floating,
});
