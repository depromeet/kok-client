import { Flex, Text } from "@repo/ui/components";
import { StationInfo } from "@/api/types/stations/index.type";
import * as styles from "../style.css";
import LineNumbers, { removeLineSuffix } from "./LineNumbers";
import { getLineColorName } from "../atoms/LineNumber";

type StationBannerProps = StationInfo;

const StationBanner = ({ station, routes }: StationBannerProps) => {
  const lineColor = getLineColorName(removeLineSuffix(routes[0]!));
  return (
    <Flex justify="center" className={styles.bannerContainer}>
      <Flex
        align="center"
        justify="center"
        gap={12}
        className={styles.bannerRecipe({ border: lineColor })}
      >
        <LineNumbers lines={routes} size="md" />
        <Text variant="heading3">{station.name}</Text>
      </Flex>

      <div className={styles.bannerLineRecipe({ border: lineColor })} />
    </Flex>
  );
};

export default StationBanner;
