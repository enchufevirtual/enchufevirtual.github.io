"use client"

import useMediaQuery from "@hooks/useMediaQuery";

import HeaderSocial from "@/components/Header/HeaderSocial";
import MenuBtn from "@/components/Header/MenuBtn";
import Logo from "./Logo";

const Header  = () => {
  const matches = useMediaQuery("(max-width: 768px)");

  return (
    <header id="Header">
      <ul className="menu">
        <li>
          <a href="https://enchufevirtual.com/">
            <Logo /> Enchufe Virtual
          </a>
        </li>
        {matches ? <MenuBtn /> : <HeaderSocial />}
      </ul>
    </header>
  );
}

export default Header;
