import { theme } from "@repo/ui/tokens";
import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  position: "relative",
});

export const sliderContainerStyle = style({
  position: "relative",
  width: "min(600px, 100vw)",
  maxWidth: 600,
  display: "flex",
  overflow: "hidden",
  flexWrap: "nowrap",
});

export const innerContainerStyle = style({
  display: "flex",
  zIndex: 10,
});

export const leftArrowContainerStyle = style({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  left: 26,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  zIndex: 20,
});

export const rightArrowContainerStyle = style({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  right: 26,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  zIndex: 20,
});

export const arrowStationStyle = style({
  width: 44,
  color: theme.colors.icon.default,
  fontSize: 12,
  fontWeight: 600,
  textAlign: "center",
});
