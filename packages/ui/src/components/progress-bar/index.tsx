import { Flex } from "@repo/ui/components";
import {
  backgroundStyle,
  progressBarContainerStyle,
  progressBarRecipe,
} from "./style.css";
import { classMerge } from "../../utils";
import { motion } from "@repo/motion";
import { theme } from "../../tokens";

interface ProgressBarProps {
  step: number;
  lastStep: number;
  backgroundTransparent?: boolean;
}

export const ProgressBar = ({
  step,
  lastStep,
  backgroundTransparent = true,
}: ProgressBarProps) => {
  return (
    <Flex
      justify="center"
      align="center"
      gap={12}
      className={classMerge(
        progressBarContainerStyle,
        backgroundTransparent
          ? backgroundStyle.transparent
          : backgroundStyle.solid
      )}
    >
      {Array.from({ length: lastStep }, (_, index) => {
        const status = index === step - 1 ? "active" : "inactive";
        console.log(status);
        return (
          <motion.div
            key={index}
            initial={status}
            variants={{
              active: { width: 26, backgroundColor: theme.colors.gray95 },
              inactive: { width: 8, backgroundColor: theme.colors.gray15 },
            }}
            animate={status}
            className={progressBarRecipe({ status })}
          />
        );
      })}
    </Flex>
  );
};
