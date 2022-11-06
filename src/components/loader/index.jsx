import React, { useState, useContext } from "react";
import { GlobalContext } from "@context/GlobalContext";

const Loader = () => {
  const { load } = useContext(GlobalContext);

  const [style, setStyles] = useState({display: ''});

  if(load) {
    setTimeout(() => {
      setStyles({display: "none"});
    }, 1000);
  }

  return (
    <div className={load ? "loading loading-end" : "loading"} style={style}>
      <div className={load ? "load-circle opacity" : "load-circle"}></div>
    </div>
  );
}

export default Loader;