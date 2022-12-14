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
  const [play, setPlay] = useState(false);
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
  // Radio - Enchufe Virtual - Config
  let audioRef = useRef<null | HTMLMediaElement>(null);
  let isPlaying = false;

  const onPlay = (): void => {
    const audio = audioRef.current;
    audio?.play();
    setPlay(true);
    isPlaying = true;
  }
  const onPause = (): void => {
    const audio = audioRef.current;
    audio?.pause();
    setPlay(false);
    isPlaying = false;
  }
  const toggleAudio = async (): Promise<void>  => {
    const audio = audioRef.current;
    if(audio?.paused && !isPlaying) { return onPlay(); }
    else { if(!audio?.paused) { return onPause(); } }
  }
  const volume = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const volumen = parseFloat(e.target.value);
    const audio = audioRef.current;
    audio ? audio.volume = volumen : null;

  }

  const radioContext = {
    audioRef,
    volume,
    play,
    toggleAudio,
  }
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
    ...radioContext,
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
