import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { theme } from "../../tokens";

export const progressBarContainerStyle = style({
  margin: "0 auto",
  width: "168px",
  padding: "40px 23px",
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
