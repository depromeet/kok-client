import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { theme } from "../../tokens";

export type ButtonVariants = RecipeVariants<typeof buttonReceipe>;

const buttonReset = style({
  cursor: "pointer",
  fontFamily: "inherit",
  border: 0,
});

export const buttonReceipe = recipe({
  base: [
    buttonReset,
    {
      color: "white",
      borderRadius: "100px",
      boxSizing: "border-box",

      ":disabled": {
        backgroundColor: theme.colors.gray[20],
        cursor: "not-allowed",
      },
    },
  ],

  variants: {
    variant: {
      primary: {
        backgroundColor: theme.colors.gray[95],
      },
      secondary: {
        backgroundColor: theme.colors.orange[40],
      },
    },

    width: {
      full: { width: "100%" },
      fit: { width: "fit-content" },
      auto: { width: "auto" },
    },

    padding: {
      none: { padding: 0 },
      sm: { padding: "16px" },
      md: { padding: "18px" },
    },
  },

  defaultVariants: {
    variant: "primary",
    width: "full",
    padding: "md",
  },
});
