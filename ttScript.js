// Elements
const boardElement = document.querySelector('.ticTacToe-board');
const playerOne = 'Player One';
const playerTwo = 'Player Two';
let activePlayer = playerOne;

// Event Listeners
boardElement.addEventListener('click', updateBoard);

// Functions

function updateBoard(event) {
  const boxClicked = document.querySelector(`#${event.target.id}`);
  console.log(boxClicked);
}
