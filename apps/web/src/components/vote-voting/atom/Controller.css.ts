import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
});

export const buttonStyle = style({
  position: "relative",
  padding: "6px 18px",
  display: "flex",
  alignItems: "center",
  WebkitTapHighlightColor: "transparent",
});

export const highlighterStyle = style({
  position: "absolute",
  width: 60,
  height: "100%",
  borderRadius: 10,
  backgroundColor: "#fff",
});
