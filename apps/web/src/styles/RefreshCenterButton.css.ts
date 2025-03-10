import { style } from "@vanilla-extract/css";
import { theme } from "@repo/ui/tokens";

export const container = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "fit-content",
  height: "36px",
  borderRadius: "100px",
  padding: "12px",
  cursor: "pointer",
  backgroundColor: theme.colors.gray0,
});

export const locationText = style({
  margin: "0 8px 0 10px",
  color: theme.colors.gray90,
});

export const stationText = style({
  marginLeft: "8px",
  color: theme.colors.gray95,
});
