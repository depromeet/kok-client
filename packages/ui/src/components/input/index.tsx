import React, { forwardRef } from "react";
import { useInput } from "./useInput";
import {
  inputRecipe,
  charCounter,
  inputContainer,
  iconStyle,
} from "./style.css";

export type InputProps = {
  variant?: "rectangular" | "rounded";
  width?: "full" | "fit" | "auto" | "profile" | "people";
  padding?: "none" | "sm" | "md";
  maxLength?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  className?: string;
  placeholder?: string;
  rightIcon?: React.ReactNode;
  showCounter?: boolean; // 카운터 표시
  alwaysShowCounter?: boolean; // 카운트 항상 표시
  autoDisabled?: boolean; // 텍스트 유무에 따라 disabled 변경
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = "rounded",
      width = "full",
      padding = "sm",
      maxLength,
      onChange,
      value,
      className,
      placeholder,
      rightIcon,
      showCounter = true,
      alwaysShowCounter = false,
      autoDisabled = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const { inputValue, isEmpty, isDisabled, handleChange } = useInput({
      value,
      maxLength,
      autoDisabled,
      disabled,
      onChange,
    });

    // 아이콘 비활성화
    const iconWithProps =
      rightIcon && React.isValidElement(rightIcon)
        ? React.cloneElement(rightIcon as React.ReactElement<any>, {
            disabled: isEmpty,
          })
        : rightIcon;

    // 카운터 표시 여부
    const showCounterElement =
      showCounter && maxLength && (inputValue.length > 0 || alwaysShowCounter);

    // 오른쪽 요소 여부
    const hasRightElement = !!(rightIcon || showCounterElement);

    return (
      <div className={inputContainer}>
        <input
          ref={ref}
          className={inputRecipe({
            variant,
            width,
            padding,
            hasRightIcon: hasRightElement,
          })}
          value={inputValue}
          onChange={handleChange}
          placeholder={placeholder}
          maxLength={maxLength}
          disabled={isDisabled}
          {...props}
        />
        {rightIcon && <span className={iconStyle}>{iconWithProps}</span>}
        {!rightIcon && showCounterElement && (
          <span className={charCounter}>
            {inputValue.length}/{maxLength}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
