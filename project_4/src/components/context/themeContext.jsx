

const { createContext, useState } = require("react");

export const ThemeContext = createContext();

export const WrapperTheme = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((item) => (item === "light" ? "dark" : "light"));
    console.log("Theme changed to:", theme);
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === "light" ? "" : "dark-mode"}>{children}</div>
    </ThemeContext.Provider>
  );
};
