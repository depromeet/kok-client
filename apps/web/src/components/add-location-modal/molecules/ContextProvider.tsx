import { ReactNode } from "react";
import { StationProvider } from "../contexts/station";

interface ContextProvider {
  children: ReactNode;
}

const ContextProvider = ({ children }: ContextProvider) => {
  return <StationProvider>{children}</StationProvider>;
};

export default ContextProvider;
