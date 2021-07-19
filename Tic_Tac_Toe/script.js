// Restart game
document.getElementById("restart").addEventListener('click', function(){location.reload()})

function initializing() {
  const gridArea = document.getElementById("game-grid")

  for (let i = 0; i < 9; i++) {
    // Create gameboard
    let gridItem = document.createElement("div") 
    gridItem.id = i + 1
    gridItem.value = i + 1
    gridItem.classList.add("grid-item")
    gridItem.innerHTML = i + 1
    gridArea.appendChild(gridItem)
  }
}




initializing()