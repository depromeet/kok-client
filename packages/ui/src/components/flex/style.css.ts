import { recipe } from "@vanilla-extract/recipes";

export const flexRecipe = recipe({
  base: {
    display: "flex",
  },
  variants: {
    justify: {
      start: { justifyContent: "flex-start" },
      center: { justifyContent: "center" },
      end: { justifyContent: "flex-end" },
      between: { justifyContent: "space-between" },
    },
    align: {
      start: { alignItems: "flex-start" },
      center: { alignItems: "center" },
      end: { alignItems: "flex-end" },
    },
    direction: {
      row: { flexDirection: "row" },
      column: { flexDirection: "column" },
    },
  },
  defaultVariants: {
    direction: "row",
  },
});
