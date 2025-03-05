import { recipe } from "@vanilla-extract/recipes";
import { theme } from "../tokens";
import { style } from "@vanilla-extract/css";

const buttonReset = style({
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  fontFamily: "inherit",
});

export const buttonReceipe = recipe({
  base: [
    buttonReset,
    {
      color: "white",
      borderRadius: "100px",
      boxSizing: "border-box",

      ":disabled": {
        backgroundColor: theme.colors.gray20,
        cursor: "not-allowed",
      },
    },
  ],

  variants: {
    buttonType: {
      primary: {
        backgroundColor: theme.colors.gray95,
      },
      secondary: {
        backgroundColor: theme.colors.orange40,
      },
    },

    width: {
      full: { width: "100%" },
    },

    padding: {
      none: { padding: 0 },
      normal: { padding: "18px" },
    },
  },

  defaultVariants: {
    buttonType: "primary",
    width: "full",
    padding: "normal",
  },
});
