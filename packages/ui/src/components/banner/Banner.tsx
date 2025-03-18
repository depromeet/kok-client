"use client";

import { DeleteIcon, SmallMidIcon } from "@repo/ui/icons";
import { Text, Flex } from "@repo/ui/components";
import * as styles from "./styles.css";
import { theme } from "@repo/ui/tokens";

interface BannerProps {
  onClose: () => void;
  title: string;
  place: string;
}

export const Banner = ({ onClose, title, place }: BannerProps) => {
  const handleDelete = () => {
    onClose();
  };

  return (
    <div className={styles.bannerContainerStyle}>
      <Flex direction="row" justify="between">
        <div className={styles.textContainerStyle}>
          <Text variant="caption" style={{ color: theme.colors.orange50 }}>
            {title}
          </Text>
          <Flex style={{ gap: 4 }}>
            <SmallMidIcon
              inColor={theme.colors.orange40}
              outColor={theme.colors.orange20}
            />
            <Text variant="heading2">{place}</Text>
          </Flex>
        </div>
        <div
          style={{
            width: 96,
            height: 60,
            backgroundColor: theme.colors.orange10,
            margin: "28px 38px 0 0",
          }}
        ></div>
      </Flex>
      <div onClick={handleDelete} className={styles.deleteBtnStyle}>
        <DeleteIcon />
      </div>
    </div>
  );
};
