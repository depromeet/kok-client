import { Text, Spacing, Flex } from "@repo/ui/components";
import { Candidate } from "../templates/types";
import * as Style from "./PlaceItem.css";
import { theme } from "@repo/ui/tokens";
import Image from "next/image";
import { ConfirmIcon } from "../atom/ConfirmIcon";
import { UnConfirmIcon } from "../atom/UnConfirmIcon";

export function PlaceItem({ stationName, voteStatus, members }: Candidate) {
  return (
    <Flex
      direction="column"
      align="center"
      justify="between"
      className={Style.containerStyle}
    >
      <Text variant="title1" color={theme.colors.text5}>
        {stationName}
      </Text>
      <Spacing size={28} />
      <div className={Style.imgContainerStyle}>
        {members.map(({ id, imageUrl }) => (
          <Image
            key={id}
            className={Style.imgStyle}
            width={32}
            height={32}
            alt=""
            src={imageUrl}
          />
        ))}
      </div>
      <Spacing size={12} />
      <Text variant="caption" color={theme.colors.text4}>
        {members.length}명의 친구들도 찬성 중
      </Text>
      <div className={Style.iconStyle}>
        {voteStatus ? <ConfirmIcon /> : <UnConfirmIcon />}
      </div>
    </Flex>
  );
}
