import { Flex } from "@repo/ui/components";
import { removeLineSuffix } from "@/utils/transport";
import TransportIcon from "@/components/common/TransportIcon";
import { TransportIconVariants } from "@/components/common/TransportIcon/styles.css";

type LineNumbersProps = TransportIconVariants & {
  lines: string[];
};

const LineNumbers = ({ lines, size = "sm" }: LineNumbersProps) => {
  return (
    <Flex gap={4} align="center">
      {lines.map(removeLineSuffix).map((line) => (
        <TransportIcon key={line} line={line} size={size} />
      ))}
    </Flex>
  );
};

export default LineNumbers;
