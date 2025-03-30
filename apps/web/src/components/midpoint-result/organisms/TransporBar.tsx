import { transportContainerStyle, progressBarStyle } from "./styles.css";
import { theme } from "@repo/ui/tokens";
import { Flex, Text } from "@repo/ui/components";
import { getSubwayColor } from "../../../utils/subway";
import {
  Line1,
  Line2,
  Line3,
  Line4,
  Line5,
  Line6,
  Line7,
  Line8,
  Line9,
  LineShinBundang,
  LineSuinBundang,
  LineGyeonguiJungang,
  LineIncheon1,
  LineIncheon2,
  BusIcon,
} from "../atom/transport-icon/TransportIcon";

// 지하철 노선별 테마 색상 정의
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
  default: theme.colors.gray15,
} as const;

interface TransportBarProps {
  width: number;
  time: number;
  lineNum: number | string;
  isSubway: boolean;
  color?: string;
  route?: string; // 노선명 ('수도권1호선', '수도권2호선')
  mode?: "WALK" | "SUBWAY" | "BUS";
}

const TransportBar = ({
  width,
  time,
  lineNum,
  isSubway,
  color,
  route,
  mode,
}: TransportBarProps) => {
  const getBarColor = () => {
    if (isSubway) {
      if (route) {
        return getSubwayColor(route);
      }
      if (typeof lineNum === "number") {
        return (
          SUBWAY_COLORS[`line${lineNum}` as keyof typeof SUBWAY_COLORS] ||
          SUBWAY_COLORS.default
        );
      }
    }
    return color || SUBWAY_COLORS.default;
  };

  const getBusNumber = (route: string | undefined) => {
    if (!route) return "";
    const match = route.match(/[^:]+:(.+)/);
    return match ? match[1] : "";
  };

  // SUBWAY | BUS | WALK 에 따라 아이콘 결정
  const renderLineIcon = () => {
    if (isSubway) {
      if (typeof lineNum === "number") {
        switch (lineNum) {
          case 1:
            return <Line1 />;
          case 2:
            return <Line2 />;
          case 3:
            return <Line3 />;
          case 4:
            return <Line4 />;
          case 5:
            return <Line5 />;
          case 6:
            return <Line6 />;
          case 7:
            return <Line7 />;
          case 8:
            return <Line8 />;
          case 9:
            return <Line9 />;
          default:
            return <></>;
        }
      }
      if (route) {
        if (route.includes("수인분당")) {
          return <LineSuinBundang />;
        } else if (route.includes("신분당")) {
          return <LineShinBundang />;
        } else if (route.includes("경의중앙")) {
          return <LineGyeonguiJungang />;
        } else if (route.includes("인천1호선")) {
          return <LineIncheon1 />;
        } else if (route.includes("인천2호선")) {
          return <LineIncheon2 />;
        }
      }
    } else if (mode === "BUS") {
      return (
        <Flex
          direction="column"
          align="center"
          style={{
            transform: "translate(2px, 4px)",
          }}
        >
          <BusIcon />
          {mode === "BUS" && route && (
            <Text
              variant="subway"
              style={{ color: theme.colors.gray40, marginTop: "2px" }}
            >
              {getBusNumber(route)}
            </Text>
          )}
        </Flex>
      );
    }
    return <></>; // WALK
  };

  return (
    <div className={transportContainerStyle} style={{ width: `${width}%` }}>
      <div
        style={{
          zIndex: 2,
          transform: "translate(0, 2px)",
        }}
      >
        {renderLineIcon()}
      </div>
      <div
        className={progressBarStyle}
        style={{ backgroundColor: getBarColor() }}
      >
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {(isSubway || mode === "BUS") && (
            <>
              <Text variant="subway" style={{ color: theme.colors.gray0 }}>
                {time} 분
              </Text>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransportBar;
