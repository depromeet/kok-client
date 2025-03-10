import { theme } from "@repo/ui/tokens";
import { style } from "@vanilla-extract/css";

export const listItem = style({ flexGrow: 1 });

export const button = style({
  width: "100%",
  padding: "24px 0",
});

export const title = style({
  color: theme.colors.textPrimary,
});

export const searchTarget = style({
  color: theme.colors.textKok,
});

export const address = style({
  color: theme.colors.gray40,
});

export const divider = style({
  borderBottom: `0.5px solid ${theme.colors.divider1}`,
});
