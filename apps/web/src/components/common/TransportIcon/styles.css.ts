import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export type TransportIconVariants = RecipeVariants<typeof transportIconRecipe>;

export const transportIconRecipe = recipe({
  base: {
    borderRadius: "100px",
    color: "white",
  },
  variants: {
    size: {
      sm: {
        padding: "2px 6px",
        minWidth: "20px",
        minHeight: "20px",
      },
      md: {
        padding: "4px 12px",
        minWidth: "40px",
        minHeight: "40px",
      },
      "sm-icon": {
        padding: "2px",
        minWidth: "20px",
        minHeight: "20px",
      },
    },
  },
  defaultVariants: {
    size: "sm",
  },
});
