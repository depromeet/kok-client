import { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from "react";
import { buttonReceipe } from "./style.css";

export type ButtonType = keyof typeof buttonReceipe.variants;

interface ButtonProps
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  buttonType?: string;
  children: ReactNode;
}

export const Button = ({ buttonType, children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={buttonReceipe({ buttonType: buttonType as ButtonType })}
    >
      {children}
    </button>
  );
};
