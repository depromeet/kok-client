"use client";
import { useRouter } from "next/navigation";
import { Button, Flex, Text } from "@repo/ui/components";
import { theme } from "@repo/ui/tokens";
import * as styles from "./styles.css";
import { AnimationBottomSheet } from "@repo/ui/components";
import { ReactNode } from "react";

interface ParticipantBottomSheetProps {
  totalParticipants?: number;
  banner?: ReactNode;
}

const ParticipantBottomSheet = ({
  totalParticipants,
  banner,
}: ParticipantBottomSheetProps) => {
  const router = useRouter();

  const onClickCopyLink = () => {
    router.push("/result");
  };

  return (
    <AnimationBottomSheet
      initialY="100%"
      animateY={0}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 40,
      }}
      banner={banner}
    >
      <div className={styles.wrapper}>
        <Text variant="title1" style={{ color: theme.colors.red50 }}>
          {totalParticipants}
        </Text>
        <Text variant="title1">&nbsp;명 참여 중 ∙∙∙</Text>
      </div>
      <Flex>
        <Text
          variant="caption"
          style={{ color: theme.colors.gray40, margin: "12px 0 20px" }}
        >
          친구들이 모두 입장할 수 있도록 링크를 공유해요!
        </Text>
      </Flex>
      <Flex as="div" direction="column" gap={20}>
        <Button onClick={onClickCopyLink}>
          <Text variant="title3">링크 복사하기</Text>
        </Button>
      </Flex>
    </AnimationBottomSheet>
  );
};

export default ParticipantBottomSheet;
