import { style, keyframes } from "@vanilla-extract/css";
import { theme } from "@repo/ui/tokens";
import { zIndex } from "@repo/z-index";

export const containerStyle = style({
  paddingTop: "5.8vh",
  height: "100dvh",
  width: "min(600px, 100vw)",
  overflow: "hidden",
});

export const innerContainerStyle = style({
  width: "100%",
});

export const backgroundStyle = style({
  position: "fixed",
  zIndex: -1,
  top: 0,
  left: "50%",
  transform: "translateX(-50%)",
  width: "min(600px, 100vw)",
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

const shimmer = keyframes({
  "0%": {
    backgroundPosition: "200% 0",
  },
  "100%": {
    backgroundPosition: "-200% 0",
  },
});

export const skeletonLoading = style({
  width: 220,
  height: 280,
  borderRadius: 20,
  background: `linear-gradient(90deg, ${theme.colors.gray20} 25%, ${theme.colors.gray30} 50%, ${theme.colors.gray20} 75%)`,
  backgroundSize: "200% 100%",
  animation: `${shimmer} 1.5s infinite`,
});

export const buttonNumberContainer = style({
  position: "absolute",
  height: 28,
  left: 44,
  padding: "0 10px",
  borderRadius: 14,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  top: 0,
  transform: "translateY(-50%)",
});

export const buttonNumberText = style({
  paddingLeft: 10,
});
