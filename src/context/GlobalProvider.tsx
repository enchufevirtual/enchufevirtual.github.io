import React, { useState, useEffect, useRef, useReducer } from "react";

import { GlobalContext } from "@/context/GlobalContext";
import { dataReducer } from "@/context/dataReducer";
import { PropsProvider } from "@/interfaces/interfaces";
import { en } from "@/translations/en";

const GlobalProvider = ({children}: PropsProvider) => {

  const INITIAL_STATE = {
    value: 'CATEGORIES',
    language: 'en',
    data: en
  }
  // Use Reducer function
  const [globalState, dispatch] = useReducer(dataReducer, INITIAL_STATE);

  const [active, setActive] = useState(false);
  const [load, setLoad] = useState(false);

  // Change Category
  const changeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch( { type: e.currentTarget.value, payload: e.currentTarget.value } );
  }
  // Language Dinamic
  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch( { type:  e.currentTarget.value, payload: e.currentTarget.value } );
  }
  // Menu Toggle
  const handleMenu = () => ( setActive(!active) );
  // if Load document
  useEffect(() => {
    const onLoad = (): void => {
      setLoad(true);
    }

    if(document.readyState === 'complete') {
      onLoad();
    } else {
      window.addEventListener('load', onLoad);

      return () => window.removeEventListener('load', onLoad);
    }
  }, []);

  const languageContext = {
    language: globalState.language,
    changeLanguage,
    changeCategory,
    globalValue: globalState.value,
    data: globalState.data
  }
  const siteContext = {
    active,
    load,
    handleMenu,
  }
  const globalContext = {
    ...languageContext,
    ...siteContext
  }

  return (
    <GlobalContext.Provider value={globalContext}>
      {children}
    </GlobalContext.Provider>
  );
}
export {GlobalProvider};
