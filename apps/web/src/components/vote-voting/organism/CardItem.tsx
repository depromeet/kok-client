import { classMerge } from "@repo/ui/utils";
import * as Style from "./CardItem.css";
import { motion } from "@repo/motion";
import { Text, Spacing } from "@repo/ui/components";
import { Candidate } from "../templates/type";
import { theme } from "@repo/ui/tokens";

interface Props extends Candidate {
  view: "card" | "list";
  className: string;
  selected: boolean;
  onSelectCard: (id: number) => void;
}

export function CardItem({
  className,
  view,
  stationId,
  stationName,
  onSelectCard,
  selected,
}: Props) {
  return (
    <div className={classMerge(className, Style.containerStyle)}>
      <motion.div
        initial={view}
        variants={{
          card: { width: 220, height: 280, transition: { delay: 0.7 } },
          list: {
            width: 335,
            height: 140,
            transition: { delay: 0.5 },
          },
        }}
        animate={view}
        className={Style.cardContainerStyle}
      >
        <motion.div
          initial={view}
          animate={view}
          variants={{
            card: { opacity: 1, transition: { delay: 1.1 } },
            list: { opacity: 0, transition: { duration: 0.5 } },
          }}
          className={Style.innerCardContainerStyle}
        >
          <Text variant="title3" color={theme.colors.text.primary}>
            {stationName}
          </Text>
          <Spacing size={10} />
          <button
            className={Style.cardButtonStyle}
            style={{
              border: `1px solid ${selected ? theme.colors.orange40 : theme.colors.gray15}`,
              backgroundColor: selected
                ? theme.colors.orange40
                : theme.colors.gray0,
              color: selected ? "white" : theme.colors.icon.pressed,
            }}
            onClick={() => onSelectCard(stationId)}
          >
            <Text
              color={selected ? "white" : theme.colors.icon.pressed}
              className={Style.cardButtonTitleStyle}
            >
              {"✓ "}콕
            </Text>
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
