import { HTMLAttributes, PropsWithChildren, Ref } from "react";
import { textRecipe, TextVariants } from "./style.css";
import { classMerge } from "../../utils";

type TextElement = "span" | "p";

type TextProps = HTMLAttributes<HTMLParagraphElement> &
  TextVariants & {
    color?: string;
    as?: TextElement;
    ref?: Ref<HTMLParagraphElement>;
  };

export const Text = ({
  as: Tag = "span",
  children,
  ref,
  className,
  variant,
  color,
  style,
  ...props
}: PropsWithChildren<TextProps>) => {
  return (
    <Tag
      className={classMerge(textRecipe({ variant }), className)}
      ref={ref}
      style={{ color, ...style }}
      {...props}
    >
      {children}
    </Tag>
  );
};
