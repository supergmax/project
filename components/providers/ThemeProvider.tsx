"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

type ThemeProviderProps = {
  children: React.ReactNode;
  attribute?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(
  undefined
);

export function ThemeProvider({
  children,
  attribute = "data-theme",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.getAttribute(attribute);
    
    setTheme(initialColorValue === "dark" ? "dark" : "light");

    const observer = new MutationObserver((mutations) => {
      const newColorValue = root.getAttribute(attribute);
      setTheme(newColorValue === "dark" ? "dark" : "light");
    });

    observer.observe(root, {
      attributes: true,
      attributeFilter: [attribute],
    });

    return () => observer.disconnect();
  }, [attribute]);

  useEffect(() => {
    document.documentElement.setAttribute(attribute, theme);
  }, [theme, attribute]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};