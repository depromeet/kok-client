import { ReactNode } from "react";
import * as Style from "./Content.css";
import { motion, transition } from "@repo/motion";
import { useVisualViewport } from "../hook/useVisualViewport";

export interface ContentProps {
  /**
   * @description 헤더 영역. 스크롤이 생길 시 상단에 sticky됩니다.
   */
  header?: ReactNode;
  /**
   * @description 콘텐츠 영역
   */
  children?: ReactNode;
}

export function Content({ header, children }: ContentProps) {
  const { offsetYMotionValue } = useVisualViewport();

  return (
    <motion.div
      initial="hide"
      animate="show"
      exit="hide"
      variants={{
        show: { opacity: 1, y: 0 },
        hide: { opacity: 0, y: 40 },
      }}
      transition={transition.spring.slow}
      className={Style.container}
      style={{ y: offsetYMotionValue }}
    >
      <div>{header}</div>
      <div className={Style.content}>{children}</div>
    </motion.div>
  );
}
