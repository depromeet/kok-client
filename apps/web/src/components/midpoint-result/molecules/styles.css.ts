import { theme } from "@repo/ui/tokens";
import { zIndex } from "@repo/z-index";
import { keyframes, style } from "@vanilla-extract/css";

const shimmer = keyframes({
  "0%": {
    backgroundPosition: "200% 0",
  },
  "100%": {
    backgroundPosition: "-200% 0",
  },
});

export const skeletonLoading = style({
  width: "45px",
  height: "16px",
  marginLeft: "8px",
  borderRadius: "4px",
  background: `linear-gradient(90deg, ${theme.colors.gray20} 25%, ${theme.colors.gray30} 50%, ${theme.colors.gray20} 75%)`,
  backgroundSize: "200% 100%",
  animation: `${shimmer} 1.5s infinite`,
});

export const headerStyle = style({
  backgroundColor: theme.colors.gray0,
  position: "fixed",
  top: 0,
  width: "100%",
  maxWidth: "600px",
  height: "58px",
  zIndex: zIndex.toast,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
});

export const titleStyle = style({
  flex: 1,
  textAlign: "center",
});

export const backBtnStyle = style({
  position: "absolute",
  left: "8px",
});

export const container = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "36px",
  borderRadius: "100px",
  padding: "12px",
  cursor: "pointer",
  backgroundColor: theme.colors.gray0,
  whiteSpace: "nowrap",
});

export const locationTextStyle = style({
  margin: "0 8px 0 10px",
  color: theme.colors.gray90,
});

export const stationTextStyle = style({
  marginLeft: "8px",
  color: theme.colors.gray95,
});

export const transportContainerStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: zIndex.overlay,
});

export const progressBarStyle = style({
  height: "14px",
  flexGrow: 1,
  borderTopRightRadius: "10px",
  borderBottomRightRadius: "10px",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1,
  transform: "translate(-2px, 0)",
});

export const AddLocationButtonStyle = style({
  background: theme.colors.orange40,
  padding: "0 12px",
  width: "150px",
  height: "36px",
  borderRadius: "100px",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
});
