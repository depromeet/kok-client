import { theme } from "@repo/ui";
import { style, styleVariants } from "@vanilla-extract/css";

const base = style({ color: "white" });
export const variant = styleVariants({
  primary: [base, { background: theme.colors.blue80 }],
  secondary: [base, { background: theme.colors.red80 }],
});

// 배열로 합성 가능
export const nextButton = style([
  variant.primary,
  {
    padding: "8px 14px",
    borderRadius: 50,
    backgroundColor: "none",
    border: "1px solid black",
  },
]);

export const addButton = style([
  variant.secondary,
  {
    padding: "8px 14px",
    borderRadius: 50,
    backgroundColor: "none",
    border: "1px solid black",
  },
]);
