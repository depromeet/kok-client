import { Flex, Text } from "@repo/ui/components";
import XIcon from "@/assets/icons/XIcon";
import { Trainagle } from "./Trainagle";
import * as Style from "../organism/CardItem.css";
import { theme } from "@repo/ui/tokens";

export const Tooltip = () => {
  return (
    <Flex direction="column" align="center">
      <div className={Style.tooltipStyle}>
        <Text style={{ color: theme.colors.gray0 }}>
          역을 누르고 주변을 둘러보세요!
        </Text>
        <XIcon />
      </div>
      <Trainagle />
    </Flex>
  );
};
