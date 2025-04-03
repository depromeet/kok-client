import { Flex, Text } from "@repo/ui/components";
import * as styles from "../style.css";
import { getSubwayColor } from "@/utils/subway";

export type LineNumberSizeType = "sm" | "md";

interface LineNumberProps {
  line: string;
  size?: LineNumberSizeType;
}

const LineNumber = ({ line, size = "sm" }: LineNumberProps) => {
  const textVariant = size === "sm" ? "number" : "number-md";
  const backgroundColor = getSubwayColor(line);

  return (
    <Flex
      key={line}
      direction="column"
      justify="center"
      align="center"
      className={styles.lineNumberRecipe({
        size,
      })}
      style={{ backgroundColor }}
    >
      <Text variant={textVariant}>{line}</Text>
    </Flex>
  );
};

export default LineNumber;
