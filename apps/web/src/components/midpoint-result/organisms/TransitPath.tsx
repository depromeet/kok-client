import { useCallback } from "react";
import { Flex } from "@repo/ui/components";
import { theme } from "@repo/ui/tokens";
import * as styles from "./styles.css";
import TransportBar from "../molecules/TransportBar";

interface TransitPathProps {
  totalTime?: number;
  legs: {
    mode: "WALK" | "SUBWAY" | "BUS";
    distance: number;
    sectionTime: number;
    route: string | null;
    routeColor: string | null;
  }[];
}

const TransitPath = ({ totalTime, legs }: TransitPathProps) => {
  const getWidthPercentage = useCallback(
    (sectionTime: number) => {
      if (!totalTime) return 0;

      const originalPercentage = (sectionTime / totalTime) * 100;
      return originalPercentage < 5 ? 5 : Math.round(originalPercentage);
    },
    [totalTime]
  );

  return (
    <div className={styles.directionLineStyle}>
      <Flex direction="row" style={{ width: "100%", height: "100%" }}>
        {legs.map((leg, index) => {
          const widthPercentage = getWidthPercentage(leg.sectionTime);

          if (leg.mode === "SUBWAY") {
            return (
              <TransportBar
                key={index}
                width={widthPercentage}
                time={Math.round(leg.sectionTime / 60)}
                isSubway={true}
                color={
                  leg.routeColor ? `#${leg.routeColor}` : theme.colors.gray40
                }
                route={leg.route || undefined}
                mode={leg.mode}
              />
            );
          } else if (leg.mode === "BUS") {
            return (
              <TransportBar
                key={index}
                width={widthPercentage}
                time={Math.round(leg.sectionTime / 60)}
                isSubway={false}
                color={theme.colors.gray50}
                route={leg.route || undefined}
                mode={leg.mode}
              />
            );
          } else {
            // WALK 모드
            return (
              <TransportBar
                key={index}
                width={widthPercentage}
                time={Math.round(leg.sectionTime / 60)}
                isSubway={false}
                color={theme.colors.gray15}
                route="WALK"
                mode={leg.mode}
              />
            );
          }
        })}
      </Flex>
    </div>
  );
};

export default TransitPath;
