"use client";

import { useState } from "react";
import OrangeCircleIcon from "../../../assets/icons/OrangeCircleIcon";
import BlueCircleIcon from "../../../assets/icons/BlueCircleIcon";
import GreenCircleIcon from "../../../assets/icons/GreenCircleIcon";
import Blur2 from "../../../assets/backgrounds/Blur2";
import { DeleteIcon } from "@repo/ui/icons";
import { Text } from "@repo/ui/components";
import * as styles from "../style.css";

interface ResultBannerProps {
  onClose: () => void;
}

const ResultBanner = ({ onClose }: ResultBannerProps) => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const finalSub = "망원역";

  const handleDelete = () => {
    setIsBannerVisible(false);
    onClose();
  };

  if (!isBannerVisible) return null;

  return (
    <div className={styles.bannerContainerStyle}>
      <div className={styles.textContainerStyle}>
        <Text variant="body3">우리가 만날 장소는</Text>
        <Text variant="heading1">{finalSub}</Text>
      </div>
      <Blur2 />
      <div onClick={handleDelete} className={styles.deleteBtnStyle}>
        <DeleteIcon />
      </div>
      <div className={styles.iconsContainerStyle}>
        <GreenCircleIcon className={styles.greenCircleStyle} />
        <BlueCircleIcon className={styles.blueCircleStyle} />
        <OrangeCircleIcon className={styles.orangeCircleStyle} />
      </div>
    </div>
  );
};
export default ResultBanner;
