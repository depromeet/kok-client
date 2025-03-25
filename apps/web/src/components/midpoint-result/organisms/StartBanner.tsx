"use client";

import { Banner } from "@repo/ui/components";
import { bannerContainerStyle } from "./styles.css";

interface StartBannerProps {
  onClose: () => void;
  onDeleteClick: () => void;
  isVisible?: boolean;
  isLeader?: boolean;
}

const StartBanner = ({
  onClose,
  isVisible = true,
  onDeleteClick,
  isLeader = false,
}: StartBannerProps) => {
  const title = isLeader ? "모임이 생성 됐어요!" : "출발지 입력 완료!";
  const place = "디프만 모각작"; // 소정 TODO

  return (
    <div className={bannerContainerStyle}>
      <Banner
        onClose={onClose}
        onDeleteClick={onDeleteClick}
        isBannerVisible={isVisible}
        title={title}
        place={place}
      />
    </div>
  );
};

export default StartBanner;
