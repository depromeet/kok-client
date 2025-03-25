import { Text, Spacing, Flex } from "@repo/ui/components";
import { Place } from "../templates/dummy";
import * as Style from "./PlaceItem.css";
import { theme } from "@repo/ui/tokens";
import Image from "next/image";
import { ConfirmIcon } from "../atom/ConfirmIcon";
import { UnConfirmIcon } from "../atom/UnConfirmIcon";

export function PlaceItem({ name, confirmed, votedUserImgs }: Place) {
  return (
    <Flex
      direction="column"
      align="center"
      justify="between"
      className={Style.containerStyle}
    >
      <Text variant="title1" color={theme.colors.text5}>
        {name}
      </Text>
      <Spacing size={28} />
      <div className={Style.imgContainerStyle}>
        {votedUserImgs.map((img) => (
          <div key={img} className={Style.imgStyle} />
          // <Image key={img} width={32} height={32} alt="" src={img} />
        ))}
      </div>
      <Spacing size={12} />
      <Text variant="caption" color={theme.colors.text4}>
        {votedUserImgs.length}명의 친구들도 찬성 중
      </Text>
      <div className={Style.iconStyle}>
        {confirmed ? <ConfirmIcon /> : <UnConfirmIcon />}
      </div>
    </Flex>
  );
}
