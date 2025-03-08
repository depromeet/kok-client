import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";

export const progressBarContainerStyle = style({
  margin: "40px auto",
  width: "168px",
  padding: "0 23px",
});

export const progressStepRecipe = recipe({
  base: {
    width: "36px",
    height: "4px",
    borderRadius: "2px",
    flexShrink: 0,
    minWidth: "36px",
  },
  variants: {
    active: {
      true: { backgroundColor: "black" },
      false: { backgroundColor: "lightgray" },
    },
  },
});
