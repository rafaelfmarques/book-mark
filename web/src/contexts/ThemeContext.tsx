"use client";
import React, { createContext, useContext, useState } from "react";

interface ThemeContextType {
  darkMode: boolean;
  toggleTheme: () => void;
}

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeContext = createContext({
  darkMode: false,
} as ThemeContextType);

export const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
  children,
}) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleTheme = (): void => {
    setDarkMode(!darkMode);
    localStorage.setItem("theme", darkMode ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  return useContext(ThemeContext);
};
