import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const [theme, settheme] = useState("Dark");
  const toggleTheme = () => {
    settheme((prevtheme) => (prevtheme === "Light" ? "Dark" : "Light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
