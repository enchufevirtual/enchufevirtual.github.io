"use client"

import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

import HeaderSocial from "@/components/Header/HeaderSocial";

const MenuBtn = () => {

  const { handleMenu, active } = useContext(GlobalContext);

 return (
  <>
  <li id="MenuBtnGrid" onClick={handleMenu} className={active ? "MenuBtn open" : "MenuBtn"}>
    <div className="MenuBtn_burger"></div>
  </li>
  </>

 );
}

export default MenuBtn;
