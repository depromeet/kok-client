import { Text, Flex, Spacing } from "@repo/ui/components";
import * as Style from "./style.css";
import { theme } from "@repo/ui/tokens";
import { PlaceList } from "../organism/PlaceList";
import { useParams } from "next/navigation";
import { useVoteResult } from "@/hooks/api/useVoteResult";
// import { FixedBottomWithSpacing } from "@/components/fixed-bottom/FixedBottomWithSpacing";
import { AnimationBottomSheet } from "@repo/ui/components";
import { useRouter } from "next/navigation";
import { useVoteFinish } from "@/hooks/api/useVoteFinish";
import { KakaoTalkShareButton } from "@/components/common";
import { KAKAO_TEMPLATE_IDS } from "@/constants/kakao-template";

interface Props {
  memberId: string;
  onRevote: VoidFunction;
}

export function VoteFinishTemplate({ memberId, onRevote }: Props) {
  const params = useParams();
  const router = useRouter();

  const { data } = useVoteResult(params?.roomId as string, memberId);
  const { mutate: endVote } = useVoteFinish({
    onSuccess: () => {
      router.push(`/room/${params?.roomId}/result?memberId=${memberId}`);
    },
  });

  const votedAll = data?.data.notVotedCount === 0;

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
        <Text variant="body3">{data?.data.results.length ?? 0}가지 장소</Text>
        <Spacing size={16} />
        <Text variant="heading1">투표 완료</Text>
        {data != null && <PlaceList placeList={data.data.results} />}
      </Flex>

      {/* 아래 */}
      <AnimationBottomSheet>
        <Text variant="title2" color={theme.colors.text.primary}>
          {votedAll ? (
            "모두 투표를 완료했어요!"
          ) : (
            <>
              <Text color={theme.colors.text.kok}>
                {data?.data.notVotedCount ?? "-"}
              </Text>
              명이 투표하지 않았어요!
            </>
          )}
        </Text>
        <Spacing size={12} />
        <Text variant="caption" color={theme.colors.text.caption}>
          {votedAll
            ? "내 투표 결과를 마지막으로 중간 장소가 선정돼요"
            : "친구들이 모두 입장할 수 있도록 링크를 공유해요!"}
        </Text>
        <Spacing size={22} />
        <div className={Style.buttonContainerStyle}>
          <button className={Style.leftButtonStyle}>
            <Text variant="title3" onClick={onRevote}>
              재투표 하기
            </Text>
          </button>

          {votedAll ? (
            <button className={Style.rightButtonStyle}>
              <Text
                variant="title3"
                onClick={() =>
                  params != null && endVote(params.roomId as string)
                }
              >
                모임장소 확인하기
              </Text>
            </button>
          ) : (
            <KakaoTalkShareButton
              containerStyle={{ flex: 1 }}
              templateId={KAKAO_TEMPLATE_IDS.VOTE}
              templateArgs={{
                roomId: params?.roomId as string,
              }}
            >
              링크 복사하기
            </KakaoTalkShareButton>
          )}
        </div>
        {/* </div> */}
      </AnimationBottomSheet>
    </Flex>
  );
}
