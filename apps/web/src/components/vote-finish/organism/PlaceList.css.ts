import { style } from "@vanilla-extract/css";

export const listContainer = style({
  display: "flex",
  width: "100vw",
  maxWidth: "600px",
  overflow: "auto",
  gap: 12,
  flexWrap: "nowrap",
  paddingTop: "10.2vh",

  "::-webkit-scrollbar": {
    display: "none",
  },
});
