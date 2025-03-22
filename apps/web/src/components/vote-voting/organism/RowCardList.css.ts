import { theme } from "@repo/ui/tokens";
import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
});

export const itemContainerStyle = style({
  width: 335,
  height: 140,
  position: "absolute",
  backgroundColor: "#fff",
  left: "50%",
  transform: "translateX(-50%)",
  borderRadius: 20,
  display: "flex",
  justifyContent: "space-between",
  padding: "16px 11px 18px 18px",
});

export const buttonStyle = style({
  width: 24,
  height: "100%",
  backgroundColor: theme.colors.btn.input.default,
  borderRadius: 24,
});
