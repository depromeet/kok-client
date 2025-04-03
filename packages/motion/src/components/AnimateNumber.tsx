import { motion } from "motion/react";
import {
  colContainerStyle,
  containerStyle,
  gradientBottom,
  gradientTop,
  numItemStyle,
} from "./AnimateNumber.css";

interface Props {
  variant: "type1";
  number: number;
}

interface ColProps {
  number: string;
}

const type1Height = 25;
const type1Width = 11.5;
export function AnimateNumber({ variant, number }: Props) {
  const numberAsString = [...String(number)];

  return (
    <motion.div
      animate={{ width: type1Width * numberAsString.length }}
      transition={{ duration: 0.2 }}
      className={containerStyle}
      style={{ height: type1Height }}
    >
      <div className={gradientTop} />
      <div className={gradientBottom} />
      {numberAsString.map((num, index) => (
        <Col number={num} key={`num-${numberAsString.length - index}`} />
      ))}
    </motion.div>
  );
}

const numbers = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1];
export function Col({ number }: ColProps) {
  const numIndex = numbers.findIndex((num) => num === Number(number));

  return (
    <motion.div
      animate={{ y: -type1Height * numIndex }}
      transition={{ ease: "easeOut", duration: 0.15 }}
      style={{ height: type1Height * 10 }}
      className={colContainerStyle}
    >
      {numbers.map((num) => (
        <div key={num} className={numItemStyle}>
          {num}
        </div>
      ))}
    </motion.div>
  );
}
