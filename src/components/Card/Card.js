import React from "react";
import "./Card.css";

function Card(props) {
  const { src, alt, id, handleClick } = props;
  return (
    <img
      className="card"
      src={src}
      alt={alt}
      onClick={() => handleClick(id)}
      id={id}
    />
  );
}

export default Card;
