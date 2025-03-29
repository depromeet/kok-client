import { style } from "@vanilla-extract/css";
import { theme } from "../../tokens";

export const container = style({
  padding: "13px 16px",
  backgroundColor: "#ffffff",
});

export const title = style({
  height: "32px",
  color: theme.colors.text.primary,
  textAlign: "center",
});

export const emptyDiv = style({ width: "32px", height: "32px" });
