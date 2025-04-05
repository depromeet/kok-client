import { Flex, Spacing, Text } from "@repo/ui/components";
import * as Style from "./ProfileItem.css";
import { motion, useAnimate } from "@repo/motion";
import { theme } from "@repo/ui/tokens";
import Image from "next/image";
import { useEffect } from "react";
import { TUserStatus } from "@/api/types/vote/index.type";
import { getShortAddress } from "@/utils/getShortAddress";

interface Props extends TUserStatus {
  selected: boolean;
}

export function ProfileItem({
  nickname,
  imageUrl,
  selected,
  isVoted,
  address,
}: Props) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (selected) {
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
  }, [animate, scope, selected]);

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      className={Style.container}
    >
      <div className={Style.badgeRecipe({ voted: isVoted ? "finish" : "yet" })}>
        {isVoted ? "투표 완료" : "투표 전"}
      </div>
      <Spacing size={12} />
      <motion.div
        ref={scope}
        variants={{
          selected: { borderColor: theme.colors.divider2 },
          unselected: { borderColor: "rgba(0,0,0,0)" },
        }}
        initial={selected ? "selected" : "unselected"}
        animate={selected ? "selected" : "unselected"}
        whileTap={{ scale: 0.9 }}
        className={Style.img}
      >
        <Image
          src={imageUrl}
          alt=""
          width={64}
          height={64}
          className={Style.img}
        />
      </motion.div>
      <Spacing size={16} />
      <Text className={Style.name}>{nickname}</Text>
      <Spacing size={8} />
      <Text className={Style.address}>{getShortAddress(address)}</Text>
    </Flex>
  );
}
