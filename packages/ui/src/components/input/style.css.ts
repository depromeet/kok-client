import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { theme } from "../../tokens";

export type InputVariants = RecipeVariants<typeof inputRecipeStyle>;

const inputResetStyle = style({
  border: 0,
  outline: "none",
  height: "48px",
  boxSizing: "border-box",

  //호진 todo : body3을 쓰면 되지 않나..?
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "100%",
});

export const inputRecipeStyle = recipe({
  base: [
    inputResetStyle,
    {
      backgroundColor: theme.colors.gray0,
      caretColor: theme.colors.orange40,

      "::placeholder": {
        color: theme.colors.gray30,
      },

      ":focus": {
        borderColor: theme.colors.gray0,
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
    hasRightElement: {
      true: {
        paddingRight: "40px",
      },
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
    variant: "rounded",
    width: "full",
    padding: "sm",
    isInvalid: false,
  },
});

// 문자 카운터 ex) 0/10
export const charCounterStyle = style({
  position: "absolute",
  right: "16px",
  top: "50%",
  transform: "translateY(-50%)",
  fontSize: "14px",
  color: theme.colors.gray30,
  pointerEvents: "none",
});

export const inputContainerStyle = style({
  position: "relative",
  display: "inline-block",
  width: "100%",
});

export const rightElementStyle = style({
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
