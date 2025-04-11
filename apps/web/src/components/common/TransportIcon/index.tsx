import { Flex, Text } from "@repo/ui/components";
import * as styles from "./styles.css";
import { getSubwayColor } from "@/utils/subway";
import { VehicleType } from "@/types/transport";
import { theme } from "@repo/ui/tokens";
import BusIcon from "@/assets/icons/BusIcon";
import SubwayIcon from "@/assets/icons/SubwayIcon";

type TransportIconProps = styles.TransportIconVariants & {
  vehicle: VehicleType;
  line: string;
};

const TransportIcon = ({ vehicle, line, size = "sm" }: TransportIconProps) => {
  const textVariant = size === "sm" ? "number" : "number-md";
  const backgroundColor =
    vehicle === "BUS" ? theme.colors.gray40 : getSubwayColor(line);

  return (
    <Flex
      key={line}
      direction="column"
      justify="center"
      align="center"
      className={styles.transportIconRecipe({
        size,
      })}
      style={{ backgroundColor }}
    >
      {vehicle === "SUBWAY" &&
        (isNaN(Number(line)) ? (
          <SubwayIcon />
        ) : (
          <Text variant={textVariant}>{line}</Text>
        ))}
      {vehicle === "BUS" && <BusIcon />}
    </Flex>
  );
};

export default TransportIcon;
