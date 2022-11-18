import React, { useState } from "react";


const Card = ({datos, id, description}) => {

  const [click, setClick] = useState(false);
  const [over, setOver] = useState(false);

  // Card Animation - click Over
  const handleMouseDown = () => ( setClick(true) );
  const handleMouseAll = () => ( setClick(false) );
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
      style={{transform: click ? styles.transform : over ? styles.transformOver: "none"}}
      id={id}
    >
        <img src={`assets/${datos.image}`} alt="imagen" />
        <div className="card-body">
          <h2>{datos.title}</h2>
          <p>{description?.substring(0, 70) + "..."}</p>
          <div className="buttons">
            <a href={datos.source} target="_blank">Source</a>
            <a href={datos.demo} target="_blank">Demo</a>
          </div>
        </div>
    </div>
  );
}

export default Card;
