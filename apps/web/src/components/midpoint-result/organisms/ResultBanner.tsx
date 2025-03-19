"use client";

import { useState } from "react";
import { DeleteIcon } from "@repo/ui/icons";
import { Text, Flex } from "@repo/ui/components";
import * as styles from "./styles.css";
import { theme } from "@repo/ui/tokens";
// import SmallMidIcon from "@/assets/icons/SmallMidIcon";
import ResultPattern from "./ResultPattern";

interface ResultBannerProps {
  onClose: () => void;
  subway?: string;
  finalPlace?: string;
}

const ResultBanner = ({
  onClose,
  subway = "line3",
  finalPlace = "디프만 모각작!",
}: ResultBannerProps) => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const handleDelete = () => {
    setIsBannerVisible(false);
    onClose();
  };

  if (!isBannerVisible) return null;

  return (
    // TODO:api 연동 이후 타입 에러 해결하기
    <div className={styles.resultBannerContainerRecipe({ subway: subway })}>
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
          {/* <SmallMidIcon outColor="rgba(255, 255, 255, 1)" subway={subway} /> */}
          <Text variant="heading2" style={{ color: theme.colors.gray0 }}>
            {finalPlace}
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
