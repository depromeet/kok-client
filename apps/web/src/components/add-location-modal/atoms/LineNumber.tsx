import { Flex, Text } from "@repo/ui/components";
import * as styles from "../style.css";

interface LineNumberProps {
  line: string;
}

const getLineColorName = (lineName: string): styles.SubwayProps => {
  if (!isNaN(Number(lineName))) return `line${lineName}` as styles.SubwayProps;

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

const LineNumber = ({ line }: LineNumberProps) => {
  return (
    <Flex
      key={line}
      direction="column"
      justify="center"
      align="center"
      className={styles.lineNumberRecipe({
        subway: getLineColorName(line),
      })}
    >
      <Text variant="number">{line}</Text>
    </Flex>
  );
};

export default LineNumber;
