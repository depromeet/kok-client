"use client";

import { Button, Flex, Spacing, Text } from "@repo/ui/components";
import * as Style from "./style.css";
import { Tooltip } from "../atom/Tooltip/Tooltip";
import Image from "next/image";
import { Stepper } from "../atom/Stepper/Stepper";
import { useParams, useRouter } from "next/navigation";

const DUMMY_PLACE_NUM = 3;
const DUMMY_HOUR = "9시간 59분";

export function VoteOnboardingLayout() {
  const router = useRouter();
  const params = useParams();

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
        <Tooltip>{DUMMY_PLACE_NUM}가지 장소 후보</Tooltip>
        <Spacing size={4} />
        <Text variant="heading3" className={Style.titleStyle}>
          어디로 갈까요?
        </Text>
        <Spacing size="12.65vh" />
        <Image src="/images/vote/banner.png" width={335} height={160} alt="" />
        <Spacing size="12.65vh" />
        <Stepper>
          <Stepper.Item order={1}>
            중간장소 후보를 둘러보고 투표해요
          </Stepper.Item>
          <Stepper.Item order={2}>투표 안 한 친구들을 독촉해요</Stepper.Item>
        </Stepper>
      </Flex>

      {/* 아래 */}
      <Flex
        direction="column"
        align="center"
        className={Style.footerContainerStyle}
      >
        <Text variant="caption">
          <span className={Style.LimitHour}>{DUMMY_HOUR} </span>
          안에 투표 해주세요!
        </Text>
        <Spacing size={20} />
        <Button
          variant="secondary"
          onClick={() =>
            router.push(`/room/${params?.roomId}/vote/select-profile`)
          }
        >
          투표 참여하기
        </Button>
      </Flex>
    </Flex>
  );
}
