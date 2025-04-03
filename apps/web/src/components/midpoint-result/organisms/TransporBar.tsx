import { transportContainerStyle, progressBarStyle } from "./styles.css";
import { theme } from "@repo/ui/tokens";
import { Flex, Text } from "@repo/ui/components";
import { getSubwayColor, identifySubwayLine } from "../../../utils/subway";
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

interface TransportBarProps {
  width: number;
  time: number;
  isSubway: boolean;
  color?: string;
  route?: string;
  mode?: "WALK" | "SUBWAY" | "BUS";
}

const TransportBar = ({
  width,
  time,
  isSubway,
  color,
  route,
  mode,
}: TransportBarProps) => {
  const getBarColor = () => {
    if (isSubway && route) {
      return getSubwayColor(route);
    }
    return color || theme.colors.gray15;
  };

  const getBusNumber = (route: string | undefined) => {
    if (!route) return "";
    const match = route.match(/[^:]+:(.+)/);
    return match ? match[1] : "";
  };

  const getSubwayIcon = (route: string | undefined) => {
    if (!route) return <></>;

    const lineType = identifySubwayLine(route);

    switch (lineType) {
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
      case "신분당":
        return <LineShinBundang />;
      case "수인분당":
        return <LineSuinBundang />;
      case "경의중앙":
        return <LineGyeonguiJungang />;
      case "인천1":
        return <LineIncheon1 />;
      case "인천2":
        return <LineIncheon2 />;
      default:
        return <></>;
    }
  };

  const renderLineIcon = () => {
    if (isSubway) {
      return getSubwayIcon(route);
    } else if (mode === "BUS") {
      const busNumber = getBusNumber(route);
      const xOffset = (busNumber?.length || 0) >= 4 ? 5 : 2;
      return (
        <Flex
          direction="column"
          align="center"
          style={{
            transform: `translate(${xOffset}px, 4px)`,
          }}
        >
          <BusIcon />
          {mode === "BUS" && route && (
            <Text
              variant="subway"
              style={{
                color: theme.colors.gray40,
                marginTop: "2px",
              }}
            >
              {busNumber}
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
          transform: "translate(2px, 2px)",
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
            top: "40%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {(isSubway || mode === "BUS") && (
            <>
              <Text
                variant="subway"
                style={{
                  color: theme.colors.gray0,
                  whiteSpace: "nowrap",
                  textAlign: "center",
                }}
              >
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
