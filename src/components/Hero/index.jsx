'use client'

import React, { useContext } from "react";
import useMediaQuery from "@hooks/useMediaQuery";
import { GlobalContext } from "../../context/GlobalContext";

const Hero = () => {
  const { data } = useContext(GlobalContext);

  const handleContact = () => {
    window.location.href = "mailto:enchufevirtual@gmail.com";
  }
   const matches = useMediaQuery("(min-width: 1024px)");

  const features = [
    "Web a medida → Soluciones digitales personalizadas.",
    "UX/UI profesional → Experiencias que convierten.",
    "Open source → Código libre, proyectos colaborativos.",
    "Soluciones tecnológicas → Distribuidores autorizados.",
  ];

  return (
    <section id="Hero">
      <div className="Hero_inner">
        <div className="Hero_content">
        <div className="Hero_intro">
          <h1>Enchufe Virtual</h1>
          <p className="Hero_text">{ data.hero.p }</p>
        </div>

        <div className="Hero_features">
          {features.map((item, index) => (
            <div className="feature-item" key={index}>
              <span className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <button type="button" onClick={handleContact} className="btn">
          <span>{ data.hero.span }</span>
        </button>
      </div>
        {matches ? (
          <div className="Hero_image">
           <img src="/assets/heroev.svg" alt="Enchufe Virtual Hero" loading="lazy" width="500" height="500" />
          </div>
        ) : null}
      </div>
    </section>
    
  );
}

export default Hero;
