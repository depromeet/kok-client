import { HTMLAttributes, PropsWithChildren, Ref } from "react";
import { textRecipe } from "./style.css";
import { classMerge } from "../../utils";

type TextElement = "span" | "p";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  as?: TextElement;
  ref?: Ref<HTMLParagraphElement>;
}

export const Text = ({
  as: Tag = "span",
  children,
  ref,
  className,
  ...props
}: PropsWithChildren<TextProps>) => {
  return (
    <Tag className={classMerge(textRecipe({}), className)} ref={ref} {...props}>
      {children}
    </Tag>
  );
};
