import { Flex } from "@repo/ui/components";
import { progressBarContainerStyle, progressStepRecipe } from "./style.css";

interface ProgressBarProps {
  step: number;
  lastStep: number;
}

export const ProgressBar = ({ step, lastStep }: ProgressBarProps) => {
  return (
    <div className={progressBarContainerStyle}>
      <Flex align="center" gap={8}>
        {Array.from({ length: lastStep }, (_, index) => (
          <div
            key={index}
            className={progressStepRecipe({
              active: index < step,
            })}
          />
        ))}
      </Flex>
    </div>
  );
};
