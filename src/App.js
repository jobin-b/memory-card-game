import React, { useEffect, useState } from "react";
import Cards from "./components/list";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);


  const incrScores = () => {
    setScore(score + 1);
  };

  const endGames = () => {
    setScore(0);
  };

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score)
    };
  }, [score]);

  return (
    <div>
      <div className="infoSection">
        <h1 id="title">Memory Card Game</h1>
        <p>Do not click on the same image twice. Each unique card clicked awards one point. Clicking the same card again resets the game.</p>
        <p>Score: {score}    Best Score: {bestScore}</p>
      </div>
      <Cards incrScore={incrScores} endGame={endGames}/>
    </div>
  );
}

export default App;
