import { zIndex } from "./../../../../z-index/src/index";
import { recipe } from "@vanilla-extract/recipes";
import { style, styleVariants } from "@vanilla-extract/css";

export const progressBarContainerStyle = style({
  margin: "0 auto",
  width: "100%",
  maxWidth: "600px",
  padding: "24px",
  top: 0,
  zIndex: zIndex.floating,
});

export const progressBarRecipe = recipe({
  base: {
    flexShrink: 0,
    minWidth: "9px",
  },

  variants: {
    status: {
      active: {
        width: "26px",
        height: "8px",
        borderRadius: "14px",
      },
      inactive: {
        width: "8px",
        height: "8px",
        borderRadius: "14px",
      },
    },
  },
});

export const backgroundStyle = styleVariants({
  transparent: {
    backgroundColor: "transparent",
  },
  solid: {
    backgroundColor: "white",
  },
});
