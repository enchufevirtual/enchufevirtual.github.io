'use client'

import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const Hero = () => {
  const { data } = useContext(GlobalContext);
  const title = data.hero.title || "Enchufe Virtual";

  return (
    <section id="Hero">
      <div className="Hero_inner">
        <div className="Hero_content">
          <div className="Hero_intro">
            <p className="Hero_eyebrow">{data.hero.eyebrow}</p>
            <h1 className="Hero_title">
              {title.split(" ").map((word) => (
                <span key={word}>{word}</span>
              ))}
            </h1>
            <p className="Hero_tagline">{data.hero.tagline}</p>
            <p className="Hero_text">{data.hero.p}</p>
          </div>

          <div className="Hero_actions">
            <a className="btn btn-primary" href="#Main">{data.hero.action}</a>
            <a className="btn btn-outline" href="mailto:enchufevirtual@gmail.com">
              {data.hero.secondaryAction}
            </a>
          </div>

          <ul className="Hero_features" aria-label={data.hero.eyebrow}>
            {data.hero.features?.map((item) => (
              <li className="feature-item" key={item}>{item}</li>
            ))}
          </ul>
        </div>

      </div>
    </section>
    
  );
}

export default Hero;
