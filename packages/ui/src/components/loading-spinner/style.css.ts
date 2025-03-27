import { style } from "@vanilla-extract/css";
import { theme } from "../../tokens";

export const spinnerStyle = style({
  border: "3px solid transparent",
  borderTop: `3px solid ${theme.colors.navy}`,
  borderLeft: `3px solid ${theme.colors.navy}`,
  borderRadius: "50%",
  display: "inline-block",
});
