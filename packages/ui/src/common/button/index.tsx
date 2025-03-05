import { ButtonHTMLAttributes, PropsWithChildren, RefObject } from "react";
import { buttonReceipe, ButtonVariants } from "./style.css";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants & { ref?: RefObject<HTMLButtonElement | null> };

export const Button = ({
  variant,
  width,
  padding,
  ref,
  className,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={`${buttonReceipe({
        variant,
        width,
        padding,
      })} ${className ?? ""}`}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
};
