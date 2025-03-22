import { style } from "@vanilla-extract/css";
import { zIndex } from "@repo/z-index";
import { theme } from "@repo/ui/tokens";

export const containerStyle = style({
  paddingTop: "10.5vh",
});

export const backgroundStyle = style({
  position: "fixed",
  zIndex: -1,
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background:
    "linear-gradient(174deg, var(--Yellow-5, #FFFBEA) 0%, var(--Orange-5, #FFF2ED) 47.59%, var(--bg-base, #FBFBFB) 66.63%)",
});

export const titleStyle = style({
  color: theme.colors.text.primary,
});

export const scrollArea = style({
  height: "100%",
  overflow: "auto",
  flex: 1,
});

export const footerContainerStyle = style({
  width: "100%",
  maxWidth: 600,
  position: "fixed",
  padding: "16px 20px",
  bottom: 0,
  left: 0,
  zIndex: zIndex.floating,
});
