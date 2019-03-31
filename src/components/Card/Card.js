import React from "react";
import "./Card.css";

function Card(props) {
  const { src, alt } = props;
  return <img src={src} className="card" alt={alt} {...props} />;
}

export default Card;
