"use client";

import { useState } from "react";
import { DeleteIcon } from "@repo/ui/icons";
import { Text, Flex } from "@repo/ui/components";
import * as styles from "./styles.css";
import { theme } from "@repo/ui/tokens";
import ResultPattern from "./ResultPattern";
import { getSubwayColor } from "../../../utils/subway";

interface ResultBannerProps {
  onClose: () => void;
  stationName?: string;
  routes?: string[];
}

const ResultBanner = ({
  onClose,
  stationName = "로딩중...",
  routes = [""],
}: ResultBannerProps) => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const backgroundColor = getSubwayColor(routes[0] || null);

  const handleDelete = () => {
    setIsBannerVisible(false);
    onClose();
  };

  if (!isBannerVisible) return null;

  return (
    <div
      className={styles.resultBannerContainerRecipe()}
      style={{ backgroundColor }}
    >
      <div className={styles.patternWrapperStyle}>
        <ResultPattern />
      </div>
      <Flex
        direction="column"
        justify="center"
        align="center"
        gap={20}
        className={styles.resultContainerStyle}
      >
        <Text variant="caption" className={styles.questionStyle}>
          우리의 중간 장소는?
        </Text>
        <Flex gap={4}>
          <Text variant="heading2" style={{ color: theme.colors.gray0 }}>
            {stationName}
          </Text>
        </Flex>
      </Flex>
      <div onClick={handleDelete} className={styles.deleteBtnStyle}>
        <DeleteIcon />
      </div>
    </div>
  );
};

export default ResultBanner;
