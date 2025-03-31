import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { keyframes, style } from "@vanilla-extract/css";
import { theme } from "../../tokens";

export type ButtonVariants = RecipeVariants<typeof buttonReceipe>;

export const buttonContainerStyle = style({
  width: "inherit",
});

const buttonReset = style({
  display: "inline-flex",
  justifyContent: "center",
  cursor: "pointer",
  fontFamily: "inherit",
  border: 0,
  WebkitTapHighlightColor: "transparent",
  overflow: "hidden",
});

const gradientMove = keyframes({
  "0%": { backgroundPosition: "0% 50%" },
  "50%": { backgroundPosition: "100% 50%" },
  "100%": { backgroundPosition: "0%" },
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
    variant: {
      primary: {
        backgroundColor: theme.colors.navy,
      },
      secondary: {
        backgroundColor: theme.colors.orange40,
      },
      "gradient-loop": {
        background: "linear-gradient(90deg, #1B202C, #263350, #1B202C)",
        backgroundSize: "200% 200%",
        animation: `${gradientMove} 4s linear infinite`,
      },
      "share-icon": {
        backgroundColor: theme.colors.gray0,
        borderRadius: "100px",
        border: `1px solid ${theme.colors.gray10}`,
      },
      border: {
        color: theme.colors.text.secondary,
        border: `1px solid ${theme.colors.gray10}`,
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
