// Elements
const boardElement = document.querySelector('.ticTacToe-board');
const playerOne = 'Player One';
const playerTwo = 'Player Two';
let activePlayer = playerOne;
const whichPlayerTitle = document.querySelector('.title h1');
const boardArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const row1 = [0, 1, 2];
const row2 = [3, 4, 5];
const row3 = [6, 7, 8];
const col1 = [0, 3, 6];
const col2 = [1, 4, 7];
const col3 = [2, 5, 8];
const d1 = [0, 4, 9];
const d2 = [2, 4, 6];

// Event Listeners
boardElement.addEventListener('click', updateBoard);

// Functions

function updateBoard(event) {
  const boxClicked = document.querySelector(`#${event.target.id}`);
  const idxClicked = parseInt(event.target.id.split('')[1]) - 1;
  console.log(idxClicked);
  console.log(boardArray);
  if (activePlayer === playerOne) {
    boxClicked.textContent = 'O';
    activePlayer = playerTwo;
    boardArray[idxClicked] = 1;
  } else {
    boxClicked.textContent = 'X';
    activePlayer = playerOne;
    boardArray[idxClicked] = -1;
  }
  whichPlayerTitle.textContent = `${activePlayer}'s Turn`;
  checkIfWinner(boardArray);
}

function checkIfWinner(board) {
  checkScores(board, row1);
  checkScores(board, row2);
  checkScores(board, row3);
  checkScores(board, col1);
  checkScores(board, col2);
  checkScores(board, col3);
  checkScores(board, d1);
  checkScores(board, d2);
}

function checkScores(board, idxs) {
  let currSum = 0;
  for (let idx of idxs) {
    currSum += board[idx];
  }
  if (currSum === -3) {
    celebrate(playerTwo);
  } else if (currSum === 3) {
    celebrate(playerOne);
  }
}

function celebrate(winner) {
  whichPlayerTitle.textContent = `${winner} won -- yay.`;
}
