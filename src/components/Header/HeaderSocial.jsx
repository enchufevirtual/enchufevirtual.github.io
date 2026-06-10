
"use client"

import React, {useContext} from "react";
import { GlobalContext } from "../../context/GlobalContext";

const HeaderSocial = () => {

  const { active } = useContext(GlobalContext);

 return (
  <ul id="Header_social" className={active ? "Header_social transform" : "Header_social"}>
    <li className="menu-link"><a href="https://store.enchufevirtual.com" aria-label="radio">Store</a></li>
    <li className="menu-link"><a aria-label="facebook" href="https://radio.enchufevirtual.com" target="_blank">Radio</a></li>
    <li className="menu-link"><a aria-label="repositories" href="https://github.com/orgs/enchufevirtual/repositories" target="_blank">GitHub</a></li>
  </ul>
 );
}

export default HeaderSocial;
