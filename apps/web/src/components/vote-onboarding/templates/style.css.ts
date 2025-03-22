import { theme } from "@repo/ui/tokens";
import { zIndex } from "@repo/z-index";
import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  paddingTop: "21px",
  height: "100%",
  paddingBottom: "160px",
});

export const titleStyle = style({
  color: theme.colors.textPrimary,
});

export const bannerStyle = style({});

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

export const LimitHour = style({
  color: theme.colors.orange60,
  fontWeight: 600,
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
