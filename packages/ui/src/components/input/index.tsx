import type { InputHTMLAttributes, ReactNode } from "react";
import {
  inputRecipeStyle,
  inputContainerStyle,
  rightElementStyle,
} from "./style.css";

export type InputProps = {
  variant?: "rectangular" | "rounded";
  width?: "full" | "fit" | "auto" | "profile" | "people" | string | number;
  padding?: "none" | "sm" | "md";
  rightElement?: ReactNode;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

export const Input = ({
  variant = "rounded",
  width = "full",
  padding = "sm",
  maxLength,
  className,
  placeholder,
  rightElement,
  value,
  onChange,
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
    <div className={inputContainerStyle}>
      <input
        value={value}
        onChange={onChange}
        className={inputRecipeStyle({
          variant,
          width: isPresetWidth
            ? (width as "full" | "fit" | "auto" | "profile" | "people")
            : "custom",
          padding,
          hasRightElement,
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
