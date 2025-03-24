import { theme } from "@repo/ui/tokens";

interface SmallMidIconProps {
  outColor?: string;
  inColor?: string;
  subway?: string;
}

const SUBWAY_COLORS = {
  line1: theme.colors.subwayAdjust1,
  line2: theme.colors.subwayAdjust2,
  line3: theme.colors.subwayAdjust3,
  line4: theme.colors.subwayAdjust4,
  line5: theme.colors.subwayAdjust5,
  line6: theme.colors.subwayAdjust6,
  line7: theme.colors.subwayAdjust7,
  line8: theme.colors.subwayAdjust8,
  line9: theme.colors.subwayAdjust9,
  default: theme.colors.orange30,
} as const;

export const SmallMidIcon = ({
  outColor,
  inColor,
  subway,
}: SmallMidIconProps) => {
  const getSubwayColor = (line?: string) => {
    if (!line) return SUBWAY_COLORS.default;
    return (
      SUBWAY_COLORS[line as keyof typeof SUBWAY_COLORS] || SUBWAY_COLORS.default
    );
  };

  const finalInColor = inColor || getSubwayColor(subway);
  const finalOutColor = outColor || "rgba(255, 255, 255, 0.5)";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="24"
      viewBox="0 0 18 24"
      fill="none"
    >
      <g opacity="0.75">
        <path
          d="M16.0308 9.39287C16.0308 12.5043 12.4193 17.3121 10.0447 20.1371C8.97079 21.4147 7.06003 21.4147 5.9861 20.1371C3.6115 17.3121 0 12.5043 0 9.39287C0 4.75762 3.58862 1 8.01541 1C12.4422 1 16.0308 4.75762 16.0308 9.39287Z"
          fill={finalOutColor}
        />
        <path
          d="M5.05828 8.05413C4.48118 6.79906 5.77687 5.50337 7.03194 6.08047L7.36005 6.23134C7.75463 6.41278 8.2088 6.41278 8.60338 6.23134L8.93149 6.08047C10.1866 5.50337 11.4823 6.79906 10.9052 8.05413L10.7543 8.38224C10.5728 8.77683 10.5728 9.23099 10.7543 9.62558L10.9052 9.95368C11.4823 11.2087 10.1866 12.5044 8.93149 11.9273L8.60338 11.7765C8.2088 11.595 7.75463 11.595 7.36005 11.7765L7.03194 11.9273C5.77687 12.5044 4.48118 11.2088 5.05828 9.95369L5.20915 9.62558C5.39059 9.23099 5.39059 8.77683 5.20915 8.38224L5.05828 8.05413Z"
          fill={finalInColor}
        />
      </g>
    </svg>
  );
};
