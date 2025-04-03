import { theme } from "@repo/ui/tokens";
import { zIndex } from "@repo/z-index";
import { globalStyle, style } from "@vanilla-extract/css";

export const containerStyle = style({
  width: "100%",
  height: "100dvh",
});

export const headerStyle = style({
  marginTop: "68px",
});

export const bubbleLayoutStyle = style({
  alignSelf: "flex-start",
  transform: "translateX(-40%)",
});

export const bubbleStyle = style({
  backgroundColor: theme.colors.gray10,
  padding: "8px 10px",
  borderRadius: "12px",
  backdropFilter: "blur(15px)",
  width: "max-content",
  maxWidth: "100%",
});

export const errorMessageStyle = style({
  color: theme.colors.gray10,
  textAlign: "center",
  fontSize: "120px",
  fontFamily: "NanumSquareRoundOTF",
  fontStyle: "normal",
  fontWeight: 800,
  lineHeight: "150%",
  position: "relative",
  zIndex: 1,
});

export const errorImageWrapperStyle = style({
  marginTop: "68px",
  position: "relative",
  width: "fit-content",
  height: "auto",
  paddingBottom: "50px",
});

export const errorImageStyle = style({
  position: "absolute",
  top: "83px",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 2,
});

export const footerContainerStyle = style({
  maxWidth: "600px",
  width: "100%",
  padding: "20px 16px",
  position: "fixed",
  bottom: 0,
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: zIndex.floating,
});

globalStyle(`${containerStyle}::-webkit-scrollbar`, {
  display: "none",
});

globalStyle("html, body", {
  WebkitTapHighlightColor: "transparent",
  WebkitTouchCallout: "none",
  userSelect: "none",
});
