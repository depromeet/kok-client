import { mergeProps } from "react-aria";
import { ButtonHTMLAttributes, PropsWithChildren, RefObject } from "react";
import {
  buttonContainerStyle,
  buttonReceipe,
  ButtonVariants,
} from "./style.css";
import { classMerge } from "../../utils";
import { motion, usePressEffect } from "@repo/motion";
import mergeRefs from "merge-refs";
import { theme } from "../../tokens";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants & { ref?: RefObject<HTMLButtonElement | null> };

export const Button = ({
  variant = "primary",
  width,
  padding,
  ref,
  className,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const { containerRef, pressProps } = usePressEffect();

  return (
    <motion.div
      className={classMerge(
        variant === "share-icon" ? "" : buttonContainerStyle,
        className
      )}
      variants={{
        wiggle: {
          x: [4, -4, 4, -4, 4, -4, 4, -4],
        },
      }}
      transition={{ duration: 3 }}
      whileTap={props.disabled ? "wiggle" : ""}
    >
      <motion.button
        animate={
          props.disabled
            ? {
                background: theme.colors.gray20,
              }
            : { background: buttonBackgroundVariants[variant] }
        }
        className={buttonReceipe({
          variant,
          width,
          padding,
        })}
        ref={mergeRefs(ref, containerRef)}
        {...mergeProps(props, props.disabled ? {} : pressProps)}
      >
        {children}
      </motion.button>
    </motion.div>
  );
};

const buttonBackgroundVariants: Record<
  "primary" | "secondary" | "border" | "gradient-loop" | "share-icon",
  string
> = {
  primary: theme.colors.navy,
  secondary: theme.colors.orange40,
  border: "transparent",
  "gradient-loop": "linear-gradient(90deg, #1B202C, #263350, #1B202C)",
  "share-icon": "transparent",
};
