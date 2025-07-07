// ThemeContext.js

import { createContext, useContext, useEffect, useState } from "react";

/**
 * ThemeContext provides theme state and toggle method across the app.
 */
const ThemeContext = createContext();

/**
 * Retrieves initial theme preference.
 * Priority:
 *   1. localStorage if available
 *   2. System preference
 *   3. Default to 'light'
 * @returns {boolean} true for dark theme, false for light
 */
const getInitialTheme = () => {
  if (typeof window === "undefined") return false;

  const stored = localStorage.getItem("localTheme");
  if (stored === "dark") return true;
  if (stored === "light") return false;

  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  return systemPrefersDark;
};

/**
 * ThemeProvider wraps your application and manages theme state.
 * @param {object} props
 * @param {React.ReactNode} props.children
 */
export const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(getInitialTheme);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = document.documentElement;
    const classToAdd = darkTheme ? "dark" : "light";

    // Remove any existing class and add the selected theme
    root.classList.remove("dark", "light");
    root.classList.add(classToAdd);

    // Persist user preference
    localStorage.setItem("localTheme", classToAdd);
  }, [darkTheme]);

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Custom hook to access theme context.
 * Ensures it's used within a ThemeProvider.
 * @returns {{ darkTheme: boolean, setDarkTheme: function }}
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
