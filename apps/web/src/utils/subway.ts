import { theme } from "@repo/ui/tokens";
import { SUBWAY_META, SubwayLineType } from "../constants/subway";
import { SubwayColorProps } from "@/components/add-location-modal/style.css";

export const removeLineSuffix = (line: string): string => {
  return line.replace(/(선|호선)$/, "");
};

export const getLineColorName = (lineName: string): SubwayColorProps => {
  if (!isNaN(Number(lineName))) return `line${lineName}` as SubwayColorProps;

  switch (lineName) {
    case "신분당":
      return "shinbundang";
    case "공항철도":
      return "gonghang";
    case "경의중앙":
      return "gyeonguiJungang";
    case "수인분당":
      return "suinbundang";
    case "우이신설":
      return "uiSinseol";
    case "경강":
      return "gyeonggang";
    case "에버라인":
      return "everline";
    case "김포골드":
      return "gimpoGold";
    case "GTX":
      return "gtx";
    case "인천1":
      return "incheon1";
    case "인천2":
      return "incheon2";
  }

  return "default";
};

export const parseSubwayLineNumber = (route: string | null): number => {
  if (!route) return 0;
  const matches = route.match(/\d+/);
  return matches ? parseInt(matches[0]) : 0;
};

export const identifySubwayLine = (route: string | null): SubwayLineType => {
  if (!route) return "unknown";

  const specialLines = [
    "신분당",
    "수인분당",
    "경의중앙",
    "인천1",
    "인천2",
    "공항철도",
  ] as const;
  for (const line of specialLines) {
    if (SUBWAY_META[line].pattern.test(route)) {
      return line;
    }
  }

  const lineNumber = parseSubwayLineNumber(route);
  if (lineNumber >= 1 && lineNumber <= 9) {
    return lineNumber as SubwayLineType;
  }

  return "unknown";
};

export const getSubwayColor = (route: string | null): string => {
  if (!route) return theme.colors.gray40;

  const lineName = removeLineSuffix(route);
  const lineType = identifySubwayLine(lineName);
  return SUBWAY_META[lineType].color;
};
