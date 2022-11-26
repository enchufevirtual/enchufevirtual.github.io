import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import useMediaQuery from "@hooks/useMediaQuery";

import Logo from '@images/logo.png';
import HeaderSocial from "@/components/Header/HeaderSocial";
import MenuBtn from "@/components/Header/MenuBtn";

const Header  = () => {
  const { active } = useContext(GlobalContext);

  const matches = useMediaQuery("(max-width: 768px");

  return (
    <header id="Header">
      <ul className="menu" style={{backgroundColor: active ? '#161B22' : null}}>
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
        {matches ? <MenuBtn /> : <HeaderSocial />}
      </ul>
    </header>
  );
}

export default Header;
