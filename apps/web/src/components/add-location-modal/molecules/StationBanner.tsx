import { Flex, Text } from "@repo/ui/components";
import { StationInfo } from "@/api/types/stations/index.type";
import * as styles from "../style.css";
import LineNumbers from "./LineNumbers";
import { getSubwayColor } from "@/utils/transport";

type StationBannerProps = StationInfo;

const StationBanner = ({ station, routes }: StationBannerProps) => {
  const lineColor = getSubwayColor(routes[0]!);

  return (
    <Flex justify="center" className={styles.bannerContainer}>
      <Flex
        align="center"
        justify="center"
        gap={12}
        className={styles.banner}
        style={{ borderColor: lineColor }}
      >
        <LineNumbers lines={routes} size="md" />
        <Text variant="heading3">{station.name}</Text>
      </Flex>

      <div
        className={styles.bannerLine}
        style={{ borderColor: lineColor, background: lineColor }}
      />
    </Flex>
  );
};

export default StationBanner;
