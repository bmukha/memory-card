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

  return (
    <main>
      <Header />
      <Scoreboard />
      <ColorsGrid arrayOfColours={arrayOfColours}/>
    </main>
  );
};
