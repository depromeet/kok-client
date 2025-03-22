import { style } from "@vanilla-extract/css";
import { zIndex } from "@repo/z-index";
import { theme } from "@repo/ui/tokens";

export const containerStyle = style({
  paddingTop: "8.5vh",
});

export const backgroundStyle = style({
  position: "fixed",
  zIndex: -1,
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: theme.colors.bg2,
});

export const bottomsheetContainerStyle = style({
  width: "100%",
  maxWidth: 600,
  position: "fixed",
  bottom: 0,
  left: 0,
  padding: "26px 20px 20px 20px",
  zIndex: zIndex.floating,
  borderTopLeftRadius: 32,
  borderTopRightRadius: 32,
  boxShadow: "0px -5px 32px 0px rgba(28, 28, 28, 0.08)",
  backgroundColor: theme.colors.bg2,
});

export const buttonContainerStyle = style({
  display: "flex",
  gap: 8,
});

export const leftButtonStyle = style({
  width: 120,
  padding: "14px 21px",
  borderRadius: 100,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: `1px solid ${theme.colors.gray10}`,
});

export const rightButtonStyle = style({
  flex: 1,
  padding: "14px 0",
  borderRadius: 100,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: `linear-gradient(90deg, #263350 0%, #1B202C 100%), ${theme.colors.navy}`,
  color: "#fff",
});
