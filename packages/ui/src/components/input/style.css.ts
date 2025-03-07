import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { theme } from "../../tokens";

export type InputVariants = RecipeVariants<typeof inputRecipe>;

const inputReset = style({
  border: 0,
  outline: "none",
  height: "48px",
  boxSizing: "border-box",
});

export const inputRecipe = recipe({
  base: [
    inputReset,
    {
      backgroundColor: theme.colors.gray25,
      caretColor: theme.colors.orange40,

      "::placeholder": {
        color: theme.colors.gray30,
      },

      ":focus": {
        borderColor: theme.colors.gray95,
      },

      ":disabled": {
        backgroundColor: theme.colors.gray20,
        cursor: "not-allowed",
      },
    },
  ],

  variants: {
    variant: {
      rectangular: {
        borderRadius: "12px",
      },
      rounded: {
        borderRadius: "100px",
      },
    },
    width: {
      full: { width: "100%" },
      fit: { width: "fit-content" },
      auto: { width: "auto" },
      profile: { width: "211px" },
      people: { width: "72px" },
    },
    padding: {
      none: { padding: 0 },
      sm: { padding: "16px" },
      md: { padding: "18px" },
    },
    hasRightIcon: {
      true: {
        paddingRight: "40px",
      },
    },
  },

  defaultVariants: {
    variant: "rounded",
    width: "full",
    padding: "sm",
  },
});

// 문자 카운터 ex) 0/10
export const charCounter = style({
  position: "absolute",
  right: "16px",
  top: "50%",
  transform: "translateY(-50%)",
  fontSize: "14px",
  color: theme.colors.gray30,
  pointerEvents: "none",
});

export const inputContainer = style({
  position: "relative",
  display: "inline-block",
  width: "auto",
});

export const iconStyle = style({
  position: "absolute",
  right: "12px",
  top: "50%",
  transform: "translateY(-50%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  pointerEvents: "auto",
  cursor: "pointer",
});
