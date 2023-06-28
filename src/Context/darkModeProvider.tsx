import { useState, createContext } from "react";

export const DarkModeProvider = {{children}} => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
      };
    }
