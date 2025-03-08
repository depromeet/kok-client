import * as RadixDialog from "@radix-ui/react-dialog";
import { Content, ContentProps } from "./Content";
import { Overlay } from "./Overlay";
import { AnimatePresence } from "@repo/motion";

export interface RootProps extends ContentProps {
  open: boolean;
  onClose?: () => void;
}

export function Root({ open, header, children, onClose }: RootProps) {
  return (
    <RadixDialog.Root>
      <AnimatePresence>
        {open ? (
          <RadixDialog.Portal forceMount>
            <RadixDialog.Overlay asChild forceMount>
              <Overlay className="overlay" onClick={onClose} />
            </RadixDialog.Overlay>
            <RadixDialog.Content forceMount>
              <Content header={header}>{children}</Content>
            </RadixDialog.Content>
          </RadixDialog.Portal>
        ) : null}
      </AnimatePresence>
    </RadixDialog.Root>
  );
}
