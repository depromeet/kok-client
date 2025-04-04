import { Flex } from "../flex";
import * as Style from "./style.css";

interface LoadingDotsProps {
  length?: number;
  height?: number;
}

export const LoadingDots = ({ length = 3, height = 16 }: LoadingDotsProps) => {
  const dotSize = height / 2;
  let delay = 0;

  return (
    <Flex style={{ height }} gap={dotSize} align="center">
      {Array.from({ length }, (_, index) => {
        delay += 0.2;
        return (
          <span
            key={index}
            className={`${Style.dot} ${Style.dot1}`}
            style={{
              width: dotSize,
              height: dotSize,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </Flex>
  );
};
