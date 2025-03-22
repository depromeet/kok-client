import { Flex } from "@repo/ui/components";
import { ReactNode } from "react";
import { StepperItem } from "./StepperItem";

interface Props {
  children?: ReactNode;
}

function Root({ children }: Props) {
  return (
    <Flex direction="column" align="center">
      <Flex direction="column" justify="start" gap={16}>
        {children}
      </Flex>
    </Flex>
  );
}

export const Stepper = Object.assign(Root, {
  Item: StepperItem,
});
