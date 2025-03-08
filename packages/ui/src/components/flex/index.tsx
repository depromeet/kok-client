import { HTMLAttributes, PropsWithChildren, ElementType } from "react";
import { flexRecipe } from "./style.css";

type JustifyType = "start" | "center" | "end" | "between";

type AlignType = "start" | "center" | "end";

interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  as?: ElementType;
  justify?: JustifyType;
  align?: AlignType;
  direction?: "row" | "column";
  gap?: number;
}

export const Flex = ({
  as: Tag = "div",
  justify,
  align,
  direction,
  gap,
  children,
  ...props
}: PropsWithChildren<FlexProps>) => {
  return (
    <Tag
      style={{ gap }}
      className={flexRecipe({ justify, align, direction })}
      {...props}
    >
      {children}
    </Tag>
  );
};
