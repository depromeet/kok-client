"use client";

import { useCallback } from "react";
import { Flex } from "@repo/ui/components";
import * as styles from "./styles.css";
import TransportBar from "../molecules/TransportBar";
import { TransportInfo } from "@/types/transport";

interface TransportPathProps {
  totalTime: number;
  legs: TransportInfo[];
}

const TransportPath = ({ totalTime, legs }: TransportPathProps) => {
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
        {legs.map((leg) => (
          <TransportBar
            key={`${leg.mode}-${leg.distance}`}
            mode={leg.mode}
            width={getWidthPercentage(leg.sectionTime)}
            time={leg.sectionTime}
            route={leg.route}
          />
        ))}
      </Flex>
    </div>
  );
};

export default TransportPath;
