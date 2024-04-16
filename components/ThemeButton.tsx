"use client";
import React from "react";
import { useTheme } from "next-themes";
import { DarkMode, LightMode } from "@mui/icons-material";

const ThemeButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className="hover:bg-gray-300 dark:bg-gray-800  dark:hover:bg-gray-700 transition-all rounded flex items-center justify-center h-7 w-7"
    >
      {currentTheme === "dark" ? <DarkMode /> : <LightMode />}
    </button>
  );
};

export default ThemeButton;
