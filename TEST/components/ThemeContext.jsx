import { createContext, useContext, useState } from "react";
//* Create a context with a default value (light theme)
const ThemeContext = createContext("light");

//! Custom hook to consume the ThemeContext
export const useTheme = () => useContext(ThemeContext);

//# ThemeProvider component to wrap the app and manage the theme state
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
