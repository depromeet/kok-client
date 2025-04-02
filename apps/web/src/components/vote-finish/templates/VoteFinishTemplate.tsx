import { Text, Flex, Spacing } from "@repo/ui/components";
import * as Style from "./style.css";
import { theme } from "@repo/ui/tokens";
import { PlaceList } from "../organism/PlaceList";
import { useParams } from "next/navigation";
import { useVoteResult } from "@/hooks/api/useVoteResult";
// import { FixedBottomWithSpacing } from "@/components/fixed-bottom/FixedBottomWithSpacing";
import { AnimationBottomSheet } from "@repo/ui/components";
import { useRouter } from "next/router";

interface Props {
  memberId: string;
  onRevote: VoidFunction;
}

export function VoteFinishTemplate({ memberId, onRevote }: Props) {
  const params = useParams();
  const router = useRouter();

  const { data } = useVoteResult(params?.roomId as string, memberId);
  console.log("VoteFinishTemplate", data, params?.roomId, memberId);

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
            <></>
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
          친구들이 모두 입장할 수 있도록 링크를 공유해요!
        </Text>
        <Spacing size={22} />
        <div className={Style.buttonContainerStyle}>
          <button className={Style.leftButtonStyle}>
            <Text variant="title3" onClick={onRevote}>
              재투표 하기
            </Text>
          </button>

          <button className={Style.rightButtonStyle}>
            {votedAll ? (
              <Text
                variant="title3"
                onClick={() => router.push(`/room/${params?.roomId}/result`)}
              >
                모임장소 확인하기
              </Text>
            ) : (
              <Text variant="title3" onClick={() => {}}>
                링크 복사하기
              </Text>
            )}
          </button>
        </div>
        {/* </div> */}
      </AnimationBottomSheet>
    </Flex>
  );
}
