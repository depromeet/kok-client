"use client";

import { Banner } from "@repo/ui/components";
import { bannerContainerStyle } from "./styles.css";

interface StartBannerProps {
  onClose: () => void;
  onDeleteClick: () => void;
  isVisible?: boolean;
  isLeader?: boolean;
  roomName?: string | React.ReactNode;
  isLoading?: boolean | React.ReactNode;
}

const StartBanner = ({
  onClose,
  isVisible = true,
  onDeleteClick,
  isLeader = false,
  roomName,
}: StartBannerProps) => {
  const title = isLeader ? "모임이 생성 됐어요!" : "출발지 입력 완료!";

  return (
    <div className={bannerContainerStyle}>
      <Banner
        onClose={onClose}
        onDeleteClick={onDeleteClick}
        isBannerVisible={isVisible}
        title={title}
        roomName={roomName}
      />
    </div>
  );
};

export default StartBanner;
