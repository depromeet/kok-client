import { useState } from "react";
import Image from "next/image";
import { Button, Flex, Text, textRecipe } from "@repo/ui/components";
import { theme } from "@repo/ui/tokens";

import {
  BottomIconStyle,
  containerStyle,
  footerBtnContainerStyle,
  footerContainerStyle,
  gridContainerStyle,
  headingContainerStyle,
  imageStyle,
  imageWrapperStyle,
  peopleCountStyle,
  roomNameContainerStyle,
  TopIconStyle,
} from "./style.css";
import TopIcon from "../../atom/top-icon/TopIcon";
import BottomIcon from "../../atom/bottom-icon/BottomIcon";
import { motion, useAnimationControls } from "@repo/motion";

interface ICreateRoomPeople {
  onNext: (capacity: number) => void;
  roomName?: string;
}

const MIN_PEOPLE = 2;
const MAX_PEOPLE = 15;

const CreateRoomPeople = ({ onNext, roomName }: ICreateRoomPeople) => {
  const [peopleCount, setPeopleCount] = useState(2);
  const images = Array.from(
    { length: 15 },
    (_, i) => `/images/create-room/${i + 1}.png`
  );
  const isButtonDisabled = peopleCount < MIN_PEOPLE || peopleCount > MAX_PEOPLE;
  const control = useAnimationControls();

  const handleIncrease = () => {
    if (peopleCount < MAX_PEOPLE) {
      setPeopleCount((prev) => prev + 1);
    }
  };

  const handleDecrease = () => {
    if (peopleCount > MIN_PEOPLE) {
      setPeopleCount((prev) => prev - 1);
    }
  };

  const handleImageClick = (index: number) => {
    const newCount = index + 1;
    if (newCount >= MIN_PEOPLE && newCount <= MAX_PEOPLE) {
      setPeopleCount(newCount);
    }
  };

  return (
    <Flex
      justify="between"
      align="center"
      direction="column"
      className={containerStyle}
    >
      {/* 상단 */}
      <Flex
        justify="between"
        align="center"
        direction="column"
        className={headingContainerStyle}
        gap={32}
      >
        <div className={roomNameContainerStyle}>
          <div>
            <Text
              variant="heading3"
              as="span"
              style={{ color: theme.colors.orange50 }}
            >
              {roomName}
            </Text>
            <Text variant="heading3" as="span">
              의
            </Text>
          </div>
          <div>
            <Text variant="heading3" as="span">
              인원수를 입력해 주세요
            </Text>
          </div>
        </div>

        {/* 명 수 입력 */}

        <Flex gap={12} align="center" justify="center">
          <Flex gap={4} align="center" justify="center">
            <Flex align="center" justify="center" className={peopleCountStyle}>
              <Text variant="body1" style={{ cursor: "default" }}>
                {peopleCount}
              </Text>
            </Flex>

            <Flex direction="column">
              {/* 증가 버튼 */}
              <motion.button
                whileTap={{ opacity: 0.5 }}
                style={{
                  cursor:
                    peopleCount === MAX_PEOPLE ? "not-allowed" : "pointer",
                }}
                className={TopIconStyle}
                disabled={peopleCount >= MAX_PEOPLE}
                onClick={handleIncrease}
              >
                <TopIcon disabled={peopleCount === MAX_PEOPLE} />
              </motion.button>

              {/* 감소 버튼 */}
              <motion.button
                whileTap={{ opacity: 0.5 }}
                style={{
                  cursor:
                    peopleCount === MIN_PEOPLE ? "not-allowed" : "pointer",
                }}
                className={BottomIconStyle}
                disabled={peopleCount <= MIN_PEOPLE}
                onClick={handleDecrease}
              >
                <BottomIcon disabled={peopleCount === MIN_PEOPLE} />
              </motion.button>
            </Flex>
          </Flex>
          <Text variant="body1">명</Text>
        </Flex>
      </Flex>

      {/* 하단 */}
      <Flex direction="column" className={footerContainerStyle}>
        {/* 프로필 선택해서 인원 설정 */}

        <div className={gridContainerStyle}>
          {images.map((src, index) => (
            <motion.div
              variants={{
                active: { opacity: 1 },
                inactive: { opacity: 0.55 },
              }}
              animate={index >= peopleCount ? "inactive" : "active"}
              whileTap={{
                scale: 0.96,
              }}
              key={index}
              className={imageWrapperStyle}
              onClick={() => handleImageClick(index)}
            >
              <Image
                src={src}
                alt={`Profile ${index + 1}`}
                width={56}
                height={56}
                className={imageStyle}
                style={{
                  filter: index >= peopleCount ? "grayscale(100%)" : "none",
                  opacity: index >= peopleCount ? 0.55 : 1,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* 하단 버튼 */}
        <Flex justify="center" className={footerBtnContainerStyle}>
          <Button
            className={textRecipe({ variant: "title3" })}
            onClick={() => onNext(Number(peopleCount))}
            disabled={isButtonDisabled}
          >
            다음
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CreateRoomPeople;
