import { motion, usePressEffect } from "@repo/motion";
import * as Style from "./AddButton.css";
import { Flex } from "@repo/ui/components";
import { theme } from "@repo/ui/tokens";

interface Props {
  disabled: boolean;
}

export function AddButton({ disabled }: Props) {
  const { containerRef, pressProps } = usePressEffect();

  return (
    <Flex justify="center" className={Style.container}>
      <motion.button
        ref={containerRef}
        className={Style.button}
        disabled={disabled}
        initial={disabled ? "disabled" : "abled"}
        animate={disabled ? "disabled" : "abled"}
        variants={{
          disabled: { backgroundColor: theme.colors.semantic.btn.disabled },
          abled: { backgroundColor: theme.colors.gray95 },
        }}
        {...pressProps}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M16.9438 24.4853L15.0582 24.4853V16.9428L7.51572 16.9428V15.0572L15.0582 15.0572V7.51472L16.9438 7.51472L16.9438 15.0572L24.4863 15.0572V16.9428L16.9438 16.9428L16.9438 24.4853Z"
            fill="white"
          />
        </svg>
      </motion.button>
    </Flex>
  );
}
