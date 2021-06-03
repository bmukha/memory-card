import "../styles/ColorsGrid.css";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";

const ColorsGrid = (props) => {
  const coloredCards = props.arrayOfColours.map((item) => {
    return (
      <Card handleClick={props.handleClick} colors={item} key={uuidv4()} />
    );
  });
  return <div className="colors-grid">{coloredCards}</div>;
};

export default ColorsGrid;
