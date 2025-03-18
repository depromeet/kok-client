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
    //호진 todo : 프로그레스바 넘어갈 때 인터렉션 있으면 좋을듯
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
