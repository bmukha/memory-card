import { useState } from "react";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import "./styles/App.css";
import get10RandomColors from "./components/Colors";
import ColorsGrid from "./components/ColorsGrid";
import TryAgainButton from "./components/TryAgainButton";

export const App = () => {
  const [arrayOfColours, setArrayOfColours] = useState(get10RandomColors());
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [usedValues, setUsedValues] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [result, setResult] = useState("");

  const handleClick = (event) => {
    const newColor = event.target.firstChild.innerText;
    if (usedValues.includes(newColor) || usedValues.length === 15) {
      setResult(usedValues.length === 15 ? "won" : "lost");
      if (currentScore > highScore) {
        setHighScore(currentScore);
        setGameOver(true);
      }
    } else {
      setUsedValues((usedValues) => [...usedValues, newColor]);
      setCurrentScore((currentScore) => currentScore + 1);
      setArrayOfColours(get10RandomColors());
    }
  };

  const handleTryAgain = () => {
    setUsedValues([]);
    setCurrentScore(0);
    setGameOver(false);
    setResult("");
  };

  const conditionalReturn = gameOver ? (
    <div>
      <p>You {result}. Try again!</p>
      <TryAgainButton handleTryAgain={handleTryAgain} />
    </div>
  ) : (
    <ColorsGrid handleClick={handleClick} arrayOfColours={arrayOfColours} />
  );

  return (
    <main>
      <Header />
      <Scoreboard currentScore={currentScore} highScore={highScore} />
      {conditionalReturn}
    </main>
  );
};
