import { style, globalStyle } from "@vanilla-extract/css";

export const gridContainerStyle = style({
  marginTop: "72px",
  paddingBottom: "92px",
  width: "100%",
  maxHeight: "70%",
  display: "grid",
  gridTemplateColumns: "repeat(2, max-content)",
  gap: "40px",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden auto",
  scrollbarWidth: "none",
  msOverflowStyle: "none",
  maskImage:
    "linear-gradient(to bottom, rgba(0,0,0,15) 85%, rgba(0,0,0,0.2) 90%, rgba(0,0,0,0) 95%)",
});

globalStyle(`${gridContainerStyle}::-webkit-scrollbar`, {
  display: "none",
});

export const maskedContainerStyle = style({
  maskImage:
    "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 5%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 85%, rgba(0,0,0,0.2) 90%, rgba(0,0,0,0) 95%)",
});

globalStyle(`${gridContainerStyle}::-webkit-scrollbar`, {
  display: "none",
});
