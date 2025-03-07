import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const textReset = style({});

export const textRecipe = recipe({
  base: [textReset],
  variants: {},
});
