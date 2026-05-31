'use client'

import React, { useState, useEffect, useReducer, useCallback, useMemo } from "react";

import { GlobalContext } from "@/context/GlobalContext";
import { dataReducer } from "@/context/dataReducer";
import { PropsProvider } from "@/interfaces/interfaces";
import { es } from "@/translations/es";

const GlobalProvider = ({children}: PropsProvider) => {

  const INITIAL_STATE = {
    value: 'CATEGORIES',
    language: 'es',
    data: es
  }
  const [globalState, dispatch] = useReducer(dataReducer, INITIAL_STATE);

  const [active, setActive] = useState(false);
  const [load, setLoad] = useState(false);

  const changeCategory = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: e.currentTarget.value, payload: e.currentTarget.value });
  }, []);

  const changeLanguage = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: e.currentTarget.value, payload: e.currentTarget.value });
  }, []);

  const handleMenu = useCallback(() => {
    setActive((prev) => !prev);
  }, []);

  useEffect(() => {
    const markLoaded = (): void => {
      setLoad(true);
    };

    if (document.readyState === 'complete') {
      markLoaded();
      return;
    }

    window.addEventListener('load', markLoaded);
    return () => {
      window.removeEventListener('load', markLoaded);
    }
  }, []);

  const languageContext = useMemo(() => ({
    language: globalState.language,
    changeLanguage,
    changeCategory,
    globalValue: globalState.value,
    data: globalState.data,
  }), [globalState.language, globalState.value, globalState.data, changeLanguage, changeCategory]);

  const siteContext = useMemo(() => ({
    active,
    load,
    handleMenu,
  }), [active, load, handleMenu]);

  const globalContext = useMemo(
    () => ({
      ...languageContext,
      ...siteContext,
    }),
    [languageContext, siteContext]
  );

  return (
    <GlobalContext.Provider value={globalContext}>
      {children}
    </GlobalContext.Provider>
  );
}
export {GlobalProvider};
