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

export const container = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "fit-content",
  height: "36px",
  borderRadius: "100px",
  padding: "12px",
  cursor: "pointer",
  backgroundColor: theme.colors.gray0,
});

export const locationTextStyle = style({
  margin: "0 8px 0 10px",
  color: theme.colors.gray90,
});

export const stationTextStyle = style({
  marginLeft: "8px",
  color: theme.colors.gray95,
});

export const bannerContainerStyle = style({
  position: "absolute",
  width: "600px",
  bottom: 180,
  zIndex: zIndex.floating,
});

export const iconsContainerStyle = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
});

export const greenCircleStyle = style({
  position: "absolute",
  top: "30%",
  left: "10%",
  transform: "translate(-50%, -50%) rotate(8.56deg)",
});

export const blueCircleStyle = style({
  position: "absolute",
  bottom: 0,
  left: "25%",
});

export const orangeCircleStyle = style({
  position: "absolute",
  bottom: "25%",
  right: "8%",
});

export const textContainerStyle = style({
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: 16,
});

export const deleteBtnStyle = style({
  position: "absolute",
  right: 12,
  top: 12,
  cursor: "pointer",
});

export const headerStyle = style({
  backgroundColor: theme.colors.gray0,
  position: "absolute",
  top: 0,
  width: "600px",
  height: "58px",
  zIndex: zIndex.overlay,
  display: "flex",
  alignItems: "center",
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

export const directionLineStyle = style({
  width: "100%",
  margin: "24px 0",
  backgroundColor: theme.colors.gray15,
  height: "20px",
  borderRadius: "20px",
});

export const overlayStyle = style({
  position: "fixed",
  top: 0,
  left: "50%",
  transform: "translateX(-50%)",
  bottom: 0,
  width: "600px",
  backgroundColor: "rgba(0, 0, 0, 0.65)",
  zIndex: zIndex.floating,
});

export const refreshStyle = style({
  position: "absolute",
  top: 74,
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: zIndex.floating,
});
