import { style } from "@vanilla-extract/css";

export const ProfileItemLayoutStyle = style({
  width: "115px",

  cursor: "pointer",
  outline: "none",
});

export const imageContainerStyle = style({
  width: "76px",
  height: "76px",
  position: "relative",
  overflow: "hidden",
  transformOrigin: "50% 80%",
  borderRadius: "50%",
  border: "4px solid transparent",
  boxSizing: "content-box",
});

export const selectedImageStyle = style({
  borderColor: "black",
});
