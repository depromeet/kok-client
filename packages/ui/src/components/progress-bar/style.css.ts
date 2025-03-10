import { zIndex } from "./../../../../z-index/src/index";
import { recipe } from "@vanilla-extract/recipes";
import { style, styleVariants } from "@vanilla-extract/css";
import { theme } from "../../tokens";

export const progressBarContainerStyle = style({
  margin: "0 auto",
  width: "100%",
  maxWidth: "600px",
  padding: "40px 23px",
  position: "fixed",
  top: 0,
  zIndex: zIndex.floating,
});

export const progressBarRecipe = recipe({
  base: {
    width: "36px",
    height: "4px",
    borderRadius: "2px",
    flexShrink: 0,
    minWidth: "36px",
  },

  variants: {
    active: {
      true: { backgroundColor: theme.colors.gray95 },
      false: { backgroundColor: theme.colors.gray15 },
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
