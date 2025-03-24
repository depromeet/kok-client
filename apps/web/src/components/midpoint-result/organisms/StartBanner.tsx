"use client";

import { Banner } from "@repo/ui/components";
import { bannerContainerStyle } from "./styles.css";

interface StartBannerProps {
  onClose: () => void;
  onDeleteClick: () => void;
  isVisible?: boolean;
}

const StartBanner = ({
  onClose,
  isVisible = true,
  onDeleteClick,
}: StartBannerProps) => {
  const title = "출발지 입력 완료!";
  const place = "디프만 모각작";

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
