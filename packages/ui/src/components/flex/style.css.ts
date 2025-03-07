import { recipe } from "@vanilla-extract/recipes";

export const flexRecipe = recipe({
  base: {
    display: "flex",
  },
  variants: {
    justify: {
      "justify-start": { justifyContent: "flex-start" },
      "justify-center": { justifyContent: "center" },
      "justify-end": { justifyContent: "flex-end" },
      "justify-between": { justifyContent: "space-between" },
    },
    align: {
      "items-start": { alignItems: "flex-start" },
      "items-center": { alignItems: "center" },
      "items-end": { alignItems: "flex-end" },
    },
    direction: {
      row: { flexDirection: "row" },
      column: { flexDirection: "column" },
    },
  },
  defaultVariants: {
    direction: "row", // 기본값 지정
  },
});
