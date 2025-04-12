"use client";

import { useCallback, useMemo } from "react";
import { Flex } from "@repo/ui/components";
import * as styles from "./styles.css";
import TransportBar from "../molecules/TransportBar";
import { TransportInfo } from "@/types/transport";

interface TransportPathProps {
  totalTime: number;
  legs: TransportInfo[];
}

const TransportPath = ({ totalTime, legs }: TransportPathProps) => {
  const calculatePercentages = useCallback(
    (totalTime: number, infos: TransportInfo[]) => {
      if (totalTime === 0 || !infos || infos.length === 0) return [];

      const rates = infos.map(
        ({ sectionTime }) => (sectionTime / totalTime) * 100
      );

      // NOTE: 버스와 지하철의 경우, 이동 시간 표기를 위해 최소 8%의 너비를 갖도록 조정
      const adjusted = rates.map((ratio, i) => {
        const basePercent = ratio;
        const mode = infos[i]!.mode;
        const minPercent = mode === "WALK" ? 0 : 8;
        return Math.max(basePercent, minPercent);
      });

      const totalAdjusted = adjusted.reduce((sum, val) => sum + val, 0);

      return adjusted.map((val) => Math.floor((val / totalAdjusted) * 100));
    },
    []
  );

  const percentages = useMemo(
    () => calculatePercentages(totalTime, legs),
    [calculatePercentages, totalTime, legs]
  );

  return (
    <div className={styles.directionLineStyle}>
      <Flex direction="row" style={{ width: "100%", height: "100%" }}>
        {legs.map((leg, index) => (
          <TransportBar
            key={`${leg.mode}-${leg.distance}`}
            mode={leg.mode}
            width={percentages[index]!}
            seconds={leg.sectionTime}
            route={leg.route}
          />
        ))}
      </Flex>
    </div>
  );
};

export default TransportPath;
