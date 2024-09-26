"use client";

import { createContext, useState } from "react";

interface SearchProviderProps {
  setInput: (value: string) => void;
  input: string;
}

interface ChildrenProps {
  children: React.ReactNode;
}

export const SearchContext = createContext<SearchProviderProps>({
  setInput: () => {},
  input: "",
});

export const SearchContextProvider = ({ children }: ChildrenProps) => {
  const [input, setInput] = useState("");

  return (
    <SearchContext.Provider
      value={{
        input,
        setInput,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
