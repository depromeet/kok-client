"use client";
import { Button, Flex, Text, textRecipe } from "@repo/ui/components";
import { theme } from "@repo/ui/tokens";
import * as styles from "./styles.css";
import { AnimationBottomSheet } from "@repo/ui/components";
import { ShareIcon } from "../atom/share/ShareIcon";
import { KakaoTalkShareButton } from "@/components/common";
import { KAKAO_TEMPLATE_IDS } from "@/constants/kakao-template";
import { ReactNode } from "react";
import { useParams, useRouter } from "next/navigation";

interface ParticipantBottomSheetProps {
  roomId: string;
  totalParticipants?: number | React.ReactNode;
  banner?: ReactNode;
  isVoteMode?: boolean;
}

const ParticipantBottomSheet = ({
  totalParticipants = 0,
  roomId = "",
  banner,
  isVoteMode,
}: ParticipantBottomSheetProps) => {
  const params = useParams();
  const router = useRouter();

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
        {isVoteMode ? (
          <Text variant="title1">이제 투표를 시작할 수 있어요!</Text>
        ) : (
          <>
            <Text variant="title1" style={{ color: theme.colors.red50 }}>
              {totalParticipants}
            </Text>
            <Text variant="title1">&nbsp;명 미참여 중 ∙∙∙</Text>
          </>
        )}
      </div>
      <Flex>
        <Text
          variant="caption"
          style={{ color: theme.colors.gray40, margin: "12px 0 20px" }}
        >
          {isVoteMode
            ? "친구들에게 투표 링크를 공유해요."
            : "친구들이 모두 입장할 수 있도록 링크를 공유해요!"}
        </Text>
      </Flex>
      <Flex as="div" direction="column" gap={20}>
        {isVoteMode ? (
          <Flex gap={8} style={{ width: "100%" }}>
            <KakaoTalkShareButton
              templateId={KAKAO_TEMPLATE_IDS.VOTE}
              templateArgs={{ roomId }}
              variant="share-icon"
              style={{ padding: 14 }}
            >
              <ShareIcon />
            </KakaoTalkShareButton>
            <Button
              variant="gradient-loop"
              className={textRecipe({ variant: "title3" })}
              width="full"
              onClick={() => router.push(`/room/${params?.roomId}/vote`)}
            >
              투표하러 가기
            </Button>
            {/* TODO: 투표 화면 연결 */}
          </Flex>
        ) : (
          <KakaoTalkShareButton
            templateId={KAKAO_TEMPLATE_IDS.SELECT_START}
            templateArgs={{
              roomId,
            }}
          >
            링크 공유하기
          </KakaoTalkShareButton>
        )}
      </Flex>
    </AnimationBottomSheet>
  );
};

export default ParticipantBottomSheet;
