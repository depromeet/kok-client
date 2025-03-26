import { theme } from "@repo/ui/tokens";
import { style } from "@vanilla-extract/css";

export const CreateBtnLayoutStyle = style({
  width: "115px",
  cursor: "pointer",
  outline: "none",
});

export const BtnLayoutStyle = style({
  width: "80px",
  height: "80px",
  backgroundColor: theme.colors.gray20,
  borderRadius: "50%",
});

export const TooltipBoxStyle = style({
  width: "120px",
  padding: "8px",
  backgroundColor: "#FFFFFF",
  borderRadius: "12px",
});
