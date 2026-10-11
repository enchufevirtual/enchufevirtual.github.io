"use client";

import { useState } from "react";
import Logo from "./Logo";

const navigation = [
  { label: "Inicio", href: "/" },
  { label: "Proyectos", href: "/#Main" },
  { label: "Tienda", href: "https://store.enchufevirtual.com", external: true },
  { label: "Radio", href: "https://radio.enchufevirtual.com", external: true },
  {
    label: "GitHub",
    href: "https://github.com/orgs/enchufevirtual/repositories",
    external: true,
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header id="Header" className="ev-header">
      <a className="ev-header__brand" href="/" aria-label="Enchufe Virtual, inicio">
        <Logo />
      </a>

      <nav
        className={`ev-header__navigation${menuOpen ? " is-open" : ""}`}
        id="ev-header-navigation"
        aria-label="Navegación principal"
      >
        {navigation.map(({ label, href, external }) => (
          <a
            className="ev-header__link"
            href={href}
            key={label}
            onClick={closeMenu}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {label}
          </a>
        ))}
      </nav>

      <div className="ev-header__actions">
        <button
          className={`ev-header__toggle${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="ev-header-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <a className="ev-header__contact" href="/contacto">
          Contacto
        </a>
      </div>
    </header>
  );
};

export default Header;
