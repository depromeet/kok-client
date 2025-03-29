import { Flex } from "@repo/ui/components";
import LineNumber, { type LineNumberSizeType } from "../atoms/LineNumber";

interface LineNumbersProps {
  lines: string[];
  size?: LineNumberSizeType;
}

export const removeLineSuffix = (line: string): string => {
  return line.replace(/(선|호선|철도)$/, "");
};

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
