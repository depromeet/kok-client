"use client";

import { Button, Flex, Text } from "@repo/ui/components";
import { theme } from "@repo/ui/tokens";
import GreyDividerIcon from "@/assets/icons/GreyDividerIcon";
import * as styles from "../style.css";

const ResultBottomSheet = () => {
  const onClickCopyLink = () => {
    alert("링크 복사하기 클릭!");
  };
  const time = 45;
  const transferCount = 2;
  const distance = "1.2km";

  return (
    <section className={styles.containerRecipe({})}>
      <div className={styles.wrapper}>
        <Text variant="title4" style={{ color: theme.colors.orange50 }}>
          최적 이동경로
        </Text>
        <Flex
          as="div"
          justify="between"
          align="center"
          style={{ marginTop: "4px" }}
        >
          <div>
            <Text variant="title1" style={{ color: theme.colors.gray90 }}>
              {time}
            </Text>
            <Text variant="caption" style={{ color: theme.colors.gray90 }}>
              분
            </Text>
          </div>
          <Flex direction="row">
            <Text variant="caption" style={{ color: theme.colors.gray90 }}>
              환승 &nbsp;
            </Text>
            <Text variant="caption" style={{ color: theme.colors.orange50 }}>
              {transferCount} 회
            </Text>
            <div style={{ margin: "0 8px 0 8px" }}>
              <GreyDividerIcon />
            </div>
            <Text variant="caption">{distance}</Text>
          </Flex>
        </Flex>
      </div>
      <div className={styles.directionLineStyle} />
      <Flex as="div" direction="column" gap={20}>
        <Button onClick={onClickCopyLink}>
          <Text variant="title3">링크 복사하기</Text>
        </Button>
      </Flex>
    </section>
  );
};

export default ResultBottomSheet;
