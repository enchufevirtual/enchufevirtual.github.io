
import React, { useState, createContext, useEffect, useRef, ReactNode } from "react";

import es from 'translations/es.json';
import en from 'translations/en.json';

const GlobalContext = createContext({});

const GlobalProvider: React.FC<{}> = ({children}: { children?: ReactNode }) => {

  const [active, setActive] = useState(false);
  const [play, setPlay] = useState(false);
  const [load, setLoad] = useState(false);
  const [language, setLanguage] = useState(false);
  const [data, setData] = useState([]);

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
  const handleMenu = (): void => {
    return (
      setActive(!active)
    );
  }
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
      handleMenu,
      toggleAudio,
      audioRef,
      data,
      volume,
      play,
      load,
      active,
      changeLanguage,
      defaultLanguage
    }}>
      {children}
    </GlobalContext.Provider>
  );
}
export {GlobalContext};
export {GlobalProvider};