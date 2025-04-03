import { NormalLineType } from "./../constants/subway/index";
import { theme } from "@repo/ui/tokens";
import {
  SPECIAL_LINES,
  SpecialLineType,
  SUBWAY_META,
  SubwayLineType,
} from "../constants/subway";

export const removeLineSuffix = (line: string): string => {
  return line.replace(/^수도권/, "").replace(/(선|호선)$/, "");
};

export const parseSubwayLineNumber = (route: string | null): number => {
  if (!route) return 0;
  const matches = route.match(/\d+/);
  return matches ? parseInt(matches[0]) : 0;
};

export const identifySubwayLine = (route: string | null): SubwayLineType => {
  if (!route) return "unknown";

  const lineName = removeLineSuffix(route);

  // NOTE: 숫자 노선 처리
  if (!isNaN(Number(lineName))) {
    return lineName as NormalLineType;
  }

  // NOTE: 특수 노선 처리
  const specialLines = Object.keys(SPECIAL_LINES) as SpecialLineType[];

  for (const line of specialLines) {
    if (SPECIAL_LINES[line].pattern.test(lineName)) {
      return line;
    }
  }

  return "unknown";
};

export const getSubwayColor = (route: string | null): string => {
  if (!route) return theme.colors.gray40;

  const lineName = removeLineSuffix(route);
  const lineType = identifySubwayLine(lineName);
  return SUBWAY_META[lineType].color;
};
