"use client";

import { useContext } from "react";
import { GlobalContext } from "@/context/GlobalContext";

const HomeCallToAction = () => {
  const { data } = useContext(GlobalContext);

  return (
    <section id="home-cta" className="home-cta" aria-labelledby="home-cta-title">
      <p className="home-cta__eyebrow">ENCHUFE VIRTUAL</p>
      <h2 id="home-cta-title">{data.cta.p}</h2>
      <p className="home-cta__text">{data.cta.tagline}</p>
      <a className="home-cta__action" href="mailto:enchufevirtual@gmail.com">
        {data.cta.action}
      </a>
    </section>
  );
};

export default HomeCallToAction;
