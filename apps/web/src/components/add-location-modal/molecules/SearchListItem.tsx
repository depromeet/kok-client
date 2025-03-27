import { Flex, Text } from "@repo/ui/components";
import LineNumber from "../atoms/LineNumber";
import * as styles from "../style.css";

interface SearchListItemProps {
  name: string;
  lines: string[];
  onClick: VoidFunction;
}

const removeLineSuffix = (line: string): string => {
  return line.replace(/(선|호선|철도)$/, "");
};

const SearchListItem = ({ name, lines, onClick }: SearchListItemProps) => {
  return (
    <>
      <li className={styles.searchItem}>
        <Flex
          as="button"
          align="center"
          gap={8}
          className={styles.searchItemButton}
          onClick={onClick}
        >
          <Flex gap={4} align="center">
            {lines.map(removeLineSuffix).map((line) => (
              <LineNumber key={line} line={line} />
            ))}
          </Flex>
          <div className={styles.divider} />
          <Text variant="body3" className={styles.stationName}>
            {name}
          </Text>
        </Flex>
      </li>

      <div className={styles.horizontalDivider} />
    </>
  );
};

export default SearchListItem;
