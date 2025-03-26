import { style } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import "../../tokens/font.css";

export type TextVariants = RecipeVariants<typeof textRecipe>;

const textReset = style({});

export const textRecipe = recipe({
  base: [textReset],
  variants: {
    variant: {
      heading1: {
        fontFamily: "NanumSquareRoundOTF",
        fontSize: "32px",
        fontStyle: "normal",
        fontWeight: 800,
        lineHeight: "100%",
        letterSpacing: "-0.16px",
      },
      heading2: {
        fontFamily: "NanumSquareRoundOTF",
        fontSize: "26px",
        fontStyle: "normal",
        fontWeight: 800,
        lineHeight: "100%",
        letterSpacing: "-0.13px",
      },
      heading3: {
        fontFamily: "NanumSquareRoundOTF",
        fontSize: "22px",
        fontStyle: "normal",
        fontWeight: 800,
        lineHeight: "150%",
        letterSpacing: "-0.11px",
      },

      title1: {
        fontSize: "24px",
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "100%",
      },
      title2: {
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "100%",
      },
      title3: {
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "100%",
      },
      title4: {
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "100%",
      },

      body1: {
        fontFamily: "",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "100%",
      },
      body2: {
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "150%",
      },
      body3: {
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "100%",
      },

      caption: {
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "100%",
      },
      subway: {
        fontSize: "10px",
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "100%",
      },
    },
  },
});
