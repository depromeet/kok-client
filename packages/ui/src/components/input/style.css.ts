import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { theme } from "../../tokens";

export type InputVariants = RecipeVariants<typeof inputContainerRecipe>;

export const inputContainerRecipe = recipe({
  base: {
    display: "inline-block",
    width: "100%",
  },

  variants: {
    variant: {
      text: {
        background: theme.colors.btn.input.default2,
      },
      search: {
        background: theme.colors.btn.input.default,
      },
    },
    width: {
      full: { width: "100%" },
      fit: { width: "fit-content" },
      auto: { width: "auto" },
      profile: { width: "250px" },
      people: { width: "72px" },
      custom: {},
    },
    padding: {
      none: { padding: 0 },
      xs: { padding: "12px" },
      sm: { padding: "16px" },
      md: { padding: "18px" },
    },
    rounded: {
      full: { borderRadius: "100px" },
      sm: { borderRadius: "12px" },
    },
    isInvalid: {
      true: {
        outline: `2px solid ${theme.colors.red50}`,
      },
      false: {
        outline: "none",
      },
    },
  },

  defaultVariants: {
    variant: "text",
    width: "full",
    padding: "xs",
    rounded: "sm",
    isInvalid: false,
  },
});

const inputResetStyle = style({
  border: 0,
  outline: "none",
  boxSizing: "border-box",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "100%",
});

export const inputStyle = style([
  inputResetStyle,
  {
    caretColor: theme.colors.orange40,
    width: "100%",
    height: "24px",

    "::placeholder": {
      color: theme.colors.btn.input.text.placehorder,
    },

    ":focus": {
      borderColor: theme.colors.gray0,
    },

    ":disabled": {
      backgroundColor: theme.colors.gray20,
      cursor: "not-allowed",
    },
  },
]);

export const rightElementStyle = style({
  pointerEvents: "auto",
  cursor: "pointer",
});
