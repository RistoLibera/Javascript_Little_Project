import React from 'react'

const Scoreboard = (props) => {
  let score = props.currentScore
  let bestScore = props.bestScore

  return (
    <div className="score-room">
      <p>Current Score: {score}</p>
      <p>Best Score: {bestScore}</p>
    </div>
  )
}

export {
  Scoreboard
}