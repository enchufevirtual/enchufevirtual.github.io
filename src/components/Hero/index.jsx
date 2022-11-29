import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import HeroImage from '@images/home.svg';

const Hero = () => {
  const { data } = useContext(GlobalContext);

  const handleContact = () => {
    window.location.href = "mailto:chendoec@live.com";
  }

  return (

    <div id="Hero">
      <div className="Hero_content">
        <h1>Enchufe Virtual</h1>
        <p className="Hero_text">{ data.hero.p }</p>
        <div onClick={ handleContact } className="btn">
          <span>{ data.hero.span }</span>
        </div>
      </div>
      <div className="Hero_image">
        <img src={ HeroImage } alt="Hero image" />
      </div>
    </div>

  );
}

export default Hero;
