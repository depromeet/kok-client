import { theme } from "@repo/ui/tokens";
import { SUBWAY_META, SubwayLineType } from "../constants/subway";

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
  const lineType = identifySubwayLine(route);
  return SUBWAY_META[lineType].color;
};
