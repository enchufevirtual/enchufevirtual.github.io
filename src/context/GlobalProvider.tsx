import React, { useState, useEffect, useRef, useReducer } from "react";

import es from '@/translations/es.json';
import en from '@/translations/en.json';
import { GlobalContext } from "@/context/GlobalContext";
import { dataReducer } from "@/context/dataReducer";
import { PropsProvider } from "@/interfaces/interfaces";

const GlobalProvider = ({children}: PropsProvider) => {

  const INITIAL_STATE = {
    value: 'CATEGORIES'
  }
  // Use Reducer function
  const [categoryState, dispatch] = useReducer(dataReducer, INITIAL_STATE);

  const [active, setActive] = useState(false);
  const [play, setPlay] = useState(false);
  const [load, setLoad] = useState(false);
  const [language, setLanguage] = useState(false);
  const [data, setData] = useState([]);

  // Change Category
  const changeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({type: e.currentTarget.value, payload: e.currentTarget.value});
  }
  // Language Dinamic
  const defaultLanguage = () => {
    const data = JSON.stringify(en)
    setData(JSON.parse(data))
  }
  const changeLanguage = () => {
    let data;
    setLanguage(!language);
    if (language) {
      data = JSON.stringify(en)
      setData(JSON.parse(data))
    } else {
      data = JSON.stringify(es)
      setData(JSON.parse(data))
    }
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

  return (
    <GlobalContext.Provider value={{
      audioRef,
      active,
      volume,
      play,
      load,
      data,
      handleMenu,
      toggleAudio,
      changeCategory,
      changeLanguage,
      defaultLanguage,
      category: categoryState.value,
    }}>
      {children}
    </GlobalContext.Provider>
  );
}
export {GlobalProvider};
