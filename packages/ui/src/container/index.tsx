import React, { ReactNode } from "react";
import { container } from "./style.css";

interface ContainerProps {
  children: ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={container}>{children}</div>;
};
