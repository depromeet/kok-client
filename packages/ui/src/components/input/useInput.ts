import { useState, useEffect } from "react";

interface UseInputProps {
  value?: string;
  maxLength?: number;
  autoDisabled?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useInput = ({
  value,
  maxLength,
  autoDisabled = false,
  disabled,
  onChange,
}: UseInputProps) => {
  const [inputValue, setInputValue] = useState(value || "");
  const isEmpty = inputValue.length === 0;
  const isDisabled = disabled || (autoDisabled && isEmpty);

  useEffect(() => {
    if (value !== undefined && value !== inputValue) {
      setInputValue(value);
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (maxLength && newValue.length > maxLength) return;

    setInputValue(newValue);
    onChange?.(e);
  };

  return {
    inputValue,
    isEmpty,
    isDisabled,
    handleChange,
  };
};
