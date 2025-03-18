import { theme } from "@repo/ui/tokens";
import { recipe } from "@vanilla-extract/recipes";
import { zIndex } from "@repo/z-index";

export const containerRecipe = recipe({
  base: {
    position: "fixed",
    bottom: 0,
    padding: "24px 20px 20px 20px",
    width: "100%",
    maxWidth: "600px",
    borderTopLeftRadius: "32px",
    borderTopRightRadius: "32px",
    transition: "height 2s ease-in-out",
    backgroundColor: theme.colors.bg.base2,
    zIndex: zIndex.floating,
  },

  variants: {
    isFocus: {
      true: { height: "80%" },
      false: {},
    },
  },
});
