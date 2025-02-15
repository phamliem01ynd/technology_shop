import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../context/themeContext";
import "./theme.scss";
import { Switch } from "antd";
function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const handleRequire = () => {
    if (window.confirm("Bạn có muốn chuyển đổi giao diện")) {
      toggleTheme();
    }
  };
  return (
    <Switch
      onClick={handleRequire} 
      checked={theme === "dark"}
      checkedChildren="🌙"
      unCheckedChildren="🌞"
    />
  );
}

export default ThemeToggle;
