import { zIndex } from "@repo/z-index";
import { style } from "@vanilla-extract/css";
import { theme } from "../../tokens";

export const bannerContainerStyle = style({
  position: "absolute",
  width: "100%",
  height: "147px",
  maxWidth: "600px",
  bottom: 140,
  zIndex: zIndex.floating,
  backgroundColor: theme.colors.orange5,
});

export const textContainerStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  margin: "28px 24px",
});

export const deleteBtnStyle = style({
  position: "absolute",
  right: 12,
  top: 12,
  cursor: "pointer",
  zIndex: zIndex.overlay,
});
