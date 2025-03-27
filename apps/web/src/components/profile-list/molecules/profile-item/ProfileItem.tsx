import { useRef } from "react";
import Image from "next/image";
import { Flex, Text } from "@repo/ui/components";

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
  const itemRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    onSelect(profileId);
    itemRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };

  return (
    <Flex
      ref={itemRef}
      align="center"
      direction="column"
      gap={16}
      className={ProfileItemLayoutStyle}
      onClick={handleClick}
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
