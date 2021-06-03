import React from "react";
import "../styles/Card.css";

const Card = (props) => {
  console.log("Received props: ", props);
  return (
    <div className="card">
      <div style={{ backgroundColor: props.colors.hex }}></div>
      <h2>{props.colors.name}</h2>
    </div>
  );
};

export default Card;
