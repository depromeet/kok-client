import { HTMLAttributes, PropsWithChildren, ElementType, Ref } from "react";
import { flexRecipe } from "./style.css";
import { classMerge } from "../../utils";

type JustifyType = "start" | "center" | "end" | "between";
type AlignType = "start" | "center" | "end";

interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  as?: ElementType;
  justify?: JustifyType;
  align?: AlignType;
  direction?: "row" | "column";
  gap?: number;
  ref?: Ref<HTMLDivElement>;
}

export const Flex = ({
  as: Tag = "div",
  justify,
  align,
  direction,
  gap,
  children,
  className,
  ref,
  style,
  ...props
}: PropsWithChildren<FlexProps>) => {
  return (
    <Tag
      {...props}
      ref={ref}
      style={{ gap, ...style }}
      className={classMerge(
        flexRecipe({ justify, align, direction }),
        className
      )}
    >
      {children}
    </Tag>
  );
};
