import { ReactNode } from "react";
import { Flex } from "../flex";
import { Text } from "../text";
import * as styles from "./style.css";

interface HeaderProps {
  title?: string;
  leftElement?: ReactNode;
  midElement?: ReactNode;
  rightElement?: ReactNode;
}

export const Header = ({
  title,
  leftElement,
  midElement,
  rightElement,
}: HeaderProps) => {
  return (
    <Flex
      as="header"
      justify="between"
      align="center"
      className={styles.container}
    >
      {leftElement ?? <div className={styles.emptyDiv} />}

      {title && (
        <Flex direction="column" justify="center" className={styles.title}>
          <Text as="p" variant="title3">
            {title}
          </Text>
        </Flex>
      )}
      {(!title && midElement) ?? <div className={styles.emptyDiv} />}

      {rightElement ?? <div className={styles.emptyDiv} />}
    </Flex>
  );
};
