import { Ref } from "react";
import {
  BottomSheet,
  BottomSheetProps,
  BottomSheetRef,
} from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";

export type RootProps = Pick<
  BottomSheetProps,
  "header" | "open" | "children"
> & {
  ref?: Ref<BottomSheetRef>;
  onClose?: () => void;
};

export function Root({ ref, onClose, ...restProps }: RootProps) {
  return <BottomSheet ref={ref} onDismiss={onClose} {...restProps} />;
}
