"use client";

import { useContext } from "react";
import { GlobalContext } from "@/context/GlobalContext";
import Logo from "@/components/Header/Logo";

const Footer = () => {
  const year = new Date().getFullYear();
  const { language } = useContext(GlobalContext);
  const copy = language === "es"
    ? {
        description: "Diseño y desarrollo de experiencias digitales.",
        explore: "Explora",
        home: "Inicio",
        projects: "Proyectos",
        contact: "Contacto",
        follow: "Comunidad",
        store: "Tienda",
        facebook: "Facebook",
        creator: "Creado por",
      }
    : {
        description: "Design and development of digital experiences.",
        explore: "Explore",
        home: "Home",
        projects: "Projects",
        contact: "Contact",
        follow: "Community",
        store: "Store",
        facebook: "Facebook",
        creator: "Created by",
      };

  return (
    <footer id="footer_container">
      <div className="footer__main">
        <div className="footer__brand">
          <a className="footer__logo" href="/" aria-label="Enchufe Virtual, inicio">
            <Logo />
            <span>Enchufe Virtual</span>
          </a>
          <p>{copy.description}</p>
        </div>

        <nav className="footer__navigation" aria-label={copy.explore}>
          <h2>{copy.explore}</h2>
          <a href="/#Hero">{copy.home}</a>
          <a href="/#Main">{copy.projects}</a>
          <a href="/contacto">{copy.contact}</a>
        </nav>

        <div className="footer__community">
          <h2>{copy.follow}</h2>
          <a href="https://github.com/orgs/enchufevirtual/repositories" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://store.enchufevirtual.com" target="_blank" rel="noopener noreferrer">{copy.store}</a>
          <a href="https://radio.enchufevirtual.com" target="_blank" rel="noopener noreferrer">Radio</a>
          <a href="https://www.youtube.com/@enchufevirtual" target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href="https://www.facebook.com/enchufevirtualec" target="_blank" rel="noopener noreferrer">{copy.facebook}</a>
          <a href="https://www.instagram.com/enchufevirtual" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>

      <div className="copyright">
        <p>© {year} Enchufe Virtual</p>
        <p>
          {copy.creator}{" "}
          <a href="https://www.soychendo.com" target="_blank" rel="noopener noreferrer">
            Soy Chendo
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
