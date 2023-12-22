import React, { useState } from "react";
import { useTheme } from "../hooks/useTheme";

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const { toggleTheme } = useTheme();

  const handleToggle = () => {
    setDarkMode(!darkMode);
    toggleTheme();
  };

  return (
    <button
      onClick={handleToggle}
      className="bg-gray-800 text-white px-4 py-2 rounded"
    >
      {darkMode ? "Modo Claro" : "Modo Oscuro"}
    </button>
  );
};

export default DarkModeToggle;
