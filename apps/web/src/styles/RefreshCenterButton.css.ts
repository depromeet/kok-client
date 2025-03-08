import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "fit-content",
  height: "36px",
  borderRadius: "100px",
  padding: "12px",
  cursor: "pointer",
});

export const locationText = style({
  margin: "0 8px 0 10px",
  fontSize: "14px",
});

export const stationText = style({
  marginLeft: "8px",
  fontSize: "14px",
});
