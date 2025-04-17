import { transportContainerStyle, progressBarStyle } from "./styles.css";
import { theme } from "@repo/ui/tokens";
import { Flex, Text } from "@repo/ui/components";
import {
  getBusNumber,
  getSubwayColor,
  identifySubwayLine,
} from "../../../utils/transport";
import { TransportType } from "@/types/transport";
import TransportIcon from "@/components/common/TransportIcon";

interface TransportBarProps {
  width: number;
  seconds: number;
  route: string | null;
  mode?: TransportType;
}

const TransportBar = ({ width, seconds, route, mode }: TransportBarProps) => {
  if (mode === "WALK")
    return (
      <div
        style={{
          width: `${width}%`,
          height: "100%",
          backgroundColor: "transparent",
        }}
      ></div>
    );

  const color = mode === "BUS" ? theme.colors.gray40 : getSubwayColor(route);
  const busNumber = getBusNumber(route);
  const lineType = identifySubwayLine(route);
  const minutes = Math.round(seconds / 60);

  return (
    <div className={transportContainerStyle} style={{ width: `${width}%` }}>
      {/* 교통수단 아이콘 */}
      <div
        style={{
          zIndex: 2,
          transform: "translate(2px, 0px)",
        }}
      >
        {mode === "BUS" && busNumber ? (
          <Flex direction="column" align="center">
            <div style={{ position: "relative" }}>
              <TransportIcon
                vehicle={mode!}
                line={lineType}
                size={"sm-icon"}
                hasText={false}
              />
              <Text
                variant="subway"
                style={{
                  width: "60px",
                  textAlign: "center",
                  position: "absolute",
                  bottom: "-12px",
                  left: "-20px",
                  color: theme.colors.gray50,
                }}
              >
                {busNumber}
              </Text>
            </div>
          </Flex>
        ) : (
          <Flex direction="column" align="center">
            <div style={{ position: "relative" }}>
              <TransportIcon
                vehicle={mode!}
                line={lineType}
                size={isNaN(Number(lineType)) ? "sm-icon" : "sm"}
                hasText={!isNaN(Number(lineType))}
              />
              {isNaN(Number(lineType)) && (
                <Text
                  variant="subway"
                  style={{
                    width: "60px",
                    textAlign: "center",
                    position: "absolute",
                    bottom: "-12px",
                    left: "-20px",
                    color: theme.colors.gray50,
                  }}
                >
                  {lineType}
                </Text>
              )}
            </div>
          </Flex>
        )}
      </div>

      {/* 이동 시간 라인 */}
      <div className={progressBarStyle} style={{ backgroundColor: color }}>
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "40%",
            transform: "translate(-50%, -54%)",
          }}
        >
          {
            <>
              <Text
                variant="subway"
                style={{
                  color: theme.colors.gray0,
                  whiteSpace: "nowrap",
                  textAlign: "center",
                }}
              >
                {minutes} 분
              </Text>
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default TransportBar;
