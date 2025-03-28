import { style } from "@vanilla-extract/css";

export const ProfileItemLayoutStyle = style({
  width: "115px",
  height: "128px",
  cursor: "pointer",
  outline: "none",
});

export const imageContainerStyle = style({
  width: "80px",
  height: "80px",
  position: "relative",
  overflow: "hidden",
  transformOrigin: "50% 80%",
  borderRadius: "50%",
  border: "4px solid transparent",
});

export const selectedImageStyle = style({
  borderColor: "black",
});
