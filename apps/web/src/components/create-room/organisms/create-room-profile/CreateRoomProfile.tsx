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
} from "./style.css";

interface ICreateRoomProfile {
  onNext: (profile: string, nickname: string) => void;
  randomProfile: IRaondomProfile;
}

const MAX_NICKNAME_LENGTH = 10;

const CreateRoomProfile = ({ onNext, randomProfile }: ICreateRoomProfile) => {
  const [nickname, setNickname] = useState(randomProfile.nickname);

  // 닉네임 입력 핸들러
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
      .slice(0, MAX_NICKNAME_LENGTH)
      .replace(/[^ㄱ-ㅎ가-힣a-zA-Z0-9\s]/g, "");

    setNickname(newValue);
  }, []);

  const handleClear = useCallback(() => setNickname(""), []);

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
          <Input
            width="profile"
            variant="rectangular"
            placeholder="닉네임을 입력해주세요"
            value={nickname}
            onChange={handleChange}
            maxLength={MAX_NICKNAME_LENGTH}
            rightElement={<DeleteIcon onClick={handleClear} />}
          />
        </Flex>
      </Flex>

      {/* 하단 버튼 */}
      <Flex justify="center" className={footerContainerStyle}>
        <Button
          className={textRecipe({ variant: "title3" })}
          disabled={!nickname}
          onClick={() => onNext(randomProfile.imageUrl, nickname)}
        >
          다음
        </Button>
      </Flex>
    </Flex>
  );
};

export default CreateRoomProfile;
