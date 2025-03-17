import { zIndex } from "./../../../../z-index/src/index";
import { recipe } from "@vanilla-extract/recipes";
import { style, styleVariants } from "@vanilla-extract/css";
import { theme } from "../../tokens";

export const progressBarContainerStyle = style({
  margin: "0 auto",
  width: "100%",
  maxWidth: "600px",
  padding: "24px",
  position: "fixed",
  top: 0,
  zIndex: zIndex.floating,
});

export const progressBarRecipe = recipe({
  base: {
    flexShrink: 0,
    minWidth: "10px",
  },

  variants: {
    status: {
      current: {
        width: "32px",
        height: "10px",
        borderRadius: "16px",
        backgroundColor: theme.colors.gray95,
      },
      active: {
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: theme.colors.gray15,
      },
      inactive: {
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: theme.colors.gray15,
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
