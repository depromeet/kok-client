import { theme } from "@repo/ui/tokens";
import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  flexGrow: 1,
  backgroundColor: theme.colors.orange5,
});

export const imageContainerStyle = style({
  transform: "rotate(-4deg)",
});
