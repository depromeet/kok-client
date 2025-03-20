"use client";

import RefreshIcon from "@/assets/icons/RefreshIcon";
import { Text } from "@repo/ui/components";
import GreyDividerIcon from "@/assets/icons/GreyDividerIcon";
import * as styles from "./styles.css";
import { useReverseGeocode } from "@/hooks/api/useReverseGeocode";

interface RefreshCenterButtonProps {
  coordinates: { lat: number; lng: number };
}

const RefreshCenterButton = ({ coordinates }: RefreshCenterButtonProps) => {
  const { district, isLoading, refetch } = useReverseGeocode(coordinates);

  const handleClick = () => {
    refetch();
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <RefreshIcon />
      <Text variant="caption" className={styles.locationTextStyle}>
        현재 중간 장소
      </Text>
      <GreyDividerIcon />
      <Text variant="title4" className={styles.stationTextStyle}>
        {isLoading ? "로딩 중..." : district}
      </Text>
    </div>
  );
};

export default RefreshCenterButton;
