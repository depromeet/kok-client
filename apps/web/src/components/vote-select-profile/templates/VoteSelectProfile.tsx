"use client";

import { Flex, Text, Button, Spacing } from "@repo/ui/components";
import * as Style from "./style.css";
import { ProfileList } from "../organism/ProfileList";
import { useUserVoteStatus } from "@/hooks/api/useUserVoteStatus";
import { useParams, useRouter } from "next/navigation";
import { FixedBottomWithSpacing } from "@/components/fixed-bottom/FixedBottomWithSpacing";

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
  const router = useRouter();

  const { data } = useUserVoteStatus(params?.roomId as string);

  const allMembersVoted =
    data?.data?.every((member) => member.isVoted) ?? false;

  const handleResultCheck = () => {
    if (selectedMemberId) {
      router.push(
        `/room/${params?.roomId}/result?memberId=${selectedMemberId}`
      );
    }
  };

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
          {allMembersVoted ? "결과를 확인해요!" : "투표를 시작해요!"}
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
      <FixedBottomWithSpacing>
        <Button
          disabled={selectedMemberId == null}
          onClick={allMembersVoted ? handleResultCheck : onNext}
        >
          {allMembersVoted ? "결과 확인하기" : "투표 하러가기"}
        </Button>
      </FixedBottomWithSpacing>
    </Flex>
  );
}
