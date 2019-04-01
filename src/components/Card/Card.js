import React from "react";
import "./Card.css";

function Card(props) {
  const { src, alt } = props;
  return <img className="card" src={src} alt={alt} {...props} />;
}

export default Card;
