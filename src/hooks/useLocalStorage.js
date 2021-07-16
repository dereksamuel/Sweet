import { useState } from "react";

function useLocalStorage (key, initValue) {
  const [storageVal, setStorageVal] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initValue;
    } catch (e) {
      return initValue;
    }
  });

  const setLocalStorage = (value, liked) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      !liked && document.getElementById("audio").play();
      setStorageVal(value);
    } catch (error) {
      console.error(error);
    }
  };

  return [storageVal, setLocalStorage];
}

export default useLocalStorage;