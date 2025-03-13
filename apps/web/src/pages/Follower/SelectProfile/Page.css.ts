import { theme } from "@repo/ui/tokens";
import { style } from "@vanilla-extract/css";

export const container = style({
  height: "100vh",
  // backgroundColor: theme.colors.semantic.bg.base,
});

export const title = style({
  fontSize: 22,
  fontWeight: 800,
  textAlign: "center",
});

export const listContainer = style({
  flex: 1,
  overflow: "auto",
  position: "relative",
});

export const gradient = style({
  position: "absolute",
  width: "100%",
  top: -20,
  left: 0,
  height: 40,
  background:
    "linear-gradient(180deg, #FBFBFB 70.62%, rgba(251, 251, 251, 0.00) 100%)",
  zIndex: 10,
});

export const scrollArea = style({
  height: "100%",
  overflow: "auto",
});
