import React from "react";
import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });
  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };
  return [storedValue, setValue];
}

const CookiesPolicy = () => {
  const [accept, setAssept] = useLocalStorage("Aceept", false);
  if (accept) {
    return null;
  }

  const handleAcceptClick = () => {
    setAssept(true);
  };

  return (
    <div className="fixed flex items-center bg-cookie bg-opacity-90 w-full bottom-none p-s1 text-white text-sm sm:text-basicD text-left rounded-t-frame md:flex-col">
      <span>
        Мы используем cookie. Это позволяет нам анализировать взаимодействие с
        приложением и делать его лучше.
      </span>
      <div className="pl-s05 ">
        <button
          className="sm:mt-s05 py-s03 px-s1 border-2 border-solid border-white sm:rounded-button rounded-flag  sm:mt-s1 sm:py-s05 sm:px-s2 hover:bg-gray hover:bg-opacity-40 "
          onClick={handleAcceptClick}
        >
          Согласен
        </button>
      </div>
    </div>
  );
};

export default CookiesPolicy;
