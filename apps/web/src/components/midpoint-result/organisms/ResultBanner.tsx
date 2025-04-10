"use client";

import { DeleteIcon, SmallMidIcon } from "@repo/ui/icons";
import { Text, Flex } from "@repo/ui/components";
import * as styles from "./styles.css";
import { theme } from "@repo/ui/tokens";
import ResultPattern from "./ResultPattern";
import { getSubwayColor } from "../../../utils/subway";
import { AnimationBanner } from "@repo/ui/components";

interface ResultBannerProps {
  onClose: () => void;
  onDeleteClick: () => void;
  stationName?: string;
  routes?: string[];
  isVisible?: boolean;
}

const ResultBanner = ({
  onClose,
  stationName = "로딩중...",
  routes = [""],
  isVisible = true,
  onDeleteClick,
}: ResultBannerProps) => {
  const backgroundColor = getSubwayColor(routes[0] || null);

  const handleDelete = () => {
    onDeleteClick();
  };

  return (
    <AnimationBanner
      isBannerVisible={isVisible}
      onExitComplete={onClose}
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
          <SmallMidIcon inColor={backgroundColor} />
          <Text variant="heading2" style={{ color: theme.colors.gray0 }}>
            {stationName}역
          </Text>
        </Flex>
      </Flex>
      <div onClick={handleDelete} className={styles.deleteBtnStyle}>
        <DeleteIcon />
      </div>
    </AnimationBanner>
  );
};

export default ResultBanner;
