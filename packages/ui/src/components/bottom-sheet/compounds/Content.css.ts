import { style } from "@vanilla-extract/css";

export const container = style({
  left: 0,
  bottom: 0,
  width: "100%",
  position: "fixed",
  maxHeight: "60vh",
  display: "flex",
  flexDirection: "column",

  overflow: "hidden",
  borderTopLeftRadius: 32,
  borderTopRightRadius: 32,
  backgroundColor: "#FFFFFF",
});

export const content = style({
  flex: 1,
  overflow: "auto",
});
