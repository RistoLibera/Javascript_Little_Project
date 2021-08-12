import React from 'react'

const Scoreboard = (props) => {
  let score = props.score;
  let bestScore = props.bestScore;

  return (
    <div className="score-room">
      <p id="current">Current Score: {score}</p>
      <p id="best">Best Score: {bestScore}</p>
    </div>
  );
}

export default Scoreboard