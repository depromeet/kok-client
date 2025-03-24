import { Flex } from "../flex";
import * as Style from "./style.css";

export const LoadingDots = () => {
  return (
    <Flex className={Style.container} gap={8} align="center">
      <span className={`${Style.dot} ${Style.dot1}`} />
      <span className={`${Style.dot} ${Style.dot2}`} />
      <span className={`${Style.dot} ${Style.dot3}`} />
    </Flex>
  );
};
