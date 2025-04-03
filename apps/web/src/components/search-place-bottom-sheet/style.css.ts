import { theme } from "@repo/ui/tokens";
import { zIndex } from "@repo/z-index";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const backgroundDimmed = style({
  position: "fixed",
  top: 0,
  width: "100%",
  maxWidth: "600px",
  height: "100dvh",
  background: "rgba(0,0,0,0.65)",
  zIndex: zIndex.overlay - 1,
});

export const containerRecipe = recipe({
  base: {
    position: "fixed",
    bottom: 0,
    padding: "24px 20px 20px 20px",
    width: "100%",
    maxWidth: "600px",
    borderTopLeftRadius: "32px",
    borderTopRightRadius: "32px",
    transition: "height 0.3s ease-in-out",
    backgroundColor: theme.colors.bg.base2,
    zIndex: zIndex.overlay,
  },

  variants: {
    isFocus: {
      true: { height: "80%" },
      false: { height: "216px" },
      finish: {},
    },
  },

  defaultVariants: {
    isFocus: false,
  },
});

export const placeContainer = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  justifyContent: "space-between",
});

export const buttonContainer = style({
  position: "absolute",
  bottom: 20,
  right: 20,
  left: 20,
});

export const input = style({
  margin: "20px 0",
});

export const searchButton = style({
  WebkitTapHighlightColor: "transparent",
});

export const seachResultList = style({
  width: "100%",
  height: "100%",
  overflow: "auto",

  scrollbarWidth: "none",
  "::-webkit-scrollbar": {
    display: "none",
  },
});

export const noResult = style({
  marginTop: "40px",
  color: theme.colors.text.caption,
});

export const resultContainer = style({ width: "100%", height: "100%" });

export const result = style({
  padding: "0 8px",
});

export const selectedAddress = style({ color: theme.colors.gray40 });
