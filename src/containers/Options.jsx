import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Options = () => {

  const { changeCategory, globalValue, data } = useContext(GlobalContext);

  return (
    <div className="Options">
      <label>{ data.main.label }</label>
      <select onChange={changeCategory} value={globalValue}  className="categories">
        <option value="CATEGORIES">{ data.main.option }</option>
        <option className="option" value="FRONTEND">Frontend</option>
        <option className="option" value="BACKEND">Backend</option>
        <option className="option" value="LIBRARY">Library</option>
      </select>
    </div>
  );
}

export default Options;
