import { style } from "@vanilla-extract/css";
import { zIndex } from "@repo/z-index";
import { theme } from "@repo/ui/tokens";

export const fullScreenMapContainerStyle = style({
  position: "fixed",
  top: 0,
  width: "100%",
  maxWidth: "600px",
  height: "100vh",
  zIndex: zIndex.overlay,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
});

export const containerStyle = style({
  width: "100%",
  display: "flex",
  overflowX: "auto",
  scrollbarWidth: "none",
  WebkitOverflowScrolling: "touch",
  "::-webkit-scrollbar": {
    display: "none",
  },
  gap: 8,
});

export const FilterStyle = style({
  width: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",
  paddingBottom: "8px",
});

export const filterTextStyle = style({
  color: theme.colors.bgPrimary,
  whiteSpace: "nowrap",
  textAlign: "center",
  marginTop: "4px",
  padding: "4px 6px",
});

export const selectedFilterTextStyle = style({
  color: theme.colors.gray0,
  background: theme.colors.orange50,
  borderRadius: 1000,
  whiteSpace: "nowrap",
});

export const iconContainerStyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 12px",
});
