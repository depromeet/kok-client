import { theme } from "@repo/ui/tokens";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const container = style({
  width: 115,
});

export const badgeRecipe = recipe({
  base: {
    padding: "7px 10px",
    borderRadius: 12,
    fontSize: 13,
    fontWeight: 600,
  },
  variants: {
    voted: {
      finish: {
        color: theme.colors.text.label.secondary,
        backgroundColor: theme.colors.bg5,
      },
      yet: {
        color: "#fff",
        backgroundColor: theme.colors.btn.fab.bg.kok,
      },
    },
  },
});

export const img = style({
  width: 64,
  height: 64,
  borderRadius: 100,
  borderWidth: 3,
  borderStyle: "solid",
  transformOrigin: "50% 80%",
});

export const name = style({
  fontSize: 14,
  fontWeight: 500,
  color: theme.colors.gray95,
  textAlign: "center",
});

export const address = style({
  fontSize: 14,
  fontWeight: 500,
  color: theme.colors.text.caption,
  textAlign: "center",
});
