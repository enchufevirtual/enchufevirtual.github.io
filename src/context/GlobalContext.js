import React, { useState, createContext, useEffect, useRef } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({children}) => {
  const [active, setActive] = useState(false);
  const [play, setPlay] = useState(false);
  const [load, setLoad] = useState(false);
  
  // Menu Toggle
  const handleMenu = () => {
    return (
      setActive(!active)
    );
  }
  // if Load document
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
  // Radio - Enchufe Virtual - Config
  const audioRef = useRef();
  let isPlaying = false;

  const onPlay = () => {
    const audio = audioRef.current;
    audio.play();
    setPlay(true);
    isPlaying = true;
  }
  const onPause = () => {
    const audio = audioRef.current;
    audio.pause();
    setPlay(false);
    isPlaying = false;
  }
  const toggleAudio = async ()  => {
    const audio = audioRef.current;
    if(audio.paused && !isPlaying) { return onPlay(); } 
    else { if(!audio.paused) { return onPause(); } }
  }
  const volume = (e) => {
    const volumen = e.target.value;
    const audio = audioRef.current;

    audio.volume = volumen;
  } 

  return (
    <GlobalContext.Provider value={{
      handleMenu,
      toggleAudio,
      audioRef,
      volume,
      play,
      load,
      active
    }}>
      {children}
    </GlobalContext.Provider>
  );
}
export {GlobalContext};
export {GlobalProvider};