"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { Button, Flex, Input, Text, textRecipe } from "@repo/ui/components";
import { DeleteIcon } from "@repo/ui/icons";

import {
  containerStyle,
  deleteButtonStyle,
  footerContainerStyle,
  headingContainerStyle,
  invalidSpanStyle,
} from "./style.css";
import ErrorIcon from "../../atom/error-icon/ErrorIcon";
import { motion } from "@repo/motion";

interface ICreateRoomName {
  onNext: (name: string) => void;
}

const CreateRoomName = ({ onNext }: ICreateRoomName) => {
  const [inputValue, setInputValue] = useState("");
  const isInvalid = inputValue.length > 20;

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/[^ㄱ-ㅎ가-힣a-zA-Z0-9\s]/g, "");
    setInputValue(newValue);
  }, []);

  const handleClear = useCallback(() => setInputValue(""), []);

  const isButtonDisabled = inputValue.length === 0 || isInvalid;

  return (
    <>
      <Flex
        justify="between"
        align="center"
        direction="column"
        className={containerStyle}
      >
        {/* 가운데 */}
        <Flex
          gap={40}
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
          />
          <Input
            width="full"
            placeholder="예) 호진이네 집들이 (최대 20자)"
            value={inputValue}
            onChange={handleChange}
            maxLength={30}
            isInvalid={isInvalid}
            rightElement={
              inputValue.length > 0 ? (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={handleClear}
                  className={deleteButtonStyle}
                >
                  <DeleteIcon />
                </motion.button>
              ) : null
            }
          />
        </Flex>

        {/* 아래 */}
        <Flex direction="column" gap={20} className={footerContainerStyle}>
          <Flex direction="column" gap={11}>
            {isInvalid && (
              <Flex align="center">
                <ErrorIcon />
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
    </>
  );
};

export default CreateRoomName;
