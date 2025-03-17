"use client";
import type { IRaondomProfile } from "@/api/types/create-room/index.type";
import { useState, useCallback } from "react";
import Image from "next/image";
import { Button, Flex, Input, Text, textRecipe } from "@repo/ui/components";
import { DeleteIcon } from "@repo/ui/icons";
import {
  containerStyle,
  footerContainerStyle,
  headingContainerStyle,
  imageContainerStyle,
  errorMessageStyle,
} from "./style.css";

interface ICreateRoomProfile {
  onNext: (profile: string, nickname: string) => void;
  randomProfile: IRaondomProfile;
}

const WARNING_NICKNAME_LENGTH = 10;

const CreateRoomProfile = ({ onNext, randomProfile }: ICreateRoomProfile) => {
  const [nickname, setNickname] = useState(randomProfile.nickname);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/[^ㄱ-ㅎ가-힣a-zA-Z0-9\s]/g, "");

    setNickname(newValue);
  }, []);

  const handleClear = useCallback(() => setNickname(""), []);

  const isOverWarningLength = nickname.length > WARNING_NICKNAME_LENGTH;
  const isNicknameEmpty = nickname.length === 0;
  const isButtonDisabled = isNicknameEmpty || isOverWarningLength;

  return (
    <Flex
      align="center"
      direction="column"
      justify="between"
      className={containerStyle}
    >
      <Flex direction="column" align="center">
        {/* 제목 */}
        <Flex justify="center" className={headingContainerStyle}>
          <Text variant="heading3"> 프로필을 생성해주세요</Text>
        </Flex>

        {/* 프로필 이미지 */}
        <Flex
          align="center"
          direction="column"
          gap={24}
          className={imageContainerStyle}
        >
          <Image
            src={randomProfile.imageUrl}
            alt="profile"
            width={80}
            height={80}
          />
          <Flex direction="column" gap={8}>
            <Input
              width="profile"
              variant="rectangular"
              placeholder="닉네임을 입력해주세요."
              value={nickname}
              onChange={handleChange}
              isInvalid={isOverWarningLength} // ✅ 10자 초과 시 Input 스타일 변경
              rightElement={
                <DeleteIcon onClick={handleClear} disabled={isNicknameEmpty} />
              }
            />
            {isOverWarningLength && (
              <Flex align="center" justify="center">
                <Image
                  src={"/images/create-room/error.svg"}
                  width={20}
                  height={20}
                  alt="error"
                />
                <Text className={errorMessageStyle} variant="caption">
                  닉네임은 10자까지만 적어주세요.
                </Text>
              </Flex>
            )}
          </Flex>
        </Flex>
      </Flex>

      {/* 하단 버튼 */}
      <Flex justify="center" className={footerContainerStyle}>
        <Button
          className={textRecipe({ variant: "title3" })}
          disabled={isButtonDisabled}
          onClick={() => onNext(randomProfile.imageUrl, nickname)}
        >
          다음
        </Button>
      </Flex>
    </Flex>
  );
};

export default CreateRoomProfile;
