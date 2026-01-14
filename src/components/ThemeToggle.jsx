import React from "react";
import { useTheme } from "./Theme";
import { BsSun, BsMoon } from "react-icons/bs";
import "./theme-toggle.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {theme === "dark" ? (
        <BsSun size="1.2rem" aria-hidden="true" />
      ) : (
        <BsMoon size="1.2rem" aria-hidden="true" />
      )}
    </button>
  );
};

export default ThemeToggle;
