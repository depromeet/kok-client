import { theme } from "@repo/ui/tokens";
import { style } from "@vanilla-extract/css";

export const background = style({
  padding: "68px 20px 20px 20px",
  width: "100%",
  height: "100dvh",
  background: `linear-gradient(-170deg, ${theme.colors.yellow5} 0%, ${theme.colors.orange5} 50%, ${theme.colors.bg.base} 95%)`,
});

export const header = style({});

export const speachBubble = style({
  marginBottom: "8px",
  position: "relative",
  display: "block",
  padding: "8px 10px",
  width: "fit-content",
  borderRadius: "12px",
  background: theme.colors.bg1,
  backdropFilter: "blur(15px)",
});

export const speachBubbleTail = style({
  position: "absolute",
  width: "8px",
  height: "8px",
  bottom: "-4px",
  left: "40%",
  background: theme.colors.bg1,
  transform: "rotate(45deg)",
  borderBottomRightRadius: "2px",
});

export const descriptionContainer = style({
  color: theme.colors.text.caption,
});

export const numbering = style({
  padding: "5px 9px",
  fontSize: "11px",
  textAlign: "center",
  backgroundColor: theme.colors.navy,
  color: theme.colors.text.white,
  borderRadius: "100%",
});

export const buttonContainer = style({
  width: "100%",
});

export const button = style({
  position: "relative",
  fontSize: 16,
  fontWeight: 600,
});

export const buttonBackground = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  opacity: 0,
  backgroundColor: "rgba(0, 0, 0, 0.1)",
  zIndex: -1,
});
