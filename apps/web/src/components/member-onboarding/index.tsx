"use client";

import { Button, Flex, Text } from "@repo/ui/components";
import Image from "next/image";
import * as Style from "./style.css";
import Link from "next/link";
import { AnimateStack, motion } from "@repo/motion";

interface MemberOnboardingProps {
  roomId: string;
  roomName: string;
}

const MemberOnboarding = ({ roomId, roomName }: MemberOnboardingProps) => {
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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={Style.speachBubbleContainer}
          >
            <Text variant="title3" className={Style.speachBubble}>
              {roomName}
              <div className={Style.speachBubbleTail} />
            </Text>
          </motion.div>
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
          <AnimateStack delay={0.3}>
            {descriptions.map((description, index) => (
              <Flex as="li" key={index} gap={12} align="center">
                <div className={Style.numbering}>{index + 1}</div>
                <Text as="p" variant="caption">
                  {description}
                </Text>
              </Flex>
            ))}
          </AnimateStack>
        </Flex>
      </Flex>

      <Link
        href={`/room/${roomId}/select-profile`}
        style={{ width: "100%", WebkitTapHighlightColor: "transparent" }}
      >
        <Button variant="secondary" className={Style.buttonContainer}>
          <Text variant="title3">모임 참여하기</Text>
        </Button>
      </Link>
    </Flex>
  );
};

export default MemberOnboarding;
