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
      gap={16}
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
            status:
              index === step - 1
                ? "current"
                : index < step - 1
                  ? "active"
                  : "inactive",
          })}
        />
      ))}
    </Flex>
  );
};
