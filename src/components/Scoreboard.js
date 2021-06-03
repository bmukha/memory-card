import "../styles/Scoreboard.css";

const Scoreboard = (props) => (
  <div className="scoreboard">
    <div>Current score: {props.currentScore}</div>
    <div>High score: {props.highScore}</div>
  </div>
);

export default Scoreboard;
