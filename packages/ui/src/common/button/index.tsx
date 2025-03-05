import { ButtonHTMLAttributes, PropsWithChildren, RefObject } from "react";
import { buttonReceipe, ButtonVariants } from "./style.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants & { ref?: RefObject<HTMLButtonElement | null> };

export const Button = ({
  buttonType,
  width,
  padding,
  ref,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={buttonReceipe({
        buttonType,
        width,
        padding,
      })}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
};
