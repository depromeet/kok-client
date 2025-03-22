import * as Style from "./RowCardList.css";
import { motion } from "@repo/motion";
import { Place } from "../templates/dummy";
import { Spacing, Text } from "@repo/ui/components";
import { theme } from "@repo/ui/tokens";

interface Props {
  view: "card" | "list";
  list: Place[];
}

export function RowCardList({ view, list }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      variants={{
        card: {},
        list: {
          opacity: 1,
          transition: { delay: 1, ease: [0, 0, 1, 1] },
        },
      }}
      animate={view}
      className={Style.containerStyle}
    >
      {list.map((place, index) => (
        <motion.div
          variants={{
            card: { x: "-50%", y: 0, transition: { ease: [0, 0, 1, 1] } },
            list: {
              x: "-50%",
              y: 152 * index,
              transition: { delay: 1, transition: { ease: [0, 0, 1, 1] } },
            },
          }}
          animate={view}
          key={index}
          className={Style.itemContainerStyle}
        >
          <Text variant="title2" color={theme.colors.text.primary}>
            {place.name}
          </Text>
          <Spacing size={10} />
          <button className={Style.buttonStyle}></button>
        </motion.div>
      ))}
    </motion.div>
  );
}
