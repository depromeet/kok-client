"use client";

import { Banner } from "@repo/ui/components";
import { zIndex } from "@repo/z-index";
import { useState } from "react";

interface OriginSetBannerProps {
  onClose: () => void;
}

const StartBanner = ({ onClose }: OriginSetBannerProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const title = "출발지 입력 완료!";
  const place = "디프만 모각작";

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div
      style={{
        width: "100%",
        position: "absolute",
        bottom: 120,
        zIndex: zIndex.floating,
      }}
    >
      <Banner onClose={handleClose} title={title} place={place} />;
    </div>
  );
};

export default StartBanner;
