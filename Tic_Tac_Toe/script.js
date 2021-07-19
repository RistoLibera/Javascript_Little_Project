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
  const modal = document.getElementById("modal")
  const form = document.getElementById("form")
  const playerOneName = document.getElementById("nameOne")
  const playerTwoName = document.getElementById("nameTwo")

  const handleForm = (event) => {
    modal.style.display = "none"
    event.preventDefault();
  }

  const createPlayers = () => {
    let playerOne = Player(playerOneName.value)
    let playerTwo = Player(playerTwoName.value)

    gameFlow.players.push(playerOne)
    gameFlow.players.push(playerTwo)
    // Hide the form
  }

  const updateName = () => {
    let playerOneHTML = document.getElementById("player-one")
    let playerTwoHTML = document.getElementById("player-two")

    let playerOneName = gameFlow.players[0]
    let playerTwoName = gameFlow.players[1]

    playerOneHTML.textContent = "Player-One: " + playerOneName.name
    playerTwoHTML.textContent = "Player-two: " + playerTwoName.name
  }

  form.addEventListener("submit", handleForm)
  form.addEventListener("submit", createPlayers)
  form.addEventListener("submit", updateName)

  return {
    createPlayers
  }
})()

// Gameboard interation
const gameBoard = (() => {
  gameArea.init()
  playerForm.createPlayers
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




