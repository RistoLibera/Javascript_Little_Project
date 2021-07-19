// Restart game
document.getElementById("restart").addEventListener('click', function(){location.reload()})

// Gameboard module
const gameArea = (() => {
  const gridArea = document.getElementById("game-grid")
  const board = []

  const init = () => {
    for (let i = 0; i < 9; i++) {
      // Create gameboard
      let gridItem = document.createElement("p") 
      gridItem.id = i + 1
      gridItem.classList.add("grid-item")
      gridItem.innerHTML = " "
      gridArea.appendChild(gridItem)
      board.push(gridItem)
    }  
  }

  return {
    init,
    board
  }
})()

// Player factory
const Player = (name) => {
  let playerMoves = []

  return {
    name,
    playerMoves
  }
}

// Player form
const playerForm = (() => {

})()
// Gameboard interation
const gameBoard = (() => {
  gameArea.init()

  gameArea.board.forEach((p) => {
    p.addEventListener("click", (e) => {
      gameBlock = e.target
      if (gameBlock.innerHTML === "X" || gameBlock.innerHTML === "O") {
        alert("Taken!")
      } else if (gameBlock.innerHTML === " " && gameFlow.turn === "player-one") {
        gameBlock.innerHTML = "X"
        gameFlow.turnNumber++
        gameFlow.turn = "player-two"
      } else {
        gameBlock.innerHTML = "O"
        gameFlow.turnNumber++
        gameFlow.turn = "player-one"
      }
    })
  })

})()

const gameFlow = (() => {
  let turn = "player-one"
  let turnNumber = 1
  let players = []

  return {
    turn,
    turnNumber,
    players
  }
})()




