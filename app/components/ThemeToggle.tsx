"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

import React from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <button
        className="text-neutral transition-colors dark:text-white-50"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeToggle;
