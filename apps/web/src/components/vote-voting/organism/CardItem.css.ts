import { theme } from "@repo/ui/tokens";
import { zIndex } from "@repo/z-index";
import { style, keyframes } from "@vanilla-extract/css";

export const containerStyle = style({
  width: "min(600px, 100vw)",
  maxWidth: 600,
  position: "relative",
  flexShrink: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const cardContainerStyle = style({
  backgroundColor: "#fff",
  borderRadius: 20,
  cursor: "pointer",
});

export const topContainerStyle = style({
  flex: 1,
  width: "100%",
  borderRadius: 20,
  backgroundColor: "#fff",
  padding: "28px 18px 0 18px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  position: "relative",
  overflow: "hidden",
});

export const subwayLine = style({
  height: 1,
  width: "100%",
  position: "absolute",
  bottom: 0,
  left: 0,
  borderTop: `1px dashed #D1D1D1`,
});

export const bottomContainerStyle = style({
  height: 64,
  width: "100%",
  borderRadius: 20,
  backgroundColor: "#fff",
  padding: "0px 18px",
  display: "flex",
  alignItems: "center",
});

export const innerCardContainerStyle = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "100%",
});

export const cardButtonStyle = style({
  width: "100%",
  padding: "10px 0",
  borderRadius: 100,
  backgroundColor: theme.colors.btn.input.default,
  display: "flex",
  justifyContent: "center",
  WebkitTapHighlightColor: "transparent",
});

export const cardButtonTitleStyle = style({
  fontSize: 12,
  fontWeight: 500,
});

export const subwayContainer = style({
  display: "flex",
  gap: 4,
});

export const subwayItem = style({
  padding: 5,
  borderRadius: "15px",
  color: "white",
  minWidth: 25,
  minHeight: 25,
  fontSize: 11,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 700,
});

export const infoContainer = style({
  display: "flex",
  gap: 14,
  alignItems: "flex-end",
});

export const lookAroundContainer = style({
  cursor: "pointer",
  display: "flex",
  marginTop: "14px",
});

export const infoInnerContainer = style({
  width: 50,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 8,
});

export const line = style({
  height: 14,
  width: 1,
  backgroundColor: "#AFB4BA",
});

export const tooltipStyle = style({
  width: "214px",
  padding: "9px 8px 9px 12px",
  margin: "0 80px 0 80px",
  borderRadius: 10,
  backgroundColor: theme.colors.orange40,
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  gap: 6,
});

const float = keyframes({
  "0%": { transform: "translateY(0px)" },
  "50%": { transform: "translateY(-10px)" },
  "100%": { transform: "translateY(0px)" },
});

const fadeOutKeyframes = keyframes({
  "0%": { opacity: 1, transform: "translateY(0)" },
  "100%": { opacity: 0, transform: "translateY(10px)" },
});

export const floatingTooltipStyle = style([
  tooltipStyle,
  {
    boxShadow: "4px 6px 6px rgba(128, 128, 128, 0.1)",
    position: "absolute",
    top: -25,
  },
]);

export const floatingAnimation = {
  floating: style({
    animation: `${float} 3s ease-in-out infinite`,
    position: "relative",
    zIndex: zIndex.floating,
  }),
  fadeOut: style({
    animation: `${fadeOutKeyframes} 0.5s ease-out forwards`,
    position: "relative",
    zIndex: zIndex.floating,
  }),
};

export const XIconStyle = style({
  cursor: "pointer",
});
