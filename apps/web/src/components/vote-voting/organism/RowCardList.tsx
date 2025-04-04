import * as Style from "./RowCardList.css";
import { motion } from "@repo/motion";
import { Candidate } from "../templates/type";
import { Spacing, Text } from "@repo/ui/components";
import { theme } from "@repo/ui/tokens";
import { SUBWAY_META } from "@/constants/subway";

interface Props {
  view: "card" | "list";
  list: Candidate[];
  selectedCardIds: number[];
  onSelectCard: (id: number) => void;
}

export function RowCardList({
  selectedCardIds,
  view,
  list,
  onSelectCard,
}: Props) {
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
      {list.map(
        (
          { stationId, routes, transferCount, totalTime, stationName },
          index
        ) => {
          const selected = selectedCardIds.includes(stationId);
          return (
            <motion.div
              variants={{
                card: { x: "-50%", y: 0, transition: { ease: [0, 0, 1, 1] } },
                list: {
                  x: "-50%",
                  y: 106 * index,
                  transition: { delay: 1, transition: { ease: [0, 0, 1, 1] } },
                },
              }}
              animate={view}
              key={index}
              className={Style.itemContainerStyle}
            >
              <div className={Style.left}>
                <div className={Style.titleContainer}>
                  <Text variant="title2" color={theme.colors.text.primary}>
                    {stationName}
                  </Text>
                  {routes.map((route) => {
                    const subway = Object.entries(SUBWAY_META).find(
                      ([_, value]) => {
                        return value.name === route;
                      }
                    );
                    if (subway == null) {
                      return null;
                    }

                    return (
                      <div
                        key={route}
                        style={{ backgroundColor: subway[1].color }}
                        className={Style.subwayItem}
                      >
                        {subway[0]}
                      </div>
                    );
                  })}
                </div>
                <div className={Style.bottom}>
                  <div className={Style.bottomInfo}>
                    <Text
                      color={theme.colors.text.secondary}
                      style={{ fontSize: 13 }}
                    >
                      이동 시간
                    </Text>
                    <Text color={theme.colors.text.secondary} variant="title3">
                      {Math.floor(totalTime / 60)} 분
                    </Text>
                  </div>
                  <div className={Style.line} />
                  <div className={Style.bottomInfo}>
                    <Text
                      color={theme.colors.text.secondary}
                      style={{ fontSize: 13 }}
                    >
                      환승
                    </Text>
                    <Text color={theme.colors.text.secondary} variant="title3">
                      {transferCount ?? 0}회
                    </Text>
                  </div>
                </div>
              </div>
              <Spacing size={10} />
              <motion.button
                whileTap={{ scale: 0.9 }}
                style={{
                  border: `1px solid ${selected ? theme.colors.orange40 : theme.colors.gray15}`,
                  backgroundColor: selected
                    ? theme.colors.orange40
                    : theme.colors.gray0,
                  color: selected ? "white" : theme.colors.icon.pressed,
                }}
                onClick={() => onSelectCard(stationId)}
                className={Style.buttonStyle}
              >
                {"✓"}
              </motion.button>
            </motion.div>
          );
        }
      )}
    </motion.div>
  );
}
