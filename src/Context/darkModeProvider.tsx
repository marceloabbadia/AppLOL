import { useState, createContext } from "react";
import { DarkModeContext } from "./darkModelContext";

export const DarkModeProvider = {{children}} => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
      };
    }
