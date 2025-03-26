import { Flex, Text } from "@repo/ui/components";
import KakaoTalkShareButton from "../../molecule/KakaoTalkShareButton";
import { containerStyle, KakaoTalkShareButtonStyle } from "./style.css";
import { theme } from "@repo/ui/tokens";
import { KAKAO_TEMPLATE_IDS } from "@/constants/kakao-template";

const ShareRoomBottom = () => {
  return (
    <Flex direction="column" gap={12} className={containerStyle}>
      <Flex justify="center">
        <Text variant="caption" style={{ color: theme.colors.gray40 }}>
          친구들이 입장할 수 있도록 링크를 공유해요!
        </Text>
      </Flex>
      <Flex className={KakaoTalkShareButtonStyle}>
        <KakaoTalkShareButton
          variant="secondary"
          templateId={KAKAO_TEMPLATE_IDS.SELECT_START}
        >
          링크 공유하기
        </KakaoTalkShareButton>
      </Flex>
    </Flex>
  );
};

export default ShareRoomBottom;
