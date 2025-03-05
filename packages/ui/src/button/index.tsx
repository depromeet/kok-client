import { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from "react";
import { buttonReceipe } from "./style.css";

export type ButtonType = keyof typeof buttonReceipe.variants;

interface ButtonProps
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  buttonType?: string;
  width?: string;
  padding?: string;
  children: ReactNode;
}

export const Button = ({
  buttonType,
  width,
  padding,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={buttonReceipe({
        buttonType,
        width,
        padding,
      } as ButtonType)}
    >
      {children}
    </button>
  );
};
