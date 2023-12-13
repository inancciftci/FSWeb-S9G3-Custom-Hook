import { useState } from "react";

export function localStorageKullan(key, initialValue) {
  const [storage, setStorage] = useState(() => {
    const storedValue = JSON.parse(localStorage.getItem(key));
    return storedValue != null ? storedValue : initialValue;
  });
  const updateStorage = (initialValue) => {
    localStorage.setItem(key, JSON.stringify(initialValue));
    setStorage(initialValue);
  };
  return [storage, updateStorage];
}
