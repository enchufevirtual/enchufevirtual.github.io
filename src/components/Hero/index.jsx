import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import HeroImage from '@images/home.svg';

const Hero = () => {
  const { language } = useContext(GlobalContext);

  const en = `Space created to share open source projects,
                  taking knowledge to another level.`;
  const es = `Espacio creado para compartir proyectos de código abierto,
                  llevando el conocimiento a otro nivel.`;

  const heroText = language == 'es' ? (es) : (en);
  const contact = language == 'es' ? ('Contacto') : ('Contact');

  const handleContact = () => {
    window.location.href = "mailto:chendoec@live.com";
  }

  return (

    <div id="Hero">
      <div className="Hero_content">
        <h1>Enchufe Virtual</h1>
        <p className="Hero_text">{ heroText }</p>
        <div onClick={ handleContact } className="btn">
          <span>{ contact }</span>
        </div>
      </div>
      <div className="Hero_image">
        <img src={ HeroImage } alt="Hero image" />
      </div>
    </div>

  );
}

export default Hero;
