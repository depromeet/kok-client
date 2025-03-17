import type { InputHTMLAttributes, ReactNode, Ref } from "react";
import {
  inputRecipeStyle,
  inputContainerStyle,
  rightElementStyle,
} from "./style.css";
import { classMerge } from "../../utils";

export type InputProps = {
  variant?: "rectangular" | "rounded";
  width?: "full" | "fit" | "auto" | "profile" | "people" | string | number;
  padding?: "none" | "xs" | "sm" | "md";
  isInvalid?: boolean; // !!!추가!!!
  rightElement?: ReactNode;
  ref?: Ref<HTMLInputElement>;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

export const Input = ({
  variant = "rounded",
  width = "full",
  padding = "sm",
  maxLength,
  placeholder,
  rightElement,
  value,
  onChange,
  isInvalid = false, // !!!기본값 false!!!
  ref,
  className,
  ...props
}: InputProps) => {
  const hasRightElement = Boolean(rightElement);

  const presetWidths = ["full", "fit", "auto", "profile", "people", "custom"];
  const isPresetWidth =
    width !== undefined &&
    typeof width === "string" &&
    presetWidths.includes(width);

  const widthStyle = !isPresetWidth
    ? { width: typeof width === "number" ? `${width}px` : width }
    : {};
  return (
    <div className={classMerge(inputContainerStyle, className)}>
      <input
        ref={ref}
        value={value}
        onChange={onChange}
        className={inputRecipeStyle({
          variant,
          width: isPresetWidth
            ? (width as "full" | "fit" | "auto" | "profile" | "people")
            : "custom",
          padding,
          hasRightElement,
          isInvalid, // 호진 !!!변경 스타일 적용!!!
        })}
        style={widthStyle}
        placeholder={placeholder}
        maxLength={maxLength}
        {...props}
      />

      {rightElement && (
        <span className={rightElementStyle}>{rightElement}</span>
      )}
    </div>
  );
};

export default Input;
