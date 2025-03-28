import { Flex, Text } from "@repo/ui/components";
import { StationInfo } from "../types";
import * as styles from "../style.css";
import LineNumbers, { removeLineSuffix } from "./LineNumbers";
import { getLineColorName } from "../atoms/LineNumber";

type StationBannerProps = Pick<StationInfo, "name" | "lines">;

const StationBanner = ({ name, lines }: StationBannerProps) => {
  const lineColor = getLineColorName(removeLineSuffix(lines[0]!));
  return (
    <Flex justify="center" className={styles.bannerContainer}>
      <Flex
        align="center"
        justify="center"
        gap={12}
        className={styles.bannerRecipe({ border: lineColor })}
      >
        <LineNumbers lines={lines} />
        <Text variant="heading3">{name}</Text>
      </Flex>

      <div className={styles.bannerLineRecipe({ border: lineColor })} />
    </Flex>
  );
};

export default StationBanner;
