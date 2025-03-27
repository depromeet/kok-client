import { theme } from "@repo/ui/tokens";
import { zIndex } from "@repo/z-index";
import { style } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const container = style({
  width: "100%",
  height: "100%",
  backgroundColor: "#ffffff",
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

export type LineNumberVariants = RecipeVariants<typeof lineNumberRecipe>;
export type SubwayProps = Pick<
  NonNullable<LineNumberVariants>,
  "subway"
>["subway"];

export const lineNumberRecipe = recipe({
  base: {
    padding: "2px 6px",
    minWidth: "20px",
    minHeight: "20px",
    borderRadius: "100px",
    color: "white",
  },
  variants: {
    subway: {
      line1: { background: theme.colors.subwayAdjust1 },
      line2: { background: theme.colors.subwayAdjust2 },
      line3: { background: theme.colors.subwayAdjust3 },
      line4: { background: theme.colors.subwayAdjust4 },
      line5: { background: theme.colors.subwayAdjust5 },
      line6: { background: theme.colors.subwayAdjust6 },
      line7: { background: theme.colors.subwayAdjust7 },
      line8: { background: theme.colors.subwayAdjust8 },
      line9: { background: theme.colors.subwayAdjust9 },
      shinbundang: { background: theme.colors.subwayAdjustShinbundang },
      gyeonguiJungang: { background: theme.colors.subwayAdjustGyeonguiJungang },
      suinbundang: { background: theme.colors.subwayAdjustSuinbundang },
      default: theme.colors.orange30,
    },
  },
  defaultVariants: {
    subway: "default",
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
