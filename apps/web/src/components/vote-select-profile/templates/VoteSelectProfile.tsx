"use client";

import { Flex, Text, Button, Spacing } from "@repo/ui/components";
import * as Style from "./style.css";
import { ProfileList } from "../organism/ProfileList";
import { useUserVoteStatus } from "@/hooks/api/useUserVoteStatus";
import { useParams } from "next/navigation";

interface Props {
  selectedMemberId?: string;
  onSelectMemberId: (id: string) => void;
  onNext: VoidFunction;
}

export function VoteSelectProfile({
  selectedMemberId,
  onNext,
  onSelectMemberId,
}: Props) {
  const params = useParams();

  const { data } = useUserVoteStatus(params?.roomId as string);

  return (
    <Flex
      justify="between"
      align="center"
      direction="column"
      className={Style.containerStyle}
    >
      {/* 배경 */}
      <div className={Style.backgroundStyle} />

      {/* 위 */}
      <Flex direction="column" align="center">
        <Text variant="heading3" className={Style.titleStyle}>
          투표를 시작해요!
        </Text>
        <div className={Style.scrollArea}>
          <Spacing size="8.2vh" />
          {data != null ? (
            <ProfileList
              profileList={data.data}
              selectedProfileId={selectedMemberId}
              onProfileClick={onSelectMemberId}
            />
          ) : null}
        </div>
      </Flex>

      {/* 아래 */}
      <div className={Style.footerContainerStyle}>
        <Button disabled={selectedMemberId == null} onClick={onNext}>
          투표 하러가기
        </Button>
      </div>
    </Flex>
  );
}
