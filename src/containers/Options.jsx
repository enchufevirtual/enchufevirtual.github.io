import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Options = () => {

  const { changeCategory, category } = useContext(GlobalContext);

  return (
    <div className="Options">
      <select onChange={changeCategory} value={category}  className="categories">
        <option value="CATEGORIES">All Categories</option>
        <option className="option" value="FRONTEND">Frontend</option>
        <option className="option" value="BACKEND">Backend</option>
        <option className="option" value="LIBRARY">Library</option>
      </select>
    </div>
  );
}


export default Options;
