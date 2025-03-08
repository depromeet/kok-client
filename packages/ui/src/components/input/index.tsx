import type { InputHTMLAttributes } from "react";
import { useInput } from "./useInput";
import {
  inputRecipeStyle,
  charCounterStyle,
  inputContainerStyle,
  rightElementStyle,
} from "./style.css";

export type InputProps = {
  variant?: "rectangular" | "rounded";
  width?: "full" | "fit" | "auto" | "profile" | "people" | string | number;
  padding?: "none" | "sm" | "md";
  maxLength?: number;
  rightElement?: React.ReactNode;
  showCounter?: boolean;
  alwaysShowCounter?: boolean;
  autoDisabled?: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

export const Input = ({
  variant = "rounded",
  width = "full",
  padding = "sm",
  maxLength,
  onChange,
  value,
  className,
  placeholder,
  rightElement,
  showCounter = false,
  alwaysShowCounter = false,
  autoDisabled = false,
  disabled,
  ...props
}: InputProps) => {
  const { inputValue, isEmpty, isDisabled, handleChange } = useInput({
    value: typeof value === "string" ? value : value?.toString() || "",
    maxLength,
    autoDisabled,
    disabled,
    onChange,
  });

  const showCounterElement =
    showCounter && maxLength && (inputValue.length > 0 || alwaysShowCounter);

  const hasRightElement = Boolean(rightElement || showCounterElement);

  const presetWidths = ["full", "fit", "auto", "profile", "people", "custom"];
  const isPresetWidth =
    width !== undefined &&
    typeof width === "string" &&
    presetWidths.includes(width);

  const widthStyle = !isPresetWidth
    ? { width: typeof width === "number" ? `${width}px` : width }
    : {};
  return (
    <div className={inputContainerStyle}>
      <input
        className={inputRecipeStyle({
          variant,
          width: isPresetWidth
            ? (width as "full" | "fit" | "auto" | "profile" | "people")
            : "custom",
          padding,
          hasRightElement,
        })}
        style={widthStyle}
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={isDisabled}
        {...props}
      />

      {rightElement && (
        <span className={rightElementStyle}>{rightElement}</span>
      )}

      {!rightElement && showCounterElement ? (
        <span className={charCounterStyle}>
          {inputValue.length}/{maxLength}
        </span>
      ) : null}
    </div>
  );
};

export default Input;
