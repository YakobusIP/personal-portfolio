import React, { createContext, useContext, useState } from "react";

interface ActiveSectionContextType {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

type ActiveSectionProviderProps = {
  children: React.ReactNode;
};

export const ActiveSectionContext = createContext<
  ActiveSectionContextType | undefined
>(undefined);

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    throw new Error(
      "useActiveSectionContext must be used within a ActiveSectionProvider"
    );
  }
  return context;
};

export const ActiveSectionProvider = ({
  children
}: ActiveSectionProviderProps) => {
  const [activeSection, setActiveSection] = useState("");

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};
