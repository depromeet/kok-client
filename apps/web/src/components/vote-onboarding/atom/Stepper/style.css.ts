import { theme } from "@repo/ui/tokens";
import { style } from "@vanilla-extract/css";

// StepperItem
export const NumberContainerStyle = style({
  width: 22,
  height: 22,
  borderRadius: 11,
  background: theme.colors.navy,
  color: "#fff",
});

export const TextStyle = style({
  color: theme.colors.text.caption,
});
