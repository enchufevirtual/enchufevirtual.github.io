
import React, { useContext } from "react";
import { GlobalContext } from "@context/GlobalContext";

const Radio = () => {

  const { toggleAudio, volume, play, audioRef } = useContext(GlobalContext);

  return (
    <div className="Radio">
      <audio ref={audioRef}>
          <source src="https://stream.zeno.fm/ezj7hvwkfk2tv" type="audio/mpeg" />
      </audio>
      <div className="controls">
          <button onClick={() => toggleAudio()} className="background-play">
              <span className={play ? "play active" : "play"}></span>
              <span className={play ? "pause active" : "pause"}></span>        
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