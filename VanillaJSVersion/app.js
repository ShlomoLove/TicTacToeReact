let move;
let board;


newGame = () => {
  board = [['', '', ''],
          ['', '', ''],
          ['', '', '']];

  move = 'X';

  for (square of document.getElementsByClassName('square')) {
    square.addEventListener('click', clickHandler);
    square.children[0].innerHTML = '';
  }
  document.getElementById('player').innerHTML = 'Current Player: X';
};

clickHandler = e => {
  let location = e.target.id; 
  let square = document.getElementById(location);
  let space = document.getElementById('space' + location);

  changeText(space, move);
  changeBoard(location, move);

  let winner = findWinner();
  if (winner) {
    filledSquare ();
    if (winner === 'X') {
      document.getElementById('player').innerHTML = 'Player One is the Best';
    } else if (winner === 'O') {
      document.getElementById('player').innerHTML = 'Player Two is the Best';
    } else if (winner === 'Tie') {
      document.getElementById('player').innerHTML = 'It\'s a tie, Play Again';
    }
    return 
  }
  togglePlayer();
  square.removeEventListener('click', clickHandler);
};

changeText = (space, move) => {
  space.innerHTML = move; 
};

findWinner = () => {
  let winningRows = [
    [board[0][0], board[0][1], board[0][2]],
    [board[1][0], board[1][1], board[1][2]],
    [board[2][0], board[2][1], board[2][2]],
    [board[0][0], board[1][0], board[2][0]],
    [board[0][1], board[1][1], board[2][1]],
    [board[0][2], board[1][2], board[2][2]],
    [board[0][0], board[1][1], board[2][2]],
    [board[2][0], board[1][1], board[2][0]],
  ];
  for(let i = 0; i < winningRows.length; i++) {
    if (winningRows[i].every(move => move === 'X')) {
      return 'X';
    } else if (winningRows[i].every(move => move === 'O')) {
      return 'O';
    }
  };
  if (board.every(row => {
    return row.every(square => {
      return square !== '';
    })
  })) {
    document.getElementById('player');
    filledSquare();
    return 'Tie';
  }
  return false;
};

changeBoard = (location, move) => {
  let row = parseInt(location[0]);
  let col = parseInt(location[1]);
  board[row][col] = move;
}

togglePlayer = () => {
  move = move === 'O' ? 'X' : 'O';
  document.getElementById('player').innerHTML = `Current Move ${move}`;
}

filledSquare = () => {
  for (square of document.getElementsByClassName('square')) {
    square.removeEventListener('click', clickHandler);
  }
};

newGame();

document.getElementById('reset').addEventListener('click', newGame);
