import { style } from "@vanilla-extract/css";
import { theme } from "@repo/ui/tokens";
import { zIndex } from "@repo/z-index";

export const containerStyle = style({
  paddingTop: "5.8vh",
  height: "100dvh",
  width: "100vw",
  overflow: "hidden",
});

export const innerContainerStyle = style({
  width: "100%",
});

export const backgroundStyle = style({
  position: "fixed",
  zIndex: -1,
  top: 0,
  left: 0,
  width: "100vw",
  height: "100dvh",
  background:
    "linear-gradient(0deg, #F6F6F6 0%, #F6F6F6 100%), var(--Gray-5, #F6F6F6)",
});

export const subtitleStyle = style({
  padding: "9px 12px",
  backgroundColor: "#fff",
  backdropFilter: "blur(15px)",
  borderRadius: 10,
});

export const timeStyle = style({
  color: theme.colors.text.kok,
});

export const topNavStyle = style({
  width: "100%",
  backgroundColor: theme.colors.bg4,
  height: 44,
  padding: "4px 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
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
