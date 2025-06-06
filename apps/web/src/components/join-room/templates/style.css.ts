import { theme } from "@repo/ui/tokens";
import { globalStyle, style } from "@vanilla-extract/css";

export const containerStyle = style({
  width: "100%",
  minHeight: "100dvh", // 호진 todo : 변경 했는데 모바일 화면에서 이상하면 다시 롤백하기
  background: `linear-gradient(-170deg, ${theme.colors.yellow5} 0%, ${theme.colors.orange5} 50%, ${theme.colors.bg.base} 95%)`,
});

globalStyle(`${containerStyle}::-webkit-scrollbar`, {
  display: "none",
});

globalStyle("html, body", {
  WebkitTapHighlightColor: "transparent",
  WebkitTouchCallout: "none",
  userSelect: "none",
});
