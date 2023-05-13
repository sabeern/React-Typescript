import React, { createContext } from "react";
import { theme } from "./Theme";
export const ThemeContext = createContext(theme);
type providerChildrenProp = {
  children: React.ReactNode;
};

export const ThemeContextProvider = ({ children }: providerChildrenProp) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
