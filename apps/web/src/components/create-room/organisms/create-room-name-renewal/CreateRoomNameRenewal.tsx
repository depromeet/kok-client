"use client";

import { useState, useCallback } from "react";
import { Button, Flex, Input, Text, textRecipe } from "@repo/ui/components";
import { DeleteIcon } from "@repo/ui/icons";
import {
  containerStyle,
  footerContainerStyle,
  headingContainerStyle,
  invalidSpanStyle,
} from "./style.css";
import Image from "next/image";

interface ICreateRoomName {
  onNext: (name: string) => void;
}

const CreateRoomNameRenewal = ({ onNext }: ICreateRoomName) => {
  const [inputValue, setInputValue] = useState("");
  const isInvalid = inputValue.length > 20; // ✅ 20글자 초과 시 true

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/[^ㄱ-ㅎ가-힣a-zA-Z0-9\s]/g, ""); // ✅ 특수 문자 제거
    setInputValue(newValue);
  }, []);

  const handleClear = useCallback(() => setInputValue(""), []);

  const isButtonDisabled = inputValue.length === 0 || isInvalid; // ✅ 20글자 초과 시 버튼 비활성화

  return (
    <Flex
      justify="between"
      align="center"
      direction="column"
      className={containerStyle}
    >
      {/* 가운데 */}
      <Flex
        gap={60}
        justify="center"
        direction="column"
        align="center"
        className={headingContainerStyle}
      >
        <Text variant="heading3">모임 이름을 입력해 주세요</Text>
        <Image
          src={"/images/create-room/main.svg"}
          width={160}
          height={160}
          alt="main"
          priority
          loading="eager"
          layout="intrinsic"
        />
      </Flex>

      {/* 아래 */}
      <Flex direction="column" gap={20} className={footerContainerStyle}>
        <Flex direction="column" gap={11}>
          <Input
            variant="rectangular"
            width="full"
            placeholder="예) 호진이네 집들이 (최대 20자)"
            value={inputValue}
            onChange={handleChange}
            maxLength={30} // ✅ 20글자 이상 입력 가능하지만 경고만 표시됨
            isInvalid={isInvalid} // ✅ 20글자 초과 시 스타일 변경
            rightElement={
              inputValue.length > 0 ? (
                <DeleteIcon onClick={handleClear} />
              ) : null
            }
          />
          {/* 호진 todo : 너무 갑자기 나오니까 이상함 인터랙션 필요 */}
          {isInvalid && (
            <Flex align="center">
              <Image
                src={"/images/create-room/error.svg"}
                width={20}
                height={20}
                alt="error"
              />
              <Text className={invalidSpanStyle} variant="caption">
                모임 이름은 20자까지만 적어주세요
              </Text>
            </Flex>
          )}
        </Flex>

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
