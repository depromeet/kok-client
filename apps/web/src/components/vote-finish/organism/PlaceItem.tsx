import { Text, Spacing, Flex } from "@repo/ui/components";
import { Candidate } from "../templates/types";
import * as Style from "./PlaceItem.css";
import { theme } from "@repo/ui/tokens";
import Image from "next/image";
import { NoVoteIcon } from "@/assets/icons/NoVoteIcon";

export function PlaceItem({
  stationName,
  resultTag,
  members,
  votedCount,
}: Candidate) {
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

      {votedCount > 0 ? (
        <>
          <div className={Style.imgContainerStyle}>
            {members.map(({ imageUrl }) => (
              <Image
                key={imageUrl}
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
            {`${votedCount}명의 친구들이 찬성 중`}
          </Text>
        </>
      ) : (
        <>
          <NoVoteIcon />
          <Spacing size={12} />
          <Text variant="caption" color={theme.colors.text4}>
            아무도 콕하지 않은 장소
          </Text>
        </>
      )}

      {resultTag !== "NONE" && (
        <div
          className={Style.iconStyle}
          style={{
            backgroundColor:
              resultTag === "TOP" ? theme.colors.icon.kok : theme.colors.navy,
          }}
        >
          <Text color={theme.colors.text.white} variant="title2">
            {resultTag === "TOP" ? "유력" : "접전"}
          </Text>
        </div>
      )}
    </Flex>
  );
}
