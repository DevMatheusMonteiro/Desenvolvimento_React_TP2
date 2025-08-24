import { createContext, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";
import { GlobalStyle } from "../styles/globalStyles";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export function ThemeProviderContext({ children }) {
  const [theme, setTheme] = useState(lightTheme);

  function toggleTheme() {
    setTheme((prev) => (prev.title == "light" ? darkTheme : lightTheme));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
