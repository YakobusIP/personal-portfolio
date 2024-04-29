import React, { createContext, useContext, useRef } from "react";

interface ScrollContextType {
  introRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  experienceRef: React.RefObject<HTMLDivElement>;
  skillsRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
}

type ScrollProviderProps = {
  children: React.ReactNode;
};

export const ScrollContext = createContext<ScrollContextType | undefined>(
  undefined
);

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScrollContext must be used within a ScrollProvider");
  }
  return context;
};

export const ScrollProvider = ({ children }: ScrollProviderProps) => {
  const introRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  return (
    <ScrollContext.Provider
      value={{ introRef, aboutRef, experienceRef, skillsRef, projectsRef }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
