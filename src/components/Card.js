import React from "react";
import "../styles/Card.css";

const Card = (props) => {
  console.log("Received props: ", props);
  return (
    <div
      className="card"
      style={{
        boxShadow: `0 0 7px 5px ${props.colors.hex}`,
        backgroundColor: `${props.colors.hex}`,
      }}
    >
      <p>{props.colors.name}</p>
    </div>
  );
};

export default Card;
