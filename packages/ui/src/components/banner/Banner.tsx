"use client";

import { DeleteIcon, SmallMidIcon } from "@repo/ui/icons";
import { Text, Flex } from "@repo/ui/components";
import * as styles from "./styles.css";
import { theme } from "@repo/ui/tokens";
import { AnimationBanner } from "./AnimationBanner";
import { Mascot } from "./Mascot";

interface BannerProps {
  onClose: () => void;
  title: string;
  roomName: string;
  isBannerVisible: boolean;
  onDeleteClick: () => void;
}

export const Banner = ({
  onClose,
  title,
  roomName,
  isBannerVisible = true,
  onDeleteClick,
}: BannerProps) => {
  const handleDelete = () => {
    onDeleteClick();
  };

  return (
    <AnimationBanner
      isBannerVisible={isBannerVisible}
      onExitComplete={onClose}
      className={styles.bannerContainerStyle}
    >
      <Flex justify="between">
        <div className={styles.textContainerStyle}>
          <Text variant="caption" style={{ color: theme.colors.orange50 }}>
            {title}
          </Text>
          <Flex gap={4}>
            <SmallMidIcon
              inColor={theme.colors.orange40}
              outColor={theme.colors.orange20}
            />
            <Text variant="heading2">{roomName}</Text>
          </Flex>
        </div>
        <Flex style={{ padding: "11px 33px 11px 0" }}>
          <Mascot />
        </Flex>
      </Flex>
      <div onClick={handleDelete} className={styles.deleteBtnStyle}>
        <DeleteIcon />
      </div>
    </AnimationBanner>
  );
};
