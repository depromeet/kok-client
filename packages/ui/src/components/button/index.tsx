import { ButtonHTMLAttributes, PropsWithChildren, RefObject } from "react";
import { buttonReceipe, ButtonVariants } from "./style.css";
import { classMerge } from "../../utils";

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
      className={classMerge(
        buttonReceipe({
          variant,
          width,
          padding,
        }),
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
};
