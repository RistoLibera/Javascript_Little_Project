// Restart game
document.getElementById("restart").addEventListener('click', function(){location.reload()})

const gameBoard = (() => {
  const gridArea = document.getElementById("game-grid")
  const board = []

  const init = () => {
    for (let i = 0; i < 9; i++) {
      // Create gameboard
      let gridItem = document.createElement("div") 
      gridItem.id = i + 1
      gridItem.classList.add("grid-item")
      gridItem.innerHTML = i + 1
      gridArea.appendChild(gridItem)
      board.push(gridItem)
    }  
  }

  return {
    init,
    board
  }
})()



gameBoard.init()