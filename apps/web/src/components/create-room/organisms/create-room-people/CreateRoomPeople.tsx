import { Button, Flex, Input, Text, textRecipe } from "@repo/ui/components";
import { useState, useCallback } from "react";
import { theme } from "@repo/ui/tokens";

import {
  containerStyle,
  footerContainerStyle,
  headingContainerStyle,
} from "./style.css";

interface ICreateRoomPeople {
  onNext: (capacity: number) => void;
}

const MIN_PEOPLE = 2;
const MAX_PEOPLE = 12;

const CreateRoomPeople = ({ onNext }: ICreateRoomPeople) => {
  const [peopleCount, setPeopleCount] = useState("2");

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (!value) return setPeopleCount("");

    const numValue = Math.max(
      MIN_PEOPLE,
      Math.min(parseInt(value, 10), MAX_PEOPLE)
    );
    setPeopleCount(numValue.toString());
  }, []);

  const isButtonDisabled =
    peopleCount === "" || parseInt(peopleCount, 10) < MIN_PEOPLE;

  return (
    <Flex
      justify="between"
      align="center"
      direction="column"
      className={containerStyle}
    >
      <Flex direction="column" align="center">
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
      </Flex>

      {/* 하단 버튼 */}
      <Flex justify="center" className={footerContainerStyle}>
        <Button
          className={textRecipe({ variant: "title3" })}
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
