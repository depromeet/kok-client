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
  height: 94,
  position: "absolute",
  backgroundColor: "#fff",
  left: "50%",
  transform: "translateX(-50%)",
  borderRadius: 20,
  display: "flex",
  justifyContent: "space-between",
  padding: "20px 11px 22px 20px",
});

export const buttonStyle = style({
  width: 32,
  height: "62",
  backgroundColor: theme.colors.btn.input.default,
  borderRadius: 24,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  WebkitTapHighlightColor: "transparent",
});

export const left = style({
  height: "100%",
  display: "flex",

  flexDirection: "column",
  justifyContent: "space-between",
});

export const titleContainer = style({
  display: "flex",
  alignItems: "center",
  gap: 6,
});

export const subwayItem = style({
  padding: 5,
  borderRadius: "15px",
  color: "white",
  minWidth: 20,
  minHeight: 20,
  fontSize: 9,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 700,
});

export const bottom = style({
  display: "flex",
  alignItems: "center",
  gap: 12,
});

export const line = style({
  height: 14,
  width: 1,
  backgroundColor: "#AFB4BA",
});

export const bottomInfo = style({
  display: "flex",
  alignItems: "center",
  gap: 6,
});
