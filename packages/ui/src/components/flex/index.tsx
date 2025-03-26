import {
  HTMLAttributes,
  PropsWithChildren,
  ElementType,
  ForwardedRef,
  forwardRef,
} from "react";
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
}

export const Flex = forwardRef<HTMLDivElement, PropsWithChildren<FlexProps>>(
  (
    {
      as: Tag = "div",
      justify,
      align,
      direction,
      gap,
      children,
      className,
      ...props
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <Tag
        ref={ref}
        style={{ gap }}
        className={classMerge(
          flexRecipe({ justify, align, direction }),
          className
        )}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);

Flex.displayName = "Flex";
