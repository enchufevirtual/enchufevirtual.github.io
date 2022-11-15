import React from "react";
import HeroImage from '@images/home.svg'

const Hero = () => {

  const handleContact = () => {
    window.location.href = "mailto:chendoec@live.com";
  }

  return (

    <div id="Hero">
      <div className="Hero_content">
        <h1>Enchufe Virtual</h1>      
        <p className="Hero_text">Space created to share open source projects, taking knowledge to another level.</p> 
        <div onClick={handleContact} className="btn">
          <span>Contact</span>
        </div>
      </div>
      <div className="Hero_image">
        <img src={HeroImage} alt="Hero image" />
      </div>
    </div>

  );
}

export default Hero;