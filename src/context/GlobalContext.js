import React, { useState, createContext, useEffect } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({children}) => {
  const [active, setActive] = useState(false);
  const [load, setLoad] = useState(false);
  
  const handleMenu = () => {
    return (
      setActive(!active)
    );
  }

  useEffect(() => {
    const onLoad = () => {
      setLoad(true);
    }   
    
    if(document.readyState === 'complete') {
      onLoad();
    } else {
      window.addEventListener('load', onLoad);

      return () => window.removeEventListener('load', onLoad);
    }
  }, []);

  return (
    <GlobalContext.Provider value={{
      handleMenu,
      load,
      active
    }}>
      {children}
    </GlobalContext.Provider>
  );
}
export {GlobalContext};
export {GlobalProvider};