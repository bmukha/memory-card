import { useState, useEffect } from "react";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import "./styles/App.css";
import get10RandomColors from "./components/Colors";
import ColorsGrid from "./components/ColorsGrid";

export const App = () => {
  const [arrayOfColours, setArrayOfColours] = useState(get10RandomColors());

  useEffect(() => {
    console.log(arrayOfColours);
  });

  const handleClick = (event) => {
    console.log(event.target.firstChild.innerText);
  };

  return (
    <main>
      <Header />
      <Scoreboard />
      <ColorsGrid handleClick={handleClick} arrayOfColours={arrayOfColours} />
    </main>
  );
};
