import { globalFontFace } from "@vanilla-extract/css";

globalFontFace("NanumSquareRoundOTF", [
  {
    src: 'url("/fonts/nanum-square-round/NanumSquareRoundOTFEB.otf")',
    fontWeight: 800,
  },
  {
    src: 'url("/fonts/nanum-square-round/NanumSquareRoundOTFB.otf")',
    fontWeight: 700,
  },
  {
    src: 'url("/fonts/nanum-square-round/NanumSquareRoundOTFR.otf")',
    fontWeight: 600,
  },
]);
