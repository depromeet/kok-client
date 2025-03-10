import { theme } from "@repo/ui/tokens";
import { zIndex } from "@repo/z-index";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

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

export const wrapper = style({
  width: "100%",
});

export const input = style({ padding: "20px 0" });

export const seachResultList = style({
  width: "100%",
  overflowY: "scroll",
  flexWrap: "wrap",
});

export const result = style({
  padding: "0 8px",
});
export const selectedAddress = style({ color: theme.colors.gray40 });
