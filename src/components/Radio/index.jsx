import React, { useState, useRef } from "react";

const Radio = () => {
  const [active, setActive] = useState(false);

  const audioRef = useRef();
  let isPlaying = false;

  function onPlay() {
    const audio = audioRef.current;
    audio.play();
    setActive(true);
    isPlaying = true;
  }
  function onPause() {
    const audio = audioRef.current;
    audio.pause();
    setActive(false);
    isPlaying = false;
  }
  async function toggleAudio() {
    const audio = audioRef.current;
    if(audio.paused && !isPlaying) { return onPlay(); } 
    else { if(!audio.paused) { return onPause(); } }
  }
  function volume(e) {
    const volumen = e.target.value;
    const audio = audioRef.current;

    audio.volume = volumen;
  } 

  return (
    <div className="Radio">
      <audio ref={audioRef}>
          <source src="https://stream.zeno.fm/ezj7hvwkfk2tv" type="audio/mpeg" />
      </audio>
      <div className="controls">
          <button onClick={() => toggleAudio()} className="background-play">
              <span className={active ? "play active" : "play"}></span>
              <span className={active ? "pause active" : "pause"}></span>        
          </button>
          <marquee 
            behavior="scroll" 
            direction="left" 
            width="100%" 
            bahaviur="alternate" 
            align="middle" 
            scrolldelay="5" 
            scrollamount="4" 
            loop="infinite" 
            hspace="10px" 
            vspace="5px">
              <p>May life not end without leaving traces, every moment you toast is a story to remember.</p>
          </marquee>
          <div  className="volumen">
              <input onInput={volume} type="range" name="volumen" id="volumen" min="0" max="1" step="0.01" defaultValue="0.7" /> 
          </div>
      </div>
    </div>
  );
}

export default Radio;