"use client";

import { useState, useCallback } from "react";
import { Button, Flex, Input, Text, textRecipe } from "@repo/ui/components";
import { DeleteIcon } from "@repo/ui/icons";
import {
  containerStyle,
  footerContainerStyle,
  headingContainerStyle,
} from "./style.css";

interface ICreateRoomName {
  onNext: (name: string) => void;
}

const CreateRoomNameRenewal = ({ onNext }: ICreateRoomName) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
      .slice(0, 20)
      .replace(/[^ㄱ-ㅎ가-힣a-zA-Z0-9\s]/g, "");

    setInputValue(newValue);
  }, []);

  const handleClear = useCallback(() => setInputValue(""), []);

  const isButtonDisabled = inputValue.length === 0;

  return (
    <Flex
      justify="between"
      align="center"
      direction="column"
      className={containerStyle}
    >
      <Flex justify="center" className={headingContainerStyle}>
        <Text variant="heading3">모임 이름을 입력해 주세요</Text>
      </Flex>
      <Flex
        align="center"
        direction="column"
        gap={32}
        className={footerContainerStyle}
      >
        <Input
          variant="rectangular"
          width="full"
          placeholder="예) 호진이네 집들이."
          value={inputValue}
          onChange={handleChange}
          maxLength={20}
          rightElement={<DeleteIcon onClick={handleClear} />}
        />
        <Button
          className={textRecipe({ variant: "title3" })}
          onClick={() => onNext(inputValue)}
          disabled={isButtonDisabled}
        >
          다음
        </Button>
      </Flex>
    </Flex>
  );
};

export default CreateRoomNameRenewal;
