import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface SelectFlagContextProps {
  selectFlag: boolean;
  setSelectFlag: Dispatch<SetStateAction<boolean>>;
}

const SelectedFlagContext = createContext<SelectFlagContextProps | null>(null);

export const SelectFlagProvider = ({ children }: { children: ReactNode }) => {
  const [selectFlag, setSelectFlag] = useState<boolean>(false);
  return (
    <SelectedFlagContext.Provider value={{ selectFlag, setSelectFlag }}>
      {children}
    </SelectedFlagContext.Provider>
  );
};

export function useSelectFlag() {
  const context = useContext(SelectedFlagContext);
  if (!context) throw new Error("Cannot find SelectFlagProvider");
  return context;
}
