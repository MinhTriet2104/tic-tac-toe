const cellElements = document.querySelectorAll("[data-cell]");
const boardElemnt = document.getElementById("board");
const btnRestart = document.getElementById("btnRestart");
const messageElement = document.getElementById("message");
const gameMessage = document.getElementById("gameMessage");
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// Restart game event
btnRestart.addEventListener("click", () => {
  cellElements.forEach(cell => {
    boardElemnt.classList.remove("o");
    boardElemnt.classList.add("x");
    cell.classList.remove("x");
    cell.classList.remove("o");
    gameMessage.classList.remove("show");
  });
});

// Event for cell
cellElements.forEach(cell =>
  cell.addEventListener("click", () => {
    cell.classList.add(boardElemnt.classList[1]);
    const turn = boardElemnt.classList[1];
    if (turn === "x") {
      boardElemnt.classList.remove("x");
      boardElemnt.classList.add("o");
    } else {
      boardElemnt.classList.remove("o");
      boardElemnt.classList.add("x");
    }
    if (checkWin(turn)) {
      messageElement.innerText = `${turn.toUpperCase()}'s Wins`;
      gameMessage.classList.add("show");
    }
  })
);

function checkWin(turn) {
  return winConditions.some(condition => {
    return condition.every(index => {
      return cellElements[index].classList.contains(turn);
    });
  });
}
