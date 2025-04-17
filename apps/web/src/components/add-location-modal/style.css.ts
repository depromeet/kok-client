import { theme } from "@repo/ui/tokens";
import { zIndex } from "@repo/z-index";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const container = style({
  width: "100%",
  height: "100%",
  backgroundColor: "#ffffff",
  zIndex: zIndex.toast,
});

export const searchSection = style({
  padding: "24px 20px 20px 20px",
  width: "100%",
  height: "calc(100% - 58px)",
});

export const searchList = style({
  marginTop: "12px",
  overflow: "auto",

  scrollbarWidth: "none",
  "::-webkit-scrollbar": {
    display: "none",
  },
});

export const searchItem = style({
  margin: "24px 0",
  color: theme.colors.text.primary,
});

export const searchItemButton = style({
  width: "100%",
});

export const divider = style({
  height: "14px",
  border: `0.5px solid ${theme.colors.text.divider}`,
});

export const horizontalDivider = style({
  width: "100%",
  borderTop: `1px solid ${theme.colors.text.divider}`,
});

export const lineNumberRecipe = recipe({
  base: {
    borderRadius: "100px",
    color: "white",
  },
  variants: {
    size: {
      sm: {
        padding: "2px 6px",
        minWidth: "20px",
        minHeight: "20px",
      },
      md: {
        padding: "4px 12px",
        minWidth: "40px",
        minHeight: "40px",
      },
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

export const stationName = style({
  paddingTop: "1px",
});

export const mapContainer = style({
  width: "100%",
  height: "calc(100dvh - 58px)",
  backgroundColor: "black",
});

export const bottomSheetContainer = style({
  position: "fixed",
  bottom: 0,
  padding: "24px 20px 20px 20px",
  width: "100%",
  maxWidth: "600px",
  borderTopLeftRadius: "32px",
  borderTopRightRadius: "32px",
  backgroundColor: theme.colors.bg.base2,
  zIndex: zIndex.overlay + 2,
});

export const infoContainer = style({
  padding: "0 8px",
});

export const description = style({
  color: theme.colors.text.kok,
});

export const gradientBackground = style({
  paddingTop: "58px",
  width: "100%",
  height: "100%",
  background: `linear-gradient(-170deg, ${theme.colors.yellow5} 0%, ${theme.colors.orange5} 50%, ${theme.colors.bg.base} 95%)`,
});

export const bannerContainer = style({
  position: "relative",
  marginTop: "25%",
});

export const banner = style({
  padding: "24px",
  width: "fit-content",
  borderRadius: "100px",
  border: "10px solid",
  zIndex: zIndex.floating + 5,
  background: theme.colors.gray0,
  flexWrap: "wrap",
});

export const bannerLine = style({
  position: "absolute",
  top: "50%",
  left: 0,
  transform: "translateY(-50%)",
  width: "100%",
  borderTop: "24px solid",
  borderBottom: "24px solid",
});
