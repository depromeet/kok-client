import { Flex, Spacing, Text } from "@repo/ui/components";
// import Image from "next/image";
import * as Style from "./ProfileItem.css";
import { motion, useAnimate } from "@repo/motion";
import { theme } from "@repo/ui/tokens";
import { useEffect } from "react";

interface Props {
  id: string;
  name: string;
  profileSrc: string;
  address: string;
  selected: boolean;
}

export function ProfileItem({ name, address, selected }: Props) {
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
      <motion.div
        ref={scope}
        variants={{
          selected: { borderColor: theme.colors.token.divider2 },
          unselected: { borderColor: "rgba(0,0,0,0)" },
        }}
        initial={selected ? "selected" : "unselected"}
        animate={selected ? "selected" : "unselected"}
        className={Style.img}
      />
      {/* <Image
        src={profileSrc}
        alt=""
        width={64}
        height={64}
        className={Style.img}
      /> */}
      <Spacing size={16} />
      <Text className={Style.name}>{name}</Text>
      <Spacing size={8} />
      <Text className={Style.address}>{address}</Text>
    </Flex>
  );
}
