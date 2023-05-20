
import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const Radio = () => {

  const { toggleAudio, volume, play, audioRef, data } = useContext(GlobalContext);

  useEffect(() => {
    const audioElement = audioRef.current;
    let isPlaying = false;
    let streamUrl = 'https://stream.zeno.fm/ezj7hvwkfk2tv'; // URL de transmisión inicial

    const checkAudioStatus = setInterval(() => {
      if (!audioElement.paused) {
        isPlaying = true;
      } else if (isPlaying) {
        console.log("El audio se ha detenido");
        audioElement.pause();

        // Generar un identificador único para la URL de transmisión
        const uniqueId = Date.now().toString();
        streamUrl = `https://stream.zeno.fm/ezj7hvwkfk2tv?cache=${uniqueId}`;

        // Actualizar la URL de transmisión
        audioElement.src = streamUrl;
        audioElement.load();
        audioElement.play();

        isPlaying = false;
      }
    }, 5000);

    return () => {
      clearInterval(checkAudioStatus);
    };
  }, []);
  return (
    <div className="Radio">
      <audio ref={audioRef} src="https://stream.zeno.fm/ezj7hvwkfk2tv" type="audio/mpeg" />

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
              <p>{ data.radio.p }</p>
          </marquee>
          <div  className="volumen">
              <input onInput={ volume } type="range" name="volumen" id="volumen" min="0" max="1" step="0.01" defaultValue="0.7" />
          </div>
      </div>
    </div>
  );
}

export default Radio;
