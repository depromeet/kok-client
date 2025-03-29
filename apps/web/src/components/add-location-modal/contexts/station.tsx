import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { StationInfo } from "../types";

interface StationContextProps {
  station: StationInfo | null;
  setStation: Dispatch<SetStateAction<StationInfo | null>>;
}

const StationContext = createContext<StationContextProps | null>(null);

export const StationProvider = ({ children }: { children: ReactNode }) => {
  const [station, setStation] = useState<StationInfo | null>(null);
  return (
    <StationContext.Provider value={{ station, setStation }}>
      {children}
    </StationContext.Provider>
  );
};

export function useStation() {
  const context = useContext(StationContext);
  if (!context) throw new Error("Cannot find StationProvider");
  return context;
}
