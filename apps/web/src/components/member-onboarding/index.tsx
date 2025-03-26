"use client";

import { Button, Flex, LoadingDots, Text } from "@repo/ui/components";
import Image from "next/image";
import * as Style from "./style.css";
import { useRoomInfo } from "@/hooks/api/useRoomInfo";

interface MemberOnboardingProps {
  roomId: string;
}

const MemberOnboarding = ({ roomId }: MemberOnboardingProps) => {
  const { data } = useRoomInfo(roomId);

  const descriptions = [
    "내 프로필을 만들고 출발지를 입력해요",
    "중간장소 후보를 확인하고 추가해요",
    "투표 안한 친구 들을 독촉해요",
  ];

  return (
    <Flex
      direction="column"
      align="center"
      justify="between"
      className={Style.background}
    >
      <Flex direction="column" align="center" justify="between" gap={80}>
        <div className={Style.header}>
          <Text variant="title3" className={Style.speachBubble}>
            {data ? data.data.roomName : <LoadingDots />}
            <div className={Style.speachBubbleTail} />
          </Text>
          <Text variant="heading3">모임 초대장이 도착했어요</Text>
        </div>

        <Image
          src="/images/create-room/main.svg"
          alt="invitation character image"
          width={160}
          height={160}
          priority
        />

        <Flex
          as="ul"
          direction="column"
          gap={16}
          className={Style.descriptionContainer}
        >
          {descriptions.map((description, index) => (
            <Flex as="li" key={index} gap={12} align="center">
              <div className={Style.numbering}>{index + 1}</div>
              <Text as="p" variant="caption">
                {description}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>

      <Button variant="secondary">약속방 참여하기</Button>
    </Flex>
  );
};

export default MemberOnboarding;
