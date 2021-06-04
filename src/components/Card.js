import React from "react";
import "../styles/Card.css";
import invert from "invert-color";

const Card = (props) => {

  // console.log("Card component rendered...");

  return (
    <div
      onClick={props.handleClick}
      className="card"
      style={{
        boxShadow: `0 0 7px 5px ${props.colors.hex}`,
        backgroundColor: `${props.colors.hex}`,
        border: `3px solid ${invert(props.colors.hex)}`
      }}
    >
      <p style={{ color: `${invert(props.colors.hex)}` }}>
        {props.colors.name}
      </p>
    </div>
  );
};

export default Card;
