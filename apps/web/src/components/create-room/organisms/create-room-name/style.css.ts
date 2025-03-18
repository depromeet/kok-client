import { theme } from "@repo/ui/tokens";
import { zIndex } from "@repo/z-index";
import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  paddingTop: "56px",
  height: "100%",
  paddingBottom: "160px",
});

export const invalidSpanStyle = style({
  color: theme.colors.red50,
});

export const headingContainerStyle = style({
  marginTop: "32px",
});

export const footerContainerStyle = style({
  maxWidth: "600px",
  width: "100%",
  padding: "20px 16px",
  position: "fixed",
  bottom: 0,
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: zIndex.floating,
});
