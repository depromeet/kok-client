import { Text, Flex, Spacing } from "@repo/ui/components";
import * as Style from "./style.css";
import { theme } from "@repo/ui/tokens";
import { PlaceList } from "../organism/PlaceList";
import { dummyPlaceList } from "./dummy";

const DUMMY_PLACE_NUM = 3;
const DUMMY_UNVOTED_NUMBER = 1;

export function VoteFinishTemplate() {
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
        <Text variant="body3">{DUMMY_PLACE_NUM}가지 장소</Text>
        <Spacing size={16} />
        <Text variant="heading1">투표 완료</Text>
        <PlaceList placeList={dummyPlaceList} />
      </Flex>

      {/* 아래 */}
      <div className={Style.bottomsheetContainerStyle}>
        <Text variant="title2" color={theme.colors.text.primary}>
          <Text color={theme.colors.text.kok}>{DUMMY_UNVOTED_NUMBER}</Text>명이
          투표하지 않았어요!
        </Text>
        <Spacing size={12} />
        <Text variant="caption" color={theme.colors.text.caption}>
          친구들이 모두 입장할 수 있도록 링크를 공유해요!
        </Text>
        <Spacing size={22} />
        <div className={Style.buttonContainerStyle}>
          <button className={Style.leftButtonStyle}>
            <Text variant="title3">재투표 하기</Text>
          </button>
          <button className={Style.rightButtonStyle}>
            <Text variant="title3">링크 복사하기</Text>
          </button>
        </div>
      </div>
    </Flex>
  );
}
