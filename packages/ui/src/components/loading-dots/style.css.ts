import { style, keyframes } from "@vanilla-extract/css";
import { theme } from "../../tokens";

const blink = keyframes({
  "0%, 100%": { opacity: "0.3" },
  "50%": { opacity: "1" },
});

export const dot = style({
  borderRadius: "50%",
  backgroundColor: theme.colors.navy,
  opacity: 0.3,
  animation: `${blink} 1.5s infinite`,
});

export const dot1 = style({
  animationDelay: "0s",
});

export const dot2 = style({
  animationDelay: "0.2s",
});

export const dot3 = style({
  animationDelay: "0.4s",
});
