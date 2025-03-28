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
      <motion.div
        ref={scope}
        className={`${imageContainerStyle} ${isSelected ? selectedImageStyle : ""}`}
        variants={{
          selected: { borderColor: theme.colors.divider2 },
          unselected: { borderColor: "rgba(0,0,0,0)" },
        }}
        initial={isSelected ? "selected" : "unselected"}
        animate={isSelected ? "selected" : "unselected"}
      >
        <Image src={profileImg} alt="profile" fill priority />
      </motion.div>

      <Text variant="caption">{profileName}</Text>
    </Flex>
  );
};

export default ProfileItem;
