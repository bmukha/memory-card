import { useState, useEffect } from "react";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import "./styles/App.css";
import randomHex from "random-hex";

export const App = () => {
  const fillArrayWithRandomHexValues = () => {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(randomHex.generate());
    }
    return arr;
  };

  const [arrayOfColours, setArrayOfColours] = useState(
    fillArrayWithRandomHexValues()
  );

  // prepareColoredCards = 

  useEffect(() => {
    console.log(arrayOfColours);
  });

  return (
    <main>
      <Header />
      <Scoreboard />
      I'm working
    </main>
  );
};
