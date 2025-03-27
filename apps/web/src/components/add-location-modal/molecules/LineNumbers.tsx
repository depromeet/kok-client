import { Flex } from "@repo/ui/components";
import LineNumber from "../atoms/LineNumber";

interface LineNumbersProps {
  lines: string[];
}

export const removeLineSuffix = (line: string): string => {
  return line.replace(/(선|호선|철도)$/, "");
};

const LineNumbers = ({ lines }: LineNumbersProps) => {
  return (
    <Flex gap={4} align="center">
      {lines.map(removeLineSuffix).map((line) => (
        <LineNumber key={line} line={line} />
      ))}
    </Flex>
  );
};

export default LineNumbers;
