import { Flex, Text } from "@repo/ui/components";
import { theme } from "@repo/ui/tokens";
import { containerStyle, imageContainerStyle } from "./style.css";
import Image from "next/image";

const ShareRoomTop = () => {
  return (
    <Flex
      direction="column"
      gap={47}
      justify="center"
      align="center"
      className={containerStyle}
    >
      <Text variant="heading2" style={{ color: theme.colors.gray95 }}>
        모임을 만들었어요!
      </Text>

      {/* todo : 카드플립 자리 */}
      <div className={imageContainerStyle}>
        <Image
          alt="share"
          width={226}
          height={300}
          src={"/images/share1.png"}
        />
      </div>
    </Flex>
  );
};

export default ShareRoomTop;
