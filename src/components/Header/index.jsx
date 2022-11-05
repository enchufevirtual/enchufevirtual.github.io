import React from "react";
import useMediaQuery from "@hooks/useMediaQuery";

import Logo from '@images/logo.png';
import HeaderSocial from "@components/Header/HeaderSocial";
import MenuBtn from "@components/Header/MenuBtn";

const Header  = () => {

  const matches = useMediaQuery("(min-width: 769px");

  return (
    <header id="Header">
      <ul className="menu">
        <li className="Ev">
          <a href="https://enchufevirtual.com/">
            Enchufe Virtual
          </a>
        </li>
        <li>
          <a href="https://enchufevirtual.com/">
            <img src={Logo} alt="Logo Enchufe Virtual" />
          </a>
        </li>
        {matches ? <HeaderSocial /> : <MenuBtn />}
      </ul>
    </header>
  );
}

export default Header;