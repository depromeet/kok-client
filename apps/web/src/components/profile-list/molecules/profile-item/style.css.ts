import { style } from "@vanilla-extract/css";

export const ProfileItemLayoutStyle = style({
  width: "115px",
  cursor: "pointer",
  outline: "none",
  WebkitTapHighlightColor: "transparent",
});

export const imageContainerStyle = style({
  width: "80px",
  height: "80px",
  position: "relative",
});

export const selectedImageStyle = style({
  border: "4px solid black",
  borderRadius: "50%",
});
