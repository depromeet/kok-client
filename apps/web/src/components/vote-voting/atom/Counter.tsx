import { Text, Spacing } from "@repo/ui/components";
import * as Style from "./Counter.css";
import { theme } from "@repo/ui/tokens";
import { motion } from "@repo/motion";

interface Props {
  view: "card" | "list";
  order: number;
  totalOrder: number;
}

export function Counter({ view, order, totalOrder }: Props) {
  return (
    <div className={Style.container}>
      <motion.div
        initial={view}
        variants={{
          card: {
            width: "auto",
            opacity: 1,
          },
          list: {
            width: 0,
            opacity: 0,
          },
        }}
        animate={view}
      >
        <Text variant="title3" color={theme.colors.text.caption}>
          {order}/
        </Text>
      </motion.div>
      <Spacing size={2} direction="row" />
      <Text variant="title2" color={theme.colors.text.secondary}>
        {totalOrder}
      </Text>
      <motion.div
        initial={view}
        variants={{
          card: { opacity: 0 },
          list: { opacity: 1 },
        }}
        transition={{ duration: 0.2 }}
        animate={view}
        className={Style.textStyle}
      >
        <Text variant="title3" color={theme.colors.text.caption}>
          가지 역
        </Text>
      </motion.div>
    </div>
  );
}
