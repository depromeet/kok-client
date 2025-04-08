import { theme } from "@repo/ui/tokens";
import { style } from "@vanilla-extract/css";

export const slide = style({
  width: "100vw",
  maxWidth: 600,
  height: "100%",
  position: "relative",
});

export const titleContainer = style({
  position: "absolute",
  top: 65,
  width: "100vw",
  maxWidth: "600px",
  display: "flex",
  flexDirection: "column",
  gap: 12,
  alignItems: "center",
});

export const img = style({
  width: "100%",
  userSelect: "none",
  WebkitUserSelect: "none",
  objectFit: "cover",
});

export const title = style({
  fontWeight: 800,
  fontSize: 22,
  color: theme.colors.gray95,
});

export const subtitle = style({
  fontSize: 16,
  fontWeight: 500,
  whiteSpace: "pre-wrap",
  textAlign: "center",
  lineHeight: 1.5,
  color: theme.colors.gray40,
});
