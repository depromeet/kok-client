"use client";

import { useState } from "react";
import {
  containerStyle,
  footerContainerStyle,
  headingContainerStyle,
} from "./style.css";
import { Button, Flex, Input, Text } from "@repo/ui/components";
import { DeleteIcon } from "@repo/ui/icons";

interface ICreateRoomName {
  onNext: (name: string) => void;
}

const CreateRoomName = ({ onNext }: ICreateRoomName) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value.slice(0, 20);

    // 특수문자 제거 (한글, 영어, 숫자, 공백만 허용)
    newValue = newValue.replace(/[^ㄱ-ㅎ가-힣a-zA-Z0-9\s]/g, "");

    setInputValue(newValue);
  };

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
        {/* todo : placeholder 고민 해서 다시 채워넣기 */}
        <Input
          variant="rectangular"
          width="full"
          placeholder="예) 호진이네 집들이."
          value={inputValue}
          onChange={handleChange}
          maxLength={20}
          rightElement={
            <span>{<DeleteIcon onClick={() => setInputValue("")} />}</span>
          }
        />
        <Button onClick={() => onNext(inputValue)} disabled={isButtonDisabled}>
          다음
        </Button>
      </Flex>
    </Flex>
  );
};

export default CreateRoomName;
