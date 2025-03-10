"use client";

import { Button, Flex, Input, Text } from "@repo/ui/components";
import { useState } from "react";
import Image from "next/image";
import { DeleteIcon } from "@repo/ui/icons";

import {
  containerStyle,
  footerContainerStyle,
  headingContainerStyle,
  imageContainerStyle,
} from "./style.css";

interface ICreateRoomProfile {
  onNext: (profile: string, nickname: string) => void;
}

const CreateRoomProfile = ({ onNext }: ICreateRoomProfile) => {
  const [nickname, setNickname] = useState(""); // todo: 서버로부터 닉네임 받아오기
  const profileImage = "/mocks/mock.svg"; // todo: 서버에서 가져오거나 사용자가 업로드 가능하도록 변경

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value.slice(0, 10);
    newValue = newValue.replace(/[^ㄱ-ㅎ가-힣a-zA-Z0-9\s]/g, "");
    setNickname(newValue);
  };

  const isButtonDisabled = nickname.length === 0;

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
          <Image src={profileImage} alt="mock" width={80} height={80} />
          <Input
            width="profile"
            variant="rectangular"
            placeholder="닉네임을 입력해주세요"
            value={nickname}
            onChange={handleChange}
            maxLength={10}
            rightElement={
              <span>{<DeleteIcon onClick={() => setNickname("")} />}</span>
            }
          />
        </Flex>
      </Flex>

      {/* 하단 버튼 */}
      <Flex justify="center" className={footerContainerStyle}>
        <Button
          disabled={isButtonDisabled}
          onClick={() => onNext(profileImage, nickname)} // onNext 호출 추가
        >
          다음
        </Button>
      </Flex>
    </Flex>
  );
};

export default CreateRoomProfile;
