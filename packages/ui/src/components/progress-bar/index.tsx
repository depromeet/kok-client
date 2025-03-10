import { Flex } from "@repo/ui/components";
import { progressBarContainerStyle, progressBarRecipe } from "./style.css";

interface ProgressBarProps {
  step: number;
  lastStep: number;
}

export const ProgressBar = ({ step, lastStep }: ProgressBarProps) => {
  return (
    <Flex
      justify="center"
      align="center"
      gap={8}
      className={progressBarContainerStyle}
    >
      {Array.from({ length: lastStep }, (_, index) => (
        <div
          key={index}
          className={progressBarRecipe({
            active: index < step,
          })}
        />
      ))}
    </Flex>
  );
};
