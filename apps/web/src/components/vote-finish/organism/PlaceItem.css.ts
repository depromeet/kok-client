import { theme } from "@repo/ui/tokens";
import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  width: 204,
  height: 218,
  borderRadius: 24,
  backgroundColor: theme.colors.gray0,
  boxShadow: "0px 2px 32px 0px rgba(28, 28, 28, 0.03)",
  padding: "28px 24px",
  flexShrink: 0,
  position: "relative",
});

export const imgContainerStyle = style({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
});

export const imgStyle = style({
  width: 32,
  height: 32,
  backgroundColor: "red",
  borderRadius: 16,
});

export const iconStyle = style({
  position: "absolute",
  top: 0,
  left: 0,
  transform: "translate(-50%, -50%)",
});
