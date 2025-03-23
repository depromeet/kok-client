"use client";
import { Button, Flex, Text } from "@repo/ui/components";
import { theme } from "@repo/ui/tokens";
import * as styles from "./styles.css";
import { AnimationBottomSheet } from "@repo/ui/components";
import { useEffect } from "react";
import KakaoTalkShareButton from "@/components/share-room/molecule/KakaoTalkShareButton";
import { KAKAO_TEMPLATE_IDS } from "@/constants/kakao-template";

interface ParticipantBottomSheetProps {
  totalParticipants?: number;
  roomId?: string;
  roomName?: string;
}

const ParticipantBottomSheet = ({
  totalParticipants = 0,
  roomId = "",
  roomName = "",
}: ParticipantBottomSheetProps) => {
  return (
    <AnimationBottomSheet
      initialY="100%"
      animateY={0}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 40,
      }}
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
        <KakaoTalkShareButton
          templateId={KAKAO_TEMPLATE_IDS.STARTING_POINT}
          templateArgs={{
            roomId,
            roomName,
            memberCount: totalParticipants,
          }}
          variant="primary"
        >
          링크 공유하기
        </KakaoTalkShareButton>
      </Flex>
    </AnimationBottomSheet>
  );
};

export default ParticipantBottomSheet;
