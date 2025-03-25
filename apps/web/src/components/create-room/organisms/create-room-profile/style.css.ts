import { theme } from "@repo/ui/tokens";
import { zIndex } from "@repo/z-index";
import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  // paddingTop: "56px",
  height: "calc(100% - 56px)",
  // paddingBottom: "92px",
});

export const headingContainerStyle = style({
  marginTop: "32px",
});

export const imageContainerStyle = style({
  marginTop: "39px",
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

export const errorMessageStyle = style({
  color: theme.colors.red50,
});
