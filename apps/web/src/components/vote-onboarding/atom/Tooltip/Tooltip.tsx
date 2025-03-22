import { Text, Flex } from "@repo/ui/components";
import { ReactNode } from "react";
import * as Style from "./style.css";
import { theme } from "@repo/ui/tokens";

interface Props {
  children: ReactNode;
}

export function Tooltip({ children }: Props) {
  return (
    <Flex direction="column" align="center" className={Style.Container}>
      <Text variant="title3" className={Style.Box}>
        {children}
      </Text>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="5"
        viewBox="0 0 12 5"
        fill="none"
      >
        <path
          d="M3.78854 3.58749C4.97755 4.8846 7.02245 4.8846 8.21146 3.5875L11.5 0H0.5L3.78854 3.58749Z"
          fill={theme.colors.bg4}
        />
      </svg>
    </Flex>
  );
}
