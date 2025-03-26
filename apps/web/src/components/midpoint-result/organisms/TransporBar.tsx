import { transportContainerStyle, progressBarStyle } from "./styles.css";
import { theme } from "@repo/ui/tokens";
import { Text } from "@repo/ui/components";
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
}

const TransportBar = ({
  width,
  time,
  lineNum,
  isSubway,
  color,
  route,
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
    } else if (route === "BUS") {
      return <BusIcon />;
    }
    return <></>; // WALK
  };

  return (
    <div className={transportContainerStyle} style={{ width: `${width}%` }}>
      {renderLineIcon()}
      <div
        className={progressBarStyle}
        style={{ backgroundColor: getBarColor() }}
      >
        {/* TODO: 스타일 수정 */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            color: theme.colors.gray0,
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          {(isSubway || route === "BUS") && (
            <Text
              variant={isSubway ? "subway" : "caption"}
              style={{ color: theme.colors.gray0 }}
            >
              {time} 분
            </Text>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransportBar;
