import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { buttonReceipe, ButtonVariants } from "./style.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants;

export const Button = ({
  buttonType,
  width,
  padding,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      {...props}
      className={buttonReceipe({
        buttonType,
        width,
        padding,
      })}
    >
      {children}
    </button>
  );
};
