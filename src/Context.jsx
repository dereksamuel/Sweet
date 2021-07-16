import React, { createContext, useState } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {
  const key = "currentUserToken";
  const [isAuth, setIsAuth] = useState(() => {
    return sessionStorage.getItem(key) || undefined;
  });
  const value = {
    isAuth,
    activateAuth: (token) => {
      setIsAuth(token);
      sessionStorage.setItem(key, token);
    },
    removeAuth: () => {
      setIsAuth(false);
      sessionStorage.removeItem(key);
    },
  };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};
