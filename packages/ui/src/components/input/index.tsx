import type { InputHTMLAttributes, ReactNode, RefObject } from "react";
import {
  inputContainerRecipe,
  inputStyle,
  InputVariants,
  rightElementStyle,
} from "./style.css";
import { classMerge } from "../../utils";
import { Flex } from "../flex";

export type InputProps = InputHTMLAttributes<HTMLInputElement> &
  InputVariants & {
    rightElement?: ReactNode;
    ref?: RefObject<HTMLInputElement | null>;
  };

export const Input = ({
  variant,
  width,
  padding,
  maxLength,
  placeholder,
  rightElement,
  value,
  onChange,
  isInvalid = false,
  ref,
  className,
  ...props
}: InputProps) => {
  const presetWidths = ["full", "fit", "auto", "profile", "people", "custom"];
  const isPresetWidth =
    width !== undefined &&
    typeof width === "string" &&
    presetWidths.includes(width);

  const widthStyle = !isPresetWidth
    ? { width: typeof width === "number" ? `${width}px` : width }
    : {};
  return (
    <Flex
      align="center"
      className={classMerge(
        inputContainerRecipe({
          variant,
          width: isPresetWidth
            ? (width as "full" | "fit" | "auto" | "profile" | "people")
            : "custom",
          padding,
          isInvalid,
        }),
        className
      )}
    >
      <input
        ref={ref}
        value={value}
        onChange={onChange}
        className={inputStyle}
        style={widthStyle}
        placeholder={placeholder}
        maxLength={maxLength}
        {...props}
      />

      {rightElement && (
        <Flex align="center" justify="center" className={rightElementStyle}>
          {rightElement}
        </Flex>
      )}
    </Flex>
  );
};

export default Input;
