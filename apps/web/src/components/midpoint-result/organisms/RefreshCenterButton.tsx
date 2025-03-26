"use client";

import RefreshIcon from "@/assets/icons/RefreshIcon";
import { Text } from "@repo/ui/components";
import GreyDividerIcon from "@/assets/icons/GreyDividerIcon";
import * as styles from "./styles.css";
import { useReverseGeocode } from "@/hooks/api/useReverseGeocode";

interface RefreshCenterButtonProps {
  coordinates: { lat: number; lng: number };
  participantCount?: number;
  onRefresh: () => void;
}

const LocationDisplay = ({
  district,
  isLoading,
}: {
  district: string;
  isLoading: boolean;
}) => (
  <>
    <GreyDividerIcon />
    <Text variant="title4" className={styles.stationTextStyle}>
      {isLoading ? "로딩 중..." : district}
    </Text>
  </>
);

const getDisplayText = (participantCount: number) =>
  participantCount <= 1 ? "아직 참여한 사람이 없어요!" : "현재 중간 장소";

const RefreshCenterButton = ({
  coordinates,
  participantCount = 0,
  onRefresh,
}: RefreshCenterButtonProps) => {
  const { district, isLoading, refetch } = useReverseGeocode(coordinates);
  const displayText = getDisplayText(participantCount);

  return (
    <div
      className={styles.container}
      onClick={() => {
        refetch();
        onRefresh();
      }}
    >
      <RefreshIcon />
      <Text variant="caption" className={styles.locationTextStyle}>
        {displayText}
      </Text>
      {participantCount > 1 && (
        <LocationDisplay district={district} isLoading={isLoading} />
      )}
    </div>
  );
};

export default RefreshCenterButton;
