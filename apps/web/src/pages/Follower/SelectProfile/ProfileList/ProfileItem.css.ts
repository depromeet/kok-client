import { theme } from "@repo/ui/tokens";
import { style } from "@vanilla-extract/css";

export const container = style({
  width: 115,
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
  color: theme.colors.semantic.text.caption,
  textAlign: "center",
});
