import { useRef, useEffect } from "react";
import Image from "next/image";
import { Flex, Text } from "@repo/ui/components";
import { motion, useAnimate } from "@repo/motion";
import { theme } from "@repo/ui/tokens";
import {
  imageContainerStyle,
  ProfileItemLayoutStyle,
  selectedImageStyle,
} from "./style.css";
import { getShortAddress } from "@/utils/getShortAddress";

interface ProfileItemProps {
  profileImg: string;
  profileName: string;
  profileId: string;
  profileAddress: string;
  isSelected: boolean;
  onSelect: (
    profileId: string,
    profileAddress: string,
    profileNickname: string,
    profileImage: string
  ) => void;
}

const ProfileItem = ({
  profileImg,
  profileName,
  profileId,
  profileAddress,
  isSelected,
  onSelect,
}: ProfileItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isSelected) {
      animate(
        [
          [scope.current, { rotate: "7deg" }, { duration: 0.22 }],
          [scope.current, { rotate: "-7deg" }, { duration: 0.22 }],
          [scope.current, { rotate: "7deg" }, { duration: 0.22 }],
          [scope.current, { rotate: "-7deg" }, { duration: 0.22 }],
        ],
        { repeat: Infinity, repeatType: "reverse" }
      );
      return;
    }
    animate(scope.current, { rotate: "0deg" });
  }, [animate, scope, isSelected]);

  const handleClick = () => {
    onSelect(profileId, profileAddress, profileName, profileImg);
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
      <motion.div
        ref={scope}
        className={`${imageContainerStyle} ${isSelected ? selectedImageStyle : ""}`}
        variants={{
          selected: { borderColor: theme.colors.divider2 },
          unselected: { borderColor: "rgba(0,0,0,0)" },
        }}
        whileTap={{ scale: 0.96 }}
        initial={isSelected ? "selected" : "unselected"}
        animate={isSelected ? "selected" : "unselected"}
      >
        <Image src={profileImg} alt="profile" fill priority />
      </motion.div>

      <Flex direction="column" gap={8} align="center">
        <Text variant="caption">{profileName}</Text>
        <Text
          variant="caption"
          style={{
            color: theme.colors.gray40,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "115px",
          }}
        >
          {profileAddress ? (
            getShortAddress(profileAddress)
          ) : (
            <Text style={{ color: theme.colors.red50, fontWeight: 700 }}>
              주소가 비어있어요!
            </Text>
          )}
        </Text>
      </Flex>
    </Flex>
  );
};

export default ProfileItem;
