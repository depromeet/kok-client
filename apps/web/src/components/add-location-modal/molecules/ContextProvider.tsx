import { ReactNode } from "react";
import { StationProvider } from "../contexts/station";
import { SelectFlagProvider } from "../contexts/selected-flag";

interface ContextProvider {
  children: ReactNode;
}

const ContextProvider = ({ children }: ContextProvider) => {
  return (
    <SelectFlagProvider>
      <StationProvider>{children}</StationProvider>
    </SelectFlagProvider>
  );
};

export default ContextProvider;
