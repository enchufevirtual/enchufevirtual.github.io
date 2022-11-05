import React, { useState } from "react";

import HeaderSocial from "@components/Header/HeaderSocial";

const MenuBtn = () => {

  const [menu, setMenu] = useState(false);

  const HandleMenu = () => {
    return (
      setMenu(!menu)
    );
  }

 return (
  <>
  <div onClick={HandleMenu} className={menu ? "MenuBtn open" : "MenuBtn"}>
    <div className="MenuBtn_burger"></div>
  </div>
  {menu ? <HeaderSocial /> : null}
  </>
  
 ); 
}

export default MenuBtn;