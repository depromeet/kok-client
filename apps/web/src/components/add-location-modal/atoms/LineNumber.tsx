import { Flex, Text } from "@repo/ui/components";
import * as styles from "../style.css";
import { getLineColorName } from "@/utils/subway";

export type LineNumberSizeType = "sm" | "md";

interface LineNumberProps {
  line: string;
  size?: LineNumberSizeType;
}

const LineNumber = ({ line, size = "sm" }: LineNumberProps) => {
  const textVariant = size === "sm" ? "number" : "number-md";
  return (
    <Flex
      key={line}
      direction="column"
      justify="center"
      align="center"
      className={styles.lineNumberRecipe({
        subway: getLineColorName(line),
        size,
      })}
    >
      <Text variant={textVariant}>{line}</Text>
    </Flex>
  );
};

export default LineNumber;
