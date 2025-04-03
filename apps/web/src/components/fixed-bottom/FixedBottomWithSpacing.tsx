import { ReactNode, useState } from "react";
import { footerContainerStyle } from "./style.css";

interface Props {
  children?: ReactNode;
}

export function FixedBottomWithSpacing({ children }: Props) {
  const [height, setHeight] = useState(0);

  return (
    <>
      <div style={{ height }} />
      <div
        className={footerContainerStyle}
        ref={(el) => {
          if (el != null && height === 0) {
            setHeight(el.clientHeight);
          }
        }}
      >
        {children}
      </div>
    </>
  );
}
