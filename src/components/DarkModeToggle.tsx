import React, { useState } from "react";
// import { useTheme } from "../hooks/useTheme";

import { BsMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa6";

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  // const { toggleTheme } = useTheme();

  const handleToggle = () => {
    setDarkMode(!darkMode);
    toggleTheme();
  };
  const themeToggle = document.getElementById("themeToggle");

  // Función para cambiar el tema
  function toggleTheme() {
    const currentTheme = document.body.classList.contains("dark")
      ? "dark"
      : "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    // Cambiar el tema
    document.body.classList.remove(currentTheme);
    document.body.classList.add(newTheme);

    // Almacenar la preferencia del usuario
    localStorage.setItem("theme", newTheme);
  }

  // Manejar el clic en el botón
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }

  return (
    <button
      onClick={handleToggle}
      className="bg-gray-800/30 text-white  px-1 py-1 rounded-full "
    >
      <div className="bg-gray-700 px-2 py-2 text-sky-400 dark:text-amber-500 rounded-full inline-flex space-x-3 items-center text-sm">
        {darkMode ? <FaSun /> : <BsMoonStarsFill clasName="" />}

        {/* <p className="ml-">{darkMode ? "Modo Claro" : "Modo Oscuro"}</p> */}
      </div>
    </button>
  );
};

export default DarkModeToggle;
