import { theme } from "@repo/ui/tokens";
import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  width: "100%",
  height: "100vh",
  background: `linear-gradient(-170deg, ${theme.colors.yellow5} 0%, ${theme.colors.orange5} 50%, ${theme.colors.bg.base} 95%)`,
});
