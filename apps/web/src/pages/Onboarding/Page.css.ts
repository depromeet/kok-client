import { style } from "@vanilla-extract/css";

export const container = style({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
});

export const buttonContainer = style({
  padding: "16px 20px",
});

export const button = style({
  position: "relative",
  fontSize: 16,
  fontWeight: 600,
});

export const buttonBackground = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  opacity: 0,
  backgroundColor: "rgba(0, 0, 0, 0.1)",
  zIndex: -1,
});
