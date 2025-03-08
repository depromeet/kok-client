"use client";

import RefreshIcon from "@/assets/icons/RefreshIcon";
import { Text } from "@repo/ui/components";
import { useState } from "react";
import GreyDividerIcon from "@/assets/icons/GreyDividerIcon";
import * as styles from "../styles/RefreshCenterButton.css";

const RefreshCenterButton = () => {
  const [centerStation, setCenterStation] = useState<string>("강남역");
  return (
    <div className={styles.container}>
      <RefreshIcon />
      <Text className={styles.locationText}>현재 중간 장소</Text>
      <GreyDividerIcon />
      <Text className={styles.stationText}>{centerStation}</Text>
    </div>
  );
};

export default RefreshCenterButton;
