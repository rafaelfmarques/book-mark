"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { useEffect } from "react";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

const Toggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className="relative w-16 h-8 flex items-center dark:bg-gray-900 bg-teal-50 cursor-pointer rounded-full p-1"
      onClick={toggleTheme}
    >
      <BsSunFill className=" text-yellow-400" size={18} />
      <div
        className="absolute bg-white dark:bg-medium w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"
        style={darkMode ? { right: "2px" } : { left: "2px" }}
      ></div>
      <FaMoon className="ml-auto text-black" size={18} />
    </div>
  );
};

export default Toggle;
