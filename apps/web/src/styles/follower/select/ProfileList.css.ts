import { style } from "@vanilla-extract/css";

export const list = style({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  maxWidth: 300,

  margin: "0 auto",
  listStyle: "none",
  rowGap: 44,
  columnGap: 64,
});
