import { theme } from "@repo/ui/tokens";
import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  width: "100vw",
  maxWidth: 600,
  position: "relative",
  flexShrink: 0,

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const cardContainerStyle = style({
  backgroundColor: "#fff",
  borderRadius: 20,
});

export const innerCardContainerStyle = style({
  padding: "18px 18px 16px 18px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  height: "100%",
});

export const cardButtonStyle = style({
  width: "100%",
  padding: "10px 0",
  borderRadius: 100,
  backgroundColor: theme.colors.btn.input.default,
  display: "flex",
  justifyContent: "center",
});

export const cardButtonTitleStyle = style({
  fontSize: 12,
  fontWeight: 500,
});
