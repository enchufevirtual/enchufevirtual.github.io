
import React, {useContext} from "react";
import { GlobalContext } from "../../context/GlobalContext";

const HeaderSocial = () => {

  const { active, changeLanguage, language } = useContext(GlobalContext);

 return (
  <ul className={active ? "Header_social transform" : "Header_social"}>
    <li className="menu-link"><a aria-label="repositories" href="https://github.com/orgs/enchufevirtual/repositories" target="_blank">GitHub</a></li>
    <li className="menu-link"><a aria-label="facebook" href="https://www.facebook.com/enchufevirtual" target="_blank">Facebook</a></li>
    <li className="menu-link"><a href="https://radio.enchufevirtual.com" aria-label="radio">Radio</a></li>
    <li>
      <select onChange={changeLanguage} value={language}  className="language">
        <option className="en" value="en">English</option>
        <option className="es" value="es">Spanish</option>
      </select>
    </li>
  </ul>
 );
}

export default HeaderSocial;
