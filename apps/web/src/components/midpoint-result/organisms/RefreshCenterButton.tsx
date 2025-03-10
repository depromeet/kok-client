"use client";

import RefreshIcon from "@/assets/icons/RefreshIcon";
import { Text } from "@repo/ui/components";
import { useState } from "react";
import GreyDividerIcon from "@/assets/icons/GreyDividerIcon";
import * as styles from "../style.css";

const RefreshCenterButton = () => {
  const [centerStation, setCenterStation] = useState<string>("강남역");
  const handleRefresh = () => {
    alert("현재 중간 장소 버튼 클릭");
  };
  return (
    <div className={styles.container} onClick={handleRefresh}>
      <RefreshIcon />
      <Text variant="caption" className={styles.locationTextStyle}>
        현재 중간 장소
      </Text>
      <GreyDividerIcon />
      <Text variant="title4" className={styles.stationTextStyle}>
        {centerStation}
      </Text>
    </div>
  );
};

export default RefreshCenterButton;
