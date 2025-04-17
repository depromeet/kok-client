import { style } from "@vanilla-extract/css";
import { theme } from "../../tokens";
import { zIndex } from "@repo/z-index";

export const container = style({
  padding: "13px 16px",
  backgroundColor: "#ffffff",
  zIndex: zIndex.header,
});

export const title = style({
  height: "32px",
  color: theme.colors.text.primary,
  textAlign: "center",
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
});

export const emptyDiv = style({ width: "32px", height: "32px" });
