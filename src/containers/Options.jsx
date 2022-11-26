import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Options = () => {

  const { changeCategory, globalValue, language } = useContext(GlobalContext);

  const en = 'Categories';
  const es = 'Categorías';

  const category = language == 'es' ? (es) : (en);

  return (
    <div className="Options">
      <label>{ category }</label>
      <select onChange={changeCategory} value={globalValue}  className="categories">
        <option value="CATEGORIES">{ language == 'es' ? "Todos" : "All" }</option>
        <option className="option" value="FRONTEND">Frontend</option>
        <option className="option" value="BACKEND">Backend</option>
        <option className="option" value="LIBRARY">Library</option>
      </select>
    </div>
  );
}

export default Options;
