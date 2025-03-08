import { ComponentProps } from "react";
import * as Style from "./Overlay.css";
import { motion } from "@repo/motion";
import { classMerge } from "../../../utils";

type OverlayProps = Omit<
  ComponentProps<typeof motion.button>,
  "initial" | "animate" | "exit" | "variants"
>;

export function Overlay({ className, ...restProps }: OverlayProps) {
  return (
    <motion.button
      initial="hide"
      animate="show"
      exit="hide"
      variants={{
        show: { opacity: 1 },
        hide: { opacity: 0 },
      }}
      className={classMerge(className, Style.overlay)}
      {...restProps}
    />
  );
}
