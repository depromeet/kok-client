import { Button, Flex, Input, Text } from "@repo/ui/components";
import React, { useState } from "react";
import {
  containerStyle,
  footerContainerStyle,
  headingContainerStyle,
} from "./style.css";
import { theme } from "@repo/ui/tokens";

interface ICreateRoomPeople {
  onNext: (capacity: number) => void;
}

const CreateRoomPeople = ({ onNext }: ICreateRoomPeople) => {
  const [peopleCount, setPeopleCount] = useState("2");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");

    if (value === "") {
      setPeopleCount("");
      return;
    }

    let numValue = parseInt(value, 10);

    if (numValue < 2) {
      numValue = 2;
    } else if (numValue > 12) {
      numValue = 12;
    }

    setPeopleCount(numValue.toString());
  };

  const isButtonDisabled = peopleCount === "" || parseInt(peopleCount, 10) < 2;

  return (
    <Flex
      justify="between"
      align="center"
      direction="column"
      className={containerStyle}
    >
      {/* 제목 */}
      <Flex
        justify="center"
        align="center"
        direction="column"
        className={headingContainerStyle}
      >
        <Flex>
          <Text variant="heading3" style={{ color: theme.colors.orange50 }}>
            {" "}
            사랑해요
          </Text>
          <Text variant="heading3"> 의</Text>
        </Flex>

        <Text as="p" variant="heading3">
          {" "}
          인원수를 입력해 주세요
        </Text>
      </Flex>

      {/* 인원수 입력 */}
      <Flex
        gap={12}
        justify="center"
        align="center"
        className={headingContainerStyle}
      >
        <Input
          variant="rectangular"
          width="people"
          value={peopleCount}
          onChange={handleChange}
          maxLength={2}
        />
        <div>명</div>
      </Flex>

      {/* 하단 버튼 */}
      <Flex justify="center" className={footerContainerStyle}>
        <Button
          onClick={() => onNext(Number(peopleCount))}
          disabled={isButtonDisabled}
        >
          다음
        </Button>
      </Flex>
    </Flex>
  );
};

export default CreateRoomPeople;
