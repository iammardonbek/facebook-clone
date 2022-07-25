import React, { createContext, useState } from "react";
import list from "./List";

export const PhotoContext = createContext();
export const LoginContext = createContext();
export const NavContext = createContext();

export const PhotoContextProvider = ({ children }) => {
  const [info, setInfo] = useState(list);
  return (
    <PhotoContext.Provider value={[info, setInfo]}>
      {children}
    </PhotoContext.Provider>
  );
};
// ==========================
export const LoginContextProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  return (
    <LoginContext.Provider value={[login, setLogin]}>
      {children}
    </LoginContext.Provider>
  );
};

export const NavContextProvider = ({ children }) => {
  const [state, setState] = useState("1");
  return (
    <NavContext.Provider value={[state, setState]}>
      {children}
    </NavContext.Provider>
  );
};
