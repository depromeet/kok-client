"use client";

import type { IRaondomProfile } from "@/api/types/create-room/index.type";
import type { IJoinRoom } from "@/api/types/join-room";

import { useCallback } from "react";
import Image from "next/image";
import ErrorIcon from "@/components/create-room/atom/error-icon/ErrorIcon";
import { Button, Flex, Input, Text, textRecipe } from "@repo/ui/components";
import { DeleteIcon } from "@repo/ui/icons";

import {
  containerStyle,
  errorMessageStyle,
  footerContainerStyle,
  headingContainerStyle,
  imageContainerStyle,
} from "./style.css";

interface IRaondomProfileProps {
  randomProfile: IRaondomProfile;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  profileValue: IJoinRoom;
  setProfileValue: React.Dispatch<React.SetStateAction<IJoinRoom>>;
}

const WARNING_NICKNAME_LENGTH = 10;

const CreateProfile = ({
  randomProfile,
  setStep,
  profileValue,
  setProfileValue,
}: IRaondomProfileProps) => {
  const handleBtnClick = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newNickname = e.target.value.replace(
        /[^ㄱ-ㅎ가-힣a-zA-Z0-9\s]/g,
        ""
      );
      setProfileValue((prev) => ({
        ...prev,
        nickname: newNickname,
      }));
    },
    [setProfileValue]
  );

  const handleClear = useCallback(() => {
    setProfileValue((prev) => ({
      ...prev,
      nickname: "",
    }));
  }, [setProfileValue]);

  const isOverWarningLength =
    profileValue.nickname.length > WARNING_NICKNAME_LENGTH;
  const isNicknameEmpty = profileValue.nickname.length === 0;
  const isButtonDisabled = isNicknameEmpty || isOverWarningLength;

  return (
    <Flex
      align="center"
      direction="column"
      justify="between"
      className={containerStyle}
    >
      <Flex direction="column" align="center">
        <Flex justify="center" className={headingContainerStyle}>
          <Text variant="heading3"> 프로필을 생성해주세요</Text>
        </Flex>

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
              placeholder="닉네임을 입력해주세요."
              value={profileValue.nickname}
              onChange={handleChange}
              isInvalid={isOverWarningLength}
              rightElement={
                <button onClick={handleClear}>
                  <DeleteIcon disabled={isNicknameEmpty} />
                </button>
              }
            />
            {isOverWarningLength && (
              <Flex align="center" justify="center">
                <ErrorIcon />
                <Text className={errorMessageStyle} variant="caption">
                  닉네임은 10자까지만 적어주세요.
                </Text>
              </Flex>
            )}
          </Flex>
        </Flex>
      </Flex>

      <Flex justify="center" className={footerContainerStyle}>
        <Button
          onClick={handleBtnClick}
          className={textRecipe({ variant: "title3" })}
          disabled={isButtonDisabled}
        >
          다음
        </Button>
      </Flex>
    </Flex>
  );
};

export default CreateProfile;
