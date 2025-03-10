import { Flex } from "@repo/ui/components";
import {
  backgroundStyle,
  progressBarContainerStyle,
  progressBarRecipe,
} from "./style.css";
import { classMerge } from "../../utils";

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
      gap={8}
      className={classMerge(
        progressBarContainerStyle,
        backgroundTransparent
          ? backgroundStyle.transparent
          : backgroundStyle.solid
      )}
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
