import { Text, Flex, Spacing } from "@repo/ui/components";
import * as Style from "./style.css";
import { theme } from "@repo/ui/tokens";
import { PlaceList } from "../organism/PlaceList";
import { useParams } from "next/navigation";
import { useVoteResult } from "@/hooks/api/useVoteResult";
import { FixedBottomWithSpacing } from "@/components/fixed-bottom/FixedBottomWithSpacing";

interface Props {
  memberId: string;
  onRevote: VoidFunction;
}

export function VoteFinishTemplate({ memberId, onRevote }: Props) {
  const params = useParams();

  const { data } = useVoteResult(params?.roomId as string, memberId);

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
      <FixedBottomWithSpacing>
        <div className={Style.bottomsheetContainerStyle}>
          <Text variant="title2" color={theme.colors.text.primary}>
            <Text color={theme.colors.text.kok}>
              {data?.data.notVotedCount ?? 0}
            </Text>
            명이 투표하지 않았어요!
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
            {/* 투표 완료되었으면 모임장소 확인하기로 변경 */}
            <button className={Style.rightButtonStyle}>
              <Text variant="title3" onClick={() => {}}>
                링크 복사하기
              </Text>
            </button>
          </div>
        </div>
      </FixedBottomWithSpacing>
    </Flex>
  );
}
