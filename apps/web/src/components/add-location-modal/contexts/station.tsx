"use client";

import { StationInfo } from "@/api/types/stations/index.type";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface StationInfoContextProps {
  stationInfo: StationInfo | null;
  setStationInfo: Dispatch<SetStateAction<StationInfo | null>>;
}

const StationInfoContext = createContext<StationInfoContextProps | null>(null);

export const StationProvider = ({ children }: { children: ReactNode }) => {
  const [stationInfo, setStationInfo] = useState<StationInfo | null>(null);
  return (
    <StationInfoContext.Provider value={{ stationInfo, setStationInfo }}>
      {children}
    </StationInfoContext.Provider>
  );
};

export function useStationInfo() {
  const context = useContext(StationInfoContext);
  if (!context) throw new Error("Cannot find StationProvider");
  return context;
}
