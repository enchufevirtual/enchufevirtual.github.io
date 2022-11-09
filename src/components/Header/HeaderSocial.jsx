
import React, {useContext} from "react";
import { GlobalContext } from "@context/GlobalContext";

const HeaderSocial = () => {

  const { active } = useContext(GlobalContext);

 return (
  <ul className={active ? "Header_social transform" : "Header_social"}>
    <li className="menu-link"><a href="https://www.instagram.com/enchufevirtual" target="_blank">Instagram</a></li>
    <li className="menu-link"><a href="https://www.facebook.com/enchufevirtual" target="_blank">Facebook</a></li>
    <li className="menu-link"><a href="mailto:chendoec@live.com">Donate</a></li>
  </ul>
 ); 
}

export default HeaderSocial;