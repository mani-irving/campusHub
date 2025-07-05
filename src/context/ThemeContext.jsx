// ThemeContext.js
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  useEffect(() => {
    const root = document.querySelector("html");
    root.classList.remove("dark", "light");
    root.classList.add(darkTheme ? "dark" : "light");
  }, [darkTheme]);

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// ✅ Custom Hook to use theme
export const useTheme = () => useContext(ThemeContext);
