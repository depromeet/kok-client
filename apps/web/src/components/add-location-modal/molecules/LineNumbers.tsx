import { Flex } from "@repo/ui/components";
import LineNumber, { type LineNumberSizeType } from "../atoms/LineNumber";
import { removeLineSuffix } from "@/utils/subway";

interface LineNumbersProps {
  lines: string[];
  size?: LineNumberSizeType;
}

const LineNumbers = ({ lines, size = "sm" }: LineNumbersProps) => {
  return (
    <Flex gap={4} align="center">
      {lines.map(removeLineSuffix).map((line) => (
        <LineNumber key={line} line={line} size={size} />
      ))}
    </Flex>
  );
};

export default LineNumbers;
