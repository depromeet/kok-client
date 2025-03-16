"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { NaverMapInstance } from "../types";

export interface NaverMapContext {
  map: NaverMapInstance | null;
  setMap: (map: NaverMapInstance) => void;
}

export const NaverMapContext = createContext<NaverMapContext | undefined>(
  undefined
);

export const useNaverMap = (existedMap?: NaverMapInstance) => {
  const mapContext = useContext(NaverMapContext);

  if (!mapContext)
    throw new Error("No Naver Map set, use NaverMapProvider to set one");

  return mapContext;
};

export const useSetNaverMap = () => {
  const mapContext = useContext(NaverMapContext);

  const { setMap } = mapContext!;
  return setMap;
};

export type NaverMapProviderProps = {
  mapContext?: NaverMapContext;
  children?: ReactNode;
};

export const NaverMapProvider = ({
  children,
}: NaverMapProviderProps): JSX.Element => {
  const [map, setMap] = useState<NaverMapInstance | null>(null);
  return (
    <NaverMapContext.Provider value={{ map, setMap }}>
      {children}
    </NaverMapContext.Provider>
  );
};
