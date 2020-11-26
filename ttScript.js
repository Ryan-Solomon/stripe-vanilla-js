// Elements
const boardElement = document.querySelector('.ticTacToe-board');
const playerOne = 'Player One';
const playerTwo = 'Player Two';
let activePlayer = playerOne;
const whichPlayerTitle = document.querySelector('.title h1');

// Event Listeners
boardElement.addEventListener('click', updateBoard);

// Functions

function updateBoard(event) {
  const boxClicked = document.querySelector(`#${event.target.id}`);
  if (activePlayer === playerOne) {
    boxClicked.textContent = 'O';
    activePlayer = playerTwo;
  } else {
    boxClicked.textContent = 'X';
    activePlayer = playerOne;
  }
  whichPlayerTitle.textContent = `${activePlayer}'s Turn`;
}
