import { theme } from "@repo/ui/tokens";

export const parseSubwayLineNumber = (route: string | null): number => {
  if (!route) return 0;
  const matches = route.match(/\d+/);
  return matches ? parseInt(matches[0]) : 0;
};

export const getSubwayColor = (route: string | null): string => {
  if (!route) return theme.colors.gray40;

  const lineNumber = parseSubwayLineNumber(route);
  if (lineNumber < 1 || lineNumber > 9) return theme.colors.gray40;

  return theme.colors[
    `subwayAdjust${lineNumber}` as keyof typeof theme.colors
  ] as string;
};
