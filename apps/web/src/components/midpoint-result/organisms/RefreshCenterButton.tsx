"use client";

import RefreshIcon from "@/assets/icons/RefreshIcon";
import { Text } from "@repo/ui/components";
import { useState } from "react";
import GreyDividerIcon from "@/assets/icons/GreyDividerIcon";
import * as styles from "./styles.css";

interface RefreshCenterButtonProps {
  onRefresh?: () => void;
}

const RefreshCenterButton = ({ onRefresh }: RefreshCenterButtonProps) => {
  const [centerStation, setCenterStation] = useState<string>("강남구"); // 네이버 geocoding api 연동 필요

  const handleRefresh = () => {
    alert("새로고침 버튼 클릭됨");
    onRefresh?.();
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
