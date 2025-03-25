import { Flex, Text } from "@repo/ui/components";
import { ReactNode } from "react";
import * as Style from "./style.css";

interface Props {
  order: number;
  children: ReactNode;
}

export function StepperItem({ order, children }: Props) {
  return (
    <Flex align="center" gap={12}>
      <Flex
        align="center"
        justify="center"
        className={Style.NumberContainerStyle}
      >
        {order}
      </Flex>
      <Text variant="caption" className={Style.TextStyle}>
        {children}
      </Text>
    </Flex>
  );
}
