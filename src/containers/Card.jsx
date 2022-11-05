import React, { useState } from "react";

const Card = ({data}) => {
  const [click, setClick] = useState(false);
  const [over, setOver] = useState(false);

  const handleMouseDown = () => {
    setClick(true);
  }
  const handleMouseAll = () => {
    setClick(false);
  }
  const handleMouseOver = () => {
    setOver(true);
  }
  const handleMouseOut = () => {
    setOver(false);
  }
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
    >
        <img src={`assets/${data.image}`} alt="imagen" />
        <div className="card-body">
          <h2>{data.title}</h2>
          <p>{data.description.substring(0, 70) + '...'}</p>
          <div className="buttons">
            <a href={data.source} target="_blank">Source</a>
            <a href={data.demo} target="_blank">Demo</a>
          </div>
        </div>
    </div>
  );
}

export default Card;