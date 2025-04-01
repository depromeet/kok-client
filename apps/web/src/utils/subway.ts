import { theme } from "@repo/ui/tokens";

export type SubwayLineType =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | "신분당"
  | "수인분당"
  | "경의중앙"
  | "인천1"
  | "인천2"
  | "공항철도"
  | "unknown";

export const SUBWAY_META = {
  1: {
    name: "1호선",
    color: theme.colors.subwayAdjust1,
    pattern: /1호선|수도권1/,
  },
  2: {
    name: "2호선",
    color: theme.colors.subwayAdjust2,
    pattern: /2호선|수도권2/,
  },
  3: {
    name: "3호선",
    color: theme.colors.subwayAdjust3,
    pattern: /3호선|수도권3/,
  },
  4: {
    name: "4호선",
    color: theme.colors.subwayAdjust4,
    pattern: /4호선|수도권4/,
  },
  5: {
    name: "5호선",
    color: theme.colors.subwayAdjust5,
    pattern: /5호선|수도권5/,
  },
  6: {
    name: "6호선",
    color: theme.colors.subwayAdjust6,
    pattern: /6호선|수도권6/,
  },
  7: {
    name: "7호선",
    color: theme.colors.subwayAdjust7,
    pattern: /7호선|수도권7/,
  },
  8: {
    name: "8호선",
    color: theme.colors.subwayAdjust8,
    pattern: /8호선|수도권8/,
  },
  9: {
    name: "9호선",
    color: theme.colors.subwayAdjust9,
    pattern: /9호선|수도권9/,
  },
  신분당: {
    name: "신분당선",
    color: theme.colors.subwayAdjustShinbundang,
    pattern: /신분당/,
  },
  수인분당: {
    name: "수인분당선",
    color: theme.colors.subwayAdjustSuinbundang,
    pattern: /수인분당/,
  },
  경의중앙: {
    name: "경의중앙선",
    color: theme.colors.subwayAdjustGyeonguiJungang,
    pattern: /경의중앙/,
  },
  인천1: {
    name: "인천1호선",
    color: theme.colors.subwayAdjustIncheon1,
    pattern: /인천1호선/,
  },
  인천2: {
    name: "인천2호선",
    color: theme.colors.subwayAdjustIncheon2,
    pattern: /인천2호선/,
  },
  공항철도: {
    name: "공항철도",
    color: "#0065B3",
    pattern: /공항철도/,
  },
  unknown: {
    name: "알 수 없음",
    color: theme.colors.gray40,
    pattern: /.*/,
  },
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
  const lineType = identifySubwayLine(route);
  return SUBWAY_META[lineType].color;
};
