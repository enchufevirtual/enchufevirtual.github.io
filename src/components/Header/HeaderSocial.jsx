
"use client"

import React, {useContext} from "react";
import { GlobalContext } from "../../context/GlobalContext";

const HeaderSocial = () => {

  const { active, changeLanguage, language } = useContext(GlobalContext);

 return (
  <ul id="Header_social" className={active ? "Header_social transform" : "Header_social"}>
    <li className="menu-link"><a href="https://store.enchufevirtual.com" aria-label="radio">Store</a></li>
    <li className="menu-link"><a aria-label="facebook" href="https://radio.enchufevirtual.com" target="_blank">Radio</a></li>
    <li className="menu-link"><a aria-label="repositories" href="https://github.com/orgs/enchufevirtual/repositories" target="_blank">GitHub</a></li>
    <li>
      <select onChange={changeLanguage} value={language}  className="language">
        <option className="es" value="es">Spanish</option>
      </select>
    </li>
  </ul>
 );
}

export default HeaderSocial;
