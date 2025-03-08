import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";

export const progressBarContainerStyle = style({
  margin: "0 auto",
  width: "168px",
  padding: "40px 23px",
});

export const progressBarRecipe = recipe({
  base: {
    width: "36px",
    height: "4px",
    borderRadius: "2px",
    flexShrink: 0,
    minWidth: "36px",
  },

  variants: {
    active: {
      true: { backgroundColor: "black" }, //todo : 색상 표 대로 수정하기
      false: { backgroundColor: "lightgray" }, //todo : 색상 표 대로 수정하기
    },
  },
});
