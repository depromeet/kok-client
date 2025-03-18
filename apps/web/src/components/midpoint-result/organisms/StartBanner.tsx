"use client";

import { Banner } from "@repo/ui/components";
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

  return <Banner onClose={handleClose} title={title} place={place} />;
};

export default StartBanner;
