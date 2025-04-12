import { theme } from "@repo/ui/tokens";
import { zIndex } from "@repo/z-index";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const containerRecipe = recipe({
  base: {
    position: "fixed",
    bottom: 0,
    padding: "24px 20px 20px 20px",
    width: "100%",
    maxWidth: "600px",
    borderTopLeftRadius: "32px",
    borderTopRightRadius: "32px",
    transition: "height 2s ease-in-out",
    backgroundColor: theme.colors.bg.base2,
    zIndex: zIndex.floating,
  },

  variants: {
    isFocus: {
      true: { height: "80%" },
      false: {},
    },
  },
});

export const wrapper = style({
  width: "100%",
});

export const bannerContainerStyle = style({
  position: "relative",
  width: "100%",
  maxWidth: "600px",
  zIndex: zIndex.floating,
});

export const textContainerStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  margin: "28px 24px",
});

export const deleteBtnStyle = style({
  position: "absolute",
  right: 12,
  top: 12,
  cursor: "pointer",
  zIndex: zIndex.overlay,
});

export const directionLineStyle = style({
  width: "100%",
  height: "14px",
  padding: "8px",
  backgroundColor: theme.colors.gray15,
  margin: "24px 0",
  borderRadius: "10px",
});

export const resultBannerContainerStyle = style({
  position: "relative",
  width: "100%",
  maxWidth: "600px",
  justifyContent: "center",
  alignItems: "center",
  zIndex: zIndex.floating,
  paddingBottom: "32px",
});

export const resultBannerContainerRecipe = recipe({
  base: resultBannerContainerStyle,
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
      default: theme.colors.orange30,
    },
  },
  defaultVariants: {
    subway: "default",
  },
});

export const questionStyle = style({
  color: theme.colors.gray0,
  padding: "9px 10px",
  backgroundColor: "rgba(255, 255, 255, 0.16)",
  borderRadius: "100px",
  border: "1px solid rgba(255, 255, 255, 0.35)",
  marginTop: "22px",
});

export const resultContainerStyle = style({
  margin: "24px 24px 32px 24px",
  position: "relative",
  zIndex: zIndex.toast,
});

export const patternWrapperStyle = style({
  position: "absolute",
  width: "100%",
  height: "100%",
});

export const lineIndicatorStyle = style({
  display: "flex",
});

export const lineContentStyle = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
});

export const lineNumberStyle = style({
  fontSize: "14px",
  fontWeight: "bold",
});

export const timeDisplayStyle = style({
  fontSize: "20px",
  fontWeight: "bold",
  flexShrink: 0,
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

export const backBtnStyle = style({
  position: "absolute",
  left: "16px",
});

export const titleStyle = style({
  flex: 1,
  textAlign: "center",
});
