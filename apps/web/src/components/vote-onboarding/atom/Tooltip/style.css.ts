import { theme } from "@repo/ui/tokens";
import { style } from "@vanilla-extract/css";

export const Container = style({});

export const Box = style({
  padding: "8px 10px",
  borderRadius: 12,
  backgroundColor: theme.colors.bg4,
  backdropFilter: "blur(15px)",
  width: "fit-content",
});
