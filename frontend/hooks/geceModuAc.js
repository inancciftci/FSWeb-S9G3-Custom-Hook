import { useEffect } from "react";
import { localStorageKullan } from "./localStorageKullan";

export const useGeceModu = (initialValue) => {
  const storedValue = localStorage.getItem("dark-mode");
  const value = storedValue != null ? storedValue : initialValue;

  const [darkMode, setDarkMode] = localStorageKullan(value);

  useEffect(() => {
    localStorage.setItem("dark-mode", darkMode);
  }, [darkMode]);

  return [darkMode, setDarkMode];
};
