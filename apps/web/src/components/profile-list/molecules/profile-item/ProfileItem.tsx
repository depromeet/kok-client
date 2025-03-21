import { Flex, Text } from "@repo/ui/components";
import Image from "next/image";
import React from "react";
import {
  imageContainerStyle,
  ProfileItemLayoutStyle,
  selectedImageStyle,
} from "./style.css";

interface ProfileItemProps {
  profileImg: string;
  profileName: string;
  profileId: string;
  isSelected: boolean;
  onSelect: (profileId: string) => void;
}

const ProfileItem = ({
  profileImg,
  profileName,
  profileId,
  isSelected,
  onSelect,
}: ProfileItemProps) => {
  return (
    <Flex
      align="center"
      justify="center"
      direction="column"
      gap={16}
      className={ProfileItemLayoutStyle}
      onClick={() => onSelect(profileId)}
    >
      <div
        className={`${imageContainerStyle} ${isSelected ? selectedImageStyle : ""}`}
      >
        <Image src={profileImg} alt="profile" fill priority />
      </div>
      <Text variant="caption">{profileName}</Text>
    </Flex>
  );
};

export default ProfileItem;
