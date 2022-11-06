import React, { useState, createContext } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({children}) => {
  const [active, setActive] = useState(false);

  const handleMenu = () => {
    return (
      setActive(!active)
    );
  }


  return (
    <GlobalContext.Provider value={{
      handleMenu,
      active
    }}>
      {children}
    </GlobalContext.Provider>
  );
}
export {GlobalContext};
export {GlobalProvider};