import { Flex, Text } from "@repo/ui/components";
import * as styles from "../style.css";

export type LineNumberSizeType = "sm" | "md";

interface LineNumberProps {
  line: string;
  size?: LineNumberSizeType;
}

export const getLineColorName = (lineName: string): styles.SubwayColorProps => {
  if (!isNaN(Number(lineName)))
    return `line${lineName}` as styles.SubwayColorProps;

  switch (lineName) {
    case "신분당":
      return "shinbundang";
    // case "공항":
    //   return "gonghang";
    case "경의중앙":
      return "gyeonguiJungang";
    case "수인분당":
      return "suinbundang";
  }

  return "default";
};

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
