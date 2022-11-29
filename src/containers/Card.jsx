import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";


const Card = ({data, id}) => {

  const { language } = useContext(GlobalContext);

  const [mount, setMount] = useState(false);
  const [over, setOver] = useState(false);

  // Card Animation - mount - mouse - click - over
  const handleMouseDown = () => ( setMount(true) );
  const handleMouseAll = () => ( setMount(false) );
  const handleMouseOver = () => ( setOver(true) );
  const handleMouseOut = () => ( setOver(false) );

  const styles = {
    transform: "translateY(4px) scale(0.95) translateZ(0px)",
    transformOver: "translateY(4px) scale(1.01) translateZ(0px)",
  }

  return (
    <div
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseAll}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseAll}
      onMouseLeave={handleMouseAll}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className="card"
      style={{transform: mount ? styles.transform : over ? styles.transformOver: "none"}}
      id={id}
    >
        <img src={`assets/${data.image}`} alt="imagen" />
        <div className="card-body">
          <h2>{data.title}</h2>
          <p>{
              language == 'es'
                ? (data.description_es?.substring(0, 70) + "...")
                : (data.description_en?.substring(0, 70) + "...")
              }
          </p>
          <div className="buttons">
            <a href={data.source} target="_blank">Source</a>
            <a href={data.demo} target="_blank">Demo</a>
          </div>
        </div>
    </div>
  );
}

export default Card;
