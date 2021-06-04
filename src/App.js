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

  console.log("App component rendered...");

  if (currentScore > highScore) {
    setHighScore(currentScore);
  }

  const handleClick = (event) => {
    const newColor = event.target.firstChild.innerText;
    if (usedValues.includes(newColor)) {
      setGameOver(true);
    } else {
      setCurrentScore((currentScore) => currentScore + 1);
      setUsedValues((usedValues) => [...usedValues, newColor]);
      setArrayOfColours(get10RandomColors());
    }
  };

  const handleTryAgain = () => {
    setUsedValues([]);
    setCurrentScore(0);
    setGameOver(false);
  };

  const conditionalReturn =
    gameOver || currentScore === 5 ? (
      <div className="result">
        <p>You {currentScore === 5 ? "won" : "lost"}. Try again!</p>
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
